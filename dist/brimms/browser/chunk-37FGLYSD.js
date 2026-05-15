import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-TUEAJAVR.js";

// src/environments/environment.ts
var environment = {
  production: false,
  /** Fallback when assets/config.json is unavailable (local dev). */
  apiBaseUrl: "http://localhost:4000"
};

// src/app/config/runtime-config.ts
var runtimeConfig = {
  apiBaseUrl: environment.apiBaseUrl,
  firebase: null
};

// src/app/services/api-config.service.ts
var ApiConfigService = class _ApiConfigService {
  /** Backend base URL for notifications API (from config.json or environment fallback). */
  get apiBaseUrl() {
    if (!environment.production && this.isLocalDevHost()) {
      return environment.apiBaseUrl;
    }
    return runtimeConfig.apiBaseUrl || environment.apiBaseUrl;
  }
  /** True when the app is served from localhost (ng serve demo). */
  isLocalDevHost() {
    if (typeof window === "undefined") {
      return false;
    }
    const host = window.location.hostname;
    return host === "localhost" || host === "127.0.0.1";
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
  runtimeConfig,
  ApiConfigService
};
//# sourceMappingURL=chunk-37FGLYSD.js.map
