import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MXCAMUXG.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/services/notification.service.ts
var NotificationService = class _NotificationService {
  constructor() {
    this._notifications = new BehaviorSubject([]);
    this.notifications$ = this._notifications.asObservable();
  }
  /** Number of unread notifications */
  get unreadCount() {
    return this._notifications.value.filter((n) => !n.read).length;
  }
  /** Convenience methods for different notification types */
  info(message, title) {
    this.add({ type: "info", message, title });
  }
  success(message, title) {
    this.add({ type: "success", message, title });
  }
  warning(message, title) {
    this.add({ type: "warning", message, title });
  }
  error(message, title) {
    this.add({ type: "error", message, title });
  }
  /** Mark a notification as read */
  markAsRead(id) {
    const updated = this._notifications.value.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { read: true }) : n);
    this._notifications.next(updated);
  }
  /** Mark all notifications as read */
  markAllAsRead() {
    const updated = this._notifications.value.map((n) => __spreadProps(__spreadValues({}, n), { read: true }));
    this._notifications.next(updated);
  }
  /** Clear all notifications */
  clear() {
    this._notifications.next([]);
  }
  /** Internal helper to add a notification */
  add(input) {
    const current = this._notifications.value;
    const last = current[0];
    if (last && last.type === input.type && last.message === input.message && last.title === input.title) {
      return;
    }
    const notification = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      type: input.type,
      title: input.title,
      message: input.message,
      createdAt: /* @__PURE__ */ new Date(),
      read: false
    };
    this._notifications.next([notification, ...current]);
  }
  static {
    this.\u0275fac = function NotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-EXP2T67A.js.map
