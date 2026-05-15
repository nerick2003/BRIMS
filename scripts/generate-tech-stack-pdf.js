/**
 * Generates docs/BRIMS-Tech-Stack.pdf from the project technology overview.
 */
const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');

const outputDir = path.join(__dirname, '..', 'docs');
const outputPath = path.join(outputDir, 'BRIMS-Tech-Stack.pdf');

const MARGIN = 20;
const PAGE_WIDTH = 210;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const LINE_HEIGHT = 6;
const TITLE_SIZE = 18;
const H2_SIZE = 13;
const BODY_SIZE = 10;
const SMALL_SIZE = 9;

function addWrappedText(doc, text, x, y, maxWidth, lineHeight = LINE_HEIGHT) {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}

function ensureSpace(doc, y, needed = 25) {
  const pageHeight = doc.internal.pageSize.getHeight();
  if (y + needed > pageHeight - MARGIN) {
    doc.addPage();
    return MARGIN + 10;
  }
  return y;
}

function addSectionTitle(doc, title, y) {
  y = ensureSpace(doc, y, 20);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(H2_SIZE);
  doc.setTextColor(30, 64, 120);
  doc.text(title, MARGIN, y);
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(BODY_SIZE);
  return y + LINE_HEIGHT + 2;
}

function addBullet(doc, text, y, indent = 0) {
  y = ensureSpace(doc, y, 15);
  const bulletX = MARGIN + indent;
  const textX = bulletX + 4;
  doc.setFontSize(BODY_SIZE);
  doc.text('•', bulletX, y);
  return addWrappedText(doc, text, textX, y, CONTENT_WIDTH - indent - 4);
}

function addTableRow(doc, col1, col2, y, isHeader = false) {
  y = ensureSpace(doc, y, 12);
  const col1Width = 52;
  const col2X = MARGIN + col1Width;
  const col2Width = CONTENT_WIDTH - col1Width;

  if (isHeader) {
    doc.setFont('helvetica', 'bold');
    doc.setFillColor(240, 244, 248);
    doc.rect(MARGIN, y - 5, CONTENT_WIDTH, 8, 'F');
  } else {
    doc.setFont('helvetica', 'normal');
  }

  doc.setFontSize(BODY_SIZE);
  doc.text(col1, MARGIN + 2, y);
  const nextY = addWrappedText(doc, col2, col2X, y, col2Width);
  doc.setDrawColor(220, 220, 220);
  doc.line(MARGIN, nextY + 1, MARGIN + CONTENT_WIDTH, nextY + 1);
  return nextY + 3;
}

function buildPdf() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  let y = MARGIN;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(TITLE_SIZE);
  doc.setTextColor(20, 50, 100);
  doc.text('BRIMS Technology Stack', MARGIN, y);
  y += 10;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(SMALL_SIZE);
  doc.setTextColor(80, 80, 80);
  doc.text('Barangay Resident Information Management System', MARGIN, y);
  y += 5;
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, MARGIN, y);
  doc.setTextColor(0, 0, 0);
  y += 10;

  y = addWrappedText(
    doc,
    'BRIMS is a full-stack web application for barangay staff and residents to manage profiles, households, certificates, and requests. This document summarizes the technologies used in the project.',
    MARGIN,
    y,
    CONTENT_WIDTH
  );
  y += 6;

  y = addSectionTitle(doc, 'Core Platform', y);
  y = addTableRow(doc, 'Frontend', 'Angular 21 (standalone components, lazy routes), TypeScript 5.9, SCSS', y, true);
  y = addTableRow(doc, 'Runtime', 'Node.js v18+ (development, build tooling, and backend)', y);
  y = addTableRow(doc, 'Package manager', 'npm', y);
  y += 4;

  y = addSectionTitle(doc, 'Frontend (Angular App)', y);
  const frontendItems = [
    'Angular ecosystem: Core, Router, Forms, Animations, Angular CDK',
    'Reactive programming: RxJS 7.8',
    'State: Angular signals (project conventions)',
    'Database (client): Firebase 12 + AngularFire with Cloud Firestore as primary datastore',
    'Auth / passwords: bcryptjs (hashed passwords stored in Firestore)',
    'QR scanning: @zxing/ngx-scanner (camera-based QR codes)',
    'Charts / reports: Chart.js + ng2-charts',
    'Maps: Leaflet (household and geographic views)',
    'PDF / export: jsPDF, html2canvas',
    'UI / UX: SweetAlert2, GSAP (animations), Three.js (3D where used)',
    'Optional demo API: json-server (mock REST from server/db.json)',
  ];
  for (const item of frontendItems) {
    y = addBullet(doc, item, y);
  }
  y += 4;

  y = addSectionTitle(doc, 'Backend (backend/)', y);
  const backendItems = [
    'Node.js + Express 4',
    'CORS, dotenv, multer (file uploads)',
    'SMS: Twilio',
    'Email: Nodemailer (SMTP)',
    'Development: nodemon',
  ];
  for (const item of backendItems) {
    y = addBullet(doc, item, y);
  }
  y = addWrappedText(
    doc,
    'Default URLs: Angular dev server http://localhost:4200; notification API http://localhost:4000.',
    MARGIN,
    y,
    CONTENT_WIDTH
  );
  y += 6;

  y = addSectionTitle(doc, 'Data & Configuration', y);
  const dataItems = [
    'Primary database: Google Firebase / Cloud Firestore',
    'Runtime config: src/assets/config.json (Firebase + API URL; gitignored)',
    'Seeding: firebase-admin + scripts/seed-firestore.js for demo data',
    'Abstraction: IDatabaseService with Firestore (active), local storage, and JSON Server implementations',
  ];
  for (const item of dataItems) {
    y = addBullet(doc, item, y);
  }
  y += 4;

  y = addSectionTitle(doc, 'Architecture Patterns', y);
  const archItems = [
    'Route guards for authentication and role-based access (Admin, Staff, Resident)',
    'Standalone components and lazy-loaded feature routes',
    'Swappable data layer via dependency injection (DATABASE_SERVICE)',
  ];
  for (const item of archItems) {
    y = addBullet(doc, item, y);
  }
  y += 4;

  y = addSectionTitle(doc, 'Not Used in This Repository', y);
  const notUsed = [
    'React or Next.js (Angular-only frontend)',
    'Docker / Kubernetes deployment configs in the repo root',
    'Azure Pipelines YAML in the scanned project root',
  ];
  for (const item of notUsed) {
    y = addBullet(doc, item, y);
  }
  y += 6;

  y = ensureSpace(doc, y, 20);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(BODY_SIZE);
  doc.setFillColor(240, 248, 255);
  doc.rect(MARGIN, y - 4, CONTENT_WIDTH, 14, 'F');
  doc.setTextColor(20, 50, 100);
  y = addWrappedText(
    doc,
    'Summary: Angular 21 + TypeScript + SCSS on the frontend; Firestore via Firebase/AngularFire for data; a small Express backend for SMS/email (Twilio + Nodemailer); plus Leaflet, Chart.js, and ZXing for maps, charts, and QR scanning.',
    MARGIN + 3,
    y,
    CONTENT_WIDTH - 6
  );

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(
      `BRIMS Tech Stack — Page ${i} of ${pageCount}`,
      PAGE_WIDTH / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outputPath, buffer);
  return outputPath;
}

try {
  const filePath = buildPdf();
  console.log(`PDF created: ${filePath}`);
} catch (err) {
  console.error('Failed to generate PDF:', err.message);
  process.exit(1);
}
