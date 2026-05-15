import {
  RouterLink
} from "./chunk-IPZDF3JU.js";
import "./chunk-E73EYYCC.js";
import {
  AuthService,
  DataService
} from "./chunk-2RJNPIJT.js";
import {
  CommonModule,
  Component,
  NgClass,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-TUEAJAVR.js";
import "./chunk-TWWAJFRB.js";

// src/app/pages/resident-dashboard/resident-dashboard.component.ts
var _c0 = (a0, a1, a2) => ({ "badge--success": a0, "badge--warning": a1, "badge--danger": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function ResidentDashboardComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "a", 18);
    \u0275\u0275text(10, "See Status");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(4, _c0, r_r1.status === "Approved", r_r1.status === "Pending" || r_r1.status === "For Review", r_r1.status === "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.date);
  }
}
var ResidentDashboardComponent = class _ResidentDashboardComponent {
  constructor(auth, data) {
    this.auth = auth;
    this.data = data;
  }
  /** Only requests for the current logged-in resident. */
  get requests() {
    const user = this.auth.currentUser;
    if (!user || user.role !== "resident")
      return [];
    const resident = this.data.getResidentById(user.id);
    return this.data.getRequestsByResidentId(resident?.residentId ?? "");
  }
  static {
    this.\u0275fac = function ResidentDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResidentDashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResidentDashboardComponent, selectors: [["app-resident-dashboard"]], decls: 37, vars: 1, consts: [[1, "resident-dashboard"], [1, "welcome"], [1, "quick-actions"], ["routerLink", "/resident/profile", 1, "action-card", "action-card--blue"], [1, "action-icon"], [1, "action-label"], ["routerLink", "/resident/request-certificate", 1, "action-card", "action-card--orange"], ["routerLink", "/resident/requests", 1, "action-card", "action-card--green"], [1, "my-requests-section"], [1, "section-header"], [1, "form-control", "form-control--sm"], [1, "requests-list", "card"], [1, "request-row"], [1, "request-info"], [1, "request-type"], [1, "request-meta"], [1, "badge", 3, "ngClass"], [1, "request-meta__date"], ["routerLink", "/resident/requests", 1, "btn", "btn--success", "btn--sm"]], template: function ResidentDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Welcome, ");
        \u0275\u0275elementStart(3, "strong");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 2)(6, "a", 3)(7, "span", 4);
        \u0275\u0275text(8, "\u{1F464}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 5);
        \u0275\u0275text(10, "My Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "a", 6)(12, "span", 4);
        \u0275\u0275text(13, "\u{1F4C4}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "Request Certificate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "a", 7)(17, "span", 4);
        \u0275\u0275text(18, "\u{1F4CB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 5);
        \u0275\u0275text(20, "My Requests");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 8)(22, "div", 9)(23, "h2");
        \u0275\u0275text(24, "My Requests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "select", 10)(26, "option");
        \u0275\u0275text(27, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "option");
        \u0275\u0275text(29, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "option");
        \u0275\u0275text(31, "Approved");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "option");
        \u0275\u0275text(33, "For Review");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 11);
        \u0275\u0275repeaterCreate(35, ResidentDashboardComponent_For_36_Template, 11, 8, "div", 12, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.name);
        \u0275\u0275advance(31);
        \u0275\u0275repeater(ctx.requests);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n.resident-dashboard[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.welcome[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .quick-actions[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0.75rem;\n  }\n}\n@media (max-width: 640px) {\n  .quick-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n    margin-bottom: 1.5rem;\n  }\n}\n.action-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 1.5rem;\n  border-radius: var(--radius-lg);\n  color: white;\n  text-decoration: none;\n  font-weight: 600;\n  transition: transform 0.2s, box-shadow 0.2s;\n  min-height: 120px;\n}\n@media (max-width: 640px) {\n  .action-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n    min-height: 100px;\n    border-radius: var(--radius);\n  }\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n}\n.action-card--blue[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n.action-card--orange[_ngcontent-%COMP%] {\n  background: var(--color-warning);\n}\n.action-card--green[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.action-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n@media (max-width: 640px) {\n  .action-icon[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n.action-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media (max-width: 640px) {\n  .action-label[_ngcontent-%COMP%] {\n    font-size: 0.9375rem;\n  }\n}\n.my-requests-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.my-requests-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.my-requests-section[_ngcontent-%COMP%]   .form-control--sm[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 120px;\n  padding: 6px 10px;\n}\n.requests-list[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.request-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.request-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.request-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.request-info[_ngcontent-%COMP%]   .request-type[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.request-info[_ngcontent-%COMP%]   .request-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.request-info[_ngcontent-%COMP%]   .request-meta[_ngcontent-%COMP%]   .request-meta__date[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=resident-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResidentDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-resident-dashboard", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="resident-dashboard">\r
  <h1 class="welcome">Welcome, <strong>{{ auth.currentUser?.name }}</strong></h1>\r
\r
  <div class="quick-actions">\r
    <a routerLink="/resident/profile" class="action-card action-card--blue">\r
      <span class="action-icon">\u{1F464}</span>\r
      <span class="action-label">My Profile</span>\r
    </a>\r
    <a routerLink="/resident/request-certificate" class="action-card action-card--orange">\r
      <span class="action-icon">\u{1F4C4}</span>\r
      <span class="action-label">Request Certificate</span>\r
    </a>\r
    <a routerLink="/resident/requests" class="action-card action-card--green">\r
      <span class="action-icon">\u{1F4CB}</span>\r
      <span class="action-label">My Requests</span>\r
    </a>\r
  </div>\r
\r
  <div class="my-requests-section">\r
    <div class="section-header">\r
      <h2>My Requests</h2>\r
      <select class="form-control form-control--sm">\r
        <option>All</option>\r
        <option>Pending</option>\r
        <option>Approved</option>\r
        <option>For Review</option>\r
      </select>\r
    </div>\r
    <div class="requests-list card">\r
      @for (r of requests; track r.id) {\r
        <div class="request-row">\r
          <div class="request-info">\r
            <span class="request-type">{{ r.type }}</span>\r
            <div class="request-meta">\r
              <span\r
                class="badge"\r
                [ngClass]="{\r
                  'badge--success': r.status === 'Approved',\r
                  'badge--warning': r.status === 'Pending' || r.status === 'For Review',\r
                  'badge--danger': r.status === 'Rejected'\r
                }"\r
              >{{ r.status }}</span>\r
              <span class="request-meta__date">{{ r.date }}</span>\r
            </div>\r
          </div>\r
          <a routerLink="/resident/requests" class="btn btn--success btn--sm">See Status</a>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/resident-dashboard/resident-dashboard.component.scss */\n.resident-dashboard {\n  width: 100%;\n}\n.welcome {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.quick-actions {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .quick-actions {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0.75rem;\n  }\n}\n@media (max-width: 640px) {\n  .quick-actions {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n    margin-bottom: 1.5rem;\n  }\n}\n.action-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 1.5rem;\n  border-radius: var(--radius-lg);\n  color: white;\n  text-decoration: none;\n  font-weight: 600;\n  transition: transform 0.2s, box-shadow 0.2s;\n  min-height: 120px;\n}\n@media (max-width: 640px) {\n  .action-card {\n    padding: 1.25rem;\n    min-height: 100px;\n    border-radius: var(--radius);\n  }\n}\n.action-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n}\n.action-card--blue {\n  background: var(--color-primary);\n}\n.action-card--orange {\n  background: var(--color-warning);\n}\n.action-card--green {\n  background: var(--color-success);\n}\n.action-icon {\n  font-size: 2rem;\n}\n@media (max-width: 640px) {\n  .action-icon {\n    font-size: 1.75rem;\n  }\n}\n.action-label {\n  font-size: 1rem;\n}\n@media (max-width: 640px) {\n  .action-label {\n    font-size: 0.9375rem;\n  }\n}\n.my-requests-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.my-requests-section .section-header h2 {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.my-requests-section .form-control--sm {\n  width: auto;\n  min-width: 120px;\n  padding: 6px 10px;\n}\n.requests-list {\n  padding: 0 !important;\n}\n.request-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.request-row:last-child {\n  border-bottom: none;\n}\n.request-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.request-info .request-type {\n  font-weight: 500;\n}\n.request-info .request-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.request-info .request-meta .request-meta__date {\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=resident-dashboard.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResidentDashboardComponent, { className: "ResidentDashboardComponent", filePath: "src/app/pages/resident-dashboard/resident-dashboard.component.ts", lineNumber: 14 });
})();
export {
  ResidentDashboardComponent
};
//# sourceMappingURL=chunk-2V6LYUC4.js.map
