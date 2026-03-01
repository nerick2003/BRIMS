import {
  HttpClient
} from "./chunk-UKN232ML.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ISBYAA2X.js";

// src/app/services/email.service.ts
var EmailService = class _EmailService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiBaseUrl = "http://localhost:4000";
  }
  sendEmail(payload) {
    return this.http.post(`${this.apiBaseUrl}/api/notifications/email`, payload);
  }
  sendBulkEmail(payload) {
    return this.http.post(`${this.apiBaseUrl}/api/notifications/email/bulk`, payload);
  }
  static {
    this.\u0275fac = function EmailService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailService, factory: _EmailService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  EmailService
};
//# sourceMappingURL=chunk-X6TSFZ72.js.map
