import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-PCIERS7P.js";
import {
  AuditLogService
} from "./chunk-2RJNPIJT.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  HostListener,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresolveWindow,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TUEAJAVR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/pages/audit-log/audit-log.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function AuditLogComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1.label);
  }
}
function AuditLogComponent_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "No audit log entries match your filters.");
    \u0275\u0275elementEnd();
  }
}
function AuditLogComponent_Conditional_18_Conditional_3_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r2.formattedDate);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", entry_r2.userDisplay);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r2.userDisplay, " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-category", entry_r2.category);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r2.categoryLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r2.action);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", entry_r2.detailsDisplay);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r2.detailsDisplay, " ");
  }
}
function AuditLogComponent_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 16)(1, "thead")(2, "tr")(3, "th", 17);
    \u0275\u0275text(4, "Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Details");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, AuditLogComponent_Conditional_18_Conditional_3_For_15_Template, 12, 8, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const logs_r3 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(logs_r3);
  }
}
function AuditLogComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 14);
    \u0275\u0275conditionalCreate(2, AuditLogComponent_Conditional_18_Conditional_2_Template, 2, 0, "p", 15)(3, AuditLogComponent_Conditional_18_Conditional_3_Template, 16, 0, "table", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const logs_r3 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(logs_r3.length === 0 ? 2 : 3);
  }
}
function AuditLogComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, " No audit log entries match your filters. ");
    \u0275\u0275elementEnd();
  }
}
function AuditLogComponent_Conditional_19_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 29)(10, "div", 30)(11, "span", 31);
    \u0275\u0275text(12, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 30)(16, "span", 31);
    \u0275\u0275text(17, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275attribute("title", entry_r4.formattedDate);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r4.formattedDate, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("title", entry_r4.userDisplay);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r4.userDisplay, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-category", entry_r4.category)("title", entry_r4.categoryLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r4.categoryLabel, " ");
    \u0275\u0275advance(5);
    \u0275\u0275attribute("title", entry_r4.action);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r4.action, " ");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("title", entry_r4.detailsDisplay);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r4.detailsDisplay, " ");
  }
}
function AuditLogComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AuditLogComponent_Conditional_19_Conditional_2_For_1_Template, 20, 11, "div", 24, _forTrack1);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const logs_r3 = \u0275\u0275readContextLet(1);
    \u0275\u0275repeater(logs_r3);
  }
}
function AuditLogComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, AuditLogComponent_Conditional_19_Conditional_1_Template, 2, 0, "div", 23)(2, AuditLogComponent_Conditional_19_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const logs_r3 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logs_r3.length === 0 ? 1 : 2);
  }
}
var AuditLogComponent = class _AuditLogComponent {
  constructor(audit) {
    this.audit = audit;
    this.logs = signal([], ...ngDevMode ? [{ debugName: "logs" }] : (
      /* istanbul ignore next */
      []
    ));
    this.categoryFilter = signal("", ...ngDevMode ? [{ debugName: "categoryFilter" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchText = signal("", ...ngDevMode ? [{ debugName: "searchText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isMobileView = signal(typeof window !== "undefined" ? window.innerWidth <= 640 : false, ...ngDevMode ? [{ debugName: "isMobileView" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredLogs = computed(() => {
      let list = this.logs();
      const cat = this.categoryFilter().toLowerCase();
      const search = this.searchText().trim().toLowerCase();
      if (cat) {
        list = list.filter((e) => e.categoryLower === cat);
      }
      if (search) {
        list = list.filter((e) => e.searchBlob.includes(search));
      }
      return list;
    }, ...ngDevMode ? [{ debugName: "filteredLogs" }] : (
      /* istanbul ignore next */
      []
    ));
    this.categories = [
      { value: "", label: "All categories" },
      { value: "auth", label: "Auth" },
      { value: "resident", label: "Resident" },
      { value: "household", label: "Household" },
      { value: "user", label: "User" },
      { value: "request", label: "Request" },
      { value: "system", label: "System" }
    ];
  }
  ngOnInit() {
    this.logs.set(this.audit.getLogs().map((entry) => this.toViewEntry(entry)));
  }
  onCategoryChange(value) {
    this.categoryFilter.set(value);
  }
  onSearchInput(value) {
    this.searchText.set(value);
  }
  onResize() {
    const next = typeof window !== "undefined" ? window.innerWidth <= 640 : false;
    if (this.isMobileView() !== next) {
      this.isMobileView.set(next);
    }
  }
  formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleString(void 0, {
      dateStyle: "short",
      timeStyle: "short"
    });
  }
  getCategoryLabel(category) {
    const c = this.categories.find((x) => x.value === category);
    return c ? c.label : category;
  }
  toViewEntry(entry) {
    const userDisplay = entry.userName || entry.userEmail || "\u2014";
    const detailsDisplay = entry.details || entry.entityName || "\u2014";
    return __spreadProps(__spreadValues({}, entry), {
      formattedDate: this.formatDate(entry.timestamp),
      categoryLabel: this.getCategoryLabel(entry.category),
      userDisplay,
      detailsDisplay,
      categoryLower: entry.category.toLowerCase(),
      searchBlob: `${entry.action} ${entry.userName ?? ""} ${entry.userEmail ?? ""} ${entry.details ?? ""} ${entry.entityName ?? ""}`.toLowerCase().trim()
    });
  }
  static {
    this.\u0275fac = function AuditLogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuditLogComponent)(\u0275\u0275directiveInject(AuditLogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditLogComponent, selectors: [["app-audit-log"]], hostBindings: function AuditLogComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function AuditLogComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 20, vars: 4, consts: [[1, "audit-log-page"], [1, "page-title"], [1, "page-description"], [1, "filters", "card"], [1, "filters-row"], [1, "filter-group", "filter-group--category"], ["for", "category", 1, "filter-label"], ["id", "category", 1, "filter-select", 3, "change", "value"], [3, "value"], [1, "filter-group", "filter-group--search"], ["for", "search", 1, "filter-label"], ["id", "search", "type", "text", "placeholder", "Action, user, details...", 1, "filter-input", 3, "input", "value"], [1, "card", "table-card"], [1, "audit-mobile-list"], [1, "table-wrapper"], [1, "empty-message"], [1, "table"], [1, "col-date-header"], [1, "col-date"], [1, "col-user"], [1, "badge"], [1, "col-action"], [1, "col-details"], [1, "audit-mobile-empty"], [1, "audit-mobile-card"], [1, "audit-mobile-card__top"], [1, "audit-mobile-card__titles"], [1, "audit-mobile-card__date"], [1, "audit-mobile-card__user"], [1, "audit-mobile-card__fields"], [1, "audit-mobile-kv"], [1, "audit-mobile-kv__k"], [1, "audit-mobile-kv__v"], [1, "audit-mobile-kv__v", "audit-mobile-kv__v--details"]], template: function AuditLogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275declareLet(1);
        \u0275\u0275elementStart(2, "h1", 1);
        \u0275\u0275text(3, "Audit Log");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "View system activity: logins, data changes, and user actions.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "label", 6);
        \u0275\u0275text(10, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "select", 7);
        \u0275\u0275listener("change", function AuditLogComponent_Template_select_change_11_listener($event) {
          return ctx.onCategoryChange($event.target.value);
        });
        \u0275\u0275repeaterCreate(12, AuditLogComponent_For_13_Template, 2, 2, "option", 8, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "label", 10);
        \u0275\u0275text(16, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 11);
        \u0275\u0275listener("input", function AuditLogComponent_Template_input_input_17_listener($event) {
          return ctx.onSearchInput($event.target.value);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(18, AuditLogComponent_Conditional_18_Template, 4, 1, "div", 12)(19, AuditLogComponent_Conditional_19_Template, 3, 1, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275storeLet(ctx.filteredLogs());
        \u0275\u0275advance(10);
        \u0275\u0275property("value", ctx.categoryFilter());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.searchText());
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isMobileView() ? 18 : 19);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ['\n.audit-log-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n}\n.page-description[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  margin: 0 0 1.5rem;\n}\n.filters[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1rem;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.filter-group--search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 280px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--color-primary, #60a5fa);\n  text-shadow: 0 0 10px rgba(96, 165, 250, 0.2);\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: var(--radius-md, 8px);\n  border: 1px solid color-mix(in srgb, var(--color-primary, #60a5fa) 35%, var(--color-border) 65%);\n  background: var(--color-bg);\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  min-width: 160px;\n}\n.filter-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: var(--radius-md, 8px);\n  border: 1px solid color-mix(in srgb, var(--color-primary, #60a5fa) 35%, var(--color-border) 65%);\n  background: var(--color-bg);\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  min-width: 200px;\n  flex: 1;\n}\n.table-card[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(100, 116, 139, 0.55) transparent;\n}\n.table-wrapper[_ngcontent-%COMP%]::before, \n.table-wrapper[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 18px;\n  pointer-events: none;\n  z-index: 0;\n}\n.table-wrapper[_ngcontent-%COMP%]::before {\n  left: 0;\n  background:\n    linear-gradient(\n      to right,\n      var(--color-bg-card) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.table-wrapper[_ngcontent-%COMP%]::after {\n  right: 0;\n  background:\n    linear-gradient(\n      to left,\n      var(--color-bg-card) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 10px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(100, 116, 139, 0.5);\n  border-radius: 999px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.empty-message[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: auto;\n  border-collapse: collapse;\n  min-width: 640px;\n  position: relative;\n  z-index: 1;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 4;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%] {\n}\n.table[_ngcontent-%COMP%]   th.col-date-header[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td.col-date[_ngcontent-%COMP%] {\n  position: sticky;\n  left: 0;\n  z-index: 3;\n  box-shadow: 1px 0 0 var(--color-border);\n}\n.table[_ngcontent-%COMP%] {\n}\n.table[_ngcontent-%COMP%]   th.col-date-header[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n  z-index: 5;\n}\n.table[_ngcontent-%COMP%] {\n}\n.table[_ngcontent-%COMP%]   td.col-date[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  background: var(--color-bg);\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td.col-date[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n}\n.col-date[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.875rem;\n  min-width: 180px;\n}\n.col-user[_ngcontent-%COMP%] {\n  max-width: 180px;\n  min-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-action[_ngcontent-%COMP%] {\n  font-weight: 500;\n  min-width: 150px;\n}\n.col-details[_ngcontent-%COMP%] {\n  max-width: 280px;\n  min-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge[data-category=auth][_ngcontent-%COMP%] {\n  background: var(--color-primary-bg, #eef2ff);\n  color: var(--color-primary, #2563eb);\n}\n.badge[data-category=resident][_ngcontent-%COMP%] {\n  background: var(--color-success-bg, #ecfdf5);\n  color: var(--color-success, #059669);\n}\n.badge[data-category=household][_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.badge[data-category=user][_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.badge[data-category=request][_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #be185d;\n}\n.badge[data-category=system][_ngcontent-%COMP%] {\n  background: var(--color-bg);\n  color: var(--color-text-muted);\n}\n@media (max-width: 768px) {\n  .table-wrapper[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n}\n@media (max-width: 640px) {\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n  }\n  .filter-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filter-group[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n    width: 62px;\n    flex-shrink: 0;\n  }\n  .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%], \n   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .filter-group--search[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .filter-group--search[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .table-wrapper[_ngcontent-%COMP%] {\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n  }\n  .table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n    height: 0;\n  }\n  .table[_ngcontent-%COMP%] {\n    min-width: 560px;\n  }\n}\n.audit-mobile-list[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 1rem;\n}\n.audit-mobile-card[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg, 12px);\n  box-shadow: var(--shadow);\n  padding: 14px;\n}\n.audit-mobile-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.audit-mobile-card__titles[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.audit-mobile-card__date[_ngcontent-%COMP%] {\n  font-weight: 800;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.audit-mobile-card__user[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.audit-mobile-card__fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n}\n.audit-mobile-kv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 12px;\n}\n.audit-mobile-kv__k[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  flex-shrink: 0;\n}\n.audit-mobile-kv__v[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-weight: 600;\n  text-align: right;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.audit-mobile-kv__v--details[_ngcontent-%COMP%] {\n  white-space: normal;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: clip;\n}\n.audit-mobile-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem 1rem;\n  color: var(--color-text-muted);\n}\n@media (max-width: 640px) {\n  .table-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .audit-mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=audit-log.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditLogComponent, [{
    type: Component,
    args: [{ selector: "app-audit-log", standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="audit-log-page">\r\n  @let logs = filteredLogs();\r\n  <h1 class="page-title">Audit Log</h1>\r\n  <p class="page-description">View system activity: logins, data changes, and user actions.</p>\r\n\r\n  <div class="filters card">\r\n    <div class="filters-row">\r\n      <div class="filter-group filter-group--category">\r\n        <label class="filter-label" for="category">Category</label>\r\n        <select\r\n          id="category"\r\n          class="filter-select"\r\n          [value]="categoryFilter()"\r\n          (change)="onCategoryChange($any($event.target).value)"\r\n        >\r\n          @for (cat of categories; track cat.value) {\r\n            <option [value]="cat.value">{{ cat.label }}</option>\r\n          }\r\n        </select>\r\n      </div>\r\n\r\n      <div class="filter-group filter-group--search">\r\n        <label class="filter-label" for="search">Search</label>\r\n        <input\r\n          id="search"\r\n          type="text"\r\n          class="filter-input"\r\n          placeholder="Action, user, details..."\r\n          [value]="searchText()"\r\n          (input)="onSearchInput($any($event.target).value)"\r\n        />\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  @if (!isMobileView()) {\r\n    <div class="card table-card">\r\n      <div class="table-wrapper">\r\n        @if (logs.length === 0) {\r\n          <p class="empty-message">No audit log entries match your filters.</p>\r\n        } @else {\r\n          <table class="table">\r\n            <thead>\r\n              <tr>\r\n                <th class="col-date-header">Date & Time</th>\r\n                <th>User</th>\r\n                <th>Category</th>\r\n                <th>Action</th>\r\n                <th>Details</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              @for (entry of logs; track entry.id) {\r\n                <tr>\r\n                  <td class="col-date">{{ entry.formattedDate }}</td>\r\n                  <td\r\n                    class="col-user"\r\n                    [attr.title]="entry.userDisplay"\r\n                  >\r\n                    {{ entry.userDisplay }}\r\n                  </td>\r\n                  <td>\r\n                    <span class="badge" [attr.data-category]="entry.category">\r\n                      {{ entry.categoryLabel }}\r\n                    </span>\r\n                  </td>\r\n                  <td class="col-action">{{ entry.action }}</td>\r\n                  <td\r\n                    class="col-details"\r\n                    [attr.title]="entry.detailsDisplay"\r\n                  >\r\n                    {{ entry.detailsDisplay }}\r\n                  </td>\r\n                </tr>\r\n              }\r\n            </tbody>\r\n          </table>\r\n        }\r\n      </div>\r\n    </div>\r\n  } @else {\r\n    <div class="audit-mobile-list">\r\n      @if (logs.length === 0) {\r\n        <div class="audit-mobile-empty">\r\n          No audit log entries match your filters.\r\n        </div>\r\n      } @else {\r\n        @for (entry of logs; track entry.id) {\r\n          <div class="audit-mobile-card">\r\n            <div class="audit-mobile-card__top">\r\n              <div class="audit-mobile-card__titles">\r\n                <div\r\n                  class="audit-mobile-card__date"\r\n                  [attr.title]="entry.formattedDate"\r\n                >\r\n                  {{ entry.formattedDate }}\r\n                </div>\r\n                <div\r\n                  class="audit-mobile-card__user"\r\n                  [attr.title]="entry.userDisplay"\r\n                >\r\n                  {{ entry.userDisplay }}\r\n                </div>\r\n              </div>\r\n\r\n              <span\r\n                class="badge"\r\n                [attr.data-category]="entry.category"\r\n                [attr.title]="entry.categoryLabel"\r\n              >\r\n                {{ entry.categoryLabel }}\r\n              </span>\r\n            </div>\r\n\r\n            <div class="audit-mobile-card__fields">\r\n              <div class="audit-mobile-kv">\r\n                <span class="audit-mobile-kv__k">Action</span>\r\n                <span\r\n                  class="audit-mobile-kv__v"\r\n                  [attr.title]="entry.action"\r\n                >\r\n                  {{ entry.action }}\r\n                </span>\r\n              </div>\r\n\r\n              <div class="audit-mobile-kv">\r\n                <span class="audit-mobile-kv__k">Details</span>\r\n                <span\r\n                  class="audit-mobile-kv__v audit-mobile-kv__v--details"\r\n                  [attr.title]="entry.detailsDisplay"\r\n                >\r\n                  {{ entry.detailsDisplay }}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        }\r\n      }\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ['/* src/app/pages/audit-log/audit-log.component.scss */\n.audit-log-page {\n  width: 100%;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n}\n.page-description {\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  margin: 0 0 1.5rem;\n}\n.filters {\n  margin-bottom: 1.5rem;\n}\n.filters-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1rem;\n}\n.filter-group {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.filter-group--search {\n  flex: 1;\n  min-width: 280px;\n}\n.filter-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--color-primary, #60a5fa);\n  text-shadow: 0 0 10px rgba(96, 165, 250, 0.2);\n}\n.filter-select {\n  padding: 8px 12px;\n  border-radius: var(--radius-md, 8px);\n  border: 1px solid color-mix(in srgb, var(--color-primary, #60a5fa) 35%, var(--color-border) 65%);\n  background: var(--color-bg);\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  min-width: 160px;\n}\n.filter-input {\n  padding: 8px 12px;\n  border-radius: var(--radius-md, 8px);\n  border: 1px solid color-mix(in srgb, var(--color-primary, #60a5fa) 35%, var(--color-border) 65%);\n  background: var(--color-bg);\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  min-width: 200px;\n  flex: 1;\n}\n.table-card {\n  overflow: visible;\n}\n.table-wrapper {\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(100, 116, 139, 0.55) transparent;\n}\n.table-wrapper::before,\n.table-wrapper::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 18px;\n  pointer-events: none;\n  z-index: 0;\n}\n.table-wrapper::before {\n  left: 0;\n  background:\n    linear-gradient(\n      to right,\n      var(--color-bg-card) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.table-wrapper::after {\n  right: 0;\n  background:\n    linear-gradient(\n      to left,\n      var(--color-bg-card) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.table-wrapper::-webkit-scrollbar {\n  height: 10px;\n}\n.table-wrapper::-webkit-scrollbar-thumb {\n  background: rgba(100, 116, 139, 0.5);\n  border-radius: 999px;\n}\n.table-wrapper::-webkit-scrollbar-track {\n  background: transparent;\n}\n.empty-message {\n  padding: 2rem;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.table {\n  width: 100%;\n  table-layout: auto;\n  border-collapse: collapse;\n  min-width: 640px;\n  position: relative;\n  z-index: 1;\n}\n.table thead th {\n  position: sticky;\n  top: 0;\n  z-index: 4;\n  white-space: nowrap;\n}\n.table {\n}\n.table th.col-date-header,\n.table td.col-date {\n  position: sticky;\n  left: 0;\n  z-index: 3;\n  box-shadow: 1px 0 0 var(--color-border);\n}\n.table {\n}\n.table th.col-date-header {\n  background: var(--color-bg);\n  z-index: 5;\n}\n.table {\n}\n.table td.col-date {\n  background: var(--color-bg-card);\n}\n.table th,\n.table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n}\n.table th {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  background: var(--color-bg);\n}\n.table tr:hover td {\n  background: var(--color-bg);\n}\n.table tr:hover td.col-date {\n  background: var(--color-bg);\n}\n.col-date {\n  white-space: nowrap;\n  font-size: 0.875rem;\n  min-width: 180px;\n}\n.col-user {\n  max-width: 180px;\n  min-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-action {\n  font-weight: 500;\n  min-width: 150px;\n}\n.col-details {\n  max-width: 280px;\n  min-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge[data-category=auth] {\n  background: var(--color-primary-bg, #eef2ff);\n  color: var(--color-primary, #2563eb);\n}\n.badge[data-category=resident] {\n  background: var(--color-success-bg, #ecfdf5);\n  color: var(--color-success, #059669);\n}\n.badge[data-category=household] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.badge[data-category=user] {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.badge[data-category=request] {\n  background: #fce7f3;\n  color: #be185d;\n}\n.badge[data-category=system] {\n  background: var(--color-bg);\n  color: var(--color-text-muted);\n}\n@media (max-width: 768px) {\n  .table-wrapper {\n    margin: 0;\n    padding: 0;\n  }\n}\n@media (max-width: 640px) {\n  .filters-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n  }\n  .filter-group {\n    width: 100%;\n  }\n  .filter-group .filter-label {\n    width: 62px;\n    flex-shrink: 0;\n  }\n  .filter-group .filter-select,\n  .filter-group .filter-input {\n    flex: 1;\n    min-width: 0;\n  }\n  .filter-group--search {\n    min-width: 0;\n  }\n  .filter-group--search .filter-label {\n    white-space: nowrap;\n  }\n  .table-wrapper {\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n  }\n  .table-wrapper::-webkit-scrollbar {\n    display: none;\n    height: 0;\n  }\n  .table {\n    min-width: 560px;\n  }\n}\n.audit-mobile-list {\n  display: none;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 1rem;\n}\n.audit-mobile-card {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg, 12px);\n  box-shadow: var(--shadow);\n  padding: 14px;\n}\n.audit-mobile-card__top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.audit-mobile-card__titles {\n  min-width: 0;\n  flex: 1;\n}\n.audit-mobile-card__date {\n  font-weight: 800;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.audit-mobile-card__user {\n  margin-top: 3px;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.audit-mobile-card__fields {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n}\n.audit-mobile-kv {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 12px;\n}\n.audit-mobile-kv__k {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  flex-shrink: 0;\n}\n.audit-mobile-kv__v {\n  color: var(--color-text);\n  font-weight: 600;\n  text-align: right;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.audit-mobile-kv__v--details {\n  white-space: normal;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: clip;\n}\n.audit-mobile-empty {\n  text-align: center;\n  padding: 1.5rem 1rem;\n  color: var(--color-text-muted);\n}\n@media (max-width: 640px) {\n  .table-card {\n    display: none;\n  }\n  .audit-mobile-list {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=audit-log.component.css.map */\n'] }]
  }], () => [{ type: AuditLogService }], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditLogComponent, { className: "AuditLogComponent", filePath: "src/app/pages/audit-log/audit-log.component.ts", lineNumber: 23 });
})();
export {
  AuditLogComponent
};
//# sourceMappingURL=chunk-MY4NEIWZ.js.map
