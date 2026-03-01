import {
  require_sweetalert2_all
} from "./chunk-4KMSGIRZ.js";
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
  AuthService,
  DataService
} from "./chunk-EMIWMFU5.js";
import "./chunk-BPYJUQPN.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ISBYAA2X.js";
import {
  __async,
  __toESM
} from "./chunk-YP43Q66R.js";

// src/app/pages/residents-list/residents-list.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item.id;
function ResidentsListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ResidentsListComponent_For_50_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 21);
    \u0275\u0275listener("click", function ResidentsListComponent_For_50_Conditional_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const r_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.archiveResident(r_r2));
    });
    \u0275\u0275text(2, " Archive ");
    \u0275\u0275elementEnd()();
  }
}
function ResidentsListComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "a", 18);
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
    \u0275\u0275elementStart(12, "td")(13, "select", 19)(14, "option", 20);
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
    \u0275\u0275conditionalCreate(22, ResidentsListComponent_For_50_Conditional_22_Template, 3, 0, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, r_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.residentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.age);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.gender);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", r_r2.purok);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.purok);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r2.canArchiveResidents ? 22 : -1);
  }
}
function ResidentsListComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2, " No residents found matching the filters. ");
    \u0275\u0275elementEnd()();
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
  static {
    this.\u0275fac = function ResidentsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResidentsListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResidentsListComponent, selectors: [["app-residents-list"]], decls: 52, vars: 6, consts: [[1, "residents-list"], [1, "page-header"], [1, "page-title"], [1, "filters"], ["type", "text", "placeholder", "Search by Name or ID", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Male"], ["value", "Female"], ["value", "0-17"], ["value", "18-59"], ["value", "60+"], ["value", "Purok 1"], ["value", "Purok 2"], ["value", "Purok 3"], [1, "table-wrap", "card"], [1, "table"], ["type", "checkbox"], [3, "routerLink"], [1, "purok-select"], ["selected", "", 3, "value"], ["type", "button", 1, "btn", "btn--sm", "btn--outline", 3, "click"], ["colspan", "6", 2, "text-align", "center", "padding", "2rem", "color", "var(--color-text-secondary, #6b7280)"]], template: function ResidentsListComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(31, "div", 15)(32, "table", 16)(33, "thead")(34, "tr")(35, "th");
        \u0275\u0275element(36, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "Resident ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "Age");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "Gender");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Purok");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(47, ResidentsListComponent_Conditional_47_Template, 2, 0, "th");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "tbody");
        \u0275\u0275repeaterCreate(49, ResidentsListComponent_For_50_Template, 23, 10, "tr", null, _forTrack0);
        \u0275\u0275conditionalCreate(51, ResidentsListComponent_Conditional_51_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()();
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
        \u0275\u0275advance(25);
        \u0275\u0275conditional(ctx.canArchiveResidents ? 47 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.filteredResidents);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.filteredResidents.length === 0 ? 51 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.residents-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header[_ngcontent-%COMP%]:has(.btn--primary) {\n  padding-right: 176px;\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {\n    padding-right: 164px;\n  }\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {\n    padding-right: 0;\n  }\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  min-width: 140px;\n}\n.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:first-child {\n  min-width: 200px;\n  flex: 1;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 0 !important;\n}\n.purok-select[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid var(--color-border);\n  border-radius: 4px;\n  font-size: 0.875rem;\n  background: var(--color-bg-card);\n}\n/*# sourceMappingURL=residents-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResidentsListComponent, [{
    type: Component,
    args: [{ selector: "app-residents-list", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: '<div class="residents-list">\r\n  <div class="page-header">\r\n    <h1 class="page-title">Residents List</h1>\r\n  </div>\r\n  <div class="filters">\r\n    <input type="text" class="form-control" placeholder="Search by Name or ID" [(ngModel)]="search" />\r\n    <select class="form-control" [(ngModel)]="gender">\r\n      <option value="">Gender</option>\r\n      <option value="Male">Male</option>\r\n      <option value="Female">Female</option>\r\n    </select>\r\n    <select class="form-control" [(ngModel)]="age">\r\n      <option value="">Age</option>\r\n      <option value="0-17">0-17</option>\r\n      <option value="18-59">18-59</option>\r\n      <option value="60+">60+</option>\r\n    </select>\r\n    <select class="form-control" [(ngModel)]="purok">\r\n      <option value="">Purok</option>\r\n      <option value="Purok 1">Purok 1</option>\r\n      <option value="Purok 2">Purok 2</option>\r\n      <option value="Purok 3">Purok 3</option>\r\n    </select>\r\n  </div>\r\n  <div class="table-wrap card">\r\n    <table class="table">\r\n      <thead>\r\n        <tr>\r\n          <th><input type="checkbox" /></th>\r\n          <th>Resident ID</th>\r\n          <th>Name</th>\r\n          <th>Age</th>\r\n          <th>Gender</th>\r\n          <th>Purok</th>\r\n          @if (canArchiveResidents) {\r\n            <th>Actions</th>\r\n          }\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        @for (r of filteredResidents; track r.id) {\r\n          <tr>\r\n            <td><input type="checkbox" /></td>\r\n            <td><a [routerLink]="[r.id]">{{ r.residentId }}</a></td>\r\n            <td>{{ r.name }}</td>\r\n            <td>{{ r.age }}</td>\r\n            <td>{{ r.gender }}</td>\r\n            <td>\r\n              <select class="purok-select">\r\n                <option [value]="r.purok" selected>{{ r.purok }}</option>\r\n                <option>Purok 1</option>\r\n                <option>Purok 2</option>\r\n                <option>Purok 3</option>\r\n              </select>\r\n            </td>\r\n            @if (canArchiveResidents) {\r\n              <td>\r\n                <button\r\n                  type="button"\r\n                  class="btn btn--sm btn--outline"\r\n                  (click)="archiveResident(r)"\r\n                >\r\n                  Archive\r\n                </button>\r\n              </td>\r\n            }\r\n          </tr>\r\n        }\r\n        @if (filteredResidents.length === 0) {\r\n          <tr>\r\n            <td colspan="6" style="text-align: center; padding: 2rem; color: var(--color-text-secondary, #6b7280);">\r\n              No residents found matching the filters.\r\n            </td>\r\n          </tr>\r\n        }\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/pages/residents-list/residents-list.component.scss */\n.residents-list {\n  width: 100%;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.page-header .page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header:has(.btn--primary) {\n  padding-right: 176px;\n}\n@media (max-width: 640px) {\n  .page-header:has(.btn--primary) {\n    padding-right: 164px;\n  }\n}\n@media (max-width: 640px) {\n  .page-header:has(.btn--primary) {\n    padding-right: 0;\n  }\n}\n.filters {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.filters .form-control {\n  padding: 8px 12px;\n  min-width: 140px;\n}\n.filters .form-control:first-child {\n  min-width: 200px;\n  flex: 1;\n}\n.table-wrap {\n  overflow-x: auto;\n  padding: 0 !important;\n}\n.purok-select {\n  padding: 4px 8px;\n  border: 1px solid var(--color-border);\n  border-radius: 4px;\n  font-size: 0.875rem;\n  background: var(--color-bg-card);\n}\n/*# sourceMappingURL=residents-list.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResidentsListComponent, { className: "ResidentsListComponent", filePath: "src/app/pages/residents-list/residents-list.component.ts", lineNumber: 16 });
})();
export {
  ResidentsListComponent
};
//# sourceMappingURL=chunk-XOTS3VO5.js.map
