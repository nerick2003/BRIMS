import {
  Router,
  RouterLink
} from "./chunk-SCD2KLNQ.js";
import "./chunk-UKN232ML.js";
import {
  CommonModule,
  Component,
  Location,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-ISBYAA2X.js";
import "./chunk-YP43Q66R.js";

// src/app/pages/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  constructor(location, router) {
    this.location = location;
    this.router = router;
  }
  goBack() {
    if (window.history.length > 1) {
      this.location.back();
      return;
    }
    this.router.navigateByUrl("/login");
  }
  static {
    this.\u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotFoundComponent)(\u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], decls: 16, vars: 0, consts: [[1, "not-found-page"], [1, "not-found-card", "card"], [1, "error-icon"], ["width", "120", "height", "120", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z", "fill", "currentColor"], [1, "error-code"], [1, "error-title"], [1, "error-message"], [1, "error-actions"], ["routerLink", "/login", 1, "btn", "btn--primary"], [1, "btn", "btn--outline", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "path", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(5, "h1", 5);
        \u0275\u0275text(6, "404");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h2", 6);
        \u0275\u0275text(8, "Page Not Found");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10, " The page you are looking for does not exist or has been moved. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "a", 9);
        \u0275\u0275text(13, "Go to Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 10);
        \u0275\u0275listener("click", function NotFoundComponent_Template_button_click_14_listener() {
          return ctx.goBack();
        });
        \u0275\u0275text(15, "Go Back");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [CommonModule, RouterLink], styles: ['\n\n.not-found-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: url(/assets/images/BG.jpg) no-repeat center center fixed;\n  background-size: cover;\n  position: relative;\n  isolation: isolate;\n}\n.not-found-page[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.18) 0%,\n      transparent 45%),\n    rgba(0, 0, 0, 0.28);\n  z-index: -1;\n}\n@media (max-width: 640px) {\n  .not-found-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.not-found-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  text-align: center;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  animation: _ngcontent-%COMP%_errorCardEnter 0.5s ease-out;\n  padding: 3rem 2rem;\n}\n@media (max-width: 640px) {\n  .not-found-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n    border-radius: var(--radius);\n  }\n}\n@keyframes _ngcontent-%COMP%_errorCardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.error-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n  color: var(--color-danger, #dc2626);\n}\n.error-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n}\n@media (max-width: 640px) {\n  .error-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n}\n.error-code[_ngcontent-%COMP%] {\n  font-family: var(--font-family-title);\n  font-size: 6rem;\n  font-weight: 700;\n  color: var(--color-primary);\n  margin: 0 0 0.5rem;\n  line-height: 1;\n}\n@media (max-width: 640px) {\n  .error-code[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n.error-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-title);\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 1rem;\n}\n@media (max-width: 640px) {\n  .error-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  margin: 0 0 2rem;\n  line-height: 1.6;\n}\n@media (max-width: 640px) {\n  .error-message[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    margin-bottom: 1.5rem;\n  }\n}\n.error-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.error-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n@media (max-width: 640px) {\n  .error-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=not-found.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{ selector: "app-not-found", standalone: true, imports: [CommonModule, RouterLink], template: '<div class="not-found-page">\r\n  <div class="not-found-card card">\r\n    <div class="error-icon">\r\n      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>\r\n      </svg>\r\n    </div>\r\n    <h1 class="error-code">404</h1>\r\n    <h2 class="error-title">Page Not Found</h2>\r\n    <p class="error-message">\r\n      The page you are looking for does not exist or has been moved.\r\n    </p>\r\n    <div class="error-actions">\r\n      <a routerLink="/login" class="btn btn--primary">Go to Login</a>\r\n      <button (click)="goBack()" class="btn btn--outline">Go Back</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/pages/not-found/not-found.component.scss */\n.not-found-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: url(/assets/images/BG.jpg) no-repeat center center fixed;\n  background-size: cover;\n  position: relative;\n  isolation: isolate;\n}\n.not-found-page::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.18) 0%,\n      transparent 45%),\n    rgba(0, 0, 0, 0.28);\n  z-index: -1;\n}\n@media (max-width: 640px) {\n  .not-found-page {\n    padding: 16px;\n  }\n}\n.not-found-card {\n  width: 100%;\n  max-width: 500px;\n  text-align: center;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  animation: errorCardEnter 0.5s ease-out;\n  padding: 3rem 2rem;\n}\n@media (max-width: 640px) {\n  .not-found-card {\n    padding: 2rem 1.5rem;\n    border-radius: var(--radius);\n  }\n}\n@keyframes errorCardEnter {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.error-icon {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n  color: var(--color-danger, #dc2626);\n}\n.error-icon svg {\n  width: 120px;\n  height: 120px;\n}\n@media (max-width: 640px) {\n  .error-icon svg {\n    width: 80px;\n    height: 80px;\n  }\n}\n.error-code {\n  font-family: var(--font-family-title);\n  font-size: 6rem;\n  font-weight: 700;\n  color: var(--color-primary);\n  margin: 0 0 0.5rem;\n  line-height: 1;\n}\n@media (max-width: 640px) {\n  .error-code {\n    font-size: 4rem;\n  }\n}\n.error-title {\n  font-family: var(--font-family-title);\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 1rem;\n}\n@media (max-width: 640px) {\n  .error-title {\n    font-size: 1.5rem;\n  }\n}\n.error-message {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  margin: 0 0 2rem;\n  line-height: 1.6;\n}\n@media (max-width: 640px) {\n  .error-message {\n    font-size: 0.95rem;\n    margin-bottom: 1.5rem;\n  }\n}\n.error-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.error-actions .btn {\n  min-width: 140px;\n}\n@media (max-width: 640px) {\n  .error-actions .btn {\n    width: 100%;\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=not-found.component.css.map */\n'] }]
  }], () => [{ type: Location }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/pages/not-found/not-found.component.ts", lineNumber: 12 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-CGBY7MXF.js.map
