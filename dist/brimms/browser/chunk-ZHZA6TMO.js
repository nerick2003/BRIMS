import {
  ApiConfigService
} from "./chunk-37FGLYSD.js";
import {
  HttpClient
} from "./chunk-E73EYYCC.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-TUEAJAVR.js";

// src/app/services/email.service.ts
var EmailService = class _EmailService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiConfig = inject(ApiConfigService);
  }
  get apiBaseUrl() {
    return this.apiConfig.apiBaseUrl;
  }
  sendEmail(payload) {
    return this.http.post(`${this.apiBaseUrl}/api/notifications/email`, payload);
  }
  sendBulkEmail(payload) {
    return this.http.post(`${this.apiBaseUrl}/api/notifications/email/bulk`, payload);
  }
  /** Use for bulk email with a file attachment (avoids sending large base64 in JSON). */
  sendBulkEmailWithAttachment(recipients, subject, message, file) {
    const form = new FormData();
    form.append("recipients", JSON.stringify(recipients));
    form.append("subject", subject);
    form.append("message", message);
    form.append("attachment", file, file.name);
    return this.http.post(`${this.apiBaseUrl}/api/notifications/email/bulk`, form);
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
//# sourceMappingURL=chunk-ZHZA6TMO.js.map
