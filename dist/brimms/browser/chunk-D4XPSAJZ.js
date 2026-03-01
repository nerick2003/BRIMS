import {
  AuthService,
  DataService
} from "./chunk-EMIWMFU5.js";
import "./chunk-BPYJUQPN.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgClass,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ISBYAA2X.js";
import "./chunk-YP43Q66R.js";

// src/app/pages/resident-reports/resident-reports.component.ts
var _c0 = (a0, a1) => ({ "badge--success": a0, "badge--warning": a1 });
var _forTrack0 = ($index, $item) => $item.id;
function ResidentReportsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "My Certificate Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "span", 9);
    \u0275\u0275text(6, "Total Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 11)(11, "span", 9);
    \u0275\u0275text(12, "Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "span", 9);
    \u0275\u0275text(18, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 13)(23, "span", 9);
    \u0275\u0275text(24, "For Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 10);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 14)(29, "h3");
    \u0275\u0275text(30, "Request Status Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 15)(32, "div", 16)(33, "span", 17);
    \u0275\u0275text(34, "Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 18);
    \u0275\u0275element(36, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 20);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 16)(40, "span", 17);
    \u0275\u0275text(41, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 18);
    \u0275\u0275element(43, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 20);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 16)(47, "span", 17);
    \u0275\u0275text(48, "For Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 18);
    \u0275\u0275element(50, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 20);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const stats_r1 = \u0275\u0275nextContext().getMyRequestStats();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 16, stats_r1.total));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 18, stats_r1.approved));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 20, stats_r1.pending));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 22, stats_r1.forReview));
    \u0275\u0275advance(10);
    \u0275\u0275styleProp("width", stats_r1.total > 0 ? stats_r1.approved / stats_r1.total * 100 : 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", stats_r1.approved, " (", stats_r1.total > 0 ? (stats_r1.approved / stats_r1.total * 100).toFixed(0) : 0, "%)");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", stats_r1.total > 0 ? stats_r1.pending / stats_r1.total * 100 : 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", stats_r1.pending, " (", stats_r1.total > 0 ? (stats_r1.pending / stats_r1.total * 100).toFixed(0) : 0, "%)");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", stats_r1.total > 0 ? stats_r1.forReview / stats_r1.total * 100 : 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", stats_r1.forReview, " (", stats_r1.total > 0 ? (stats_r1.forReview / stats_r1.total * 100).toFixed(0) : 0, "%)");
  }
}
function ResidentReportsComponent_Conditional_11_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const req_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r2.purpose);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c0, req_r2.status === "Approved", req_r2.status === "Pending" || req_r2.status === "For Review" || req_r2.status === "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", req_r2.status, " ");
  }
}
function ResidentReportsComponent_Conditional_11_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "No requests found");
    \u0275\u0275elementEnd()();
  }
}
function ResidentReportsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "Request History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 23);
    \u0275\u0275text(4, "Complete history of all your certificate requests.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "table", 25)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Certificate Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, ResidentReportsComponent_Conditional_11_For_19_Template, 10, 8, "tr", null, _forTrack0, false, ResidentReportsComponent_Conditional_11_ForEmpty_20_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r2.getMyRequests());
  }
}
var ResidentReportsComponent = class _ResidentReportsComponent {
  constructor(data, auth) {
    this.data = data;
    this.auth = auth;
    this.activeTab = "requests";
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  /** Current resident's requests only. */
  getMyRequests() {
    const user = this.auth.currentUser;
    if (!user || user.role !== "resident")
      return [];
    const resident = this.data.getResidentById(user.id);
    return this.data.getRequestsByResidentId(resident?.residentId ?? "");
  }
  // Get request statistics for current resident
  getMyRequestStats() {
    const requests = this.getMyRequests();
    const total = requests.length;
    const approved = requests.filter((r) => r.status === "Approved").length;
    const pending = requests.filter((r) => r.status === "Pending").length;
    const forReview = requests.filter((r) => r.status === "For Review").length;
    return {
      total,
      approved,
      pending,
      forReview
    };
  }
  static {
    this.\u0275fac = function ResidentReportsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResidentReportsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResidentReportsComponent, selectors: [["app-resident-reports"]], decls: 12, vars: 8, consts: [[1, "resident-reports-page"], [1, "page-title"], [1, "tabs-wrapper"], ["role", "tablist", 1, "tabs"], ["type", "button", "role", "tab", 1, "tab-button", 3, "click"], [1, "tab-content"], [1, "card"], [1, "stats-grid"], [1, "stat-card", "stat-card--blue"], [1, "stat-label"], [1, "stat-value"], [1, "stat-card", "stat-card--success"], [1, "stat-card", "stat-card--warning"], [1, "stat-card", "stat-card--info"], [1, "section"], [1, "status-breakdown"], [1, "status-item"], [1, "status-label"], [1, "status-bar"], [1, "status-fill", "status-fill--success"], [1, "status-count"], [1, "status-fill", "status-fill--warning"], [1, "status-fill", "status-fill--info"], [1, "muted"], [1, "table-wrap"], [1, "table"], [1, "badge", 3, "ngClass"], ["colspan", "4", 1, "empty-state"]], template: function ResidentReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "My Reports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "nav", 3)(5, "button", 4);
        \u0275\u0275listener("click", function ResidentReportsComponent_Template_button_click_5_listener() {
          return ctx.setActiveTab("requests");
        });
        \u0275\u0275text(6, " Certificate Requests ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function ResidentReportsComponent_Template_button_click_7_listener() {
          return ctx.setActiveTab("history");
        });
        \u0275\u0275text(8, " Request History ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275conditionalCreate(10, ResidentReportsComponent_Conditional_10_Template, 53, 24, "div", 6);
        \u0275\u0275conditionalCreate(11, ResidentReportsComponent_Conditional_11_Template, 21, 1, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "requests");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "requests");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "history");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "history");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.activeTab === "requests" ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "history" ? 11 : -1);
      }
    }, dependencies: [CommonModule, NgClass, DecimalPipe], styles: ["\n\n.resident-reports-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.tabs-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  flex-wrap: wrap;\n}\n.tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.tabs[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 4px;\n}\n.tab-button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  color: var(--color-text-muted);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tab-button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.tab-content[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow);\n  padding: 1.5rem;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 1rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.card[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  margin-bottom: 1rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  display: block;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.stat-card--blue[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: white;\n}\n.stat-card--blue[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], \n.stat-card--blue[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: white;\n}\n.stat-card--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  border-color: var(--color-success);\n}\n.stat-card--success[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.stat-card--warning[_ngcontent-%COMP%] {\n  background: var(--color-warning-bg);\n  border-color: var(--color-warning);\n}\n.stat-card--warning[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.stat-card--info[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  border-color: var(--color-primary-light);\n}\n.stat-card--info[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.status-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.status-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.status-label[_ngcontent-%COMP%] {\n  min-width: 100px;\n  font-weight: 500;\n  color: var(--color-text);\n}\n.status-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 24px;\n  background: var(--color-border);\n  border-radius: 12px;\n  overflow: hidden;\n  position: relative;\n}\n.status-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 12px;\n  transition: width 0.3s ease;\n}\n.status-fill--success[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.status-fill--warning[_ngcontent-%COMP%] {\n  background: var(--color-warning);\n}\n.status-fill--info[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n.status-count[_ngcontent-%COMP%] {\n  min-width: 80px;\n  text-align: right;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-top: 1rem;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  background: var(--color-bg);\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n}\n.table[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 2rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border-radius: 9999px;\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--warning[_ngcontent-%COMP%] {\n  background: var(--color-warning-bg);\n  color: var(--color-warning);\n}\n.badge--info[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=resident-reports.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResidentReportsComponent, [{
    type: Component,
    args: [{ selector: "app-resident-reports", standalone: true, imports: [CommonModule], template: `<div class="resident-reports-page">\r
  <h1 class="page-title">My Reports</h1>\r
\r
  <div class="tabs-wrapper">\r
    <nav class="tabs" role="tablist">\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'requests'"\r
        (click)="setActiveTab('requests')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'requests'"\r
      >\r
        Certificate Requests\r
      </button>\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'history'"\r
        (click)="setActiveTab('history')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'history'"\r
      >\r
        Request History\r
      </button>\r
    </nav>\r
  </div>\r
\r
  <div class="tab-content">\r
    @if (activeTab === 'requests') {\r
      <div class="card">\r
        <h2>My Certificate Requests</h2>\r
        @let stats = getMyRequestStats();\r
        \r
        <div class="stats-grid">\r
          <div class="stat-card stat-card--blue">\r
            <span class="stat-label">Total Requests</span>\r
            <span class="stat-value">{{ stats.total | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--success">\r
            <span class="stat-label">Approved</span>\r
            <span class="stat-value">{{ stats.approved | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--warning">\r
            <span class="stat-label">Pending</span>\r
            <span class="stat-value">{{ stats.pending | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--info">\r
            <span class="stat-label">For Review</span>\r
            <span class="stat-value">{{ stats.forReview | number }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="section">\r
          <h3>Request Status Breakdown</h3>\r
          <div class="status-breakdown">\r
            <div class="status-item">\r
              <span class="status-label">Approved</span>\r
              <div class="status-bar">\r
                <div class="status-fill status-fill--success" [style.width.%]="stats.total > 0 ? (stats.approved / stats.total * 100) : 0"></div>\r
              </div>\r
              <span class="status-count">{{ stats.approved }} ({{ stats.total > 0 ? (stats.approved / stats.total * 100).toFixed(0) : 0 }}%)</span>\r
            </div>\r
            <div class="status-item">\r
              <span class="status-label">Pending</span>\r
              <div class="status-bar">\r
                <div class="status-fill status-fill--warning" [style.width.%]="stats.total > 0 ? (stats.pending / stats.total * 100) : 0"></div>\r
              </div>\r
              <span class="status-count">{{ stats.pending }} ({{ stats.total > 0 ? (stats.pending / stats.total * 100).toFixed(0) : 0 }}%)</span>\r
            </div>\r
            <div class="status-item">\r
              <span class="status-label">For Review</span>\r
              <div class="status-bar">\r
                <div class="status-fill status-fill--info" [style.width.%]="stats.total > 0 ? (stats.forReview / stats.total * 100) : 0"></div>\r
              </div>\r
              <span class="status-count">{{ stats.forReview }} ({{ stats.total > 0 ? (stats.forReview / stats.total * 100).toFixed(0) : 0 }}%)</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    }\r
\r
    @if (activeTab === 'history') {\r
      <div class="card">\r
        <h2>Request History</h2>\r
        <p class="muted">Complete history of all your certificate requests.</p>\r
        \r
        <div class="table-wrap">\r
          <table class="table">\r
            <thead>\r
              <tr>\r
                <th>Date</th>\r
                <th>Certificate Type</th>\r
                <th>Purpose</th>\r
                <th>Status</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (req of getMyRequests(); track req.id) {\r
                <tr>\r
                  <td>{{ req.date }}</td>\r
                  <td>{{ req.type }}</td>\r
                  <td>{{ req.purpose }}</td>\r
                  <td>\r
                    <span class="badge" [ngClass]="{\r
                      'badge--success': req.status === 'Approved',\r
                      'badge--warning': req.status === 'Pending' || req.status === 'For Review' || req.status === 'Rejected'\r
                    }">\r
                      {{ req.status }}\r
                    </span>\r
                  </td>\r
                </tr>\r
              } @empty {\r
                <tr>\r
                  <td colspan="4" class="empty-state">No requests found</td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/resident-reports/resident-reports.component.scss */\n.resident-reports-page {\n  width: 100%;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.tabs-wrapper {\n  margin-bottom: 1.75rem;\n}\n.tabs {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  flex-wrap: wrap;\n}\n.tabs::-webkit-scrollbar {\n  height: 4px;\n}\n.tabs::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 4px;\n}\n.tab-button {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  color: var(--color-text-muted);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tab-button:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tab-button.active {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.tab-content {\n  min-height: 400px;\n}\n.card {\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow);\n  padding: 1.5rem;\n}\n.card h2 {\n  margin: 0 0 1.5rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.card h3 {\n  margin: 1.5rem 0 1rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.card .muted {\n  color: var(--color-text-muted);\n  margin-bottom: 1rem;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.stat-card {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-card .stat-label {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  display: block;\n}\n.stat-card .stat-value {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.stat-card--blue {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: white;\n}\n.stat-card--blue .stat-label,\n.stat-card--blue .stat-value {\n  color: white;\n}\n.stat-card--success {\n  background: var(--color-success-bg);\n  border-color: var(--color-success);\n}\n.stat-card--success .stat-value {\n  color: var(--color-success);\n}\n.stat-card--warning {\n  background: var(--color-warning-bg);\n  border-color: var(--color-warning);\n}\n.stat-card--warning .stat-value {\n  color: var(--color-warning);\n}\n.stat-card--info {\n  background: var(--color-primary-bg);\n  border-color: var(--color-primary-light);\n}\n.stat-card--info .stat-value {\n  color: var(--color-primary);\n}\n.section {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.status-breakdown {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.status-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.status-label {\n  min-width: 100px;\n  font-weight: 500;\n  color: var(--color-text);\n}\n.status-bar {\n  flex: 1;\n  height: 24px;\n  background: var(--color-border);\n  border-radius: 12px;\n  overflow: hidden;\n  position: relative;\n}\n.status-fill {\n  height: 100%;\n  border-radius: 12px;\n  transition: width 0.3s ease;\n}\n.status-fill--success {\n  background: var(--color-success);\n}\n.status-fill--warning {\n  background: var(--color-warning);\n}\n.status-fill--info {\n  background: var(--color-primary);\n}\n.status-count {\n  min-width: 80px;\n  text-align: right;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.table-wrap {\n  overflow-x: auto;\n  margin-top: 1rem;\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table th,\n.table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n}\n.table th {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  background: var(--color-bg);\n}\n.table tr:hover td {\n  background: var(--color-bg);\n}\n.table .empty-state {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 2rem;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 10px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border-radius: 9999px;\n}\n.badge--success {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--warning {\n  background: var(--color-warning-bg);\n  color: var(--color-warning);\n}\n.badge--info {\n  background: var(--color-primary-bg);\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=resident-reports.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResidentReportsComponent, { className: "ResidentReportsComponent", filePath: "src/app/pages/resident-reports/resident-reports.component.ts", lineNumber: 13 });
})();
export {
  ResidentReportsComponent
};
//# sourceMappingURL=chunk-D4XPSAJZ.js.map
