import {
  provideCharts,
  withDefaultRegisterables
} from "./chunk-XVBOCBM3.js";
import {
  NavigationEnd,
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-SCD2KLNQ.js";
import {
  HttpClient,
  provideHttpClient,
  withInterceptors
} from "./chunk-UKN232ML.js";
import {
  AuthService,
  DATABASE_SERVICE,
  ErrorHandlerService
} from "./chunk-EMIWMFU5.js";
import {
  NotificationService
} from "./chunk-BPYJUQPN.js";
import {
  Component,
  DatePipe,
  ErrorHandler,
  Injectable,
  NgClass,
  Pipe,
  catchError,
  inject,
  map,
  of,
  provideZoneChangeDetection,
  retry,
  setClassMetadata,
  switchMap,
  throwError,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction5,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ISBYAA2X.js";
import {
  __spreadValues
} from "./chunk-YP43Q66R.js";

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn)
    return true;
  router.navigate(["/login"]);
  return false;
};

// src/app/guards/role.guard.ts
function findInRoute(route, key) {
  if (!route)
    return void 0;
  if (route.data && route.data[key])
    return route.data[key];
  return findInRoute(route.parent, key);
}
function findRequiredRole(route) {
  if (!route)
    return void 0;
  if (route.firstChild) {
    const child = findRequiredRole(route.firstChild);
    if (child)
      return child;
  }
  return route.data?.["requiredRole"];
}
var roleGuard = (_route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const user = auth.currentUser;
  const root = state.root;
  const firstChild = root.firstChild;
  const requiredRole = findRequiredRole(firstChild ?? root);
  const areaRole = findInRoute(firstChild ?? root, "role");
  if (requiredRole === "admin") {
    if (user?.role === "admin")
      return true;
    router.navigate(["/staff"]);
    return false;
  }
  if (areaRole === "admin") {
    if (user?.role === "admin")
      return true;
    router.navigate(["/staff"]);
    return false;
  }
  if (areaRole === "staff") {
    if (user?.role === "admin" || user?.role === "staff")
      return true;
    router.navigate(["/resident"]);
    return false;
  }
  if (areaRole === "resident") {
    if (user?.role === "resident")
      return true;
    router.navigate(["/staff"]);
    return false;
  }
  router.navigate(["/login"]);
  return false;
};

// src/app/app.routes.ts
var adminStaffSharedChildren = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", loadComponent: () => import("./chunk-OQJRRCYI.js").then((m) => m.StaffDashboardComponent) },
  { path: "residents", loadComponent: () => import("./chunk-XOTS3VO5.js").then((m) => m.ResidentsListComponent) },
  { path: "residents/add", loadComponent: () => import("./chunk-TZ5ALNCB.js").then((m) => m.AddResidentComponent) },
  { path: "residents/:id", loadComponent: () => import("./chunk-NELCDWUM.js").then((m) => m.ResidentProfileComponent) },
  { path: "households", loadComponent: () => import("./chunk-TCEC24SH.js").then((m) => m.HouseholdsComponent) },
  { path: "households/map", loadComponent: () => import("./chunk-R6YB2AXV.js").then((m) => m.HouseholdMapComponent) },
  { path: "households/add", loadComponent: () => import("./chunk-CKHHBYFE.js").then((m) => m.AddHouseholdComponent) },
  { path: "households/:id/edit", loadComponent: () => import("./chunk-TWN25DIL.js").then((m) => m.EditHouseholdComponent) },
  { path: "households/:id", loadComponent: () => import("./chunk-PJCRJNXH.js").then((m) => m.HouseholdDetailComponent) },
  { path: "reports", loadComponent: () => import("./chunk-ZXQYTICA.js").then((m) => m.ReportsComponent) },
  { path: "requests/:id", loadComponent: () => import("./chunk-Y3OGLCAL.js").then((m) => m.RequestDetailComponent) },
  { path: "requests", loadComponent: () => import("./chunk-ZDE3I5FF.js").then((m) => m.RequestsComponent) },
  { path: "qr-scanner", loadComponent: () => import("./chunk-O34PTCYC.js").then((m) => m.QrScannerComponent) },
  { path: "profile", loadComponent: () => import("./chunk-Q3TZCGPL.js").then((m) => m.StaffProfileComponent) }
];
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadComponent: () => import("./chunk-SLFFRVGJ.js").then((m) => m.LoginComponent) },
  { path: "contact", loadComponent: () => import("./chunk-DBJTEKSS.js").then((m) => m.ContactComponent) },
  { path: "forgot-password", loadComponent: () => import("./chunk-ZRVGCYKV.js").then((m) => m.ForgotPasswordComponent) },
  { path: "reset-password", loadComponent: () => import("./chunk-OPIKBRWG.js").then((m) => m.ResetPasswordComponent) },
  {
    path: "admin",
    canActivate: [authGuard, roleGuard],
    data: { role: "admin" },
    loadComponent: () => import("./chunk-OM2FVADW.js").then((m) => m.AdminLayoutComponent),
    children: [
      ...adminStaffSharedChildren,
      { path: "users", loadComponent: () => import("./chunk-JOMOE43N.js").then((m) => m.UsersRolesComponent) },
      { path: "sms", loadComponent: () => import("./chunk-AAWFYJDE.js").then((m) => m.AdminSmsBroadcastComponent) },
      { path: "email", loadComponent: () => import("./chunk-RX6TC4TO.js").then((m) => m.AdminEmailBroadcastComponent) },
      { path: "audit-log", loadComponent: () => import("./chunk-EHH7XNAI.js").then((m) => m.AuditLogComponent) },
      { path: "settings", loadComponent: () => import("./chunk-L4EXHVGK.js").then((m) => m.SettingsComponent) },
      { path: "archives", loadComponent: () => import("./chunk-RPNEUGTS.js").then((m) => m.ArchivesComponent) }
    ]
  },
  {
    path: "staff",
    canActivate: [authGuard, roleGuard],
    data: { role: "staff" },
    loadComponent: () => import("./chunk-SBTX2DRB.js").then((m) => m.StaffLayoutComponent),
    children: [
      ...adminStaffSharedChildren,
      { path: "settings", loadComponent: () => import("./chunk-JMO3KC2R.js").then((m) => m.StaffSettingsComponent) }
    ]
  },
  {
    path: "resident",
    canActivate: [authGuard, roleGuard],
    data: { role: "resident" },
    loadComponent: () => import("./chunk-5ROFJ6O2.js").then((m) => m.ResidentLayoutComponent),
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", loadComponent: () => import("./chunk-2NGIYYRK.js").then((m) => m.ResidentDashboardComponent) },
      { path: "profile", loadComponent: () => import("./chunk-2HPE6L73.js").then((m) => m.MyProfileComponent) },
      { path: "request-certificate", loadComponent: () => import("./chunk-YQFOUHV4.js").then((m) => m.RequestCertificateComponent) },
      { path: "reports", loadComponent: () => import("./chunk-D4XPSAJZ.js").then((m) => m.ResidentReportsComponent) },
      { path: "requests/:id", loadComponent: () => import("./chunk-O3F2WEEE.js").then((m) => m.ResidentRequestDetailComponent) },
      { path: "requests", loadComponent: () => import("./chunk-UXTK4FCR.js").then((m) => m.MyRequestsComponent) },
      { path: "settings", loadComponent: () => import("./chunk-MENVR3LX.js").then((m) => m.ResidentSettingsComponent) }
    ]
  },
  { path: "404", loadComponent: () => import("./chunk-CGBY7MXF.js").then((m) => m.NotFoundComponent) },
  { path: "**", loadComponent: () => import("./chunk-CGBY7MXF.js").then((m) => m.NotFoundComponent) }
];

// src/app/interceptors/http-error.interceptor.ts
var httpErrorInterceptor = (req, next) => {
  const notificationService = inject(NotificationService);
  const errorHandler = inject(ErrorHandlerService);
  const shouldRetry = (error) => {
    if (error.status === 0)
      return true;
    if (error.status >= 500 && error.status !== 501)
      return true;
    return false;
  };
  const maxRetries = 2;
  const retryDelay = 1e3;
  return next(req).pipe(retry({
    count: maxRetries,
    delay: (error, retryCount) => {
      if (shouldRetry(error) && retryCount <= maxRetries) {
        return timer(retryDelay * retryCount);
      }
      return throwError(() => error);
    }
  }), catchError((error) => {
    if (error.status === 401) {
      return throwError(() => error);
    }
    let errorMessage = "An error occurred while processing your request.";
    let errorTitle = "Request Failed";
    if (error.status === 0) {
      errorMessage = "Unable to connect to the server. Please check your internet connection.";
      errorTitle = "Connection Error";
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.error?.error) {
      errorMessage = error.error.error;
    } else if (error.status >= 500) {
      errorMessage = "A server error occurred. Please try again later.";
      errorTitle = "Server Error";
    } else if (error.status === 404) {
      errorMessage = "The requested resource was not found.";
      errorTitle = "Not Found";
    } else if (error.status === 403) {
      errorMessage = "You do not have permission to perform this action.";
      errorTitle = "Access Denied";
    } else if (error.status === 400) {
      errorMessage = error.error?.message || "Invalid request. Please check your input.";
      errorTitle = "Invalid Request";
    } else if (error.status === 409) {
      errorMessage = "This action conflicts with existing data. Please refresh and try again.";
      errorTitle = "Conflict";
    } else if (error.status === 422) {
      errorMessage = error.error?.message || "The data you provided is invalid.";
      errorTitle = "Validation Error";
    } else if (error.status === 429) {
      errorMessage = "Too many requests. Please wait a moment and try again.";
      errorTitle = "Too Many Requests";
    }
    notificationService.error(errorMessage, errorTitle);
    console.error("HTTP Error:", {
      url: req.url,
      status: error.status,
      statusText: error.statusText,
      error: error.error
    });
    return throwError(() => error);
  }));
};

// src/app/services/local-storage-database.service.ts
var STORAGE_KEYS = {
  RESIDENTS: "brims_residents",
  REQUESTS: "brims_requests",
  HOUSEHOLDS: "brims_households",
  USERS: "brims_users",
  ROLES: "brims_roles"
};
var LocalStorageDatabaseService = class _LocalStorageDatabaseService {
  // Initialize with default data if storage is empty
  constructor() {
    this.notificationService = inject(NotificationService);
    this.initializeDefaultData();
  }
  initializeDefaultData() {
    try {
      if (typeof localStorage === "undefined") {
        return;
      }
      if (!localStorage.getItem(STORAGE_KEYS.RESIDENTS)) {
        const defaultResidents = [
          { id: "1", residentId: "BRGY-1001", name: "Juan Dela Cruz", age: 44, gender: "Male", purok: "Purok 2", birthdate: "January 15, 1980", placeOfBirth: "Villanueva, Misamis Oriental", birthCertificateNumber: "BC-1980-001234", bloodType: "O+", civilStatus: "Single", nationality: "Filipino", contact: "0917 123 4557", address: "Purok 2, Barangay Name, City Name" },
          { id: "2", residentId: "BRGY-1002", name: "Maria Santos", age: 38, gender: "Female", purok: "Purok 1", placeOfBirth: "Cagayan de Oro City", birthCertificateNumber: "BC-1986-005678", bloodType: "A+" },
          { id: "3", residentId: "BRGY-1003", name: "Pedro Reyes", age: 65, gender: "Male", purok: "Purok 3", placeOfBirth: "Villanueva, Misamis Oriental", birthCertificateNumber: "BC-1959-009012", bloodType: "B+" },
          { id: "4", residentId: "BRGY-1004", name: "Ana Garcia", age: 29, gender: "Female", purok: "Purok 2", placeOfBirth: "Villanueva, Misamis Oriental", birthCertificateNumber: "BC-1995-003456", bloodType: "AB+" },
          { id: "5", residentId: "BRGY-1005", name: "Roberto Lopez", age: 72, gender: "Male", purok: "Purok 1", placeOfBirth: "Manila", birthCertificateNumber: "BC-1952-007890", bloodType: "O-" }
        ];
        this.saveToStorage(STORAGE_KEYS.RESIDENTS, defaultResidents);
      }
      if (!localStorage.getItem(STORAGE_KEYS.REQUESTS)) {
        const defaultRequests = [
          { id: "1", type: "Request Clearance", purpose: "For employment", status: "For Review", date: "Aug 15, 2034" },
          { id: "2", type: "Barangay Clearance", purpose: "For employment purposes", status: "Pending", date: "Apr 13, 2034" },
          { id: "3", type: "Certificate of Residency", purpose: "For school requirements", status: "Approved", date: "Mar 24, 2034" }
        ];
        this.saveToStorage(STORAGE_KEYS.REQUESTS, defaultRequests);
      }
      if (!localStorage.getItem(STORAGE_KEYS.HOUSEHOLDS)) {
        const defaultHouseholds = [
          {
            id: "h1",
            householdId: "HH-001",
            headId: "1",
            address: "Purok 2, Barangay Name, City Name",
            purok: "Purok 2",
            // Sample coordinates near Villanueva, Misamis Oriental (update to your barangay center as needed)
            latitude: 8.574,
            longitude: 124.776,
            status: "Active",
            riskLevel: "flood_prone",
            barangayZone: "Zone 1",
            members: [
              { residentId: "BRGY-1001", name: "Juan Dela Cruz", age: 44, gender: "Male", relationship: "Head", birthdate: "January 15, 1980", civilStatus: "Single" },
              { residentId: "BRGY-1004", name: "Ana Garcia", age: 29, gender: "Female", relationship: "Sister", birthdate: "March 20, 1995", civilStatus: "Single" }
            ]
          },
          {
            id: "h2",
            householdId: "HH-002",
            headId: "2",
            address: "Purok 1, Barangay Name, City Name",
            purok: "Purok 1",
            latitude: 8.575,
            longitude: 124.774,
            status: "Active",
            riskLevel: "fire_risk",
            barangayZone: "Zone 1",
            members: [
              { residentId: "BRGY-1002", name: "Maria Santos", age: 38, gender: "Female", relationship: "Head", birthdate: "June 10, 1986", civilStatus: "Married" },
              { residentId: "BRGY-1005", name: "Roberto Lopez", age: 72, gender: "Male", relationship: "Father", birthdate: "May 5, 1952", civilStatus: "Widowed" }
            ]
          },
          {
            id: "h3",
            householdId: "HH-003",
            headId: "3",
            address: "Purok 3, Barangay Name, City Name",
            purok: "Purok 3",
            latitude: 8.573,
            longitude: 124.778,
            status: "Active",
            riskLevel: "normal",
            barangayZone: "Zone 2",
            members: [
              { residentId: "BRGY-1003", name: "Pedro Reyes", age: 65, gender: "Male", relationship: "Head", birthdate: "August 22, 1959", civilStatus: "Married" }
            ]
          }
        ];
        this.saveToStorage(STORAGE_KEYS.HOUSEHOLDS, defaultHouseholds);
      }
      if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        const defaultUsers = [
          { id: "1", name: "Staff User", email: "staff@barangay.gov", role: "Staff", status: "Active", lastLogin: "Jan 29, 2026", createdAt: "Jan 1, 2025" },
          { id: "2", name: "Juan Dela Cruz", email: "resident@email.com", role: "Resident", status: "Active", lastLogin: "Jan 28, 2026", createdAt: "Jan 15, 2025" },
          { id: "3", name: "Maria Santos", email: "maria.santos@email.com", role: "Resident", status: "Active", lastLogin: "Jan 27, 2026", createdAt: "Feb 3, 2025" },
          { id: "4", name: "Admin User", email: "admin@barangay.gov", role: "Admin", status: "Active", lastLogin: "Jan 29, 2026", createdAt: "Dec 1, 2024" },
          { id: "5", name: "Pedro Reyes", email: "pedro.reyes@email.com", role: "Resident", status: "Inactive", lastLogin: "Dec 15, 2025", createdAt: "Mar 10, 2025" },
          { id: "6", name: "Ana Garcia", email: "ana.garcia@email.com", role: "Resident", status: "Active", lastLogin: "Jan 26, 2026", createdAt: "Apr 5, 2025" },
          { id: "7", name: "Roberto Lopez", email: "roberto.lopez@email.com", role: "Resident", status: "Active", lastLogin: "Jan 25, 2026", createdAt: "May 12, 2025" }
        ];
        this.saveToStorage(STORAGE_KEYS.USERS, defaultUsers);
      }
      if (!localStorage.getItem(STORAGE_KEYS.ROLES)) {
        const defaultRoles = [
          {
            id: "1",
            name: "Admin",
            description: "Full system access. Can manage users, roles, residents, households, requests, broadcasts, audit log, archives, and system settings.",
            permissions: [
              "Manage Users",
              "Manage Roles",
              "View All Reports",
              "Manage Residents",
              "Manage Households",
              "Approve & Process Requests",
              "System Settings",
              "SMS & Email Broadcast",
              "View Audit Log",
              "Manage Archives",
              "QR Scanner"
            ],
            userCount: 1
          },
          {
            id: "2",
            name: "Staff",
            description: "Barangay staff. Can manage residents and households, process requests, view reports, and use QR scanner. Cannot access Users & Roles, SMS/Email, Audit Log, Archives, or Settings.",
            permissions: [
              "View Reports",
              "Manage Residents",
              "Manage Households",
              "Process Requests",
              "QR Scanner"
            ],
            userCount: 1
          },
          {
            id: "3",
            name: "Resident",
            description: "Barangay resident. Can view own profile, request certificates, track requests, view resident reports, and update profile/settings.",
            permissions: [
              "View Own Profile",
              "Request Certificates",
              "View Own Requests",
              "View Resident Reports",
              "Update Profile & Settings"
            ],
            userCount: 5
          }
        ];
        this.saveToStorage(STORAGE_KEYS.ROLES, defaultRoles);
      }
    } catch (error) {
      const errorMessage = error?.message || "Unknown error";
      this.notificationService.error(`Local storage is not available. Demo data could not be initialized. ${errorMessage}`, "Storage Error");
      console.error("Error during localStorage demo data initialization:", error);
    }
  }
  getFromStorage(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      const errorMessage = error?.message || "Unknown error";
      this.notificationService.error(`Failed to read data from storage. ${errorMessage}`, "Storage Error");
      console.error(`Error reading from localStorage (${key}):`, error);
      return [];
    }
  }
  saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      const errorMessage = error?.message || "Unknown error";
      this.notificationService.error(`Failed to save data to storage. ${errorMessage}`, "Storage Error");
      console.error(`Error saving to localStorage (${key}):`, error);
      throw error;
    }
  }
  // Residents
  getResidents() {
    return of(this.getFromStorage(STORAGE_KEYS.RESIDENTS));
  }
  getResidentById(id) {
    const residents = this.getFromStorage(STORAGE_KEYS.RESIDENTS);
    const resident = residents.find((r) => r.id === id);
    return of(resident || null);
  }
  getResidentByResidentId(residentId) {
    const residents = this.getFromStorage(STORAGE_KEYS.RESIDENTS);
    const resident = residents.find((r) => r.residentId === residentId);
    return of(resident || null);
  }
  addResident(resident) {
    const residents = this.getFromStorage(STORAGE_KEYS.RESIDENTS);
    residents.push(resident);
    this.saveToStorage(STORAGE_KEYS.RESIDENTS, residents);
    return of(resident);
  }
  updateResident(id, updates) {
    const residents = this.getFromStorage(STORAGE_KEYS.RESIDENTS);
    const index = residents.findIndex((r) => r.id === id);
    if (index === -1) {
      return throwError(() => new Error(`Resident with id ${id} not found`));
    }
    residents[index] = __spreadValues(__spreadValues({}, residents[index]), updates);
    this.saveToStorage(STORAGE_KEYS.RESIDENTS, residents);
    return of(residents[index]);
  }
  deleteResident(id) {
    const residents = this.getFromStorage(STORAGE_KEYS.RESIDENTS);
    const filtered = residents.filter((r) => r.id !== id);
    this.saveToStorage(STORAGE_KEYS.RESIDENTS, filtered);
    return of(void 0);
  }
  // Requests
  getRequests() {
    return of(this.getFromStorage(STORAGE_KEYS.REQUESTS));
  }
  getRequestById(id) {
    const requests = this.getFromStorage(STORAGE_KEYS.REQUESTS);
    const request = requests.find((r) => r.id === id);
    return of(request || null);
  }
  addRequest(request) {
    const requests = this.getFromStorage(STORAGE_KEYS.REQUESTS);
    requests.push(request);
    this.saveToStorage(STORAGE_KEYS.REQUESTS, requests);
    return of(request);
  }
  updateRequest(id, updates) {
    const requests = this.getFromStorage(STORAGE_KEYS.REQUESTS);
    const index = requests.findIndex((r) => r.id === id);
    if (index === -1) {
      return throwError(() => new Error(`Request with id ${id} not found`));
    }
    requests[index] = __spreadValues(__spreadValues({}, requests[index]), updates);
    this.saveToStorage(STORAGE_KEYS.REQUESTS, requests);
    return of(requests[index]);
  }
  deleteRequest(id) {
    const requests = this.getFromStorage(STORAGE_KEYS.REQUESTS);
    const filtered = requests.filter((r) => r.id !== id);
    this.saveToStorage(STORAGE_KEYS.REQUESTS, filtered);
    return of(void 0);
  }
  // Households
  getHouseholds() {
    return of(this.getFromStorage(STORAGE_KEYS.HOUSEHOLDS));
  }
  getHouseholdById(id) {
    const households = this.getFromStorage(STORAGE_KEYS.HOUSEHOLDS);
    const household = households.find((h) => h.id === id);
    return of(household || null);
  }
  getHouseholdByResidentId(residentId) {
    const households = this.getFromStorage(STORAGE_KEYS.HOUSEHOLDS);
    const household = households.find((h) => h.members.some((m) => m.residentId === residentId));
    return of(household || null);
  }
  getHouseholdByHeadId(headId) {
    const households = this.getFromStorage(STORAGE_KEYS.HOUSEHOLDS);
    const household = households.find((h) => h.headId === headId);
    return of(household || null);
  }
  addHousehold(household) {
    const households = this.getFromStorage(STORAGE_KEYS.HOUSEHOLDS);
    households.push(household);
    this.saveToStorage(STORAGE_KEYS.HOUSEHOLDS, households);
    return of(household);
  }
  updateHousehold(id, updates) {
    const households = this.getFromStorage(STORAGE_KEYS.HOUSEHOLDS);
    const index = households.findIndex((h) => h.id === id);
    if (index === -1) {
      return throwError(() => new Error(`Household with id ${id} not found`));
    }
    households[index] = __spreadValues(__spreadValues({}, households[index]), updates);
    this.saveToStorage(STORAGE_KEYS.HOUSEHOLDS, households);
    return of(households[index]);
  }
  deleteHousehold(id) {
    const households = this.getFromStorage(STORAGE_KEYS.HOUSEHOLDS);
    const filtered = households.filter((h) => h.id !== id);
    this.saveToStorage(STORAGE_KEYS.HOUSEHOLDS, filtered);
    return of(void 0);
  }
  // Users
  getUsers() {
    return of(this.getFromStorage(STORAGE_KEYS.USERS));
  }
  getUserById(id) {
    const users = this.getFromStorage(STORAGE_KEYS.USERS);
    const user = users.find((u) => u.id === id);
    return of(user || null);
  }
  addUser(user) {
    const users = this.getFromStorage(STORAGE_KEYS.USERS);
    users.push(user);
    this.saveToStorage(STORAGE_KEYS.USERS, users);
    return of(user);
  }
  updateUser(id, updates) {
    const users = this.getFromStorage(STORAGE_KEYS.USERS);
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
      return throwError(() => new Error(`User with id ${id} not found`));
    }
    users[index] = __spreadValues(__spreadValues({}, users[index]), updates);
    this.saveToStorage(STORAGE_KEYS.USERS, users);
    return of(users[index]);
  }
  deleteUser(id) {
    const users = this.getFromStorage(STORAGE_KEYS.USERS);
    const filtered = users.filter((u) => u.id !== id);
    this.saveToStorage(STORAGE_KEYS.USERS, filtered);
    return of(void 0);
  }
  // Roles
  getRoles() {
    return of(this.getFromStorage(STORAGE_KEYS.ROLES));
  }
  getRoleById(id) {
    const roles = this.getFromStorage(STORAGE_KEYS.ROLES);
    const role = roles.find((r) => r.id === id);
    return of(role || null);
  }
  addRole(role) {
    const roles = this.getFromStorage(STORAGE_KEYS.ROLES);
    roles.push(role);
    this.saveToStorage(STORAGE_KEYS.ROLES, roles);
    return of(role);
  }
  updateRole(id, updates) {
    const roles = this.getFromStorage(STORAGE_KEYS.ROLES);
    const index = roles.findIndex((r) => r.id === id);
    if (index === -1) {
      return throwError(() => new Error(`Role with id ${id} not found`));
    }
    roles[index] = __spreadValues(__spreadValues({}, roles[index]), updates);
    this.saveToStorage(STORAGE_KEYS.ROLES, roles);
    return of(roles[index]);
  }
  deleteRole(id) {
    const roles = this.getFromStorage(STORAGE_KEYS.ROLES);
    const filtered = roles.filter((r) => r.id !== id);
    this.saveToStorage(STORAGE_KEYS.ROLES, filtered);
    return of(void 0);
  }
  // Stats
  getStats() {
    const residents = this.getFromStorage(STORAGE_KEYS.RESIDENTS);
    const households = this.getFromStorage(STORAGE_KEYS.HOUSEHOLDS);
    const seniorCitizens = residents.filter((r) => r.age >= 60).length;
    return of({
      totalResidents: residents.length,
      totalHouseholds: households.length,
      seniorCitizens
    });
  }
  static {
    this.\u0275fac = function LocalStorageDatabaseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocalStorageDatabaseService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocalStorageDatabaseService, factory: _LocalStorageDatabaseService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageDatabaseService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/json-server-database.service.ts
var API_BASE_URL = "http://localhost:3000";
var JsonServerDatabaseService = class _JsonServerDatabaseService {
  constructor() {
    this.http = inject(HttpClient);
    this.baseUrl = API_BASE_URL;
  }
  /** Allow overriding base URL (e.g. in tests or different ports). */
  setBaseUrl(url) {
    this.baseUrl = url.replace(/\/$/, "");
  }
  url(resource, id) {
    const path = id ? `${resource}/${id}` : resource;
    return `${this.baseUrl}/${path}`;
  }
  // Residents
  getResidents() {
    return this.http.get(this.url("residents"));
  }
  getResidentById(id) {
    return this.http.get(this.url("residents", id)).pipe(map((r) => r ?? null), catchError(() => of(null)));
  }
  getResidentByResidentId(residentId) {
    return this.http.get(this.url("residents"), { params: { residentId } }).pipe(map((list) => list && list[0] || null));
  }
  addResident(resident) {
    return this.http.post(this.url("residents"), resident);
  }
  updateResident(id, updates) {
    return this.http.patch(this.url("residents", id), updates);
  }
  deleteResident(id) {
    return this.http.delete(this.url("residents", id));
  }
  // Requests
  getRequests() {
    return this.http.get(this.url("requests"));
  }
  getRequestById(id) {
    return this.http.get(this.url("requests", id)).pipe(map((r) => r ?? null), catchError(() => of(null)));
  }
  addRequest(request) {
    return this.http.post(this.url("requests"), request);
  }
  updateRequest(id, updates) {
    return this.http.patch(this.url("requests", id), updates);
  }
  deleteRequest(id) {
    return this.http.delete(this.url("requests", id));
  }
  // Households
  getHouseholds() {
    return this.http.get(this.url("households"));
  }
  getHouseholdById(id) {
    return this.http.get(this.url("households", id)).pipe(map((h) => h ?? null), catchError(() => of(null)));
  }
  getHouseholdByResidentId(residentId) {
    return this.getHouseholds().pipe(map((list) => list.find((h) => h.members?.some((m) => m.residentId === residentId)) ?? null));
  }
  getHouseholdByHeadId(headId) {
    return this.http.get(this.url("households"), { params: { headId } }).pipe(map((list) => list && list[0] || null));
  }
  addHousehold(household) {
    return this.http.post(this.url("households"), household);
  }
  updateHousehold(id, updates) {
    return this.http.patch(this.url("households", id), updates);
  }
  deleteHousehold(id) {
    return this.http.delete(this.url("households", id));
  }
  // Users
  getUsers() {
    return this.http.get(this.url("users"));
  }
  getUserById(id) {
    return this.http.get(this.url("users", id)).pipe(map((u) => u ?? null), catchError(() => of(null)));
  }
  addUser(user) {
    return this.http.post(this.url("users"), user);
  }
  updateUser(id, updates) {
    return this.http.patch(this.url("users", id), updates);
  }
  deleteUser(id) {
    return this.http.delete(this.url("users", id));
  }
  // Roles
  getRoles() {
    return this.http.get(this.url("roles"));
  }
  getRoleById(id) {
    return this.http.get(this.url("roles", id)).pipe(map((r) => r ?? null), catchError(() => of(null)));
  }
  addRole(role) {
    return this.http.post(this.url("roles"), role);
  }
  updateRole(id, updates) {
    return this.http.patch(this.url("roles", id), updates);
  }
  deleteRole(id) {
    return this.http.delete(this.url("roles", id));
  }
  // Stats (computed from residents and households)
  getStats() {
    return this.getResidents().pipe(switchMap((residents) => this.getHouseholds().pipe(map((households) => {
      const seniorCitizens = residents.filter((r) => r.age >= 60).length;
      return {
        totalResidents: residents.length,
        totalHouseholds: households.length,
        seniorCitizens: seniorCitizens || 0
      };
    }))));
  }
  static {
    this.\u0275fac = function JsonServerDatabaseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JsonServerDatabaseService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JsonServerDatabaseService, factory: _JsonServerDatabaseService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonServerDatabaseService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/app.config.ts
var USE_JSON_SERVER = true;
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpErrorInterceptor])),
    provideCharts(withDefaultRegisterables()),
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    {
      provide: DATABASE_SERVICE,
      useClass: USE_JSON_SERVER ? JsonServerDatabaseService : LocalStorageDatabaseService
    }
    // When Firebase is ready: useClass: FirebaseDatabaseService
  ]
};

// src/app/services/notification-type-label.pipe.ts
var NotificationTypeLabelPipe = class _NotificationTypeLabelPipe {
  transform(type) {
    switch (type) {
      case "success":
        return "Success";
      case "warning":
        return "Warning";
      case "error":
        return "Error";
      case "info":
      default:
        return "Notification";
    }
  }
  static {
    this.\u0275fac = function NotificationTypeLabelPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationTypeLabelPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "notificationTypeLabel", type: _NotificationTypeLabelPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationTypeLabelPipe, [{
    type: Pipe,
    args: [{
      name: "notificationTypeLabel",
      standalone: true
    }]
  }], null, null);
})();

// src/app/app.component.ts
var _c0 = (a0, a1, a2, a3, a4) => ({ "global-notifications__item--unread": a0, "global-notifications__item--type-success": a1, "global-notifications__item--type-error": a2, "global-notifications__item--type-warning": a3, "global-notifications__item--type-info": a4 });
var _forTrack0 = ($index, $item) => $item.id;
function AppComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.unreadCount > 9 ? "9+" : ctx_r1.unreadCount);
  }
}
function AppComponent_Conditional_1_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Conditional_5_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markAllAsRead());
    });
    \u0275\u0275text(1, " Mark all as read ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_Conditional_1_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "No notifications yet.");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_Conditional_1_Conditional_5_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Conditional_5_Conditional_9_For_2_Template_li_click_0_listener() {
      const n_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markAsRead(n_r6.id));
    });
    \u0275\u0275elementStart(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "notificationTypeLabel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r6 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(9, _c0, !n_r6.read, n_r6.type === "success", n_r6.type === "error", n_r6.type === "warning", n_r6.type === "info"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", n_r6.title || \u0275\u0275pipeBind1(4, 4, n_r6.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, n_r6.createdAt, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", n_r6.message, " ");
  }
}
function AppComponent_Conditional_1_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 11);
    \u0275\u0275repeaterCreate(1, AppComponent_Conditional_1_Conditional_5_Conditional_9_For_2_Template, 10, 15, "li", 14, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.notifications);
  }
}
function AppComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppComponent_Conditional_1_Conditional_5_Conditional_4_Template, 2, 0, "button", 7);
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Conditional_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeNotifications());
    });
    \u0275\u0275text(6, " \u2715 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275conditionalCreate(8, AppComponent_Conditional_1_Conditional_5_Conditional_8_Template, 2, 0, "p", 10)(9, AppComponent_Conditional_1_Conditional_5_Conditional_9_Template, 3, 0, "ul", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Conditional_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeNotifications());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", "Notifications");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.notifications.length ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Close notifications");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.notifications.length ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Close notifications");
  }
}
function AppComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleNotifications());
    });
    \u0275\u0275elementStart(2, "span", 2);
    \u0275\u0275text(3, "\u{1F514}");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppComponent_Conditional_1_Conditional_4_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AppComponent_Conditional_1_Conditional_5_Template, 11, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Notifications")("aria-expanded", ctx_r1.showNotifications);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.unreadCount > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showNotifications ? 5 : -1);
  }
}
var AppComponent = class _AppComponent {
  constructor(router, notificationsService) {
    this.router = router;
    this.notificationsService = notificationsService;
    this.title = "Barangay Resident Information Management System";
    this.unreadCount = 0;
    this.showNotifications = false;
    this.showGlobalUi = false;
    this.notifications = [];
    const initialPath = typeof window !== "undefined" ? window.location.pathname : this.router.url;
    this.updateGlobalUi(initialPath);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateGlobalUi(event.urlAfterRedirects);
      }
    });
  }
  ngOnInit() {
    this.notificationsSub = this.notificationsService.notifications$.subscribe((list) => {
      this.notifications = list;
      this.unreadCount = this.notificationsService.unreadCount;
    });
  }
  ngOnDestroy() {
    this.notificationsSub?.unsubscribe();
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
  closeNotifications() {
    this.showNotifications = false;
  }
  markAsRead(id) {
    this.notificationsService.markAsRead(id);
  }
  markAllAsRead() {
    this.notificationsService.markAllAsRead();
  }
  isNotFoundRouteSnapshot(route) {
    if (!route)
      return false;
    const cfg = route.routeConfig;
    if (cfg && (cfg.path === "404" || cfg.path === "**")) {
      const isRootLevel = !route.parent || route.parent.routeConfig === null;
      if (isRootLevel) {
        return true;
      }
    }
    for (const child of route.children) {
      if (this.isNotFoundRouteSnapshot(child)) {
        return true;
      }
    }
    return false;
  }
  updateGlobalUi(url) {
    const isStaffRequestDetailPage = url.startsWith("/staff/requests/") && url !== "/staff/requests";
    const isResidentProfilePage = /^\/staff\/residents\/[^/]+$/.test(url);
    const isQrScannerPage = url.includes("/qr-scanner");
    const isHouseholdMapPage = url.startsWith("/staff/households/map");
    const isNotFoundRoute = this.isNotFoundRouteSnapshot(this.router.routerState.snapshot.root);
    this.showGlobalUi = !url.startsWith("/login") && !url.startsWith("/contact") && !url.startsWith("/forgot-password") && !url.startsWith("/reset-password") && !url.includes("/settings") && !url.includes("/residents/add") && !url.includes("/households/add") && !(url.includes("/households/") && url.includes("/edit")) && !isResidentProfilePage && !isStaffRequestDetailPage && !isQrScannerPage && !isHouseholdMapPage && !isNotFoundRoute;
    if (!this.showGlobalUi)
      this.showNotifications = false;
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[1, "global-notifications"], ["type", "button", 1, "global-notifications__bell", 3, "click"], ["aria-hidden", "true", 1, "global-notifications__icon"], [1, "global-notifications__badge"], ["role", "dialog", 1, "global-notifications__panel"], [1, "global-notifications__panelHeader"], [1, "global-notifications__panelTitle"], ["type", "button", 1, "global-notifications__markAll"], ["type", "button", 1, "global-notifications__close", 3, "click"], [1, "global-notifications__panelBody"], [1, "global-notifications__empty"], [1, "global-notifications__list"], ["type", "button", "tabindex", "-1", 1, "global-notifications__backdrop", 3, "click"], ["type", "button", 1, "global-notifications__markAll", 3, "click"], [1, "global-notifications__item", 3, "ngClass"], [1, "global-notifications__item", 3, "click", "ngClass"], [1, "global-notifications__itemHeader"], [1, "global-notifications__itemTitle"], [1, "global-notifications__itemTime"], [1, "global-notifications__itemMessage"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
        \u0275\u0275conditionalCreate(1, AppComponent_Conditional_1_Template, 6, 4, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showGlobalUi ? 1 : -1);
      }
    }, dependencies: [RouterOutlet, NgClass, DatePipe, NotificationTypeLabelPipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.global-notifications[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 14px;\n  right: 76px;\n  z-index: 1100;\n  transition: transform 0.3s ease-out, filter 0.3s ease-out;\n}\n@media (max-width: 640px) {\n  .global-notifications[_ngcontent-%COMP%] {\n    top: 12px;\n    right: 68px;\n  }\n}\n.global-notifications__bell[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--color-border);\n  border-radius: 9999px;\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.25s ease,\n    border-color 0.2s ease;\n}\n@media (max-width: 640px) {\n  .global-notifications__bell[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n.global-notifications__bell[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  box-shadow: var(--shadow-lg), 0 0 0 2px var(--color-border);\n  transform: scale(1.06);\n  border-color: var(--color-text-muted, rgba(0, 0, 0, 0.2));\n}\n.global-notifications__bell[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  box-shadow: var(--shadow);\n}\nbody.swal2-shown[_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:hover, body.swal2-shown   [_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:hover, \nbody.swal2-shown[_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:focus, body.swal2-shown   [_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:focus, \nbody.swal2-shown[_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:focus-visible, body.swal2-shown   [_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: var(--shadow-lg);\n  transform: scale(1);\n  border-color: var(--color-border);\n  background: var(--color-bg-card);\n}\n.global-notifications__icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1;\n  filter: var(--notification-icon-filter);\n}\n.global-notifications__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(35%, -35%);\n  min-width: 18px;\n  padding: 2px 6px;\n  border-radius: 9999px;\n  background: var(--color-warning);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-align: center;\n  line-height: 1.4;\n  box-shadow: var(--shadow);\n}\n.global-notifications__panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 52px;\n  right: 0;\n  width: min(360px, 100vw - 32px);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  z-index: 1102;\n  animation: _ngcontent-%COMP%_globalNotificationsPanelIn 0.18s ease-out;\n}\n@media (max-width: 640px) {\n  .global-notifications__panel[_ngcontent-%COMP%] {\n    top: 48px;\n    right: -12px;\n    width: calc(100vw - 24px);\n    max-width: 360px;\n  }\n}\n@keyframes _ngcontent-%COMP%_globalNotificationsPanelIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.global-notifications__panelHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--color-border);\n}\n.global-notifications__panelTitle[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.global-notifications__markAll[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 9999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-primary, #2563eb);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease,\n    transform 0.05s ease;\n}\n.global-notifications__markAll[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--color-primary, #2563eb) 8%, transparent);\n  border-color: color-mix(in srgb, var(--color-primary, #2563eb) 35%, transparent);\n}\n.global-notifications__markAll[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.global-notifications__markAll[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid color-mix(in srgb, var(--color-primary, #2563eb) 65%, transparent);\n  outline-offset: 2px;\n}\n.global-notifications__close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius);\n  padding: 6px 8px;\n  color: var(--color-text-muted);\n}\n.global-notifications__close[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  color: var(--color-text);\n}\n.global-notifications__panelBody[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background:\n    linear-gradient(\n      180deg,\n      color-mix(in srgb, var(--color-bg-card) 92%, transparent),\n      color-mix(in srgb, var(--color-bg) 100%, transparent));\n}\n.global-notifications__empty[_ngcontent-%COMP%] {\n  margin: 8px 0 4px;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  text-align: center;\n}\n.global-notifications__list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n  max-height: 320px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n.global-notifications__item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px 12px 9px 16px;\n  margin-bottom: 6px;\n  border-radius: calc(var(--radius) - 1px);\n  border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);\n  border-left-width: 3px;\n  border-left-style: solid;\n  border-left-color: transparent;\n  background: color-mix(in srgb, var(--color-bg-card) 92%, transparent);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n  cursor: pointer;\n  transition:\n    background 0.16s ease,\n    border-color 0.16s ease,\n    box-shadow 0.16s ease,\n    transform 0.08s ease;\n}\n.global-notifications__item[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--color-bg-card) 98%, transparent);\n  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.08);\n  transform: translateY(-1px);\n}\n.global-notifications__item--unread[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--color-primary-bg, #eff6ff) 85%, transparent);\n  border-color: color-mix(in srgb, var(--color-primary, #2563eb) 40%, var(--color-border) 60%);\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.22);\n}\n.global-notifications__item--unread[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 16px;\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--color-primary);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary, #2563eb) 20%, transparent);\n}\n.global-notifications__itemHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.global-notifications__itemTitle[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--color-text);\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.global-notifications__itemTime[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n}\n.global-notifications__itemMessage[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: var(--color-text-muted);\n}\n.global-notifications__item--type-success[_ngcontent-%COMP%] {\n  border-left-color: var(--color-success);\n}\n.global-notifications__item--type-error[_ngcontent-%COMP%] {\n  border-left-color: #dc2626;\n}\n.global-notifications__item--type-warning[_ngcontent-%COMP%] {\n  border-left-color: var(--color-warning);\n}\n.global-notifications__item--type-info[_ngcontent-%COMP%] {\n  border-left-color: var(--color-primary);\n}\n.global-notifications__backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: transparent;\n  border: none;\n  cursor: default;\n  z-index: 1101;\n}\n/*# sourceMappingURL=app.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, NgClass, DatePipe, NotificationTypeLabelPipe], template: `
    <router-outlet></router-outlet>

    @if (showGlobalUi) {
      <div class="global-notifications">
        <button
          class="global-notifications__bell"
          type="button"
          (click)="toggleNotifications()"
          [attr.aria-label]="'Notifications'"
          [attr.aria-expanded]="showNotifications"
        >
          <span class="global-notifications__icon" aria-hidden="true">\u{1F514}</span>
          @if (unreadCount > 0) {
            <span class="global-notifications__badge">{{ unreadCount > 9 ? '9+' : unreadCount }}</span>
          }
        </button>

        @if (showNotifications) {
          <div class="global-notifications__panel" role="dialog" [attr.aria-label]="'Notifications'">
            <div class="global-notifications__panelHeader">
              <span class="global-notifications__panelTitle">Notifications</span>
              @if (notifications.length) {
                <button
                  class="global-notifications__markAll"
                  type="button"
                  (click)="markAllAsRead()"
                >
                  Mark all as read
                </button>
              }
              <button
                class="global-notifications__close"
                type="button"
                (click)="closeNotifications()"
                [attr.aria-label]="'Close notifications'"
              >
                \u2715
              </button>
            </div>
            <div class="global-notifications__panelBody">
              @if (!notifications.length) {
                <p class="global-notifications__empty">No notifications yet.</p>
              } @else {
                <ul class="global-notifications__list">
                  @for (n of notifications; track n.id) {
                    <li
                      class="global-notifications__item"
                      [ngClass]="{
                        'global-notifications__item--unread': !n.read,
                        'global-notifications__item--type-success': n.type === 'success',
                        'global-notifications__item--type-error': n.type === 'error',
                        'global-notifications__item--type-warning': n.type === 'warning',
                        'global-notifications__item--type-info': n.type === 'info'
                      }"
                      (click)="markAsRead(n.id)"
                    >
                      <div class="global-notifications__itemHeader">
                        <span class="global-notifications__itemTitle">
                          {{ n.title || (n.type | notificationTypeLabel) }}
                        </span>
                        <span class="global-notifications__itemTime">
                          {{ n.createdAt | date: 'shortTime' }}
                        </span>
                      </div>
                      <p class="global-notifications__itemMessage">
                        {{ n.message }}
                      </p>
                    </li>
                  }
                </ul>
              }
            </div>
          </div>
          <button
            class="global-notifications__backdrop"
            type="button"
            (click)="closeNotifications()"
            [attr.aria-label]="'Close notifications'"
            tabindex="-1"
          ></button>
        }
      </div>
    }
  `, styles: ['/* angular:styles/component:scss;f524cebf583ff3d2282a00e228ed44ddac11e66287e1647815b4fc710c315ea5;F:/BRIMS/src/app/app.component.ts */\n:host {\n  display: block;\n}\n.global-notifications {\n  position: fixed;\n  top: 14px;\n  right: 76px;\n  z-index: 1100;\n  transition: transform 0.3s ease-out, filter 0.3s ease-out;\n}\n@media (max-width: 640px) {\n  .global-notifications {\n    top: 12px;\n    right: 68px;\n  }\n}\n.global-notifications__bell {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--color-border);\n  border-radius: 9999px;\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.25s ease,\n    border-color 0.2s ease;\n}\n@media (max-width: 640px) {\n  .global-notifications__bell {\n    width: 40px;\n    height: 40px;\n  }\n}\n.global-notifications__bell:hover {\n  background: var(--color-bg);\n  box-shadow: var(--shadow-lg), 0 0 0 2px var(--color-border);\n  transform: scale(1.06);\n  border-color: var(--color-text-muted, rgba(0, 0, 0, 0.2));\n}\n.global-notifications__bell:active {\n  transform: scale(0.97);\n  box-shadow: var(--shadow);\n}\n:host-context(body.swal2-shown) .global-notifications__bell:hover,\n:host-context(body.swal2-shown) .global-notifications__bell:focus,\n:host-context(body.swal2-shown) .global-notifications__bell:focus-visible {\n  outline: none;\n  box-shadow: var(--shadow-lg);\n  transform: scale(1);\n  border-color: var(--color-border);\n  background: var(--color-bg-card);\n}\n.global-notifications__icon {\n  font-size: 1.25rem;\n  line-height: 1;\n  filter: var(--notification-icon-filter);\n}\n.global-notifications__badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(35%, -35%);\n  min-width: 18px;\n  padding: 2px 6px;\n  border-radius: 9999px;\n  background: var(--color-warning);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-align: center;\n  line-height: 1.4;\n  box-shadow: var(--shadow);\n}\n.global-notifications__panel {\n  position: absolute;\n  top: 52px;\n  right: 0;\n  width: min(360px, 100vw - 32px);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  z-index: 1102;\n  animation: globalNotificationsPanelIn 0.18s ease-out;\n}\n@media (max-width: 640px) {\n  .global-notifications__panel {\n    top: 48px;\n    right: -12px;\n    width: calc(100vw - 24px);\n    max-width: 360px;\n  }\n}\n@keyframes globalNotificationsPanelIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.global-notifications__panelHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--color-border);\n}\n.global-notifications__panelTitle {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.global-notifications__markAll {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 9999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-primary, #2563eb);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease,\n    transform 0.05s ease;\n}\n.global-notifications__markAll:hover {\n  background: color-mix(in srgb, var(--color-primary, #2563eb) 8%, transparent);\n  border-color: color-mix(in srgb, var(--color-primary, #2563eb) 35%, transparent);\n}\n.global-notifications__markAll:active {\n  transform: translateY(1px);\n}\n.global-notifications__markAll:focus-visible {\n  outline: 2px solid color-mix(in srgb, var(--color-primary, #2563eb) 65%, transparent);\n  outline-offset: 2px;\n}\n.global-notifications__close {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius);\n  padding: 6px 8px;\n  color: var(--color-text-muted);\n}\n.global-notifications__close:hover {\n  background: var(--color-bg);\n  color: var(--color-text);\n}\n.global-notifications__panelBody {\n  padding: 12px 14px;\n  background:\n    linear-gradient(\n      180deg,\n      color-mix(in srgb, var(--color-bg-card) 92%, transparent),\n      color-mix(in srgb, var(--color-bg) 100%, transparent));\n}\n.global-notifications__empty {\n  margin: 8px 0 4px;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  text-align: center;\n}\n.global-notifications__list {\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n  max-height: 320px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n.global-notifications__item {\n  position: relative;\n  padding: 10px 12px 9px 16px;\n  margin-bottom: 6px;\n  border-radius: calc(var(--radius) - 1px);\n  border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);\n  border-left-width: 3px;\n  border-left-style: solid;\n  border-left-color: transparent;\n  background: color-mix(in srgb, var(--color-bg-card) 92%, transparent);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n  cursor: pointer;\n  transition:\n    background 0.16s ease,\n    border-color 0.16s ease,\n    box-shadow 0.16s ease,\n    transform 0.08s ease;\n}\n.global-notifications__item:hover {\n  background: color-mix(in srgb, var(--color-bg-card) 98%, transparent);\n  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.08);\n  transform: translateY(-1px);\n}\n.global-notifications__item--unread {\n  background: color-mix(in srgb, var(--color-primary-bg, #eff6ff) 85%, transparent);\n  border-color: color-mix(in srgb, var(--color-primary, #2563eb) 40%, var(--color-border) 60%);\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.22);\n}\n.global-notifications__item--unread::before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 16px;\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--color-primary);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary, #2563eb) 20%, transparent);\n}\n.global-notifications__itemHeader {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.global-notifications__itemTitle {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--color-text);\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.global-notifications__itemTime {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n}\n.global-notifications__itemMessage {\n  margin: 0;\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: var(--color-text-muted);\n}\n.global-notifications__item--type-success {\n  border-left-color: var(--color-success);\n}\n.global-notifications__item--type-error {\n  border-left-color: #dc2626;\n}\n.global-notifications__item--type-warning {\n  border-left-color: var(--color-warning);\n}\n.global-notifications__item--type-info {\n  border-left-color: var(--color-primary);\n}\n.global-notifications__backdrop {\n  position: fixed;\n  inset: 0;\n  background: transparent;\n  border: none;\n  cursor: default;\n  z-index: 1101;\n}\n/*# sourceMappingURL=app.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 402 });
})();

// src/main.ts
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  event.preventDefault();
});
bootstrapApplication(AppComponent, appConfig).catch((err) => {
  console.error("Bootstrap error:", err);
});
//# sourceMappingURL=main.js.map
