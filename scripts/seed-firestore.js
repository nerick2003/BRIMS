/**
 * Seeds Firestore with demo users, resident, and roles for local/staging use.
 *
 * Authentication (tried in order):
 *   1. serviceAccountKey.json in project root (or GOOGLE_APPLICATION_CREDENTIALS)
 *   2. Firebase CLI login (firebase login) — used automatically if the key is invalid
 *
 * Usage:
 *   npm run seed:firestore
 *   npm run seed:firestore -- --cli          # Firebase CLI login only
 *   npm run seed:firestore -- --service-account  # service account only
 *
 * Re-running is safe (merge). Existing fields on documents are preserved.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

function hashPassword(plain) {
  return bcrypt.hashSync(plain, SALT_ROUNDS);
}

const REPO_ROOT = path.join(__dirname, '..');
const SERVICE_ACCOUNT_PATH = path.join(REPO_ROOT, 'serviceAccountKey.json');
const CONFIG_PATH = path.join(REPO_ROOT, 'src', 'assets', 'config.json');
const CONFIG_EXAMPLE_PATH = path.join(REPO_ROOT, 'src', 'assets', 'config.example.json');

const FIREBASE_CLI_CLIENT_ID =
  '563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com';
const FIREBASE_CLI_CLIENT_SECRET = 'j9iVZfS8kkCEFUPaAeJV0sAi';

const args = process.argv.slice(2);
const forceCli = args.includes('--cli');
const forceServiceAccount = args.includes('--service-account');

const DEMO_USERS = [
  {
    id: '1',
    name: 'Staff User',
    email: 'staff@barangay.gov',
    role: 'Staff',
    status: 'Active',
    lastLogin: 'Jan 29, 2026',
    createdAt: 'Jan 1, 2025',
    password: hashPassword('staff123'),
  },
  {
    id: '4',
    name: 'Admin User',
    email: 'admin@barangay.gov',
    role: 'Admin',
    status: 'Active',
    lastLogin: 'Jan 29, 2026',
    createdAt: 'Dec 1, 2024',
    password: hashPassword('admin123'),
  },
];

const DEMO_RESIDENT = {
  id: '1',
  residentId: 'BRGY-1001',
  name: 'Juan Dela Cruz',
  age: 44,
  gender: 'Male',
  purok: 'Purok 2',
  birthdate: 'January 15, 1980',
  placeOfBirth: 'Villanueva, Misamis Oriental',
  birthCertificateNumber: 'BC-1980-001234',
  bloodType: 'O+',
  civilStatus: 'Single',
  nationality: 'Filipino',
  contact: '0917 123 4557',
  email: 'resident@email.com',
  password: hashPassword('resident123'),
  address: 'Purok 2, Barangay Name, City Name',
};

const DEMO_ROLES = [
  {
    id: '1',
    name: 'Admin',
    description:
      'Full system access. Can manage users, roles, residents, households, requests, broadcasts, audit log, archives, and system settings.',
    permissions: [
      'Manage Users',
      'Manage Roles',
      'View All Reports',
      'Manage Residents',
      'Manage Households',
      'Approve & Process Requests',
      'System Settings',
      'SMS & Email Broadcast',
      'View Audit Log',
      'Manage Archives',
      'QR Scanner',
    ],
    userCount: 1,
  },
  {
    id: '2',
    name: 'Staff',
    description:
      'Barangay staff. Can manage residents and households, process requests, view reports, and use QR scanner.',
    permissions: [
      'View Reports',
      'Manage Residents',
      'Manage Households',
      'Process Requests',
      'QR Scanner',
    ],
    userCount: 1,
  },
  {
    id: '3',
    name: 'Resident',
    description:
      'Barangay resident. Can view own profile, request certificates, track requests, view resident reports, and update profile/settings.',
    permissions: [
      'View Own Profile',
      'Request Certificates',
      'View Own Requests',
      'View Resident Reports',
      'Update Profile & Settings',
    ],
    userCount: 1,
  },
];

function readProjectId() {
  const configPath = fs.existsSync(CONFIG_PATH) ? CONFIG_PATH : CONFIG_EXAMPLE_PATH;
  if (!fs.existsSync(configPath)) {
    throw new Error(
      `Missing ${CONFIG_PATH}. Copy src/assets/config.example.json to config.json and set firebase.projectId.`,
    );
  }
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const projectId = config?.firebase?.projectId;
  if (!projectId || typeof projectId !== 'string') {
    throw new Error(`firebase.projectId not set in ${configPath}`);
  }
  return projectId;
}

function normalizeServiceAccount(raw) {
  const serviceAccount = { ...raw };
  if (typeof serviceAccount.private_key === 'string') {
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
  }
  return serviceAccount;
}

function loadServiceAccount() {
  const credentialPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || SERVICE_ACCOUNT_PATH;
  if (!fs.existsSync(credentialPath)) {
    return null;
  }
  return normalizeServiceAccount(JSON.parse(fs.readFileSync(credentialPath, 'utf8')));
}

function getFirebaseCliConfigPath() {
  const candidates = [
    path.join(process.env.USERPROFILE || '', '.config', 'configstore', 'firebase-tools.json'),
    path.join(process.env.APPDATA || '', 'configstore', 'firebase-tools.json'),
  ];
  return candidates.find((p) => p && fs.existsSync(p)) || null;
}

function loadFirebaseCliAuthorizedUser() {
  const configPath = getFirebaseCliConfigPath();
  if (!configPath) {
    return null;
  }
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const refreshToken = config?.tokens?.refresh_token;
  if (!refreshToken) {
    return null;
  }
  return {
    type: 'authorized_user',
    client_id: FIREBASE_CLI_CLIENT_ID,
    client_secret: FIREBASE_CLI_CLIENT_SECRET,
    refresh_token: refreshToken,
  };
}

async function verifyServiceAccount(serviceAccount) {
  const credential = admin.credential.cert(serviceAccount);
  await credential.getAccessToken();
  return credential;
}

function initWithCredential(credential, projectId) {
  if (admin.apps.length === 0) {
    admin.initializeApp({ credential, projectId });
  }
  return admin.firestore();
}

async function initFirestore() {
  const projectId = readProjectId();

  if (forceCli) {
    return initWithFirebaseCli(projectId);
  }

  if (!forceServiceAccount) {
    const serviceAccount = loadServiceAccount();
    if (serviceAccount) {
      try {
        const credential = await verifyServiceAccount(serviceAccount);
        const resolvedProjectId = serviceAccount.project_id || projectId;
        console.log('Auth: service account (serviceAccountKey.json)\n');
        return initWithCredential(credential, resolvedProjectId);
      } catch (err) {
        const msg = err?.message || String(err);
        if (
          msg.includes('invalid_grant') ||
          msg.includes('Invalid JWT') ||
          msg.includes('UNAUTHENTICATED')
        ) {
          console.warn(
            'Warning: serviceAccountKey.json is invalid or revoked (Invalid JWT / invalid_grant).'
          );
          console.warn('Falling back to Firebase CLI login...\n');
        } else {
          throw err;
        }
      }
    }
  } else {
    const serviceAccount = loadServiceAccount();
    if (!serviceAccount) {
      throw new Error(`Missing service account file: ${SERVICE_ACCOUNT_PATH}`);
    }
    const credential = await verifyServiceAccount(serviceAccount);
    console.log('Auth: service account (serviceAccountKey.json)\n');
    return initWithCredential(credential, serviceAccount.project_id || projectId);
  }

  return initWithFirebaseCli(projectId);
}

function initWithFirebaseCli(projectId) {
  const authorizedUser = loadFirebaseCliAuthorizedUser();
  if (!authorizedUser) {
    throw new Error(
      'Firebase CLI is not logged in.\n' +
        '  Run: firebase login\n' +
        '  Or fix serviceAccountKey.json (Firebase Console → Service accounts → Generate new private key).'
    );
  }

  const adcPath = path.join(os.tmpdir(), `brims-seed-adc-${process.pid}.json`);
  fs.writeFileSync(adcPath, JSON.stringify(authorizedUser));
  process.env.GOOGLE_APPLICATION_CREDENTIALS = adcPath;

  const configPath = getFirebaseCliConfigPath();
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const email = config?.user?.email || 'Firebase CLI user';

  console.log(`Auth: Firebase CLI (${email})\n`);

  return initWithCredential(admin.credential.applicationDefault(), projectId);
}

async function seedCollection(db, collectionName, items) {
  const batch = db.batch();
  for (const item of items) {
    const ref = db.collection(collectionName).doc(item.id);
    batch.set(ref, item, { merge: true });
  }
  await batch.commit();
  console.log(`  ✓ ${collectionName}: ${items.length} document(s)`);
}

async function main() {
  console.log('BRIMMS Firestore seed — demo users, resident, and roles\n');

  const db = await initFirestore();
  const projectId = admin.app().options.projectId;
  console.log(`Project: ${projectId}\n`);

  await seedCollection(db, 'users', DEMO_USERS);
  await seedCollection(db, 'residents', [DEMO_RESIDENT]);
  await seedCollection(db, 'roles', DEMO_ROLES);

  console.log('\nDone. Demo logins (change passwords after first login in production):');
  console.log('  Admin:    admin@barangay.gov    / admin123');
  console.log('  Staff:    staff@barangay.gov    / staff123');
  console.log('  Resident: resident@email.com    / resident123');
}

main().catch((err) => {
  console.error('Seed failed:', err.message || err);
  process.exit(1);
});
