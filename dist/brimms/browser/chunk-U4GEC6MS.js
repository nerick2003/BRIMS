import {
  require_sweetalert2_all
} from "./chunk-75B3RZGW.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TUEAJAVR.js";
import {
  __async,
  __toESM
} from "./chunk-TWWAJFRB.js";

// src/app/pages/requests/requests.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = (a0, a1) => ({ "badge--success": a0, "badge--warning": a1 });
var _c1 = (a0) => ["../requests", a0];
var _forTrack0 = ($index, $item) => $item.id;
function RequestsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th")(1, "input", 11);
    \u0275\u0275listener("change", function RequestsComponent_Conditional_11_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggleSelectAll($event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.allSelected)("indeterminate", ctx_r1.someSelected);
  }
}
function RequestsComponent_For_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "input", 16);
    \u0275\u0275listener("change", function RequestsComponent_For_24_Conditional_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRequestSelectionChange(r_r4, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isSelected(r_r4));
  }
}
function RequestsComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, RequestsComponent_For_24_Conditional_1_Template, 2, 1, "td");
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 13)(12, "div", 14)(13, "a", 15);
    \u0275\u0275text(14, "View Details");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAdmin ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.purpose);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c0, r_r4.status === "Approved", r_r4.status === "Pending" || r_r4.status === "For Review" || r_r4.status === "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.date);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c1, r_r4.id));
  }
}
function RequestsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "input", 11);
    \u0275\u0275listener("change", function RequestsComponent_Conditional_26_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggleSelectAll($event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.allSelected)("indeterminate", ctx_r1.someSelected);
  }
}
function RequestsComponent_For_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 27);
    \u0275\u0275listener("change", function RequestsComponent_For_28_Conditional_2_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRequestSelectionChange(r_r7, $event.target.checked));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("checked", ctx_r1.isSelected(r_r7));
  }
}
function RequestsComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, RequestsComponent_For_28_Conditional_2_Template, 1, 1, "input", 18);
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21)(7, "span", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 22)(10, "div", 23)(11, "span", 24);
    \u0275\u0275text(12, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 25);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 23)(16, "span", 24);
    \u0275\u0275text(17, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 25);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 26)(21, "a", 15);
    \u0275\u0275text(22, "View Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isAdmin ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r7.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c0, r_r7.status === "Approved", r_r7.status === "Pending" || r_r7.status === "For Review" || r_r7.status === "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r7.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r7.purpose);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r7.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c1, r_r7.id));
  }
}
function RequestsComponent_ForEmpty_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "No requests found.");
    \u0275\u0275elementEnd();
  }
}
function RequestsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "button", 29);
    \u0275\u0275listener("click", function RequestsComponent_Conditional_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.archiveSelected());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bulk-actions-bar--closing", ctx_r1.isBulkActionsBarClosing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Archive Selected (", ctx_r1.selectedCount, ") ");
  }
}
var RequestsComponent = class _RequestsComponent {
  constructor(data, auth) {
    this.data = data;
    this.auth = auth;
    this.selectedRequestIds = /* @__PURE__ */ new Set();
    this.bulkArchiveFabHideClass = "bulk-archive-active";
    this.isBulkActionsBarClosing = false;
    this.bulkBarCloseTimeout = null;
  }
  // Only show active (non-archived) requests in the main list
  get requests() {
    return this.data.getActiveRequests();
  }
  get isAdmin() {
    return this.auth.currentUser?.role === "admin";
  }
  get selectedCount() {
    return this.selectedRequestIds.size;
  }
  get showBulkActionsBar() {
    return this.selectedCount > 0 || this.isBulkActionsBarClosing;
  }
  get allSelected() {
    const current = this.requests;
    return current.length > 0 && current.every((r) => this.selectedRequestIds.has(r.id));
  }
  get someSelected() {
    const current = this.requests;
    const selectedOnPage = current.filter((r) => this.selectedRequestIds.has(r.id)).length;
    return selectedOnPage > 0 && !this.allSelected;
  }
  isSelected(request) {
    return this.selectedRequestIds.has(request.id);
  }
  onRequestSelectionChange(request, checked) {
    if (!this.isAdmin)
      return;
    if (checked) {
      this.selectedRequestIds.add(request.id);
    } else {
      this.selectedRequestIds.delete(request.id);
    }
    this.handleBulkBarSelectionChanged();
  }
  onToggleSelectAll(checked) {
    if (!this.isAdmin)
      return;
    if (checked) {
      this.requests.forEach((r) => this.selectedRequestIds.add(r.id));
    } else {
      this.requests.forEach((r) => this.selectedRequestIds.delete(r.id));
    }
    this.handleBulkBarSelectionChanged();
  }
  clearSelection() {
    this.selectedRequestIds.clear();
    this.handleBulkBarSelectionChanged();
  }
  handleBulkBarSelectionChanged() {
    if (this.selectedCount > 0) {
      if (this.bulkBarCloseTimeout) {
        clearTimeout(this.bulkBarCloseTimeout);
        this.bulkBarCloseTimeout = null;
      }
      this.isBulkActionsBarClosing = false;
      this.syncBulkArchiveFabVisibility();
      return;
    }
    if (this.isBulkActionsBarClosing || this.bulkBarCloseTimeout) {
      return;
    }
    this.isBulkActionsBarClosing = true;
    this.syncBulkArchiveFabVisibility();
    this.bulkBarCloseTimeout = setTimeout(() => {
      this.isBulkActionsBarClosing = false;
      this.bulkBarCloseTimeout = null;
      this.syncBulkArchiveFabVisibility();
    }, 180);
  }
  syncBulkArchiveFabVisibility() {
    if (typeof document === "undefined" || !document.body)
      return;
    document.body.classList.toggle(this.bulkArchiveFabHideClass, this.showBulkActionsBar);
  }
  ngOnDestroy() {
    if (typeof document !== "undefined" && document.body) {
      document.body.classList.remove(this.bulkArchiveFabHideClass);
    }
  }
  archiveRequest(request) {
    return __async(this, null, function* () {
      if (!this.isAdmin)
        return;
      if (request.status !== "Approved" && request.status !== "Rejected") {
        const result = yield import_sweetalert2.default.fire({
          title: "Archive request?",
          text: "This request is not yet Approved or Rejected. Archive anyway?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, archive",
          cancelButtonText: "Cancel"
        });
        if (!result.isConfirmed)
          return;
      } else {
        const result = yield import_sweetalert2.default.fire({
          title: "Archive request?",
          text: `Archive request "${request.type}" (${request.status})? It will move to Archives and be hidden from the main list.`,
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Yes, archive",
          cancelButtonText: "Cancel"
        });
        if (!result.isConfirmed)
          return;
      }
      this.data.archiveRequest(request.id);
      this.selectedRequestIds.delete(request.id);
      yield import_sweetalert2.default.fire({
        title: "Archived",
        text: "The request has been moved to Archives.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    });
  }
  archiveSelected() {
    return __async(this, null, function* () {
      if (!this.isAdmin || this.selectedRequestIds.size === 0)
        return;
      const count = this.selectedRequestIds.size;
      const result = yield import_sweetalert2.default.fire({
        title: "Archive selected requests?",
        text: `Archive ${count} selected request(s)? They will move to Archives and be hidden from the main list.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, archive",
        cancelButtonText: "Cancel"
      });
      if (!result.isConfirmed)
        return;
      const toArchive = this.requests.filter((r) => this.selectedRequestIds.has(r.id));
      toArchive.forEach((r) => this.data.archiveRequest(r.id));
      this.clearSelection();
      yield import_sweetalert2.default.fire({
        title: "Archived",
        text: `${count} request(s) have been moved to Archives.`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    });
  }
  static {
    this.\u0275fac = function RequestsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestsComponent, selectors: [["app-requests"]], decls: 31, vars: 4, consts: [[1, "requests-page"], [1, "page-header"], [1, "page-title"], [1, "muted"], [1, "table-wrap", "card", "requests-table-wrap"], [1, "table"], [1, "requests-mobile-list"], [1, "mobile-select-all"], [1, "requests-mobile-card"], [1, "mobile-empty"], [1, "bulk-actions-bar", 3, "bulk-actions-bar--closing"], ["type", "checkbox", 3, "change", "checked", "indeterminate"], [1, "badge", 3, "ngClass"], [1, "actions-cell"], [1, "actions-cell__buttons"], [1, "btn", "btn--sm", "btn--primary", 3, "routerLink"], ["type", "checkbox", 3, "change", "checked"], [1, "requests-mobile-card__top"], ["type", "checkbox", 1, "requests-mobile-card__checkbox", 3, "checked"], [1, "requests-mobile-card__titles"], [1, "requests-mobile-card__primary"], [1, "requests-mobile-card__secondary"], [1, "requests-mobile-card__fields"], [1, "mobile-kv"], [1, "mobile-kv__k"], [1, "mobile-kv__v"], [1, "requests-mobile-card__actions"], ["type", "checkbox", 1, "requests-mobile-card__checkbox", 3, "change", "checked"], [1, "bulk-actions-bar"], ["type", "button", 1, "btn", "bulk-actions-btn", 3, "click"]], template: function RequestsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Requests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Certificate and clearance requests from residents.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4)(8, "table", 5)(9, "thead")(10, "tr");
        \u0275\u0275conditionalCreate(11, RequestsComponent_Conditional_11_Template, 2, 2, "th");
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "Purpose");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275repeaterCreate(23, RequestsComponent_For_24_Template, 15, 12, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 6);
        \u0275\u0275conditionalCreate(26, RequestsComponent_Conditional_26_Template, 2, 2, "div", 7);
        \u0275\u0275repeaterCreate(27, RequestsComponent_For_28_Template, 23, 12, "div", 8, _forTrack0, false, RequestsComponent_ForEmpty_29_Template, 2, 0, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(30, RequestsComponent_Conditional_30_Template, 3, 3, "div", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.isAdmin ? 11 : -1);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.requests);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isAdmin ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.requests);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isAdmin && ctx.showBulkActionsBar ? 30 : -1);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ['\n.muted[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.requests-page[_ngcontent-%COMP%] {\n  margin-top: -20px;\n}\n@media (max-width: 640px) {\n  .requests-page[_ngcontent-%COMP%] {\n    margin-top: -10px;\n  }\n}\n.table[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  text-align: center;\n  white-space: nowrap;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  white-space: nowrap;\n}\n.actions-cell__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.requests-page[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin: 0;\n  padding: 0;\n}\n.bulk-actions-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 28px;\n  display: flex;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_bulkBarPopIn 180ms cubic-bezier(0.16, 1, 0.3, 1);\n  animation-fill-mode: both;\n}\n@media (max-width: 1280px) {\n  .bulk-actions-bar[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n    box-sizing: border-box;\n  }\n}\n@media (max-width: 640px) {\n  .bulk-actions-bar[_ngcontent-%COMP%] {\n    bottom: 20px;\n    padding-left: 0;\n    padding-right: 0;\n    box-sizing: border-box;\n  }\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .bulk-actions-btn[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  min-width: 260px;\n  padding: 0.85rem 1.75rem;\n  font-weight: 600;\n  border-radius: 999px;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n  isolation: isolate;\n  transition:\n    transform 0.18s cubic-bezier(0.22, 1, 0.36, 1),\n    box-shadow 0.24s cubic-bezier(0.22, 1, 0.36, 1),\n    filter 0.2s ease;\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .bulk-actions-btn[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -120%;\n  left: -35%;\n  width: 40%;\n  height: 320%;\n  background:\n    linear-gradient(\n      115deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.06) 35%,\n      rgba(255, 255, 255, 0.42) 50%,\n      rgba(255, 255, 255, 0.06) 65%,\n      transparent 100%);\n  transform: translateX(-220%) rotate(18deg);\n  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);\n  pointer-events: none;\n  z-index: 0;\n}\n@media (max-width: 640px) {\n  .bulk-actions-bar[_ngcontent-%COMP%]   .bulk-actions-btn[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n    max-width: min(560px, 100vw - 32px);\n    padding: 0.85rem 16px;\n    box-sizing: border-box;\n  }\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .bulk-actions-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #1e40af);\n  transform: translateY(-2px);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.3);\n  filter: saturate(1.06);\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .bulk-actions-btn[_ngcontent-%COMP%]:hover::after {\n  transform: translateX(360%) rotate(18deg);\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .bulk-actions-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.25);\n}\n.bulk-actions-bar.bulk-actions-bar--closing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bulkBarPopOut 160ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_bulkBarPopIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_bulkBarPopOut {\n  from {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(16px) scale(0.9);\n  }\n}\n.requests-page[_ngcontent-%COMP%]   .requests-mobile-list[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 640px) {\n  .requests-page[_ngcontent-%COMP%]   .requests-table-wrap[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .requests-page[_ngcontent-%COMP%]   .requests-mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    margin-top: 1rem;\n    padding-bottom: 110px;\n  }\n  .requests-page[_ngcontent-%COMP%]   .mobile-select-all[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 0 6px;\n  }\n  .requests-page[_ngcontent-%COMP%]   .requests-mobile-card[_ngcontent-%COMP%] {\n    background: var(--color-bg-card);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    box-shadow: var(--shadow);\n    padding: 14px;\n  }\n  .requests-page[_ngcontent-%COMP%]   .requests-mobile-card__top[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n  }\n  .requests-page[_ngcontent-%COMP%]   .requests-mobile-card__checkbox[_ngcontent-%COMP%] {\n    margin-top: 3px;\n    flex-shrink: 0;\n  }\n  .requests-page[_ngcontent-%COMP%]   .requests-mobile-card__titles[_ngcontent-%COMP%] {\n    min-width: 0;\n    flex: 1;\n  }\n  .requests-page[_ngcontent-%COMP%]   .requests-mobile-card__primary[_ngcontent-%COMP%] {\n    font-weight: 800;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .requests-page[_ngcontent-%COMP%]   .requests-mobile-card__secondary[_ngcontent-%COMP%] {\n    margin-top: 4px;\n  }\n  .requests-page[_ngcontent-%COMP%]   .requests-mobile-card__fields[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 10px 12px;\n    margin-top: 12px;\n  }\n  .requests-page[_ngcontent-%COMP%]   .mobile-kv[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n    min-width: 0;\n  }\n  .requests-page[_ngcontent-%COMP%]   .mobile-kv__k[_ngcontent-%COMP%] {\n    color: var(--color-text-muted);\n    font-size: 0.8125rem;\n    flex-shrink: 0;\n  }\n  .requests-page[_ngcontent-%COMP%]   .mobile-kv__v[_ngcontent-%COMP%] {\n    color: var(--color-text);\n    font-weight: 600;\n    text-align: left;\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .requests-page[_ngcontent-%COMP%]   .mobile-kv[_ngcontent-%COMP%]:first-child {\n    grid-column: 1/-1;\n  }\n  .requests-page[_ngcontent-%COMP%]   .requests-mobile-card__actions[_ngcontent-%COMP%] {\n    margin-top: 14px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n  }\n  .requests-page[_ngcontent-%COMP%]   .requests-mobile-card__actions[_ngcontent-%COMP%]   .btn.btn--sm[_ngcontent-%COMP%] {\n    width: min(100%, 320px);\n    min-width: 0;\n    justify-content: center;\n  }\n  .requests-page[_ngcontent-%COMP%]   .mobile-empty[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 1.5rem 1rem;\n    color: var(--color-text-muted);\n  }\n}\n/*# sourceMappingURL=requests.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestsComponent, [{
    type: Component,
    args: [{ selector: "app-requests", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="requests-page">\r
  <div class="page-header">\r
    <div>\r
      <h1 class="page-title">Requests</h1>\r
      <p class="muted">Certificate and clearance requests from residents.</p>\r
    </div>\r
  </div>\r
\r
  <div class="table-wrap card requests-table-wrap">\r
    <table class="table">\r
      <thead>\r
        <tr>\r
          @if (isAdmin) {\r
            <th>\r
              <input\r
                type="checkbox"\r
                [checked]="allSelected"\r
                [indeterminate]="someSelected"\r
                (change)="onToggleSelectAll($any($event.target).checked)"\r
              />\r
            </th>\r
          }\r
          <th>Type</th>\r
          <th>Purpose</th>\r
          <th>Status</th>\r
          <th>Date</th>\r
          <th>Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (r of requests; track r.id) {\r
          <tr>\r
            @if (isAdmin) {\r
              <td>\r
                <input\r
                  type="checkbox"\r
                  [checked]="isSelected(r)"\r
                  (change)="onRequestSelectionChange(r, $any($event.target).checked)"\r
                />\r
              </td>\r
            }\r
            <td>{{ r.type }}</td>\r
            <td>{{ r.purpose }}</td>\r
            <td>\r
              <span\r
                class="badge"\r
                [ngClass]="{\r
                  'badge--success': r.status === 'Approved',\r
                  'badge--warning': r.status === 'Pending' || r.status === 'For Review' || r.status === 'Rejected'\r
                }"\r
              >\r
                {{ r.status }}\r
              </span>\r
            </td>\r
            <td>{{ r.date }}</td>\r
            <td class="actions-cell">\r
              <div class="actions-cell__buttons">\r
                <a [routerLink]="['../requests', r.id]" class="btn btn--sm btn--primary">View Details</a>\r
              </div>\r
            </td>\r
          </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <div class="requests-mobile-list">\r
    @if (isAdmin) {\r
      <div class="mobile-select-all">\r
        <input\r
          type="checkbox"\r
          [checked]="allSelected"\r
          [indeterminate]="someSelected"\r
          (change)="onToggleSelectAll($any($event.target).checked)"\r
        />\r
      </div>\r
    }\r
\r
    @for (r of requests; track r.id) {\r
      <div class="requests-mobile-card">\r
        <div class="requests-mobile-card__top">\r
          @if (isAdmin) {\r
            <input\r
              class="requests-mobile-card__checkbox"\r
              type="checkbox"\r
              [checked]="isSelected(r)"\r
              (change)="onRequestSelectionChange(r, $any($event.target).checked)"\r
            />\r
          }\r
\r
          <div class="requests-mobile-card__titles">\r
            <div class="requests-mobile-card__primary">{{ r.type }}</div>\r
            <div class="requests-mobile-card__secondary">\r
              <span\r
                class="badge"\r
                [ngClass]="{\r
                  'badge--success': r.status === 'Approved',\r
                  'badge--warning': r.status === 'Pending' || r.status === 'For Review' || r.status === 'Rejected'\r
                }"\r
              >\r
                {{ r.status }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="requests-mobile-card__fields">\r
          <div class="mobile-kv">\r
            <span class="mobile-kv__k">Purpose</span>\r
            <span class="mobile-kv__v">{{ r.purpose }}</span>\r
          </div>\r
\r
          <div class="mobile-kv">\r
            <span class="mobile-kv__k">Date</span>\r
            <span class="mobile-kv__v">{{ r.date }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="requests-mobile-card__actions">\r
          <a [routerLink]="['../requests', r.id]" class="btn btn--sm btn--primary">View Details</a>\r
        </div>\r
      </div>\r
    } @empty {\r
      <div class="mobile-empty">No requests found.</div>\r
    }\r
  </div>\r
\r
  @if (isAdmin && showBulkActionsBar) {\r
    <div\r
      class="bulk-actions-bar"\r
      [class.bulk-actions-bar--closing]="isBulkActionsBarClosing"\r
    >\r
      <button\r
        type="button"\r
        class="btn bulk-actions-btn"\r
        (click)="archiveSelected()"\r
      >\r
        Archive Selected ({{ selectedCount }})\r
      </button>\r
    </div>\r
  }\r
</div>\r
`, styles: ['/* angular:styles/component:scss;90af66ab04259a4bc33226b39896551c57a8624a6748f834dec767cfbe242e4b;F:/BRIMS/src/app/pages/requests/requests.component.ts */\n.muted {\n  color: var(--color-text-muted);\n}\n.requests-page {\n  margin-top: -20px;\n}\n@media (max-width: 640px) {\n  .requests-page {\n    margin-top: -10px;\n  }\n}\n.table {\n  margin-top: 1rem;\n}\n.table th:last-child {\n  text-align: center;\n  white-space: nowrap;\n}\n.actions-cell {\n  text-align: center;\n  white-space: nowrap;\n}\n.actions-cell__buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.requests-page .table-wrap {\n  overflow-x: auto;\n  margin: 0;\n  padding: 0;\n}\n.bulk-actions-bar {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 28px;\n  display: flex;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 1000;\n  animation: bulkBarPopIn 180ms cubic-bezier(0.16, 1, 0.3, 1);\n  animation-fill-mode: both;\n}\n@media (max-width: 1280px) {\n  .bulk-actions-bar {\n    padding-left: 0;\n    padding-right: 0;\n    box-sizing: border-box;\n  }\n}\n@media (max-width: 640px) {\n  .bulk-actions-bar {\n    bottom: 20px;\n    padding-left: 0;\n    padding-right: 0;\n    box-sizing: border-box;\n  }\n}\n.bulk-actions-bar .bulk-actions-btn {\n  pointer-events: auto;\n  min-width: 260px;\n  padding: 0.85rem 1.75rem;\n  font-weight: 600;\n  border-radius: 999px;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n  isolation: isolate;\n  transition:\n    transform 0.18s cubic-bezier(0.22, 1, 0.36, 1),\n    box-shadow 0.24s cubic-bezier(0.22, 1, 0.36, 1),\n    filter 0.2s ease;\n}\n.bulk-actions-bar .bulk-actions-btn::after {\n  content: "";\n  position: absolute;\n  top: -120%;\n  left: -35%;\n  width: 40%;\n  height: 320%;\n  background:\n    linear-gradient(\n      115deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.06) 35%,\n      rgba(255, 255, 255, 0.42) 50%,\n      rgba(255, 255, 255, 0.06) 65%,\n      transparent 100%);\n  transform: translateX(-220%) rotate(18deg);\n  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);\n  pointer-events: none;\n  z-index: 0;\n}\n@media (max-width: 640px) {\n  .bulk-actions-bar .bulk-actions-btn {\n    min-width: 0;\n    width: 100%;\n    max-width: min(560px, 100vw - 32px);\n    padding: 0.85rem 16px;\n    box-sizing: border-box;\n  }\n}\n.bulk-actions-bar .bulk-actions-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #1e40af);\n  transform: translateY(-2px);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.3);\n  filter: saturate(1.06);\n}\n.bulk-actions-bar .bulk-actions-btn:hover::after {\n  transform: translateX(360%) rotate(18deg);\n}\n.bulk-actions-bar .bulk-actions-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.25);\n}\n.bulk-actions-bar.bulk-actions-bar--closing {\n  animation: bulkBarPopOut 160ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n@keyframes bulkBarPopIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes bulkBarPopOut {\n  from {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(16px) scale(0.9);\n  }\n}\n.requests-page .requests-mobile-list {\n  display: none;\n}\n@media (max-width: 640px) {\n  .requests-page .requests-table-wrap {\n    display: none;\n  }\n  .requests-page .requests-mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    margin-top: 1rem;\n    padding-bottom: 110px;\n  }\n  .requests-page .mobile-select-all {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 0 6px;\n  }\n  .requests-page .requests-mobile-card {\n    background: var(--color-bg-card);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    box-shadow: var(--shadow);\n    padding: 14px;\n  }\n  .requests-page .requests-mobile-card__top {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n  }\n  .requests-page .requests-mobile-card__checkbox {\n    margin-top: 3px;\n    flex-shrink: 0;\n  }\n  .requests-page .requests-mobile-card__titles {\n    min-width: 0;\n    flex: 1;\n  }\n  .requests-page .requests-mobile-card__primary {\n    font-weight: 800;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .requests-page .requests-mobile-card__secondary {\n    margin-top: 4px;\n  }\n  .requests-page .requests-mobile-card__fields {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 10px 12px;\n    margin-top: 12px;\n  }\n  .requests-page .mobile-kv {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n    min-width: 0;\n  }\n  .requests-page .mobile-kv__k {\n    color: var(--color-text-muted);\n    font-size: 0.8125rem;\n    flex-shrink: 0;\n  }\n  .requests-page .mobile-kv__v {\n    color: var(--color-text);\n    font-weight: 600;\n    text-align: left;\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .requests-page .mobile-kv:first-child {\n    grid-column: 1/-1;\n  }\n  .requests-page .requests-mobile-card__actions {\n    margin-top: 14px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n  }\n  .requests-page .requests-mobile-card__actions .btn.btn--sm {\n    width: min(100%, 320px);\n    min-width: 0;\n    justify-content: center;\n  }\n  .requests-page .mobile-empty {\n    text-align: center;\n    padding: 1.5rem 1rem;\n    color: var(--color-text-muted);\n  }\n}\n/*# sourceMappingURL=requests.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestsComponent, { className: "RequestsComponent", filePath: "src/app/pages/requests/requests.component.ts", lineNumber: 296 });
})();
export {
  RequestsComponent
};
//# sourceMappingURL=chunk-U4GEC6MS.js.map
