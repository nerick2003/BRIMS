import {
  ActivatedRoute,
  Router
} from "./chunk-SCD2KLNQ.js";
import "./chunk-UKN232ML.js";
import {
  DataService
} from "./chunk-EMIWMFU5.js";
import "./chunk-BPYJUQPN.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ISBYAA2X.js";
import "./chunk-YP43Q66R.js";

// src/app/pages/household-detail/household-detail.component.ts
var _forTrack0 = ($index, $item) => $item.residentId;
function HouseholdDetailComponent_div_0_For_62_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function HouseholdDetailComponent_div_0_For_62_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const member_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateToResident(member_r4.residentId));
    });
    \u0275\u0275text(1, "View");
    \u0275\u0275elementEnd();
  }
}
function HouseholdDetailComponent_div_0_For_62_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function HouseholdDetailComponent_div_0_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, HouseholdDetailComponent_div_0_For_62_button_17_Template, 2, 0, "button", 22)(18, HouseholdDetailComponent_div_0_For_62_span_18_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.residentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.age);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.gender);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r4.relationship);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.birthdate || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.civilStatus || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getResidentId(member_r4.residentId));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getResidentId(member_r4.residentId));
  }
}
function HouseholdDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1", 4);
    \u0275\u0275text(3, "Household Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 5);
    \u0275\u0275listener("click", function HouseholdDetailComponent_div_0_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.navigateToHouseholds();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(5, "\u2190 Back to Households");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h2", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 11);
    \u0275\u0275listener("click", function HouseholdDetailComponent_div_0_Template_a_click_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.navigateToEdit();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(14, "Edit Household");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "span", 14);
    \u0275\u0275text(18, "Household ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 15);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 13)(22, "span", 14);
    \u0275\u0275text(23, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 15);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 13)(27, "span", 14);
    \u0275\u0275text(28, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 15);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 13)(32, "span", 14);
    \u0275\u0275text(33, "Total Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 15);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 16)(37, "div", 17)(38, "h3", 18);
    \u0275\u0275text(39, "Household Members");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 19)(41, "table", 20)(42, "thead")(43, "tr")(44, "th");
    \u0275\u0275text(45, "Resident ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th");
    \u0275\u0275text(47, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th");
    \u0275\u0275text(51, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th");
    \u0275\u0275text(53, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th");
    \u0275\u0275text(55, "Birthdate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th");
    \u0275\u0275text(57, "Civil Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "tbody");
    \u0275\u0275repeaterCreate(61, HouseholdDetailComponent_div_0_For_62_Template, 19, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.household.householdId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Head of Household: ", ctx_r1.getHeadOfHousehold());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.household.householdId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.household.address);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.household.purok);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.household.members.length);
    \u0275\u0275advance(26);
    \u0275\u0275repeater(ctx_r1.household.members);
  }
}
function HouseholdDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "p");
    \u0275\u0275text(2, "Household not found. ");
    \u0275\u0275elementStart(3, "a", 27);
    \u0275\u0275listener("click", function HouseholdDetailComponent_div_1_Template_a_click_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.navigateToHouseholds();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(4, "Back to Households");
    \u0275\u0275elementEnd()()();
  }
}
var HouseholdDetailComponent = class _HouseholdDetailComponent {
  constructor(route, router, data) {
    this.route = route;
    this.router = router;
    this.data = data;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.household = this.data.getHouseholdById(id);
      } else {
        this.household = void 0;
      }
    });
  }
  getHeadOfHousehold() {
    if (!this.household)
      return "N/A";
    const head = this.household.members.find((m) => m.relationship === "Head");
    return head ? head.name : this.household.members[0]?.name || "N/A";
  }
  getResidentId(residentId) {
    const resident = this.data.getResidentByResidentId(residentId);
    return resident?.id || null;
  }
  navigateToEdit() {
    if (!this.household?.id)
      return;
    const isAdminPath = this.router.url.startsWith("/admin");
    const base = isAdminPath ? "/admin" : "/staff";
    this.router.navigate([base, "households", this.household.id, "edit"]);
  }
  navigateToResident(residentId) {
    const resident = this.data.getResidentByResidentId(residentId);
    if (resident?.id) {
      const isAdminPath = this.router.url.startsWith("/admin");
      const base = isAdminPath ? "/admin" : "/staff";
      this.router.navigate([base, "residents", resident.id]);
    }
  }
  navigateToHouseholds() {
    const isAdminPath = this.router.url.startsWith("/admin");
    const base = isAdminPath ? "/admin" : "/staff";
    this.router.navigate([base, "households"]);
  }
  static {
    this.\u0275fac = function HouseholdDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HouseholdDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HouseholdDetailComponent, selectors: [["app-household-detail"]], decls: 2, vars: 2, consts: [["class", "household-detail", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "household-detail"], [1, "page-header"], [1, "page-title"], ["href", "#", 1, "btn", "btn--outline", 3, "click"], [1, "household-info", "card"], [1, "household-header"], [1, "household-header-left"], [1, "household-title"], [1, "household-subtitle"], ["href", "#", 1, "btn", "btn--primary", 3, "click"], [1, "household-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "household-members", "card"], [1, "section-header"], [1, "section-title"], [1, "table-wrap"], [1, "table"], [1, "badge", "badge--info"], ["type", "button", "class", "btn btn--sm btn--primary", 3, "click", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["type", "button", 1, "btn", "btn--sm", "btn--primary", 3, "click"], [1, "text-muted"], [1, "card"], ["href", "#", 3, "click"]], template: function HouseholdDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HouseholdDetailComponent_div_0_Template, 63, 6, "div", 0)(1, HouseholdDetailComponent_div_1_Template, 5, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.household);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.household);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.household-detail[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.household-detail[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  position: relative;\n  width: 100%;\n  padding-right: 200px;\n}\n.household-detail[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.household-detail[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .household-detail[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .household-detail[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n  }\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.household-info[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.household-info[_ngcontent-%COMP%]   .household-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.household-info[_ngcontent-%COMP%]   .household-header[_ngcontent-%COMP%]   .household-header-left[_ngcontent-%COMP%]   .household-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-info[_ngcontent-%COMP%]   .household-header[_ngcontent-%COMP%]   .household-header-left[_ngcontent-%COMP%]   .household-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  margin: 0.5rem 0 0;\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.household-members[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.household-members[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-members[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=household-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HouseholdDetailComponent, [{
    type: Component,
    args: [{ selector: "app-household-detail", standalone: true, imports: [CommonModule], template: `<div class="household-detail" *ngIf="household">\r
  <div class="page-header">\r
    <h1 class="page-title">Household Details</h1>\r
    <a (click)="navigateToHouseholds(); $event.preventDefault()" href="#" class="btn btn--outline">\u2190 Back to Households</a>\r
  </div>\r
\r
  <div class="household-info card">\r
    <div class="household-header">\r
      <div class="household-header-left">\r
        <h2 class="household-title">{{ household.householdId }}</h2>\r
        <p class="household-subtitle">Head of Household: {{ getHeadOfHousehold() }}</p>\r
      </div>\r
      <a href="#" (click)="navigateToEdit(); $event.preventDefault()" class="btn btn--primary">Edit Household</a>\r
    </div>\r
    <div class="household-details">\r
      <div class="detail-row">\r
        <span class="detail-label">Household ID</span>\r
        <span class="detail-value">{{ household.householdId }}</span>\r
      </div>\r
      <div class="detail-row">\r
        <span class="detail-label">Address</span>\r
        <span class="detail-value">{{ household.address }}</span>\r
      </div>\r
      <div class="detail-row">\r
        <span class="detail-label">Purok</span>\r
        <span class="detail-value">{{ household.purok }}</span>\r
      </div>\r
      <div class="detail-row">\r
        <span class="detail-label">Total Members</span>\r
        <span class="detail-value">{{ household.members.length }}</span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="household-members card">\r
    <div class="section-header">\r
      <h3 class="section-title">Household Members</h3>\r
    </div>\r
    <div class="table-wrap">\r
      <table class="table">\r
        <thead>\r
          <tr>\r
            <th>Resident ID</th>\r
            <th>Name</th>\r
            <th>Age</th>\r
            <th>Gender</th>\r
            <th>Relationship</th>\r
            <th>Birthdate</th>\r
            <th>Civil Status</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (member of household.members; track member.residentId) {\r
            <tr>\r
              <td>{{ member.residentId }}</td>\r
              <td>{{ member.name }}</td>\r
              <td>{{ member.age }}</td>\r
              <td>{{ member.gender }}</td>\r
              <td>\r
                <span class="badge badge--info">{{ member.relationship }}</span>\r
              </td>\r
              <td>{{ member.birthdate || 'N/A' }}</td>\r
              <td>{{ member.civilStatus || 'N/A' }}</td>\r
              <td>\r
                <button type="button" (click)="navigateToResident(member.residentId)" class="btn btn--sm btn--primary" *ngIf="getResidentId(member.residentId)">View</button>\r
                <span *ngIf="!getResidentId(member.residentId)" class="text-muted">\u2014</span>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="!household" class="card">\r
  <p>Household not found. <a (click)="navigateToHouseholds(); $event.preventDefault()" href="#">Back to Households</a></p>\r
</div>\r
`, styles: ["/* src/app/pages/household-detail/household-detail.component.scss */\n.household-detail {\n  width: 100%;\n}\n.household-detail .page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  position: relative;\n  width: 100%;\n  padding-right: 200px;\n}\n.household-detail .page-header .page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.household-detail .page-header > a.btn {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .household-detail .page-header {\n    padding-right: 0;\n  }\n  .household-detail .page-header > a.btn {\n    position: static;\n    transform: none;\n  }\n}\n.text-muted {\n  color: var(--color-text-muted);\n}\n.household-info {\n  margin-bottom: 1rem;\n}\n.household-info .household-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.household-info .household-header .household-header-left .household-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-info .household-header .household-header-left .household-subtitle {\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  margin: 0.5rem 0 0;\n}\n.household-info .household-details {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.household-info .household-details .detail-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.household-info .household-details .detail-row .detail-label {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n.household-info .household-details .detail-row .detail-value {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.household-members .section-header {\n  margin-bottom: 1rem;\n}\n.household-members .section-header .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-members .table-wrap {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=household-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HouseholdDetailComponent, { className: "HouseholdDetailComponent", filePath: "src/app/pages/household-detail/household-detail.component.ts", lineNumber: 13 });
})();
export {
  HouseholdDetailComponent
};
//# sourceMappingURL=chunk-PJCRJNXH.js.map
