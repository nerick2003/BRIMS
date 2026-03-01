import {
  RouterLink
} from "./chunk-SCD2KLNQ.js";
import "./chunk-UKN232ML.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-ISBYAA2X.js";
import "./chunk-YP43Q66R.js";

// src/app/pages/contact/contact.component.ts
var ContactComponent = class _ContactComponent {
  static {
    this.\u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 21, vars: 0, consts: [[1, "contact-page"], [1, "contact-card", "card"], [1, "contact-logo", "assemble", "assemble--1"], ["src", "/assets/images/FOR-DASHBOARD.png", "alt", "Logo", "loading", "eager", "decoding", "async", 1, "logo"], [1, "contact-tagline"], [1, "contact-title", "assemble", "assemble--2"], [1, "contact-intro", "assemble", "assemble--3"], [1, "contact-details", "assemble", "assemble--4"], [1, "contact-note"], ["routerLink", "/login", 1, "btn", "btn--primary", "contact-back", "assemble", "assemble--5"]], template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "p", 4);
        \u0275\u0275text(5, "Barangay Resident Information Management System");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h1", 5);
        \u0275\u0275text(7, "Help & Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, " For login issues, password reset, or account help, please get in touch with your barangay office. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Account registration.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " To create a BRIMS account, please go to your barangay office in person. Barangay staff will assist you with registration and set up your access.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275text(16, "Visit or call your barangay hall during office hours, or ask for the staff in charge of BRIMS (Barangay Resident Information Management System).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 8);
        \u0275\u0275text(18, "They can help you with access credentials and password resets.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "a", 9);
        \u0275\u0275text(20, "Back to Login");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [CommonModule, RouterLink], styles: ['\n\n.contact-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: url(/assets/images/BG.jpg) no-repeat center center fixed;\n  background-size: cover;\n  position: relative;\n  isolation: isolate;\n}\n.contact-page[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.18) 0%,\n      transparent 45%),\n    rgba(0, 0, 0, 0.28);\n  z-index: -1;\n  animation: _ngcontent-%COMP%_pageFadeIn 600ms ease-out both;\n}\n@media (max-width: 640px) {\n  .contact-page[_ngcontent-%COMP%] {\n    padding: 16px;\n    align-items: flex-start;\n    padding-top: 2rem;\n  }\n}\n.contact-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  animation: _ngcontent-%COMP%_contactCardEnter 650ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n}\n@media (max-width: 640px) {\n  .contact-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: var(--radius);\n  }\n}\n@keyframes _ngcontent-%COMP%_contactCardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.985);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_pageFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.assemble[_ngcontent-%COMP%] {\n  --assemble-delay: 0ms;\n  opacity: 0;\n  transform: translateY(10px);\n  animation: _ngcontent-%COMP%_assembleIn 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  animation-delay: var(--assemble-delay);\n}\n.assemble--1[_ngcontent-%COMP%] {\n  --assemble-delay: 90ms;\n}\n.assemble--2[_ngcontent-%COMP%] {\n  --assemble-delay: 160ms;\n}\n.assemble--3[_ngcontent-%COMP%] {\n  --assemble-delay: 240ms;\n}\n.assemble--4[_ngcontent-%COMP%] {\n  --assemble-delay: 300ms;\n}\n.assemble--5[_ngcontent-%COMP%] {\n  --assemble-delay: 380ms;\n}\n@keyframes _ngcontent-%COMP%_assembleIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.contact-logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.contact-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: contain;\n}\n@media (max-width: 640px) {\n  .contact-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n}\n.contact-tagline[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  font-family: var(--font-family-title);\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--color-text-muted, #64748b);\n  text-align: center;\n  line-height: 1.3;\n  max-width: 260px;\n}\n@media (max-width: 640px) {\n  .contact-tagline[_ngcontent-%COMP%] {\n    font-size: 0.6875rem;\n    max-width: 220px;\n  }\n}\n.contact-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-title);\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-text);\n  text-align: center;\n  margin: 0 0 0.5rem;\n}\n.contact-intro[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text-muted, #666);\n  text-align: center;\n  margin: 0 0 1.25rem;\n  line-height: 1.5;\n}\n.contact-details[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-secondary);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.contact-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n}\n.contact-details[_ngcontent-%COMP%]   .contact-note[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted, #666);\n}\n.contact-back[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .contact-card[_ngcontent-%COMP%], \n   .contact-page[_ngcontent-%COMP%]::before, \n   .assemble[_ngcontent-%COMP%] {\n    animation: none !important;\n    transform: none !important;\n    opacity: 1 !important;\n    filter: none !important;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactComponent, [{
    type: Component,
    args: [{ selector: "app-contact", standalone: true, imports: [CommonModule, RouterLink], template: '<div class="contact-page">\r\n  <div class="contact-card card">\r\n    <div class="contact-logo assemble assemble--1">\r\n      <img class="logo" src="/assets/images/FOR-DASHBOARD.png" alt="Logo" loading="eager" decoding="async" />\r\n      <p class="contact-tagline">Barangay Resident Information Management System</p>\r\n    </div>\r\n    <h1 class="contact-title assemble assemble--2">Help &amp; Contact</h1>\r\n    <p class="contact-intro assemble assemble--3">\r\n      For login issues, password reset, or account help, please get in touch with your barangay office.\r\n    </p>\r\n    <div class="contact-details assemble assemble--4">\r\n      <p><strong>Account registration.</strong> To create a BRIMS account, please go to your barangay office in person. Barangay staff will assist you with registration and set up your access.</p>\r\n      <p>Visit or call your barangay hall during office hours, or ask for the staff in charge of BRIMS (Barangay Resident Information Management System).</p>\r\n      <p class="contact-note">They can help you with access credentials and password resets.</p>\r\n    </div>\r\n    <a routerLink="/login" class="btn btn--primary contact-back assemble assemble--5">Back to Login</a>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/pages/contact/contact.component.scss */\n.contact-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: url(/assets/images/BG.jpg) no-repeat center center fixed;\n  background-size: cover;\n  position: relative;\n  isolation: isolate;\n}\n.contact-page::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.18) 0%,\n      transparent 45%),\n    rgba(0, 0, 0, 0.28);\n  z-index: -1;\n  animation: pageFadeIn 600ms ease-out both;\n}\n@media (max-width: 640px) {\n  .contact-page {\n    padding: 16px;\n    align-items: flex-start;\n    padding-top: 2rem;\n  }\n}\n.contact-card {\n  width: 100%;\n  max-width: 420px;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  animation: contactCardEnter 650ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n}\n@media (max-width: 640px) {\n  .contact-card {\n    max-width: 100%;\n    border-radius: var(--radius);\n  }\n}\n@keyframes contactCardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.985);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes pageFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.assemble {\n  --assemble-delay: 0ms;\n  opacity: 0;\n  transform: translateY(10px);\n  animation: assembleIn 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;\n  animation-delay: var(--assemble-delay);\n}\n.assemble--1 {\n  --assemble-delay: 90ms;\n}\n.assemble--2 {\n  --assemble-delay: 160ms;\n}\n.assemble--3 {\n  --assemble-delay: 240ms;\n}\n.assemble--4 {\n  --assemble-delay: 300ms;\n}\n.assemble--5 {\n  --assemble-delay: 380ms;\n}\n@keyframes assembleIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.contact-logo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.contact-logo .logo {\n  width: 120px;\n  height: 120px;\n  object-fit: contain;\n}\n@media (max-width: 640px) {\n  .contact-logo .logo {\n    width: 80px;\n    height: 80px;\n  }\n}\n.contact-tagline {\n  margin: 0.5rem 0 0;\n  font-family: var(--font-family-title);\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--color-text-muted, #64748b);\n  text-align: center;\n  line-height: 1.3;\n  max-width: 260px;\n}\n@media (max-width: 640px) {\n  .contact-tagline {\n    font-size: 0.6875rem;\n    max-width: 220px;\n  }\n}\n.contact-title {\n  font-family: var(--font-family-title);\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-text);\n  text-align: center;\n  margin: 0 0 0.5rem;\n}\n.contact-intro {\n  font-size: 0.9375rem;\n  color: var(--color-text-muted, #666);\n  text-align: center;\n  margin: 0 0 1.25rem;\n  line-height: 1.5;\n}\n.contact-details {\n  font-size: 0.875rem;\n  color: var(--color-text-secondary);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.contact-details p {\n  margin: 0 0 0.75rem;\n}\n.contact-details .contact-note {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted, #666);\n}\n.contact-back {\n  width: 100%;\n  padding: 12px;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .contact-card,\n  .contact-page::before,\n  .assemble {\n    animation: none !important;\n    transform: none !important;\n    opacity: 1 !important;\n    filter: none !important;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/pages/contact/contact.component.ts", lineNumber: 12 });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-DBJTEKSS.js.map
