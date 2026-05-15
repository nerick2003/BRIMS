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
  DecimalPipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TUEAJAVR.js";
import "./chunk-TWWAJFRB.js";

// src/app/pages/staff-dashboard/staff-dashboard.component.ts
var _c0 = (a0) => ["../requests", a0];
var _forTrack0 = ($index, $item) => $item.id;
function StaffDashboardComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "p", 19)(8, "strong");
    \u0275\u0275text(9, "Purpose:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 20)(12, "strong");
    \u0275\u0275text(13, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 21)(16, "a", 22);
    \u0275\u0275text(17, "View Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r1 = ctx.$implicit;
    \u0275\u0275classProp("request-card--pending", request_r1.status === "Pending")("request-card--review", request_r1.status === "For Review")("request-card--approved", request_r1.status === "Approved");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(request_r1.type);
    \u0275\u0275advance();
    \u0275\u0275classProp("status-pending", request_r1.status === "Pending")("status-review", request_r1.status === "For Review")("status-approved", request_r1.status === "Approved");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", request_r1.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", request_r1.purpose);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", request_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, request_r1.id));
  }
}
function StaffDashboardComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p");
    \u0275\u0275text(2, "No recent requests found.");
    \u0275\u0275elementEnd()();
  }
}
var StaffDashboardComponent = class _StaffDashboardComponent {
  constructor(data, auth) {
    this.data = data;
    this.auth = auth;
    this.stats = this.data.getStats();
  }
  get recentRequests() {
    const sorted = [...this.data.getActiveRequests()].sort((a, b) => {
      if (this.auth.currentUser?.role === "admin") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      const statusPriority = {
        "For Review": 3,
        Pending: 2,
        Approved: 1,
        Rejected: 0
      };
      const priorityDiff = statusPriority[b.status] - statusPriority[a.status];
      if (priorityDiff !== 0)
        return priorityDiff;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return sorted.slice(0, 6);
  }
  static {
    this.\u0275fac = function StaffDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffDashboardComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffDashboardComponent, selectors: [["app-staff-dashboard"]], decls: 34, vars: 11, consts: [[1, "staff-dashboard"], [1, "page-title"], [1, "stats-grid"], ["routerLink", "../residents", 1, "stat-card", "stat-card--blue", "stat-card--clickable"], [1, "stat-label"], [1, "stat-value"], ["routerLink", "../households", 1, "stat-card", "stat-card--orange", "stat-card--clickable"], ["routerLink", "../reports", 1, "stat-card", "stat-card--green", "stat-card--clickable"], [1, "section"], [1, "section-header"], ["routerLink", "../requests", 1, "btn", "btn--primary"], [1, "requests-grid"], [1, "request-card", 3, "request-card--pending", "request-card--review", "request-card--approved"], [1, "empty-state"], [1, "request-card"], [1, "request-card__header"], [1, "request-type"], [1, "request-status"], [1, "request-card__body"], [1, "request-purpose"], [1, "request-date"], [1, "request-card__footer"], [1, "btn", "btn--sm", "btn--primary", 3, "routerLink"]], template: function StaffDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Welcome, ");
        \u0275\u0275elementStart(3, "strong");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "span", 4);
        \u0275\u0275text(8, "Total Residents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 5);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "span", 4);
        \u0275\u0275text(14, "Total Households");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 5);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 7)(19, "span", 4);
        \u0275\u0275text(20, "Senior Citizens");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 5);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 8)(25, "div", 9)(26, "h2");
        \u0275\u0275text(27, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "a", 10);
        \u0275\u0275text(29, "View All Requests");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 11);
        \u0275\u0275repeaterCreate(31, StaffDashboardComponent_For_32_Template, 18, 19, "div", 12, _forTrack0);
        \u0275\u0275conditionalCreate(33, StaffDashboardComponent_Conditional_33_Template, 3, 0, "div", 13);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.name);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 5, ctx.stats.totalResidents));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 7, ctx.stats.totalHouseholds));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 9, ctx.stats.seniorCitizens));
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.recentRequests);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.recentRequests.length === 0 ? 33 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, DecimalPipe], styles: ["\n.staff-dashboard[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 640px) {\n  .quick-actions[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n.quick-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  background: var(--color-primary);\n  color: white;\n  border-radius: var(--radius-lg);\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.2s ease, filter 0.2s ease;\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);\n}\n.quick-action-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  transform: scale(1.03);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25), 0 4px 14px rgba(59, 130, 246, 0.35);\n  filter: brightness(1.05);\n}\n@media (max-width: 640px) {\n  .quick-action-btn[_ngcontent-%COMP%] {\n    padding: 0.875rem 1.25rem;\n    font-size: 0.9375rem;\n  }\n}\n.quick-action-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n@media (max-width: 640px) {\n  .quick-action-icon[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n.quick-action-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media (max-width: 640px) {\n  .quick-action-label[_ngcontent-%COMP%] {\n    font-size: 0.9375rem;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  color: white;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n}\n@media (max-width: 640px) {\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 1rem 1.25rem;\n    border-radius: var(--radius);\n  }\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  opacity: 0.95;\n  display: block;\n  margin-bottom: 4px;\n}\n@media (max-width: 640px) {\n  .stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n    font-size: 0.8125rem;\n  }\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n}\n@media (max-width: 640px) {\n  .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.stat-card--blue[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n.stat-card--orange[_ngcontent-%COMP%] {\n  background: var(--color-warning);\n}\n.stat-card--green[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.stat-card--clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.section[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow);\n  overflow: hidden;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.requests-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.25rem;\n  padding: 1.5rem;\n}\n@media (max-width: 768px) {\n  .requests-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 1rem;\n    padding: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .requests-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n.request-card[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: 1.25rem;\n  transition: all 0.2s ease;\n}\n.request-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.request-card--pending[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--color-warning);\n}\n.request-card--review[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--color-info, #3b82f6);\n}\n.request-card--approved[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--color-success);\n}\n.request-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.request-card__header[_ngcontent-%COMP%]   .request-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  color: var(--color-text);\n}\n.request-card__header[_ngcontent-%COMP%]   .request-status[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.request-card__header[_ngcontent-%COMP%]   .request-status.status-pending[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.1);\n  color: var(--color-warning);\n}\n.request-card__header[_ngcontent-%COMP%]   .request-status.status-review[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: var(--color-info, #3b82f6);\n}\n.request-card__header[_ngcontent-%COMP%]   .request-status.status-approved[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: var(--color-success);\n}\n.request-card__body[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.request-card__body[_ngcontent-%COMP%]   .request-purpose[_ngcontent-%COMP%], \n.request-card__body[_ngcontent-%COMP%]   .request-date[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 0.875rem;\n  color: var(--color-text-secondary, #6b7280);\n}\n.request-card__body[_ngcontent-%COMP%]   .request-purpose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.request-card__body[_ngcontent-%COMP%]   .request-date[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-weight: 600;\n}\n.request-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 3rem 1rem;\n  color: var(--color-text-secondary, #6b7280);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=staff-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-staff-dashboard", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="staff-dashboard">\r
  <h1 class="page-title">Welcome, <strong>{{ auth.currentUser?.name }}</strong></h1>\r
\r
  <div class="stats-grid">\r
    <div\r
      class="stat-card stat-card--blue stat-card--clickable"\r
      routerLink="../residents"\r
    >\r
      <span class="stat-label">Total Residents</span>\r
      <span class="stat-value">{{ stats.totalResidents | number }}</span>\r
    </div>\r
    <div\r
      class="stat-card stat-card--orange stat-card--clickable"\r
      routerLink="../households"\r
    >\r
      <span class="stat-label">Total Households</span>\r
      <span class="stat-value">{{ stats.totalHouseholds | number }}</span>\r
    </div>\r
    <div\r
      class="stat-card stat-card--green stat-card--clickable"\r
      routerLink="../reports"\r
    >\r
      <span class="stat-label">Senior Citizens</span>\r
      <span class="stat-value">{{ stats.seniorCitizens | number }}</span>\r
    </div>\r
  </div>\r
\r
  <div class="section">\r
    <div class="section-header">\r
      <h2>Dashboard</h2>\r
      <a routerLink="../requests" class="btn btn--primary">View All Requests</a>\r
    </div>\r
    <div class="requests-grid">\r
      @for (request of recentRequests; track request.id) {\r
        <div class="request-card" \r
             [class.request-card--pending]="request.status === 'Pending'" \r
             [class.request-card--review]="request.status === 'For Review'"\r
             [class.request-card--approved]="request.status === 'Approved'">\r
          <div class="request-card__header">\r
            <span class="request-type">{{ request.type }}</span>\r
            <span class="request-status" \r
                  [class.status-pending]="request.status === 'Pending'"\r
                  [class.status-review]="request.status === 'For Review'"\r
                  [class.status-approved]="request.status === 'Approved'">\r
              {{ request.status }}\r
            </span>\r
          </div>\r
          <div class="request-card__body">\r
            <p class="request-purpose"><strong>Purpose:</strong> {{ request.purpose }}</p>\r
            <p class="request-date"><strong>Date:</strong> {{ request.date }}</p>\r
          </div>\r
          <div class="request-card__footer">\r
            <a [routerLink]="['../requests', request.id]" class="btn btn--sm btn--primary">View Details</a>\r
          </div>\r
        </div>\r
      }\r
      @if (recentRequests.length === 0) {\r
        <div class="empty-state">\r
          <p>No recent requests found.</p>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/staff-dashboard/staff-dashboard.component.scss */\n.staff-dashboard {\n  width: 100%;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n.quick-actions {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 640px) {\n  .quick-actions {\n    margin-bottom: 1rem;\n  }\n}\n.quick-action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  background: var(--color-primary);\n  color: white;\n  border-radius: var(--radius-lg);\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.2s ease, filter 0.2s ease;\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);\n}\n.quick-action-btn:hover {\n  background: #2563eb;\n  transform: scale(1.03);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25), 0 4px 14px rgba(59, 130, 246, 0.35);\n  filter: brightness(1.05);\n}\n@media (max-width: 640px) {\n  .quick-action-btn {\n    padding: 0.875rem 1.25rem;\n    font-size: 0.9375rem;\n  }\n}\n.quick-action-icon {\n  font-size: 1.5rem;\n}\n@media (max-width: 640px) {\n  .quick-action-icon {\n    font-size: 1.25rem;\n  }\n}\n.quick-action-label {\n  font-size: 1rem;\n}\n@media (max-width: 640px) {\n  .quick-action-label {\n    font-size: 0.9375rem;\n  }\n}\n.stat-card {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  color: white;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n}\n.stat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n}\n@media (max-width: 640px) {\n  .stat-card {\n    padding: 1rem 1.25rem;\n    border-radius: var(--radius);\n  }\n}\n.stat-card .stat-label {\n  font-size: 0.875rem;\n  opacity: 0.95;\n  display: block;\n  margin-bottom: 4px;\n}\n@media (max-width: 640px) {\n  .stat-card .stat-label {\n    font-size: 0.8125rem;\n  }\n}\n.stat-card .stat-value {\n  font-size: 1.75rem;\n  font-weight: 700;\n}\n@media (max-width: 640px) {\n  .stat-card .stat-value {\n    font-size: 1.5rem;\n  }\n}\n.stat-card--blue {\n  background: var(--color-primary);\n}\n.stat-card--orange {\n  background: var(--color-warning);\n}\n.stat-card--green {\n  background: var(--color-success);\n}\n.stat-card--clickable {\n  cursor: pointer;\n}\n.section {\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow);\n  overflow: hidden;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.section-header h2 {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.requests-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.25rem;\n  padding: 1.5rem;\n}\n@media (max-width: 768px) {\n  .requests-grid {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 1rem;\n    padding: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .requests-grid {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n.request-card {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: 1.25rem;\n  transition: all 0.2s ease;\n}\n.request-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.request-card--pending {\n  border-left: 4px solid var(--color-warning);\n}\n.request-card--review {\n  border-left: 4px solid var(--color-info, #3b82f6);\n}\n.request-card--approved {\n  border-left: 4px solid var(--color-success);\n}\n.request-card__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.request-card__header .request-type {\n  font-weight: 600;\n  font-size: 1rem;\n  color: var(--color-text);\n}\n.request-card__header .request-status {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.request-card__header .request-status.status-pending {\n  background: rgba(251, 191, 36, 0.1);\n  color: var(--color-warning);\n}\n.request-card__header .request-status.status-review {\n  background: rgba(59, 130, 246, 0.1);\n  color: var(--color-info, #3b82f6);\n}\n.request-card__header .request-status.status-approved {\n  background: rgba(34, 197, 94, 0.1);\n  color: var(--color-success);\n}\n.request-card__body {\n  margin-bottom: 1rem;\n}\n.request-card__body .request-purpose,\n.request-card__body .request-date {\n  margin: 0.5rem 0;\n  font-size: 0.875rem;\n  color: var(--color-text-secondary, #6b7280);\n}\n.request-card__body .request-purpose strong,\n.request-card__body .request-date strong {\n  color: var(--color-text);\n  font-weight: 600;\n}\n.request-card__footer {\n  display: flex;\n  justify-content: flex-end;\n}\n.empty-state {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 3rem 1rem;\n  color: var(--color-text-secondary, #6b7280);\n}\n.empty-state p {\n  margin: 0;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=staff-dashboard.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffDashboardComponent, { className: "StaffDashboardComponent", filePath: "src/app/pages/staff-dashboard/staff-dashboard.component.ts", lineNumber: 14 });
})();
export {
  StaffDashboardComponent
};
//# sourceMappingURL=chunk-ON2MRMF6.js.map
