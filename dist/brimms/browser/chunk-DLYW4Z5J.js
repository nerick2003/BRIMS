import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-PCIERS7P.js";
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
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TUEAJAVR.js";
import "./chunk-TWWAJFRB.js";

// src/app/pages/my-requests/my-requests.component.ts
var _c0 = (a0) => ["/resident/requests", a0];
var _forTrack0 = ($index, $item) => $item.id;
function MyRequestsComponent_Conditional_66_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Rejection reason: ", r_r1.rejectedReason);
  }
}
function MyRequestsComponent_Conditional_66_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28)(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "div", 31)(5, "h3", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, MyRequestsComponent_Conditional_66_For_1_Conditional_11_Template, 2, 1, "p", 34);
    \u0275\u0275elementStart(12, "div", 35)(13, "span", 36);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 38);
    \u0275\u0275text(18, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, r_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStatusIcon(r_r1.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r1.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusBadgeClass(r_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r1.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.purpose);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r1.status === "Rejected" && r_r1.rejectedReason ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("ID: ", r_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", r_r1.date);
  }
}
function MyRequestsComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MyRequestsComponent_Conditional_66_For_1_Template, 19, 11, "a", 28, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.filteredRequests());
  }
}
function MyRequestsComponent_Conditional_67_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Try adjusting your filters or search query. ");
  }
}
function MyRequestsComponent_Conditional_67_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " You haven't submitted any requests yet. ");
  }
}
function MyRequestsComponent_Conditional_67_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 42);
    \u0275\u0275text(1, " Submit Your First Request ");
    \u0275\u0275elementEnd();
  }
}
function MyRequestsComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 39);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 40);
    \u0275\u0275text(4, "No requests found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 41);
    \u0275\u0275conditionalCreate(6, MyRequestsComponent_Conditional_67_Conditional_6_Template, 1, 0)(7, MyRequestsComponent_Conditional_67_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, MyRequestsComponent_Conditional_67_Conditional_8_Template, 2, 0, "a", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.searchQuery() || ctx_r1.statusFilter() !== "all" ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.searchQuery() && ctx_r1.statusFilter() === "all" ? 8 : -1);
  }
}
var MyRequestsComponent = class _MyRequestsComponent {
  constructor(data, auth) {
    this.data = data;
    this.auth = auth;
    this.statusFilter = signal("all", ...ngDevMode ? [{ debugName: "statusFilter" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortBy = signal("date", ...ngDevMode ? [{ debugName: "sortBy" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortOrder = signal("desc", ...ngDevMode ? [{ debugName: "sortOrder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredRequests = computed(() => {
      let filtered = [...this.allRequests];
      if (this.statusFilter() !== "all") {
        filtered = filtered.filter((r) => r.status === this.statusFilter());
      }
      const query = this.searchQuery().toLowerCase().trim();
      if (query) {
        filtered = filtered.filter((r) => r.type.toLowerCase().includes(query) || r.purpose.toLowerCase().includes(query) || r.id.toLowerCase().includes(query));
      }
      filtered.sort((a, b) => {
        let comparison = 0;
        switch (this.sortBy()) {
          case "date":
            comparison = a.date.localeCompare(b.date);
            break;
          case "type":
            comparison = a.type.localeCompare(b.type);
            break;
          case "status":
            comparison = a.status.localeCompare(b.status);
            break;
        }
        return this.sortOrder() === "asc" ? comparison : -comparison;
      });
      return filtered;
    }, ...ngDevMode ? [{ debugName: "filteredRequests" }] : (
      /* istanbul ignore next */
      []
    ));
    this.stats = computed(() => {
      const requests = this.allRequests;
      return {
        total: requests.length,
        approved: requests.filter((r) => r.status === "Approved").length,
        pending: requests.filter((r) => r.status === "Pending").length,
        forReview: requests.filter((r) => r.status === "For Review").length,
        rejected: requests.filter((r) => r.status === "Rejected").length
      };
    }, ...ngDevMode ? [{ debugName: "stats" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  /** Requests for the current logged-in resident only. */
  get allRequests() {
    const user = this.auth.currentUser;
    if (!user || user.role !== "resident")
      return [];
    const resident = this.data.getResidentById(user.id);
    return this.data.getRequestsByResidentId(resident?.residentId ?? "");
  }
  // Methods
  setStatusFilter(status) {
    this.statusFilter.set(status);
  }
  onSearchChange(event) {
    const target = event.target;
    this.searchQuery.set(target.value);
  }
  setSort(field) {
    if (this.sortBy() === field) {
      this.sortOrder.set(this.sortOrder() === "asc" ? "desc" : "asc");
    } else {
      this.sortBy.set(field);
      this.sortOrder.set("desc");
    }
  }
  getStatusBadgeClass(status) {
    if (status === "Approved")
      return "badge--success";
    if (status === "Pending" || status === "For Review" || status === "Rejected")
      return "badge--warning";
    return "";
  }
  getStatusIcon(status) {
    if (status === "Approved")
      return "\u2713";
    if (status === "Pending")
      return "\u23F3";
    if (status === "For Review")
      return "\u{1F441}";
    if (status === "Rejected")
      return "\u2717";
    return "\u{1F4C4}";
  }
  static {
    this.\u0275fac = function MyRequestsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyRequestsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyRequestsComponent, selectors: [["app-my-requests"]], decls: 68, vars: 16, consts: [[1, "my-requests"], [1, "page-header"], [1, "page-title"], [1, "stats-grid"], [1, "stat-card", "stat-card--total"], [1, "stat-card__icon"], [1, "stat-card__content"], [1, "stat-card__value"], [1, "stat-card__label"], [1, "stat-card", "stat-card--approved"], [1, "stat-card", "stat-card--pending"], [1, "stat-card", "stat-card--review"], [1, "filters-section", "card"], [1, "filters-row"], [1, "search-box"], [1, "search-icon"], ["type", "text", "placeholder", "Search by type, purpose, or ID...", 1, "form-control", 3, "input", "value"], [1, "filter-group"], [1, "filter-label"], [1, "form-control", "form-control--sm", 3, "change", "value"], ["value", "all"], ["value", "Pending"], ["value", "For Review"], ["value", "Approved"], [1, "sort-buttons"], [1, "sort-btn", 3, "click"], [1, "requests-list", "card"], [1, "empty-state"], [1, "request-card", 3, "routerLink"], [1, "request-card__icon"], [1, "request-card__content"], [1, "request-card__header"], [1, "request-card__type"], [1, "badge", 3, "ngClass"], [1, "request-card__purpose"], [1, "request-card__meta"], [1, "request-card__id"], [1, "request-card__date"], [1, "request-card__arrow"], [1, "empty-state__icon"], [1, "empty-state__title"], [1, "empty-state__message"], ["routerLink", "/resident/request-certificate", 1, "btn", "btn--primary"]], template: function MyRequestsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "My Requests");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5);
        \u0275\u0275text(7, "\u{1F4CB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275text(12, "Total Requests");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 9)(14, "div", 5);
        \u0275\u0275text(15, "\u2713");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 6)(17, "div", 7);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 8);
        \u0275\u0275text(20, "Approved");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 10)(22, "div", 5);
        \u0275\u0275text(23, "\u23F3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 6)(25, "div", 7);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 8);
        \u0275\u0275text(28, "Pending");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 11)(30, "div", 5);
        \u0275\u0275text(31, "\u{1F441}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 6)(33, "div", 7);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 8);
        \u0275\u0275text(36, "For Review");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 12)(38, "div", 13)(39, "div", 14)(40, "span", 15);
        \u0275\u0275text(41, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "input", 16);
        \u0275\u0275listener("input", function MyRequestsComponent_Template_input_input_42_listener($event) {
          return ctx.onSearchChange($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 17)(44, "label", 18);
        \u0275\u0275text(45, "Status:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "select", 19);
        \u0275\u0275listener("change", function MyRequestsComponent_Template_select_change_46_listener($event) {
          return ctx.setStatusFilter($event.target.value);
        });
        \u0275\u0275elementStart(47, "option", 20);
        \u0275\u0275text(48, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "option", 21);
        \u0275\u0275text(50, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "option", 22);
        \u0275\u0275text(52, "For Review");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "option", 23);
        \u0275\u0275text(54, "Approved");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 17)(56, "label", 18);
        \u0275\u0275text(57, "Sort by:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 24)(59, "button", 25);
        \u0275\u0275listener("click", function MyRequestsComponent_Template_button_click_59_listener() {
          return ctx.setSort("date");
        });
        \u0275\u0275text(60);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "button", 25);
        \u0275\u0275listener("click", function MyRequestsComponent_Template_button_click_61_listener() {
          return ctx.setSort("type");
        });
        \u0275\u0275text(62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "button", 25);
        \u0275\u0275listener("click", function MyRequestsComponent_Template_button_click_63_listener() {
          return ctx.setSort("status");
        });
        \u0275\u0275text(64);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(65, "div", 26);
        \u0275\u0275conditionalCreate(66, MyRequestsComponent_Conditional_66_Template, 2, 0)(67, MyRequestsComponent_Conditional_67_Template, 9, 2, "div", 27);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.stats().total);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.stats().approved);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.stats().pending);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.stats().forReview);
        \u0275\u0275advance(8);
        \u0275\u0275property("value", ctx.searchQuery());
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.statusFilter());
        \u0275\u0275advance(13);
        \u0275\u0275classProp("sort-btn--active", ctx.sortBy() === "date");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Date ", ctx.sortBy() === "date" ? ctx.sortOrder() === "asc" ? "\u2191" : "\u2193" : "", " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("sort-btn--active", ctx.sortBy() === "type");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Type ", ctx.sortBy() === "type" ? ctx.sortOrder() === "asc" ? "\u2191" : "\u2193" : "", " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("sort-btn--active", ctx.sortBy() === "status");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Status ", ctx.sortBy() === "status" ? ctx.sortOrder() === "asc" ? "\u2191" : "\u2193" : "", " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.filteredRequests().length > 0 ? 66 : 67);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ['\n.my-requests[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 640px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  transition: all 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.stat-card__content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1.2;\n  margin-bottom: 0.25rem;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n.stat-card--total[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1) 0%,\n      rgba(59, 130, 246, 0.05) 100%);\n}\n.stat-card--approved[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.1) 0%,\n      rgba(16, 185, 129, 0.05) 100%);\n}\n.stat-card--pending[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.1) 0%,\n      rgba(245, 158, 11, 0.05) 100%);\n}\n.stat-card--review[_ngcontent-%COMP%] {\n  border-color: #8b5cf6;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 92, 246, 0.1) 0%,\n      rgba(139, 92, 246, 0.05) 100%);\n}\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding: 1.25rem !important;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.875rem;\n  font-size: 1.125rem;\n  color: var(--color-text-muted);\n  pointer-events: none;\n  z-index: 1;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  font-size: 1rem;\n  min-height: 44px;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .search-box[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem 0.75rem 2.5rem;\n    font-size: 0.9375rem;\n    min-height: 40px;\n  }\n  .search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    left: 0.75rem;\n    font-size: 1rem;\n  }\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filter-group[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n}\n.sort-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.sort-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sort-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-card);\n  border-color: var(--color-primary);\n  color: var(--color-text);\n}\n.sort-btn--active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: #fff;\n  font-weight: 500;\n}\n.requests-list[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  overflow: hidden;\n}\n.request-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.9rem 1.1rem;\n  border-bottom: 1px solid var(--color-border);\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.request-card[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-card);\n  transform: translateX(4px);\n}\n.request-card[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n@media (max-width: 640px) {\n  .request-card[_ngcontent-%COMP%] {\n    padding: 0.85rem 1rem;\n    gap: 0.6rem;\n  }\n}\n.request-card__icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1;\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-bg);\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n}\n.request-card__content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.request-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.4rem;\n}\n@media (max-width: 640px) {\n  .request-card__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.4rem;\n  }\n}\n.request-card__type[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0;\n  flex: 1;\n  min-width: 0;\n}\n.request-card__purpose[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin: 0 0 0.4rem 0;\n  line-height: 1.5;\n}\n.request-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  flex-wrap: wrap;\n}\n.request-card__id[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-weight: 500;\n}\n.request-card__date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.request-card__arrow[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n  transition: transform 0.2s ease;\n}\n.request-card[_ngcontent-%COMP%]:hover   .request-card__arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n  color: var(--color-primary);\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 3rem 1.5rem;\n  text-align: center;\n}\n.empty-state__icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state__title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.5rem 0;\n}\n.empty-state__message[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  margin: 0 0 1.5rem 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=my-requests.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyRequestsComponent, [{
    type: Component,
    args: [{ selector: "app-my-requests", standalone: true, imports: [CommonModule, RouterLink, FormsModule], template: `<div class="my-requests">\r
  <div class="page-header">\r
    <h1 class="page-title">My Requests</h1>\r
  </div>\r
\r
  <!-- Statistics Cards -->\r
  <div class="stats-grid">\r
    <div class="stat-card stat-card--total">\r
      <div class="stat-card__icon">\u{1F4CB}</div>\r
      <div class="stat-card__content">\r
        <div class="stat-card__value">{{ stats().total }}</div>\r
        <div class="stat-card__label">Total Requests</div>\r
      </div>\r
    </div>\r
    <div class="stat-card stat-card--approved">\r
      <div class="stat-card__icon">\u2713</div>\r
      <div class="stat-card__content">\r
        <div class="stat-card__value">{{ stats().approved }}</div>\r
        <div class="stat-card__label">Approved</div>\r
      </div>\r
    </div>\r
    <div class="stat-card stat-card--pending">\r
      <div class="stat-card__icon">\u23F3</div>\r
      <div class="stat-card__content">\r
        <div class="stat-card__value">{{ stats().pending }}</div>\r
        <div class="stat-card__label">Pending</div>\r
      </div>\r
    </div>\r
    <div class="stat-card stat-card--review">\r
      <div class="stat-card__icon">\u{1F441}</div>\r
      <div class="stat-card__content">\r
        <div class="stat-card__value">{{ stats().forReview }}</div>\r
        <div class="stat-card__label">For Review</div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Filters and Search -->\r
  <div class="filters-section card">\r
    <div class="filters-row">\r
      <div class="search-box">\r
        <span class="search-icon">\u{1F50D}</span>\r
        <input\r
          type="text"\r
          class="form-control"\r
          placeholder="Search by type, purpose, or ID..."\r
          [value]="searchQuery()"\r
          (input)="onSearchChange($event)"\r
        />\r
      </div>\r
      \r
      <div class="filter-group">\r
        <label class="filter-label">Status:</label>\r
        <select\r
          class="form-control form-control--sm"\r
          [value]="statusFilter()"\r
          (change)="setStatusFilter($any($event.target).value)"\r
        >\r
          <option value="all">All</option>\r
          <option value="Pending">Pending</option>\r
          <option value="For Review">For Review</option>\r
          <option value="Approved">Approved</option>\r
        </select>\r
      </div>\r
\r
      <div class="filter-group">\r
        <label class="filter-label">Sort by:</label>\r
        <div class="sort-buttons">\r
          <button\r
            class="sort-btn"\r
            [class.sort-btn--active]="sortBy() === 'date'"\r
            (click)="setSort('date')"\r
          >\r
            Date {{ sortBy() === 'date' ? (sortOrder() === 'asc' ? '\u2191' : '\u2193') : '' }}\r
          </button>\r
          <button\r
            class="sort-btn"\r
            [class.sort-btn--active]="sortBy() === 'type'"\r
            (click)="setSort('type')"\r
          >\r
            Type {{ sortBy() === 'type' ? (sortOrder() === 'asc' ? '\u2191' : '\u2193') : '' }}\r
          </button>\r
          <button\r
            class="sort-btn"\r
            [class.sort-btn--active]="sortBy() === 'status'"\r
            (click)="setSort('status')"\r
          >\r
            Status {{ sortBy() === 'status' ? (sortOrder() === 'asc' ? '\u2191' : '\u2193') : '' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Requests List -->\r
  <div class="requests-list card">\r
    @if (filteredRequests().length > 0) {\r
      @for (r of filteredRequests(); track r.id) {\r
        <a [routerLink]="['/resident/requests', r.id]" class="request-card">\r
          <div class="request-card__icon">{{ getStatusIcon(r.status) }}</div>\r
          <div class="request-card__content">\r
            <div class="request-card__header">\r
              <h3 class="request-card__type">{{ r.type }}</h3>\r
              <span class="badge" [ngClass]="getStatusBadgeClass(r.status)">\r
                {{ r.status }}\r
              </span>\r
            </div>\r
            <p class="request-card__purpose">{{ r.purpose }}</p>\r
            @if (r.status === 'Rejected' && r.rejectedReason) {\r
              <p class="request-card__purpose">Rejection reason: {{ r.rejectedReason }}</p>\r
            }\r
            <div class="request-card__meta">\r
              <span class="request-card__id">ID: {{ r.id }}</span>\r
              <span class="request-card__date">\u{1F4C5} {{ r.date }}</span>\r
            </div>\r
          </div>\r
          <div class="request-card__arrow">\u2192</div>\r
        </a>\r
      }\r
    } @else {\r
      <div class="empty-state">\r
        <div class="empty-state__icon">\u{1F4ED}</div>\r
        <h3 class="empty-state__title">No requests found</h3>\r
        <p class="empty-state__message">\r
          @if (searchQuery() || statusFilter() !== 'all') {\r
            Try adjusting your filters or search query.\r
          } @else {\r
            You haven't submitted any requests yet.\r
          }\r
        </p>\r
        @if (!searchQuery() && statusFilter() === 'all') {\r
          <a routerLink="/resident/request-certificate" class="btn btn--primary">\r
            Submit Your First Request\r
          </a>\r
        }\r
      </div>\r
    }\r
  </div>\r
</div>\r
`, styles: ['/* src/app/pages/my-requests/my-requests.component.scss */\n.my-requests {\n  width: 100%;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .page-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 640px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  transition: all 0.2s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n}\n.stat-card__icon {\n  font-size: 2rem;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.stat-card__content {\n  flex: 1;\n  min-width: 0;\n}\n.stat-card__value {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1.2;\n  margin-bottom: 0.25rem;\n}\n.stat-card__label {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n.stat-card--total {\n  border-color: #3b82f6;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1) 0%,\n      rgba(59, 130, 246, 0.05) 100%);\n}\n.stat-card--approved {\n  border-color: #10b981;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.1) 0%,\n      rgba(16, 185, 129, 0.05) 100%);\n}\n.stat-card--pending {\n  border-color: #f59e0b;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.1) 0%,\n      rgba(245, 158, 11, 0.05) 100%);\n}\n.stat-card--review {\n  border-color: #8b5cf6;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 92, 246, 0.1) 0%,\n      rgba(139, 92, 246, 0.05) 100%);\n}\n.filters-section {\n  margin-bottom: 1.5rem;\n  padding: 1.25rem !important;\n}\n.filters-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .filters-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.search-box {\n  flex: 1;\n  min-width: 300px;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-box .search-icon {\n  position: absolute;\n  left: 0.875rem;\n  font-size: 1.125rem;\n  color: var(--color-text-muted);\n  pointer-events: none;\n  z-index: 1;\n}\n.search-box input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  font-size: 1rem;\n  min-height: 44px;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .search-box {\n    min-width: 100%;\n  }\n  .search-box input {\n    padding: 0.75rem 1rem 0.75rem 2.5rem;\n    font-size: 0.9375rem;\n    min-height: 40px;\n  }\n  .search-box .search-icon {\n    left: 0.75rem;\n    font-size: 1rem;\n  }\n}\n.filter-group {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filter-group .filter-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n}\n.sort-buttons {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.sort-btn {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sort-btn:hover {\n  background: var(--color-bg-card);\n  border-color: var(--color-primary);\n  color: var(--color-text);\n}\n.sort-btn--active {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: #fff;\n  font-weight: 500;\n}\n.requests-list {\n  padding: 0 !important;\n  overflow: hidden;\n}\n.request-card {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.9rem 1.1rem;\n  border-bottom: 1px solid var(--color-border);\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.request-card:hover {\n  background: var(--color-bg-card);\n  transform: translateX(4px);\n}\n.request-card:last-child {\n  border-bottom: none;\n}\n@media (max-width: 640px) {\n  .request-card {\n    padding: 0.85rem 1rem;\n    gap: 0.6rem;\n  }\n}\n.request-card__icon {\n  font-size: 1.5rem;\n  line-height: 1;\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-bg);\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n}\n.request-card__content {\n  flex: 1;\n  min-width: 0;\n}\n.request-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.4rem;\n}\n@media (max-width: 640px) {\n  .request-card__header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.4rem;\n  }\n}\n.request-card__type {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0;\n  flex: 1;\n  min-width: 0;\n}\n.request-card__purpose {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin: 0 0 0.4rem 0;\n  line-height: 1.5;\n}\n.request-card__meta {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  flex-wrap: wrap;\n}\n.request-card__id {\n  font-family: "Courier New", monospace;\n  font-weight: 500;\n}\n.request-card__date {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.request-card__arrow {\n  font-size: 1.25rem;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n  transition: transform 0.2s ease;\n}\n.request-card:hover .request-card__arrow {\n  transform: translateX(4px);\n  color: var(--color-primary);\n}\n.empty-state {\n  padding: 3rem 1.5rem;\n  text-align: center;\n}\n.empty-state__icon {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state__title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.5rem 0;\n}\n.empty-state__message {\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  margin: 0 0 1.5rem 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=my-requests.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyRequestsComponent, { className: "MyRequestsComponent", filePath: "src/app/pages/my-requests/my-requests.component.ts", lineNumber: 15 });
})();
export {
  MyRequestsComponent
};
//# sourceMappingURL=chunk-DLYW4Z5J.js.map
