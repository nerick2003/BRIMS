import {
  require_sweetalert2_all
} from "./chunk-75B3RZGW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TUEAJAVR.js";
import {
  __async,
  __toESM
} from "./chunk-TWWAJFRB.js";

// src/app/pages/residents-list/residents-list.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item.id;
function ResidentsListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th")(1, "input", 22);
    \u0275\u0275listener("change", function ResidentsListComponent_Conditional_35_Template_input_change_1_listener($event) {
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
function ResidentsListComponent_For_50_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "input", 27);
    \u0275\u0275listener("change", function ResidentsListComponent_For_50_Conditional_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onResidentSelectionChange(r_r4, $event.target.checked));
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
function ResidentsListComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, ResidentsListComponent_For_50_Conditional_1_Template, 2, 1, "td");
    \u0275\u0275elementStart(2, "td")(3, "a", 23)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "select", 24)(14, "option", 25);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option");
    \u0275\u0275text(17, "Purok 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option");
    \u0275\u0275text(19, "Purok 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option");
    \u0275\u0275text(21, "Purok 3");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td")(23, "button", 26);
    \u0275\u0275text(24, " View ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canArchiveResidents ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, r_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.residentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.age);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.gender);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", r_r4.purok);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.purok);
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, r_r4.id));
  }
}
function ResidentsListComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2, " No residents found matching the filters. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.canArchiveResidents ? 7 : 6);
  }
}
function ResidentsListComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "input", 22);
    \u0275\u0275listener("change", function ResidentsListComponent_Conditional_53_Template_input_change_1_listener($event) {
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
function ResidentsListComponent_For_55_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 40);
    \u0275\u0275listener("change", function ResidentsListComponent_For_55_Conditional_2_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onResidentSelectionChange(r_r7, $event.target.checked));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("checked", ctx_r1.isSelected(r_r7));
  }
}
function ResidentsListComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 29);
    \u0275\u0275conditionalCreate(2, ResidentsListComponent_For_55_Conditional_2_Template, 1, 1, "input", 30);
    \u0275\u0275elementStart(3, "div", 31)(4, "div", 32)(5, "a", 23)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 34)(11, "div", 35)(12, "span", 36);
    \u0275\u0275text(13, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 35)(17, "span", 36);
    \u0275\u0275text(18, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 37);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 38)(22, "span", 36);
    \u0275\u0275text(23, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 37)(25, "select", 24)(26, "option", 25);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option");
    \u0275\u0275text(29, "Purok 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option");
    \u0275\u0275text(31, "Purok 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option");
    \u0275\u0275text(33, "Purok 3");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(34, "div", 39)(35, "button", 26);
    \u0275\u0275text(36, " View ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canArchiveResidents ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, r_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.residentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r7.age);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r7.gender);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", r_r7.purok);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.purok);
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, r_r7.id));
  }
}
function ResidentsListComponent_ForEmpty_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "No residents found matching the filters.");
    \u0275\u0275elementEnd();
  }
}
function ResidentsListComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 42);
    \u0275\u0275listener("click", function ResidentsListComponent_Conditional_57_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.archiveSelectedResidents());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bulk-actions-bar--closing", ctx_r1.isBulkActionsBarClosing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Archive Selected Residents (", ctx_r1.selectedCount, ") ");
  }
}
var ResidentsListComponent = class _ResidentsListComponent {
  constructor(data, auth) {
    this.data = data;
    this.auth = auth;
    this.search = "";
    this.gender = "";
    this.age = "";
    this.purok = "";
    this.selectedResidentIds = /* @__PURE__ */ new Set();
    this.isBulkActionsBarClosing = false;
    this.bulkBarCloseTimeout = null;
    this.bulkArchiveFabHideClass = "bulk-archive-active";
  }
  get filteredResidents() {
    let result = [...this.data.getActiveResidents()];
    if (this.search) {
      const searchLower = this.search.toLowerCase();
      result = result.filter((r) => r.name.toLowerCase().includes(searchLower) || r.residentId.toLowerCase().includes(searchLower));
    }
    if (this.gender) {
      result = result.filter((r) => r.gender === this.gender);
    }
    if (this.age) {
      if (this.age === "0-17") {
        result = result.filter((r) => r.age >= 0 && r.age <= 17);
      } else if (this.age === "18-59") {
        result = result.filter((r) => r.age >= 18 && r.age <= 59);
      } else if (this.age === "60+") {
        result = result.filter((r) => r.age >= 60);
      }
    }
    if (this.purok) {
      result = result.filter((r) => r.purok === this.purok);
    }
    return result;
  }
  /** Only admins can archive residents. */
  get canArchiveResidents() {
    return this.auth.currentUser?.role === "admin";
  }
  get selectedCount() {
    return this.selectedResidentIds.size;
  }
  get showBulkActionsBar() {
    return this.selectedCount > 0 || this.isBulkActionsBarClosing;
  }
  ngOnDestroy() {
    if (typeof document !== "undefined") {
      document.body.classList.remove(this.bulkArchiveFabHideClass);
    }
  }
  get allSelected() {
    const current = this.filteredResidents;
    return current.length > 0 && current.every((r) => this.selectedResidentIds.has(r.id));
  }
  get someSelected() {
    const current = this.filteredResidents;
    const selectedOnPage = current.filter((r) => this.selectedResidentIds.has(r.id)).length;
    return selectedOnPage > 0 && !this.allSelected;
  }
  isSelected(resident) {
    return this.selectedResidentIds.has(resident.id);
  }
  onToggleSelectAll(checked) {
    if (!this.canArchiveResidents)
      return;
    if (checked) {
      this.filteredResidents.forEach((r) => this.selectedResidentIds.add(r.id));
    } else {
      this.filteredResidents.forEach((r) => this.selectedResidentIds.delete(r.id));
    }
    this.handleBulkBarSelectionChanged();
  }
  onResidentSelectionChange(resident, checked) {
    if (!this.canArchiveResidents)
      return;
    if (checked) {
      this.selectedResidentIds.add(resident.id);
    } else {
      this.selectedResidentIds.delete(resident.id);
    }
    this.handleBulkBarSelectionChanged();
  }
  clearSelection() {
    this.selectedResidentIds.clear();
    this.handleBulkBarSelectionChanged();
  }
  syncBulkArchiveFabVisibility() {
    if (typeof document === "undefined" || !document.body)
      return;
    document.body.classList.toggle(this.bulkArchiveFabHideClass, this.showBulkActionsBar);
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
  archiveResident(resident) {
    return __async(this, null, function* () {
      if (!this.canArchiveResidents)
        return;
      const result = yield import_sweetalert2.default.fire({
        title: "Archive resident?",
        text: `Archive resident "${resident.name}" (${resident.residentId})? They will move to Archives and be hidden from the main list.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, archive",
        cancelButtonText: "Cancel"
      });
      if (!result.isConfirmed)
        return;
      this.data.archiveResident(resident.id, "Archived by admin from Residents list");
      yield import_sweetalert2.default.fire({
        title: "Archived",
        text: "The resident has been moved to Archives.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    });
  }
  archiveSelectedResidents() {
    return __async(this, null, function* () {
      if (!this.canArchiveResidents || this.selectedResidentIds.size === 0)
        return;
      const count = this.selectedResidentIds.size;
      const result = yield import_sweetalert2.default.fire({
        title: "Archive selected residents?",
        text: `Archive ${count} selected resident(s)? They will move to Archives and be hidden from the main list.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, archive",
        cancelButtonText: "Cancel"
      });
      if (!result.isConfirmed)
        return;
      const toArchive = this.filteredResidents.filter((r) => this.selectedResidentIds.has(r.id));
      toArchive.forEach((r) => this.data.archiveResident(r.id, "Archived by admin from Residents list (bulk action)"));
      this.clearSelection();
      yield import_sweetalert2.default.fire({
        title: "Archived",
        text: `${count} resident(s) have been moved to Archives.`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    });
  }
  static {
    this.\u0275fac = function ResidentsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResidentsListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResidentsListComponent, selectors: [["app-residents-list"]], decls: 58, vars: 9, consts: [[1, "residents-list"], [1, "page-header"], [1, "page-title"], [1, "filters"], ["type", "text", "placeholder", "Search by Name or ID", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Male"], ["value", "Female"], ["value", "0-17"], ["value", "18-59"], ["value", "60+"], ["value", "Purok 1"], ["value", "Purok 2"], ["value", "Purok 3"], [1, "table-wrap", "card", "residents-table-wrap"], [1, "table"], [1, "residents-mobile-list"], [1, "mobile-select-all"], [1, "residents-mobile-card"], [1, "mobile-empty"], [1, "bulk-actions-bar", 3, "bulk-actions-bar--closing"], ["type", "checkbox", 3, "change", "checked", "indeterminate"], [3, "routerLink"], [1, "purok-select"], ["selected", "", 3, "value"], ["type", "button", 1, "btn", "btn--sm", "btn--outline", 3, "routerLink"], ["type", "checkbox", 3, "change", "checked"], [1, "empty-cell"], [1, "residents-mobile-card__top"], ["type", "checkbox", 1, "residents-mobile-card__checkbox", 3, "checked"], [1, "residents-mobile-card__titles"], [1, "residents-mobile-card__primary"], [1, "residents-mobile-card__secondary"], [1, "residents-mobile-card__fields"], [1, "mobile-kv"], [1, "mobile-kv__k"], [1, "mobile-kv__v"], [1, "mobile-kv", "residents-mobile-card__purok"], [1, "residents-mobile-card__actions"], ["type", "checkbox", 1, "residents-mobile-card__checkbox", 3, "change", "checked"], [1, "bulk-actions-bar"], ["type", "button", 1, "btn", "bulk-actions-btn", 3, "click"]], template: function ResidentsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Residents List");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function ResidentsListComponent_Template_input_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "select", 5);
        \u0275\u0275twoWayListener("ngModelChange", function ResidentsListComponent_Template_select_ngModelChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.gender, $event) || (ctx.gender = $event);
          return $event;
        });
        \u0275\u0275elementStart(7, "option", 6);
        \u0275\u0275text(8, "Gender");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "option", 7);
        \u0275\u0275text(10, "Male");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "option", 8);
        \u0275\u0275text(12, "Female");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "select", 5);
        \u0275\u0275twoWayListener("ngModelChange", function ResidentsListComponent_Template_select_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.age, $event) || (ctx.age = $event);
          return $event;
        });
        \u0275\u0275elementStart(14, "option", 6);
        \u0275\u0275text(15, "Age");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "option", 9);
        \u0275\u0275text(17, "0-17");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 10);
        \u0275\u0275text(19, "18-59");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 11);
        \u0275\u0275text(21, "60+");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "select", 5);
        \u0275\u0275twoWayListener("ngModelChange", function ResidentsListComponent_Template_select_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.purok, $event) || (ctx.purok = $event);
          return $event;
        });
        \u0275\u0275elementStart(23, "option", 6);
        \u0275\u0275text(24, "Purok");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 12);
        \u0275\u0275text(26, "Purok 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 13);
        \u0275\u0275text(28, "Purok 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 14);
        \u0275\u0275text(30, "Purok 3");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 15)(32, "table", 16)(33, "thead")(34, "tr");
        \u0275\u0275conditionalCreate(35, ResidentsListComponent_Conditional_35_Template, 2, 2, "th");
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37, "Resident ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Age");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Gender");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Purok");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "tbody");
        \u0275\u0275repeaterCreate(49, ResidentsListComponent_For_50_Template, 25, 13, "tr", null, _forTrack0);
        \u0275\u0275conditionalCreate(51, ResidentsListComponent_Conditional_51_Template, 3, 1, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "div", 17);
        \u0275\u0275conditionalCreate(53, ResidentsListComponent_Conditional_53_Template, 2, 2, "div", 18);
        \u0275\u0275repeaterCreate(54, ResidentsListComponent_For_55_Template, 37, 13, "div", 19, _forTrack0, false, ResidentsListComponent_ForEmpty_56_Template, 2, 0, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(57, ResidentsListComponent_Conditional_57_Template, 3, 3, "div", 21);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.gender);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.age);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.purok);
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.canArchiveResidents ? 35 : -1);
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.filteredResidents);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.filteredResidents.length === 0 ? 51 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.canArchiveResidents ? 53 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filteredResidents);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.canArchiveResidents && ctx.showBulkActionsBar ? 57 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: [`
.residents-list[_ngcontent-%COMP%] {
  width: 100%;
}
.page-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}
.page-header[_ngcontent-%COMP%]:has(.btn--primary) {
  padding-right: 176px;
}
@media (max-width: 640px) {
  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {
    padding-right: 164px;
  }
}
@media (max-width: 640px) {
  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {
    padding-right: 0;
  }
}
.filters[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  height: 44px;
  padding: 0 14px;
  min-width: 148px;
  border: 1px solid color-mix(in srgb, var(--color-border), #000 10%);
  border-radius: 10px;
  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--color-bg-card), #fff 10%) 0%,
      var(--color-bg-card) 100%);
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 500;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    background-color 0.18s ease;
}
.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--color-primary), #000 15%);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary), transparent 78%);
}
.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:first-child {
  min-width: 220px;
  flex: 1;
}
.filters[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 38px;
  cursor: pointer;
  background-image:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0)),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%236B7280' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat, no-repeat;
  background-position: center, right 12px center;
  background-size: auto, 14px;
}
@media (max-width: 640px) {
  .filters[_ngcontent-%COMP%] {
    gap: 8px;
  }
  .filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
    width: 100%;
    min-width: 0;
    height: 44px;
    font-size: 0.92rem;
    padding: 10px 14px;
    line-height: 1.2;
  }
  .filters[_ngcontent-%COMP%] {
  }
  .filters[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {
    min-height: 44px;
    border-radius: 10px;
  }
}
[data-theme=dark][_nghost-%COMP%]   .filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  background: var(--color-bg-input) !important;
  color: var(--color-text-input) !important;
  border-color: var(--color-input-border) !important;
}
[data-theme=dark][_nghost-%COMP%]   .filters[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .filters[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%239CA3AF' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: right 12px center !important;
  background-size: 14px !important;
}
.table-wrap[_ngcontent-%COMP%] {
  overflow-x: auto;
  padding: 0 !important;
}
.empty-cell[_ngcontent-%COMP%] {
  text-align: center;
  padding: 2rem;
  color: var(--color-text-secondary, #6b7280);
}
.purok-select[_ngcontent-%COMP%] {
  padding: 4px 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 0.875rem;
  background: var(--color-bg-card);
}
.bulk-actions-bar[_ngcontent-%COMP%] {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 28px;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 1000;
  animation: _ngcontent-%COMP%_bulkBarPopIn 180ms cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: both;
}
@media (max-width: 1280px) {
  .bulk-actions-bar[_ngcontent-%COMP%] {
    padding-left: 0;
    padding-right: 0;
  }
}
.bulk-actions-bar[_ngcontent-%COMP%] {
}
@media (max-width: 640px) {
  .bulk-actions-bar[_ngcontent-%COMP%] {
    bottom: 20px;
    padding-left: 0;
    padding-right: 0;
  }
}
body.sidebar-open[_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%], body.sidebar-open   [_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%] {
  pointer-events: none;
}
body.sidebar-open[_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%], body.sidebar-open   [_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%] {
  pointer-events: none !important;
  filter: blur(2px) !important;
  -webkit-filter: blur(2px) !important;
  opacity: 0.85;
  line-height: normal;
  position: relative;
  z-index: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 640px) {
  body.sidebar-open[_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%], body.sidebar-open   [_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%] {
    padding-left: 16px;
    padding-right: 16px;
  }
}
body.sidebar-open[_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]::before, body.sidebar-open   [_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 999px;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #1d4ed8);
  filter: blur(2px);
  opacity: 0.85;
  z-index: -1;
}
.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%] {
  pointer-events: auto;
  min-width: 260px;
  padding: 0.85rem 1.75rem;
  font-weight: 600;
  border-radius: 999px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);
  border: none !important;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #1d4ed8) !important;
  color: #fff !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.18s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.2s ease;
}
.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: -140%;
  left: -45%;
  width: 55%;
  height: 360%;
  background:
    linear-gradient(
      115deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 35%,
      rgba(255, 255, 255, 0.55) 50%,
      rgba(255, 255, 255, 0.1) 65%,
      transparent 100%);
  transform: translateX(-240%) rotate(18deg);
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  z-index: 0;
  will-change: transform, opacity;
}
@media (max-width: 640px) {
  .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%] {
    padding: 0.85rem 16px;
    box-sizing: border-box;
    min-width: 0;
    width: 100%;
    max-width: min(560px, 100vw - 32px);
  }
}
.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      135deg,
      #1d4ed8,
      #1e40af) !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.3);
  filter: saturate(1.06);
}
.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]:hover::after {
  opacity: 1;
  animation: _ngcontent-%COMP%_residentsBulkBtnSplash 700ms cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
}
.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]:active {
  transform: translateY(0);
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.25);
}
@keyframes _ngcontent-%COMP%_residentsBulkBtnSplash {
  from {
    transform: translateX(-240%) rotate(18deg);
  }
  to {
    transform: translateX(380%) rotate(18deg);
  }
}
.bulk-actions-bar.bulk-actions-bar--closing[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_bulkBarPopOut 160ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
@keyframes _ngcontent-%COMP%_bulkBarPopIn {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes _ngcontent-%COMP%_bulkBarPopOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(16px) scale(0.9);
  }
}
.residents-mobile-list[_ngcontent-%COMP%] {
  display: none;
}
@media (max-width: 640px) {
  .residents-table-wrap[_ngcontent-%COMP%] {
    display: none;
  }
  .residents-mobile-list[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 1rem;
    padding-bottom: 110px;
  }
  .mobile-select-all[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 6px;
  }
  .residents-mobile-card[_ngcontent-%COMP%] {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 14px;
  }
  .residents-mobile-card__top[_ngcontent-%COMP%] {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .residents-mobile-card__checkbox[_ngcontent-%COMP%] {
    margin-top: 3px;
    flex-shrink: 0;
  }
  .residents-mobile-card__titles[_ngcontent-%COMP%] {
    min-width: 0;
    flex: 1;
  }
  .residents-mobile-card__primary[_ngcontent-%COMP%] {
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .residents-mobile-card__secondary[_ngcontent-%COMP%] {
    color: var(--color-text-muted);
    font-size: 0.875rem;
    margin-top: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .residents-mobile-card__fields[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 12px;
    margin-top: 12px;
  }
  .residents-mobile-list[_ngcontent-%COMP%]   .mobile-kv[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    min-width: 0;
  }
  .residents-mobile-list[_ngcontent-%COMP%]   .mobile-kv__k[_ngcontent-%COMP%] {
    color: var(--color-text-muted);
    font-size: 0.8125rem;
    flex-shrink: 0;
  }
  .residents-mobile-list[_ngcontent-%COMP%]   .mobile-kv__v[_ngcontent-%COMP%] {
    color: var(--color-text);
    font-weight: 600;
    text-align: left;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .residents-mobile-list[_ngcontent-%COMP%]   .residents-mobile-card__purok[_ngcontent-%COMP%] {
    grid-column: 1/-1;
  }
  .residents-mobile-list[_ngcontent-%COMP%]   .residents-mobile-card__purok[_ngcontent-%COMP%]   .mobile-kv__v[_ngcontent-%COMP%] {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    width: 100%;
  }
  .residents-mobile-list[_ngcontent-%COMP%]   .residents-mobile-card__purok[_ngcontent-%COMP%]   .purok-select[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 38px;
    font-size: 0.95rem;
  }
  .residents-mobile-card__actions[_ngcontent-%COMP%] {
    margin-top: 14px;
    display: flex;
    justify-content: stretch;
  }
  .residents-mobile-card__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    width: 100%;
    min-width: 0;
    padding: 10px 18px;
    font-size: 0.95rem;
  }
  .mobile-empty[_ngcontent-%COMP%] {
    text-align: center;
    padding: 1.5rem 1rem;
    color: var(--color-text-muted);
  }
}
/*# sourceMappingURL=residents-list.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResidentsListComponent, [{
    type: Component,
    args: [{ selector: "app-residents-list", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: '<div class="residents-list">\r\n  <div class="page-header">\r\n    <h1 class="page-title">Residents List</h1>\r\n  </div>\r\n  <div class="filters">\r\n    <input type="text" class="form-control" placeholder="Search by Name or ID" [(ngModel)]="search" />\r\n    <select class="form-control" [(ngModel)]="gender">\r\n      <option value="">Gender</option>\r\n      <option value="Male">Male</option>\r\n      <option value="Female">Female</option>\r\n    </select>\r\n    <select class="form-control" [(ngModel)]="age">\r\n      <option value="">Age</option>\r\n      <option value="0-17">0-17</option>\r\n      <option value="18-59">18-59</option>\r\n      <option value="60+">60+</option>\r\n    </select>\r\n    <select class="form-control" [(ngModel)]="purok">\r\n      <option value="">Purok</option>\r\n      <option value="Purok 1">Purok 1</option>\r\n      <option value="Purok 2">Purok 2</option>\r\n      <option value="Purok 3">Purok 3</option>\r\n    </select>\r\n  </div>\r\n  <div class="table-wrap card residents-table-wrap">\r\n    <table class="table">\r\n      <thead>\r\n        <tr>\r\n          @if (canArchiveResidents) {\r\n            <th>\r\n              <input\r\n                type="checkbox"\r\n                [checked]="allSelected"\r\n                [indeterminate]="someSelected"\r\n                (change)="onToggleSelectAll($any($event.target).checked)"\r\n              />\r\n            </th>\r\n          }\r\n          <th>Resident ID</th>\r\n          <th>Name</th>\r\n          <th>Age</th>\r\n          <th>Gender</th>\r\n          <th>Purok</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        @for (r of filteredResidents; track r.id) {\r\n          <tr>\r\n            @if (canArchiveResidents) {\r\n              <td>\r\n                <input\r\n                  type="checkbox"\r\n                  [checked]="isSelected(r)"\r\n                  (change)="onResidentSelectionChange(r, $any($event.target).checked)"\r\n                />\r\n              </td>\r\n            }\r\n            <td><a [routerLink]="[r.id]"><strong>{{ r.residentId }}</strong></a></td>\r\n            <td>{{ r.name }}</td>\r\n            <td>{{ r.age }}</td>\r\n            <td>{{ r.gender }}</td>\r\n            <td>\r\n              <select class="purok-select">\r\n                <option [value]="r.purok" selected>{{ r.purok }}</option>\r\n                <option>Purok 1</option>\r\n                <option>Purok 2</option>\r\n                <option>Purok 3</option>\r\n              </select>\r\n            </td>\r\n            <td>\r\n              <button\r\n                type="button"\r\n                class="btn btn--sm btn--outline"\r\n                [routerLink]="[r.id]"\r\n              >\r\n                View\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        }\r\n        @if (filteredResidents.length === 0) {\r\n          <tr>\r\n            <td [attr.colspan]="canArchiveResidents ? 7 : 6" class="empty-cell">\r\n              No residents found matching the filters.\r\n            </td>\r\n          </tr>\r\n        }\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class="residents-mobile-list">\r\n    @if (canArchiveResidents) {\r\n      <div class="mobile-select-all">\r\n        <input\r\n          type="checkbox"\r\n          [checked]="allSelected"\r\n          [indeterminate]="someSelected"\r\n          (change)="onToggleSelectAll($any($event.target).checked)"\r\n        />\r\n      </div>\r\n    }\r\n\r\n    @for (r of filteredResidents; track r.id) {\r\n      <div class="residents-mobile-card">\r\n        <div class="residents-mobile-card__top">\r\n          @if (canArchiveResidents) {\r\n            <input\r\n              class="residents-mobile-card__checkbox"\r\n              type="checkbox"\r\n              [checked]="isSelected(r)"\r\n              (change)="onResidentSelectionChange(r, $any($event.target).checked)"\r\n            />\r\n          }\r\n\r\n          <div class="residents-mobile-card__titles">\r\n            <div class="residents-mobile-card__primary">\r\n              <a [routerLink]="[r.id]"><strong>{{ r.residentId }}</strong></a>\r\n            </div>\r\n            <div class="residents-mobile-card__secondary">{{ r.name }}</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="residents-mobile-card__fields">\r\n          <div class="mobile-kv">\r\n            <span class="mobile-kv__k">Age</span>\r\n            <span class="mobile-kv__v">{{ r.age }}</span>\r\n          </div>\r\n\r\n          <div class="mobile-kv">\r\n            <span class="mobile-kv__k">Gender</span>\r\n            <span class="mobile-kv__v">{{ r.gender }}</span>\r\n          </div>\r\n\r\n          <div class="mobile-kv residents-mobile-card__purok">\r\n            <span class="mobile-kv__k">Purok</span>\r\n            <span class="mobile-kv__v">\r\n              <select class="purok-select">\r\n                <option [value]="r.purok" selected>{{ r.purok }}</option>\r\n                <option>Purok 1</option>\r\n                <option>Purok 2</option>\r\n                <option>Purok 3</option>\r\n              </select>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="residents-mobile-card__actions">\r\n          <button\r\n            type="button"\r\n            class="btn btn--sm btn--outline"\r\n            [routerLink]="[r.id]"\r\n          >\r\n            View\r\n          </button>\r\n        </div>\r\n      </div>\r\n    } @empty {\r\n      <div class="mobile-empty">No residents found matching the filters.</div>\r\n    }\r\n  </div>\r\n\r\n  @if (canArchiveResidents && showBulkActionsBar) {\r\n    <div\r\n      class="bulk-actions-bar"\r\n      [class.bulk-actions-bar--closing]="isBulkActionsBarClosing"\r\n    >\r\n      <button\r\n        type="button"\r\n        class="btn bulk-actions-btn"\r\n        (click)="archiveSelectedResidents()"\r\n      >\r\n        Archive Selected Residents ({{ selectedCount }})\r\n      </button>\r\n    </div>\r\n  }\r\n</div>\r\n', styles: [`/* src/app/pages/residents-list/residents-list.component.scss */
.residents-list {
  width: 100%;
}
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.page-header .page-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}
.page-header:has(.btn--primary) {
  padding-right: 176px;
}
@media (max-width: 640px) {
  .page-header:has(.btn--primary) {
    padding-right: 164px;
  }
}
@media (max-width: 640px) {
  .page-header:has(.btn--primary) {
    padding-right: 0;
  }
}
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
.filters .form-control {
  height: 44px;
  padding: 0 14px;
  min-width: 148px;
  border: 1px solid color-mix(in srgb, var(--color-border), #000 10%);
  border-radius: 10px;
  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--color-bg-card), #fff 10%) 0%,
      var(--color-bg-card) 100%);
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 500;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    background-color 0.18s ease;
}
.filters .form-control:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--color-primary), #000 15%);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary), transparent 78%);
}
.filters .form-control:first-child {
  min-width: 220px;
  flex: 1;
}
.filters select.form-control {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 38px;
  cursor: pointer;
  background-image:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0)),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%236B7280' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat, no-repeat;
  background-position: center, right 12px center;
  background-size: auto, 14px;
}
@media (max-width: 640px) {
  .filters {
    gap: 8px;
  }
  .filters .form-control {
    width: 100%;
    min-width: 0;
    height: 44px;
    font-size: 0.92rem;
    padding: 10px 14px;
    line-height: 1.2;
  }
  .filters {
  }
  .filters input.form-control {
    min-height: 44px;
    border-radius: 10px;
  }
}
:host-context([data-theme=dark]) .filters .form-control {
  background: var(--color-bg-input) !important;
  color: var(--color-text-input) !important;
  border-color: var(--color-input-border) !important;
}
:host-context([data-theme=dark]) .filters select.form-control {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%239CA3AF' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: right 12px center !important;
  background-size: 14px !important;
}
.table-wrap {
  overflow-x: auto;
  padding: 0 !important;
}
.empty-cell {
  text-align: center;
  padding: 2rem;
  color: var(--color-text-secondary, #6b7280);
}
.purok-select {
  padding: 4px 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 0.875rem;
  background: var(--color-bg-card);
}
.bulk-actions-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 28px;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 1000;
  animation: bulkBarPopIn 180ms cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: both;
}
@media (max-width: 1280px) {
  .bulk-actions-bar {
    padding-left: 0;
    padding-right: 0;
  }
}
.bulk-actions-bar {
}
@media (max-width: 640px) {
  .bulk-actions-bar {
    bottom: 20px;
    padding-left: 0;
    padding-right: 0;
  }
}
:host-context(body.sidebar-open) .bulk-actions-bar {
  pointer-events: none;
}
:host-context(body.sidebar-open) .bulk-actions-bar .btn.bulk-actions-btn {
  pointer-events: none !important;
  filter: blur(2px) !important;
  -webkit-filter: blur(2px) !important;
  opacity: 0.85;
  line-height: normal;
  position: relative;
  z-index: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 640px) {
  :host-context(body.sidebar-open) .bulk-actions-bar .btn.bulk-actions-btn {
    padding-left: 16px;
    padding-right: 16px;
  }
}
:host-context(body.sidebar-open) .bulk-actions-bar .btn.bulk-actions-btn::before {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 999px;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #1d4ed8);
  filter: blur(2px);
  opacity: 0.85;
  z-index: -1;
}
.bulk-actions-bar .btn.bulk-actions-btn {
  pointer-events: auto;
  min-width: 260px;
  padding: 0.85rem 1.75rem;
  font-weight: 600;
  border-radius: 999px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);
  border: none !important;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #1d4ed8) !important;
  color: #fff !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.18s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.2s ease;
}
.bulk-actions-bar .btn.bulk-actions-btn::after {
  content: "";
  position: absolute;
  top: -140%;
  left: -45%;
  width: 55%;
  height: 360%;
  background:
    linear-gradient(
      115deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 35%,
      rgba(255, 255, 255, 0.55) 50%,
      rgba(255, 255, 255, 0.1) 65%,
      transparent 100%);
  transform: translateX(-240%) rotate(18deg);
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  z-index: 0;
  will-change: transform, opacity;
}
@media (max-width: 640px) {
  .bulk-actions-bar .btn.bulk-actions-btn {
    padding: 0.85rem 16px;
    box-sizing: border-box;
    min-width: 0;
    width: 100%;
    max-width: min(560px, 100vw - 32px);
  }
}
.bulk-actions-bar .btn.bulk-actions-btn:hover {
  background:
    linear-gradient(
      135deg,
      #1d4ed8,
      #1e40af) !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.3);
  filter: saturate(1.06);
}
.bulk-actions-bar .btn.bulk-actions-btn:hover::after {
  opacity: 1;
  animation: residentsBulkBtnSplash 700ms cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
}
.bulk-actions-bar .btn.bulk-actions-btn:active {
  transform: translateY(0);
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.25);
}
@keyframes residentsBulkBtnSplash {
  from {
    transform: translateX(-240%) rotate(18deg);
  }
  to {
    transform: translateX(380%) rotate(18deg);
  }
}
.bulk-actions-bar.bulk-actions-bar--closing {
  animation: bulkBarPopOut 160ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
@keyframes bulkBarPopIn {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes bulkBarPopOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(16px) scale(0.9);
  }
}
.residents-mobile-list {
  display: none;
}
@media (max-width: 640px) {
  .residents-table-wrap {
    display: none;
  }
  .residents-mobile-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 1rem;
    padding-bottom: 110px;
  }
  .mobile-select-all {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 6px;
  }
  .residents-mobile-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 14px;
  }
  .residents-mobile-card__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .residents-mobile-card__checkbox {
    margin-top: 3px;
    flex-shrink: 0;
  }
  .residents-mobile-card__titles {
    min-width: 0;
    flex: 1;
  }
  .residents-mobile-card__primary {
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .residents-mobile-card__secondary {
    color: var(--color-text-muted);
    font-size: 0.875rem;
    margin-top: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .residents-mobile-card__fields {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 12px;
    margin-top: 12px;
  }
  .residents-mobile-list .mobile-kv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    min-width: 0;
  }
  .residents-mobile-list .mobile-kv__k {
    color: var(--color-text-muted);
    font-size: 0.8125rem;
    flex-shrink: 0;
  }
  .residents-mobile-list .mobile-kv__v {
    color: var(--color-text);
    font-weight: 600;
    text-align: left;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .residents-mobile-list .residents-mobile-card__purok {
    grid-column: 1/-1;
  }
  .residents-mobile-list .residents-mobile-card__purok .mobile-kv__v {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    width: 100%;
  }
  .residents-mobile-list .residents-mobile-card__purok .purok-select {
    width: 100%;
    min-height: 38px;
    font-size: 0.95rem;
  }
  .residents-mobile-card__actions {
    margin-top: 14px;
    display: flex;
    justify-content: stretch;
  }
  .residents-mobile-card__actions .btn {
    width: 100%;
    min-width: 0;
    padding: 10px 18px;
    font-size: 0.95rem;
  }
  .mobile-empty {
    text-align: center;
    padding: 1.5rem 1rem;
    color: var(--color-text-muted);
  }
}
/*# sourceMappingURL=residents-list.component.css.map */
`] }]
  }], () => [{ type: DataService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResidentsListComponent, { className: "ResidentsListComponent", filePath: "src/app/pages/residents-list/residents-list.component.ts", lineNumber: 16 });
})();
export {
  ResidentsListComponent
};
//# sourceMappingURL=chunk-JBB2YCCP.js.map
