import {
  require_leaflet_src
} from "./chunk-L6V6THKI.js";
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
  Router
} from "./chunk-HOXEAXWN.js";
import "./chunk-ZNESRAKE.js";
import {
  DataService
} from "./chunk-F47T3EGJ.js";
import "./chunk-EXP2T67A.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NgStyle,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MXCAMUXG.js";
import {
  __toESM
} from "./chunk-TWWAJFRB.js";

// src/app/pages/household-map/household-map.component.ts
var L = __toESM(require_leaflet_src());
var _c0 = (a0) => ({ "background-color": a0 });
var _c1 = (a0) => ({ borderColor: a0 });
function HouseholdMapComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.missingCoordinatesCount, " household", ctx_r0.missingCoordinatesCount !== 1 ? "s" : "", " have no coordinates yet and are not shown on the map. ");
  }
}
function HouseholdMapComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function HouseholdMapComponent_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275text(1, " Clear all ");
    \u0275\u0275elementEnd();
  }
}
function HouseholdMapComponent_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("value", p_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3, " ");
  }
}
function HouseholdMapComponent_option_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275property("value", s_r4.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r4.label, " ");
  }
}
function HouseholdMapComponent_option_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275property("value", r_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r5.label, " ");
  }
}
function HouseholdMapComponent_div_69_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "span", 40);
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c0, item_r6.color));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6.count, " ");
  }
}
function HouseholdMapComponent_div_69_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "h3", 36);
    \u0275\u0275text(2, "By status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275template(4, HouseholdMapComponent_div_69_div_1_div_4_Template, 6, 5, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.statusLegend);
  }
}
function HouseholdMapComponent_div_69_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "span", 43);
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c1, item_r7.color));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r7.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r7.count, " ");
  }
}
function HouseholdMapComponent_div_69_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "h3", 36);
    \u0275\u0275text(2, "By risk level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275template(4, HouseholdMapComponent_div_69_div_2_div_4_Template, 6, 5, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.riskLegend);
  }
}
function HouseholdMapComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, HouseholdMapComponent_div_69_div_1_Template, 5, 1, "div", 34)(2, HouseholdMapComponent_div_69_div_2_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.statusLegend.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.riskLegend.length);
  }
}
function HouseholdMapComponent_div_71_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 48)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", h_r8.householdId, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", h_r8.address, " (", h_r8.purok, ") ");
  }
}
function HouseholdMapComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h3", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 46);
    \u0275\u0275template(4, HouseholdMapComponent_div_71_li_4_Template, 5, 3, "li", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Households not yet mapped (", ctx_r0.missingHouseholds.length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.missingHouseholds);
  }
}
var HouseholdMapComponent = class _HouseholdMapComponent {
  get totalHouseholdsCount() {
    return this.households.length;
  }
  get mappedHouseholdsCount() {
    return this.households.filter((h) => typeof h.latitude === "number" && typeof h.longitude === "number").length;
  }
  get unmappedHouseholdsCount() {
    return this.households.filter((h) => typeof h.latitude !== "number" || typeof h.longitude !== "number").length;
  }
  get hasLegend() {
    return this.statusLegend.length > 0 || this.riskLegend.length > 0;
  }
  get hasActiveFilters() {
    return !!(this.searchTerm || this.selectedPurok || this.selectedStatusKey || this.selectedRiskKey);
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedPurok = "";
    this.selectedStatusKey = "";
    this.selectedRiskKey = "";
    this.onFiltersChanged();
  }
  constructor(data, router) {
    this.data = data;
    this.router = router;
    this.map = null;
    this.markersLayer = null;
    this.households = [];
    this.missingCoordinatesCount = 0;
    this.searchTerm = "";
    this.selectedPurok = "";
    this.selectedStatusKey = "";
    this.selectedRiskKey = "";
    this.statusColorMap = {
      active: "#16a34a",
      inactive: "#6b7280",
      relocated: "#f97316",
      "4ps": "#2563eb",
      senior: "#f59e0b",
      pwd: "#a855f7"
    };
    this.riskColorMap = {
      flood_prone: "#ef4444",
      fire_risk: "#f97316",
      normal: "#22c55e"
    };
    this.defaultCenter = [8.574, 124.776];
    this.defaultZoom = 16;
  }
  ngOnInit() {
    this.data.householdsObservable.subscribe((households) => {
      this.households = households;
      this.updateMarkers();
    });
  }
  ngAfterViewInit() {
    this.initMap();
    this.updateMarkers();
  }
  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }
  initMap() {
    if (this.map)
      return;
    this.map = L.map("household-map-container", {
      center: this.defaultCenter,
      zoom: this.defaultZoom
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(this.map);
  }
  updateMarkers() {
    if (!this.map || !this.households)
      return;
    const visibleHouseholds = this.getFilteredHouseholds();
    if (!this.markersLayer) {
      this.markersLayer = L.layerGroup().addTo(this.map);
    } else {
      this.markersLayer.clearLayers();
    }
    const bounds = [];
    this.missingCoordinatesCount = 0;
    for (const household of visibleHouseholds) {
      const { latitude, longitude } = household;
      if (typeof latitude === "number" && typeof longitude === "number") {
        const position = [latitude, longitude];
        bounds.push(position);
        const { color, fillColor } = this.getMarkerColors(household);
        const marker = L.circleMarker(position, {
          radius: 8,
          weight: 2,
          color,
          fillColor,
          fillOpacity: 0.9
        });
        marker.bindPopup(this.buildPopupContent(household), {
          autoClose: false,
          closeOnClick: false
        });
        marker.addTo(this.markersLayer);
        marker.openPopup();
      } else {
        this.missingCoordinatesCount++;
      }
    }
    if (bounds.length && this.map) {
      const latLngBounds2 = L.latLngBounds(bounds);
      this.map.fitBounds(latLngBounds2, { padding: [24, 24] });
    }
  }
  onFiltersChanged() {
    this.updateMarkers();
  }
  get purokOptions() {
    const set = /* @__PURE__ */ new Set();
    for (const h of this.households) {
      if (h.purok) {
        set.add(h.purok);
      }
    }
    return Array.from(set).sort();
  }
  get statusOptions() {
    const set = /* @__PURE__ */ new Set();
    for (const h of this.households) {
      if (h.status) {
        set.add(h.status.toLowerCase());
      }
    }
    return Array.from(set).map((key) => ({
      key,
      label: this.formatLabel(key)
    }));
  }
  get riskOptions() {
    const set = /* @__PURE__ */ new Set();
    for (const h of this.households) {
      if (h.riskLevel) {
        set.add(h.riskLevel.toLowerCase());
      }
    }
    return Array.from(set).map((key) => ({
      key,
      label: this.formatLabel(key)
    }));
  }
  get statusLegend() {
    const counts = /* @__PURE__ */ new Map();
    const households = this.getFilteredHouseholds();
    for (const h of households) {
      if (!h.status)
        continue;
      const key = h.status.toLowerCase();
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    return Array.from(counts.entries()).map(([key, count]) => ({
      key,
      label: this.formatLabel(key),
      color: this.statusColorMap[key] ?? "#2563eb",
      count
    }));
  }
  get riskLegend() {
    const counts = /* @__PURE__ */ new Map();
    const households = this.getFilteredHouseholds();
    for (const h of households) {
      if (!h.riskLevel)
        continue;
      const key = h.riskLevel.toLowerCase();
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    return Array.from(counts.entries()).map(([key, count]) => ({
      key,
      label: this.formatLabel(key),
      color: this.riskColorMap[key] ?? "#22c55e",
      count
    }));
  }
  get missingHouseholds() {
    return this.getFilteredHouseholds().filter((h) => typeof h.latitude !== "number" || typeof h.longitude !== "number");
  }
  getFilteredHouseholds() {
    let result = [...this.households];
    if (this.searchTerm) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter((h) => {
        const head = h.members.find((m) => m.relationship === "Head") ?? h.members[0];
        const headName = head ? head.name.toLowerCase() : "";
        return h.householdId.toLowerCase().includes(q) || h.address.toLowerCase().includes(q) || headName.includes(q);
      });
    }
    if (this.selectedPurok) {
      result = result.filter((h) => h.purok === this.selectedPurok);
    }
    if (this.selectedStatusKey) {
      result = result.filter((h) => (h.status || "").toLowerCase() === this.selectedStatusKey);
    }
    if (this.selectedRiskKey) {
      result = result.filter((h) => (h.riskLevel || "").toLowerCase() === this.selectedRiskKey);
    }
    this.missingCoordinatesCount = result.filter((h) => typeof h.latitude !== "number" || typeof h.longitude !== "number").length;
    return result;
  }
  getMarkerColors(household) {
    const statusKey = (household.status || "").toLowerCase();
    const riskKey = (household.riskLevel || "").toLowerCase();
    const fillColor = this.statusColorMap[statusKey] ?? "#3b82f6";
    const color = this.riskColorMap[riskKey] ?? "#2563eb";
    return { color, fillColor };
  }
  formatLabel(key) {
    return key.split(/[_\s]+/).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  }
  navigateToHouseholds() {
    const isAdminPath = this.router.url.startsWith("/admin");
    const base = isAdminPath ? "/admin" : "/staff";
    this.router.navigate([base, "households"]);
  }
  buildPopupContent(household) {
    const head = household.members.find((m) => m.relationship === "Head") ?? household.members[0];
    const headName = head ? head.name : "Unknown";
    const status = household.status || "N/A";
    const purok = household.purok || "N/A";
    return `
      <div>
        <strong>${household.householdId}</strong><br/>
        Head: ${headName}<br/>
        Address: ${household.address}<br/>
        Purok: ${purok}<br/>
        Status: ${status}
      </div>
    `;
  }
  static {
    this.\u0275fac = function HouseholdMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HouseholdMapComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HouseholdMapComponent, selectors: [["app-household-map"]], decls: 72, vars: 16, consts: [[1, "household-map-page"], [1, "page-header"], [1, "page-title"], ["href", "#", 1, "btn", "btn--outline", 3, "click"], [1, "household-map-layout", "card"], [1, "household-map-layout__top"], [1, "household-map-layout__info"], [1, "household-map-layout__summary"], ["class", "household-map-layout__warning", 4, "ngIf"], [1, "household-map-stats"], [1, "household-map-stat"], [1, "household-map-stat__label"], [1, "household-map-stat__value"], [1, "household-map-filters"], [1, "household-map-filters__header"], [1, "household-map-filters__title"], ["type", "button", "class", "household-map-filters__clear", 3, "click", 4, "ngIf"], [1, "household-map-filters__grid"], [1, "household-map-filter-group"], [1, "household-map-filter-group__label"], [1, "household-map-filter-group__icon"], [1, "household-map-filter-group__input-wrapper"], ["type", "text", "placeholder", "Household ID, head name, or address", 1, "form-control", "household-map-filter-group__input", 3, "ngModelChange", "ngModel"], [1, "form-control", "household-map-filter-group__input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "household-map-layout__body"], ["class", "household-map-legend", 4, "ngIf"], ["id", "household-map-container", "aria-label", "Barangay household map", 1, "household-map-container"], ["class", "household-map-missing", 4, "ngIf"], [1, "household-map-layout__warning"], ["type", "button", 1, "household-map-filters__clear", 3, "click"], [3, "value"], [1, "household-map-legend"], ["class", "household-map-legend__group", 4, "ngIf"], [1, "household-map-legend__group"], [1, "household-map-legend__title"], [1, "household-map-legend__items"], ["class", "household-map-legend__item", 4, "ngFor", "ngForOf"], [1, "household-map-legend__item"], [1, "household-map-legend__marker", 3, "ngStyle"], [1, "household-map-legend__label"], [1, "household-map-legend__count"], [1, "household-map-legend__marker", "household-map-legend__marker--bordered", 3, "ngStyle"], [1, "household-map-missing"], [1, "household-map-missing__title"], [1, "household-map-missing__list"], ["class", "household-map-missing__item", 4, "ngFor", "ngForOf"], [1, "household-map-missing__item"], [1, "household-map-missing__id"], [1, "household-map-missing__address"]], template: function HouseholdMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Household Map");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 3);
        \u0275\u0275listener("click", function HouseholdMapComponent_Template_a_click_4_listener($event) {
          ctx.navigateToHouseholds();
          return $event.preventDefault();
        });
        \u0275\u0275text(5, " Back to List ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p", 7);
        \u0275\u0275text(10, " Showing all households with known coordinates in the barangay. ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, HouseholdMapComponent_p_11_Template, 2, 2, "p", 8);
        \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11);
        \u0275\u0275text(15, "Total households");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10)(19, "div", 11);
        \u0275\u0275text(20, "Mapped on GIS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 12);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10)(24, "div", 11);
        \u0275\u0275text(25, "Not yet mapped");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 12);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 13)(29, "div", 14)(30, "h3", 15);
        \u0275\u0275text(31, "Filters & Search");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, HouseholdMapComponent_button_32_Template, 2, 0, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 17)(34, "div", 18)(35, "label", 19)(36, "span", 20);
        \u0275\u0275text(37, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " Search ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 21)(40, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function HouseholdMapComponent_Template_input_ngModelChange_40_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function HouseholdMapComponent_Template_input_ngModelChange_40_listener() {
          return ctx.onFiltersChanged();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 18)(42, "label", 19)(43, "span", 20);
        \u0275\u0275text(44, "\u{1F4CD}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, " Purok ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "select", 23);
        \u0275\u0275twoWayListener("ngModelChange", function HouseholdMapComponent_Template_select_ngModelChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPurok, $event) || (ctx.selectedPurok = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function HouseholdMapComponent_Template_select_ngModelChange_46_listener() {
          return ctx.onFiltersChanged();
        });
        \u0275\u0275elementStart(47, "option", 24);
        \u0275\u0275text(48, "All Puroks");
        \u0275\u0275elementEnd();
        \u0275\u0275template(49, HouseholdMapComponent_option_49_Template, 2, 2, "option", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 18)(51, "label", 19)(52, "span", 20);
        \u0275\u0275text(53, "\u{1F4CB}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " Status ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "select", 23);
        \u0275\u0275twoWayListener("ngModelChange", function HouseholdMapComponent_Template_select_ngModelChange_55_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedStatusKey, $event) || (ctx.selectedStatusKey = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function HouseholdMapComponent_Template_select_ngModelChange_55_listener() {
          return ctx.onFiltersChanged();
        });
        \u0275\u0275elementStart(56, "option", 24);
        \u0275\u0275text(57, "All Statuses");
        \u0275\u0275elementEnd();
        \u0275\u0275template(58, HouseholdMapComponent_option_58_Template, 2, 2, "option", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 18)(60, "label", 19)(61, "span", 20);
        \u0275\u0275text(62, "\u26A0\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " Risk Level ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "select", 23);
        \u0275\u0275twoWayListener("ngModelChange", function HouseholdMapComponent_Template_select_ngModelChange_64_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedRiskKey, $event) || (ctx.selectedRiskKey = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function HouseholdMapComponent_Template_select_ngModelChange_64_listener() {
          return ctx.onFiltersChanged();
        });
        \u0275\u0275elementStart(65, "option", 24);
        \u0275\u0275text(66, "All Risk Levels");
        \u0275\u0275elementEnd();
        \u0275\u0275template(67, HouseholdMapComponent_option_67_Template, 2, 2, "option", 25);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(68, "div", 26);
        \u0275\u0275template(69, HouseholdMapComponent_div_69_Template, 3, 2, "div", 27);
        \u0275\u0275element(70, "div", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275template(71, HouseholdMapComponent_div_71_Template, 5, 2, "div", 29);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.missingCoordinatesCount > 0);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.totalHouseholdsCount, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.mappedHouseholdsCount, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.unmappedHouseholdsCount, " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.hasActiveFilters);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedPurok);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.purokOptions);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatusKey);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.statusOptions);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedRiskKey);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.riskOptions);
        \u0275\u0275advance();
        \u0275\u0275classProp("household-map-layout__body--no-legend", !ctx.hasLegend);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasLegend);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.missingHouseholds.length);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.household-map-page[_ngcontent-%COMP%]   .household-map-layout[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.household-map-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  position: relative;\n  padding-right: 120px;\n}\n.household-map-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .household-map-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding-right: 0;\n  }\n  .household-map-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n    width: 100%;\n  }\n}\n.household-map-layout__top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 1024px) {\n  .household-map-layout__top[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n  .household-map-layout__info[_ngcontent-%COMP%], \n   .household-map-filters[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n    max-width: 50%;\n  }\n  .household-map-layout__top[_ngcontent-%COMP%] {\n    gap: 1.25rem;\n  }\n}\n.household-map-layout__summary[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.household-map-layout__warning[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--color-warning);\n}\n.household-map-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n}\n.household-map-stat[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.9rem;\n  border-radius: var(--radius);\n  background-color: var(--color-bg-secondary);\n  min-width: 140px;\n}\n.household-map-stat__label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  margin-bottom: 0.25rem;\n}\n.household-map-stat__value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.household-map-filters[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background-color: var(--color-bg-secondary);\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n}\n.household-map-filters__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.household-map-filters__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.household-map-filters__clear[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.75rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--color-primary);\n  background: transparent;\n  border: 1px solid var(--color-primary);\n  border-radius: var(--radius);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.household-map-filters__clear[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-bg);\n}\n.household-map-filters__clear[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.household-map-filters__grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n}\n.household-map-filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1 1 200px;\n  min-width: 180px;\n}\n.household-map-filter-group__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n.household-map-filter-group__icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1;\n}\n.household-map-filter-group__input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.household-map-filter-group__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.85rem;\n  font-size: 0.9rem;\n  border: 1px solid var(--color-input-border);\n  border-radius: var(--radius);\n  background: var(--color-bg-input);\n  color: var(--color-text-input);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.household-map-filter-group__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.household-map-filter-group__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-input-placeholder);\n}\n@media (max-width: 768px) {\n  .household-map-filters__grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .household-map-filter-group[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    min-width: 100%;\n  }\n  .household-map-filters__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .household-map-filters__clear[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.household-map-layout__body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.2fr) minmax(0, 3fr);\n  gap: 1rem;\n  align-items: stretch;\n}\n.household-map-layout__body--no-legend[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr);\n}\n.household-map-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.household-map-legend__group[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius);\n  background-color: var(--color-bg-secondary);\n}\n.household-map-legend__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.household-map-legend__items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.household-map-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.household-map-legend__marker[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n.household-map-legend__marker--bordered[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 3px solid var(--color-primary);\n}\n.household-map-legend__label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.household-map-legend__count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.household-map-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 320px);\n  min-height: 360px;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.household-map-missing[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding-top: 0.75rem;\n}\n.household-map-missing__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.household-map-missing__list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.household-map-missing__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.household-map-missing__id[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.household-map-missing__address[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .household-map-layout__body[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .household-map-legend[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n  }\n  .household-map-legend__group[_ngcontent-%COMP%] {\n    flex: 1 1 160px;\n  }\n  .household-map-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 320px);\n  }\n}\n/*# sourceMappingURL=household-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HouseholdMapComponent, [{
    type: Component,
    args: [{ selector: "app-household-map", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="household-map-page">\r
  <div class="page-header">\r
    <h1 class="page-title">Household Map</h1>\r
    <a class="btn btn--outline" (click)="navigateToHouseholds(); $event.preventDefault()" href="#">\r
      Back to List\r
    </a>\r
  </div>\r
\r
  <div class="household-map-layout card">\r
    <div class="household-map-layout__top">\r
      <div class="household-map-layout__info">\r
        <p class="household-map-layout__summary">\r
          Showing all households with known coordinates in the barangay.\r
        </p>\r
        <p\r
          *ngIf="missingCoordinatesCount > 0"\r
          class="household-map-layout__warning"\r
        >\r
          {{ missingCoordinatesCount }} household{{ missingCoordinatesCount !== 1 ? 's' : '' }}\r
          have no coordinates yet and are not shown on the map.\r
        </p>\r
\r
        <div class="household-map-stats">\r
          <div class="household-map-stat">\r
            <div class="household-map-stat__label">Total households</div>\r
            <div class="household-map-stat__value">\r
              {{ totalHouseholdsCount }}\r
            </div>\r
          </div>\r
          <div class="household-map-stat">\r
            <div class="household-map-stat__label">Mapped on GIS</div>\r
            <div class="household-map-stat__value">\r
              {{ mappedHouseholdsCount }}\r
            </div>\r
          </div>\r
          <div class="household-map-stat">\r
            <div class="household-map-stat__label">Not yet mapped</div>\r
            <div class="household-map-stat__value">\r
              {{ unmappedHouseholdsCount }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="household-map-filters">\r
        <div class="household-map-filters__header">\r
          <h3 class="household-map-filters__title">Filters & Search</h3>\r
          <button\r
            *ngIf="hasActiveFilters"\r
            type="button"\r
            class="household-map-filters__clear"\r
            (click)="clearFilters()"\r
          >\r
            Clear all\r
          </button>\r
        </div>\r
\r
        <div class="household-map-filters__grid">\r
          <div class="household-map-filter-group">\r
            <label class="household-map-filter-group__label">\r
              <span class="household-map-filter-group__icon">\u{1F50D}</span>\r
              Search\r
            </label>\r
            <div class="household-map-filter-group__input-wrapper">\r
              <input\r
                type="text"\r
                class="form-control household-map-filter-group__input"\r
                placeholder="Household ID, head name, or address"\r
                [(ngModel)]="searchTerm"\r
                (ngModelChange)="onFiltersChanged()"\r
              />\r
            </div>\r
          </div>\r
\r
          <div class="household-map-filter-group">\r
            <label class="household-map-filter-group__label">\r
              <span class="household-map-filter-group__icon">\u{1F4CD}</span>\r
              Purok\r
            </label>\r
            <select\r
              class="form-control household-map-filter-group__input"\r
              [(ngModel)]="selectedPurok"\r
              (ngModelChange)="onFiltersChanged()"\r
            >\r
              <option value="">All Puroks</option>\r
              <option *ngFor="let p of purokOptions" [value]="p">\r
                {{ p }}\r
              </option>\r
            </select>\r
          </div>\r
\r
          <div class="household-map-filter-group">\r
            <label class="household-map-filter-group__label">\r
              <span class="household-map-filter-group__icon">\u{1F4CB}</span>\r
              Status\r
            </label>\r
            <select\r
              class="form-control household-map-filter-group__input"\r
              [(ngModel)]="selectedStatusKey"\r
              (ngModelChange)="onFiltersChanged()"\r
            >\r
              <option value="">All Statuses</option>\r
              <option *ngFor="let s of statusOptions" [value]="s.key">\r
                {{ s.label }}\r
              </option>\r
            </select>\r
          </div>\r
\r
          <div class="household-map-filter-group">\r
            <label class="household-map-filter-group__label">\r
              <span class="household-map-filter-group__icon">\u26A0\uFE0F</span>\r
              Risk Level\r
            </label>\r
            <select\r
              class="form-control household-map-filter-group__input"\r
              [(ngModel)]="selectedRiskKey"\r
              (ngModelChange)="onFiltersChanged()"\r
            >\r
              <option value="">All Risk Levels</option>\r
              <option *ngFor="let r of riskOptions" [value]="r.key">\r
                {{ r.label }}\r
              </option>\r
            </select>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div\r
      class="household-map-layout__body"\r
      [class.household-map-layout__body--no-legend]="!hasLegend"\r
    >\r
      <div class="household-map-legend" *ngIf="hasLegend">\r
        <div class="household-map-legend__group" *ngIf="statusLegend.length">\r
          <h3 class="household-map-legend__title">By status</h3>\r
          <div class="household-map-legend__items">\r
            <div\r
              class="household-map-legend__item"\r
              *ngFor="let item of statusLegend"\r
            >\r
              <span\r
                class="household-map-legend__marker"\r
                [ngStyle]="{ 'background-color': item.color }"\r
              ></span>\r
              <span class="household-map-legend__label">\r
                {{ item.label }}\r
              </span>\r
              <span class="household-map-legend__count">\r
                {{ item.count }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="household-map-legend__group" *ngIf="riskLegend.length">\r
          <h3 class="household-map-legend__title">By risk level</h3>\r
          <div class="household-map-legend__items">\r
            <div\r
              class="household-map-legend__item"\r
              *ngFor="let item of riskLegend"\r
            >\r
              <span\r
                class="household-map-legend__marker household-map-legend__marker--bordered"\r
                [ngStyle]="{ borderColor: item.color }"\r
              ></span>\r
              <span class="household-map-legend__label">\r
                {{ item.label }}\r
              </span>\r
              <span class="household-map-legend__count">\r
                {{ item.count }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div\r
        id="household-map-container"\r
        class="household-map-container"\r
        aria-label="Barangay household map"\r
      ></div>\r
    </div>\r
\r
    <div\r
      class="household-map-missing"\r
      *ngIf="missingHouseholds.length"\r
    >\r
      <h3 class="household-map-missing__title">\r
        Households not yet mapped ({{ missingHouseholds.length }})\r
      </h3>\r
      <ul class="household-map-missing__list">\r
        <li\r
          class="household-map-missing__item"\r
          *ngFor="let h of missingHouseholds"\r
        >\r
          <span class="household-map-missing__id">\r
            {{ h.householdId }}\r
          </span>\r
          <span class="household-map-missing__address">\r
            {{ h.address }} ({{ h.purok }})\r
          </span>\r
        </li>\r
      </ul>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/pages/household-map/household-map.component.scss */\n.household-map-page .household-map-layout {\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.household-map-page .page-header {\n  position: relative;\n  padding-right: 120px;\n}\n.household-map-page .page-header > a.btn {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .household-map-page .page-header {\n    flex-direction: column;\n    align-items: stretch;\n    padding-right: 0;\n  }\n  .household-map-page .page-header > a.btn {\n    position: static;\n    transform: none;\n    width: 100%;\n  }\n}\n.household-map-layout__top {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 1024px) {\n  .household-map-layout__top {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n  .household-map-layout__info,\n  .household-map-filters {\n    flex: 1 1 0;\n    max-width: 50%;\n  }\n  .household-map-layout__top {\n    gap: 1.25rem;\n  }\n}\n.household-map-layout__summary {\n  margin: 0 0 0.25rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.household-map-layout__warning {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--color-warning);\n}\n.household-map-stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n}\n.household-map-stat {\n  padding: 0.6rem 0.9rem;\n  border-radius: var(--radius);\n  background-color: var(--color-bg-secondary);\n  min-width: 140px;\n}\n.household-map-stat__label {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  margin-bottom: 0.25rem;\n}\n.household-map-stat__value {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.household-map-filters {\n  padding: 0.75rem 1rem;\n  background-color: var(--color-bg-secondary);\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n}\n.household-map-filters__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.household-map-filters__title {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.household-map-filters__clear {\n  padding: 0.4rem 0.75rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--color-primary);\n  background: transparent;\n  border: 1px solid var(--color-primary);\n  border-radius: var(--radius);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.household-map-filters__clear:hover {\n  background: var(--color-primary-bg);\n}\n.household-map-filters__clear:active {\n  transform: scale(0.98);\n}\n.household-map-filters__grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-end;\n}\n.household-map-filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1 1 200px;\n  min-width: 180px;\n}\n.household-map-filter-group__label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n.household-map-filter-group__icon {\n  font-size: 0.9rem;\n  line-height: 1;\n}\n.household-map-filter-group__input-wrapper {\n  position: relative;\n}\n.household-map-filter-group__input {\n  width: 100%;\n  padding: 0.65rem 0.85rem;\n  font-size: 0.9rem;\n  border: 1px solid var(--color-input-border);\n  border-radius: var(--radius);\n  background: var(--color-bg-input);\n  color: var(--color-text-input);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.household-map-filter-group__input:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.household-map-filter-group__input::placeholder {\n  color: var(--color-input-placeholder);\n}\n@media (max-width: 768px) {\n  .household-map-filters__grid {\n    flex-direction: column;\n  }\n  .household-map-filter-group {\n    flex: 1 1 100%;\n    min-width: 100%;\n  }\n  .household-map-filters__header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .household-map-filters__clear {\n    width: 100%;\n  }\n}\n.household-map-layout__body {\n  display: grid;\n  grid-template-columns: minmax(0, 1.2fr) minmax(0, 3fr);\n  gap: 1rem;\n  align-items: stretch;\n}\n.household-map-layout__body--no-legend {\n  grid-template-columns: minmax(0, 1fr);\n}\n.household-map-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.household-map-legend__group {\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius);\n  background-color: var(--color-bg-secondary);\n}\n.household-map-legend__title {\n  margin: 0 0 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.household-map-legend__items {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.household-map-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.household-map-legend__marker {\n  width: 14px;\n  height: 14px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n.household-map-legend__marker--bordered {\n  background-color: transparent;\n  border: 3px solid var(--color-primary);\n}\n.household-map-legend__label {\n  flex: 1;\n}\n.household-map-legend__count {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.household-map-container {\n  width: 100%;\n  height: calc(100vh - 320px);\n  min-height: 360px;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.household-map-missing {\n  border-top: 1px solid var(--color-border);\n  padding-top: 0.75rem;\n}\n.household-map-missing__title {\n  margin: 0 0 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.household-map-missing__list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.household-map-missing__item {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.household-map-missing__id {\n  font-weight: 600;\n}\n.household-map-missing__address {\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .household-map-layout__body {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .household-map-legend {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n  }\n  .household-map-legend__group {\n    flex: 1 1 160px;\n  }\n  .household-map-container {\n    height: calc(100vh - 320px);\n  }\n}\n/*# sourceMappingURL=household-map.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HouseholdMapComponent, { className: "HouseholdMapComponent", filePath: "src/app/pages/household-map/household-map.component.ts", lineNumber: 15 });
})();
export {
  HouseholdMapComponent
};
//# sourceMappingURL=chunk-P573Q34Z.js.map
