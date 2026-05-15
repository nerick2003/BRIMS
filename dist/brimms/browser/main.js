import {
  ApiConfigService,
  runtimeConfig
} from "./chunk-37FGLYSD.js";
import {
  provideCharts,
  withDefaultRegisterables
} from "./chunk-XPBSPHVN.js";
import {
  NavigationEnd,
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-IPZDF3JU.js";
import {
  provideHttpClient,
  withInterceptors
} from "./chunk-E73EYYCC.js";
import {
  AuthService,
  DATABASE_SERVICE,
  DataService,
  ErrorHandlerService,
  Firestore,
  FirestorePortalNotificationsService,
  NotificationService,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  getFirestore,
  initializeApp,
  provideFirebaseApp,
  provideFirestore,
  query,
  setDoc,
  updateDoc,
  where
} from "./chunk-2RJNPIJT.js";
import {
  APP_INITIALIZER,
  Component,
  DatePipe,
  ErrorHandler,
  Injectable,
  NgClass,
  Pipe,
  ViewChild,
  catchError,
  combineLatest,
  from,
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
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-TUEAJAVR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

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
  { path: "dashboard", loadComponent: () => import("./chunk-ON2MRMF6.js").then((m) => m.StaffDashboardComponent) },
  { path: "residents", loadComponent: () => import("./chunk-JBB2YCCP.js").then((m) => m.ResidentsListComponent) },
  { path: "residents/add", loadComponent: () => import("./chunk-R4Q2LOEE.js").then((m) => m.AddResidentComponent) },
  { path: "residents/:id", loadComponent: () => import("./chunk-4MGUJFEF.js").then((m) => m.ResidentProfileComponent) },
  { path: "households", loadComponent: () => import("./chunk-EBL3KNZQ.js").then((m) => m.HouseholdsComponent) },
  { path: "households/map", loadComponent: () => import("./chunk-LMSRHKQV.js").then((m) => m.HouseholdMapComponent) },
  { path: "households/add", loadComponent: () => import("./chunk-AEEILFU3.js").then((m) => m.AddHouseholdComponent) },
  { path: "households/:id/edit", loadComponent: () => import("./chunk-GF46WBBU.js").then((m) => m.EditHouseholdComponent) },
  { path: "households/:id", loadComponent: () => import("./chunk-VWQM4AHG.js").then((m) => m.HouseholdDetailComponent) },
  { path: "reports", loadComponent: () => import("./chunk-MCAWPVQE.js").then((m) => m.ReportsComponent) },
  { path: "requests/:id", loadComponent: () => import("./chunk-DNO5EZOM.js").then((m) => m.RequestDetailComponent) },
  { path: "requests", loadComponent: () => import("./chunk-U4GEC6MS.js").then((m) => m.RequestsComponent) },
  { path: "qr-scanner", loadComponent: () => import("./chunk-YSDKYB4H.js").then((m) => m.QrScannerComponent) },
  { path: "profile", loadComponent: () => import("./chunk-AOBBACUX.js").then((m) => m.StaffProfileComponent) }
];
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadComponent: () => import("./chunk-ZXAHXJBC.js").then((m) => m.LoginComponent) },
  { path: "contact", loadComponent: () => import("./chunk-SLYHWUSG.js").then((m) => m.ContactComponent) },
  { path: "forgot-password", loadComponent: () => import("./chunk-AEVOBJRF.js").then((m) => m.ForgotPasswordComponent) },
  { path: "reset-password", loadComponent: () => import("./chunk-5L3PX3H4.js").then((m) => m.ResetPasswordComponent) },
  {
    path: "admin",
    canActivate: [authGuard, roleGuard],
    data: { role: "admin" },
    loadComponent: () => import("./chunk-43MLAQBL.js").then((m) => m.AdminLayoutComponent),
    children: [
      ...adminStaffSharedChildren,
      { path: "archives/requests/:id", loadComponent: () => import("./chunk-DNO5EZOM.js").then((m) => m.RequestDetailComponent) },
      { path: "archives/residents/:id", loadComponent: () => import("./chunk-4MGUJFEF.js").then((m) => m.ResidentProfileComponent) },
      { path: "archives/households/:id", loadComponent: () => import("./chunk-VWQM4AHG.js").then((m) => m.HouseholdDetailComponent) },
      { path: "users", loadComponent: () => import("./chunk-UONCMEIM.js").then((m) => m.UsersRolesComponent) },
      { path: "sms", loadComponent: () => import("./chunk-PFY4I3CZ.js").then((m) => m.AdminSmsBroadcastComponent) },
      { path: "email", loadComponent: () => import("./chunk-OBU5JOFU.js").then((m) => m.AdminEmailBroadcastComponent) },
      { path: "audit-log", loadComponent: () => import("./chunk-MY4NEIWZ.js").then((m) => m.AuditLogComponent) },
      { path: "settings", loadComponent: () => import("./chunk-7JUMG55O.js").then((m) => m.SettingsComponent) },
      { path: "archives", loadComponent: () => import("./chunk-ZAFVKN66.js").then((m) => m.ArchivesComponent) }
    ]
  },
  {
    path: "staff",
    canActivate: [authGuard, roleGuard],
    data: { role: "staff" },
    loadComponent: () => import("./chunk-PRGIQ4EM.js").then((m) => m.StaffLayoutComponent),
    children: [
      ...adminStaffSharedChildren,
      { path: "settings", loadComponent: () => import("./chunk-L4JWCLS2.js").then((m) => m.StaffSettingsComponent) }
    ]
  },
  {
    path: "resident",
    canActivate: [authGuard, roleGuard],
    data: { role: "resident" },
    loadComponent: () => import("./chunk-IRUFIBYG.js").then((m) => m.ResidentLayoutComponent),
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", loadComponent: () => import("./chunk-2V6LYUC4.js").then((m) => m.ResidentDashboardComponent) },
      { path: "profile", loadComponent: () => import("./chunk-UQLYP3YI.js").then((m) => m.MyProfileComponent) },
      { path: "request-certificate", loadComponent: () => import("./chunk-5T44EHXV.js").then((m) => m.RequestCertificateComponent) },
      { path: "reports", loadComponent: () => import("./chunk-QIIG7JFF.js").then((m) => m.ResidentReportsComponent) },
      { path: "requests/:id", loadComponent: () => import("./chunk-PAVU3KTE.js").then((m) => m.ResidentRequestDetailComponent) },
      { path: "requests", loadComponent: () => import("./chunk-DLYW4Z5J.js").then((m) => m.MyRequestsComponent) },
      { path: "settings", loadComponent: () => import("./chunk-H4PLZAVS.js").then((m) => m.ResidentSettingsComponent) }
    ]
  },
  { path: "404", loadComponent: () => import("./chunk-AF5JLCX2.js").then((m) => m.NotFoundComponent) },
  { path: "**", loadComponent: () => import("./chunk-AF5JLCX2.js").then((m) => m.NotFoundComponent) }
];

// src/app/interceptors/http-error.interceptor.ts
var httpErrorInterceptor = (req, next) => {
  const notificationService = inject(NotificationService);
  const apiConfig = inject(ApiConfigService);
  const auth = inject(AuthService);
  const isNotificationApi = req.url.includes("/api/notifications/");
  const shouldRetry = (error) => {
    if (isNotificationApi && error.status === 0)
      return false;
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
      if (apiConfig.isPlaceholderUrl) {
        errorMessage = "Backend URL is not set. Set apiBaseUrl in src/assets/config.json to your backend URL (no trailing slash), then redeploy.";
        errorTitle = "Backend Not Configured";
      } else {
        errorMessage = "Cannot reach the notification server. Check that the backend is running and CORS allows this site. In production, set apiBaseUrl in assets/config.json.";
        errorTitle = "Connection Error";
      }
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
    } else if (error.status === 413) {
      errorMessage = error.error?.error || "The email or attachment is too large. Try sending without attachment or use a smaller file.";
      errorTitle = "Request Too Large";
    }
    const userId = auth.currentUser?.id;
    if (userId) {
      notificationService.notifyUsers([userId], {
        type: "error",
        message: errorMessage,
        title: errorTitle
      });
    } else {
      notificationService.error(errorMessage, errorTitle);
    }
    console.error("HTTP Error:", {
      url: req.url,
      status: error.status,
      statusText: error.statusText,
      error: error.error
    });
    return throwError(() => error);
  }));
};

// src/app/services/firebase-database.service.ts
var FirebaseDatabaseService = class _FirebaseDatabaseService {
  constructor() {
    this.firestore = inject(Firestore);
  }
  collectionRef(path) {
    return collection(this.firestore, path);
  }
  docRef(path, id) {
    return doc(this.firestore, `${path}/${id}`);
  }
  // Residents
  getResidents() {
    const ref = this.collectionRef("residents");
    return collectionData(ref, { idField: "id" });
  }
  getResidentById(id) {
    const ref = this.docRef("residents", id);
    return docData(ref).pipe(map((data) => data ? __spreadProps(__spreadValues({}, data), { id }) : null), catchError(() => of(null)));
  }
  getResidentByResidentId(residentId) {
    const ref = this.collectionRef("residents");
    const q = query(ref, where("residentId", "==", residentId));
    return collectionData(q, { idField: "id" }).pipe(map((list) => list[0] ?? null), catchError(() => of(null)));
  }
  addResident(resident) {
    const ref = this.docRef("residents", resident.id);
    return from(setDoc(ref, resident)).pipe(map(() => resident));
  }
  updateResident(id, updates) {
    const ref = this.docRef("residents", id);
    return from(updateDoc(ref, updates)).pipe(switchMap(() => this.getResidentById(id)));
  }
  deleteResident(id) {
    const ref = this.docRef("residents", id);
    return from(deleteDoc(ref)).pipe(map(() => void 0));
  }
  // Requests
  getRequests() {
    const ref = this.collectionRef("requests");
    return collectionData(ref, { idField: "id" });
  }
  getRequestById(id) {
    const ref = this.docRef("requests", id);
    return docData(ref).pipe(map((data) => data ? __spreadProps(__spreadValues({}, data), { id }) : null), catchError(() => of(null)));
  }
  addRequest(request) {
    const ref = this.docRef("requests", request.id);
    return from(setDoc(ref, request)).pipe(map(() => request));
  }
  updateRequest(id, updates) {
    const ref = this.docRef("requests", id);
    return from(updateDoc(ref, updates)).pipe(switchMap(() => this.getRequestById(id)));
  }
  deleteRequest(id) {
    const ref = this.docRef("requests", id);
    return from(deleteDoc(ref)).pipe(map(() => void 0));
  }
  // Households
  getHouseholds() {
    const ref = this.collectionRef("households");
    return collectionData(ref, { idField: "id" });
  }
  getHouseholdById(id) {
    const ref = this.docRef("households", id);
    return docData(ref).pipe(map((data) => data ? __spreadProps(__spreadValues({}, data), { id }) : null), catchError(() => of(null)));
  }
  getHouseholdByResidentId(residentId) {
    const ref = this.collectionRef("households");
    const q = query(ref, where("members", "array-contains", { residentId }));
    return collectionData(q, { idField: "id" }).pipe(map((list) => list[0] ?? null), catchError(() => of(null)));
  }
  getHouseholdByHeadId(headId) {
    const ref = this.collectionRef("households");
    const q = query(ref, where("headId", "==", headId));
    return collectionData(q, { idField: "id" }).pipe(map((list) => list[0] ?? null), catchError(() => of(null)));
  }
  addHousehold(household) {
    const ref = this.docRef("households", household.id);
    return from(setDoc(ref, household)).pipe(map(() => household));
  }
  updateHousehold(id, updates) {
    const ref = this.docRef("households", id);
    return from(updateDoc(ref, updates)).pipe(switchMap(() => this.getHouseholdById(id)));
  }
  deleteHousehold(id) {
    const ref = this.docRef("households", id);
    return from(deleteDoc(ref)).pipe(map(() => void 0));
  }
  // Users
  getUsers() {
    const ref = this.collectionRef("users");
    return collectionData(ref, { idField: "id" });
  }
  getUserById(id) {
    const ref = this.docRef("users", id);
    return docData(ref).pipe(map((data) => data ? __spreadProps(__spreadValues({}, data), { id }) : null), catchError(() => of(null)));
  }
  addUser(user) {
    const ref = this.docRef("users", user.id);
    return from(setDoc(ref, user)).pipe(map(() => user));
  }
  updateUser(id, updates) {
    const ref = this.docRef("users", id);
    return from(updateDoc(ref, updates)).pipe(switchMap(() => this.getUserById(id)));
  }
  deleteUser(id) {
    const ref = this.docRef("users", id);
    return from(deleteDoc(ref)).pipe(map(() => void 0));
  }
  // Roles
  getRoles() {
    const ref = this.collectionRef("roles");
    return collectionData(ref, { idField: "id" });
  }
  getRoleById(id) {
    const ref = this.docRef("roles", id);
    return docData(ref).pipe(map((data) => data ? __spreadProps(__spreadValues({}, data), { id }) : null), catchError(() => of(null)));
  }
  addRole(role) {
    const ref = this.docRef("roles", role.id);
    return from(setDoc(ref, role)).pipe(map(() => role));
  }
  updateRole(id, updates) {
    const ref = this.docRef("roles", id);
    return from(updateDoc(ref, updates)).pipe(switchMap(() => this.getRoleById(id)));
  }
  deleteRole(id) {
    const ref = this.docRef("roles", id);
    return from(deleteDoc(ref)).pipe(map(() => void 0));
  }
  // Stats
  getStats() {
    return combineLatest([this.getResidents(), this.getHouseholds()]).pipe(map(([residents, households]) => {
      const seniorCitizens = residents.filter((r) => r.age >= 60).length;
      return {
        totalResidents: residents.length,
        totalHouseholds: households.length,
        seniorCitizens
      };
    }));
  }
  static {
    this.\u0275fac = function FirebaseDatabaseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FirebaseDatabaseService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FirebaseDatabaseService, factory: _FirebaseDatabaseService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FirebaseDatabaseService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/app.config.ts
function loadRuntimeConfig() {
  return () => fetch("assets/config.json").then((r) => {
    if (!r.ok) {
      throw new Error(`HTTP ${r.status}`);
    }
    return r.json();
  }).then((config) => {
    if (config?.apiBaseUrl?.trim()) {
      runtimeConfig.apiBaseUrl = config.apiBaseUrl.trim().replace(/\/+$/, "");
    }
    if (config?.firebase?.apiKey && config?.firebase?.projectId) {
      runtimeConfig.firebase = config.firebase;
    }
  }).catch(() => {
    console.error("BRIMMS: Missing or invalid assets/config.json.\n  Copy src/assets/config.example.json to src/assets/config.json and add your Firebase web app settings.");
  });
}
function createFirebaseApp() {
  const firebase = runtimeConfig.firebase;
  if (!firebase?.apiKey || !firebase?.projectId) {
    throw new Error("Firebase is not configured. Copy src/assets/config.example.json to src/assets/config.json and fill in your Firebase web app settings.");
  }
  return initializeApp(firebase);
}
var appConfig = {
  providers: [
    { provide: APP_INITIALIZER, useFactory: loadRuntimeConfig, multi: true },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => createFirebaseApp()),
    provideFirestore(() => getFirestore()),
    provideHttpClient(withInterceptors([httpErrorInterceptor])),
    provideCharts(withDefaultRegisterables()),
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: DATABASE_SERVICE, useClass: FirebaseDatabaseService }
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
var _c0 = ["notificationsList"];
var _c1 = (a0, a1, a2, a3, a4, a5) => ({ "global-notifications__item--unread": a0, "global-notifications__item--type-success": a1, "global-notifications__item--type-error": a2, "global-notifications__item--type-warning": a3, "global-notifications__item--type-info": a4, "global-notifications__item--hasRoute": a5 });
var _forTrack0 = ($index, $item) => $item.id;
function AppComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.unreadCount > 9 ? "9+" : ctx_r1.unreadCount);
  }
}
function AppComponent_Conditional_1_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Conditional_6_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markAllAsRead());
    });
    \u0275\u0275text(1, " Mark all as read ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_Conditional_1_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "No notifications yet.");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_Conditional_1_Conditional_6_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 19);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Conditional_6_Conditional_10_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.showLatestNotifications());
    });
    \u0275\u0275text(2, " Show latest notification ");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_Conditional_1_Conditional_6_Conditional_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Conditional_6_Conditional_10_For_4_Template_li_click_0_listener($event) {
      const n_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onNotificationClick(n_r8, $event));
    });
    \u0275\u0275elementStart(1, "div", 21)(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "notificationTypeLabel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(9, _c1, !n_r8.read, n_r8.type === "success", n_r8.type === "error", n_r8.type === "warning", n_r8.type === "info", ctx_r1.notificationHasRequestLink(n_r8)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", n_r8.title || \u0275\u0275pipeBind1(4, 4, n_r8.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, n_r8.createdAt, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", n_r8.message, " ");
  }
}
function AppComponent_Conditional_1_Conditional_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, AppComponent_Conditional_1_Conditional_6_Conditional_10_Conditional_0_Template, 3, 0, "div", 16);
    \u0275\u0275elementStart(1, "ul", 17, 0);
    \u0275\u0275listener("scroll", function AppComponent_Conditional_1_Conditional_6_Conditional_10_Template_ul_scroll_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onNotificationsScroll());
    });
    \u0275\u0275repeaterCreate(3, AppComponent_Conditional_1_Conditional_6_Conditional_10_For_4_Template, 10, 16, "li", 18, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.showLatestButton ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.notifications);
  }
}
function AppComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeNotifications());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Conditional_6_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 9)(3, "span", 10);
    \u0275\u0275text(4, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AppComponent_Conditional_1_Conditional_6_Conditional_5_Template, 2, 0, "button", 11);
    \u0275\u0275elementStart(6, "button", 12);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Conditional_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeNotifications());
    });
    \u0275\u0275text(7, " \u2715 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275conditionalCreate(9, AppComponent_Conditional_1_Conditional_6_Conditional_9_Template, 2, 0, "p", 14)(10, AppComponent_Conditional_1_Conditional_6_Conditional_10_Template, 5, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", "Close notifications");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Notifications");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.notifications.length ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Close notifications");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.notifications.length ? 9 : 10);
  }
}
function AppComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275listener("click", function AppComponent_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleNotifications());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 3);
    \u0275\u0275element(3, "path", 4)(4, "path", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AppComponent_Conditional_1_Conditional_5_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AppComponent_Conditional_1_Conditional_6_Template, 11, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Notifications")("aria-expanded", ctx_r1.showNotifications);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.unreadCount > 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showNotifications ? 6 : -1);
  }
}
var AppComponent = class _AppComponent {
  constructor(router, notificationsService, auth, data, firestorePortal) {
    this.router = router;
    this.notificationsService = notificationsService;
    this.auth = auth;
    this.data = data;
    this.firestorePortal = firestorePortal;
    this.unreadCount = 0;
    this.showNotifications = false;
    this.showGlobalUi = false;
    this.notifications = [];
    this.showLatestButton = false;
    this.firestoreBellBindKey = "";
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateGlobalUi(event.urlAfterRedirects);
        this.refreshNotifications();
      }
    });
  }
  ngOnInit() {
    this.notificationsSub = this.notificationsService.notifications$.subscribe(() => {
      this.refreshNotifications();
    });
    this.residentsDataSub = this.data.residentsObservable.subscribe(() => {
      this.refreshNotifications();
    });
    this.refreshNotifications();
  }
  ngOnDestroy() {
    this.notificationsSub?.unsubscribe();
    this.residentsDataSub?.unsubscribe();
    this.firestorePortalSub?.unsubscribe();
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    if (!this.showNotifications) {
      this.showLatestButton = false;
    }
  }
  closeNotifications() {
    this.showNotifications = false;
    this.showLatestButton = false;
  }
  showLatestNotifications() {
    this.notificationsListRef?.nativeElement.scrollTo({ top: 0, behavior: "smooth" });
    this.showLatestButton = false;
  }
  onNotificationsScroll() {
    const scrollTop = this.notificationsListRef?.nativeElement.scrollTop ?? 0;
    this.showLatestButton = scrollTop > 80;
  }
  markAsRead(id) {
    this.notificationsService.markAsRead(id);
  }
  notificationHasRequestLink(n) {
    return !!(n.linkRequestId?.trim() || n.actionRoute?.length === 2 && n.actionRoute[0] === "requests" || this.parseRequestIdFromMessage(n.message));
  }
  onNotificationClick(n, ev) {
    ev?.stopPropagation();
    this.notificationsService.markAsRead(n.id);
    const user = this.auth.currentUser;
    const role = user?.role;
    const reqId = n.linkRequestId?.trim() || (n.actionRoute?.[0] === "requests" && n.actionRoute?.[1] ? String(n.actionRoute[1]) : "") || this.parseRequestIdFromMessage(n.message);
    if (reqId && (role === "admin" || role === "staff")) {
      void this.router.navigateByUrl(`/${role}/requests/${encodeURIComponent(reqId)}`);
    } else if (reqId && role === "resident") {
      void this.router.navigateByUrl(`/resident/requests/${encodeURIComponent(reqId)}`);
    }
    this.closeNotifications();
    this.refreshNotifications();
  }
  parseRequestIdFromMessage(message) {
    if (!message) {
      return void 0;
    }
    const explicit = message.match(/\(Request #([^)]+)\)/);
    if (explicit) {
      return explicit[1].trim();
    }
    const hashForm = message.match(/request \(#([^)]+)\)/i);
    if (hashForm) {
      return hashForm[1].trim();
    }
    return void 0;
  }
  markAllAsRead() {
    for (const n of this.notifications) {
      if (!n.read) {
        this.notificationsService.markAsRead(n.id);
      }
    }
    this.refreshNotifications();
  }
  refreshNotifications() {
    const user = this.auth.currentUser;
    this.notificationsService.setActivePortalUserId(user?.id ?? null);
    this.ensureFirestoreBellSubscription();
    const all = this.notificationsService.getNotificationsSnapshot();
    const residentBarangayId = this.auth.getResidentBarangayIdForNotifications();
    this.notifications = all.filter((n) => this.notificationsService.isVisibleToUser(n, user?.id ?? null, user?.role ?? null, residentBarangayId));
    this.unreadCount = this.notifications.filter((n) => !n.read).length;
  }
  /** Cross-device bell documents in Firestore (`portalNotifications`). */
  ensureFirestoreBellSubscription() {
    const user = this.auth.currentUser;
    const role = (user?.role ?? "").toLowerCase();
    const barangay = role === "resident" ? this.auth.getResidentBarangayIdForNotifications() ?? "" : "";
    const key = user ? role === "resident" ? `${role}:${barangay}` : `${role}:${user.id}` : "";
    if (key === this.firestoreBellBindKey && this.firestorePortalSub && !this.firestorePortalSub.closed) {
      return;
    }
    this.firestoreBellBindKey = key;
    this.firestorePortalSub?.unsubscribe();
    if (!user) {
      this.notificationsService.applyFirestorePortalRows([]);
      return;
    }
    if (role === "resident") {
      if (!barangay) {
        this.notificationsService.applyFirestorePortalRows([]);
        return;
      }
      this.firestorePortalSub = this.firestorePortal.observeResident(barangay).subscribe((rows) => {
        this.notificationsService.applyFirestorePortalRows(rows);
      });
      return;
    }
    if (role === "admin" || role === "staff") {
      const portalUserId = user.id;
      this.firestorePortalSub = this.firestorePortal.observeStaff(portalUserId).subscribe((rows) => {
        this.notificationsService.applyFirestorePortalRows(rows);
      });
      return;
    }
    this.notificationsService.applyFirestorePortalRows([]);
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
    const normalizedUrl = url.split("?")[0].split("#")[0];
    const isStaffOrAdminRequestDetailPage = /^\/(staff|admin)\/requests\/[^/]+\/?$/.test(normalizedUrl);
    const isResidentProfilePage = /^\/(staff|admin)\/residents\/[^/]+\/?$/.test(normalizedUrl);
    const isHouseholdMapPage = /^\/(staff|admin)\/households\/map/.test(normalizedUrl);
    const isHouseholdDetailPage = /^\/(staff|admin)\/households\/[^/]+\/?$/.test(normalizedUrl) && !normalizedUrl.includes("/households/map") && !normalizedUrl.includes("/households/add") && !normalizedUrl.includes("/edit");
    const isNotFoundRoute = this.isNotFoundRouteSnapshot(this.router.routerState.snapshot.root);
    this.showGlobalUi = !normalizedUrl.startsWith("/login") && !normalizedUrl.startsWith("/contact") && !normalizedUrl.startsWith("/forgot-password") && !normalizedUrl.startsWith("/reset-password") && !normalizedUrl.includes("/residents/add") && !normalizedUrl.includes("/households/add") && !(normalizedUrl.includes("/households/") && normalizedUrl.includes("/edit")) && !isResidentProfilePage && !isStaffOrAdminRequestDetailPage && !isHouseholdMapPage && !isHouseholdDetailPage && !isNotFoundRoute;
    if (!this.showGlobalUi)
      this.showNotifications = false;
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(FirestorePortalNotificationsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.notificationsListRef = _t.first);
      }
    }, decls: 2, vars: 1, consts: [["notificationsList", ""], [1, "global-notifications"], ["type", "button", 1, "global-notifications__bell", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "global-notifications__icon"], ["d", "M12 3a5 5 0 0 0-5 5v2.5c0 .7-.2 1.4-.6 2l-.8 1.2A1 1 0 0 0 6.4 15h11.2a1 1 0 0 0 .8-1.3l-.8-1.2c-.4-.6-.6-1.3-.6-2V8a5 5 0 0 0-5-5Z"], ["d", "M10 18a2 2 0 0 0 4 0"], [1, "global-notifications__badge"], ["type", "button", "tabindex", "-1", 1, "global-notifications__backdrop", 3, "click"], ["role", "dialog", 1, "global-notifications__panel", 3, "click"], [1, "global-notifications__panelHeader"], [1, "global-notifications__panelTitle"], ["type", "button", 1, "global-notifications__markAll"], ["type", "button", 1, "global-notifications__close", 3, "click"], [1, "global-notifications__panelBody"], [1, "global-notifications__empty"], ["type", "button", 1, "global-notifications__markAll", 3, "click"], [1, "global-notifications__topAction"], [1, "global-notifications__list", 3, "scroll"], [1, "global-notifications__item", 3, "ngClass"], ["type", "button", 1, "global-notifications__showLatest", 3, "click"], [1, "global-notifications__item", 3, "click", "ngClass"], [1, "global-notifications__itemHeader"], [1, "global-notifications__itemTitle"], [1, "global-notifications__itemTime"], [1, "global-notifications__itemMessage"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
        \u0275\u0275conditionalCreate(1, AppComponent_Conditional_1_Template, 7, 4, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showGlobalUi ? 1 : -1);
      }
    }, dependencies: [RouterOutlet, NgClass, DatePipe, NotificationTypeLabelPipe], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.global-notifications[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 14px;\n  right: 76px;\n  z-index: 1100;\n  isolation: isolate;\n  transition: transform 0.3s ease-out, filter 0.3s ease-out;\n}\n@media (max-width: 640px) {\n  .global-notifications[_ngcontent-%COMP%] {\n    top: 12px;\n    right: 68px;\n  }\n}\nbody.sidebar-open[_nghost-%COMP%]   .global-notifications[_ngcontent-%COMP%], body.sidebar-open   [_nghost-%COMP%]   .global-notifications[_ngcontent-%COMP%] {\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n  opacity: 0.45;\n  pointer-events: none;\n  z-index: 999;\n}\n.global-notifications__bell[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--color-border);\n  border-radius: 9999px;\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.25s ease,\n    border-color 0.2s ease;\n}\n@media (max-width: 640px) {\n  .global-notifications__bell[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n.global-notifications__bell[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  box-shadow: var(--shadow-lg), 0 0 0 2px var(--color-border);\n  transform: scale(1.06);\n  border-color: var(--color-text-muted, rgba(0, 0, 0, 0.2));\n}\n.global-notifications__bell[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  box-shadow: var(--shadow);\n}\nbody.swal2-shown[_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:hover, body.swal2-shown   [_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:hover, \nbody.swal2-shown[_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:focus, body.swal2-shown   [_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:focus, \nbody.swal2-shown[_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:focus-visible, body.swal2-shown   [_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: var(--shadow-lg);\n  transform: scale(1);\n  border-color: var(--color-border);\n  background: var(--color-bg-card);\n}\nbody.swal2-shown[_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%], body.swal2-shown   [_nghost-%COMP%]   .global-notifications__bell[_ngcontent-%COMP%] {\n  color: var(--color-text-muted) !important;\n}\n.global-notifications__icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n  display: block;\n  transform: translateY(1px);\n}\n@media (max-width: 640px) {\n  .global-notifications__icon[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n}\n.global-notifications__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(35%, -35%);\n  min-width: 18px;\n  padding: 2px 6px;\n  border-radius: 9999px;\n  background: var(--color-warning);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-align: center;\n  line-height: 1.4;\n  box-shadow: var(--shadow);\n}\n.global-notifications__panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 52px;\n  right: 0;\n  width: 360px;\n  max-width: calc(100vw - 32px);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  max-height: calc(100vh - 32px);\n  z-index: 2;\n  animation: _ngcontent-%COMP%_globalNotificationsPanelIn 0.18s ease-out;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 640px) {\n  .global-notifications__panel[_ngcontent-%COMP%] {\n    top: 72px;\n    position: fixed;\n    left: 12px;\n    right: 12px;\n    width: auto;\n    max-width: none;\n    max-height: calc(100vh - 64px);\n  }\n}\n@keyframes _ngcontent-%COMP%_globalNotificationsPanelIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.global-notifications__panelHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--color-border);\n}\n.global-notifications__panelTitle[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.global-notifications__markAll[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 9999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-primary, #2563eb);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease,\n    transform 0.05s ease;\n}\n.global-notifications__markAll[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--color-primary, #2563eb) 8%, transparent);\n  border-color: color-mix(in srgb, var(--color-primary, #2563eb) 35%, transparent);\n}\n.global-notifications__markAll[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.global-notifications__markAll[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid color-mix(in srgb, var(--color-primary, #2563eb) 65%, transparent);\n  outline-offset: 2px;\n}\n.global-notifications__close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius);\n  padding: 6px 8px;\n  color: var(--color-text-muted);\n}\n.global-notifications__close[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  color: var(--color-text);\n}\n.global-notifications__panelBody[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  padding: 12px 14px;\n  background:\n    linear-gradient(\n      180deg,\n      color-mix(in srgb, var(--color-bg-card) 92%, transparent),\n      color-mix(in srgb, var(--color-bg) 100%, transparent));\n  display: flex;\n  flex-direction: column;\n}\n.global-notifications__empty[_ngcontent-%COMP%] {\n  margin: 8px 0 4px;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  text-align: center;\n}\n.global-notifications__topAction[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 8px;\n}\n.global-notifications__showLatest[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--color-primary, #2563eb) 30%, transparent);\n  background: color-mix(in srgb, var(--color-primary, #2563eb) 8%, transparent);\n  color: var(--color-primary, #2563eb);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 6px 12px;\n  border-radius: 9999px;\n}\n.global-notifications__showLatest[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--color-primary, #2563eb) 14%, transparent);\n}\n.global-notifications__list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n  max-height: 520px;\n  overflow-y: auto;\n  flex: 1;\n  min-height: 0;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.global-notifications__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  display: none;\n}\n.global-notifications__item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px 12px 9px 16px;\n  margin-bottom: 6px;\n  border-radius: calc(var(--radius) - 1px);\n  border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);\n  border-left-width: 3px;\n  border-left-style: solid;\n  border-left-color: transparent;\n  background: color-mix(in srgb, var(--color-bg-card) 92%, transparent);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n  cursor: pointer;\n  transition:\n    background 0.16s ease,\n    border-color 0.16s ease,\n    box-shadow 0.16s ease,\n    transform 0.08s ease;\n}\n.global-notifications__item[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--color-bg-card) 98%, transparent);\n  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.08);\n  transform: translateY(-1px);\n}\n.global-notifications__item--unread[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--color-primary-bg, #eff6ff) 85%, transparent);\n  border-color: color-mix(in srgb, var(--color-primary, #2563eb) 40%, var(--color-border) 60%);\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.22);\n}\n.global-notifications__item--unread[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 16px;\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--color-primary);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary, #2563eb) 20%, transparent);\n}\n.global-notifications__itemHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.global-notifications__itemTitle[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--color-text);\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.global-notifications__itemTime[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n}\n.global-notifications__itemMessage[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: var(--color-text-muted);\n}\n.global-notifications__item--type-success[_ngcontent-%COMP%] {\n  border-left-color: var(--color-success);\n}\n.global-notifications__item--type-error[_ngcontent-%COMP%] {\n  border-left-color: #dc2626;\n}\n.global-notifications__item--type-warning[_ngcontent-%COMP%] {\n  border-left-color: var(--color-warning);\n}\n.global-notifications__item--type-info[_ngcontent-%COMP%] {\n  border-left-color: var(--color-primary);\n}\n.global-notifications__item--hasRoute[_ngcontent-%COMP%]   .global-notifications__itemTitle[_ngcontent-%COMP%]::after {\n  content: " \\2192";\n  font-weight: 500;\n  color: var(--color-primary, #2563eb);\n}\n.global-notifications__backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: transparent;\n  border: none;\n  cursor: default;\n  z-index: 1;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=app.component.css.map */'] });
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
          <svg
            class="global-notifications__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3a5 5 0 0 0-5 5v2.5c0 .7-.2 1.4-.6 2l-.8 1.2A1 1 0 0 0 6.4 15h11.2a1 1 0 0 0 .8-1.3l-.8-1.2c-.4-.6-.6-1.3-.6-2V8a5 5 0 0 0-5-5Z" />
            <path d="M10 18a2 2 0 0 0 4 0" />
          </svg>
          @if (unreadCount > 0) {
            <span class="global-notifications__badge">{{ unreadCount > 9 ? '9+' : unreadCount }}</span>
          }
        </button>

        @if (showNotifications) {
          <button
            class="global-notifications__backdrop"
            type="button"
            (click)="closeNotifications()"
            [attr.aria-label]="'Close notifications'"
            tabindex="-1"
          ></button>
          <div
            class="global-notifications__panel"
            role="dialog"
            [attr.aria-label]="'Notifications'"
            (click)="$event.stopPropagation()"
          >
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
                @if (showLatestButton) {
                  <div class="global-notifications__topAction">
                    <button
                      class="global-notifications__showLatest"
                      type="button"
                      (click)="showLatestNotifications()"
                    >
                      Show latest notification
                    </button>
                  </div>
                }
                <ul class="global-notifications__list" #notificationsList (scroll)="onNotificationsScroll()">
                  @for (n of notifications; track n.id) {
                    <li
                      class="global-notifications__item"
                      [ngClass]="{
                        'global-notifications__item--unread': !n.read,
                        'global-notifications__item--type-success': n.type === 'success',
                        'global-notifications__item--type-error': n.type === 'error',
                        'global-notifications__item--type-warning': n.type === 'warning',
                        'global-notifications__item--type-info': n.type === 'info',
                        'global-notifications__item--hasRoute': notificationHasRequestLink(n)
                      }"
                      (click)="onNotificationClick(n, $event)"
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
        }
      </div>
    }
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;8e69cd36b1e428e3d247e6d9b3ea9af8fec3058d4c8ab23616debdceb9cc19cb;F:/BRIMS/src/app/app.component.ts */\n:host {\n  display: block;\n}\n.global-notifications {\n  position: fixed;\n  top: 14px;\n  right: 76px;\n  z-index: 1100;\n  isolation: isolate;\n  transition: transform 0.3s ease-out, filter 0.3s ease-out;\n}\n@media (max-width: 640px) {\n  .global-notifications {\n    top: 12px;\n    right: 68px;\n  }\n}\n:host-context(body.sidebar-open) .global-notifications {\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n  opacity: 0.45;\n  pointer-events: none;\n  z-index: 999;\n}\n.global-notifications__bell {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--color-border);\n  border-radius: 9999px;\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.25s ease,\n    border-color 0.2s ease;\n}\n@media (max-width: 640px) {\n  .global-notifications__bell {\n    width: 40px;\n    height: 40px;\n  }\n}\n.global-notifications__bell:hover {\n  background: var(--color-bg);\n  box-shadow: var(--shadow-lg), 0 0 0 2px var(--color-border);\n  transform: scale(1.06);\n  border-color: var(--color-text-muted, rgba(0, 0, 0, 0.2));\n}\n.global-notifications__bell:active {\n  transform: scale(0.97);\n  box-shadow: var(--shadow);\n}\n:host-context(body.swal2-shown) .global-notifications__bell:hover,\n:host-context(body.swal2-shown) .global-notifications__bell:focus,\n:host-context(body.swal2-shown) .global-notifications__bell:focus-visible {\n  outline: none;\n  box-shadow: var(--shadow-lg);\n  transform: scale(1);\n  border-color: var(--color-border);\n  background: var(--color-bg-card);\n}\n:host-context(body.swal2-shown) .global-notifications__bell {\n  color: var(--color-text-muted) !important;\n}\n.global-notifications__icon {\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n  display: block;\n  transform: translateY(1px);\n}\n@media (max-width: 640px) {\n  .global-notifications__icon {\n    width: 20px;\n    height: 20px;\n  }\n}\n.global-notifications__badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(35%, -35%);\n  min-width: 18px;\n  padding: 2px 6px;\n  border-radius: 9999px;\n  background: var(--color-warning);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-align: center;\n  line-height: 1.4;\n  box-shadow: var(--shadow);\n}\n.global-notifications__panel {\n  position: absolute;\n  top: 52px;\n  right: 0;\n  width: 360px;\n  max-width: calc(100vw - 32px);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  max-height: calc(100vh - 32px);\n  z-index: 2;\n  animation: globalNotificationsPanelIn 0.18s ease-out;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 640px) {\n  .global-notifications__panel {\n    top: 72px;\n    position: fixed;\n    left: 12px;\n    right: 12px;\n    width: auto;\n    max-width: none;\n    max-height: calc(100vh - 64px);\n  }\n}\n@keyframes globalNotificationsPanelIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.global-notifications__panelHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--color-border);\n}\n.global-notifications__panelTitle {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.global-notifications__markAll {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 9999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-primary, #2563eb);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease,\n    transform 0.05s ease;\n}\n.global-notifications__markAll:hover {\n  background: color-mix(in srgb, var(--color-primary, #2563eb) 8%, transparent);\n  border-color: color-mix(in srgb, var(--color-primary, #2563eb) 35%, transparent);\n}\n.global-notifications__markAll:active {\n  transform: translateY(1px);\n}\n.global-notifications__markAll:focus-visible {\n  outline: 2px solid color-mix(in srgb, var(--color-primary, #2563eb) 65%, transparent);\n  outline-offset: 2px;\n}\n.global-notifications__close {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius);\n  padding: 6px 8px;\n  color: var(--color-text-muted);\n}\n.global-notifications__close:hover {\n  background: var(--color-bg);\n  color: var(--color-text);\n}\n.global-notifications__panelBody {\n  flex: 1;\n  min-height: 0;\n  padding: 12px 14px;\n  background:\n    linear-gradient(\n      180deg,\n      color-mix(in srgb, var(--color-bg-card) 92%, transparent),\n      color-mix(in srgb, var(--color-bg) 100%, transparent));\n  display: flex;\n  flex-direction: column;\n}\n.global-notifications__empty {\n  margin: 8px 0 4px;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  text-align: center;\n}\n.global-notifications__topAction {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 8px;\n}\n.global-notifications__showLatest {\n  border: 1px solid color-mix(in srgb, var(--color-primary, #2563eb) 30%, transparent);\n  background: color-mix(in srgb, var(--color-primary, #2563eb) 8%, transparent);\n  color: var(--color-primary, #2563eb);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 6px 12px;\n  border-radius: 9999px;\n}\n.global-notifications__showLatest:hover {\n  background: color-mix(in srgb, var(--color-primary, #2563eb) 14%, transparent);\n}\n.global-notifications__list {\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n  max-height: 520px;\n  overflow-y: auto;\n  flex: 1;\n  min-height: 0;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.global-notifications__list::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  display: none;\n}\n.global-notifications__item {\n  position: relative;\n  padding: 10px 12px 9px 16px;\n  margin-bottom: 6px;\n  border-radius: calc(var(--radius) - 1px);\n  border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);\n  border-left-width: 3px;\n  border-left-style: solid;\n  border-left-color: transparent;\n  background: color-mix(in srgb, var(--color-bg-card) 92%, transparent);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n  cursor: pointer;\n  transition:\n    background 0.16s ease,\n    border-color 0.16s ease,\n    box-shadow 0.16s ease,\n    transform 0.08s ease;\n}\n.global-notifications__item:hover {\n  background: color-mix(in srgb, var(--color-bg-card) 98%, transparent);\n  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.08);\n  transform: translateY(-1px);\n}\n.global-notifications__item--unread {\n  background: color-mix(in srgb, var(--color-primary-bg, #eff6ff) 85%, transparent);\n  border-color: color-mix(in srgb, var(--color-primary, #2563eb) 40%, var(--color-border) 60%);\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.22);\n}\n.global-notifications__item--unread::before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 16px;\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--color-primary);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary, #2563eb) 20%, transparent);\n}\n.global-notifications__itemHeader {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.global-notifications__itemTitle {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--color-text);\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.global-notifications__itemTime {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n}\n.global-notifications__itemMessage {\n  margin: 0;\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: var(--color-text-muted);\n}\n.global-notifications__item--type-success {\n  border-left-color: var(--color-success);\n}\n.global-notifications__item--type-error {\n  border-left-color: #dc2626;\n}\n.global-notifications__item--type-warning {\n  border-left-color: var(--color-warning);\n}\n.global-notifications__item--type-info {\n  border-left-color: var(--color-primary);\n}\n.global-notifications__item--hasRoute .global-notifications__itemTitle::after {\n  content: " \\2192";\n  font-weight: 500;\n  color: var(--color-primary, #2563eb);\n}\n.global-notifications__backdrop {\n  position: fixed;\n  inset: 0;\n  background: transparent;\n  border: none;\n  cursor: default;\n  z-index: 1;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=app.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: NotificationService }, { type: AuthService }, { type: DataService }, { type: FirestorePortalNotificationsService }], { notificationsListRef: [{
    type: ViewChild,
    args: ["notificationsList"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 511 });
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
