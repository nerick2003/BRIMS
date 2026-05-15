import {
  ActivatedRoute,
  Router
} from "./chunk-IPZDF3JU.js";
import "./chunk-E73EYYCC.js";
import {
  DataService
} from "./chunk-2RJNPIJT.js";
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
} from "./chunk-TUEAJAVR.js";
import "./chunk-TWWAJFRB.js";

// src/app/pages/household-detail/household-detail.component.ts
var _forTrack0 = ($index, $item) => $item.residentId;
function HouseholdDetailComponent_div_0_For_65_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function HouseholdDetailComponent_div_0_For_65_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const member_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateToResident(member_r4.residentId));
    });
    \u0275\u0275text(1, "View");
    \u0275\u0275elementEnd();
  }
}
function HouseholdDetailComponent_div_0_For_65_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function HouseholdDetailComponent_div_0_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 23);
    \u0275\u0275text(3, "Resident ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 23);
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 23);
    \u0275\u0275text(13, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 24);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 23);
    \u0275\u0275text(18, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 24);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "span", 23);
    \u0275\u0275text(23, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 25);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "span", 23);
    \u0275\u0275text(28, "Birthdate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 24);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td")(32, "span", 23);
    \u0275\u0275text(33, "Civil Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 24);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "td")(37, "span", 23);
    \u0275\u0275text(38, "Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, HouseholdDetailComponent_div_0_For_65_button_39_Template, 2, 0, "button", 26)(40, HouseholdDetailComponent_div_0_For_65_span_40_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(member_r4.residentId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(member_r4.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(member_r4.age);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(member_r4.gender);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(member_r4.relationship);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(member_r4.birthdate || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(member_r4.civilStatus || "N/A");
    \u0275\u0275advance(4);
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
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h2", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 13);
    \u0275\u0275listener("click", function HouseholdDetailComponent_div_0_Template_a_click_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.navigateToEdit();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(17, "Edit Household");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "span", 16);
    \u0275\u0275text(21, "Household ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 17);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 15)(25, "span", 16);
    \u0275\u0275text(26, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 17);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 15)(30, "span", 16);
    \u0275\u0275text(31, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 17);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 15)(35, "span", 16);
    \u0275\u0275text(36, "Total Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 17);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 18)(40, "div", 19)(41, "h3", 20);
    \u0275\u0275text(42, "Household Members");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 21)(44, "table", 22)(45, "thead")(46, "tr")(47, "th");
    \u0275\u0275text(48, "Resident ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th");
    \u0275\u0275text(50, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th");
    \u0275\u0275text(56, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th");
    \u0275\u0275text(58, "Birthdate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "Civil Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "tbody");
    \u0275\u0275repeaterCreate(64, HouseholdDetailComponent_div_0_For_65_Template, 41, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.backText);
    \u0275\u0275advance(5);
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
    \u0275\u0275elementStart(0, "div", 30)(1, "p");
    \u0275\u0275text(2, "Household not found. ");
    \u0275\u0275elementStart(3, "a", 31);
    \u0275\u0275listener("click", function HouseholdDetailComponent_div_1_Template_a_click_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.navigateToHouseholds();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.backText);
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
      if (this.router.url.startsWith("/admin/archives/households/")) {
        this.router.navigate(["/admin/archives/residents", resident.id]);
        return;
      }
      const isAdminPath = this.router.url.startsWith("/admin");
      const base = isAdminPath ? "/admin" : "/staff";
      this.router.navigate([base, "residents", resident.id]);
    }
  }
  navigateToHouseholds() {
    if (this.router.url.startsWith("/admin/archives/households/")) {
      this.router.navigate(["/admin/archives"]);
      return;
    }
    const isAdminPath = this.router.url.startsWith("/admin");
    const base = isAdminPath ? "/admin" : "/staff";
    this.router.navigate([base, "households"]);
  }
  get backText() {
    return this.router.url.startsWith("/admin/archives/households/") ? "Back to Archives" : "Back to Households";
  }
  static {
    this.\u0275fac = function HouseholdDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HouseholdDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HouseholdDetailComponent, selectors: [["app-household-detail"]], decls: 2, vars: 2, consts: [["class", "household-detail", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "household-detail"], [1, "page-header"], [1, "page-title"], ["href", "#", 1, "back-button", 3, "click"], [1, "back-button__icon"], [1, "back-button__text"], [1, "household-info", "card"], [1, "household-header"], [1, "household-header-left"], [1, "household-title"], [1, "household-subtitle"], ["href", "#", 1, "btn", "btn--primary", 3, "click"], [1, "household-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "household-members", "card"], [1, "section-header"], [1, "section-title"], [1, "table-wrap"], [1, "table", "household-members-table"], [1, "mobile-label"], [1, "mobile-value"], [1, "badge", "badge--info"], ["type", "button", "class", "btn btn--sm btn--primary", 3, "click", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["type", "button", 1, "btn", "btn--sm", "btn--primary", 3, "click"], [1, "text-muted"], [1, "card"], ["href", "#", 3, "click"]], template: function HouseholdDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HouseholdDetailComponent_div_0_Template, 66, 7, "div", 0)(1, HouseholdDetailComponent_div_1_Template, 5, 1, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.household);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.household);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n.household-detail[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.household-detail[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  position: relative;\n  width: 100%;\n  padding-right: 200px;\n}\n.household-detail[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.household-detail[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]    > .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .household-detail[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .household-detail[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]    > .back-button[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n  }\n}\n.back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  color: var(--color-text);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 0.9375rem;\n  border-radius: var(--radius);\n  transition: all 0.2s ease;\n  width: fit-content;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-card);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(-2px);\n  box-shadow: var(--shadow);\n}\n.back-button[_ngcontent-%COMP%]:active {\n  transform: translateX(-1px);\n}\n.back-button__icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1;\n  transition: transform 0.2s ease;\n}\n.back-button[_ngcontent-%COMP%]:hover   .back-button__icon[_ngcontent-%COMP%] {\n  transform: translateX(-2px);\n}\n.back-button__text[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n@media (max-width: 640px) {\n  .back-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.household-info[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.household-info[_ngcontent-%COMP%]   .household-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.household-info[_ngcontent-%COMP%]   .household-header[_ngcontent-%COMP%]   .household-header-left[_ngcontent-%COMP%]   .household-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-info[_ngcontent-%COMP%]   .household-header[_ngcontent-%COMP%]   .household-header-left[_ngcontent-%COMP%]   .household-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  margin: 0.5rem 0 0;\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.household-members[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.household-members[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-members[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.household-members-table[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n}\n.household-members-table[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.2rem;\n}\n.household-members-table[_ngcontent-%COMP%]   .mobile-value[_ngcontent-%COMP%] {\n  display: inline;\n}\n@media (max-width: 480px) {\n  .household-members[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n    overflow-x: visible;\n    margin: 0;\n    padding: 0;\n  }\n  .household-members-table[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0 !important;\n    table-layout: auto;\n  }\n  .household-members-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .household-members-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 0.75rem;\n  }\n  .household-members-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n    padding: 0.85rem;\n    width: 100%;\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius);\n    background: var(--color-bg);\n  }\n  .household-members-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(88px, auto) 1fr;\n    align-items: center;\n    column-gap: 0.65rem;\n    padding: 0;\n    border: 0;\n    white-space: normal;\n    word-break: break-word;\n  }\n  .household-members-table[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-bottom: 0;\n  }\n  .household-members-table[_ngcontent-%COMP%]   .mobile-value[_ngcontent-%COMP%], \n   .household-members-table[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    justify-self: end;\n    text-align: right;\n    max-width: 100%;\n  }\n  .household-members-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    grid-template-columns: 1fr;\n    row-gap: 0.45rem;\n  }\n  .household-members-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .mobile-label[_ngcontent-%COMP%] {\n    justify-self: start;\n  }\n  .household-members-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=household-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HouseholdDetailComponent, [{
    type: Component,
    args: [{ selector: "app-household-detail", standalone: true, imports: [CommonModule], template: `<div class="household-detail" *ngIf="household">\r
  <div class="page-header">\r
    <h1 class="page-title">Household Details</h1>\r
    <a (click)="navigateToHouseholds(); $event.preventDefault()" href="#" class="back-button">\r
      <span class="back-button__icon">\u2190</span>\r
      <span class="back-button__text">{{ backText }}</span>\r
    </a>\r
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
      <table class="table household-members-table">\r
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
              <td>\r
                <span class="mobile-label">Resident ID</span>\r
                <span class="mobile-value">{{ member.residentId }}</span>\r
              </td>\r
              <td>\r
                <span class="mobile-label">Name</span>\r
                <span class="mobile-value">{{ member.name }}</span>\r
              </td>\r
              <td>\r
                <span class="mobile-label">Age</span>\r
                <span class="mobile-value">{{ member.age }}</span>\r
              </td>\r
              <td>\r
                <span class="mobile-label">Gender</span>\r
                <span class="mobile-value">{{ member.gender }}</span>\r
              </td>\r
              <td>\r
                <span class="mobile-label">Relationship</span>\r
                <span class="badge badge--info">{{ member.relationship }}</span>\r
              </td>\r
              <td>\r
                <span class="mobile-label">Birthdate</span>\r
                <span class="mobile-value">{{ member.birthdate || 'N/A' }}</span>\r
              </td>\r
              <td>\r
                <span class="mobile-label">Civil Status</span>\r
                <span class="mobile-value">{{ member.civilStatus || 'N/A' }}</span>\r
              </td>\r
              <td>\r
                <span class="mobile-label">Actions</span>\r
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
  <p>Household not found. <a (click)="navigateToHouseholds(); $event.preventDefault()" href="#">{{ backText }}</a></p>\r
</div>\r
`, styles: ["/* src/app/pages/household-detail/household-detail.component.scss */\n.household-detail {\n  width: 100%;\n}\n.household-detail .page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  position: relative;\n  width: 100%;\n  padding-right: 200px;\n}\n.household-detail .page-header .page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.household-detail .page-header > .back-button {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .household-detail .page-header {\n    padding-right: 0;\n  }\n  .household-detail .page-header > .back-button {\n    position: static;\n    transform: none;\n  }\n}\n.back-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  color: var(--color-text);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 0.9375rem;\n  border-radius: var(--radius);\n  transition: all 0.2s ease;\n  width: fit-content;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.back-button:hover {\n  background: var(--color-bg-card);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(-2px);\n  box-shadow: var(--shadow);\n}\n.back-button:active {\n  transform: translateX(-1px);\n}\n.back-button__icon {\n  font-size: 1.125rem;\n  line-height: 1;\n  transition: transform 0.2s ease;\n}\n.back-button:hover .back-button__icon {\n  transform: translateX(-2px);\n}\n.back-button__text {\n  line-height: 1.5;\n}\n@media (max-width: 640px) {\n  .back-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.text-muted {\n  color: var(--color-text-muted);\n}\n.household-info {\n  margin-bottom: 1rem;\n}\n.household-info .household-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.household-info .household-header .household-header-left .household-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-info .household-header .household-header-left .household-subtitle {\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  margin: 0.5rem 0 0;\n}\n.household-info .household-details {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.household-info .household-details .detail-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.household-info .household-details .detail-row .detail-label {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n.household-info .household-details .detail-row .detail-value {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.household-members .section-header {\n  margin-bottom: 1rem;\n}\n.household-members .section-header .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-members .table-wrap {\n  overflow-x: auto;\n}\n.household-members-table {\n  width: 100%;\n  table-layout: fixed;\n}\n.household-members-table .mobile-label {\n  display: none;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 0.2rem;\n}\n.household-members-table .mobile-value {\n  display: inline;\n}\n@media (max-width: 480px) {\n  .household-members .table-wrap {\n    overflow-x: visible;\n    margin: 0;\n    padding: 0;\n  }\n  .household-members-table {\n    width: 100%;\n    min-width: 0 !important;\n    table-layout: auto;\n  }\n  .household-members-table thead {\n    display: none;\n  }\n  .household-members-table tbody {\n    display: grid;\n    gap: 0.75rem;\n  }\n  .household-members-table tr {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n    padding: 0.85rem;\n    width: 100%;\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius);\n    background: var(--color-bg);\n  }\n  .household-members-table td {\n    display: grid;\n    grid-template-columns: minmax(88px, auto) 1fr;\n    align-items: center;\n    column-gap: 0.65rem;\n    padding: 0;\n    border: 0;\n    white-space: normal;\n    word-break: break-word;\n  }\n  .household-members-table .mobile-label {\n    display: inline-block;\n    margin-bottom: 0;\n  }\n  .household-members-table .mobile-value,\n  .household-members-table .badge {\n    justify-self: end;\n    text-align: right;\n    max-width: 100%;\n  }\n  .household-members-table td:last-child {\n    grid-template-columns: 1fr;\n    row-gap: 0.45rem;\n  }\n  .household-members-table td:last-child .mobile-label {\n    justify-self: start;\n  }\n  .household-members-table td:last-child .btn {\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=household-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HouseholdDetailComponent, { className: "HouseholdDetailComponent", filePath: "src/app/pages/household-detail/household-detail.component.ts", lineNumber: 13 });
})();
export {
  HouseholdDetailComponent
};
//# sourceMappingURL=chunk-VWQM4AHG.js.map
