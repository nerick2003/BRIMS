import {
  AlertService
} from "./chunk-4ABWLEHO.js";
import "./chunk-75B3RZGW.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-YX676IPB.js";
import {
  Router,
  RouterLink
} from "./chunk-HOXEAXWN.js";
import "./chunk-ZNESRAKE.js";
import {
  AuthService
} from "./chunk-F47T3EGJ.js";
import "./chunk-EXP2T67A.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MXCAMUXG.js";
import "./chunk-TWWAJFRB.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 23)(2, "line", 24);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 25)(2, "circle", 26);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function LoginComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 27);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Signing in...");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign In ");
  }
}
var REMEMBER_EMAIL_KEY = "brims_login_remember_email";
var LoginComponent = class _LoginComponent {
  constructor(auth, router, alert) {
    this.auth = auth;
    this.router = router;
    this.alert = alert;
    this.email = "";
    this.password = "";
    this.error = "";
    this.showPassword = false;
    this.loading = false;
    this.rememberMe = false;
  }
  ngOnInit() {
    try {
      const saved = localStorage.getItem(REMEMBER_EMAIL_KEY);
      if (saved) {
        this.email = saved;
        this.rememberMe = true;
      }
    } catch (e) {
    }
  }
  validate() {
    const e = (this.email || "").trim();
    const p = this.password;
    if (!e)
      return "Please enter your email or username.";
    if (e.includes("@")) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(e))
        return "Please enter a valid email address.";
    }
    if (!p)
      return "Please enter your password.";
    return null;
  }
  onSubmit() {
    this.error = "";
    const validationError = this.validate();
    if (validationError) {
      this.error = validationError;
      this.alert.error("Invalid input", validationError);
      return;
    }
    this.loading = true;
    const r = this.auth.login(this.email.trim(), this.password);
    if (r.success) {
      try {
        if (this.rememberMe) {
          localStorage.setItem(REMEMBER_EMAIL_KEY, this.email.trim());
        } else {
          localStorage.removeItem(REMEMBER_EMAIL_KEY);
        }
      } catch (e) {
      }
      const base = r.role === "admin" ? "/admin/dashboard" : r.role === "staff" ? "/staff/dashboard" : "/resident/dashboard";
      this.alert.successToast("Login successful", "Welcome to BRIMS.", 1e3).then(() => {
        this.loading = false;
        this.router.navigate([base]);
      }).catch(() => {
        this.loading = false;
      });
    } else {
      this.loading = false;
      this.error = "Invalid email or password. Use the email and password set by the barangay.";
      this.alert.error("Login failed", this.error);
    }
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  onForgotPassword() {
    this.router.navigate(["/forgot-password"]);
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 34, vars: 14, consts: [[1, "login-page"], [1, "login-card", "card"], [1, "login-logo", "assemble", "assemble--1"], ["src", "/assets/images/FOR-DASHBOARD.png", "alt", "Logo", "loading", "eager", "decoding", "async", 1, "logo"], [1, "login-title", "assemble", "assemble--2"], [1, "login-form", 3, "ngSubmit"], [1, "form-group", "assemble", "assemble--3"], ["for", "email"], ["id", "email", "type", "text", "name", "email", "placeholder", "Email or Username", "autocomplete", "username", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "assemble", "assemble--4"], ["for", "password"], [1, "password-wrap"], ["id", "password", "name", "password", "placeholder", "Password", "autocomplete", "current-password", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "password-toggle", 3, "click", "title"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "toggle-icon"], [1, "login-options", "assemble", "assemble--5"], [1, "remember-me"], ["type", "checkbox", "name", "rememberMe", 3, "ngModelChange", "ngModel"], ["id", "login-error", "role", "alert", 1, "login-error", "assemble", "assemble--6"], ["type", "submit", 1, "btn", "btn--primary", "login-btn", "assemble", "assemble--7", 3, "disabled"], ["role", "button", 1, "forgot-link", "assemble", "assemble--8", 3, "click"], [1, "login-help", "assemble", "assemble--9"], ["routerLink", "/contact", 1, "help-link"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["aria-hidden", "true", 1, "btn-spinner"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 4);
        \u0275\u0275text(5, "Barangay Resident Information Management System");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "form", 5);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(7, "div", 6)(8, "label", 7);
        \u0275\u0275text(9, "Email or Username");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 9)(12, "label", 10);
        \u0275\u0275text(13, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 13);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_16_listener() {
          return ctx.toggleShowPassword();
        });
        \u0275\u0275conditionalCreate(17, LoginComponent_Conditional_17_Template, 3, 0, ":svg:svg", 14)(18, LoginComponent_Conditional_18_Template, 3, 0, ":svg:svg", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 15)(20, "label", 16)(21, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.rememberMe, $event) || (ctx.rememberMe = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span");
        \u0275\u0275text(23, "Remember me");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(24, LoginComponent_Conditional_24_Template, 2, 1, "p", 18);
        \u0275\u0275elementStart(25, "button", 19);
        \u0275\u0275conditionalCreate(26, LoginComponent_Conditional_26_Template, 3, 0)(27, LoginComponent_Conditional_27_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "a", 20);
        \u0275\u0275listener("click", function LoginComponent_Template_a_click_28_listener() {
          return ctx.onForgotPassword();
        });
        \u0275\u0275text(29, "Forgot password?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "p", 21);
        \u0275\u0275text(31, " Need help? ");
        \u0275\u0275elementStart(32, "a", 22);
        \u0275\u0275text(33, "Contact the barangay");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275attribute("aria-invalid", ctx.error ? true : null)("aria-describedby", ctx.error ? "login-error" : null);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275attribute("aria-invalid", ctx.error ? true : null)("aria-describedby", ctx.error ? "login-error" : null);
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.showPassword ? "Hide password" : "Show password");
        \u0275\u0275attribute("aria-label", ctx.showPassword ? "Hide password" : "Show password");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPassword ? 17 : 18);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.rememberMe);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.error ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 26 : 27);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: url(/assets/images/BG.jpg) no-repeat center center fixed;\n  background-size: cover;\n  position: relative;\n  isolation: isolate;\n}\n.login-page[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.18) 0%,\n      transparent 45%),\n    rgba(0, 0, 0, 0.28);\n  z-index: -1;\n  animation: _ngcontent-%COMP%_pageFadeIn 600ms ease-out both;\n}\n@media (max-width: 640px) {\n  .login-page[_ngcontent-%COMP%] {\n    padding: 16px;\n    align-items: flex-start;\n    padding-top: 2rem;\n  }\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  animation: _ngcontent-%COMP%_loginCardEnter 650ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n}\n@media (max-width: 640px) {\n  .login-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: var(--radius);\n  }\n}\n@keyframes _ngcontent-%COMP%_loginCardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.985);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_pageFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.assemble[_ngcontent-%COMP%] {\n  --assemble-delay: 0ms;\n  opacity: 0;\n  transform: translateY(10px);\n  animation: _ngcontent-%COMP%_assembleIn 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  animation-delay: var(--assemble-delay);\n}\n.assemble--1[_ngcontent-%COMP%] {\n  --assemble-delay: 90ms;\n}\n.assemble--2[_ngcontent-%COMP%] {\n  --assemble-delay: 160ms;\n}\n.assemble--3[_ngcontent-%COMP%] {\n  --assemble-delay: 240ms;\n}\n.assemble--4[_ngcontent-%COMP%] {\n  --assemble-delay: 300ms;\n}\n.assemble--5[_ngcontent-%COMP%] {\n  --assemble-delay: 340ms;\n}\n.assemble--6[_ngcontent-%COMP%] {\n  --assemble-delay: 380ms;\n}\n.assemble--7[_ngcontent-%COMP%] {\n  --assemble-delay: 420ms;\n}\n.assemble--8[_ngcontent-%COMP%] {\n  --assemble-delay: 460ms;\n}\n.assemble--9[_ngcontent-%COMP%] {\n  --assemble-delay: 500ms;\n}\n@keyframes _ngcontent-%COMP%_assembleIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.login-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.login-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  object-fit: contain;\n}\n@media (max-width: 640px) {\n  .login-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n}\n@media (max-width: 480px) {\n  .login-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n}\n.login-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-title);\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  text-align: center;\n  margin: 0 0 1.5rem;\n  line-height: 1.4;\n}\n@media (max-width: 640px) {\n  .login-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    margin-bottom: 1.25rem;\n  }\n}\n@media (max-width: 480px) {\n  .login-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 1rem;\n  }\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.password-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n}\n.password-wrap[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 3rem;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted, #64748b);\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-md, 8px);\n  cursor: pointer;\n  transition: color 0.2s ease, background 0.2s ease;\n}\n.password-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background: var(--color-bg-muted, rgba(0, 0, 0, 0.06));\n}\n.password-toggle[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n}\n.password-toggle[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.login-options[_ngcontent-%COMP%] {\n  margin: -0.25rem 0 0.75rem;\n}\n.remember-me[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: var(--color-text-muted, #666);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.remember-me[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  accent-color: var(--color-primary);\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  margin-top: 0.5rem;\n  margin-bottom: 0.75rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.login-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.8;\n  cursor: not-allowed;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 1.125rem;\n  height: 1.125rem;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_loginSpinner 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_loginSpinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.forgot-link[_ngcontent-%COMP%] {\n  display: block;\n  text-align: right;\n  font-size: 0.875rem;\n  color: var(--color-primary);\n  cursor: pointer;\n  text-decoration: none;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.login-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.875rem;\n  margin: -0.5rem 0 0.5rem;\n}\n.login-help[_ngcontent-%COMP%] {\n  margin: 1.25rem 0 0;\n  padding-top: 1rem;\n  border-top: 1px solid var(--color-border, rgba(0, 0, 0, 0.1));\n  font-size: 0.875rem;\n  color: var(--color-text-muted, #666);\n  text-align: center;\n}\n.help-link[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-decoration: none;\n  font-weight: 500;\n}\n.help-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (prefers-reduced-motion: reduce) {\n  .login-card[_ngcontent-%COMP%], \n   .login-page[_ngcontent-%COMP%]::before, \n   .assemble[_ngcontent-%COMP%], \n   .btn-spinner[_ngcontent-%COMP%] {\n    animation: none !important;\n    transform: none !important;\n    opacity: 1 !important;\n    filter: none !important;\n  }\n  .password-toggle[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="login-page">\r
  <div class="login-card card">\r
    <div class="login-logo assemble assemble--1">\r
      <img class="logo" src="/assets/images/FOR-DASHBOARD.png" alt="Logo" loading="eager" decoding="async" />\r
    </div>\r
    <h1 class="login-title assemble assemble--2">Barangay Resident Information Management System</h1>\r
\r
    <form (ngSubmit)="onSubmit()" class="login-form">\r
      <div class="form-group assemble assemble--3">\r
        <label for="email">Email or Username</label>\r
        <input\r
          id="email"\r
          type="text"\r
          class="form-control"\r
          [(ngModel)]="email"\r
          name="email"\r
          placeholder="Email or Username"\r
          autocomplete="username"\r
          [attr.aria-invalid]="error ? true : null"\r
          [attr.aria-describedby]="error ? 'login-error' : null"\r
        />\r
      </div>\r
      <div class="form-group assemble assemble--4">\r
        <label for="password">Password</label>\r
        <div class="password-wrap">\r
          <input\r
            id="password"\r
            [type]="showPassword ? 'text' : 'password'"\r
            class="form-control"\r
            [(ngModel)]="password"\r
            name="password"\r
            placeholder="Password"\r
            autocomplete="current-password"\r
            [attr.aria-invalid]="error ? true : null"\r
            [attr.aria-describedby]="error ? 'login-error' : null"\r
          />\r
          <button\r
            type="button"\r
            class="password-toggle"\r
            (click)="toggleShowPassword()"\r
            [attr.aria-label]="showPassword ? 'Hide password' : 'Show password'"\r
            [title]="showPassword ? 'Hide password' : 'Show password'"\r
          >\r
            @if (showPassword) {\r
              <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\r
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>\r
                <line x1="1" y1="1" x2="23" y2="23"/>\r
              </svg>\r
            } @else {\r
              <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\r
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>\r
                <circle cx="12" cy="12" r="3"/>\r
              </svg>\r
            }\r
          </button>\r
        </div>\r
      </div>\r
      <div class="login-options assemble assemble--5">\r
        <label class="remember-me">\r
          <input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe" />\r
          <span>Remember me</span>\r
        </label>\r
      </div>\r
      @if (error) {\r
        <p id="login-error" class="login-error assemble assemble--6" role="alert">{{ error }}</p>\r
      }\r
      <button\r
        type="submit"\r
        class="btn btn--primary login-btn assemble assemble--7"\r
        [disabled]="loading"\r
      >\r
        @if (loading) {\r
          <span class="btn-spinner" aria-hidden="true"></span>\r
          <span>Signing in...</span>\r
        } @else {\r
          Sign In\r
        }\r
      </button>\r
      <a (click)="onForgotPassword()" class="forgot-link assemble assemble--8" role="button">Forgot password?</a>\r
    </form>\r
\r
    <p class="login-help assemble assemble--9">\r
      Need help? <a routerLink="/contact" class="help-link">Contact the barangay</a>\r
    </p>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/pages/login/login.component.scss */\n.login-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: url(/assets/images/BG.jpg) no-repeat center center fixed;\n  background-size: cover;\n  position: relative;\n  isolation: isolate;\n}\n.login-page::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.18) 0%,\n      transparent 45%),\n    rgba(0, 0, 0, 0.28);\n  z-index: -1;\n  animation: pageFadeIn 600ms ease-out both;\n}\n@media (max-width: 640px) {\n  .login-page {\n    padding: 16px;\n    align-items: flex-start;\n    padding-top: 2rem;\n  }\n}\n.login-card {\n  width: 100%;\n  max-width: 420px;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  animation: loginCardEnter 650ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n}\n@media (max-width: 640px) {\n  .login-card {\n    max-width: 100%;\n    border-radius: var(--radius);\n  }\n}\n@keyframes loginCardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.985);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes pageFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.assemble {\n  --assemble-delay: 0ms;\n  opacity: 0;\n  transform: translateY(10px);\n  animation: assembleIn 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  animation-delay: var(--assemble-delay);\n}\n.assemble--1 {\n  --assemble-delay: 90ms;\n}\n.assemble--2 {\n  --assemble-delay: 160ms;\n}\n.assemble--3 {\n  --assemble-delay: 240ms;\n}\n.assemble--4 {\n  --assemble-delay: 300ms;\n}\n.assemble--5 {\n  --assemble-delay: 340ms;\n}\n.assemble--6 {\n  --assemble-delay: 380ms;\n}\n.assemble--7 {\n  --assemble-delay: 420ms;\n}\n.assemble--8 {\n  --assemble-delay: 460ms;\n}\n.assemble--9 {\n  --assemble-delay: 500ms;\n}\n@keyframes assembleIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.login-logo {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.login-logo .logo {\n  width: 280px;\n  height: 280px;\n  object-fit: contain;\n}\n@media (max-width: 640px) {\n  .login-logo .logo {\n    width: 200px;\n    height: 200px;\n  }\n}\n@media (max-width: 480px) {\n  .login-logo .logo {\n    width: 150px;\n    height: 150px;\n  }\n}\n.login-title {\n  font-family: var(--font-family-title);\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  text-align: center;\n  margin: 0 0 1.5rem;\n  line-height: 1.4;\n}\n@media (max-width: 640px) {\n  .login-title {\n    font-size: 1.125rem;\n    margin-bottom: 1.25rem;\n  }\n}\n@media (max-width: 480px) {\n  .login-title {\n    font-size: 1rem;\n    margin-bottom: 1rem;\n  }\n}\n.login-form .form-group {\n  margin-bottom: 1rem;\n}\n.password-wrap {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n}\n.password-wrap .form-control {\n  flex: 1;\n  padding-right: 3rem;\n}\n.password-toggle {\n  position: absolute;\n  right: 6px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted, #64748b);\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-md, 8px);\n  cursor: pointer;\n  transition: color 0.2s ease, background 0.2s ease;\n}\n.password-toggle:hover {\n  color: var(--color-primary);\n  background: var(--color-bg-muted, rgba(0, 0, 0, 0.06));\n}\n.password-toggle:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n}\n.password-toggle .toggle-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n.login-options {\n  margin: -0.25rem 0 0.75rem;\n}\n.remember-me {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: var(--color-text-muted, #666);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.remember-me input[type=checkbox] {\n  width: 1rem;\n  height: 1rem;\n  accent-color: var(--color-primary);\n}\n.login-btn {\n  width: 100%;\n  padding: 12px;\n  margin-top: 0.5rem;\n  margin-bottom: 0.75rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.login-btn:disabled {\n  opacity: 0.8;\n  cursor: not-allowed;\n}\n.btn-spinner {\n  width: 1.125rem;\n  height: 1.125rem;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: loginSpinner 0.6s linear infinite;\n}\n@keyframes loginSpinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.forgot-link {\n  display: block;\n  text-align: right;\n  font-size: 0.875rem;\n  color: var(--color-primary);\n  cursor: pointer;\n  text-decoration: none;\n}\n.forgot-link:hover {\n  text-decoration: underline;\n}\n.login-error {\n  color: #dc2626;\n  font-size: 0.875rem;\n  margin: -0.5rem 0 0.5rem;\n}\n.login-help {\n  margin: 1.25rem 0 0;\n  padding-top: 1rem;\n  border-top: 1px solid var(--color-border, rgba(0, 0, 0, 0.1));\n  font-size: 0.875rem;\n  color: var(--color-text-muted, #666);\n  text-align: center;\n}\n.help-link {\n  color: var(--color-primary);\n  text-decoration: none;\n  font-weight: 500;\n}\n.help-link:hover {\n  text-decoration: underline;\n}\n@media (prefers-reduced-motion: reduce) {\n  .login-card,\n  .login-page::before,\n  .assemble,\n  .btn-spinner {\n    animation: none !important;\n    transform: none !important;\n    opacity: 1 !important;\n    filter: none !important;\n  }\n  .password-toggle {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 17 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-2XQMCJKY.js.map
