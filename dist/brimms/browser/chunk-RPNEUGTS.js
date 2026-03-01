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
  DatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ISBYAA2X.js";
import "./chunk-YP43Q66R.js";

// src/app/pages/archives/archives.component.ts
var _c0 = (a0) => ["/admin/residents", a0];
var _c1 = (a0) => ["/admin/households", a0];
var _c2 = (a0) => ["/admin/requests", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ArchivesComponent_Conditional_16_For_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "button", 22);
    \u0275\u0275listener("click", function ArchivesComponent_Conditional_16_For_42_Template_button_click_16_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.restoreResident(r_r4));
    });
    \u0275\u0275text(17, " Restore ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, r_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.residentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.gender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.purok);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.archivedAt ? \u0275\u0275pipeBind2(12, 7, r_r4.archivedAt, "short") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.archivedReason || "\u2014");
  }
}
function ArchivesComponent_Conditional_16_ForEmpty_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, " No archived residents match your filters. ");
    \u0275\u0275elementEnd()();
  }
}
function ArchivesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8);
    \u0275\u0275text(2, " Archived Residents ");
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_16_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.residentSearch, $event) || (ctx_r1.residentSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_16_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.residentPurok, $event) || (ctx_r1.residentPurok = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 13);
    \u0275\u0275text(9, "All Puroks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 14);
    \u0275\u0275text(11, "Purok 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 15);
    \u0275\u0275text(13, "Purok 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 16);
    \u0275\u0275text(15, "Purok 3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label", 17);
    \u0275\u0275text(17, " Archived from ");
    \u0275\u0275elementStart(18, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_16_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.residentArchivedFrom, $event) || (ctx_r1.residentArchivedFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 17);
    \u0275\u0275text(20, " to ");
    \u0275\u0275elementStart(21, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_16_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.residentArchivedTo, $event) || (ctx_r1.residentArchivedTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 19)(23, "table", 20)(24, "thead")(25, "tr")(26, "th");
    \u0275\u0275text(27, "Resident ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Archived At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "tbody");
    \u0275\u0275repeaterCreate(41, ArchivesComponent_Conditional_16_For_42_Template, 18, 12, "tr", null, _forTrack0, false, ArchivesComponent_Conditional_16_ForEmpty_43_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("(", ctx_r1.archivedResidents.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.residentSearch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.residentPurok);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.residentArchivedFrom);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.residentArchivedTo);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.archivedResidents);
  }
}
function ArchivesComponent_Conditional_17_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
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
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "a", 25);
    \u0275\u0275text(12, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 22);
    \u0275\u0275listener("click", function ArchivesComponent_Conditional_17_For_32_Template_button_click_13_listener() {
      const h_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.restoreHousehold(h_r7));
    });
    \u0275\u0275text(14, " Restore ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const h_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.householdId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.purok);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.archivedAt ? \u0275\u0275pipeBind2(9, 5, h_r7.archivedAt, "short") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, h_r7.id));
  }
}
function ArchivesComponent_Conditional_17_ForEmpty_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2, " No archived households match your filters. ");
    \u0275\u0275elementEnd()();
  }
}
function ArchivesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8);
    \u0275\u0275text(2, " Archived Households ");
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_17_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.householdSearch, $event) || (ctx_r1.householdSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_17_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.householdPurok, $event) || (ctx_r1.householdPurok = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 13);
    \u0275\u0275text(9, "All Puroks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 14);
    \u0275\u0275text(11, "Purok 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 15);
    \u0275\u0275text(13, "Purok 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 16);
    \u0275\u0275text(15, "Purok 3");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 19)(17, "table", 20)(18, "thead")(19, "tr")(20, "th");
    \u0275\u0275text(21, "Household ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Archived At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tbody");
    \u0275\u0275repeaterCreate(31, ArchivesComponent_Conditional_17_For_32_Template, 15, 10, "tr", null, _forTrack0, false, ArchivesComponent_Conditional_17_ForEmpty_33_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("(", ctx_r1.archivedHouseholds.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.householdSearch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.householdPurok);
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r1.archivedHouseholds);
  }
}
function ArchivesComponent_Conditional_18_For_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "a", 25);
    \u0275\u0275text(15, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 22);
    \u0275\u0275listener("click", function ArchivesComponent_Conditional_18_For_42_Template_button_click_16_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.restoreRequest(r_r10));
    });
    \u0275\u0275text(17, " Restore ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.purpose);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-status", r_r10.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r10.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.archivedAt ? \u0275\u0275pipeBind2(12, 7, r_r10.archivedAt, "short") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c2, r_r10.id));
  }
}
function ArchivesComponent_Conditional_18_ForEmpty_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2, " No archived requests match your filters. ");
    \u0275\u0275elementEnd()();
  }
}
function ArchivesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8);
    \u0275\u0275text(2, " Archived Certificate Requests ");
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_18_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.requestSearch, $event) || (ctx_r1.requestSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_18_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.requestStatus, $event) || (ctx_r1.requestStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 13);
    \u0275\u0275text(9, "All Statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 28);
    \u0275\u0275text(11, "Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 29);
    \u0275\u0275text(13, "Rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 30);
    \u0275\u0275text(15, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 31);
    \u0275\u0275text(17, "For Review");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 17);
    \u0275\u0275text(19, " Archived from ");
    \u0275\u0275elementStart(20, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_18_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.requestArchivedFrom, $event) || (ctx_r1.requestArchivedFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label", 17);
    \u0275\u0275text(22, " to ");
    \u0275\u0275elementStart(23, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_18_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.requestArchivedTo, $event) || (ctx_r1.requestArchivedTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 19)(25, "table", 20)(26, "thead")(27, "tr")(28, "th");
    \u0275\u0275text(29, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Request Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Archived At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "tbody");
    \u0275\u0275repeaterCreate(41, ArchivesComponent_Conditional_18_For_42_Template, 18, 12, "tr", null, _forTrack0, false, ArchivesComponent_Conditional_18_ForEmpty_43_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("(", ctx_r1.archivedRequests.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.requestSearch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.requestStatus);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.requestArchivedFrom);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.requestArchivedTo);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.archivedRequests);
  }
}
function ArchivesComponent_Conditional_19_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "button", 22);
    \u0275\u0275listener("click", function ArchivesComponent_Conditional_19_For_36_Template_button_click_17_listener() {
      const u_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.restoreUser(u_r13));
    });
    \u0275\u0275text(18, " Restore ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r13.email);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-role", u_r13.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r13.role, " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-status", u_r13.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r13.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r13.lastLogin || "Never");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r13.archivedAt ? \u0275\u0275pipeBind2(15, 8, u_r13.archivedAt, "short") : "\u2014");
  }
}
function ArchivesComponent_Conditional_19_ForEmpty_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, " No archived staff users match your filters. ");
    \u0275\u0275elementEnd()();
  }
}
function ArchivesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8);
    \u0275\u0275text(2, " Archived Staff Users ");
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 34);
    \u0275\u0275text(6, " Former Admin / Staff accounts that have been archived after long inactivity. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_19_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userSearch, $event) || (ctx_r1.userSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ArchivesComponent_Conditional_19_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userRole, $event) || (ctx_r1.userRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 13);
    \u0275\u0275text(11, "All Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 36);
    \u0275\u0275text(13, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 37);
    \u0275\u0275text(15, "Staff");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 19)(17, "table", 20)(18, "thead")(19, "tr")(20, "th");
    \u0275\u0275text(21, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Last Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Archived At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "tbody");
    \u0275\u0275repeaterCreate(35, ArchivesComponent_Conditional_19_For_36_Template, 19, 11, "tr", null, _forTrack0, false, ArchivesComponent_Conditional_19_ForEmpty_37_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("(", ctx_r1.archivedUsers.length, ")");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userSearch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userRole);
    \u0275\u0275advance(26);
    \u0275\u0275repeater(ctx_r1.archivedUsers);
  }
}
var ArchivesComponent = class _ArchivesComponent {
  constructor(data) {
    this.data = data;
    this.activeTab = "residents";
    this.residentSearch = "";
    this.residentPurok = "";
    this.residentArchivedFrom = "";
    this.residentArchivedTo = "";
    this.householdSearch = "";
    this.householdPurok = "";
    this.requestSearch = "";
    this.requestStatus = "";
    this.requestArchivedFrom = "";
    this.requestArchivedTo = "";
    this.userSearch = "";
    this.userRole = "";
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  // --- Residents ---
  get archivedResidents() {
    let list = this.data.getArchivedResidents();
    if (this.residentSearch) {
      const s = this.residentSearch.toLowerCase();
      list = list.filter((r) => r.name.toLowerCase().includes(s) || r.residentId.toLowerCase().includes(s) || (r.purok?.toLowerCase().includes(s) ?? false));
    }
    if (this.residentPurok) {
      list = list.filter((r) => r.purok === this.residentPurok);
    }
    if (this.residentArchivedFrom) {
      const from = new Date(this.residentArchivedFrom).getTime();
      list = list.filter((r) => r.archivedAt && new Date(r.archivedAt).getTime() >= from);
    }
    if (this.residentArchivedTo) {
      const to = new Date(this.residentArchivedTo).getTime();
      list = list.filter((r) => r.archivedAt && new Date(r.archivedAt).getTime() <= to);
    }
    return list;
  }
  restoreResident(r) {
    this.data.unarchiveResident(r.id);
  }
  // --- Households ---
  get archivedHouseholds() {
    let list = this.data.getArchivedHouseholds();
    if (this.householdSearch) {
      const s = this.householdSearch.toLowerCase();
      list = list.filter((h) => h.householdId.toLowerCase().includes(s) || h.address.toLowerCase().includes(s));
    }
    if (this.householdPurok) {
      list = list.filter((h) => h.purok === this.householdPurok);
    }
    return list;
  }
  restoreHousehold(h) {
    this.data.updateHousehold(h.id, { archived: false, archivedAt: void 0 });
  }
  // --- Requests ---
  get archivedRequests() {
    let list = this.data.getArchivedRequests();
    if (this.requestSearch) {
      const s = this.requestSearch.toLowerCase();
      list = list.filter((r) => r.type.toLowerCase().includes(s) || r.purpose.toLowerCase().includes(s) || (r.residentId?.toLowerCase().includes(s) ?? false));
    }
    if (this.requestStatus) {
      list = list.filter((r) => r.status === this.requestStatus);
    }
    if (this.requestArchivedFrom) {
      const from = new Date(this.requestArchivedFrom).getTime();
      list = list.filter((r) => r.archivedAt && new Date(r.archivedAt).getTime() >= from);
    }
    if (this.requestArchivedTo) {
      const to = new Date(this.requestArchivedTo).getTime();
      list = list.filter((r) => r.archivedAt && new Date(r.archivedAt).getTime() <= to);
    }
    return list;
  }
  restoreRequest(r) {
    this.data.unarchiveRequest(r.id);
  }
  // --- Users (staff/admin only in this view) ---
  get archivedUsers() {
    let list = this.data.getArchivedUsers().filter((u) => {
      const roleLower = u.role.toLowerCase();
      return roleLower === "admin" || roleLower === "staff";
    });
    if (this.userSearch) {
      const s = this.userSearch.toLowerCase();
      list = list.filter((u) => u.name.toLowerCase().includes(s) || u.email.toLowerCase().includes(s));
    }
    if (this.userRole) {
      list = list.filter((u) => u.role === this.userRole);
    }
    return list;
  }
  restoreUser(u) {
    this.data.unarchiveUser(u.id);
  }
  static {
    this.\u0275fac = function ArchivesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ArchivesComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArchivesComponent, selectors: [["app-archives"]], decls: 20, vars: 16, consts: [[1, "archives-page"], [1, "page-title"], [1, "page-description"], [1, "tabs-wrapper"], ["role", "tablist", 1, "tabs"], ["type", "button", "role", "tab", 1, "tab-button", 3, "click"], [1, "tab-content"], [1, "card"], [1, "section-title"], [1, "section-count"], [1, "filters-row"], ["type", "text", "placeholder", "Search name, ID, or purok", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Purok 1"], ["value", "Purok 2"], ["value", "Purok 3"], [1, "filters-row__label"], ["type", "date", 1, "form-control", "date-control", 3, "ngModelChange", "ngModel"], [1, "table-wrap"], [1, "table"], [3, "routerLink"], ["type", "button", 1, "btn", "btn--sm", 3, "click"], ["colspan", "7", 1, "empty-cell"], ["type", "text", "placeholder", "Search by Household ID or Address", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn--sm", "btn--outline", 3, "routerLink"], ["colspan", "5", 1, "empty-cell"], ["type", "text", "placeholder", "Search by type, purpose, or resident ID", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "Approved"], ["value", "Rejected"], ["value", "Pending"], ["value", "For Review"], [1, "status-pill"], ["colspan", "6", 1, "empty-cell"], [1, "muted"], ["type", "text", "placeholder", "Search by name or email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "Admin"], ["value", "Staff"], [1, "role-pill"]], template: function ArchivesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Archives");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4, " Archived residents, households, certificate requests, and staff accounts. Only Admins can access this section. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "nav", 4)(7, "button", 5);
        \u0275\u0275listener("click", function ArchivesComponent_Template_button_click_7_listener() {
          return ctx.setActiveTab("residents");
        });
        \u0275\u0275text(8, " Residents ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function ArchivesComponent_Template_button_click_9_listener() {
          return ctx.setActiveTab("households");
        });
        \u0275\u0275text(10, " Households ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function ArchivesComponent_Template_button_click_11_listener() {
          return ctx.setActiveTab("requests");
        });
        \u0275\u0275text(12, " Certificate Requests ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 5);
        \u0275\u0275listener("click", function ArchivesComponent_Template_button_click_13_listener() {
          return ctx.setActiveTab("users");
        });
        \u0275\u0275text(14, " Staff Users ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 6);
        \u0275\u0275conditionalCreate(16, ArchivesComponent_Conditional_16_Template, 44, 6, "div", 7);
        \u0275\u0275conditionalCreate(17, ArchivesComponent_Conditional_17_Template, 34, 4, "div", 7);
        \u0275\u0275conditionalCreate(18, ArchivesComponent_Conditional_18_Template, 44, 6, "div", 7);
        \u0275\u0275conditionalCreate(19, ArchivesComponent_Conditional_19_Template, 38, 4, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275classProp("active", ctx.activeTab === "residents");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "residents");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "households");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "households");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "requests");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "requests");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "users");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "users");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.activeTab === "residents" ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "households" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "requests" ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "users" ? 19 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, DatePipe], styles: ['\n\n.archives-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n}\n.page-description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0 0 0.75rem;\n}\n.section-count[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.tabs-wrapper[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  display: flex;\n  justify-content: center;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0.25rem;\n  padding: 0.25rem;\n  border-radius: 999px;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n}\n.tab-button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 0.35rem 0.9rem;\n  border-radius: 999px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  color: var(--color-text-muted);\n  transition: background 0.15s, color 0.15s;\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  background: var(--color-primary-soft, rgba(59, 130, 246, 0.08));\n  color: var(--color-primary, #2563eb);\n  font-weight: 600;\n}\n.tab-content[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem 1.25rem;\n  align-items: flex-end;\n  margin-bottom: 1rem;\n  padding: 1rem 1.25rem;\n  border-radius: 0.65rem;\n  background:\n    radial-gradient(\n      circle at 0 0,\n      rgba(148, 163, 184, 0.24),\n      transparent 55%),\n    var(--color-bg-card);\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  box-shadow: var(--shadow);\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.filters-row[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-lg);\n}\n@media (min-width: 1024px) {\n  .filters-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n.filters-row[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  max-width: 420px;\n  border-radius: 0.5rem;\n  border: 1px solid var(--color-border-subtle, #e5e7eb);\n  background: var(--color-bg, #020617);\n  font-size: 0.9rem;\n  padding: 0.55rem 1rem;\n}\n.filters-row[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: var(--color-primary, #2563eb);\n  box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.5);\n}\n.filters-row__label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  position: relative;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.archives-page[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.archives-page[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.empty-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: var(--color-text-muted);\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.status-pill[_ngcontent-%COMP%], \n.role-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.15rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border: 1px solid transparent;\n}\n.status-pill[data-status=Approved][_ngcontent-%COMP%], \n.status-pill[data-status=Active][_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.08);\n  color: #15803d;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.status-pill[data-status=Rejected][_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.06);\n  color: #b91c1c;\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.status-pill[data-status=Pending][_ngcontent-%COMP%], \n.status-pill[data-status="For Review"][_ngcontent-%COMP%], \n.status-pill[data-status=Inactive][_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.06);\n  color: #92400e;\n  border-color: rgba(234, 179, 8, 0.2);\n}\n.role-pill[data-role=Admin][_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.08);\n  color: #1d4ed8;\n  border-color: rgba(59, 130, 246, 0.24);\n}\n.role-pill[data-role=Staff][_ngcontent-%COMP%] {\n  background: rgba(14, 116, 144, 0.08);\n  color: #0e7490;\n  border-color: rgba(14, 116, 144, 0.24);\n}\n.date-control[_ngcontent-%COMP%] {\n  min-width: 170px;\n  height: 2.25rem;\n  padding: 0.35rem 0.8rem;\n  background-color: var(--color-bg, #020617);\n  border-radius: 0.5rem;\n  border: 1px solid var(--color-border-subtle, #e5e7eb);\n  font-size: 0.85rem;\n  line-height: 1.2;\n}\n.date-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border, #d1d5db);\n}\n.date-control[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: var(--color-primary, #2563eb);\n  box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.2);\n}\n/*# sourceMappingURL=archives.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArchivesComponent, [{
    type: Component,
    args: [{ selector: "app-archives", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="archives-page">\r
  <h1 class="page-title">Archives</h1>\r
  <p class="page-description">\r
    Archived residents, households, certificate requests, and staff accounts. Only Admins can access this section.\r
  </p>\r
\r
  <div class="tabs-wrapper">\r
    <nav class="tabs" role="tablist">\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'residents'"\r
        (click)="setActiveTab('residents')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'residents'"\r
      >\r
        Residents\r
      </button>\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'households'"\r
        (click)="setActiveTab('households')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'households'"\r
      >\r
        Households\r
      </button>\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'requests'"\r
        (click)="setActiveTab('requests')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'requests'"\r
      >\r
        Certificate Requests\r
      </button>\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'users'"\r
        (click)="setActiveTab('users')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'users'"\r
      >\r
        Staff Users\r
      </button>\r
    </nav>\r
  </div>\r
\r
  <div class="tab-content">\r
    @if (activeTab === 'residents') {\r
      <div class="card">\r
        <h2 class="section-title">\r
          Archived Residents\r
          <span class="section-count">({{ archivedResidents.length }})</span>\r
        </h2>\r
        <div class="filters-row">\r
          <input\r
            type="text"\r
            class="form-control"\r
            placeholder="Search name, ID, or purok"\r
            [(ngModel)]="residentSearch"\r
          />\r
          <select class="form-control" [(ngModel)]="residentPurok">\r
            <option value="">All Puroks</option>\r
            <option value="Purok 1">Purok 1</option>\r
            <option value="Purok 2">Purok 2</option>\r
            <option value="Purok 3">Purok 3</option>\r
          </select>\r
          <label class="filters-row__label">\r
            Archived from\r
            <input type="date" class="form-control date-control" [(ngModel)]="residentArchivedFrom" />\r
          </label>\r
          <label class="filters-row__label">\r
            to\r
            <input type="date" class="form-control date-control" [(ngModel)]="residentArchivedTo" />\r
          </label>\r
        </div>\r
\r
        <div class="table-wrap">\r
          <table class="table">\r
            <thead>\r
              <tr>\r
                <th>Resident ID</th>\r
                <th>Name</th>\r
                <th>Gender</th>\r
                <th>Purok</th>\r
                <th>Archived At</th>\r
                <th>Reason</th>\r
                <th>Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (r of archivedResidents; track r.id) {\r
                <tr>\r
                  <td>\r
                    <a [routerLink]="['/admin/residents', r.id]">{{ r.residentId }}</a>\r
                  </td>\r
                  <td>{{ r.name }}</td>\r
                  <td>{{ r.gender }}</td>\r
                  <td>{{ r.purok }}</td>\r
                  <td>{{ r.archivedAt ? (r.archivedAt | date:'short') : '\u2014' }}</td>\r
                  <td>{{ r.archivedReason || '\u2014' }}</td>\r
                  <td>\r
                    <button type="button" class="btn btn--sm" (click)="restoreResident(r)">\r
                      Restore\r
                    </button>\r
                  </td>\r
                </tr>\r
              } @empty {\r
                <tr>\r
                  <td colspan="7" class="empty-cell">\r
                    No archived residents match your filters.\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    }\r
\r
    @if (activeTab === 'households') {\r
      <div class="card">\r
        <h2 class="section-title">\r
          Archived Households\r
          <span class="section-count">({{ archivedHouseholds.length }})</span>\r
        </h2>\r
        <div class="filters-row">\r
          <input\r
            type="text"\r
            class="form-control"\r
            placeholder="Search by Household ID or Address"\r
            [(ngModel)]="householdSearch"\r
          />\r
          <select class="form-control" [(ngModel)]="householdPurok">\r
            <option value="">All Puroks</option>\r
            <option value="Purok 1">Purok 1</option>\r
            <option value="Purok 2">Purok 2</option>\r
            <option value="Purok 3">Purok 3</option>\r
          </select>\r
        </div>\r
\r
        <div class="table-wrap">\r
          <table class="table">\r
            <thead>\r
              <tr>\r
                <th>Household ID</th>\r
                <th>Address</th>\r
                <th>Purok</th>\r
                <th>Archived At</th>\r
                <th>Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (h of archivedHouseholds; track h.id) {\r
                <tr>\r
                  <td>{{ h.householdId }}</td>\r
                  <td>{{ h.address }}</td>\r
                  <td>{{ h.purok }}</td>\r
                  <td>{{ h.archivedAt ? (h.archivedAt | date:'short') : '\u2014' }}</td>\r
                  <td>\r
                    <a [routerLink]="['/admin/households', h.id]" class="btn btn--sm btn--outline">\r
                      View\r
                    </a>\r
                    <button type="button" class="btn btn--sm" (click)="restoreHousehold(h)">\r
                      Restore\r
                    </button>\r
                  </td>\r
                </tr>\r
              } @empty {\r
                <tr>\r
                  <td colspan="5" class="empty-cell">\r
                    No archived households match your filters.\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    }\r
\r
    @if (activeTab === 'requests') {\r
      <div class="card">\r
        <h2 class="section-title">\r
          Archived Certificate Requests\r
          <span class="section-count">({{ archivedRequests.length }})</span>\r
        </h2>\r
        <div class="filters-row">\r
          <input\r
            type="text"\r
            class="form-control"\r
            placeholder="Search by type, purpose, or resident ID"\r
            [(ngModel)]="requestSearch"\r
          />\r
          <select class="form-control" [(ngModel)]="requestStatus">\r
            <option value="">All Statuses</option>\r
            <option value="Approved">Approved</option>\r
            <option value="Rejected">Rejected</option>\r
            <option value="Pending">Pending</option>\r
            <option value="For Review">For Review</option>\r
          </select>\r
          <label class="filters-row__label">\r
            Archived from\r
            <input type="date" class="form-control date-control" [(ngModel)]="requestArchivedFrom" />\r
          </label>\r
          <label class="filters-row__label">\r
            to\r
            <input type="date" class="form-control date-control" [(ngModel)]="requestArchivedTo" />\r
          </label>\r
        </div>\r
\r
        <div class="table-wrap">\r
          <table class="table">\r
            <thead>\r
              <tr>\r
                <th>Type</th>\r
                <th>Purpose</th>\r
                <th>Status</th>\r
                <th>Request Date</th>\r
                <th>Archived At</th>\r
                <th>Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (r of archivedRequests; track r.id) {\r
                <tr>\r
                  <td>{{ r.type }}</td>\r
                  <td>{{ r.purpose }}</td>\r
                  <td>\r
                    <span class="status-pill" [attr.data-status]="r.status">\r
                      {{ r.status }}\r
                    </span>\r
                  </td>\r
                  <td>{{ r.date }}</td>\r
                  <td>{{ r.archivedAt ? (r.archivedAt | date:'short') : '\u2014' }}</td>\r
                  <td>\r
                    <a [routerLink]="['/admin/requests', r.id]" class="btn btn--sm btn--outline">\r
                      View\r
                    </a>\r
                    <button type="button" class="btn btn--sm" (click)="restoreRequest(r)">\r
                      Restore\r
                    </button>\r
                  </td>\r
                </tr>\r
              } @empty {\r
                <tr>\r
                  <td colspan="6" class="empty-cell">\r
                    No archived requests match your filters.\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    }\r
\r
    @if (activeTab === 'users') {\r
      <div class="card">\r
        <h2 class="section-title">\r
          Archived Staff Users\r
          <span class="section-count">({{ archivedUsers.length }})</span>\r
        </h2>\r
        <p class="muted">\r
          Former Admin / Staff accounts that have been archived after long inactivity.\r
        </p>\r
        <div class="filters-row">\r
          <input\r
            type="text"\r
            class="form-control"\r
            placeholder="Search by name or email"\r
            [(ngModel)]="userSearch"\r
          />\r
          <select class="form-control" [(ngModel)]="userRole">\r
            <option value="">All Roles</option>\r
            <option value="Admin">Admin</option>\r
            <option value="Staff">Staff</option>\r
          </select>\r
        </div>\r
\r
        <div class="table-wrap">\r
          <table class="table">\r
            <thead>\r
              <tr>\r
                <th>Name</th>\r
                <th>Email</th>\r
                <th>Role</th>\r
                <th>Status</th>\r
                <th>Last Login</th>\r
                <th>Archived At</th>\r
                <th>Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (u of archivedUsers; track u.id) {\r
                <tr>\r
                  <td>{{ u.name }}</td>\r
                  <td>{{ u.email }}</td>\r
                  <td>\r
                    <span class="role-pill" [attr.data-role]="u.role">\r
                      {{ u.role }}\r
                    </span>\r
                  </td>\r
                  <td>\r
                    <span class="status-pill" [attr.data-status]="u.status">\r
                      {{ u.status }}\r
                    </span>\r
                  </td>\r
                  <td>{{ u.lastLogin || 'Never' }}</td>\r
                  <td>{{ u.archivedAt ? (u.archivedAt | date:'short') : '\u2014' }}</td>\r
                  <td>\r
                    <button type="button" class="btn btn--sm" (click)="restoreUser(u)">\r
                      Restore\r
                    </button>\r
                  </td>\r
                </tr>\r
              } @empty {\r
                <tr>\r
                  <td colspan="7" class="empty-cell">\r
                    No archived staff users match your filters.\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
</div>\r
\r
`, styles: ['/* src/app/pages/archives/archives.component.scss */\n.archives-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n}\n.page-description {\n  margin: 0;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.section-title {\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0 0 0.75rem;\n}\n.section-count {\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.tabs-wrapper {\n  margin-top: 0.5rem;\n  display: flex;\n  justify-content: center;\n}\n.tabs {\n  display: inline-flex;\n  gap: 0.25rem;\n  padding: 0.25rem;\n  border-radius: 999px;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n}\n.tab-button {\n  border: none;\n  background: transparent;\n  padding: 0.35rem 0.9rem;\n  border-radius: 999px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  color: var(--color-text-muted);\n  transition: background 0.15s, color 0.15s;\n}\n.tab-button.active {\n  background: var(--color-primary-soft, rgba(59, 130, 246, 0.08));\n  color: var(--color-primary, #2563eb);\n  font-weight: 600;\n}\n.tab-content {\n  margin-top: 0.75rem;\n}\n.filters-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem 1.25rem;\n  align-items: flex-end;\n  margin-bottom: 1rem;\n  padding: 1rem 1.25rem;\n  border-radius: 0.65rem;\n  background:\n    radial-gradient(\n      circle at 0 0,\n      rgba(148, 163, 184, 0.24),\n      transparent 55%),\n    var(--color-bg-card);\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  box-shadow: var(--shadow);\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.filters-row:hover {\n  box-shadow: var(--shadow-lg);\n}\n@media (min-width: 1024px) {\n  .filters-row {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n.filters-row .form-control {\n  width: 100%;\n  min-width: 0;\n  max-width: 420px;\n  border-radius: 0.5rem;\n  border: 1px solid var(--color-border-subtle, #e5e7eb);\n  background: var(--color-bg, #020617);\n  font-size: 0.9rem;\n  padding: 0.55rem 1rem;\n}\n.filters-row .form-control:focus-visible {\n  outline: none;\n  border-color: var(--color-primary, #2563eb);\n  box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.5);\n}\n.filters-row__label {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  position: relative;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.table-wrap {\n  margin-top: 0.5rem;\n}\n.archives-page .table thead th {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.archives-page .table tbody td {\n  font-size: 0.875rem;\n}\n.empty-cell {\n  text-align: center;\n  padding: 2rem;\n  color: var(--color-text-muted);\n}\n.muted {\n  color: var(--color-text-muted);\n}\n.status-pill,\n.role-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.15rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border: 1px solid transparent;\n}\n.status-pill[data-status=Approved],\n.status-pill[data-status=Active] {\n  background: rgba(22, 163, 74, 0.08);\n  color: #15803d;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.status-pill[data-status=Rejected] {\n  background: rgba(220, 38, 38, 0.06);\n  color: #b91c1c;\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.status-pill[data-status=Pending],\n.status-pill[data-status="For Review"],\n.status-pill[data-status=Inactive] {\n  background: rgba(234, 179, 8, 0.06);\n  color: #92400e;\n  border-color: rgba(234, 179, 8, 0.2);\n}\n.role-pill[data-role=Admin] {\n  background: rgba(59, 130, 246, 0.08);\n  color: #1d4ed8;\n  border-color: rgba(59, 130, 246, 0.24);\n}\n.role-pill[data-role=Staff] {\n  background: rgba(14, 116, 144, 0.08);\n  color: #0e7490;\n  border-color: rgba(14, 116, 144, 0.24);\n}\n.date-control {\n  min-width: 170px;\n  height: 2.25rem;\n  padding: 0.35rem 0.8rem;\n  background-color: var(--color-bg, #020617);\n  border-radius: 0.5rem;\n  border: 1px solid var(--color-border-subtle, #e5e7eb);\n  font-size: 0.85rem;\n  line-height: 1.2;\n}\n.date-control:hover {\n  border-color: var(--color-border, #d1d5db);\n}\n.date-control:focus-visible {\n  outline: none;\n  border-color: var(--color-primary, #2563eb);\n  box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.2);\n}\n/*# sourceMappingURL=archives.component.css.map */\n'] }]
  }], () => [{ type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArchivesComponent, { className: "ArchivesComponent", filePath: "src/app/pages/archives/archives.component.ts", lineNumber: 14 });
})();
export {
  ArchivesComponent
};
//# sourceMappingURL=chunk-RPNEUGTS.js.map
