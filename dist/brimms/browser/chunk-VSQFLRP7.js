import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YX676IPB.js";
import {
  RouterLink
} from "./chunk-HOXEAXWN.js";
import "./chunk-ZNESRAKE.js";
import {
  AuthService,
  DataService
} from "./chunk-F47T3EGJ.js";
import "./chunk-EXP2T67A.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MXCAMUXG.js";
import "./chunk-TWWAJFRB.js";

// src/app/pages/request-certificate/request-certificate.component.ts
var _c0 = (a0) => ["/resident/requests", a0];
var _forTrack0 = ($index, $item) => $item.id;
function RequestCertificateComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 37);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Request submitted successfully.");
    \u0275\u0275elementEnd()();
  }
}
function RequestCertificateComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.requests.length, " request", ctx_r0.requests.length !== 1 ? "s" : "");
  }
}
function RequestCertificateComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275text(1, "View all");
    \u0275\u0275elementEnd();
  }
}
function RequestCertificateComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 39);
    \u0275\u0275element(3, "path", 40)(4, "rect", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 42);
    \u0275\u0275text(6, "No requests yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 43);
    \u0275\u0275text(8, "Submit a request using the form to see it here.");
    \u0275\u0275elementEnd()();
  }
}
function RequestCertificateComponent_Conditional_51_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 44)(1, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 11);
    \u0275\u0275element(3, "path", 12)(4, "polyline", 13)(5, "line", 14)(6, "line", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 46)(8, "span", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 49)(13, "span", 50);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 51);
    \u0275\u0275text(16, "See status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "span", 52);
    \u0275\u0275text(18, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, r_r2.id));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(r_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatusClass(r_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.status);
  }
}
function RequestCertificateComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275repeaterCreate(1, RequestCertificateComponent_Conditional_51_For_2_Template, 19, 8, "a", 44, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.requests);
  }
}
var RequestCertificateComponent = class _RequestCertificateComponent {
  constructor(data, auth) {
    this.data = data;
    this.auth = auth;
    this.docType = "Barangay Clearance";
    this.purpose = "";
    this.submitted = false;
  }
  /** Only requests for the current logged-in resident. */
  get requests() {
    const user = this.auth.currentUser;
    if (!user || user.role !== "resident")
      return [];
    const resident = this.data.getResidentById(user.id);
    return this.data.getRequestsByResidentId(resident?.residentId ?? "");
  }
  submit() {
    const user = this.auth.currentUser;
    if (!user || user.role !== "resident") {
      return;
    }
    const resident = this.data.getResidentById(user.id);
    if (!resident) {
      return;
    }
    const trimmedPurpose = this.purpose.trim() || "Submitted from resident portal";
    const id = this.nextRequestId();
    const date = this.formatDate(/* @__PURE__ */ new Date());
    this.data.addRequest({
      id,
      type: this.docType,
      purpose: trimmedPurpose,
      status: "Pending",
      date,
      residentId: resident.residentId
    });
    this.submitted = true;
    this.purpose = "";
  }
  getStatusClass(status) {
    const s = (status || "").toLowerCase();
    if (s.includes("approved"))
      return "status-badge--success";
    if (s.includes("pending"))
      return "status-badge--warning";
    if (s.includes("review"))
      return "status-badge--info";
    return "status-badge--default";
  }
  nextRequestId() {
    const ids = this.data.requests.map((r) => parseInt(r.id, 10)).filter((n) => !Number.isNaN(n));
    const max = ids.length ? Math.max(...ids) : 0;
    return String(max + 1);
  }
  formatDate(d) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
  static {
    this.\u0275fac = function RequestCertificateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestCertificateComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestCertificateComponent, selectors: [["app-request-certificate"]], decls: 52, vars: 6, consts: [[1, "request-certificate"], [1, "page-header"], ["aria-hidden", "true", 1, "page-header__accent"], [1, "page-header__content"], [1, "page-title"], [1, "page-subtitle"], [1, "request-certificate__grid"], ["aria-labelledby", "new-request-heading", 1, "form-section"], [1, "form-card", "card"], [1, "form-card__header"], ["aria-hidden", "true", 1, "form-card__icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], ["id", "new-request-heading", 1, "form-card__title"], [1, "request-form", 3, "ngSubmit"], [1, "form-group"], ["for", "doctype"], ["id", "doctype", "name", "docType", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "purpose"], ["id", "purpose", "name", "purpose", "rows", "4", "placeholder", "e.g. For employment purposes", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn--success", "btn--block", "btn--submit"], [1, "btn__text"], ["aria-hidden", "true", 1, "btn__arrow"], ["role", "status", 1, "alert", "alert--success"], ["aria-labelledby", "my-requests-heading", 1, "my-requests-section"], [1, "section-header"], [1, "section-header__title-wrap"], ["id", "my-requests-heading", 1, "section-title"], [1, "request-count"], ["routerLink", "/resident/requests", 1, "section-header__link"], [1, "requests-list", "card"], [1, "empty-state"], [1, "requests-list__inner"], ["aria-hidden", "true", 1, "alert__icon"], ["aria-hidden", "true", 1, "empty-state__icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "2"], [1, "empty-state__text"], [1, "empty-state__hint"], [1, "request-card", 3, "routerLink"], ["aria-hidden", "true", 1, "request-card__icon"], [1, "request-card__body"], [1, "request-type"], [1, "request-meta"], [1, "request-card__footer"], [1, "status-badge"], [1, "request-card__action"], ["aria-hidden", "true", 1, "request-card__chevron"]], template: function RequestCertificateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5, "Request Certificate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Submit a new certificate request or track your recent requests in one place.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 6)(9, "section", 7)(10, "div", 8)(11, "div", 9)(12, "span", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 11);
        \u0275\u0275element(14, "path", 12)(15, "polyline", 13)(16, "line", 14)(17, "line", 15)(18, "polyline", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "h2", 17);
        \u0275\u0275text(20, "New Request");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "form", 18);
        \u0275\u0275listener("ngSubmit", function RequestCertificateComponent_Template_form_ngSubmit_21_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(22, "div", 19)(23, "label", 20);
        \u0275\u0275text(24, "Type of Document");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "select", 21);
        \u0275\u0275twoWayListener("ngModelChange", function RequestCertificateComponent_Template_select_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.docType, $event) || (ctx.docType = $event);
          return $event;
        });
        \u0275\u0275elementStart(26, "option");
        \u0275\u0275text(27, "Barangay Clearance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "option");
        \u0275\u0275text(29, "Certificate of Residency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "option");
        \u0275\u0275text(31, "Request Clearance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 19)(33, "label", 22);
        \u0275\u0275text(34, "Purpose");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "textarea", 23);
        \u0275\u0275twoWayListener("ngModelChange", function RequestCertificateComponent_Template_textarea_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.purpose, $event) || (ctx.purpose = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "button", 24)(37, "span", 25);
        \u0275\u0275text(38, "Submit Request");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 26);
        \u0275\u0275text(40, "\u2192");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(41, RequestCertificateComponent_Conditional_41_Template, 5, 0, "div", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "section", 28)(43, "div", 29)(44, "div", 30)(45, "h2", 31);
        \u0275\u0275text(46, "My Requests");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(47, RequestCertificateComponent_Conditional_47_Template, 2, 2, "span", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(48, RequestCertificateComponent_Conditional_48_Template, 2, 0, "a", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 34);
        \u0275\u0275conditionalCreate(50, RequestCertificateComponent_Conditional_50_Template, 9, 0, "div", 35)(51, RequestCertificateComponent_Conditional_51_Template, 3, 0, "div", 36);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(25);
        \u0275\u0275twoWayProperty("ngModel", ctx.docType);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.purpose);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.submitted ? 41 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.requests.length > 0 ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.requests.length > 0 ? 48 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.requests.length === 0 ? 50 : 51);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: [`

.request-certificate[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.page-header[_ngcontent-%COMP%] {
  position: relative;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid var(--color-primary);
  border-radius: 0 var(--radius) var(--radius) 0;
  background:
    linear-gradient(
      135deg,
      var(--color-primary-bg) 0%,
      transparent 70%);
  padding: 1rem 1rem 1rem 1.25rem;
}
@media (min-width: 768px) {
  .page-header[_ngcontent-%COMP%] {
    margin-bottom: 2rem;
    padding: 1.25rem 1.5rem 1.25rem 1.5rem;
  }
}
.page-header__accent[_ngcontent-%COMP%] {
  display: none;
}
.page-header__content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
}
.page-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.2;
}
@media (min-width: 768px) {
  .page-title[_ngcontent-%COMP%] {
    font-size: 1.75rem;
  }
}
.page-subtitle[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.5;
  max-width: 36em;
}
.request-certificate__grid[_ngcontent-%COMP%] {
  display: grid;
  gap: 1.5rem;
  align-items: start;
}
@media (min-width: 768px) {
  .request-certificate__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr 1fr;
    gap: 1.75rem;
  }
}
@media (min-width: 1024px) {
  .request-certificate__grid[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 2rem;
  }
}
.form-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-card[_ngcontent-%COMP%] {
  margin-bottom: 0;
  padding: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--color-border);
  transition: box-shadow 0.2s, border-color 0.2s;
}
.form-card[_ngcontent-%COMP%]:hover {
  box-shadow: var(--shadow-lg);
}
@media (max-width: 640px) {
  .form-card[_ngcontent-%COMP%] {
    border-radius: var(--radius);
  }
}
.form-card__header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
}
.form-card__icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius);
  background: var(--color-primary-bg);
  color: var(--color-primary);
  flex-shrink: 0;
}
.form-card__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 22px;
  height: 22px;
}
.form-card__title[_ngcontent-%COMP%] {
  font-size: 1.0625rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-text);
  letter-spacing: -0.01em;
}
.request-form[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem;
}
@media (max-width: 640px) {
  .request-form[_ngcontent-%COMP%] {
    padding: 1.25rem;
  }
}
.request-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.request-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
}
.request-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  padding: 0.625rem 0.875rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  background: var(--color-bg-input);
  color: var(--color-text-input);
  font-size: 0.9375rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
  box-sizing: border-box;
}
.request-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-bg);
}
.request-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {
  color: var(--color-text-muted);
}
.request-form[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  padding-right: 2.25rem;
}
.request-form[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {
  min-height: 100px;
  resize: vertical;
}
.request-form[_ngcontent-%COMP%]   .btn--block[_ngcontent-%COMP%] {
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.75rem 1.25rem;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: var(--radius);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.1s, box-shadow 0.2s;
}
.request-form[_ngcontent-%COMP%]   .btn--block[_ngcontent-%COMP%]:hover {
  transform: translateY(-1px);
}
.request-form[_ngcontent-%COMP%]   .btn__arrow[_ngcontent-%COMP%] {
  opacity: 0.9;
  transition: transform 0.2s;
}
.request-form[_ngcontent-%COMP%]   .btn--submit[_ngcontent-%COMP%]:hover   .btn__arrow[_ngcontent-%COMP%] {
  transform: translateX(2px);
}
.alert[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid transparent;
}
.alert--success[_ngcontent-%COMP%] {
  background: var(--color-success-bg);
  border-color: var(--color-success);
  color: var(--color-success);
}
.alert__icon[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  flex-shrink: 0;
  font-weight: 700;
}
.my-requests-section[_ngcontent-%COMP%] {
  min-height: 0;
}
.section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.section-header__title-wrap[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.section-title[_ngcontent-%COMP%] {
  font-size: 1.0625rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-text);
  letter-spacing: -0.01em;
}
.section-header__link[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s, text-decoration 0.2s;
}
.section-header__link[_ngcontent-%COMP%]:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}
.request-count[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}
.requests-list[_ngcontent-%COMP%] {
  padding: 0 !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow);
  background: var(--color-bg-card);
}
@media (max-width: 640px) {
  .requests-list[_ngcontent-%COMP%] {
    border-radius: var(--radius);
  }
}
.requests-list__inner[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.empty-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  text-align: center;
}
.empty-state__icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: 0.75rem;
  color: var(--color-text-muted);
  opacity: 0.7;
}
.empty-state__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
}
.empty-state__text[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.25rem;
}
.empty-state__hint[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
  max-width: 220px;
}
.request-card[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;
  min-height: 0;
}
.request-card[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.request-card[_ngcontent-%COMP%]:hover {
  background: var(--color-bg);
}
.request-card[_ngcontent-%COMP%]:hover   .request-card__action[_ngcontent-%COMP%] {
  color: var(--color-primary-dark);
}
.request-card[_ngcontent-%COMP%]:hover   .request-card__chevron[_ngcontent-%COMP%] {
  transform: translateX(2px);
  opacity: 1;
}
.request-card__icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  background: var(--color-bg-secondary);
  color: var(--color-text-muted);
}
.request-card__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
}
.request-card__body[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.request-type[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--color-text);
  line-height: 1.3;
}
.request-meta[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}
.request-card__footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.375rem;
}
.request-card__action[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-primary);
  transition: color 0.2s;
}
.request-card__chevron[_ngcontent-%COMP%] {
  flex-shrink: 0;
  font-size: 1rem;
  color: var(--color-text-muted);
  opacity: 0.8;
  transition: transform 0.2s, opacity 0.2s;
}
.status-badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}
.status-badge--success[_ngcontent-%COMP%] {
  background: var(--color-success-bg);
  color: var(--color-success);
}
.status-badge--warning[_ngcontent-%COMP%] {
  background: var(--color-warning-bg);
  color: var(--color-warning);
}
.status-badge--info[_ngcontent-%COMP%] {
  background: var(--color-primary-bg);
  color: var(--color-primary);
}
.status-badge--default[_ngcontent-%COMP%] {
  background: var(--color-bg-secondary);
  color: var(--color-text-muted);
}
/*# sourceMappingURL=request-certificate.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestCertificateComponent, [{
    type: Component,
    args: [{ selector: "app-request-certificate", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="request-certificate">\r
  <header class="page-header">\r
    <div class="page-header__accent" aria-hidden="true"></div>\r
    <div class="page-header__content">\r
      <h1 class="page-title">Request Certificate</h1>\r
      <p class="page-subtitle">Submit a new certificate request or track your recent requests in one place.</p>\r
    </div>\r
  </header>\r
\r
  <div class="request-certificate__grid">\r
    <!-- New request form -->\r
    <section class="form-section" aria-labelledby="new-request-heading">\r
      <div class="form-card card">\r
        <div class="form-card__header">\r
          <span class="form-card__icon" aria-hidden="true">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>\r
              <polyline points="14 2 14 8 20 8"/>\r
              <line x1="16" y1="13" x2="8" y2="13"/>\r
              <line x1="16" y1="17" x2="8" y2="17"/>\r
              <polyline points="10 9 9 9 8 9"/>\r
            </svg>\r
          </span>\r
          <h2 id="new-request-heading" class="form-card__title">New Request</h2>\r
        </div>\r
        <form (ngSubmit)="submit()" class="request-form">\r
          <div class="form-group">\r
            <label for="doctype">Type of Document</label>\r
            <select id="doctype" class="form-control" [(ngModel)]="docType" name="docType">\r
              <option>Barangay Clearance</option>\r
              <option>Certificate of Residency</option>\r
              <option>Request Clearance</option>\r
            </select>\r
          </div>\r
          <div class="form-group">\r
            <label for="purpose">Purpose</label>\r
            <textarea\r
              id="purpose"\r
              class="form-control"\r
              [(ngModel)]="purpose"\r
              name="purpose"\r
              rows="4"\r
              placeholder="e.g. For employment purposes"\r
            ></textarea>\r
          </div>\r
          <button type="submit" class="btn btn--success btn--block btn--submit">\r
            <span class="btn__text">Submit Request</span>\r
            <span class="btn__arrow" aria-hidden="true">\u2192</span>\r
          </button>\r
        </form>\r
      </div>\r
\r
      @if (submitted) {\r
        <div class="alert alert--success" role="status">\r
          <span class="alert__icon" aria-hidden="true">\u2713</span>\r
          <span>Request submitted successfully.</span>\r
        </div>\r
      }\r
    </section>\r
\r
    <!-- My Requests -->\r
    <section class="my-requests-section" aria-labelledby="my-requests-heading">\r
      <div class="section-header">\r
        <div class="section-header__title-wrap">\r
          <h2 id="my-requests-heading" class="section-title">My Requests</h2>\r
          @if (requests.length > 0) {\r
            <span class="request-count">{{ requests.length }} request{{ requests.length !== 1 ? 's' : '' }}</span>\r
          }\r
        </div>\r
        @if (requests.length > 0) {\r
          <a routerLink="/resident/requests" class="section-header__link">View all</a>\r
        }\r
      </div>\r
      <div class="requests-list card">\r
        @if (requests.length === 0) {\r
          <div class="empty-state">\r
            <span class="empty-state__icon" aria-hidden="true">\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">\r
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>\r
                <rect x="9" y="3" width="6" height="4" rx="2"/>\r
              </svg>\r
            </span>\r
            <p class="empty-state__text">No requests yet</p>\r
            <p class="empty-state__hint">Submit a request using the form to see it here.</p>\r
          </div>\r
        } @else {\r
          <div class="requests-list__inner">\r
            @for (r of requests; track r.id) {\r
              <a [routerLink]="['/resident/requests', r.id]" class="request-card">\r
                <div class="request-card__icon" aria-hidden="true">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>\r
                    <polyline points="14 2 14 8 20 8"/>\r
                    <line x1="16" y1="13" x2="8" y2="13"/>\r
                    <line x1="16" y1="17" x2="8" y2="17"/>\r
                  </svg>\r
                </div>\r
                <div class="request-card__body">\r
                  <span class="request-type">{{ r.type }}</span>\r
                  <span class="request-meta">{{ r.date }}</span>\r
                  <div class="request-card__footer">\r
                    <span class="status-badge" [class]="getStatusClass(r.status)">{{ r.status }}</span>\r
                    <span class="request-card__action">See status</span>\r
                  </div>\r
                </div>\r
                <span class="request-card__chevron" aria-hidden="true">\u2192</span>\r
              </a>\r
            }\r
          </div>\r
        }\r
      </div>\r
    </section>\r
  </div>\r
</div>\r
`, styles: [`/* src/app/pages/request-certificate/request-certificate.component.scss */
.request-certificate {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.page-header {
  position: relative;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid var(--color-primary);
  border-radius: 0 var(--radius) var(--radius) 0;
  background:
    linear-gradient(
      135deg,
      var(--color-primary-bg) 0%,
      transparent 70%);
  padding: 1rem 1rem 1rem 1.25rem;
}
@media (min-width: 768px) {
  .page-header {
    margin-bottom: 2rem;
    padding: 1.25rem 1.5rem 1.25rem 1.5rem;
  }
}
.page-header__accent {
  display: none;
}
.page-header__content {
  position: relative;
  z-index: 1;
}
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.2;
}
@media (min-width: 768px) {
  .page-title {
    font-size: 1.75rem;
  }
}
.page-subtitle {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.5;
  max-width: 36em;
}
.request-certificate__grid {
  display: grid;
  gap: 1.5rem;
  align-items: start;
}
@media (min-width: 768px) {
  .request-certificate__grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.75rem;
  }
}
@media (min-width: 1024px) {
  .request-certificate__grid {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 2rem;
  }
}
.form-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-card {
  margin-bottom: 0;
  padding: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--color-border);
  transition: box-shadow 0.2s, border-color 0.2s;
}
.form-card:hover {
  box-shadow: var(--shadow-lg);
}
@media (max-width: 640px) {
  .form-card {
    border-radius: var(--radius);
  }
}
.form-card__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
}
.form-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius);
  background: var(--color-primary-bg);
  color: var(--color-primary);
  flex-shrink: 0;
}
.form-card__icon svg {
  width: 22px;
  height: 22px;
}
.form-card__title {
  font-size: 1.0625rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-text);
  letter-spacing: -0.01em;
}
.request-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem;
}
@media (max-width: 640px) {
  .request-form {
    padding: 1.25rem;
  }
}
.request-form .form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.request-form .form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
}
.request-form .form-control {
  padding: 0.625rem 0.875rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  background: var(--color-bg-input);
  color: var(--color-text-input);
  font-size: 0.9375rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
  box-sizing: border-box;
}
.request-form .form-control:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-bg);
}
.request-form .form-control::placeholder {
  color: var(--color-text-muted);
}
.request-form select.form-control {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  padding-right: 2.25rem;
}
.request-form textarea.form-control {
  min-height: 100px;
  resize: vertical;
}
.request-form .btn--block {
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.75rem 1.25rem;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: var(--radius);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.1s, box-shadow 0.2s;
}
.request-form .btn--block:hover {
  transform: translateY(-1px);
}
.request-form .btn__arrow {
  opacity: 0.9;
  transition: transform 0.2s;
}
.request-form .btn--submit:hover .btn__arrow {
  transform: translateX(2px);
}
.alert {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid transparent;
}
.alert--success {
  background: var(--color-success-bg);
  border-color: var(--color-success);
  color: var(--color-success);
}
.alert__icon {
  font-size: 1.125rem;
  flex-shrink: 0;
  font-weight: 700;
}
.my-requests-section {
  min-height: 0;
}
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.section-header__title-wrap {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.section-title {
  font-size: 1.0625rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-text);
  letter-spacing: -0.01em;
}
.section-header__link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s, text-decoration 0.2s;
}
.section-header__link:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}
.request-count {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}
.requests-list {
  padding: 0 !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow);
  background: var(--color-bg-card);
}
@media (max-width: 640px) {
  .requests-list {
    border-radius: var(--radius);
  }
}
.requests-list__inner {
  display: flex;
  flex-direction: column;
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  text-align: center;
}
.empty-state__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: 0.75rem;
  color: var(--color-text-muted);
  opacity: 0.7;
}
.empty-state__icon svg {
  width: 32px;
  height: 32px;
}
.empty-state__text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.25rem;
}
.empty-state__hint {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
  max-width: 220px;
}
.request-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;
  min-height: 0;
}
.request-card:last-child {
  border-bottom: none;
}
.request-card:hover {
  background: var(--color-bg);
}
.request-card:hover .request-card__action {
  color: var(--color-primary-dark);
}
.request-card:hover .request-card__chevron {
  transform: translateX(2px);
  opacity: 1;
}
.request-card__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  background: var(--color-bg-secondary);
  color: var(--color-text-muted);
}
.request-card__icon svg {
  width: 20px;
  height: 20px;
}
.request-card__body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.request-type {
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--color-text);
  line-height: 1.3;
}
.request-meta {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}
.request-card__footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.375rem;
}
.request-card__action {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-primary);
  transition: color 0.2s;
}
.request-card__chevron {
  flex-shrink: 0;
  font-size: 1rem;
  color: var(--color-text-muted);
  opacity: 0.8;
  transition: transform 0.2s, opacity 0.2s;
}
.status-badge {
  display: inline-block;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}
.status-badge--success {
  background: var(--color-success-bg);
  color: var(--color-success);
}
.status-badge--warning {
  background: var(--color-warning-bg);
  color: var(--color-warning);
}
.status-badge--info {
  background: var(--color-primary-bg);
  color: var(--color-primary);
}
.status-badge--default {
  background: var(--color-bg-secondary);
  color: var(--color-text-muted);
}
/*# sourceMappingURL=request-certificate.component.css.map */
`] }]
  }], () => [{ type: DataService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestCertificateComponent, { className: "RequestCertificateComponent", filePath: "src/app/pages/request-certificate/request-certificate.component.ts", lineNumber: 15 });
})();
export {
  RequestCertificateComponent
};
//# sourceMappingURL=chunk-VSQFLRP7.js.map
