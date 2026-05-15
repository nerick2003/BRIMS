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
  Router,
  RouterLink
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

// src/app/pages/add-household/add-household.component.ts
var L = __toESM(require_leaflet_src());
var _forTrack0 = ($index, $item) => $item.id;
function AddHouseholdComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function AddHouseholdComponent_div_39_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearLocation());
    });
    \u0275\u0275text(6, " Clear location ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lat: ", ctx_r1.latitude);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lng: ", ctx_r1.longitude);
  }
}
function AddHouseholdComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resident_r3 = ctx.$implicit;
    \u0275\u0275property("value", resident_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", resident_r3.residentId, " - ", resident_r3.name, " (", resident_r3.age, ", ", resident_r3.gender, ") ");
  }
}
function AddHouseholdComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, " No available residents. All residents are already assigned to households. ");
    \u0275\u0275elementStart(2, "a", 36);
    \u0275\u0275text(3, "Add a new resident first");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". ");
    \u0275\u0275elementEnd();
  }
}
function AddHouseholdComponent_For_60_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resident_r6 = ctx.$implicit;
    \u0275\u0275property("value", resident_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", resident_r6.residentId, " - ", resident_r6.name, " (", resident_r6.age, ", ", resident_r6.gender, ") ");
  }
}
function AddHouseholdComponent_For_60_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rel_r7 = ctx.$implicit;
    \u0275\u0275property("value", rel_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rel_r7);
  }
}
function AddHouseholdComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 37)(2, "label");
    \u0275\u0275text(3, "Resident");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function AddHouseholdComponent_For_60_Template_select_ngModelChange_4_listener($event) {
      const member_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(member_r5.residentId, $event) || (member_r5.residentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 15);
    \u0275\u0275text(6, "Select resident");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, AddHouseholdComponent_For_60_For_8_Template, 2, 5, "option", 25, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 39)(10, "label");
    \u0275\u0275text(11, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function AddHouseholdComponent_For_60_Template_select_ngModelChange_12_listener($event) {
      const member_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(member_r5.relationship, $event) || (member_r5.relationship = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 15);
    \u0275\u0275text(14, "Select relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, AddHouseholdComponent_For_60_For_16_Template, 2, 2, "option", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 40)(18, "label");
    \u0275\u0275text(19, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 41);
    \u0275\u0275listener("click", function AddHouseholdComponent_For_60_Template_button_click_20_listener() {
      const $index_r8 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeMemberRow($index_r8));
    });
    \u0275\u0275text(21, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r5 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", member_r5.residentId);
    \u0275\u0275property("name", "memberResident" + $index_r8);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.getAvailableResidentsForMember($index_r8));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", member_r5.relationship);
    \u0275\u0275property("name", "memberRelationship" + $index_r8);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.RELATIONSHIP_OPTIONS);
  }
}
function AddHouseholdComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function AddHouseholdComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, "Household added successfully! Redirecting to households list...");
    \u0275\u0275elementEnd();
  }
}
var AddHouseholdComponent = class _AddHouseholdComponent {
  constructor(data, router) {
    this.data = data;
    this.router = router;
    this.household = {
      address: "",
      purok: "",
      headId: ""
    };
    this.latitude = null;
    this.longitude = null;
    this.map = null;
    this.marker = null;
    this.defaultCenter = [8.574, 124.776];
    this.defaultZoom = 17;
    this.selectedHeadResidentId = "";
    this.additionalMembers = [];
    this.submitted = false;
    this.error = "";
    this.RELATIONSHIP_OPTIONS = ["Spouse", "Father", "Mother", "Son", "Daughter", "Brother", "Sister", "Grandfather", "Grandmother", "Other"];
  }
  get availableResidents() {
    const residentsInHouseholds = /* @__PURE__ */ new Set();
    this.data.households.forEach((h) => {
      h.members.forEach((m) => residentsInHouseholds.add(m.residentId));
    });
    return this.data.residents.filter((r) => !residentsInHouseholds.has(r.residentId));
  }
  ngAfterViewInit() {
    this.initMap();
  }
  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
    this.marker = null;
  }
  /** Residents available for additional members: not head, not already chosen in another row (row.residentId = internal id) */
  getAvailableResidentsForMember(rowIndex) {
    const headId = this.selectedHeadResidentId;
    return this.availableResidents.filter((r) => r.id !== headId && !this.additionalMembers.some((m, j) => j !== rowIndex && m.residentId === r.id));
  }
  addMemberRow() {
    this.additionalMembers.push({ residentId: "", relationship: "" });
  }
  removeMemberRow(index) {
    this.additionalMembers.splice(index, 1);
  }
  submit() {
    if (!this.household.address || !this.household.purok || !this.selectedHeadResidentId) {
      this.error = "Please fill in all required fields (Address, Purok, Head of Household)";
      return;
    }
    const headResident = this.data.residents.find((r) => r.id === this.selectedHeadResidentId);
    if (!headResident) {
      this.error = "Selected head of household not found";
      return;
    }
    const existingIds = this.data.households.map((h) => {
      const match = h.householdId.match(/HH-(\d+)/);
      return match ? parseInt(match[1]) : 0;
    });
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
    const nextIdNum = maxId + 1;
    const householdId = `HH-${String(nextIdNum).padStart(3, "0")}`;
    const nextId = `h${this.data.households.length + 1}`;
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
    const duplicateReason = this.data.getHouseholdDuplicateReason({
      headId: this.selectedHeadResidentId,
      members,
      address: this.household.address,
      purok: this.household.purok
    });
    if (duplicateReason) {
      this.error = duplicateReason;
      return;
    }
    const newHousehold = {
      id: nextId,
      householdId,
      headId: this.selectedHeadResidentId,
      address: this.household.address,
      purok: this.household.purok,
      // Coordinates are optional; only set if user clicked on the map
      latitude: this.latitude ?? null,
      longitude: this.longitude ?? null,
      members
    };
    this.data.addHousehold(newHousehold);
    this.submitted = true;
    this.error = "";
    setTimeout(() => {
      const isAdminPath = this.router.url.startsWith("/admin");
      const base = isAdminPath ? "/admin" : "/staff";
      this.router.navigate([base, "households"]);
    }, 1500);
  }
  reset() {
    this.household = {
      address: "",
      purok: "",
      headId: ""
    };
    this.selectedHeadResidentId = "";
    this.additionalMembers = [];
    this.submitted = false;
    this.error = "";
    this.clearLocation();
  }
  /**
   * Initialize Leaflet map for selecting household location
   */
  initMap() {
    if (this.map)
      return;
    this.map = L.map("add-household-map", {
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
    }, 0);
  }
  onMapClick(e) {
    this.latitude = e.latlng.lat;
    this.longitude = e.latlng.lng;
    this.updateMarker();
  }
  updateMarker() {
    if (!this.map || this.latitude == null || this.longitude == null)
      return;
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
    this.\u0275fac = function AddHouseholdComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddHouseholdComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddHouseholdComponent, selectors: [["app-add-household"]], decls: 70, vars: 8, consts: [[1, "add-household"], [1, "page-header"], [1, "page-title"], ["routerLink", "/staff/households", 1, "btn", "btn--outline", "back-button"], [1, "form-card", "card"], [3, "ngSubmit"], [1, "form-section"], [1, "section-title"], [1, "form-group"], ["for", "address"], [1, "required"], ["id", "address", "name", "address", "rows", "3", "placeholder", "Enter complete address", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["for", "purok"], ["id", "purok", "name", "purok", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Purok 1"], ["value", "Purok 2"], ["value", "Purok 3"], [1, "help-text"], [1, "household-location-map-wrapper"], ["id", "add-household-map", "aria-label", "Set household location on map", 1, "household-location-map"], ["class", "household-location-coords", 4, "ngIf"], ["for", "headResident"], ["id", "headResident", "name", "headResident", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "help-text", 2, "margin-top", "0.5rem", "color", "var(--color-text-muted)", "font-size", "0.875rem"], [1, "help-text", 2, "margin-bottom", "1rem"], [1, "member-row"], ["type", "button", 1, "btn", "btn--outline", "btn--sm", 3, "click"], [1, "error-msg"], [1, "success-msg"], [1, "form-actions"], ["type", "button", 1, "btn", "btn--outline", 3, "click"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], [1, "household-location-coords"], ["routerLink", "/staff/residents/add"], [1, "form-group", "member-resident"], [1, "form-control", 3, "ngModelChange", "ngModel", "name"], [1, "form-group", "member-relationship"], [1, "form-group", "member-actions"], ["type", "button", "title", "Remove member", 1, "btn", "btn--outline", "btn--sm", 3, "click"]], template: function AddHouseholdComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Add New Household");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 3);
        \u0275\u0275text(5, "\u2190 Back to Households List");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "form", 5);
        \u0275\u0275listener("ngSubmit", function AddHouseholdComponent_Template_form_ngSubmit_7_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(8, "div", 6)(9, "h2", 7);
        \u0275\u0275text(10, "Household Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "label", 9);
        \u0275\u0275text(13, "Address ");
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "textarea", 11);
        \u0275\u0275twoWayListener("ngModelChange", function AddHouseholdComponent_Template_textarea_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.household.address, $event) || (ctx.household.address = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 12)(18, "div", 8)(19, "label", 13);
        \u0275\u0275text(20, "Purok ");
        \u0275\u0275elementStart(21, "span", 10);
        \u0275\u0275text(22, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function AddHouseholdComponent_Template_select_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.household.purok, $event) || (ctx.household.purok = $event);
          return $event;
        });
        \u0275\u0275elementStart(24, "option", 15);
        \u0275\u0275text(25, "Select purok");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "option", 16);
        \u0275\u0275text(27, "Purok 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "option", 17);
        \u0275\u0275text(29, "Purok 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "option", 18);
        \u0275\u0275text(31, "Purok 3");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(32, "div", 6)(33, "h2", 7);
        \u0275\u0275text(34, "Location on Map (optional)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 19);
        \u0275\u0275text(36, " Click on the map to set this household's approximate location. This will be used in the Household Map view. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 20);
        \u0275\u0275element(38, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, AddHouseholdComponent_div_39_Template, 7, 2, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 6)(41, "h2", 7);
        \u0275\u0275text(42, "Head of Household");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 8)(44, "label", 23);
        \u0275\u0275text(45, "Select Head of Household ");
        \u0275\u0275elementStart(46, "span", 10);
        \u0275\u0275text(47, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "select", 24);
        \u0275\u0275twoWayListener("ngModelChange", function AddHouseholdComponent_Template_select_ngModelChange_48_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedHeadResidentId, $event) || (ctx.selectedHeadResidentId = $event);
          return $event;
        });
        \u0275\u0275elementStart(49, "option", 15);
        \u0275\u0275text(50, "Select a resident");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(51, AddHouseholdComponent_For_52_Template, 2, 5, "option", 25, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(53, AddHouseholdComponent_Conditional_53_Template, 5, 0, "p", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 6)(55, "h2", 7);
        \u0275\u0275text(56, "Additional Household Members");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p", 27);
        \u0275\u0275text(58, "Add other family members (sister, brother, father, mother, etc.). Optional.");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(59, AddHouseholdComponent_For_60_Template, 22, 4, "div", 28, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(61, "button", 29);
        \u0275\u0275listener("click", function AddHouseholdComponent_Template_button_click_61_listener() {
          return ctx.addMemberRow();
        });
        \u0275\u0275text(62, "+ Add member");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(63, AddHouseholdComponent_Conditional_63_Template, 2, 1, "div", 30);
        \u0275\u0275conditionalCreate(64, AddHouseholdComponent_Conditional_64_Template, 2, 0, "div", 31);
        \u0275\u0275elementStart(65, "div", 32)(66, "button", 33);
        \u0275\u0275listener("click", function AddHouseholdComponent_Template_button_click_66_listener() {
          return ctx.reset();
        });
        \u0275\u0275text(67, "Reset Form");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "button", 34);
        \u0275\u0275text(69, "Add Household");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275twoWayProperty("ngModel", ctx.household.address);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.household.purok);
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.latitude !== null && ctx.longitude !== null);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedHeadResidentId);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.availableResidents);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.availableResidents.length === 0 ? 53 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.additionalMembers);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.error ? 63 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted ? 64 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.submitted || ctx.availableResidents.length === 0);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ["\n.add-household[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  position: relative;\n  padding-right: 180px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.page-header[_ngcontent-%COMP%] {\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 0.75rem;\n    padding-right: 0;\n    text-align: center;\n  }\n  .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .page-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n    width: auto;\n    text-align: center;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.form-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 1.25rem;\n  color: var(--color-text);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.member-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr auto;\n  gap: 1rem;\n  align-items: end;\n  margin-bottom: 1rem;\n}\n.member-row[_ngcontent-%COMP%]   .member-resident[_ngcontent-%COMP%], \n.member-row[_ngcontent-%COMP%]   .member-relationship[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  min-width: 0;\n}\n.member-row[_ngcontent-%COMP%]   .member-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.member-row[_ngcontent-%COMP%]   .member-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .member-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    align-items: stretch;\n  }\n  .member-row[_ngcontent-%COMP%]   .member-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: var(--color-text);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-bg-card);\n  font-size: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: var(--radius);\n  color: #dc2626;\n  margin-bottom: 1rem;\n  font-size: 0.9375rem;\n}\n.success-msg[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: var(--color-success-bg);\n  border: 1px solid var(--color-success);\n  border-radius: var(--radius);\n  color: var(--color-success);\n  margin-bottom: 1rem;\n  font-weight: 500;\n  font-size: 0.9375rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.help-text[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.help-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  text-decoration: underline;\n}\n.household-location-map-wrapper[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.household-location-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 320px;\n}\n.household-location-coords[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.household-location-coords[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=add-household.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddHouseholdComponent, [{
    type: Component,
    args: [{ selector: "app-add-household", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="add-household">\r
  <div class="page-header">\r
    <h1 class="page-title">Add New Household</h1>\r
    <a routerLink="/staff/households" class="btn btn--outline back-button">\u2190 Back to Households List</a>\r
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
            [(ngModel)]="household.address"\r
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
            <select id="purok" class="form-control" [(ngModel)]="household.purok" name="purok" required>\r
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
          Click on the map to set this household's approximate location. This will be used in the Household Map view.\r
        </p>\r
        <div class="household-location-map-wrapper">\r
          <div\r
            id="add-household-map"\r
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
              No available residents. All residents are already assigned to households. \r
              <a routerLink="/staff/residents/add">Add a new resident first</a>.\r
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
        <div class="success-msg">Household added successfully! Redirecting to households list...</div>\r
      }\r
\r
      <div class="form-actions">\r
        <button type="button" class="btn btn--outline" (click)="reset()">Reset Form</button>\r
        <button type="submit" class="btn btn--primary" [disabled]="submitted || availableResidents.length === 0">Add Household</button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/add-household/add-household.component.scss */\n.add-household {\n  width: 100%;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  position: relative;\n  padding-right: 180px;\n}\n.page-header .page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header .back-button {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.page-header {\n}\n@media (max-width: 640px) {\n  .page-header {\n    flex-direction: column;\n    align-items: center;\n    gap: 0.75rem;\n    padding-right: 0;\n    text-align: center;\n  }\n  .page-header .page-title {\n    font-size: 1.25rem;\n  }\n  .page-header .back-button {\n    position: static;\n    transform: none;\n    width: auto;\n    text-align: center;\n  }\n}\n.form-card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.form-section {\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.form-section:last-of-type {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.form-section .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 1.25rem;\n  color: var(--color-text);\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.member-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr auto;\n  gap: 1rem;\n  align-items: end;\n  margin-bottom: 1rem;\n}\n.member-row .member-resident,\n.member-row .member-relationship {\n  margin-bottom: 0;\n  min-width: 0;\n}\n.member-row .member-actions {\n  margin-bottom: 0;\n}\n.member-row .member-actions .btn {\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .member-row {\n    grid-template-columns: 1fr;\n    align-items: stretch;\n  }\n  .member-row .member-actions .btn {\n    width: 100%;\n  }\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: var(--color-text);\n}\n.form-group label .required {\n  color: #dc2626;\n}\n.form-group .form-control {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-bg-card);\n  font-size: 1rem;\n}\n.form-group .form-control:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\n.form-group .form-control::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group textarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-msg {\n  padding: 12px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: var(--radius);\n  color: #dc2626;\n  margin-bottom: 1rem;\n  font-size: 0.9375rem;\n}\n.success-msg {\n  padding: 12px 16px;\n  background: var(--color-success-bg);\n  border: 1px solid var(--color-success);\n  border-radius: var(--radius);\n  color: var(--color-success);\n  margin-bottom: 1rem;\n  font-weight: 500;\n  font-size: 0.9375rem;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.form-actions .btn {\n  min-width: 120px;\n}\n.form-actions .btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.help-text {\n  margin-top: 0.5rem;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.help-text a {\n  color: var(--color-primary);\n  text-decoration: underline;\n}\n.household-location-map-wrapper {\n  margin-top: 0.75rem;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.household-location-map {\n  width: 100%;\n  height: 320px;\n}\n.household-location-coords {\n  margin-top: 0.75rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.household-location-coords span {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=add-household.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddHouseholdComponent, { className: "AddHouseholdComponent", filePath: "src/app/pages/add-household/add-household.component.ts", lineNumber: 15 });
})();
export {
  AddHouseholdComponent
};
//# sourceMappingURL=chunk-AEEILFU3.js.map
