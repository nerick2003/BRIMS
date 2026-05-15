import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-PCIERS7P.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-IPZDF3JU.js";
import "./chunk-E73EYYCC.js";
import {
  AuthService
} from "./chunk-2RJNPIJT.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TUEAJAVR.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/pages/reset-password/reset-password.component.ts
function ResetPasswordComponent_Conditional_8_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ResetPasswordComponent_Conditional_8_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Resetting... ");
  }
}
function ResetPasswordComponent_Conditional_8_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Reset Password ");
  }
}
function ResetPasswordComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 8);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "label", 10);
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5, "\u2709");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_Conditional_8_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13)(8, "label", 14);
    \u0275\u0275text(9, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_Conditional_8_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "label", 17);
    \u0275\u0275text(15, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_Conditional_8_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, ResetPasswordComponent_Conditional_8_Conditional_19_Template, 2, 1, "p", 19);
    \u0275\u0275elementStart(20, "button", 20);
    \u0275\u0275conditionalCreate(21, ResetPasswordComponent_Conditional_8_Conditional_21_Template, 1, 0)(22, ResetPasswordComponent_Conditional_8_Conditional_22_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 21);
    \u0275\u0275listener("click", function ResetPasswordComponent_Conditional_8_Template_a_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275text(24, "Back to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPassword);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading ? 21 : 22);
  }
}
function ResetPasswordComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 22);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 23);
    \u0275\u0275text(4, "Password Reset Successful");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6, "Your password has been reset successfully. Redirecting to login...");
    \u0275\u0275elementEnd()();
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  constructor(auth, router, route) {
    this.auth = auth;
    this.router = router;
    this.route = route;
    this.token = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.error = "";
    this.success = false;
    this.loading = false;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.token = params["token"] || "";
      this.email = params["email"] || "";
      if (!this.token || !this.email) {
        this.error = "Invalid reset link. Please request a new password reset.";
      }
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (!this.password || !this.confirmPassword) {
        this.error = "Please fill in all fields.";
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.error = "Passwords do not match.";
        return;
      }
      if (this.password.length < 8) {
        this.error = "Password must be at least 8 characters long.";
        return;
      }
      this.error = "";
      this.loading = true;
      try {
        const result = yield this.auth.resetPassword(this.token, this.email, this.password);
        if (result.success) {
          this.success = true;
          setTimeout(() => {
            this.router.navigate(["/login"]);
          }, 2e3);
        } else {
          this.error = result.message || "Failed to reset password. Please try again.";
        }
      } finally {
        this.loading = false;
      }
    });
  }
  backToLogin() {
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 10, vars: 1, consts: [[1, "reset-password-page"], [1, "reset-password-card", "card"], [1, "reset-password-logo", "assemble", "assemble--1"], ["src", "/assets/images/FOR-DASHBOARD.png", "alt", "Logo", "loading", "eager", "decoding", "async", 1, "logo"], [1, "reset-password-title", "assemble", "assemble--2"], [1, "reset-password-subtitle", "assemble", "assemble--3"], [1, "reset-password-form"], [1, "success-message", "assemble", "assemble--3"], [1, "reset-password-form", 3, "ngSubmit"], [1, "form-group", "input-icon", "assemble", "assemble--4"], ["for", "email"], [1, "icon"], ["id", "email", "type", "email", "name", "email", "placeholder", "Email", "autocomplete", "email", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-group", "input-icon", "assemble", "assemble--5"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "placeholder", "Enter new password", "autocomplete", "new-password", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-group", "input-icon", "assemble", "assemble--6"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "name", "confirmPassword", "placeholder", "Confirm new password", "autocomplete", "new-password", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "reset-password-error", "assemble", "assemble--7"], ["type", "submit", 1, "btn", "btn--primary", "reset-password-btn", "assemble", "assemble--8", 3, "disabled"], [1, "back-link", "assemble", "assemble--9", 3, "click"], [1, "success-icon", "assemble", "assemble--4"], [1, "assemble", "assemble--5"], [1, "assemble", "assemble--6"]], template: function ResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 4);
        \u0275\u0275text(5, "Reset Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Enter your new password below.");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, ResetPasswordComponent_Conditional_8_Template, 25, 9, "form", 6)(9, ResetPasswordComponent_Conditional_9_Template, 7, 0, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(!ctx.success ? 8 : 9);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['\n.reset-password-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: url(/assets/images/BG.jpg) no-repeat center center fixed;\n  background-size: cover;\n  position: relative;\n  isolation: isolate;\n}\n.reset-password-page[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.25);\n  z-index: -1;\n  animation: _ngcontent-%COMP%_pageFadeIn 600ms ease-out both;\n}\n@media (max-width: 640px) {\n  .reset-password-page[_ngcontent-%COMP%] {\n    padding: 16px;\n    align-items: flex-start;\n    padding-top: 2rem;\n  }\n}\n.reset-password-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  animation: _ngcontent-%COMP%_resetCardEnter 650ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  will-change: transform, opacity;\n}\n@keyframes _ngcontent-%COMP%_resetCardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.985);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_pageFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.assemble[_ngcontent-%COMP%] {\n  --assemble-delay: 0ms;\n  opacity: 0;\n  transform: translateY(10px);\n  animation: _ngcontent-%COMP%_assembleIn 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  animation-delay: var(--assemble-delay);\n}\n.assemble--1[_ngcontent-%COMP%] {\n  --assemble-delay: 90ms;\n}\n.assemble--2[_ngcontent-%COMP%] {\n  --assemble-delay: 160ms;\n}\n.assemble--3[_ngcontent-%COMP%] {\n  --assemble-delay: 240ms;\n}\n.assemble--4[_ngcontent-%COMP%] {\n  --assemble-delay: 300ms;\n}\n.assemble--5[_ngcontent-%COMP%] {\n  --assemble-delay: 340ms;\n}\n.assemble--6[_ngcontent-%COMP%] {\n  --assemble-delay: 380ms;\n}\n.assemble--7[_ngcontent-%COMP%] {\n  --assemble-delay: 420ms;\n}\n.assemble--8[_ngcontent-%COMP%] {\n  --assemble-delay: 460ms;\n}\n.assemble--9[_ngcontent-%COMP%] {\n  --assemble-delay: 500ms;\n}\n@keyframes _ngcontent-%COMP%_assembleIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.reset-password-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.reset-password-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  object-fit: contain;\n}\n.reset-password-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-text);\n  text-align: center;\n  margin: 0 0 0.5rem;\n}\n.reset-password-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-secondary);\n  text-align: center;\n  margin: 0 0 1.5rem;\n  line-height: 1.5;\n}\n.reset-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.reset-password-form[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  left: 12px;\n}\n.reset-password-form[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.reset-password-form[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background-color: var(--color-bg-secondary);\n  cursor: not-allowed;\n}\n.reset-password-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  margin-top: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n.reset-password-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--color-primary);\n  cursor: pointer;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.reset-password-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.875rem;\n  margin: -0.5rem 0 0.5rem;\n}\n.success-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem 0;\n}\n.success-message[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #10b981;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  margin: 0 auto 1rem;\n}\n.success-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.75rem;\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-secondary);\n  margin: 0;\n  line-height: 1.5;\n}\n@media (prefers-reduced-motion: reduce) {\n  .reset-password-card[_ngcontent-%COMP%], \n   .reset-password-page[_ngcontent-%COMP%]::before, \n   .assemble[_ngcontent-%COMP%] {\n    animation: none !important;\n    transform: none !important;\n    opacity: 1 !important;\n    filter: none !important;\n  }\n}\n/*# sourceMappingURL=reset-password.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="reset-password-page">\r\n  <div class="reset-password-card card">\r\n    <div class="reset-password-logo assemble assemble--1">\r\n      <img class="logo" src="/assets/images/FOR-DASHBOARD.png" alt="Logo" loading="eager" decoding="async" />\r\n    </div>\r\n    <h1 class="reset-password-title assemble assemble--2">Reset Password</h1>\r\n    <p class="reset-password-subtitle assemble assemble--3">Enter your new password below.</p>\r\n\r\n    @if (!success) {\r\n      <form (ngSubmit)="onSubmit()" class="reset-password-form">\r\n        <div class="form-group input-icon assemble assemble--4">\r\n          <label for="email">Email</label>\r\n          <span class="icon">\u2709</span>\r\n          <input\r\n            id="email"\r\n            type="email"\r\n            class="form-control"\r\n            [(ngModel)]="email"\r\n            name="email"\r\n            placeholder="Email"\r\n            autocomplete="email"\r\n            [disabled]="true"\r\n          />\r\n        </div>\r\n        <div class="form-group input-icon assemble assemble--5">\r\n          <label for="password">New Password</label>\r\n          <span class="icon">\u{1F512}</span>\r\n          <input\r\n            id="password"\r\n            type="password"\r\n            class="form-control"\r\n            [(ngModel)]="password"\r\n            name="password"\r\n            placeholder="Enter new password"\r\n            autocomplete="new-password"\r\n            [disabled]="loading"\r\n          />\r\n        </div>\r\n        <div class="form-group input-icon assemble assemble--6">\r\n          <label for="confirmPassword">Confirm New Password</label>\r\n          <span class="icon">\u{1F512}</span>\r\n          <input\r\n            id="confirmPassword"\r\n            type="password"\r\n            class="form-control"\r\n            [(ngModel)]="confirmPassword"\r\n            name="confirmPassword"\r\n            placeholder="Confirm new password"\r\n            autocomplete="new-password"\r\n            [disabled]="loading"\r\n          />\r\n        </div>\r\n        @if (error) {\r\n          <p class="reset-password-error assemble assemble--7">{{ error }}</p>\r\n        }\r\n        <button type="submit" class="btn btn--primary reset-password-btn assemble assemble--8" [disabled]="loading">\r\n          @if (loading) {\r\n            Resetting...\r\n          } @else {\r\n            Reset Password\r\n          }\r\n        </button>\r\n        <a (click)="backToLogin()" class="back-link assemble assemble--9">Back to Login</a>\r\n      </form>\r\n    } @else {\r\n      <div class="success-message assemble assemble--3">\r\n        <div class="success-icon assemble assemble--4">\u2713</div>\r\n        <h2 class="assemble assemble--5">Password Reset Successful</h2>\r\n        <p class="assemble assemble--6">Your password has been reset successfully. Redirecting to login...</p>\r\n      </div>\r\n    }\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/pages/reset-password/reset-password.component.scss */\n.reset-password-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: url(/assets/images/BG.jpg) no-repeat center center fixed;\n  background-size: cover;\n  position: relative;\n  isolation: isolate;\n}\n.reset-password-page::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.25);\n  z-index: -1;\n  animation: pageFadeIn 600ms ease-out both;\n}\n@media (max-width: 640px) {\n  .reset-password-page {\n    padding: 16px;\n    align-items: flex-start;\n    padding-top: 2rem;\n  }\n}\n.reset-password-card {\n  width: 100%;\n  max-width: 420px;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  animation: resetCardEnter 650ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  will-change: transform, opacity;\n}\n@keyframes resetCardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.985);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes pageFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.assemble {\n  --assemble-delay: 0ms;\n  opacity: 0;\n  transform: translateY(10px);\n  animation: assembleIn 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  animation-delay: var(--assemble-delay);\n}\n.assemble--1 {\n  --assemble-delay: 90ms;\n}\n.assemble--2 {\n  --assemble-delay: 160ms;\n}\n.assemble--3 {\n  --assemble-delay: 240ms;\n}\n.assemble--4 {\n  --assemble-delay: 300ms;\n}\n.assemble--5 {\n  --assemble-delay: 340ms;\n}\n.assemble--6 {\n  --assemble-delay: 380ms;\n}\n.assemble--7 {\n  --assemble-delay: 420ms;\n}\n.assemble--8 {\n  --assemble-delay: 460ms;\n}\n.assemble--9 {\n  --assemble-delay: 500ms;\n}\n@keyframes assembleIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.reset-password-logo {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.reset-password-logo .logo {\n  width: 280px;\n  height: 280px;\n  object-fit: contain;\n}\n.reset-password-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-text);\n  text-align: center;\n  margin: 0 0 0.5rem;\n}\n.reset-password-subtitle {\n  font-size: 0.875rem;\n  color: var(--color-text-secondary);\n  text-align: center;\n  margin: 0 0 1.5rem;\n  line-height: 1.5;\n}\n.reset-password-form .form-group {\n  margin-bottom: 1rem;\n}\n.reset-password-form .input-icon .icon {\n  left: 12px;\n}\n.reset-password-form .input-icon .form-control {\n  padding-left: 40px;\n}\n.reset-password-form .input-icon .form-control:disabled {\n  background-color: var(--color-bg-secondary);\n  cursor: not-allowed;\n}\n.reset-password-btn {\n  width: 100%;\n  padding: 12px;\n  margin-top: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n.reset-password-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.back-link {\n  display: block;\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--color-primary);\n  cursor: pointer;\n  text-decoration: none;\n}\n.back-link:hover {\n  text-decoration: underline;\n}\n.reset-password-error {\n  color: #dc2626;\n  font-size: 0.875rem;\n  margin: -0.5rem 0 0.5rem;\n}\n.success-message {\n  text-align: center;\n  padding: 1rem 0;\n}\n.success-message .success-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #10b981;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  margin: 0 auto 1rem;\n}\n.success-message h2 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.75rem;\n}\n.success-message p {\n  font-size: 0.875rem;\n  color: var(--color-text-secondary);\n  margin: 0;\n  line-height: 1.5;\n}\n@media (prefers-reduced-motion: reduce) {\n  .reset-password-card,\n  .reset-password-page::before,\n  .assemble {\n    animation: none !important;\n    transform: none !important;\n    opacity: 1 !important;\n    filter: none !important;\n  }\n}\n/*# sourceMappingURL=reset-password.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/pages/reset-password/reset-password.component.ts", lineNumber: 14 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-5L3PX3H4.js.map
