import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MXCAMUXG.js";

// src/environments/environment.ts
var environment = {
  production: false,
  /** Backend API base URL for SMS/email notifications. Use full URL in production. */
  apiBaseUrl: "http://localhost:4000",
  firebase: {
    apiKey: "AIzaSyAd_Cwz636R33yNkEdMVP1afg4VvKNoAQA",
    authDomain: "brims-2028e.firebaseapp.com",
    projectId: "brims-2028e",
    storageBucket: "brims-2028e.firebasestorage.app",
    messagingSenderId: "196835647940",
    appId: "1:196835647940:web:ee812689169edfac364491",
    measurementId: "G-9X32JTKL7F"
  }
};

// src/app/services/api-config.service.ts
var runtimeApiConfig = {
  apiBaseUrl: environment.apiBaseUrl
};
var ApiConfigService = class _ApiConfigService {
  /** Backend base URL for notifications API (from config.json or environment). */
  get apiBaseUrl() {
    return runtimeApiConfig.apiBaseUrl || environment.apiBaseUrl;
  }
  /** True if the backend URL is still the placeholder (not configured for production). */
  get isPlaceholderUrl() {
    const u = this.apiBaseUrl || "";
    return u.includes("YOUR_BACKEND") || u === "https://YOUR_BACKEND_URL" || u === "";
  }
  static {
    this.\u0275fac = function ApiConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiConfigService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiConfigService, factory: _ApiConfigService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiConfigService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  environment,
  runtimeApiConfig,
  ApiConfigService
};
//# sourceMappingURL=chunk-3GLB2YWW.js.map
