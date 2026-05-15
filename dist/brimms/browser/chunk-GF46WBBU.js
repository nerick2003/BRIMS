import {
  require_leaflet_src
} from "./chunk-L6V6THKI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-PCIERS7P.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TUEAJAVR.js";
import {
  __toESM
} from "./chunk-TWWAJFRB.js";

// src/app/pages/edit-household/edit-household.component.ts
var L = __toESM(require_leaflet_src());
var _forTrack0 = ($index, $item) => $item.id;
function EditHouseholdComponent_div_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function EditHouseholdComponent_div_0_div_39_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearLocation());
    });
    \u0275\u0275text(6, " Clear location ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lat: ", ctx_r1.latitude);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lng: ", ctx_r1.longitude);
  }
}
function EditHouseholdComponent_div_0_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resident_r4 = ctx.$implicit;
    \u0275\u0275property("value", resident_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", resident_r4.residentId, " - ", resident_r4.name, " (", resident_r4.age, ", ", resident_r4.gender, ") ");
  }
}
function EditHouseholdComponent_div_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, " No available residents. All residents are already assigned to other households. ");
    \u0275\u0275elementEnd();
  }
}
function EditHouseholdComponent_div_0_For_60_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resident_r7 = ctx.$implicit;
    \u0275\u0275property("value", resident_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", resident_r7.residentId, " - ", resident_r7.name, " (", resident_r7.age, ", ", resident_r7.gender, ") ");
  }
}
function EditHouseholdComponent_div_0_For_60_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rel_r8 = ctx.$implicit;
    \u0275\u0275property("value", rel_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rel_r8);
  }
}
function EditHouseholdComponent_div_0_For_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 38)(2, "label");
    \u0275\u0275text(3, "Resident");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function EditHouseholdComponent_div_0_For_60_Template_select_ngModelChange_4_listener($event) {
      const member_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(member_r6.residentId, $event) || (member_r6.residentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 17);
    \u0275\u0275text(6, "Select resident");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, EditHouseholdComponent_div_0_For_60_For_8_Template, 2, 5, "option", 27, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 40)(10, "label");
    \u0275\u0275text(11, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function EditHouseholdComponent_div_0_For_60_Template_select_ngModelChange_12_listener($event) {
      const member_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(member_r6.relationship, $event) || (member_r6.relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 17);
    \u0275\u0275text(14, "Select relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, EditHouseholdComponent_div_0_For_60_For_16_Template, 2, 2, "option", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 41)(18, "label");
    \u0275\u0275text(19, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 42);
    \u0275\u0275listener("click", function EditHouseholdComponent_div_0_For_60_Template_button_click_20_listener() {
      const $index_r9 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeMemberRow($index_r9));
    });
    \u0275\u0275text(21, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", member_r6.residentId);
    \u0275\u0275property("name", "memberResident" + $index_r9);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.getAvailableResidentsForMember($index_r9));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", member_r6.relationship);
    \u0275\u0275property("name", "memberRelationship" + $index_r9);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.RELATIONSHIP_OPTIONS);
  }
}
function EditHouseholdComponent_div_0_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function EditHouseholdComponent_div_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, "Household updated successfully! Redirecting to household details...");
    \u0275\u0275elementEnd();
  }
}
function EditHouseholdComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1", 4);
    \u0275\u0275text(3, "Edit Household");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 5);
    \u0275\u0275listener("click", function EditHouseholdComponent_div_0_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.navigateBackToDetails();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(5, " \u2190 Back to Household Details ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "form", 7);
    \u0275\u0275listener("ngSubmit", function EditHouseholdComponent_div_0_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "div", 8)(9, "h2", 9);
    \u0275\u0275text(10, "Household Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10)(12, "label", 11);
    \u0275\u0275text(13, "Address ");
    \u0275\u0275elementStart(14, "span", 12);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "textarea", 13);
    \u0275\u0275twoWayListener("ngModelChange", function EditHouseholdComponent_div_0_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.address, $event) || (ctx_r1.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "div", 10)(19, "label", 15);
    \u0275\u0275text(20, "Purok ");
    \u0275\u0275elementStart(21, "span", 12);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function EditHouseholdComponent_div_0_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.purok, $event) || (ctx_r1.purok = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 17);
    \u0275\u0275text(25, "Select purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 18);
    \u0275\u0275text(27, "Purok 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 19);
    \u0275\u0275text(29, "Purok 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 20);
    \u0275\u0275text(31, "Purok 3");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "div", 8)(33, "h2", 9);
    \u0275\u0275text(34, "Location on Map (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 21);
    \u0275\u0275text(36, " Click on the map to update this household's approximate location. This will be used in the Household Map view. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 22);
    \u0275\u0275element(38, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, EditHouseholdComponent_div_0_div_39_Template, 7, 2, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 8)(41, "h2", 9);
    \u0275\u0275text(42, "Head of Household");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 10)(44, "label", 25);
    \u0275\u0275text(45, "Select Head of Household ");
    \u0275\u0275elementStart(46, "span", 12);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function EditHouseholdComponent_div_0_Template_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedHeadResidentId, $event) || (ctx_r1.selectedHeadResidentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(49, "option", 17);
    \u0275\u0275text(50, "Select a resident");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(51, EditHouseholdComponent_div_0_For_52_Template, 2, 5, "option", 27, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(53, EditHouseholdComponent_div_0_Conditional_53_Template, 2, 0, "p", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 8)(55, "h2", 9);
    \u0275\u0275text(56, "Additional Household Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p", 29);
    \u0275\u0275text(58, "Add other family members (sister, brother, father, mother, etc.). Optional.");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(59, EditHouseholdComponent_div_0_For_60_Template, 22, 4, "div", 30, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(61, "button", 31);
    \u0275\u0275listener("click", function EditHouseholdComponent_div_0_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addMemberRow());
    });
    \u0275\u0275text(62, "+ Add member");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(63, EditHouseholdComponent_div_0_Conditional_63_Template, 2, 1, "div", 32);
    \u0275\u0275conditionalCreate(64, EditHouseholdComponent_div_0_Conditional_64_Template, 2, 0, "div", 33);
    \u0275\u0275elementStart(65, "div", 34)(66, "button", 35);
    \u0275\u0275listener("click", function EditHouseholdComponent_div_0_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(67, "Reset Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 36);
    \u0275\u0275text(69, "Save Changes");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.address);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.purok);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx_r1.latitude !== null && ctx_r1.longitude !== null);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedHeadResidentId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.availableResidents);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.availableResidents.length === 0 ? 53 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.additionalMembers);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.error ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitted ? 64 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.submitted || ctx_r1.availableResidents.length === 0);
  }
}
function EditHouseholdComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "p");
    \u0275\u0275text(2, " Household not found. ");
    \u0275\u0275elementStart(3, "a", 44);
    \u0275\u0275listener("click", function EditHouseholdComponent_div_1_Template_a_click_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.navigateBackToDetails();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(4, "Back to Households");
    \u0275\u0275elementEnd()()();
  }
}
var EditHouseholdComponent = class _EditHouseholdComponent {
  constructor(route, router, data) {
    this.route = route;
    this.router = router;
    this.data = data;
    this.householdId = "";
    this.address = "";
    this.purok = "";
    this.selectedHeadResidentId = "";
    this.additionalMembers = [];
    this.submitted = false;
    this.error = "";
    this.latitude = null;
    this.longitude = null;
    this.map = null;
    this.marker = null;
    this.defaultCenter = [8.574, 124.776];
    this.defaultZoom = 17;
    this.RELATIONSHIP_OPTIONS = ["Spouse", "Father", "Mother", "Son", "Daughter", "Brother", "Sister", "Grandfather", "Grandmother", "Other"];
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.householdId = id;
        this.household = this.data.getHouseholdById(id);
        if (this.household) {
          this.address = this.household.address;
          this.purok = this.household.purok;
          this.latitude = this.household.latitude ?? null;
          this.longitude = this.household.longitude ?? null;
          const head = this.household.members.find((m) => m.relationship === "Head");
          if (head) {
            const headResident = this.data.getResidentByResidentId(head.residentId);
            this.selectedHeadResidentId = headResident?.id ?? "";
          }
          const others = this.household.members.filter((m) => m.relationship !== "Head");
          this.additionalMembers = others.map((m) => {
            const r = this.data.getResidentByResidentId(m.residentId);
            return { residentId: r?.id ?? "", relationship: m.relationship };
          });
          if (this.additionalMembers.length === 0) {
            this.additionalMembers = [{ residentId: "", relationship: "" }];
          }
        }
      }
    });
  }
  ngAfterViewInit() {
    this.initMap();
    this.updateMarker();
  }
  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
    this.marker = null;
  }
  /** Residents not in other households (so they can be assigned), or already in this household */
  get availableResidents() {
    return this.data.residents.filter((r) => {
      const inOtherHousehold = this.data.households.some((h) => h.id !== this.householdId && h.members.some((m) => m.residentId === r.residentId));
      return !inOtherHousehold;
    });
  }
  getAvailableResidentsForMember(rowIndex) {
    const headId = this.selectedHeadResidentId;
    return this.availableResidents.filter((r) => r.id !== headId && !this.additionalMembers.some((m, j) => j !== rowIndex && m.residentId === r.id));
  }
  navigateBackToDetails() {
    if (!this.householdId)
      return;
    const isAdminPath = this.router.url.startsWith("/admin");
    const base = isAdminPath ? "/admin" : "/staff";
    this.router.navigate([base, "households", this.householdId]);
  }
  addMemberRow() {
    this.additionalMembers.push({ residentId: "", relationship: "" });
  }
  removeMemberRow(index) {
    this.additionalMembers.splice(index, 1);
  }
  submit() {
    if (!this.household)
      return;
    if (!this.address?.trim() || !this.purok || !this.selectedHeadResidentId) {
      this.error = "Please fill in all required fields (Address, Purok, Head of Household)";
      return;
    }
    const headResident = this.data.getResidentById(this.selectedHeadResidentId);
    if (!headResident) {
      this.error = "Selected head of household not found";
      return;
    }
    const headMember = {
      residentId: headResident.residentId,
      name: headResident.name,
      age: headResident.age,
      gender: headResident.gender,
      relationship: "Head",
      birthdate: headResident.birthdate,
      civilStatus: headResident.civilStatus
    };
    const members = [headMember];
    for (const row of this.additionalMembers) {
      if (!row.residentId || !row.relationship)
        continue;
      const resident = this.data.getResidentById(row.residentId);
      if (resident) {
        members.push({
          residentId: resident.residentId,
          name: resident.name,
          age: resident.age,
          gender: resident.gender,
          relationship: row.relationship,
          birthdate: resident.birthdate,
          civilStatus: resident.civilStatus
        });
      }
    }
    this.data.updateHousehold(this.householdId, {
      address: this.address.trim(),
      purok: this.purok,
      headId: this.selectedHeadResidentId,
      members,
      // Persist selected coordinates (if any)
      latitude: this.latitude ?? null,
      longitude: this.longitude ?? null
    });
    this.submitted = true;
    this.error = "";
    setTimeout(() => {
      const isAdminPath = this.router.url.startsWith("/admin");
      const base = isAdminPath ? "/admin" : "/staff";
      this.router.navigate([base, "households", this.householdId]);
    }, 1500);
  }
  reset() {
    if (this.household) {
      this.address = this.household.address;
      this.purok = this.household.purok;
      const head = this.household.members.find((m) => m.relationship === "Head");
      if (head) {
        const headResident = this.data.getResidentByResidentId(head.residentId);
        this.selectedHeadResidentId = headResident?.id ?? "";
      }
      const others = this.household.members.filter((m) => m.relationship !== "Head");
      this.additionalMembers = others.map((m) => {
        const r = this.data.getResidentByResidentId(m.residentId);
        return { residentId: r?.id ?? "", relationship: m.relationship };
      });
      if (this.additionalMembers.length === 0) {
        this.additionalMembers = [{ residentId: "", relationship: "" }];
      }
    }
    this.submitted = false;
    this.error = "";
    if (this.household) {
      this.latitude = this.household.latitude ?? null;
      this.longitude = this.household.longitude ?? null;
    } else {
      this.latitude = null;
      this.longitude = null;
    }
    this.updateMarker();
  }
  /**
   * Initialize Leaflet map for selecting household location
   */
  initMap() {
    if (this.map)
      return;
    this.map = L.map("edit-household-map", {
      center: this.defaultCenter,
      zoom: this.defaultZoom
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(this.map);
    this.map.on("click", (e) => this.onMapClick(e));
    setTimeout(() => {
      this.map?.invalidateSize();
      this.updateMarker();
    }, 0);
  }
  onMapClick(e) {
    this.latitude = e.latlng.lat;
    this.longitude = e.latlng.lng;
    this.updateMarker();
  }
  updateMarker() {
    if (!this.map)
      return;
    if (this.latitude == null || this.longitude == null) {
      if (this.marker) {
        this.map.removeLayer(this.marker);
        this.marker = null;
      }
      this.map.setView(this.defaultCenter, this.defaultZoom);
      return;
    }
    const position = [this.latitude, this.longitude];
    if (this.marker) {
      this.marker.setLatLng(position);
    } else {
      this.marker = L.circleMarker(position, {
        radius: 8,
        weight: 2,
        color: "#2563eb",
        fillColor: "#3b82f6",
        fillOpacity: 0.9
      }).addTo(this.map);
    }
    this.map.setView(position, this.defaultZoom);
  }
  clearLocation() {
    this.latitude = null;
    this.longitude = null;
    if (this.map && this.marker) {
      this.map.removeLayer(this.marker);
    }
    this.marker = null;
  }
  static {
    this.\u0275fac = function EditHouseholdComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditHouseholdComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditHouseholdComponent, selectors: [["app-edit-household"]], decls: 2, vars: 2, consts: [["class", "edit-household", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "edit-household"], [1, "page-header"], [1, "page-title"], ["href", "#", 1, "btn", "btn--outline", "back-link-corner", 3, "click"], [1, "form-card", "card"], [3, "ngSubmit"], [1, "form-section"], [1, "section-title"], [1, "form-group"], ["for", "address"], [1, "required"], ["id", "address", "name", "address", "rows", "3", "placeholder", "Enter complete address", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["for", "purok"], ["id", "purok", "name", "purok", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Purok 1"], ["value", "Purok 2"], ["value", "Purok 3"], [1, "help-text"], [1, "household-location-map-wrapper"], ["id", "edit-household-map", "aria-label", "Set household location on map", 1, "household-location-map"], ["class", "household-location-coords", 4, "ngIf"], ["for", "headResident"], ["id", "headResident", "name", "headResident", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "help-text", 2, "margin-top", "0.5rem", "color", "var(--color-text-muted)", "font-size", "0.875rem"], [1, "help-text", 2, "margin-bottom", "1rem"], [1, "member-row"], ["type", "button", 1, "btn", "btn--outline", "btn--sm", 3, "click"], [1, "error-msg"], [1, "success-msg"], [1, "form-actions"], ["type", "button", 1, "btn", "btn--outline", 3, "click"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], [1, "household-location-coords"], [1, "form-group", "member-resident"], [1, "form-control", 3, "ngModelChange", "ngModel", "name"], [1, "form-group", "member-relationship"], [1, "form-group", "member-actions"], ["type", "button", "title", "Remove member", 1, "btn", "btn--outline", "btn--sm", 3, "click"], [1, "card"], ["href", "#", 3, "click"]], template: function EditHouseholdComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EditHouseholdComponent_div_0_Template, 70, 8, "div", 0)(1, EditHouseholdComponent_div_1_Template, 5, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.household);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.household && ctx.householdId);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n.edit-household[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  position: relative;\n  padding-right: 220px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header[_ngcontent-%COMP%]   .back-link-corner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .page-header[_ngcontent-%COMP%]   .back-link-corner[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.form-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 1.25rem;\n  color: var(--color-text);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.member-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr auto;\n  gap: 1rem;\n  align-items: end;\n  margin-bottom: 1rem;\n}\n.member-row[_ngcontent-%COMP%]   .member-resident[_ngcontent-%COMP%], \n.member-row[_ngcontent-%COMP%]   .member-relationship[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  min-width: 0;\n}\n.member-row[_ngcontent-%COMP%]   .member-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.member-row[_ngcontent-%COMP%]   .member-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .member-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    align-items: stretch;\n  }\n  .member-row[_ngcontent-%COMP%]   .member-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: var(--color-text);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-bg-card);\n  font-size: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: var(--radius);\n  color: #dc2626;\n  margin-bottom: 1rem;\n  font-size: 0.9375rem;\n}\n.success-msg[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: var(--color-success-bg);\n  border: 1px solid var(--color-success);\n  border-radius: var(--radius);\n  color: var(--color-success);\n  margin-bottom: 1rem;\n  font-weight: 500;\n  font-size: 0.9375rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.help-text[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.help-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-decoration: underline;\n}\n.household-location-map-wrapper[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.household-location-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 320px;\n}\n.household-location-coords[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.household-location-coords[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=edit-household.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditHouseholdComponent, [{
    type: Component,
    args: [{ selector: "app-edit-household", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="edit-household" *ngIf="household">\r
  <div class="page-header">\r
    <h1 class="page-title">Edit Household</h1>\r
    <a href="#" (click)="navigateBackToDetails(); $event.preventDefault()" class="btn btn--outline back-link-corner">\r
      \u2190 Back to Household Details\r
    </a>\r
  </div>\r
\r
  <div class="form-card card">\r
    <form (ngSubmit)="submit()">\r
      <div class="form-section">\r
        <h2 class="section-title">Household Information</h2>\r
        \r
        <div class="form-group">\r
          <label for="address">Address <span class="required">*</span></label>\r
          <textarea\r
            id="address"\r
            class="form-control"\r
            [(ngModel)]="address"\r
            name="address"\r
            rows="3"\r
            placeholder="Enter complete address"\r
            required\r
          ></textarea>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="purok">Purok <span class="required">*</span></label>\r
            <select id="purok" class="form-control" [(ngModel)]="purok" name="purok" required>\r
              <option value="">Select purok</option>\r
              <option value="Purok 1">Purok 1</option>\r
              <option value="Purok 2">Purok 2</option>\r
              <option value="Purok 3">Purok 3</option>\r
            </select>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-section">\r
        <h2 class="section-title">Location on Map (optional)</h2>\r
        <p class="help-text">\r
          Click on the map to update this household's approximate location. This will be used in the Household Map view.\r
        </p>\r
        <div class="household-location-map-wrapper">\r
          <div\r
            id="edit-household-map"\r
            class="household-location-map"\r
            aria-label="Set household location on map"\r
          ></div>\r
        </div>\r
        <div class="household-location-coords" *ngIf="latitude !== null && longitude !== null">\r
          <span>Lat: {{ latitude }}</span>\r
          <span>Lng: {{ longitude }}</span>\r
          <button\r
            type="button"\r
            class="btn btn--outline btn--sm"\r
            (click)="clearLocation()"\r
          >\r
            Clear location\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div class="form-section">\r
        <h2 class="section-title">Head of Household</h2>\r
        \r
        <div class="form-group">\r
          <label for="headResident">Select Head of Household <span class="required">*</span></label>\r
          <select \r
            id="headResident" \r
            class="form-control" \r
            [(ngModel)]="selectedHeadResidentId" \r
            name="headResident" \r
            required\r
          >\r
            <option value="">Select a resident</option>\r
            @for (resident of availableResidents; track resident.id) {\r
              <option [value]="resident.id">\r
                {{ resident.residentId }} - {{ resident.name }} ({{ resident.age }}, {{ resident.gender }})\r
              </option>\r
            }\r
          </select>\r
          @if (availableResidents.length === 0) {\r
            <p class="help-text" style="margin-top: 0.5rem; color: var(--color-text-muted); font-size: 0.875rem;">\r
              No available residents. All residents are already assigned to other households.\r
            </p>\r
          }\r
        </div>\r
      </div>\r
\r
      <div class="form-section">\r
        <h2 class="section-title">Additional Household Members</h2>\r
        <p class="help-text" style="margin-bottom: 1rem;">Add other family members (sister, brother, father, mother, etc.). Optional.</p>\r
        @for (member of additionalMembers; track $index) {\r
          <div class="member-row">\r
            <div class="form-group member-resident">\r
              <label>Resident</label>\r
              <select \r
                class="form-control" \r
                [(ngModel)]="member.residentId" \r
                [name]="'memberResident' + $index"\r
              >\r
                <option value="">Select resident</option>\r
                @for (resident of getAvailableResidentsForMember($index); track resident.id) {\r
                  <option [value]="resident.id">\r
                    {{ resident.residentId }} - {{ resident.name }} ({{ resident.age }}, {{ resident.gender }})\r
                  </option>\r
                }\r
              </select>\r
            </div>\r
            <div class="form-group member-relationship">\r
              <label>Relationship</label>\r
              <select \r
                class="form-control" \r
                [(ngModel)]="member.relationship" \r
                [name]="'memberRelationship' + $index"\r
              >\r
                <option value="">Select relationship</option>\r
                @for (rel of RELATIONSHIP_OPTIONS; track rel) {\r
                  <option [value]="rel">{{ rel }}</option>\r
                }\r
              </select>\r
            </div>\r
            <div class="form-group member-actions">\r
              <label>&nbsp;</label>\r
              <button type="button" class="btn btn--outline btn--sm" (click)="removeMemberRow($index)" title="Remove member">Remove</button>\r
            </div>\r
          </div>\r
        }\r
        <button type="button" class="btn btn--outline btn--sm" (click)="addMemberRow()">+ Add member</button>\r
      </div>\r
\r
      @if (error) {\r
        <div class="error-msg">{{ error }}</div>\r
      }\r
\r
      @if (submitted) {\r
        <div class="success-msg">Household updated successfully! Redirecting to household details...</div>\r
      }\r
\r
      <div class="form-actions">\r
        <button type="button" class="btn btn--outline" (click)="reset()">Reset Form</button>\r
        <button type="submit" class="btn btn--primary" [disabled]="submitted || availableResidents.length === 0">Save Changes</button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
\r
<div *ngIf="!household && householdId" class="card">\r
  <p>\r
    Household not found.\r
    <a href="#" (click)="navigateBackToDetails(); $event.preventDefault()">Back to Households</a>\r
  </p>\r
</div>\r
`, styles: ["/* src/app/pages/edit-household/edit-household.component.scss */\n.edit-household {\n  width: 100%;\n  position: relative;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  position: relative;\n  padding-right: 220px;\n}\n.page-header .page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header .back-link-corner {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .page-header {\n    padding-right: 0;\n  }\n  .page-header .back-link-corner {\n    position: static;\n    transform: none;\n  }\n}\n.form-card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.form-section {\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.form-section:last-of-type {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.form-section .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 1.25rem;\n  color: var(--color-text);\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.member-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr auto;\n  gap: 1rem;\n  align-items: end;\n  margin-bottom: 1rem;\n}\n.member-row .member-resident,\n.member-row .member-relationship {\n  margin-bottom: 0;\n  min-width: 0;\n}\n.member-row .member-actions {\n  margin-bottom: 0;\n}\n.member-row .member-actions .btn {\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .member-row {\n    grid-template-columns: 1fr;\n    align-items: stretch;\n  }\n  .member-row .member-actions .btn {\n    width: 100%;\n  }\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: var(--color-text);\n}\n.form-group label .required {\n  color: #dc2626;\n}\n.form-group .form-control {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-bg-card);\n  font-size: 1rem;\n}\n.form-group .form-control:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\n.form-group .form-control::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group textarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-msg {\n  padding: 12px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: var(--radius);\n  color: #dc2626;\n  margin-bottom: 1rem;\n  font-size: 0.9375rem;\n}\n.success-msg {\n  padding: 12px 16px;\n  background: var(--color-success-bg);\n  border: 1px solid var(--color-success);\n  border-radius: var(--radius);\n  color: var(--color-success);\n  margin-bottom: 1rem;\n  font-weight: 500;\n  font-size: 0.9375rem;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.form-actions .btn {\n  min-width: 120px;\n}\n.form-actions .btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.help-text {\n  margin-top: 0.5rem;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.help-text a {\n  color: var(--color-primary);\n  text-decoration: underline;\n}\n.household-location-map-wrapper {\n  margin-top: 0.75rem;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.household-location-map {\n  width: 100%;\n  height: 320px;\n}\n.household-location-coords {\n  margin-top: 0.75rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.household-location-coords span {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=edit-household.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditHouseholdComponent, { className: "EditHouseholdComponent", filePath: "src/app/pages/edit-household/edit-household.component.ts", lineNumber: 15 });
})();
export {
  EditHouseholdComponent
};
//# sourceMappingURL=chunk-GF46WBBU.js.map
