import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RLCWMJN5.js";
import {
  RouterLink
} from "./chunk-SCD2KLNQ.js";
import "./chunk-UKN232ML.js";
import {
  DataService
} from "./chunk-EMIWMFU5.js";
import "./chunk-BPYJUQPN.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
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
} from "./chunk-ISBYAA2X.js";
import "./chunk-YP43Q66R.js";

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
var _c0 = () => ["../households", "map"];
var _c1 = (a0) => ["../households", a0];
var _forTrack0 = ($index, $item) => $item.id;
function HouseholdsComponent_Conditional_19_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "input", 14);
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementStart(12, "td")(13, "span", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "a", 16);
    \u0275\u0275text(17, "View");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const household_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(household_r1.householdId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getHeadOfHousehold(household_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(household_r1.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(household_r1.purok);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", household_r1.members.length, " member", household_r1.members.length !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c1, household_r1.id));
  }
}
function HouseholdsComponent_Conditional_19_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275text(2, " No households found ");
    \u0275\u0275elementEnd()();
  }
}
function HouseholdsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 13)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275element(4, "input", 14);
    \u0275\u0275elementEnd();
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
    \u0275\u0275repeaterCreate(18, HouseholdsComponent_Conditional_19_For_19_Template, 18, 9, "tr", null, _forTrack0, false, HouseholdsComponent_Conditional_19_ForEmpty_20_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.filteredHouseholds);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HouseholdsComponent, selectors: [["app-households"]], decls: 20, vars: 11, consts: [[1, "households-list"], [1, "page-header"], [1, "page-title"], [1, "btn", "btn--outline", "page-header__action", 3, "routerLink"], [1, "filters"], ["type", "text", "placeholder", "Search by Household ID or Address", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Purok 1"], ["value", "Purok 2"], ["value", "Purok 3"], [1, "table-wrap", "card"], [3, "retry", "loading", "error", "loadingMessage", "errorTitle", "showRetry", "retryLabel"], [1, "table"], ["type", "checkbox"], [1, "badge", "badge--info"], [1, "btn", "btn--sm", "btn--outline", 3, "routerLink"], ["colspan", "7", 2, "text-align", "center", "padding", "2rem", "color", "var(--color-text-muted)"]], template: function HouseholdsComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(19, HouseholdsComponent_Conditional_19_Template, 21, 1, "table", 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.purok);
        \u0275\u0275advance(10);
        \u0275\u0275property("loading", ctx.isLoading)("error", ctx.hasError ? ctx.errorMessage : null)("loadingMessage", "Loading households...")("errorTitle", "Error Loading Data")("showRetry", true)("retryLabel", "Try Again");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isLoading && !ctx.hasError ? 19 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, LoadingStateComponent], styles: ["\n\n.households-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 1rem;\n  position: relative;\n  padding-right: 100px;\n  flex-wrap: wrap;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-header__action[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  flex-shrink: 0;\n}\n.page-header[_ngcontent-%COMP%]:has(.btn--primary) {\n  padding-right: 176px;\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {\n    padding-right: 164px;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding-right: 0;\n  }\n  .page-header[_ngcontent-%COMP%]   .page-header__action[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n    width: 100%;\n  }\n  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {\n    padding-right: 0;\n  }\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  min-width: 140px;\n}\n.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:first-child {\n  min-width: 200px;\n  flex: 1;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 0 !important;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  min-height: 300px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid var(--color-border);\n  border-top-color: var(--color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-text[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  min-height: 300px;\n  text-align: center;\n}\n.error-icon[_ngcontent-%COMP%] {\n  color: var(--color-danger, #dc2626);\n  margin-bottom: 1rem;\n}\n.error-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.75rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n  margin: 0 0 1.5rem;\n  max-width: 400px;\n  line-height: 1.5;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=households.component.css.map */"] });
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
            <th><input type="checkbox" /></th>\r
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
              <td><input type="checkbox" /></td>\r
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
</div>\r
\r
`, styles: ["/* src/app/pages/households/households.component.scss */\n.households-list {\n  width: 100%;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 1rem;\n  position: relative;\n  padding-right: 100px;\n  flex-wrap: wrap;\n}\n.page-header .page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  min-width: 0;\n}\n.page-header .page-header__action {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  flex-shrink: 0;\n}\n.page-header:has(.btn--primary) {\n  padding-right: 176px;\n}\n@media (max-width: 640px) {\n  .page-header:has(.btn--primary) {\n    padding-right: 164px;\n  }\n}\n.page-header {\n}\n@media (max-width: 640px) {\n  .page-header {\n    flex-direction: column;\n    align-items: stretch;\n    padding-right: 0;\n  }\n  .page-header .page-header__action {\n    position: static;\n    transform: none;\n    width: 100%;\n  }\n  .page-header:has(.btn--primary) {\n    padding-right: 0;\n  }\n}\n.filters {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.filters .form-control {\n  padding: 8px 12px;\n  min-width: 140px;\n}\n.filters .form-control:first-child {\n  min-width: 200px;\n  flex: 1;\n}\n.table-wrap {\n  overflow-x: auto;\n  padding: 0 !important;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  min-height: 300px;\n}\n.spinner {\n  width: 48px;\n  height: 48px;\n  border: 4px solid var(--color-border);\n  border-top-color: var(--color-primary);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.loading-text {\n  margin-top: 1rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  min-height: 300px;\n  text-align: center;\n}\n.error-icon {\n  color: var(--color-danger, #dc2626);\n  margin-bottom: 1rem;\n}\n.error-icon svg {\n  width: 64px;\n  height: 64px;\n}\n.error-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.75rem;\n}\n.error-message {\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n  margin: 0 0 1.5rem;\n  max-width: 400px;\n  line-height: 1.5;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=households.component.css.map */\n"] }]
  }], () => [{ type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HouseholdsComponent, { className: "HouseholdsComponent", filePath: "src/app/pages/households/households.component.ts", lineNumber: 16 });
})();
export {
  HouseholdsComponent
};
//# sourceMappingURL=chunk-TCEC24SH.js.map
