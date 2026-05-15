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
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TUEAJAVR.js";
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
    }, dependencies: [CommonModule], styles: ["\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  color: var(--color-text, #111827);\n}\n.loading-state--loading[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n}\n.loading-state--error[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n.loading-state__spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9999px;\n  border: 3px solid var(--color-border, #e5e7eb);\n  border-top-color: var(--color-primary, #2563eb);\n  animation: _ngcontent-%COMP%_loading-state-spin 0.8s linear infinite;\n}\n.loading-state__text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted, #6b7280);\n}\n.loading-state__icon[_ngcontent-%COMP%] {\n  color: var(--color-danger, #ef4444);\n  margin-bottom: 0.25rem;\n}\n.loading-state__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.loading-state__message[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted, #6b7280);\n  max-width: 32rem;\n}\n@keyframes _ngcontent-%COMP%_loading-state-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loading-state.component.css.map */"] });
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

// src/app/shared/skeleton/skeleton.component.ts
var SkeletonComponent = class _SkeletonComponent {
  constructor() {
    this.width = "100%";
    this.height = "0.875rem";
    this.variant = "text";
  }
  static {
    this.\u0275fac = function SkeletonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonComponent, selectors: [["app-skeleton"]], inputs: { width: "width", height: "height", variant: "variant", borderRadius: "borderRadius" }, decls: 1, vars: 10, consts: [["aria-hidden", "true", 1, "skeleton"]], template: function SkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "span", 0);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.width)("height", ctx.height)("border-radius", ctx.borderRadius);
        \u0275\u0275classProp("skeleton--circle", ctx.variant === "circle")("skeleton--button", ctx.variant === "button");
      }
    }, styles: ["\n.skeleton[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--skeleton-base) 0%,\n      var(--skeleton-highlight) 50%,\n      var(--skeleton-base) 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.25s ease-in-out infinite;\n  border-radius: 6px;\n}\n.skeleton--circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.skeleton--button[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .skeleton[_ngcontent-%COMP%] {\n    animation: none;\n    background: var(--skeleton-base);\n  }\n}\n/*# sourceMappingURL=skeleton.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonComponent, [{
    type: Component,
    args: [{ selector: "app-skeleton", standalone: true, template: `
    <span
      class="skeleton"
      [class.skeleton--circle]="variant === 'circle'"
      [class.skeleton--button]="variant === 'button'"
      [style.width]="width"
      [style.height]="height"
      [style.border-radius]="borderRadius"
      aria-hidden="true"
    ></span>
  `, styles: ["/* angular:styles/component:scss;d07397d731e7b92fdcdbbd7ecd6480c65eb4939bbd477daccd534c11699c039e;F:/BRIMS/src/app/shared/skeleton/skeleton.component.ts */\n.skeleton {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--skeleton-base) 0%,\n      var(--skeleton-highlight) 50%,\n      var(--skeleton-base) 100%);\n  background-size: 200% 100%;\n  animation: skeleton-shimmer 1.25s ease-in-out infinite;\n  border-radius: 6px;\n}\n.skeleton--circle {\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.skeleton--button {\n  border-radius: 8px;\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .skeleton {\n    animation: none;\n    background: var(--skeleton-base);\n  }\n}\n/*# sourceMappingURL=skeleton.component.css.map */\n"] }]
  }], null, { width: [{
    type: Input
  }], height: [{
    type: Input
  }], variant: [{
    type: Input
  }], borderRadius: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonComponent, { className: "SkeletonComponent", filePath: "src/app/shared/skeleton/skeleton.component.ts", lineNumber: 61 });
})();

// src/app/shared/skeleton/table-skeleton.component.ts
function TableSkeletonComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 1)(1, "span", 2);
    \u0275\u0275text(2, "Select");
    \u0275\u0275elementEnd()();
  }
}
function TableSkeletonComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r1);
  }
}
function TableSkeletonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr");
    \u0275\u0275conditionalCreate(2, TableSkeletonComponent_Conditional_1_Conditional_2_Template, 3, 0, "th", 1);
    \u0275\u0275repeaterCreate(3, TableSkeletonComponent_Conditional_1_For_4_Template, 2, 1, "th", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showCheckbox ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.columnLabels);
  }
}
function TableSkeletonComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "app-skeleton", 3);
    \u0275\u0275elementEnd();
  }
}
function TableSkeletonComponent_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "app-skeleton", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const width_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("width", width_r3);
  }
}
function TableSkeletonComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, TableSkeletonComponent_For_4_Conditional_1_Template, 2, 0, "td");
    \u0275\u0275repeaterCreate(2, TableSkeletonComponent_For_4_For_3_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCheckbox ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.columnWidths);
  }
}
var TableSkeletonComponent = class _TableSkeletonComponent {
  constructor() {
    this.rows = 6;
    this.showCheckbox = false;
    this.showHeader = true;
    this.columnLabels = [];
    this.columnWidths = ["100%"];
    this.ariaLabel = "Loading table";
  }
  get rowIndices() {
    return Array.from({ length: this.rows }, (_, i) => i);
  }
  static {
    this.\u0275fac = function TableSkeletonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TableSkeletonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableSkeletonComponent, selectors: [["app-table-skeleton"]], inputs: { rows: "rows", showCheckbox: "showCheckbox", showHeader: "showHeader", columnLabels: "columnLabels", columnWidths: "columnWidths", ariaLabel: "ariaLabel" }, decls: 5, vars: 2, consts: [["aria-busy", "true", 1, "table", "table-skeleton"], ["scope", "col"], [1, "visually-hidden"], ["variant", "circle", "width", "18px", "height", "18px"], ["height", "0.875rem", 3, "width"]], template: function TableSkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0);
        \u0275\u0275conditionalCreate(1, TableSkeletonComponent_Conditional_1_Template, 5, 1, "thead");
        \u0275\u0275elementStart(2, "tbody");
        \u0275\u0275repeaterCreate(3, TableSkeletonComponent_For_4_Template, 4, 1, "tr", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showHeader ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.rowIndices);
      }
    }, dependencies: [CommonModule, SkeletonComponent], styles: ["\n.table-skeleton[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 0.85rem;\n  padding-bottom: 0.85rem;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n/*# sourceMappingURL=table-skeleton.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableSkeletonComponent, [{
    type: Component,
    args: [{ selector: "app-table-skeleton", standalone: true, imports: [CommonModule, SkeletonComponent], template: `
    <table class="table table-skeleton" aria-busy="true" [attr.aria-label]="ariaLabel">
      @if (showHeader) {
        <thead>
          <tr>
            @if (showCheckbox) {
              <th scope="col"><span class="visually-hidden">Select</span></th>
            }
            @for (label of columnLabels; track label) {
              <th scope="col">{{ label }}</th>
            }
          </tr>
        </thead>
      }
      <tbody>
        @for (row of rowIndices; track row) {
          <tr>
            @if (showCheckbox) {
              <td>
                <app-skeleton variant="circle" width="18px" height="18px" />
              </td>
            }
            @for (width of columnWidths; track $index) {
              <td>
                <app-skeleton [width]="width" height="0.875rem" />
              </td>
            }
          </tr>
        }
      </tbody>
    </table>
  `, styles: ["/* angular:styles/component:scss;94a21ced7782c1fb6d5473cd974b7edab6354eb49a057f7eb5ad9f3705ff0a78;F:/BRIMS/src/app/shared/skeleton/table-skeleton.component.ts */\n.table-skeleton tbody td {\n  padding-top: 0.85rem;\n  padding-bottom: 0.85rem;\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n/*# sourceMappingURL=table-skeleton.component.css.map */\n"] }]
  }], null, { rows: [{
    type: Input
  }], showCheckbox: [{
    type: Input
  }], showHeader: [{
    type: Input
  }], columnLabels: [{
    type: Input
  }], columnWidths: [{
    type: Input
  }], ariaLabel: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableSkeletonComponent, { className: "TableSkeletonComponent", filePath: "src/app/shared/skeleton/table-skeleton.component.ts", lineNumber: 62 });
})();

// src/app/shared/skeleton/card-list-skeleton.component.ts
function CardListSkeletonComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton", 3);
  }
}
function CardListSkeletonComponent_For_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "app-skeleton", 12)(2, "app-skeleton", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    \u0275\u0275classProp("card-list-skeleton__field--wide", field_r1 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("width", field_r1 === 0 ? "90%" : "65%");
  }
}
function CardListSkeletonComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, CardListSkeletonComponent_For_2_Conditional_2_Template, 1, 0, "app-skeleton", 3);
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275element(4, "app-skeleton", 5)(5, "app-skeleton", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275repeaterCreate(7, CardListSkeletonComponent_For_2_For_8_Template, 3, 3, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275element(10, "app-skeleton", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showCheckbox ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.fieldIndices);
  }
}
var CardListSkeletonComponent = class _CardListSkeletonComponent {
  constructor() {
    this.count = 4;
    this.fieldsCount = 3;
    this.showCheckbox = false;
    this.ariaLabel = "Loading list";
  }
  get cardIndices() {
    return Array.from({ length: this.count }, (_, i) => i);
  }
  get fieldIndices() {
    return Array.from({ length: this.fieldsCount }, (_, i) => i);
  }
  static {
    this.\u0275fac = function CardListSkeletonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardListSkeletonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardListSkeletonComponent, selectors: [["app-card-list-skeleton"]], inputs: { count: "count", fieldsCount: "fieldsCount", showCheckbox: "showCheckbox", ariaLabel: "ariaLabel" }, decls: 3, vars: 1, consts: [["aria-busy", "true", 1, "card-list-skeleton"], [1, "card-list-skeleton__card"], [1, "card-list-skeleton__top"], ["variant", "circle", "width", "18px", "height", "18px"], [1, "card-list-skeleton__titles"], ["width", "55%", "height", "1rem"], ["width", "72%", "height", "0.8125rem"], [1, "card-list-skeleton__fields"], [1, "card-list-skeleton__field", 3, "card-list-skeleton__field--wide"], [1, "card-list-skeleton__actions"], ["variant", "button", "width", "100%", "height", "2.5rem"], [1, "card-list-skeleton__field"], ["width", "40%", "height", "0.75rem"], ["height", "0.875rem", 3, "width"]], template: function CardListSkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, CardListSkeletonComponent_For_2_Template, 11, 1, "div", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.cardIndices);
      }
    }, dependencies: [CommonModule, SkeletonComponent], styles: ["\n.card-list-skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.card-list-skeleton__card[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow);\n  padding: 14px;\n}\n.card-list-skeleton__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.card-list-skeleton__titles[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.card-list-skeleton__fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px 12px;\n  margin-top: 12px;\n}\n.card-list-skeleton__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.card-list-skeleton__field--wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.card-list-skeleton__actions[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n/*# sourceMappingURL=card-list-skeleton.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardListSkeletonComponent, [{
    type: Component,
    args: [{ selector: "app-card-list-skeleton", standalone: true, imports: [CommonModule, SkeletonComponent], template: `
    <div class="card-list-skeleton" aria-busy="true" [attr.aria-label]="ariaLabel">
      @for (card of cardIndices; track card) {
        <div class="card-list-skeleton__card">
          <div class="card-list-skeleton__top">
            @if (showCheckbox) {
              <app-skeleton variant="circle" width="18px" height="18px" />
            }
            <div class="card-list-skeleton__titles">
              <app-skeleton width="55%" height="1rem" />
              <app-skeleton width="72%" height="0.8125rem" />
            </div>
          </div>
          <div class="card-list-skeleton__fields">
            @for (field of fieldIndices; track field) {
              <div class="card-list-skeleton__field" [class.card-list-skeleton__field--wide]="field === 0">
                <app-skeleton width="40%" height="0.75rem" />
                <app-skeleton [width]="field === 0 ? '90%' : '65%'" height="0.875rem" />
              </div>
            }
          </div>
          <div class="card-list-skeleton__actions">
            <app-skeleton variant="button" width="100%" height="2.5rem" />
          </div>
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:scss;293f0cdd136ca0b5f6b71acc89ebda13202785129489695c39de4f78673b6482;F:/BRIMS/src/app/shared/skeleton/card-list-skeleton.component.ts */\n.card-list-skeleton {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.card-list-skeleton__card {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow);\n  padding: 14px;\n}\n.card-list-skeleton__top {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.card-list-skeleton__titles {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.card-list-skeleton__fields {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px 12px;\n  margin-top: 12px;\n}\n.card-list-skeleton__field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.card-list-skeleton__field--wide {\n  grid-column: 1/-1;\n}\n.card-list-skeleton__actions {\n  margin-top: 14px;\n}\n/*# sourceMappingURL=card-list-skeleton.component.css.map */\n"] }]
  }], null, { count: [{
    type: Input
  }], fieldsCount: [{
    type: Input
  }], showCheckbox: [{
    type: Input
  }], ariaLabel: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardListSkeletonComponent, { className: "CardListSkeletonComponent", filePath: "src/app/shared/skeleton/card-list-skeleton.component.ts", lineNumber: 91 });
})();

// src/app/pages/households/households.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => ["../households", "map"];
var _c1 = (a0) => ["../households", a0];
var _forTrack0 = ($index, $item) => $item.id;
function HouseholdsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-loading-state", 18);
    \u0275\u0275listener("retry", function HouseholdsComponent_Conditional_18_Template_app_loading_state_retry_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryLoad());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("loading", false)("error", ctx_r1.errorMessage)("errorTitle", "Error Loading Data")("showRetry", true)("retryLabel", "Try Again");
  }
}
function HouseholdsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", 6)("showCheckbox", ctx_r1.canArchiveHouseholds)("columnLabels", ctx_r1.householdTableColumns)("columnWidths", ctx_r1.householdTableColumnWidths);
  }
}
function HouseholdsComponent_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th")(1, "input", 19);
    \u0275\u0275listener("change", function HouseholdsComponent_Conditional_20_Conditional_3_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onToggleSelectAll($event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.allSelected)("indeterminate", ctx_r1.someSelected);
  }
}
function HouseholdsComponent_Conditional_20_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "input", 22);
    \u0275\u0275listener("change", function HouseholdsComponent_Conditional_20_For_18_Conditional_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const household_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onHouseholdSelectionChange(household_r5, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const household_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isSelected(household_r5));
  }
}
function HouseholdsComponent_Conditional_20_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, HouseholdsComponent_Conditional_20_For_18_Conditional_1_Template, 2, 1, "td");
    \u0275\u0275elementStart(2, "td")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "a", 21);
    \u0275\u0275text(16, "View");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const household_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canArchiveHouseholds ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(household_r5.householdId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getHeadOfHousehold(household_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(household_r5.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(household_r5.purok);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", household_r5.members.length, " member", household_r5.members.length !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, household_r5.id));
  }
}
function HouseholdsComponent_Conditional_20_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, " No households found ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.canArchiveHouseholds ? 7 : 6);
  }
}
function HouseholdsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 14)(1, "thead")(2, "tr");
    \u0275\u0275conditionalCreate(3, HouseholdsComponent_Conditional_20_Conditional_3_Template, 2, 2, "th");
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "Household ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Head of Household");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, HouseholdsComponent_Conditional_20_For_18_Template, 17, 10, "tr", null, _forTrack0, false, HouseholdsComponent_Conditional_20_ForEmpty_19_Template, 3, 1, "tr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canArchiveHouseholds ? 3 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.filteredHouseholds);
  }
}
function HouseholdsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-loading-state", 18);
    \u0275\u0275listener("retry", function HouseholdsComponent_Conditional_22_Template_app_loading_state_retry_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryLoad());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("loading", false)("error", ctx_r1.errorMessage)("errorTitle", "Error Loading Data")("showRetry", true)("retryLabel", "Try Again");
  }
}
function HouseholdsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-card-list-skeleton", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("count", 4)("fieldsCount", 3)("showCheckbox", ctx_r1.canArchiveHouseholds);
  }
}
function HouseholdsComponent_Conditional_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "input", 19);
    \u0275\u0275listener("change", function HouseholdsComponent_Conditional_24_Conditional_0_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onToggleSelectAll($event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.allSelected)("indeterminate", ctx_r1.someSelected);
  }
}
function HouseholdsComponent_Conditional_24_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 38);
    \u0275\u0275listener("change", function HouseholdsComponent_Conditional_24_For_2_Conditional_2_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const household_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onHouseholdSelectionChange(household_r9, $event.target.checked));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const household_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(household_r9));
  }
}
function HouseholdsComponent_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 27);
    \u0275\u0275conditionalCreate(2, HouseholdsComponent_Conditional_24_For_2_Conditional_2_Template, 1, 1, "input", 28);
    \u0275\u0275elementStart(3, "div", 29)(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 32)(9, "div", 33)(10, "span", 34);
    \u0275\u0275text(11, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 33)(15, "span", 34);
    \u0275\u0275text(16, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "span", 34);
    \u0275\u0275text(21, "Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 36)(23, "span", 20);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 37)(26, "a", 21);
    \u0275\u0275text(27, "View");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const household_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canArchiveHouseholds ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(household_r9.householdId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getHeadOfHousehold(household_r9));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(household_r9.address);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(household_r9.purok);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", household_r9.members.length, " member", household_r9.members.length !== 1 ? "s" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, household_r9.id));
  }
}
function HouseholdsComponent_Conditional_24_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "No households found");
    \u0275\u0275elementEnd();
  }
}
function HouseholdsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HouseholdsComponent_Conditional_24_Conditional_0_Template, 2, 2, "div", 24);
    \u0275\u0275repeaterCreate(1, HouseholdsComponent_Conditional_24_For_2_Template, 28, 10, "div", 25, _forTrack0, false, HouseholdsComponent_Conditional_24_ForEmpty_3_Template, 2, 0, "div", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.canArchiveHouseholds ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredHouseholds);
  }
}
function HouseholdsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 40);
    \u0275\u0275listener("click", function HouseholdsComponent_Conditional_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
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
  constructor(data, auth) {
    this.data = data;
    this.auth = auth;
    this.search = "";
    this.purok = "";
    this.isLoading = true;
    this.hasError = false;
    this.errorMessage = "";
    this.selectedHouseholdIds = /* @__PURE__ */ new Set();
    this.isBulkActionsBarClosing = false;
    this.bulkBarCloseTimeout = null;
    this.bulkArchiveFabHideClass = "bulk-archive-active";
    this.householdTableColumns = [
      "Household ID",
      "Head of Household",
      "Address",
      "Purok",
      "Members",
      "Actions"
    ];
    this.householdTableColumnWidths = ["6.5rem", "7.5rem", "12rem", "4.5rem", "4.5rem", "3.5rem"];
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
        this.clearLoadingTimeout();
        if (households.length > 0 || this.data.households.length > 0) {
          setTimeout(() => {
            this.isLoading = false;
            this.hasError = false;
          }, 300);
        }
      },
      error: (error) => {
        this.clearLoadingTimeout();
        this.hasError = true;
        this.isLoading = false;
        this.errorMessage = error?.message || "An error occurred while loading households. Please try again later.";
        console.error("Error loading households:", error);
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.clearLoadingTimeout();
    if (typeof document !== "undefined") {
      document.body.classList.remove(this.bulkArchiveFabHideClass);
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
  get canArchiveHouseholds() {
    return this.auth.currentUser?.role === "admin";
  }
  get showBulkActionsBar() {
    if (!this.canArchiveHouseholds)
      return false;
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
    if (!this.canArchiveHouseholds)
      return;
    if (checked) {
      this.filteredHouseholds.forEach((h) => this.selectedHouseholdIds.add(h.id));
    } else {
      this.clearFilteredHouseholdIds();
    }
    this.handleBulkBarSelectionChanged();
  }
  onHouseholdSelectionChange(household, checked) {
    if (!this.canArchiveHouseholds)
      return;
    if (checked) {
      this.selectedHouseholdIds.add(household.id);
    } else {
      this.selectedHouseholdIds.delete(household.id);
    }
    this.handleBulkBarSelectionChanged();
  }
  clearFilteredHouseholdIds() {
    this.filteredHouseholds.forEach((h) => this.selectedHouseholdIds.delete(h.id));
  }
  clearLoadingTimeout() {
    if (!this.loadingTimeout)
      return;
    clearTimeout(this.loadingTimeout);
    this.loadingTimeout = void 0;
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
  archiveSelectedHouseholds() {
    return __async(this, null, function* () {
      if (!this.canArchiveHouseholds) {
        this.clearSelection();
        return;
      }
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
      return new (__ngFactoryType__ || _HouseholdsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HouseholdsComponent, selectors: [["app-households"]], decls: 26, vars: 7, consts: [[1, "households-list"], [1, "page-header"], [1, "page-title"], [1, "btn", "btn--outline", "page-header__action", 3, "routerLink"], [1, "filters"], ["type", "text", "placeholder", "Search by Household ID or Address", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Purok 1"], ["value", "Purok 2"], ["value", "Purok 3"], [1, "table-wrap", "card", "households-table-wrap"], [3, "loading", "error", "errorTitle", "showRetry", "retryLabel"], ["ariaLabel", "Loading households", 3, "rows", "showCheckbox", "columnLabels", "columnWidths"], [1, "table"], [1, "households-mobile-list"], ["ariaLabel", "Loading households", 3, "count", "fieldsCount", "showCheckbox"], [1, "bulk-actions-bar", 3, "bulk-actions-bar--closing"], [3, "retry", "loading", "error", "errorTitle", "showRetry", "retryLabel"], ["type", "checkbox", 3, "change", "checked", "indeterminate"], [1, "badge", "badge--info"], [1, "btn", "btn--sm", "btn--outline", 3, "routerLink"], ["type", "checkbox", 3, "change", "checked"], [1, "empty-cell"], [1, "mobile-select-all"], [1, "households-mobile-card"], [1, "mobile-empty"], [1, "households-mobile-card__top"], ["type", "checkbox", 1, "households-mobile-card__checkbox", 3, "checked"], [1, "households-mobile-card__titles"], [1, "households-mobile-card__primary"], [1, "households-mobile-card__secondary"], [1, "households-mobile-card__fields"], [1, "mobile-kv"], [1, "mobile-kv__k"], [1, "mobile-kv__v"], [1, "mobile-kv__v", "households-mobile-card__members"], [1, "households-mobile-card__actions"], ["type", "checkbox", 1, "households-mobile-card__checkbox", 3, "change", "checked"], [1, "bulk-actions-bar"], ["type", "button", 1, "btn", "bulk-actions-btn", 3, "click"]], template: function HouseholdsComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(17, "div", 11);
        \u0275\u0275conditionalCreate(18, HouseholdsComponent_Conditional_18_Template, 1, 5, "app-loading-state", 12)(19, HouseholdsComponent_Conditional_19_Template, 1, 4, "app-table-skeleton", 13)(20, HouseholdsComponent_Conditional_20_Template, 20, 2, "table", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 15);
        \u0275\u0275conditionalCreate(22, HouseholdsComponent_Conditional_22_Template, 1, 5, "app-loading-state", 12)(23, HouseholdsComponent_Conditional_23_Template, 1, 3, "app-card-list-skeleton", 16)(24, HouseholdsComponent_Conditional_24_Template, 4, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(25, HouseholdsComponent_Conditional_25_Template, 3, 3, "div", 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.purok);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.hasError ? 18 : ctx.isLoading ? 19 : 20);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.hasError ? 22 : ctx.isLoading ? 23 : 24);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showBulkActionsBar ? 25 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      RouterLink,
      LoadingStateComponent,
      TableSkeletonComponent,
      CardListSkeletonComponent
    ], styles: [`
.households-list[_ngcontent-%COMP%] {
  width: 100%;
}
.page-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
  position: relative;
  padding-right: 100px;
  flex-wrap: wrap;
}
.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  min-width: 0;
}
.page-header[_ngcontent-%COMP%]   .page-header__action[_ngcontent-%COMP%] {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  flex-shrink: 0;
}
.page-header[_ngcontent-%COMP%]:has(.btn--primary) {
  padding-right: 176px;
}
@media (max-width: 640px) {
  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {
    padding-right: 164px;
  }
}
.page-header[_ngcontent-%COMP%] {
}
@media (max-width: 640px) {
  .page-header[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: stretch;
    padding-right: 0;
  }
  .page-header[_ngcontent-%COMP%]   .page-header__action[_ngcontent-%COMP%] {
    position: static;
    transform: none;
    width: 100%;
  }
  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {
    padding-right: 0;
  }
}
.filters[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(320px, 1fr) 160px;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
}
.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  height: 44px;
  width: 100%;
  padding: 0 14px;
  min-width: 0;
  border: 1px solid color-mix(in srgb, var(--color-border), #000 10%);
  border-radius: 8px;
  background: var(--color-bg-card);
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 500;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}
.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {
  color: var(--color-text-muted);
  font-weight: 400;
}
.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--color-primary), #000 15%);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary), transparent 78%);
}
.filters[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 36px;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%236B7280' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 11px center;
  background-size: 14px;
}
@media (max-width: 640px) {
  .filters[_ngcontent-%COMP%] {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
    width: 100%;
    height: 42px;
    font-size: 0.92rem;
  }
}
.table-wrap[_ngcontent-%COMP%] {
  overflow-x: auto;
  padding: 0 !important;
}
.empty-cell[_ngcontent-%COMP%] {
  text-align: center;
  padding: 2rem;
  color: var(--color-text-muted);
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
  overflow: hidden;
  z-index: 0;
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
  opacity: 0.9;
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
  top: -120%;
  left: -35%;
  width: 40%;
  height: 320%;
  background:
    linear-gradient(
      115deg,
      transparent 0%,
      rgba(255, 255, 255, 0.06) 35%,
      rgba(255, 255, 255, 0.42) 50%,
      rgba(255, 255, 255, 0.06) 65%,
      transparent 100%);
  transform: translateX(-220%) rotate(18deg);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  z-index: 0;
}
@media (max-width: 640px) {
  .bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%] {
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
  transform: translateX(360%) rotate(18deg);
}
.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]:active {
  transform: translateY(0);
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.25);
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
.households-mobile-list[_ngcontent-%COMP%] {
  display: none;
}
@media (max-width: 640px) {
  .households-table-wrap[_ngcontent-%COMP%] {
    display: none;
  }
  .households-mobile-list[_ngcontent-%COMP%] {
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
  .households-mobile-card[_ngcontent-%COMP%] {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 14px;
  }
  .households-mobile-card__top[_ngcontent-%COMP%] {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .households-mobile-card__checkbox[_ngcontent-%COMP%] {
    margin-top: 3px;
    flex-shrink: 0;
  }
  .households-mobile-card__titles[_ngcontent-%COMP%] {
    min-width: 0;
    flex: 1;
  }
  .households-mobile-card__primary[_ngcontent-%COMP%] {
    font-weight: 800;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .households-mobile-card__secondary[_ngcontent-%COMP%] {
    color: var(--color-text-muted);
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 3px;
  }
  .households-mobile-card__fields[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 12px;
    margin-top: 12px;
  }
  .households-mobile-list[_ngcontent-%COMP%]   .mobile-kv[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    min-width: 0;
  }
  .households-mobile-list[_ngcontent-%COMP%]   .mobile-kv__k[_ngcontent-%COMP%] {
    color: var(--color-text-muted);
    font-size: 0.8125rem;
    flex-shrink: 0;
  }
  .households-mobile-list[_ngcontent-%COMP%]   .mobile-kv__v[_ngcontent-%COMP%] {
    color: var(--color-text);
    font-weight: 600;
    text-align: left;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .households-mobile-list[_ngcontent-%COMP%]   .mobile-kv[_ngcontent-%COMP%]:first-child {
    grid-column: 1/-1;
  }
  .households-mobile-list[_ngcontent-%COMP%]   .households-mobile-card__members[_ngcontent-%COMP%] {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }
  .households-mobile-card__actions[_ngcontent-%COMP%] {
    margin-top: 14px;
    display: flex;
    justify-content: stretch;
  }
  .households-mobile-card__actions[_ngcontent-%COMP%]   .btn.btn--sm[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 0;
    padding: 11px 20px;
    font-size: 1rem;
  }
  .mobile-empty[_ngcontent-%COMP%] {
    text-align: center;
    padding: 1.5rem 1rem;
    color: var(--color-text-muted);
  }
}
/*# sourceMappingURL=households.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HouseholdsComponent, [{
    type: Component,
    args: [{ selector: "app-households", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterLink,
      LoadingStateComponent,
      TableSkeletonComponent,
      CardListSkeletonComponent
    ], template: `<div class="households-list">\r
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
  <div class="table-wrap card households-table-wrap">\r
    @if (hasError) {\r
      <app-loading-state\r
        [loading]="false"\r
        [error]="errorMessage"\r
        [errorTitle]="'Error Loading Data'"\r
        [showRetry]="true"\r
        [retryLabel]="'Try Again'"\r
        (retry)="retryLoad()"\r
      ></app-loading-state>\r
    } @else if (isLoading) {\r
      <app-table-skeleton\r
        [rows]="6"\r
        [showCheckbox]="canArchiveHouseholds"\r
        [columnLabels]="householdTableColumns"\r
        [columnWidths]="householdTableColumnWidths"\r
        ariaLabel="Loading households"\r
      />\r
    } @else {\r
      <table class="table">\r
        <thead>\r
          <tr>\r
            @if (canArchiveHouseholds) {\r
              <th>\r
                <input\r
                  type="checkbox"\r
                  [checked]="allSelected"\r
                  [indeterminate]="someSelected"\r
                  (change)="onToggleSelectAll($any($event.target).checked)"\r
                />\r
              </th>\r
            }\r
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
              @if (canArchiveHouseholds) {\r
                <td>\r
                  <input\r
                    type="checkbox"\r
                    [checked]="isSelected(household)"\r
                    (change)="onHouseholdSelectionChange(household, $any($event.target).checked)"\r
                  />\r
                </td>\r
              }\r
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
              <td [attr.colspan]="canArchiveHouseholds ? 7 : 6" class="empty-cell">\r
                No households found\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    }\r
  </div>\r
\r
  <div class="households-mobile-list">\r
    @if (hasError) {\r
      <app-loading-state\r
        [loading]="false"\r
        [error]="errorMessage"\r
        [errorTitle]="'Error Loading Data'"\r
        [showRetry]="true"\r
        [retryLabel]="'Try Again'"\r
        (retry)="retryLoad()"\r
      ></app-loading-state>\r
    } @else if (isLoading) {\r
      <app-card-list-skeleton\r
        [count]="4"\r
        [fieldsCount]="3"\r
        [showCheckbox]="canArchiveHouseholds"\r
        ariaLabel="Loading households"\r
      />\r
    } @else {\r
      @if (canArchiveHouseholds) {\r
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
      @for (household of filteredHouseholds; track household.id) {\r
        <div class="households-mobile-card">\r
          <div class="households-mobile-card__top">\r
            @if (canArchiveHouseholds) {\r
              <input\r
                class="households-mobile-card__checkbox"\r
                type="checkbox"\r
                [checked]="isSelected(household)"\r
                (change)="onHouseholdSelectionChange(household, $any($event.target).checked)"\r
              />\r
            }\r
\r
            <div class="households-mobile-card__titles">\r
              <div class="households-mobile-card__primary">{{ household.householdId }}</div>\r
              <div class="households-mobile-card__secondary">{{ getHeadOfHousehold(household) }}</div>\r
            </div>\r
          </div>\r
\r
          <div class="households-mobile-card__fields">\r
            <div class="mobile-kv">\r
              <span class="mobile-kv__k">Address</span>\r
              <span class="mobile-kv__v">{{ household.address }}</span>\r
            </div>\r
\r
            <div class="mobile-kv">\r
              <span class="mobile-kv__k">Purok</span>\r
              <span class="mobile-kv__v">{{ household.purok }}</span>\r
            </div>\r
\r
            <div class="mobile-kv">\r
              <span class="mobile-kv__k">Members</span>\r
              <span class="mobile-kv__v households-mobile-card__members">\r
                <span class="badge badge--info">\r
                  {{ household.members.length }} member{{ household.members.length !== 1 ? 's' : '' }}\r
                </span>\r
              </span>\r
            </div>\r
          </div>\r
\r
          <div class="households-mobile-card__actions">\r
            <a [routerLink]="['../households', household.id]" class="btn btn--sm btn--outline">View</a>\r
          </div>\r
        </div>\r
      } @empty {\r
        <div class="mobile-empty">No households found</div>\r
      }\r
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
`, styles: [`/* src/app/pages/households/households.component.scss */
.households-list {
  width: 100%;
}
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
  position: relative;
  padding-right: 100px;
  flex-wrap: wrap;
}
.page-header .page-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  min-width: 0;
}
.page-header .page-header__action {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  flex-shrink: 0;
}
.page-header:has(.btn--primary) {
  padding-right: 176px;
}
@media (max-width: 640px) {
  .page-header:has(.btn--primary) {
    padding-right: 164px;
  }
}
.page-header {
}
@media (max-width: 640px) {
  .page-header {
    flex-direction: column;
    align-items: stretch;
    padding-right: 0;
  }
  .page-header .page-header__action {
    position: static;
    transform: none;
    width: 100%;
  }
  .page-header:has(.btn--primary) {
    padding-right: 0;
  }
}
.filters {
  display: grid;
  grid-template-columns: minmax(320px, 1fr) 160px;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
}
.filters .form-control {
  height: 44px;
  width: 100%;
  padding: 0 14px;
  min-width: 0;
  border: 1px solid color-mix(in srgb, var(--color-border), #000 10%);
  border-radius: 8px;
  background: var(--color-bg-card);
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 500;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}
.filters .form-control::placeholder {
  color: var(--color-text-muted);
  font-weight: 400;
}
.filters .form-control:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--color-primary), #000 15%);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary), transparent 78%);
}
.filters select.form-control {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 36px;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%236B7280' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 11px center;
  background-size: 14px;
}
@media (max-width: 640px) {
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .filters .form-control {
    width: 100%;
    height: 42px;
    font-size: 0.92rem;
  }
}
.table-wrap {
  overflow-x: auto;
  padding: 0 !important;
}
.empty-cell {
  text-align: center;
  padding: 2rem;
  color: var(--color-text-muted);
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
  overflow: hidden;
  z-index: 0;
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
  opacity: 0.9;
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
  top: -120%;
  left: -35%;
  width: 40%;
  height: 320%;
  background:
    linear-gradient(
      115deg,
      transparent 0%,
      rgba(255, 255, 255, 0.06) 35%,
      rgba(255, 255, 255, 0.42) 50%,
      rgba(255, 255, 255, 0.06) 65%,
      transparent 100%);
  transform: translateX(-220%) rotate(18deg);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  z-index: 0;
}
@media (max-width: 640px) {
  .bulk-actions-bar .btn.bulk-actions-btn {
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
  transform: translateX(360%) rotate(18deg);
}
.bulk-actions-bar .btn.bulk-actions-btn:active {
  transform: translateY(0);
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.25);
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
.households-mobile-list {
  display: none;
}
@media (max-width: 640px) {
  .households-table-wrap {
    display: none;
  }
  .households-mobile-list {
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
  .households-mobile-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 14px;
  }
  .households-mobile-card__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .households-mobile-card__checkbox {
    margin-top: 3px;
    flex-shrink: 0;
  }
  .households-mobile-card__titles {
    min-width: 0;
    flex: 1;
  }
  .households-mobile-card__primary {
    font-weight: 800;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .households-mobile-card__secondary {
    color: var(--color-text-muted);
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 3px;
  }
  .households-mobile-card__fields {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 12px;
    margin-top: 12px;
  }
  .households-mobile-list .mobile-kv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    min-width: 0;
  }
  .households-mobile-list .mobile-kv__k {
    color: var(--color-text-muted);
    font-size: 0.8125rem;
    flex-shrink: 0;
  }
  .households-mobile-list .mobile-kv__v {
    color: var(--color-text);
    font-weight: 600;
    text-align: left;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .households-mobile-list .mobile-kv:first-child {
    grid-column: 1/-1;
  }
  .households-mobile-list .households-mobile-card__members {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }
  .households-mobile-card__actions {
    margin-top: 14px;
    display: flex;
    justify-content: stretch;
  }
  .households-mobile-card__actions .btn.btn--sm {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 0;
    padding: 11px 20px;
    font-size: 1rem;
  }
  .mobile-empty {
    text-align: center;
    padding: 1.5rem 1rem;
    color: var(--color-text-muted);
  }
}
/*# sourceMappingURL=households.component.css.map */
`] }]
  }], () => [{ type: DataService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HouseholdsComponent, { className: "HouseholdsComponent", filePath: "src/app/pages/households/households.component.ts", lineNumber: 27 });
})();
export {
  HouseholdsComponent
};
//# sourceMappingURL=chunk-EBL3KNZQ.js.map
