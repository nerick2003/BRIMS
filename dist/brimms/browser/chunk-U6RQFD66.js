import {
  QrCodeService
} from "./chunk-OCTFP5JT.js";
import "./chunk-R4NIWQA2.js";
import {
  AuthService,
  DataService
} from "./chunk-F47T3EGJ.js";
import "./chunk-EXP2T67A.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MXCAMUXG.js";
import "./chunk-TWWAJFRB.js";

// src/app/pages/my-profile/my-profile.component.ts
function MyProfileComponent_div_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.profilePictureUrl, \u0275\u0275sanitizeUrl);
  }
}
function MyProfileComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementStart(2, "p", 23);
    \u0275\u0275text(3, "Scan this QR code to quickly access your profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 24);
    \u0275\u0275listener("click", function MyProfileComponent_div_0_div_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadQRCode());
    });
    \u0275\u0275text(5, " Download QR Code ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.qrCodeDataUrl, \u0275\u0275sanitizeUrl);
  }
}
function MyProfileComponent_div_0_p_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17)(1, "strong");
    \u0275\u0275text(2, "Civil Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.civilStatus);
  }
}
function MyProfileComponent_div_0_p_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17)(1, "strong");
    \u0275\u0275text(2, "Nationality:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.nationality);
  }
}
function MyProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h1", 3);
    \u0275\u0275text(2, "My Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7);
    \u0275\u0275conditionalCreate(7, MyProfileComponent_div_0_Conditional_7_Template, 1, 1, "img", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 9)(9, "p", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11)(12, "button", 12);
    \u0275\u0275listener("click", function MyProfileComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleQRCode());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MyProfileComponent_div_0_div_14_Template, 6, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h2", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 15)(18, "h3", 16);
    \u0275\u0275text(19, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 17)(21, "strong");
    \u0275\u0275text(22, "Birthday:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 17)(25, "strong");
    \u0275\u0275text(26, "Place of Birth:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 18)(29, "strong");
    \u0275\u0275text(30, "Birth Certificate Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 19);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "p", 17)(34, "strong");
    \u0275\u0275text(35, "Blood Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 17)(38, "strong");
    \u0275\u0275text(39, "Gender:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, MyProfileComponent_div_0_p_41_Template, 4, 1, "p", 20)(42, MyProfileComponent_div_0_p_42_Template, 4, 1, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 15)(44, "h3", 16);
    \u0275\u0275text(45, "Contact Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 17)(47, "strong");
    \u0275\u0275text(48, "Contact:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 17)(51, "strong");
    \u0275\u0275text(52, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 17)(55, "strong");
    \u0275\u0275text(56, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 17)(59, "strong");
    \u0275\u0275text(60, "Purok:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("avatar-lg--has-photo", ctx_r1.profilePictureUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profilePictureUrl ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Resident ID: ", ctx_r1.resident.residentId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showQRCode ? "Hide" : "Show", " QR Code ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showQRCode && ctx_r1.qrCodeDataUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.resident.name);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.birthdate || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.placeOfBirth || "Not Available");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resident.birthCertificateNumber || "Not Available");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.bloodType || "Not Available");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.gender);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resident.civilStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resident.nationality);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.contact || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.email || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.address || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.purok);
  }
}
function MyProfileComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "p", 26);
    \u0275\u0275text(2, "Profile data not found.");
    \u0275\u0275elementEnd()();
  }
}
var MyProfileComponent = class _MyProfileComponent {
  constructor(auth, data, qrCodeService) {
    this.auth = auth;
    this.data = data;
    this.qrCodeService = qrCodeService;
    this.qrCodeDataUrl = null;
    this.showQRCode = false;
    this.resident = null;
  }
  resolveResident() {
    const user = this.auth.currentUser;
    if (!user || user.role !== "resident")
      return null;
    const idStr = user.id != null ? String(user.id) : "";
    const byId = idStr ? this.data.getResidentById(idStr) : void 0;
    if (byId)
      return byId;
    const email = user.email?.trim().toLowerCase();
    if (email) {
      return this.data.residents.find((r) => r.email?.trim().toLowerCase() === email) ?? null;
    }
    return null;
  }
  ngOnInit() {
    this.resident = this.resolveResident();
    this.sub = this.data.residentsObservable.subscribe(() => {
      this.resident = this.resolveResident();
    });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  generateQRCode() {
    if (this.resident?.residentId) {
      try {
        this.qrCodeDataUrl = this.qrCodeService.generateResidentQRCode(this.resident.residentId);
      } catch (error) {
        this.qrCodeDataUrl = null;
      }
    }
  }
  toggleQRCode() {
    this.showQRCode = !this.showQRCode;
    if (this.showQRCode && !this.qrCodeDataUrl && this.resident?.residentId) {
      this.generateQRCode();
    }
  }
  downloadQRCode() {
    if (!this.qrCodeDataUrl)
      return;
    const link = document.createElement("a");
    link.href = this.qrCodeDataUrl;
    link.download = `resident-${this.resident?.residentId || "qr"}-code.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  get profilePictureUrl() {
    const u = this.auth.currentUser;
    return u ? this.auth.getProfilePicture(u.id) : null;
  }
  static {
    this.\u0275fac = function MyProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyProfileComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(QrCodeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyProfileComponent, selectors: [["app-my-profile"]], decls: 2, vars: 2, consts: [["class", "my-profile", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "my-profile"], [1, "page-title"], [1, "profile-card", "card"], [1, "profile-top"], [1, "avatar-section"], [1, "avatar-lg"], ["alt", "Profile", 1, "avatar-lg__img", 3, "src"], [1, "profile-info"], [1, "resident-id"], [1, "qr-code-section"], ["type", "button", 1, "btn", "btn--sm", "btn--outline", 3, "click"], ["class", "qr-code-display", 4, "ngIf"], [1, "resident-name"], [1, "detail-section"], [1, "section-title"], [1, "detail"], [1, "detail", "highlight"], [1, "certificate-ref"], ["class", "detail", 4, "ngIf"], [1, "qr-code-display"], ["alt", "My Resident QR Code", 1, "qr-code-image", 3, "src"], [1, "qr-code-label"], ["type", "button", 1, "btn", "btn--sm", "btn--primary", 3, "click"], [1, "card"], [1, "muted"]], template: function MyProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MyProfileComponent_div_0_Template, 62, 18, "div", 0)(1, MyProfileComponent_div_1_Template, 3, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.resident);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.resident);
      }
    }, dependencies: [CommonModule, NgIf], styles: ['\n\n.my-profile[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.profile-top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.avatar-lg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: var(--color-border);\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-lg.avatar-lg--has-photo[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.avatar-lg__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 28%;\n  display: block;\n}\n.avatar-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.avatar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n.profile-info[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  margin: 0.75rem 0;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n.profile-info[_ngcontent-%COMP%]   .detail.highlight[_ngcontent-%COMP%] {\n  background: var(--color-bg-secondary);\n  color: var(--color-text);\n  padding: 0.75rem 1rem;\n  border-radius: 6px;\n  border-left: 3px solid var(--color-primary);\n  margin: 1rem 0;\n}\n.profile-info[_ngcontent-%COMP%]   .detail.highlight[_ngcontent-%COMP%]   .certificate-ref[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-weight: 600;\n  color: var(--color-primary);\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n}\n.qr-code-section[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  padding: 1rem 0;\n  border-top: 1px solid var(--color-border);\n}\n.qr-code-section[_ngcontent-%COMP%]   .qr-code-display[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n.qr-code-section[_ngcontent-%COMP%]   .qr-code-display[_ngcontent-%COMP%]   .qr-code-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: 4px solid var(--color-bg-card);\n  border-radius: var(--radius);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  background: var(--color-bg-card);\n  padding: 8px;\n}\n.qr-code-section[_ngcontent-%COMP%]   .qr-code-display[_ngcontent-%COMP%]   .qr-code-label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n  max-width: 300px;\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n  padding-top: 1rem;\n  border-top: 1px solid var(--color-border);\n}\n.detail-section[_ngcontent-%COMP%]:first-of-type {\n  border-top: none;\n  padding-top: 0;\n  margin-top: 0.5rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.75rem 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 0.875rem;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=my-profile.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyProfileComponent, [{
    type: Component,
    args: [{ selector: "app-my-profile", standalone: true, imports: [CommonModule], template: `<div class="my-profile" *ngIf="resident">\r
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
        <p class="resident-id">Resident ID: {{ resident.residentId }}</p>\r
        <div class="qr-code-section">\r
          <button type="button" class="btn btn--sm btn--outline" (click)="toggleQRCode()">\r
            {{ showQRCode ? 'Hide' : 'Show' }} QR Code\r
          </button>\r
          <div class="qr-code-display" *ngIf="showQRCode && qrCodeDataUrl">\r
            <img [src]="qrCodeDataUrl" alt="My Resident QR Code" class="qr-code-image" />\r
            <p class="qr-code-label">Scan this QR code to quickly access your profile</p>\r
            <button type="button" class="btn btn--sm btn--primary" (click)="downloadQRCode()">\r
              Download QR Code\r
            </button>\r
          </div>\r
        </div>\r
        <h2 class="resident-name">{{ resident.name }}</h2>\r
        \r
        <div class="detail-section">\r
          <h3 class="section-title">Personal Information</h3>\r
          <p class="detail"><strong>Birthday:</strong> {{ resident.birthdate || 'N/A' }}</p>\r
          <p class="detail"><strong>Place of Birth:</strong> {{ resident.placeOfBirth || 'Not Available' }}</p>\r
          <p class="detail highlight">\r
            <strong>Birth Certificate Number:</strong> \r
            <span class="certificate-ref">{{ resident.birthCertificateNumber || 'Not Available' }}</span>\r
          </p>\r
          <p class="detail"><strong>Blood Type:</strong> {{ resident.bloodType || 'Not Available' }}</p>\r
          <p class="detail"><strong>Gender:</strong> {{ resident.gender }}</p>\r
          <p class="detail" *ngIf="resident.civilStatus"><strong>Civil Status:</strong> {{ resident.civilStatus }}</p>\r
          <p class="detail" *ngIf="resident.nationality"><strong>Nationality:</strong> {{ resident.nationality }}</p>\r
        </div>\r
\r
        <div class="detail-section">\r
          <h3 class="section-title">Contact Information</h3>\r
          <p class="detail"><strong>Contact:</strong> {{ resident.contact || 'N/A' }}</p>\r
          <p class="detail"><strong>Email:</strong> {{ resident.email || 'N/A' }}</p>\r
          <p class="detail"><strong>Address:</strong> {{ resident.address || 'N/A' }}</p>\r
          <p class="detail"><strong>Purok:</strong> {{ resident.purok }}</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="!resident" class="card">\r
  <p class="muted">Profile data not found.</p>\r
</div>\r
`, styles: ['/* src/app/pages/my-profile/my-profile.component.scss */\n.my-profile {\n  width: 100%;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.profile-top {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.avatar-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.avatar-lg {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: var(--color-border);\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-lg.avatar-lg--has-photo {\n  background: transparent;\n}\n.avatar-lg__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 28%;\n  display: block;\n}\n.avatar-input {\n  position: absolute;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.avatar-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.profile-info {\n  flex: 1;\n  min-width: 300px;\n}\n.profile-info .detail {\n  margin: 0.75rem 0;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n.profile-info .detail.highlight {\n  background: var(--color-bg-secondary);\n  color: var(--color-text);\n  padding: 0.75rem 1rem;\n  border-radius: 6px;\n  border-left: 3px solid var(--color-primary);\n  margin: 1rem 0;\n}\n.profile-info .detail.highlight .certificate-ref {\n  font-family: "Courier New", monospace;\n  font-weight: 600;\n  color: var(--color-primary);\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n}\n.qr-code-section {\n  margin: 1rem 0;\n  padding: 1rem 0;\n  border-top: 1px solid var(--color-border);\n}\n.qr-code-section .qr-code-display {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n.qr-code-section .qr-code-display .qr-code-image {\n  width: 200px;\n  height: 200px;\n  border: 4px solid var(--color-bg-card);\n  border-radius: var(--radius);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  background: var(--color-bg-card);\n  padding: 8px;\n}\n.qr-code-section .qr-code-display .qr-code-label {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n  max-width: 300px;\n}\n.detail-section {\n  margin: 1.5rem 0;\n  padding-top: 1rem;\n  border-top: 1px solid var(--color-border);\n}\n.detail-section:first-of-type {\n  border-top: none;\n  padding-top: 0;\n  margin-top: 0.5rem;\n}\n.section-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.75rem 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 0.875rem;\n}\n.muted {\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=my-profile.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: DataService }, { type: QrCodeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyProfileComponent, { className: "MyProfileComponent", filePath: "src/app/pages/my-profile/my-profile.component.ts", lineNumber: 15 });
})();
export {
  MyProfileComponent
};
//# sourceMappingURL=chunk-U6RQFD66.js.map
