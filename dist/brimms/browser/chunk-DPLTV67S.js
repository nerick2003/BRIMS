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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MXCAMUXG.js";
import "./chunk-TWWAJFRB.js";

// src/app/pages/staff-profile/staff-profile.component.ts
function StaffProfileComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", ctx_r0.profilePictureUrl, \u0275\u0275sanitizeUrl);
  }
}
var StaffProfileComponent = class _StaffProfileComponent {
  constructor(auth) {
    this.auth = auth;
  }
  get profilePictureUrl() {
    const u = this.auth.currentUser;
    return u ? this.auth.getProfilePicture(u.id) : null;
  }
  get displayName() {
    return this.auth.currentUser?.name ?? "Staff";
  }
  static {
    this.\u0275fac = function StaffProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffProfileComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffProfileComponent, selectors: [["app-staff-profile"]], decls: 15, vars: 6, consts: [[1, "staff-profile"], [1, "page-title"], [1, "profile-card", "card"], [1, "profile-top"], [1, "avatar-section"], [1, "avatar-lg"], ["alt", "Profile", 1, "avatar-lg__img", 3, "src"], [1, "profile-info"], [1, "profile-name"], [1, "profile-email"], [1, "profile-role"]], template: function StaffProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "My Profile");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        \u0275\u0275conditionalCreate(7, StaffProfileComponent_Conditional_7_Template, 1, 1, "img", 6);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(8, "div", 7)(9, "h2", 8);
        \u0275\u0275text(10);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(11, "p", 9);
        \u0275\u0275text(12);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(13, "p", 10);
        \u0275\u0275text(14);
        \u0275\u0275domElementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("avatar-lg--has-photo", ctx.profilePictureUrl);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.profilePictureUrl ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.displayName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.email);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((ctx.auth.currentUser == null ? null : ctx.auth.currentUser.role) === "admin" ? "Administrator" : "Staff");
      }
    }, dependencies: [CommonModule], styles: ["\n\n.staff-profile[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.profile-top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.avatar-lg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: var(--color-border);\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-lg.avatar-lg--has-photo[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.avatar-lg__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 28%;\n  display: block;\n}\n.avatar-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.avatar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem;\n}\n.profile-email[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  margin: 0 0 0.25rem;\n}\n.profile-role[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n  color: var(--color-primary);\n  font-weight: 500;\n}\n/*# sourceMappingURL=staff-profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffProfileComponent, [{
    type: Component,
    args: [{ selector: "app-staff-profile", standalone: true, imports: [CommonModule], template: `<div class="staff-profile">\r
  <h1 class="page-title">My Profile</h1>\r
  <div class="profile-card card">\r
    <div class="profile-top">\r
      <div class="avatar-section">\r
        <div class="avatar-lg" [class.avatar-lg--has-photo]="profilePictureUrl">\r
          @if (profilePictureUrl) {\r
            <img [src]="profilePictureUrl" alt="Profile" class="avatar-lg__img" />\r
          }\r
        </div>\r
      </div>\r
      <div class="profile-info">\r
        <h2 class="profile-name">{{ displayName }}</h2>\r
        <p class="profile-email">{{ auth.currentUser?.email }}</p>\r
        <p class="profile-role">{{ auth.currentUser?.role === 'admin' ? 'Administrator' : 'Staff' }}</p>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/staff-profile/staff-profile.component.scss */\n.staff-profile {\n  width: 100%;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.profile-top {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.avatar-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.avatar-lg {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: var(--color-border);\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-lg.avatar-lg--has-photo {\n  background: transparent;\n}\n.avatar-lg__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 28%;\n  display: block;\n}\n.avatar-input {\n  position: absolute;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.avatar-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.profile-info {\n  flex: 1;\n  min-width: 200px;\n}\n.profile-name {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem;\n}\n.profile-email {\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  margin: 0 0 0.25rem;\n}\n.profile-role {\n  font-size: 0.875rem;\n  margin: 0;\n  color: var(--color-primary);\n  font-weight: 500;\n}\n/*# sourceMappingURL=staff-profile.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffProfileComponent, { className: "StaffProfileComponent", filePath: "src/app/pages/staff-profile/staff-profile.component.ts", lineNumber: 12 });
})();
export {
  StaffProfileComponent
};
//# sourceMappingURL=chunk-DPLTV67S.js.map
