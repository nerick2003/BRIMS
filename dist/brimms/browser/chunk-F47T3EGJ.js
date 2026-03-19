import {
  NotificationService
} from "./chunk-EXP2T67A.js";
import {
  BehaviorSubject,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  computed,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-MXCAMUXG.js";
import {
  __async,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/theme.service.ts
var STORAGE_KEY = "brims-theme";
var ThemeService = class _ThemeService {
  constructor() {
    this.themeSignal = signal(this.getStoredOrSystemTheme(), ...ngDevMode ? [{ debugName: "themeSignal" }] : []);
    this.theme = this.themeSignal.asReadonly();
    this.isDark = computed(() => this.themeSignal() === "dark", ...ngDevMode ? [{ debugName: "isDark" }] : []);
    this.applyTheme(this.themeSignal());
  }
  getTheme() {
    return this.themeSignal();
  }
  setTheme(theme) {
    this.themeSignal.set(theme);
    localStorage.setItem(STORAGE_KEY, theme);
    this.applyTheme(theme);
  }
  toggleTheme() {
    this.setTheme(this.themeSignal() === "dark" ? "light" : "dark");
  }
  getStoredOrSystemTheme() {
    if (typeof window === "undefined")
      return "light";
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light")
      return stored;
    return "light";
  }
  applyTheme(theme) {
    if (typeof document === "undefined")
      return;
    document.documentElement.setAttribute("data-theme", theme);
  }
  static {
    this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/services/database.interface.ts
var DATABASE_SERVICE = new InjectionToken("DATABASE_SERVICE");

// src/app/services/error-handler.service.ts
var ErrorHandlerService = class _ErrorHandlerService {
  static {
    this.ERROR_THROTTLE_MS = 3e3;
  }
  constructor(injector) {
    this.injector = injector;
    this.notificationService = null;
    this.lastErrorTimestamp = 0;
  }
  getNotificationService() {
    if (!this.notificationService) {
      try {
        this.notificationService = this.injector.get(NotificationService);
      } catch (e) {
        return null;
      }
    }
    return this.notificationService;
  }
  handleError(error) {
    const errorMessage = this.extractErrorMessage(error);
    const errorTitle = this.extractErrorTitle(error);
    if (typeof errorMessage === "string" && errorMessage.includes("Failed to fetch dynamically imported module")) {
      console.warn("Detected dynamic import failure. This is usually caused by an out-of-date app version. Reloading the page to load the latest version...", error);
      const notificationService2 = this.getNotificationService();
      if (notificationService2) {
        notificationService2.error("The app was updated. Reloading to load the latest version...", "Updating BRIMS");
      }
      if (typeof window !== "undefined" && window.location && navigator.onLine) {
        setTimeout(() => window.location.reload(), 500);
      }
      return;
    }
    const key = `${errorTitle}|${errorMessage}`;
    const now = Date.now();
    if (this.lastErrorKey === key && now - this.lastErrorTimestamp < _ErrorHandlerService.ERROR_THROTTLE_MS) {
      console.warn("Skipping duplicate error within throttle window:", key);
      return;
    }
    this.lastErrorKey = key;
    this.lastErrorTimestamp = now;
    if (errorMessage.startsWith("NG0103: Infinite change detection")) {
      console.warn("Detected Angular infinite change detection error (NG0103). See console for details.", error);
      return;
    }
    console.error("Global error handler:", error);
    const notificationService = this.getNotificationService();
    if (notificationService) {
      notificationService.error(errorMessage, errorTitle || "An Error Occurred");
    } else {
      console.warn("NotificationService not available, error:", errorMessage);
    }
  }
  /**
   * Handle errors with context for better user messages
   */
  handleErrorWithContext(error, context) {
    const errorMessage = this.getContextualErrorMessage(error, context);
    const errorTitle = this.getContextualErrorTitle(error, context);
    console.error(`Error in ${context.component || "unknown"}:`, error);
    const notificationService = this.getNotificationService();
    if (notificationService) {
      notificationService.error(errorMessage, errorTitle);
    }
  }
  /**
   * Extract user-friendly error message from various error types
   */
  extractErrorMessage(error) {
    if (error?.error?.message) {
      return error.error.message;
    }
    if (error?.error?.error) {
      return error.error.error;
    }
    if (error?.status === 0 || error?.name === "HttpErrorResponse") {
      return "Unable to connect to the server. Please check your internet connection and try again.";
    }
    if (error?.status) {
      return this.getHttpErrorMessage(error.status);
    }
    if (error?.message) {
      return error.message;
    }
    if (typeof error === "string") {
      return error;
    }
    return "An unexpected error occurred. Please try again or contact support if the problem persists.";
  }
  /**
   * Extract error title from error
   */
  extractErrorTitle(error) {
    if (error?.error?.title) {
      return error.error.title;
    }
    if (error?.status === 0) {
      return "Connection Error";
    }
    if (error?.status) {
      return this.getHttpErrorTitle(error.status);
    }
    return "Error";
  }
  /**
   * Get contextual error message based on component/action
   */
  getContextualErrorMessage(error, context) {
    const baseMessage = this.extractErrorMessage(error);
    if (context.action) {
      return `Failed to ${context.action}. ${baseMessage}`;
    }
    return baseMessage;
  }
  /**
   * Get contextual error title
   */
  getContextualErrorTitle(error, context) {
    if (context.action) {
      return `${context.action} Failed`;
    }
    return this.extractErrorTitle(error);
  }
  /**
   * Get user-friendly HTTP error messages
   */
  getHttpErrorMessage(status) {
    const messages = {
      400: "Invalid request. Please check your input and try again.",
      401: "You are not authorized to perform this action. Please log in again.",
      403: "You do not have permission to perform this action.",
      404: "The requested resource was not found.",
      409: "This action conflicts with existing data. Please refresh and try again.",
      422: "The data you provided is invalid. Please check your input.",
      429: "Too many requests. Please wait a moment and try again.",
      500: "A server error occurred. Please try again later or contact support.",
      502: "The server is temporarily unavailable. Please try again later.",
      503: "The service is temporarily unavailable. Please try again later.",
      504: "The request timed out. Please try again."
    };
    return messages[status] || `An error occurred (${status}). Please try again.`;
  }
  /**
   * Get HTTP error titles
   */
  getHttpErrorTitle(status) {
    const titles = {
      400: "Invalid Request",
      401: "Unauthorized",
      403: "Access Denied",
      404: "Not Found",
      409: "Conflict",
      422: "Validation Error",
      429: "Too Many Requests",
      500: "Server Error",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Timeout"
    };
    return titles[status] || "Error";
  }
  static {
    this.\u0275fac = function ErrorHandlerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ErrorHandlerService)(\u0275\u0275inject(Injector));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ErrorHandlerService, factory: _ErrorHandlerService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorHandlerService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Injector }], null);
})();

// src/app/services/data.service.ts
var DataService = class _DataService {
  constructor(database, audit) {
    this.database = database;
    this.audit = audit;
    this.residents = [];
    this.requests = [];
    this.households = [];
    this.users = [];
    this.roles = [];
    this.residents$ = new BehaviorSubject([]);
    this.requests$ = new BehaviorSubject([]);
    this.households$ = new BehaviorSubject([]);
    this.users$ = new BehaviorSubject([]);
    this.roles$ = new BehaviorSubject([]);
    this.notificationService = inject(NotificationService);
    this.errorHandler = inject(ErrorHandlerService);
    this.initializeData();
  }
  initializeData() {
    return __async(this, null, function* () {
      try {
        this.residents = yield firstValueFrom(this.database.getResidents());
        this.requests = yield firstValueFrom(this.database.getRequests());
        this.households = yield firstValueFrom(this.database.getHouseholds());
        this.users = yield firstValueFrom(this.database.getUsers());
        this.roles = yield firstValueFrom(this.database.getRoles());
        this.residents$.next(this.residents);
        this.requests$.next(this.requests);
        this.households$.next(this.households);
        this.users$.next(this.users);
        this.roles$.next(this.roles);
        this.database.getResidents().subscribe((residents) => {
          this.residents = residents;
          this.residents$.next(residents);
        });
        this.database.getRequests().subscribe((requests) => {
          this.requests = requests;
          this.requests$.next(requests);
        });
        this.database.getHouseholds().subscribe((households) => {
          this.households = households;
          this.households$.next(households);
        });
        this.database.getUsers().subscribe((users) => {
          this.users = users;
          this.users$.next(users);
        });
        this.database.getRoles().subscribe((roles) => {
          this.roles = roles;
          this.roles$.next(roles);
        });
        this.applyAutoArchiveRules();
      } catch (error) {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "initialize data"
        });
      }
    });
  }
  // Resident methods
  getResidentById(id) {
    if (id == null)
      return void 0;
    const idStr = String(id);
    return this.residents.find((r) => String(r.id) === idStr);
  }
  getResidentByResidentId(rid) {
    return this.residents.find((r) => r.residentId === rid);
  }
  /** Residents that are not archived (shown in regular lists and reports). */
  getActiveResidents() {
    return this.residents.filter((r) => !r.archived);
  }
  /** Residents that have been archived (shown only in Archives). */
  getArchivedResidents() {
    return this.residents.filter((r) => !!r.archived);
  }
  addResident(resident) {
    this.residents.push(resident);
    this.audit.log({
      action: "Add resident",
      category: "resident",
      details: `Added resident: ${resident.name} (${resident.residentId})`,
      entityId: resident.id,
      entityName: resident.name
    });
    this.residents$.next(this.residents);
    this.database.addResident(resident).subscribe({
      next: () => {
      },
      error: (error) => {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "add resident"
        });
        const index = this.residents.findIndex((r) => r.id === resident.id);
        if (index !== -1) {
          this.residents.splice(index, 1);
          this.residents$.next(this.residents);
        }
      }
    });
  }
  updateResident(id, updates) {
    const resident = this.residents.find((r) => r.id === id);
    if (!resident)
      return;
    this.audit.log({
      action: "Update resident",
      category: "resident",
      details: `Updated resident: ${resident.name} (${resident.residentId})`,
      entityId: id,
      entityName: resident.name
    });
    Object.assign(resident, updates);
    this.residents$.next(this.residents);
    if (updates.name !== void 0) {
      this.households.forEach((h) => {
        const member = h.members.find((m) => m.residentId === resident.residentId);
        if (member) {
          member.name = updates.name;
          this.database.updateHousehold(h.id, { members: h.members }).subscribe();
        }
      });
    }
    this.database.updateResident(id, updates).subscribe({
      next: () => {
      },
      error: (error) => {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "update resident"
        });
      }
    });
  }
  /** Mark a resident as archived (e.g. moved out, deceased, former resident). */
  archiveResident(id, reason) {
    const resident = this.residents.find((r) => r.id === id);
    if (!resident || resident.archived)
      return;
    const now = (/* @__PURE__ */ new Date()).toISOString();
    this.updateResident(id, {
      archived: true,
      archivedAt: now,
      archivedReason: reason
    });
  }
  /** Restore an archived resident so they appear again in regular lists. */
  unarchiveResident(id) {
    const resident = this.residents.find((r) => r.id === id);
    if (!resident || !resident.archived)
      return;
    this.updateResident(id, {
      archived: false,
      archivedAt: void 0,
      archivedReason: void 0
    });
  }
  // Request methods
  getRequestById(id) {
    return this.requests.find((r) => r.id === id);
  }
  getRequestsByResidentId(residentId) {
    return this.requests.filter((r) => r.residentId === residentId);
  }
  /** Requests that are not archived (active / recent). */
  getActiveRequests() {
    return this.requests.filter((r) => !r.archived).slice().sort((a, b) => {
      const da = this.parseDate(a.date);
      const db = this.parseDate(b.date);
      if (!da && !db)
        return 0;
      if (!da)
        return 1;
      if (!db)
        return -1;
      return db.getTime() - da.getTime();
    });
  }
  /** Requests that have been archived (old/completed). */
  getArchivedRequests() {
    return this.requests.filter((r) => !!r.archived);
  }
  addRequest(request) {
    this.requests.push(request);
    this.audit.log({
      action: "Add certificate request",
      category: "request",
      details: `${request.type} - ${request.purpose}`,
      entityId: request.id
    });
    this.requests$.next(this.requests);
    this.database.addRequest(request).subscribe({
      next: () => {
      },
      error: (error) => {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "add certificate request"
        });
        const index = this.requests.findIndex((r) => r.id === request.id);
        if (index !== -1) {
          this.requests.splice(index, 1);
          this.requests$.next(this.requests);
        }
      }
    });
  }
  updateRequest(id, updates) {
    const request = this.requests.find((r) => r.id === id);
    if (!request)
      return;
    if (updates.status) {
      this.audit.log({
        action: "Update request status",
        category: "request",
        details: `Request ${id}: ${request.status} \u2192 ${updates.status}`,
        entityId: id
      });
    }
    Object.assign(request, updates);
    this.requests$.next(this.requests);
    this.database.updateRequest(id, updates).subscribe({
      next: () => {
      },
      error: (error) => {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "update certificate request"
        });
      }
    });
  }
  /** Mark a request as archived, typically after it has been completed and is old. */
  archiveRequest(id) {
    const request = this.requests.find((r) => r.id === id);
    if (!request || request.archived)
      return;
    const now = (/* @__PURE__ */ new Date()).toISOString();
    this.updateRequest(id, {
      archived: true,
      archivedAt: now
    });
  }
  /** Restore a previously archived request so it appears again in regular lists. */
  unarchiveRequest(id) {
    const request = this.requests.find((r) => r.id === id);
    if (!request || !request.archived)
      return;
    this.updateRequest(id, {
      archived: false,
      archivedAt: void 0
    });
  }
  // Household methods
  getHouseholdByResidentId(residentId) {
    return this.households.find((h) => h.members.some((m) => m.residentId === residentId));
  }
  getHouseholdByHeadId(headId) {
    return this.households.find((h) => h.headId === headId);
  }
  getHouseholdById(id) {
    return this.households.find((h) => h.id === id);
  }
  /** Households that are not archived (active). */
  getActiveHouseholds() {
    return this.households.filter((h) => !h.archived);
  }
  /** Households that have been archived (inactive / merged / relocated). */
  getArchivedHouseholds() {
    return this.households.filter((h) => !!h.archived);
  }
  addHousehold(household) {
    this.households.push(household);
    this.audit.log({
      action: "Add household",
      category: "household",
      details: `Added household ${household.householdId} (${household.address})`,
      entityId: household.id,
      entityName: household.householdId
    });
    this.households$.next(this.households);
    this.database.addHousehold(household).subscribe({
      next: () => {
      },
      error: (error) => {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "add household"
        });
        const index = this.households.findIndex((h) => h.id === household.id);
        if (index !== -1) {
          this.households.splice(index, 1);
          this.households$.next(this.households);
        }
      }
    });
  }
  updateHousehold(id, updates) {
    const household = this.households.find((h) => h.id === id);
    if (!household)
      return;
    this.audit.log({
      action: "Update household",
      category: "household",
      details: `Updated household ${household.householdId}`,
      entityId: id,
      entityName: household.householdId
    });
    Object.assign(household, updates);
    this.households$.next(this.households);
    this.database.updateHousehold(id, updates).subscribe({
      next: () => {
      },
      error: (error) => {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "update household"
        });
      }
    });
  }
  // Stats
  getStats() {
    const activeResidents = this.getActiveResidents();
    const activeHouseholds = this.getActiveHouseholds();
    const senior = activeResidents.filter((r) => r.age >= 60).length;
    return {
      totalResidents: activeResidents.length,
      totalHouseholds: activeHouseholds.length,
      seniorCitizens: senior
    };
  }
  // User methods
  getUsersByRole(role) {
    return this.users.filter((u) => u.role.toLowerCase() === role.toLowerCase() && !u.archived);
  }
  /** Users (staff/admin/resident) that are not archived. */
  getActiveUsers() {
    return this.users.filter((u) => !u.archived);
  }
  /** Archived users, typically former staff/admin accounts. */
  getArchivedUsers() {
    return this.users.filter((u) => !!u.archived);
  }
  addUser(user) {
    this.users.push(user);
    this.audit.log({
      action: "Add user",
      category: "user",
      details: `Added user: ${user.name} (${user.email}) - ${user.role}`,
      entityId: user.id,
      entityName: user.name
    });
    this.users$.next(this.users);
    const role = this.roles.find((r) => r.name === user.role);
    if (role) {
      role.userCount++;
      this.roles$.next(this.roles);
    }
    this.database.addUser(user).subscribe({
      next: () => {
        if (role) {
          this.database.updateRole(role.id, { userCount: role.userCount }).subscribe();
        }
      },
      error: (error) => {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "add user"
        });
        const index = this.users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
          this.users.splice(index, 1);
          this.users$.next(this.users);
          if (role) {
            role.userCount--;
            this.roles$.next(this.roles);
          }
        }
      }
    });
  }
  removeUser(userId) {
    const user = this.users.find((u) => u.id === userId);
    if (!user)
      return;
    this.audit.log({
      action: "Remove user",
      category: "user",
      details: `Removed user: ${user.name} (${user.email}) - ${user.role}`,
      entityId: userId,
      entityName: user.name
    });
    const role = this.roles.find((r) => r.name === user.role);
    if (role) {
      role.userCount--;
      this.roles$.next(this.roles);
    }
    const index = this.users.findIndex((u) => u.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.users$.next(this.users);
    }
    this.database.deleteUser(userId).subscribe({
      next: () => {
        if (role) {
          this.database.updateRole(role.id, { userCount: role.userCount }).subscribe();
        }
      },
      error: (error) => {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "remove user"
        });
        if (role)
          role.userCount++;
        this.users.push(user);
        this.users$.next(this.users);
        this.roles$.next(this.roles);
      }
    });
  }
  updateUserRole(userId, newRole) {
    const user = this.users.find((u) => u.id === userId);
    if (!user)
      return;
    this.audit.log({
      action: "Update user role",
      category: "user",
      details: `${user.name}: ${user.role} \u2192 ${newRole}`,
      entityId: userId,
      entityName: user.name
    });
    const oldRole = this.roles.find((r) => r.name === user.role);
    const newRoleObj = this.roles.find((r) => r.name === newRole);
    if (oldRole) {
      oldRole.userCount--;
    }
    if (newRoleObj) {
      newRoleObj.userCount++;
    }
    user.role = newRole;
    this.users$.next(this.users);
    this.roles$.next(this.roles);
    this.database.updateUser(userId, { role: newRole }).subscribe({
      next: () => {
        if (oldRole) {
          this.database.updateRole(oldRole.id, { userCount: oldRole.userCount }).subscribe();
        }
        if (newRoleObj) {
          this.database.updateRole(newRoleObj.id, { userCount: newRoleObj.userCount }).subscribe();
        }
      },
      error: (error) => {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "update user role"
        });
        if (oldRole)
          oldRole.userCount++;
        if (newRoleObj)
          newRoleObj.userCount--;
        user.role = oldRole?.name || user.role;
        this.users$.next(this.users);
        this.roles$.next(this.roles);
      }
    });
  }
  /** Update any user fields (e.g. profile picture). Use updateUserRole for role changes. */
  updateUser(userId, updates) {
    const user = this.users.find((u) => u.id === userId);
    if (!user)
      return;
    const originalUser = __spreadValues({}, user);
    Object.assign(user, updates);
    this.users$.next(this.users);
    this.database.updateUser(userId, updates).subscribe({
      next: () => {
      },
      error: (error) => {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "update user"
        });
        const index = this.users.findIndex((u) => u.id === userId);
        if (index !== -1) {
          this.users[index] = originalUser;
          this.users$.next(this.users);
        }
      }
    });
  }
  /** Archive a user account (e.g. former staff). Status is typically already Inactive. */
  archiveUser(userId) {
    const user = this.users.find((u) => u.id === userId);
    if (!user || user.archived)
      return;
    const now = (/* @__PURE__ */ new Date()).toISOString();
    this.updateUser(userId, {
      archived: true,
      archivedAt: now
    });
  }
  /** Restore an archived user account back to active visibility. */
  unarchiveUser(userId) {
    const user = this.users.find((u) => u.id === userId);
    if (!user || !user.archived)
      return;
    this.updateUser(userId, {
      archived: false,
      archivedAt: void 0
    });
  }
  // Observable getters for reactive components (optional, for future use)
  get residentsObservable() {
    return this.residents$.asObservable();
  }
  get requestsObservable() {
    return this.requests$.asObservable();
  }
  get householdsObservable() {
    return this.households$.asObservable();
  }
  get usersObservable() {
    return this.users$.asObservable();
  }
  get rolesObservable() {
    return this.roles$.asObservable();
  }
  // Role methods
  updateRole(id, updates) {
    const role = this.roles.find((r) => r.id === id);
    if (!role)
      return;
    const originalRole = __spreadValues({}, role);
    this.audit.log({
      action: "Update role",
      category: "role",
      details: `Updated role: ${role.name}`,
      entityId: id,
      entityName: role.name
    });
    Object.assign(role, updates);
    this.roles$.next(this.roles);
    this.database.updateRole(id, updates).subscribe({
      next: () => {
      },
      error: (error) => {
        this.errorHandler.handleErrorWithContext(error, {
          component: "DataService",
          action: "update role"
        });
        const index = this.roles.findIndex((r) => r.id === id);
        if (index !== -1) {
          this.roles[index] = originalRole;
          this.roles$.next(this.roles);
        }
      }
    });
  }
  // Internal helpers for archives / auto-archive
  /** Best-effort date parser that tolerates the formatted date strings used in demo data. */
  parseDate(value) {
    if (!value)
      return null;
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }
  /** Automatically archive very old requests and long-inactive users based on simple time rules. */
  applyAutoArchiveRules() {
    const now = Date.now();
    const monthMs = 30 * 24 * 60 * 60 * 1e3;
    const requestsThreshold = now - 12 * monthMs;
    this.requests.forEach((req) => {
      if (req.archived)
        return;
      const requestDate = this.parseDate(req.date);
      if (!requestDate)
        return;
      const isOld = requestDate.getTime() < requestsThreshold;
      const isFinalStatus = req.status === "Approved" || req.status === "Rejected";
      if (isOld && isFinalStatus) {
        this.archiveRequest(req.id);
      }
    });
    const usersThreshold = now - 24 * monthMs;
    this.users.forEach((user) => {
      if (user.archived)
        return;
      if (user.status !== "Inactive")
        return;
      const referenceDate = this.parseDate(user.lastLogin || user.createdAt);
      if (!referenceDate)
        return;
      const isOld = referenceDate.getTime() < usersThreshold;
      if (isOld) {
        this.archiveUser(user.id);
      }
    });
  }
  static {
    this.\u0275fac = function DataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DataService)(\u0275\u0275inject(DATABASE_SERVICE), \u0275\u0275inject(AuditLogService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [DATABASE_SERVICE]
  }] }, { type: AuditLogService }], null);
})();

// src/app/services/auth.service.ts
var PROFILE_PICTURE_PREFIX = "brims_profile_";
var AuthService = class _AuthService {
  constructor(theme, data, audit) {
    this.theme = theme;
    this.data = data;
    this.audit = audit;
    this.STORAGE_KEY = "brimms_user";
    this.currentProfilePicture$ = new BehaviorSubject(null);
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (raw) {
      try {
        const user = JSON.parse(raw);
        const pic = this.getProfilePictureFromData(user?.id, user?.role) ?? this.getStoredProfilePicture(user?.id);
        if (pic)
          this.currentProfilePicture$.next(pic);
      } catch (e) {
      }
    }
    this.data.residentsObservable.subscribe(() => this.syncCurrentUserProfilePicture());
    this.data.usersObservable.subscribe(() => this.syncCurrentUserProfilePicture());
  }
  syncCurrentUserProfilePicture() {
    const u = this.currentUser;
    if (!u)
      return;
    const pic = this.getProfilePictureFromData(u.id, u.role) ?? this.getStoredProfilePicture(u.id);
    this.currentProfilePicture$.next(pic);
  }
  getProfilePictureFromData(userId, role) {
    if (!userId)
      return null;
    if (role === "resident") {
      const r2 = this.data.getResidentById(userId);
      return r2?.profilePicture ?? null;
    }
    if (role === "staff" || role === "admin") {
      const us2 = this.data.users.find((u) => u.id === userId);
      return us2?.profilePicture ?? null;
    }
    const r = this.data.getResidentById(userId);
    if (r?.profilePicture)
      return r.profilePicture;
    const us = this.data.users.find((u) => u.id === userId);
    return us?.profilePicture ?? null;
  }
  login(email, password) {
    const normalizedEmail = email?.trim().toLowerCase() ?? "";
    const pwd = password ?? "";
    const resident = this.data.residents.find((r) => r.email?.trim().toLowerCase() === normalizedEmail);
    if (resident?.password === pwd) {
      const user = {
        id: resident.id,
        name: resident.name,
        email: resident.email ?? normalizedEmail,
        role: "resident"
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
      this.currentProfilePicture$.next(resident.profilePicture ?? this.getStoredProfilePicture(user.id));
      this.audit.log({
        action: "Login",
        category: "auth",
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        details: "Resident logged in"
      });
      return { success: true, role: "resident" };
    }
    const staffOrAdmin = this.data.users.find((u) => u.email?.trim().toLowerCase() === normalizedEmail && (u.role === "Staff" || u.role === "Admin") && u.status === "Active");
    if (staffOrAdmin && staffOrAdmin.password === pwd) {
      const role = staffOrAdmin.role === "Admin" ? "admin" : "staff";
      const user = {
        id: staffOrAdmin.id,
        name: staffOrAdmin.name,
        email: staffOrAdmin.email,
        role
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
      this.currentProfilePicture$.next(staffOrAdmin.profilePicture ?? this.getStoredProfilePicture(user.id));
      this.audit.log({
        action: "Login",
        category: "auth",
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        details: `${staffOrAdmin.role} logged in`
      });
      return { success: true, role };
    }
    if (normalizedEmail === "staff@barangay.gov" && pwd === "staff123") {
      const user = { id: "1", name: "Staff User", email: normalizedEmail, role: "staff" };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
      this.currentProfilePicture$.next(this.getStoredProfilePicture(user.id));
      this.audit.log({
        action: "Login",
        category: "auth",
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        details: "Demo staff logged in"
      });
      return { success: true, role: "staff" };
    }
    if (normalizedEmail === "admin@barangay.gov" && pwd === "admin123") {
      const user = { id: "4", name: "Admin User", email: normalizedEmail, role: "admin" };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
      this.currentProfilePicture$.next(this.getStoredProfilePicture(user.id));
      this.audit.log({
        action: "Login",
        category: "auth",
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        details: "Demo admin logged in"
      });
      return { success: true, role: "admin" };
    }
    if (normalizedEmail === "resident@email.com" && pwd === "resident123") {
      const user = { id: "1", name: "Juan Dela Cruz", email: normalizedEmail, role: "resident" };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
      this.currentProfilePicture$.next(this.getStoredProfilePicture(user.id));
      this.audit.log({
        action: "Login",
        category: "auth",
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        details: "Demo resident logged in"
      });
      return { success: true, role: "resident" };
    }
    return { success: false };
  }
  logout() {
    const user = this.currentUser;
    if (user) {
      this.audit.log({
        action: "Logout",
        category: "auth",
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        details: "User logged out"
      });
    }
    localStorage.removeItem(this.STORAGE_KEY);
    try {
      sessionStorage.removeItem(this.STORAGE_KEY);
    } catch (e) {
    }
    this.currentProfilePicture$.next(null);
    this.theme.setTheme("light");
  }
  get currentUser() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      try {
        localStorage.removeItem(this.STORAGE_KEY);
      } catch (e2) {
      }
      return null;
    }
  }
  get isLoggedIn() {
    return !!this.currentUser;
  }
  /** Profile picture for the current user (reactive). */
  get profilePicture$() {
    return this.currentProfilePicture$.asObservable();
  }
  get profilePictureUrl() {
    const u = this.currentUser;
    if (!u)
      return null;
    let v = this.currentProfilePicture$.value;
    if (v === null) {
      v = this.getProfilePictureFromData(u.id, u.role) ?? this.getStoredProfilePicture(u.id);
      if (v !== null)
        this.currentProfilePicture$.next(v);
    }
    return v;
  }
  /** Profile picture for a user – from shared data (visible to all who can see that account), then localStorage. */
  getProfilePicture(userId) {
    if (!userId)
      return null;
    const pic = this.getProfilePictureFromData(userId, void 0);
    if (pic)
      return pic;
    try {
      return localStorage.getItem(PROFILE_PICTURE_PREFIX + userId);
    } catch (e) {
      return null;
    }
  }
  setProfilePicture(userId, dataUrl) {
    if (!userId)
      return;
    const u = this.currentUser;
    try {
      if (u?.role === "resident") {
        this.data.updateResident(userId, { profilePicture: dataUrl });
      } else if (u?.role === "staff" || u?.role === "admin") {
        this.data.updateUser(userId, { profilePicture: dataUrl });
      } else {
        try {
          localStorage.setItem(PROFILE_PICTURE_PREFIX + userId, dataUrl);
        } catch (e) {
          console.warn("Failed to save profile picture", e);
        }
      }
      if (u?.id === userId) {
        this.currentProfilePicture$.next(dataUrl);
      }
    } catch (e) {
      console.warn("Failed to save profile picture", e);
    }
  }
  clearProfilePicture(userId) {
    if (!userId)
      return;
    const u = this.currentUser;
    try {
      if (u?.role === "resident") {
        this.data.updateResident(userId, { profilePicture: void 0 });
      } else if (u?.role === "staff" || u?.role === "admin") {
        this.data.updateUser(userId, { profilePicture: void 0 });
      }
      try {
        localStorage.removeItem(PROFILE_PICTURE_PREFIX + userId);
      } catch (e) {
      }
      if (u?.id === userId) {
        this.currentProfilePicture$.next(null);
      }
    } catch (e) {
      console.warn("Failed to clear profile picture", e);
    }
  }
  getStoredProfilePicture(userId) {
    if (!userId)
      return null;
    try {
      return localStorage.getItem(PROFILE_PICTURE_PREFIX + userId);
    } catch (e) {
      return null;
    }
  }
  /** Returns success and optional resetLink so the caller can send it via Nodemailer (backend). */
  forgotPassword(email) {
    const normalizedEmail = email?.trim().toLowerCase() ?? "";
    const residentExists = this.data.residents.some((r) => r.email?.trim().toLowerCase() === normalizedEmail);
    const staffOrAdminExists = this.data.users.some((u) => u.email?.trim().toLowerCase() === normalizedEmail && (u.role === "Staff" || u.role === "Admin") && u.status === "Active");
    if (!residentExists && !staffOrAdminExists) {
      return { success: false, message: "Email not found in our system." };
    }
    const resetToken = this.generateResetToken();
    const resetData = {
      email: normalizedEmail,
      token: resetToken,
      expiresAt: Date.now() + 36e5
      // 1 hour from now
    };
    sessionStorage.setItem(`reset_token_${normalizedEmail}`, JSON.stringify(resetData));
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const resetLink = `${origin}/reset-password?token=${resetToken}&email=${encodeURIComponent(normalizedEmail)}`;
    return { success: true, resetLink };
  }
  resetPassword(token, email, newPassword) {
    const normalizedEmail = email?.trim().toLowerCase() ?? "";
    const storageKey = `reset_token_${normalizedEmail}`;
    const resetDataStr = sessionStorage.getItem(storageKey);
    if (!resetDataStr) {
      return { success: false, message: "Invalid or expired reset token." };
    }
    const resetData = JSON.parse(resetDataStr);
    if (resetData.token !== token) {
      return { success: false, message: "Invalid reset token." };
    }
    if (Date.now() > resetData.expiresAt) {
      sessionStorage.removeItem(storageKey);
      return { success: false, message: "Reset token has expired. Please request a new one." };
    }
    sessionStorage.removeItem(storageKey);
    console.log(`Password reset for ${email} completed successfully.`);
    return { success: true };
  }
  generateResetToken() {
    const array = new Uint8Array(32);
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      crypto.getRandomValues(array);
    } else {
      for (let i = 0; i < array.length; i++)
        array[i] = Math.floor(Math.random() * 256);
    }
    return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(ThemeService), \u0275\u0275inject(DataService), \u0275\u0275inject(AuditLogService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ThemeService }, { type: DataService }, { type: AuditLogService }], null);
})();

// src/app/services/audit-log.service.ts
var STORAGE_KEY2 = "brims_audit_log";
var MAX_ENTRIES = 2e3;
var AuditLogService = class _AuditLogService {
  constructor(injector) {
    this.injector = injector;
    this.logs$ = new BehaviorSubject([]);
    this.notificationService = inject(NotificationService);
    this.loadFromStorage();
  }
  loadFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY2);
      const logs = raw ? JSON.parse(raw) : [];
      this.logs$.next(logs);
    } catch (e) {
      this.logs$.next([]);
    }
  }
  saveToStorage(logs) {
    try {
      const trimmed = logs.slice(-MAX_ENTRIES);
      localStorage.setItem(STORAGE_KEY2, JSON.stringify(trimmed));
      this.logs$.next(trimmed);
    } catch (e) {
      console.error("Error saving audit log:", e);
    }
  }
  /** Get all audit log entries (newest first). */
  getLogs() {
    const logs = this.logs$.value;
    return [...logs].reverse();
  }
  getLogsObservable() {
    return this.logs$.asObservable();
  }
  /**
   * Record an audit log entry. Call this from AuthService, DataService, or components.
   */
  log(params) {
    const user = this.injector.get(AuthService).currentUser;
    const entry = {
      id: `audit_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      action: params.action,
      category: params.category,
      userId: params.userId ?? user?.id,
      userName: params.userName ?? user?.name,
      userEmail: params.userEmail ?? user?.email,
      details: params.details,
      entityId: params.entityId,
      entityName: params.entityName
    };
    const logs = this.logs$.value;
    logs.push(entry);
    this.saveToStorage(logs);
  }
  static {
    this.\u0275fac = function AuditLogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuditLogService)(\u0275\u0275inject(Injector));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditLogService, factory: _AuditLogService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditLogService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Injector }], null);
})();

export {
  ThemeService,
  DATABASE_SERVICE,
  ErrorHandlerService,
  AuditLogService,
  DataService,
  AuthService
};
//# sourceMappingURL=chunk-F47T3EGJ.js.map
