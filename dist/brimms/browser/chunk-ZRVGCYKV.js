import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-RLCWMJN5.js";
import {
  Router
} from "./chunk-SCD2KLNQ.js";
import "./chunk-UKN232ML.js";
import {
  AuthService
} from "./chunk-EMIWMFU5.js";
import "./chunk-BPYJUQPN.js";
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
} from "./chunk-ISBYAA2X.js";
import "./chunk-YP43Q66R.js";

// src/app/pages/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ForgotPasswordComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sending... ");
  }
}
function ForgotPasswordComponent_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Send Reset Link ");
  }
}
function ForgotPasswordComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 8);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "label", 10);
    \u0275\u0275text(3, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Conditional_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, ForgotPasswordComponent_Conditional_8_Conditional_5_Template, 2, 1, "p", 12);
    \u0275\u0275elementStart(6, "button", 13);
    \u0275\u0275conditionalCreate(7, ForgotPasswordComponent_Conditional_8_Conditional_7_Template, 1, 0)(8, ForgotPasswordComponent_Conditional_8_Conditional_8_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 14);
    \u0275\u0275listener("click", function ForgotPasswordComponent_Conditional_8_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275text(10, "Back to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading ? 7 : 8);
  }
}
function ForgotPasswordComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 15);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 16);
    \u0275\u0275text(4, "Check Your Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 17);
    \u0275\u0275text(6, "We've sent a password reset link to ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 18);
    \u0275\u0275text(10, "Please check your inbox and click the link to reset your password.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 19);
    \u0275\u0275listener("click", function ForgotPasswordComponent_Conditional_9_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275text(12, "Back to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.email);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.email = "";
    this.error = "";
    this.success = false;
    this.loading = false;
  }
  onSubmit() {
    if (!this.email) {
      this.error = "Please enter your email address.";
      return;
    }
    if (!this.isValidEmail(this.email)) {
      this.error = "Please enter a valid email address.";
      return;
    }
    this.error = "";
    this.loading = true;
    setTimeout(() => {
      const result = this.auth.forgotPassword(this.email);
      this.loading = false;
      if (result.success) {
        this.success = true;
      } else {
        this.error = result.message || "Failed to send reset email. Please try again.";
      }
    }, 1e3);
  }
  backToLogin() {
    this.router.navigate(["/login"]);
  }
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 10, vars: 1, consts: [[1, "forgot-password-page"], [1, "forgot-password-card", "card"], [1, "forgot-password-logo", "assemble", "assemble--1"], ["src", "/assets/images/FOR-DASHBOARD.png", "alt", "Logo", "loading", "eager", "decoding", "async", 1, "logo"], [1, "forgot-password-title", "assemble", "assemble--2"], [1, "forgot-password-subtitle", "assemble", "assemble--3"], [1, "forgot-password-form"], [1, "success-message", "assemble", "assemble--3"], [1, "forgot-password-form", 3, "ngSubmit"], [1, "form-group", "assemble", "assemble--4"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "placeholder", "Enter your email", "autocomplete", "email", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "forgot-password-error", "assemble", "assemble--5"], ["type", "submit", 1, "btn", "btn--primary", "forgot-password-btn", "assemble", "assemble--6", 3, "disabled"], [1, "back-link", "assemble", "assemble--7", 3, "click"], [1, "success-icon", "assemble", "assemble--4"], [1, "assemble", "assemble--5"], [1, "assemble", "assemble--6"], [1, "success-note", "assemble", "assemble--7"], ["type", "button", 1, "btn", "btn--primary", "assemble", "assemble--8", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 4);
        \u0275\u0275text(5, "Forgot Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Enter your email address and we'll send you a link to reset your password.");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, ForgotPasswordComponent_Conditional_8_Template, 11, 5, "form", 6)(9, ForgotPasswordComponent_Conditional_9_Template, 13, 1, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(!ctx.success ? 8 : 9);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['\n\n.forgot-password-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: url(/assets/images/BG.jpg) no-repeat center center fixed;\n  background-size: cover;\n  position: relative;\n  isolation: isolate;\n}\n.forgot-password-page[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.25);\n  z-index: -1;\n  animation: _ngcontent-%COMP%_pageFadeIn 600ms ease-out both;\n}\n@media (max-width: 640px) {\n  .forgot-password-page[_ngcontent-%COMP%] {\n    padding: 16px;\n    align-items: flex-start;\n    padding-top: 2rem;\n  }\n}\n.forgot-password-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  animation: _ngcontent-%COMP%_forgotCardEnter 650ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  will-change: transform, opacity;\n}\n@media (max-width: 640px) {\n  .forgot-password-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: var(--radius);\n  }\n}\n@keyframes _ngcontent-%COMP%_forgotCardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.985);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_pageFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.assemble[_ngcontent-%COMP%] {\n  --assemble-delay: 0ms;\n  opacity: 0;\n  transform: translateY(10px);\n  animation: _ngcontent-%COMP%_assembleIn 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  animation-delay: var(--assemble-delay);\n}\n.assemble--1[_ngcontent-%COMP%] {\n  --assemble-delay: 90ms;\n}\n.assemble--2[_ngcontent-%COMP%] {\n  --assemble-delay: 160ms;\n}\n.assemble--3[_ngcontent-%COMP%] {\n  --assemble-delay: 240ms;\n}\n.assemble--4[_ngcontent-%COMP%] {\n  --assemble-delay: 300ms;\n}\n.assemble--5[_ngcontent-%COMP%] {\n  --assemble-delay: 340ms;\n}\n.assemble--6[_ngcontent-%COMP%] {\n  --assemble-delay: 380ms;\n}\n.assemble--7[_ngcontent-%COMP%] {\n  --assemble-delay: 430ms;\n}\n.assemble--8[_ngcontent-%COMP%] {\n  --assemble-delay: 470ms;\n}\n@keyframes _ngcontent-%COMP%_assembleIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.forgot-password-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.forgot-password-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  object-fit: contain;\n}\n.forgot-password-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-text);\n  text-align: center;\n  margin: 0 0 0.5rem;\n}\n.forgot-password-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-secondary);\n  text-align: center;\n  margin: 0 0 1.5rem;\n  line-height: 1.5;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  left: 12px;\n}\n.forgot-password-form[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.forgot-password-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  margin-top: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n.forgot-password-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--color-primary);\n  cursor: pointer;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.forgot-password-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.875rem;\n  margin: -0.5rem 0 0.5rem;\n}\n.success-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem 0;\n}\n.success-message[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #10b981;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  margin: 0 auto 1rem;\n}\n.success-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.75rem;\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-secondary);\n  margin: 0 0 0.5rem;\n  line-height: 1.5;\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.success-message[_ngcontent-%COMP%]   .success-note[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  font-size: 0.8125rem;\n}\n.success-message[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n}\n@media (prefers-reduced-motion: reduce) {\n  .forgot-password-card[_ngcontent-%COMP%], \n   .forgot-password-page[_ngcontent-%COMP%]::before, \n   .assemble[_ngcontent-%COMP%] {\n    animation: none !important;\n    transform: none !important;\n    opacity: 1 !important;\n    filter: none !important;\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="forgot-password-page">\r
  <div class="forgot-password-card card">\r
    <div class="forgot-password-logo assemble assemble--1">\r
      <img class="logo" src="/assets/images/FOR-DASHBOARD.png" alt="Logo" loading="eager" decoding="async" />\r
    </div>\r
    <h1 class="forgot-password-title assemble assemble--2">Forgot Password</h1>\r
    <p class="forgot-password-subtitle assemble assemble--3">Enter your email address and we'll send you a link to reset your password.</p>\r
\r
    @if (!success) {\r
      <form (ngSubmit)="onSubmit()" class="forgot-password-form">\r
        <div class="form-group assemble assemble--4">\r
          <label for="email">Email Address</label>\r
          <input\r
            id="email"\r
            type="email"\r
            class="form-control"\r
            [(ngModel)]="email"\r
            name="email"\r
            placeholder="Enter your email"\r
            autocomplete="email"\r
            [disabled]="loading"\r
          />\r
        </div>\r
        @if (error) {\r
          <p class="forgot-password-error assemble assemble--5">{{ error }}</p>\r
        }\r
        <button type="submit" class="btn btn--primary forgot-password-btn assemble assemble--6" [disabled]="loading">\r
          @if (loading) {\r
            Sending...\r
          } @else {\r
            Send Reset Link\r
          }\r
        </button>\r
        <a (click)="backToLogin()" class="back-link assemble assemble--7">Back to Login</a>\r
      </form>\r
    } @else {\r
      <div class="success-message assemble assemble--3">\r
        <div class="success-icon assemble assemble--4">\u2713</div>\r
        <h2 class="assemble assemble--5">Check Your Email</h2>\r
        <p class="assemble assemble--6">We've sent a password reset link to <strong>{{ email }}</strong></p>\r
        <p class="success-note assemble assemble--7">Please check your inbox and click the link to reset your password.</p>\r
        <button type="button" class="btn btn--primary assemble assemble--8" (click)="backToLogin()">Back to Login</button>\r
      </div>\r
    }\r
  </div>\r
</div>\r
`, styles: ['/* src/app/pages/forgot-password/forgot-password.component.scss */\n.forgot-password-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: url(/assets/images/BG.jpg) no-repeat center center fixed;\n  background-size: cover;\n  position: relative;\n  isolation: isolate;\n}\n.forgot-password-page::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.25);\n  z-index: -1;\n  animation: pageFadeIn 600ms ease-out both;\n}\n@media (max-width: 640px) {\n  .forgot-password-page {\n    padding: 16px;\n    align-items: flex-start;\n    padding-top: 2rem;\n  }\n}\n.forgot-password-card {\n  width: 100%;\n  max-width: 420px;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  animation: forgotCardEnter 650ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  will-change: transform, opacity;\n}\n@media (max-width: 640px) {\n  .forgot-password-card {\n    max-width: 100%;\n    border-radius: var(--radius);\n  }\n}\n@keyframes forgotCardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.985);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes pageFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.assemble {\n  --assemble-delay: 0ms;\n  opacity: 0;\n  transform: translateY(10px);\n  animation: assembleIn 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  animation-delay: var(--assemble-delay);\n}\n.assemble--1 {\n  --assemble-delay: 90ms;\n}\n.assemble--2 {\n  --assemble-delay: 160ms;\n}\n.assemble--3 {\n  --assemble-delay: 240ms;\n}\n.assemble--4 {\n  --assemble-delay: 300ms;\n}\n.assemble--5 {\n  --assemble-delay: 340ms;\n}\n.assemble--6 {\n  --assemble-delay: 380ms;\n}\n.assemble--7 {\n  --assemble-delay: 430ms;\n}\n.assemble--8 {\n  --assemble-delay: 470ms;\n}\n@keyframes assembleIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.forgot-password-logo {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.forgot-password-logo .logo {\n  width: 280px;\n  height: 280px;\n  object-fit: contain;\n}\n.forgot-password-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-text);\n  text-align: center;\n  margin: 0 0 0.5rem;\n}\n.forgot-password-subtitle {\n  font-size: 0.875rem;\n  color: var(--color-text-secondary);\n  text-align: center;\n  margin: 0 0 1.5rem;\n  line-height: 1.5;\n}\n.forgot-password-form .form-group {\n  margin-bottom: 1rem;\n}\n.forgot-password-form .input-icon .icon {\n  left: 12px;\n}\n.forgot-password-form .input-icon .form-control {\n  padding-left: 40px;\n}\n.forgot-password-btn {\n  width: 100%;\n  padding: 12px;\n  margin-top: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n.forgot-password-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.back-link {\n  display: block;\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--color-primary);\n  cursor: pointer;\n  text-decoration: none;\n}\n.back-link:hover {\n  text-decoration: underline;\n}\n.forgot-password-error {\n  color: #dc2626;\n  font-size: 0.875rem;\n  margin: -0.5rem 0 0.5rem;\n}\n.success-message {\n  text-align: center;\n  padding: 1rem 0;\n}\n.success-message .success-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #10b981;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  margin: 0 auto 1rem;\n}\n.success-message h2 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.75rem;\n}\n.success-message p {\n  font-size: 0.875rem;\n  color: var(--color-text-secondary);\n  margin: 0 0 0.5rem;\n  line-height: 1.5;\n}\n.success-message p strong {\n  color: var(--color-text);\n}\n.success-message .success-note {\n  margin-bottom: 1.5rem;\n  font-size: 0.8125rem;\n}\n.success-message .btn {\n  width: 100%;\n  padding: 12px;\n}\n@media (prefers-reduced-motion: reduce) {\n  .forgot-password-card,\n  .forgot-password-page::before,\n  .assemble {\n    animation: none !important;\n    transform: none !important;\n    opacity: 1 !important;\n    filter: none !important;\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/pages/forgot-password/forgot-password.component.ts", lineNumber: 14 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-ZRVGCYKV.js.map
