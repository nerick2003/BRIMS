import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-YX676IPB.js";
import {
  AuditLogService
} from "./chunk-F47T3EGJ.js";
import "./chunk-EXP2T67A.js";
import {
  CommonModule,
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MXCAMUXG.js";
import "./chunk-TWWAJFRB.js";

// src/app/pages/audit-log/audit-log.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function AuditLogComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
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
function AuditLogComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "No audit log entries match your filters.");
    \u0275\u0275elementEnd();
  }
}
function AuditLogComponent_Conditional_18_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(entry_r2.timestamp));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", entry_r2.userName || entry_r2.userEmail || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-category", entry_r2.category);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.categoryLabel(entry_r2.category), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r2.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r2.details || entry_r2.entityName || "\u2014");
  }
}
function AuditLogComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 13)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275repeaterCreate(14, AuditLogComponent_Conditional_18_For_15_Template, 12, 6, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.filteredLogs());
  }
}
var AuditLogComponent = class _AuditLogComponent {
  constructor(audit) {
    this.audit = audit;
    this.logs = signal([], ...ngDevMode ? [{ debugName: "logs" }] : []);
    this.categoryFilter = signal("", ...ngDevMode ? [{ debugName: "categoryFilter" }] : []);
    this.searchText = signal("", ...ngDevMode ? [{ debugName: "searchText" }] : []);
    this.filteredLogs = computed(() => {
      let list = this.logs();
      const cat = this.categoryFilter().toLowerCase();
      const search = this.searchText().trim().toLowerCase();
      if (cat) {
        list = list.filter((e) => e.category.toLowerCase() === cat);
      }
      if (search) {
        list = list.filter((e) => e.action.toLowerCase().includes(search) || e.userName?.toLowerCase().includes(search) || e.userEmail?.toLowerCase().includes(search) || e.details?.toLowerCase().includes(search) || e.entityName?.toLowerCase().includes(search));
      }
      return list;
    }, ...ngDevMode ? [{ debugName: "filteredLogs" }] : []);
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
    this.logs.set(this.audit.getLogs());
  }
  onCategoryChange(value) {
    this.categoryFilter.set(value);
  }
  onSearchInput(value) {
    this.searchText.set(value);
  }
  formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleString(void 0, {
      dateStyle: "short",
      timeStyle: "short"
    });
  }
  categoryLabel(category) {
    const c = this.categories.find((x) => x.value === category);
    return c ? c.label : category;
  }
  static {
    this.\u0275fac = function AuditLogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuditLogComponent)(\u0275\u0275directiveInject(AuditLogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditLogComponent, selectors: [["app-audit-log"]], decls: 19, vars: 3, consts: [[1, "audit-log-page"], [1, "page-title"], [1, "page-description"], [1, "filters", "card"], [1, "filters-row"], ["for", "category", 1, "filter-label"], ["id", "category", 1, "filter-select", 3, "change", "value"], [3, "value"], ["for", "search", 1, "filter-label"], ["id", "search", "type", "text", "placeholder", "Action, user, details...", 1, "filter-input", 3, "input", "value"], [1, "card", "table-card"], [1, "table-wrapper"], [1, "empty-message"], [1, "table"], [1, "col-date"], [1, "col-user"], [1, "badge"], [1, "col-action"], [1, "col-details"]], template: function AuditLogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Audit Log");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4, "View system activity: logins, data changes, and user actions.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "label", 5);
        \u0275\u0275text(8, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "select", 6);
        \u0275\u0275listener("change", function AuditLogComponent_Template_select_change_9_listener($event) {
          return ctx.onCategoryChange($event.target.value);
        });
        \u0275\u0275repeaterCreate(10, AuditLogComponent_For_11_Template, 2, 2, "option", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "label", 8);
        \u0275\u0275text(13, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 9);
        \u0275\u0275listener("input", function AuditLogComponent_Template_input_input_14_listener($event) {
          return ctx.onSearchInput($event.target.value);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 10)(16, "div", 11);
        \u0275\u0275conditionalCreate(17, AuditLogComponent_Conditional_17_Template, 2, 0, "p", 12)(18, AuditLogComponent_Conditional_18_Template, 16, 0, "table", 13);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("value", ctx.categoryFilter());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.searchText());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.filteredLogs().length === 0 ? 17 : 18);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ["\n\n.audit-log-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n}\n.page-description[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  margin: 0 0 1.5rem;\n}\n.filters[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1rem;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: var(--radius-md, 8px);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg);\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  min-width: 160px;\n}\n.filter-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: var(--radius-md, 8px);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg);\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  min-width: 200px;\n  flex: 1;\n}\n.table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.empty-message[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 640px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  background: var(--color-bg);\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n}\n.col-date[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.875rem;\n}\n.col-user[_ngcontent-%COMP%] {\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-action[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.col-details[_ngcontent-%COMP%] {\n  max-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge[data-category=auth][_ngcontent-%COMP%] {\n  background: var(--color-primary-bg, #eef2ff);\n  color: var(--color-primary, #2563eb);\n}\n.badge[data-category=resident][_ngcontent-%COMP%] {\n  background: var(--color-success-bg, #ecfdf5);\n  color: var(--color-success, #059669);\n}\n.badge[data-category=household][_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.badge[data-category=user][_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.badge[data-category=request][_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #be185d;\n}\n.badge[data-category=system][_ngcontent-%COMP%] {\n  background: var(--color-bg);\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=audit-log.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditLogComponent, [{
    type: Component,
    args: [{ selector: "app-audit-log", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="audit-log-page">\r
  <h1 class="page-title">Audit Log</h1>\r
  <p class="page-description">View system activity: logins, data changes, and user actions.</p>\r
\r
  <div class="filters card">\r
    <div class="filters-row">\r
      <label class="filter-label" for="category">Category</label>\r
      <select\r
        id="category"\r
        class="filter-select"\r
        [value]="categoryFilter()"\r
        (change)="onCategoryChange($any($event.target).value)"\r
      >\r
        @for (cat of categories; track cat.value) {\r
          <option [value]="cat.value">{{ cat.label }}</option>\r
        }\r
      </select>\r
      <label class="filter-label" for="search">Search</label>\r
      <input\r
        id="search"\r
        type="text"\r
        class="filter-input"\r
        placeholder="Action, user, details..."\r
        [value]="searchText()"\r
        (input)="onSearchInput($any($event.target).value)"\r
      />\r
    </div>\r
  </div>\r
\r
  <div class="card table-card">\r
    <div class="table-wrapper">\r
      @if (filteredLogs().length === 0) {\r
        <p class="empty-message">No audit log entries match your filters.</p>\r
      } @else {\r
        <table class="table">\r
          <thead>\r
            <tr>\r
              <th>Date & Time</th>\r
              <th>User</th>\r
              <th>Category</th>\r
              <th>Action</th>\r
              <th>Details</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (entry of filteredLogs(); track entry.id) {\r
              <tr>\r
                <td class="col-date">{{ formatDate(entry.timestamp) }}</td>\r
                <td class="col-user">\r
                  {{ entry.userName || entry.userEmail || '\u2014' }}\r
                </td>\r
                <td>\r
                  <span class="badge" [attr.data-category]="entry.category">\r
                    {{ categoryLabel(entry.category) }}\r
                  </span>\r
                </td>\r
                <td class="col-action">{{ entry.action }}</td>\r
                <td class="col-details">{{ entry.details || entry.entityName || '\u2014' }}</td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      }\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/audit-log/audit-log.component.scss */\n.audit-log-page {\n  width: 100%;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n}\n.page-description {\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  margin: 0 0 1.5rem;\n}\n.filters {\n  margin-bottom: 1.5rem;\n}\n.filters-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1rem;\n}\n.filter-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n}\n.filter-select {\n  padding: 8px 12px;\n  border-radius: var(--radius-md, 8px);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg);\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  min-width: 160px;\n}\n.filter-input {\n  padding: 8px 12px;\n  border-radius: var(--radius-md, 8px);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg);\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  min-width: 200px;\n  flex: 1;\n}\n.table-card {\n  overflow: hidden;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.empty-message {\n  padding: 2rem;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 640px;\n}\n.table th,\n.table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n}\n.table th {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  background: var(--color-bg);\n}\n.table tr:hover td {\n  background: var(--color-bg);\n}\n.col-date {\n  white-space: nowrap;\n  font-size: 0.875rem;\n}\n.col-user {\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-action {\n  font-weight: 500;\n}\n.col-details {\n  max-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge[data-category=auth] {\n  background: var(--color-primary-bg, #eef2ff);\n  color: var(--color-primary, #2563eb);\n}\n.badge[data-category=resident] {\n  background: var(--color-success-bg, #ecfdf5);\n  color: var(--color-success, #059669);\n}\n.badge[data-category=household] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.badge[data-category=user] {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.badge[data-category=request] {\n  background: #fce7f3;\n  color: #be185d;\n}\n.badge[data-category=system] {\n  background: var(--color-bg);\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=audit-log.component.css.map */\n"] }]
  }], () => [{ type: AuditLogService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditLogComponent, { className: "AuditLogComponent", filePath: "src/app/pages/audit-log/audit-log.component.ts", lineNumber: 13 });
})();
export {
  AuditLogComponent
};
//# sourceMappingURL=chunk-YHPYIEFL.js.map
