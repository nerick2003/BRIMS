import {
  require_sweetalert2_all
} from "./chunk-4KMSGIRZ.js";
import {
  RouterLink
} from "./chunk-SCD2KLNQ.js";
import "./chunk-UKN232ML.js";
import {
  AuthService,
  DataService
} from "./chunk-EMIWMFU5.js";
import "./chunk-BPYJUQPN.js";
import {
  CommonModule,
  Component,
  NgClass,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
} from "./chunk-ISBYAA2X.js";
import {
  __async,
  __toESM
} from "./chunk-YP43Q66R.js";

// src/app/pages/requests/requests.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = (a0, a1) => ({ "badge--success": a0, "badge--warning": a1 });
var _c1 = (a0) => ["../requests", a0];
var _forTrack0 = ($index, $item) => $item.id;
function RequestsComponent_For_23_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function RequestsComponent_For_23_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const r_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.archiveRequest(r_r2));
    });
    \u0275\u0275text(1, " Archive ");
    \u0275\u0275elementEnd();
  }
}
function RequestsComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 7)(11, "div", 8)(12, "a", 9);
    \u0275\u0275text(13, "View Details");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, RequestsComponent_For_23_Conditional_14_Template, 2, 0, "button", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.purpose);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c0, r_r2.status === "Approved", r_r2.status === "Pending" || r_r2.status === "For Review" || r_r2.status === "Rejected"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.date);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c1, r_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isAdmin ? 14 : -1);
  }
}
var RequestsComponent = class _RequestsComponent {
  constructor(data, auth) {
    this.data = data;
    this.auth = auth;
  }
  // Only show active (non-archived) requests in the main list
  get requests() {
    return this.data.getActiveRequests();
  }
  get isAdmin() {
    return this.auth.currentUser?.role === "admin";
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
      yield import_sweetalert2.default.fire({
        title: "Archived",
        text: "The request has been moved to Archives.",
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestsComponent, selectors: [["app-requests"]], decls: 24, vars: 0, consts: [[1, "requests-page"], [1, "page-header"], [1, "page-title"], [1, "muted"], [1, "table-wrap", "card"], [1, "table"], [1, "badge", 3, "ngClass"], [1, "actions-cell"], [1, "actions-cell__buttons"], [1, "btn", "btn--sm", "btn--primary", 3, "routerLink"], ["type", "button", 1, "btn", "btn--sm", "btn--outline"], ["type", "button", 1, "btn", "btn--sm", "btn--outline", 3, "click"]], template: function RequestsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Requests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Certificate and clearance requests from residents.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4)(8, "table", 5)(9, "thead")(10, "tr")(11, "th");
        \u0275\u0275text(12, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Purpose");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "tbody");
        \u0275\u0275repeaterCreate(22, RequestsComponent_For_23_Template, 15, 12, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275repeater(ctx.requests);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.table[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  text-align: left;\n  white-space: nowrap;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: left;\n  white-space: nowrap;\n}\n.actions-cell__buttons[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.requests-page[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=requests.component.css.map */"] });
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
  <div class="table-wrap card">\r
    <table class="table">\r
      <thead>\r
        <tr>\r
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
                @if (isAdmin) {\r
                  <button\r
                    type="button"\r
                    class="btn btn--sm btn--outline"\r
                    (click)="archiveRequest(r)"\r
                  >\r
                    Archive\r
                  </button>\r
                }\r
              </div>\r
            </td>\r
          </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
</div>\r
`, styles: ["/* angular:styles/component:scss;f18f5ebcdf848ea072f1fae1155b230765e4ab991fc3827ddc7d3d9608e67453;F:/BRIMS/src/app/pages/requests/requests.component.ts */\n.muted {\n  color: var(--color-text-muted);\n}\n.table {\n  margin-top: 1rem;\n}\n.table th:last-child {\n  text-align: left;\n  white-space: nowrap;\n}\n.actions-cell {\n  text-align: left;\n  white-space: nowrap;\n}\n.actions-cell__buttons {\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.requests-page .table-wrap {\n  overflow-x: auto;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=requests.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestsComponent, { className: "RequestsComponent", filePath: "src/app/pages/requests/requests.component.ts", lineNumber: 49 });
})();
export {
  RequestsComponent
};
//# sourceMappingURL=chunk-ZDE3I5FF.js.map
