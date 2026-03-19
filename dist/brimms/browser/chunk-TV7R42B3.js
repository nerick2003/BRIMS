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
} from "./chunk-YX676IPB.js";
import {
  RouterLink
} from "./chunk-HOXEAXWN.js";
import "./chunk-ZNESRAKE.js";
import {
  DataService
} from "./chunk-F47T3EGJ.js";
import "./chunk-EXP2T67A.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MXCAMUXG.js";
import {
  __async,
  __toESM
} from "./chunk-TWWAJFRB.js";

// src/app/shared/loading-state.component.ts
function LoadingStateComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domElement(1, "div", 2);
    \u0275\u0275domElementStart(2, "p", 3);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.loadingMessage);
  }
}
function LoadingStateComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 10);
    \u0275\u0275domListener("click", function LoadingStateComponent_Conditional_1_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRetryClick());
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.retryLabel, " ");
  }
}
function LoadingStateComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 5);
    \u0275\u0275domElement(3, "path", 6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(4, "h3", 7);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 8);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, LoadingStateComponent_Conditional_1_Conditional_8_Template, 2, 1, "button", 9);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.errorTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showRetry ? 8 : -1);
  }
}
var LoadingStateComponent = class _LoadingStateComponent {
  constructor() {
    this.loading = false;
    this.error = null;
    this.loadingMessage = "Loading...";
    this.errorTitle = "Error";
    this.showRetry = false;
    this.retryLabel = "Try again";
    this.retry = new EventEmitter();
  }
  onRetryClick() {
    this.retry.emit();
  }
  static {
    this.\u0275fac = function LoadingStateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingStateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingStateComponent, selectors: [["app-loading-state"]], inputs: { loading: "loading", error: "error", loadingMessage: "loadingMessage", errorTitle: "errorTitle", showRetry: "showRetry", retryLabel: "retryLabel" }, outputs: { retry: "retry" }, decls: 2, vars: 1, consts: [[1, "loading-state", "loading-state--loading"], [1, "loading-state", "loading-state--error"], [1, "loading-state__spinner"], [1, "loading-state__text"], ["aria-hidden", "true", 1, "loading-state__icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z", "fill", "currentColor"], [1, "loading-state__title"], [1, "loading-state__message"], ["type", "button", 1, "btn", "btn--primary"], ["type", "button", 1, "btn", "btn--primary", 3, "click"]], template: function LoadingStateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, LoadingStateComponent_Conditional_0_Template, 4, 1, "div", 0)(1, LoadingStateComponent_Conditional_1_Template, 9, 3, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.loading ? 0 : ctx.error ? 1 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  color: var(--color-text, #111827);\n}\n.loading-state--loading[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n}\n.loading-state--error[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n.loading-state__spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9999px;\n  border: 3px solid var(--color-border, #e5e7eb);\n  border-top-color: var(--color-primary, #2563eb);\n  animation: _ngcontent-%COMP%_loading-state-spin 0.8s linear infinite;\n}\n.loading-state__text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted, #6b7280);\n}\n.loading-state__icon[_ngcontent-%COMP%] {\n  color: var(--color-danger, #ef4444);\n  margin-bottom: 0.25rem;\n}\n.loading-state__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.loading-state__message[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted, #6b7280);\n  max-width: 32rem;\n}\n@keyframes _ngcontent-%COMP%_loading-state-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loading-state.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingStateComponent, [{
    type: Component,
    args: [{ selector: "app-loading-state", standalone: true, imports: [CommonModule], template: `
    @if (loading) {
      <div class="loading-state loading-state--loading">
        <div class="loading-state__spinner"></div>
        <p class="loading-state__text">{{ loadingMessage }}</p>
      </div>
    } @else if (error) {
      <div class="loading-state loading-state--error">
        <div class="loading-state__icon" aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h3 class="loading-state__title">{{ errorTitle }}</h3>
        <p class="loading-state__message">{{ error }}</p>
        @if (showRetry) {
          <button type="button" class="btn btn--primary" (click)="onRetryClick()">
            {{ retryLabel }}
          </button>
        }
      </div>
    }
  `, styles: ["/* angular:styles/component:scss;b04c291839445fdf8bf6e9cff5f91e3a1cc0e80e048b53ea9d90d0553c284a6a;F:/BRIMS/src/app/shared/loading-state.component.ts */\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  color: var(--color-text, #111827);\n}\n.loading-state--loading {\n  gap: 0.75rem;\n}\n.loading-state--error {\n  gap: 1rem;\n}\n.loading-state__spinner {\n  width: 32px;\n  height: 32px;\n  border-radius: 9999px;\n  border: 3px solid var(--color-border, #e5e7eb);\n  border-top-color: var(--color-primary, #2563eb);\n  animation: loading-state-spin 0.8s linear infinite;\n}\n.loading-state__text {\n  margin: 0;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted, #6b7280);\n}\n.loading-state__icon {\n  color: var(--color-danger, #ef4444);\n  margin-bottom: 0.25rem;\n}\n.loading-state__title {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.loading-state__message {\n  margin: 0 0 0.75rem;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted, #6b7280);\n  max-width: 32rem;\n}\n@keyframes loading-state-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loading-state.component.css.map */\n"] }]
  }], null, { loading: [{
    type: Input
  }], error: [{
    type: Input
  }], loadingMessage: [{
    type: Input
  }], errorTitle: [{
    type: Input
  }], showRetry: [{
    type: Input
  }], retryLabel: [{
    type: Input
  }], retry: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingStateComponent, { className: "LoadingStateComponent", filePath: "src/app/shared/loading-state.component.ts", lineNumber: 95 });
})();

// src/app/pages/households/households.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => ["../households", "map"];
var _c1 = (a0) => ["../households", a0];
var _forTrack0 = ($index, $item) => $item.id;
function HouseholdsComponent_Conditional_19_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 16);
    \u0275\u0275listener("change", function HouseholdsComponent_Conditional_19_For_19_Template_input_change_2_listener($event) {
      const household_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onHouseholdSelectionChange(household_r4, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 17);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "a", 18);
    \u0275\u0275text(17, "View");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const household_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(household_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(household_r4.householdId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getHeadOfHousehold(household_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(household_r4.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(household_r4.purok);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", household_r4.members.length, " member", household_r4.members.length !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, household_r4.id));
  }
}
function HouseholdsComponent_Conditional_19_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2, " No households found ");
    \u0275\u0275elementEnd()();
  }
}
function HouseholdsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 13)(1, "thead")(2, "tr")(3, "th")(4, "input", 15);
    \u0275\u0275listener("change", function HouseholdsComponent_Conditional_19_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggleSelectAll($event.target.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Household ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Head of Household");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, HouseholdsComponent_Conditional_19_For_19_Template, 18, 10, "tr", null, _forTrack0, false, HouseholdsComponent_Conditional_19_ForEmpty_20_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.allSelected)("indeterminate", ctx_r1.someSelected);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.filteredHouseholds);
  }
}
function HouseholdsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275listener("click", function HouseholdsComponent_Conditional_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.archiveSelectedHouseholds());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bulk-actions-bar--closing", ctx_r1.isBulkActionsBarClosing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Archive Selected Households (", ctx_r1.selectedCount, ") ");
  }
}
var HouseholdsComponent = class _HouseholdsComponent {
  constructor(data) {
    this.data = data;
    this.search = "";
    this.purok = "";
    this.isLoading = true;
    this.hasError = false;
    this.errorMessage = "";
    this.selectedHouseholdIds = /* @__PURE__ */ new Set();
    this.isBulkActionsBarClosing = false;
    this.bulkBarCloseTimeout = null;
  }
  ngOnInit() {
    if (this.data.households.length > 0) {
      this.isLoading = false;
    }
    this.loadingTimeout = setTimeout(() => {
      if (this.isLoading && this.data.households.length === 0) {
        this.hasError = true;
        this.errorMessage = "Unable to load households data. Please check your connection and try again.";
        this.isLoading = false;
      }
    }, 1e4);
    this.subscription = this.data.householdsObservable.subscribe({
      next: (households) => {
        if (this.loadingTimeout) {
          clearTimeout(this.loadingTimeout);
        }
        if (households.length > 0 || this.data.households.length > 0) {
          setTimeout(() => {
            this.isLoading = false;
            this.hasError = false;
          }, 300);
        }
      },
      error: (error) => {
        if (this.loadingTimeout) {
          clearTimeout(this.loadingTimeout);
        }
        this.hasError = true;
        this.isLoading = false;
        this.errorMessage = error?.message || "An error occurred while loading households. Please try again later.";
        console.error("Error loading households:", error);
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
  }
  retryLoad() {
    this.hasError = false;
    this.errorMessage = "";
    this.isLoading = true;
    setTimeout(() => {
      if (this.data.households.length === 0) {
        this.hasError = true;
        this.errorMessage = "Unable to load households data. Please refresh the page.";
        this.isLoading = false;
      }
    }, 5e3);
  }
  get filteredHouseholds() {
    let result = [...this.data.getActiveHouseholds()];
    if (this.search) {
      const searchLower = this.search.toLowerCase();
      result = result.filter((h) => h.householdId.toLowerCase().includes(searchLower) || h.address.toLowerCase().includes(searchLower) || this.getHeadOfHousehold(h).toLowerCase().includes(searchLower));
    }
    if (this.purok) {
      result = result.filter((h) => h.purok === this.purok);
    }
    return result;
  }
  get selectedCount() {
    return this.selectedHouseholdIds.size;
  }
  get showBulkActionsBar() {
    return this.selectedCount > 0 || this.isBulkActionsBarClosing;
  }
  get allSelected() {
    const current = this.filteredHouseholds;
    return current.length > 0 && current.every((h) => this.selectedHouseholdIds.has(h.id));
  }
  get someSelected() {
    const current = this.filteredHouseholds;
    const selectedOnPage = current.filter((h) => this.selectedHouseholdIds.has(h.id)).length;
    return selectedOnPage > 0 && !this.allSelected;
  }
  isSelected(household) {
    return this.selectedHouseholdIds.has(household.id);
  }
  onToggleSelectAll(checked) {
    if (checked) {
      this.filteredHouseholds.forEach((h) => this.selectedHouseholdIds.add(h.id));
    } else {
      this.filteredHouseholdIdsClear();
    }
    this.handleBulkBarSelectionChanged();
  }
  onHouseholdSelectionChange(household, checked) {
    if (checked) {
      this.selectedHouseholdIds.add(household.id);
    } else {
      this.selectedHouseholdIds.delete(household.id);
    }
    this.handleBulkBarSelectionChanged();
  }
  filteredHouseholdIdsClear() {
    this.filteredHouseholds.forEach((h) => this.selectedHouseholdIds.delete(h.id));
  }
  clearSelection() {
    this.selectedHouseholdIds.clear();
    this.handleBulkBarSelectionChanged();
  }
  handleBulkBarSelectionChanged() {
    if (this.selectedCount > 0) {
      if (this.bulkBarCloseTimeout) {
        clearTimeout(this.bulkBarCloseTimeout);
        this.bulkBarCloseTimeout = null;
      }
      this.isBulkActionsBarClosing = false;
      return;
    }
    if (this.isBulkActionsBarClosing || this.bulkBarCloseTimeout) {
      return;
    }
    this.isBulkActionsBarClosing = true;
    this.bulkBarCloseTimeout = setTimeout(() => {
      this.isBulkActionsBarClosing = false;
      this.bulkBarCloseTimeout = null;
    }, 180);
  }
  archiveSelectedHouseholds() {
    return __async(this, null, function* () {
      if (this.selectedHouseholdIds.size === 0)
        return;
      const count = this.selectedHouseholdIds.size;
      const result = yield import_sweetalert2.default.fire({
        title: "Archive selected households?",
        text: `Archive ${count} selected household(s)? They will move to Archives and be hidden from the main list.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, archive",
        cancelButtonText: "Cancel"
      });
      if (!result.isConfirmed)
        return;
      const toArchive = this.filteredHouseholds.filter((h) => this.selectedHouseholdIds.has(h.id));
      toArchive.forEach((h) => this.data.updateHousehold(h.id, { archived: true, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }));
      this.clearSelection();
    });
  }
  getHeadOfHousehold(household) {
    const head = household.members.find((m) => m.relationship === "Head");
    return head ? head.name : household.members[0]?.name || "N/A";
  }
  static {
    this.\u0275fac = function HouseholdsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HouseholdsComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HouseholdsComponent, selectors: [["app-households"]], decls: 21, vars: 12, consts: [[1, "households-list"], [1, "page-header"], [1, "page-title"], [1, "btn", "btn--outline", "page-header__action", 3, "routerLink"], [1, "filters"], ["type", "text", "placeholder", "Search by Household ID or Address", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Purok 1"], ["value", "Purok 2"], ["value", "Purok 3"], [1, "table-wrap", "card"], [3, "retry", "loading", "error", "loadingMessage", "errorTitle", "showRetry", "retryLabel"], [1, "table"], [1, "bulk-actions-bar", 3, "bulk-actions-bar--closing"], ["type", "checkbox", 3, "change", "checked", "indeterminate"], ["type", "checkbox", 3, "change", "checked"], [1, "badge", "badge--info"], [1, "btn", "btn--sm", "btn--outline", 3, "routerLink"], ["colspan", "7", 2, "text-align", "center", "padding", "2rem", "color", "var(--color-text-muted)"], [1, "bulk-actions-bar"], ["type", "button", 1, "btn", "bulk-actions-btn", 3, "click"]], template: function HouseholdsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Households");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 3);
        \u0275\u0275text(5, " View Map ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function HouseholdsComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function HouseholdsComponent_Template_select_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.purok, $event) || (ctx.purok = $event);
          return $event;
        });
        \u0275\u0275elementStart(9, "option", 7);
        \u0275\u0275text(10, "Purok");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "option", 8);
        \u0275\u0275text(12, "Purok 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "option", 9);
        \u0275\u0275text(14, "Purok 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "option", 10);
        \u0275\u0275text(16, "Purok 3");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 11)(18, "app-loading-state", 12);
        \u0275\u0275listener("retry", function HouseholdsComponent_Template_app_loading_state_retry_18_listener() {
          return ctx.retryLoad();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(19, HouseholdsComponent_Conditional_19_Template, 21, 3, "table", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(20, HouseholdsComponent_Conditional_20_Template, 3, 3, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.purok);
        \u0275\u0275advance(10);
        \u0275\u0275property("loading", ctx.isLoading)("error", ctx.hasError ? ctx.errorMessage : null)("loadingMessage", "Loading households...")("errorTitle", "Error Loading Data")("showRetry", true)("retryLabel", "Try Again");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isLoading && !ctx.hasError ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showBulkActionsBar ? 20 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, LoadingStateComponent], styles: ['\n\n.households-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 1rem;\n  position: relative;\n  padding-right: 100px;\n  flex-wrap: wrap;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-header__action[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  flex-shrink: 0;\n}\n.page-header[_ngcontent-%COMP%]:has(.btn--primary) {\n  padding-right: 176px;\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {\n    padding-right: 164px;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding-right: 0;\n  }\n  .page-header[_ngcontent-%COMP%]   .page-header__action[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n    width: 100%;\n  }\n  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {\n    padding-right: 0;\n  }\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  min-width: 140px;\n}\n.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:first-child {\n  min-width: 200px;\n  flex: 1;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 0 !important;\n}\n.bulk-actions-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 1.5rem;\n  display: flex;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_bulkBarPopIn 180ms cubic-bezier(0.16, 1, 0.3, 1);\n  animation-fill-mode: both;\n}\n@media (max-width: 1280px) {\n  .bulk-actions-bar[_ngcontent-%COMP%] {\n    padding-right: clamp(160px, 18vw, 240px);\n    box-sizing: border-box;\n  }\n}\n.bulk-actions-bar[_ngcontent-%COMP%] {\n}\n@media (max-width: 640px) {\n  .bulk-actions-bar[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: clamp(120px, 40vw, 200px);\n    box-sizing: border-box;\n  }\n}\nbody.sidebar-open[_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%], body.sidebar-open   [_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\nbody.sidebar-open[_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%], body.sidebar-open   [_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  filter: blur(2px) !important;\n  -webkit-filter: blur(2px) !important;\n  opacity: 0.85;\n  line-height: normal;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\nbody.sidebar-open[_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]::before, body.sidebar-open   [_nghost-%COMP%]   .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -4px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  filter: blur(2px);\n  opacity: 0.9;\n  z-index: -1;\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  min-width: 260px;\n  padding: 0.85rem 1.75rem;\n  font-weight: 600;\n  border-radius: 999px;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8) !important;\n  color: #fff !important;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n@media (max-width: 640px) {\n  .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n    max-width: 340px;\n  }\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #1e40af) !important;\n  transform: translateY(-1px);\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.25);\n}\n.bulk-actions-bar.bulk-actions-bar--closing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bulkBarPopOut 160ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_bulkBarPopIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_bulkBarPopOut {\n  from {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(16px) scale(0.9);\n  }\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  min-height: 300px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid var(--color-border);\n  border-top-color: var(--color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-text[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  min-height: 300px;\n  text-align: center;\n}\n.error-icon[_ngcontent-%COMP%] {\n  color: var(--color-danger, #dc2626);\n  margin-bottom: 1rem;\n}\n.error-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.75rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n  margin: 0 0 1.5rem;\n  max-width: 400px;\n  line-height: 1.5;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=households.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HouseholdsComponent, [{
    type: Component,
    args: [{ selector: "app-households", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LoadingStateComponent], template: `<div class="households-list">\r
  <div class="page-header">\r
    <h1 class="page-title">Households</h1>\r
    <a\r
      class="btn btn--outline page-header__action"\r
      [routerLink]="['../households', 'map']"\r
    >\r
      View Map\r
    </a>\r
  </div>\r
  <div class="filters">\r
    <input type="text" class="form-control" placeholder="Search by Household ID or Address" [(ngModel)]="search" />\r
    <select class="form-control" [(ngModel)]="purok">\r
      <option value="">Purok</option>\r
      <option value="Purok 1">Purok 1</option>\r
      <option value="Purok 2">Purok 2</option>\r
      <option value="Purok 3">Purok 3</option>\r
    </select>\r
  </div>\r
  <div class="table-wrap card">\r
    <app-loading-state\r
      [loading]="isLoading"\r
      [error]="hasError ? errorMessage : null"\r
      [loadingMessage]="'Loading households...'"\r
      [errorTitle]="'Error Loading Data'"\r
      [showRetry]="true"\r
      [retryLabel]="'Try Again'"\r
      (retry)="retryLoad()"\r
    ></app-loading-state>\r
\r
    @if (!isLoading && !hasError) {\r
      <table class="table">\r
        <thead>\r
          <tr>\r
            <th>\r
              <input\r
                type="checkbox"\r
                [checked]="allSelected"\r
                [indeterminate]="someSelected"\r
                (change)="onToggleSelectAll($any($event.target).checked)"\r
              />\r
            </th>\r
            <th>Household ID</th>\r
            <th>Head of Household</th>\r
            <th>Address</th>\r
            <th>Purok</th>\r
            <th>Members</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (household of filteredHouseholds; track household.id) {\r
            <tr>\r
              <td>\r
                <input\r
                  type="checkbox"\r
                  [checked]="isSelected(household)"\r
                  (change)="onHouseholdSelectionChange(household, $any($event.target).checked)"\r
                />\r
              </td>\r
              <td><strong>{{ household.householdId }}</strong></td>\r
              <td>{{ getHeadOfHousehold(household) }}</td>\r
              <td>{{ household.address }}</td>\r
              <td>{{ household.purok }}</td>\r
              <td>\r
                <span class="badge badge--info">{{ household.members.length }} member{{ household.members.length !== 1 ? 's' : '' }}</span>\r
              </td>\r
              <td>\r
                <a [routerLink]="['../households', household.id]" class="btn btn--sm btn--outline">View</a>\r
              </td>\r
            </tr>\r
          } @empty {\r
            <tr>\r
              <td colspan="7" style="text-align: center; padding: 2rem; color: var(--color-text-muted);">\r
                No households found\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    }\r
  </div>\r
  @if (showBulkActionsBar) {\r
    <div\r
      class="bulk-actions-bar"\r
      [class.bulk-actions-bar--closing]="isBulkActionsBarClosing"\r
    >\r
      <button\r
        type="button"\r
        class="btn bulk-actions-btn"\r
        (click)="archiveSelectedHouseholds()"\r
      >\r
        Archive Selected Households ({{ selectedCount }})\r
      </button>\r
    </div>\r
  }\r
</div>\r
\r
`, styles: ['/* src/app/pages/households/households.component.scss */\n.households-list {\n  width: 100%;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 1rem;\n  position: relative;\n  padding-right: 100px;\n  flex-wrap: wrap;\n}\n.page-header .page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  min-width: 0;\n}\n.page-header .page-header__action {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  flex-shrink: 0;\n}\n.page-header:has(.btn--primary) {\n  padding-right: 176px;\n}\n@media (max-width: 640px) {\n  .page-header:has(.btn--primary) {\n    padding-right: 164px;\n  }\n}\n.page-header {\n}\n@media (max-width: 640px) {\n  .page-header {\n    flex-direction: column;\n    align-items: stretch;\n    padding-right: 0;\n  }\n  .page-header .page-header__action {\n    position: static;\n    transform: none;\n    width: 100%;\n  }\n  .page-header:has(.btn--primary) {\n    padding-right: 0;\n  }\n}\n.filters {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.filters .form-control {\n  padding: 8px 12px;\n  min-width: 140px;\n}\n.filters .form-control:first-child {\n  min-width: 200px;\n  flex: 1;\n}\n.table-wrap {\n  overflow-x: auto;\n  padding: 0 !important;\n}\n.bulk-actions-bar {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 1.5rem;\n  display: flex;\n  justify-content: center;\n  pointer-events: none;\n  z-index: 1000;\n  animation: bulkBarPopIn 180ms cubic-bezier(0.16, 1, 0.3, 1);\n  animation-fill-mode: both;\n}\n@media (max-width: 1280px) {\n  .bulk-actions-bar {\n    padding-right: clamp(160px, 18vw, 240px);\n    box-sizing: border-box;\n  }\n}\n.bulk-actions-bar {\n}\n@media (max-width: 640px) {\n  .bulk-actions-bar {\n    padding-left: 16px;\n    padding-right: clamp(120px, 40vw, 200px);\n    box-sizing: border-box;\n  }\n}\n:host-context(body.sidebar-open) .bulk-actions-bar {\n  pointer-events: none;\n}\n:host-context(body.sidebar-open) .bulk-actions-bar .btn.bulk-actions-btn {\n  pointer-events: none !important;\n  filter: blur(2px) !important;\n  -webkit-filter: blur(2px) !important;\n  opacity: 0.85;\n  line-height: normal;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\n:host-context(body.sidebar-open) .bulk-actions-bar .btn.bulk-actions-btn::before {\n  content: "";\n  position: absolute;\n  inset: -4px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  filter: blur(2px);\n  opacity: 0.9;\n  z-index: -1;\n}\n.bulk-actions-bar .btn.bulk-actions-btn {\n  pointer-events: auto;\n  min-width: 260px;\n  padding: 0.85rem 1.75rem;\n  font-weight: 600;\n  border-radius: 999px;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);\n  border: none !important;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8) !important;\n  color: #fff !important;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n@media (max-width: 640px) {\n  .bulk-actions-bar .btn.bulk-actions-btn {\n    min-width: 0;\n    width: 100%;\n    max-width: 340px;\n  }\n}\n.bulk-actions-bar .btn.bulk-actions-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #1e40af) !important;\n  transform: translateY(-1px);\n}\n.bulk-actions-bar .btn.bulk-actions-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.25);\n}\n.bulk-actions-bar.bulk-actions-bar--closing {\n  animation: bulkBarPopOut 160ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n@keyframes bulkBarPopIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes bulkBarPopOut {\n  from {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(16px) scale(0.9);\n  }\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  min-height: 300px;\n}\n.spinner {\n  width: 48px;\n  height: 48px;\n  border: 4px solid var(--color-border);\n  border-top-color: var(--color-primary);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.loading-text {\n  margin-top: 1rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  min-height: 300px;\n  text-align: center;\n}\n.error-icon {\n  color: var(--color-danger, #dc2626);\n  margin-bottom: 1rem;\n}\n.error-icon svg {\n  width: 64px;\n  height: 64px;\n}\n.error-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.75rem;\n}\n.error-message {\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n  margin: 0 0 1.5rem;\n  max-width: 400px;\n  line-height: 1.5;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=households.component.css.map */\n'] }]
  }], () => [{ type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HouseholdsComponent, { className: "HouseholdsComponent", filePath: "src/app/pages/households/households.component.ts", lineNumber: 17 });
})();
export {
  HouseholdsComponent
};
//# sourceMappingURL=chunk-TV7R42B3.js.map
