import {
  require_sweetalert2_all
} from "./chunk-75B3RZGW.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MXCAMUXG.js";
import {
  __toESM
} from "./chunk-TWWAJFRB.js";

// src/app/services/alert.service.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var AlertService = class _AlertService {
  success(title, text) {
    return import_sweetalert2.default.fire({
      icon: "success",
      title,
      text
    });
  }
  /** Success message without OK button; closes automatically after timerMs (default 1000). */
  successToast(title, text, timerMs = 1e3) {
    return import_sweetalert2.default.fire({
      icon: "success",
      title,
      text,
      showConfirmButton: false,
      timer: timerMs,
      timerProgressBar: true
    });
  }
  error(title, text) {
    return import_sweetalert2.default.fire({
      icon: "error",
      title,
      text
    });
  }
  info(title, text) {
    return import_sweetalert2.default.fire({
      icon: "info",
      title,
      text
    });
  }
  warning(title, text) {
    return import_sweetalert2.default.fire({
      icon: "warning",
      title,
      text
    });
  }
  confirm(options) {
    return import_sweetalert2.default.fire({
      title: options?.title ?? "Are you sure?",
      text: options?.text ?? "",
      icon: options?.icon ?? "question",
      showCancelButton: true,
      confirmButtonText: options?.confirmButtonText ?? "Yes",
      cancelButtonText: options?.cancelButtonText ?? "Cancel",
      reverseButtons: true,
      focusCancel: true
    });
  }
  static {
    this.\u0275fac = function AlertService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlertService, factory: _AlertService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AlertService
};
//# sourceMappingURL=chunk-4ABWLEHO.js.map
