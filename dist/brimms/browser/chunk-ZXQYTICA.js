import {
  BaseChartDirective
} from "./chunk-XVBOCBM3.js";
import {
  DataService
} from "./chunk-EMIWMFU5.js";
import "./chunk-BPYJUQPN.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgClass,
  Subscription,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ISBYAA2X.js";
import "./chunk-YP43Q66R.js";

// src/app/pages/reports/reports.component.ts
var _c0 = (a0, a1) => ({ "badge--success": a0, "badge--warning": a1 });
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.id;
function ReportsComponent_Conditional_14_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const purok_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(purok_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(purok_r1.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", purok_r1.percentage, "%");
  }
}
function ReportsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "Resident Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "span", 9);
    \u0275\u0275text(6, "Total Residents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 11)(11, "span", 9);
    \u0275\u0275text(12, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "span", 9);
    \u0275\u0275text(18, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 13)(23, "span", 9);
    \u0275\u0275text(24, "Senior Citizens (60+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 10);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 14)(29, "span", 9);
    \u0275\u0275text(30, "Adults (18-59)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 10);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 14)(35, "span", 9);
    \u0275\u0275text(36, "Minors (<18)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 10);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 15)(41, "div", 16)(42, "h3", 17);
    \u0275\u0275text(43, "Residents by Purok (Bar)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 18);
    \u0275\u0275element(45, "canvas", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 16)(47, "h3", 17);
    \u0275\u0275text(48, "Age Group Distribution (Line)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 18);
    \u0275\u0275element(50, "canvas", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 20)(52, "h3");
    \u0275\u0275text(53, "Distribution by Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "table", 21)(55, "thead")(56, "tr")(57, "th");
    \u0275\u0275text(58, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "Residents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "Percentage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "tbody");
    \u0275\u0275repeaterCreate(64, ReportsComponent_Conditional_14_For_65_Template, 7, 3, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const stats_r3 = ctx_r1.getResidentStats();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, stats_r3.total));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, stats_r3.male));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, stats_r3.female));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 18, stats_r3.senior));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 20, stats_r3.adult));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 22, stats_r3.minor));
    \u0275\u0275advance(7);
    \u0275\u0275property("type", "bar")("data", ctx_r1.residentPurokBarData)("options", ctx_r1.barChartOptions);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", "line")("data", ctx_r1.ageGroupLineData)("options", ctx_r1.lineChartOptions);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.getResidentPuroks());
  }
}
function ReportsComponent_Conditional_15_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const purok_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(purok_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(purok_r4.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", purok_r4.percentage, "%");
  }
}
function ReportsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "Household Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "span", 9);
    \u0275\u0275text(6, "Total Households");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 11)(11, "span", 9);
    \u0275\u0275text(12, "Total Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "span", 9);
    \u0275\u0275text(18, "Average Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 15)(22, "div", 16)(23, "h3", 17);
    \u0275\u0275text(24, "Households by Purok (Bar)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18);
    \u0275\u0275element(26, "canvas", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 20)(28, "h3");
    \u0275\u0275text(29, "Distribution by Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "table", 21)(31, "thead")(32, "tr")(33, "th");
    \u0275\u0275text(34, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Households");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Percentage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "tbody");
    \u0275\u0275repeaterCreate(40, ReportsComponent_Conditional_15_For_41_Template, 7, 3, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const stats_r5 = ctx_r1.getHouseholdStats();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, stats_r5.total));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 8, stats_r5.totalMembers));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(stats_r5.avgMembers);
    \u0275\u0275advance(6);
    \u0275\u0275property("type", "bar")("data", ctx_r1.householdPurokBarData)("options", ctx_r1.barChartOptions);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.getHouseholdPuroks());
  }
}
function ReportsComponent_Conditional_16_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r6.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", type_r6.percentage, "%");
  }
}
function ReportsComponent_Conditional_16_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const req_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r7.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r7.purpose);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c0, req_r7.status === "Approved", req_r7.status === "Pending" || req_r7.status === "For Review"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", req_r7.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r7.date);
  }
}
function ReportsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "Certificate Request Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "span", 9);
    \u0275\u0275text(6, "Total Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 12)(11, "span", 9);
    \u0275\u0275text(12, "Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "span", 9);
    \u0275\u0275text(18, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 14)(23, "span", 9);
    \u0275\u0275text(24, "For Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 10);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 15)(29, "div", 16)(30, "h3", 17);
    \u0275\u0275text(31, "Requests by Certificate Type (Bar)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 18);
    \u0275\u0275element(33, "canvas", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 20)(35, "h3");
    \u0275\u0275text(36, "Requests by Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "table", 21)(38, "thead")(39, "tr")(40, "th");
    \u0275\u0275text(41, "Certificate Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45, "Percentage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "tbody");
    \u0275\u0275repeaterCreate(47, ReportsComponent_Conditional_16_For_48_Template, 7, 3, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 20)(50, "h3");
    \u0275\u0275text(51, "Recent Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "table", 21)(53, "thead")(54, "tr")(55, "th");
    \u0275\u0275text(56, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th");
    \u0275\u0275text(58, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "tbody");
    \u0275\u0275repeaterCreate(64, ReportsComponent_Conditional_16_For_65_Template, 10, 8, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const stats_r8 = ctx_r1.getRequestStats();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, stats_r8.total));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 9, stats_r8.approved));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 11, stats_r8.pending));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 13, stats_r8.forReview));
    \u0275\u0275advance(7);
    \u0275\u0275property("type", "bar")("data", ctx_r1.requestTypeBarData)("options", ctx_r1.barChartOptions);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.getRequestTypes());
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.data.requests);
  }
}
function ReportsComponent_Conditional_17_For_67_Template(rf, ctx) {
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const purok_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(purok_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(purok_r9.residents);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(purok_r9.households);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(purok_r9.avgMembers);
  }
}
function ReportsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "Demographics Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "h3");
    \u0275\u0275text(5, "Age Group Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7)(7, "div", 14)(8, "span", 9);
    \u0275\u0275text(9, "Minors (<18)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 23);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 11)(16, "span", 9);
    \u0275\u0275text(17, "Adults (18-59)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 10);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 13)(24, "span", 9);
    \u0275\u0275text(25, "Senior Citizens (60+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 10);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 23);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 20)(32, "h3");
    \u0275\u0275text(33, "Gender Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 7)(35, "div", 11)(36, "span", 9);
    \u0275\u0275text(37, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 10);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 23);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 12)(44, "span", 9);
    \u0275\u0275text(45, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 10);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 23);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 20)(52, "h3");
    \u0275\u0275text(53, "Geographic Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "table", 21)(55, "thead")(56, "tr")(57, "th");
    \u0275\u0275text(58, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "Residents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "Households");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th");
    \u0275\u0275text(64, "Avg Members/Household");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "tbody");
    \u0275\u0275repeaterCreate(66, ReportsComponent_Conditional_17_For_67_Template, 9, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const residentStats_r10 = ctx_r1.getResidentStats();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, residentStats_r10.minor));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (residentStats_r10.minor / residentStats_r10.total * 100).toFixed(1), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 12, residentStats_r10.adult));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (residentStats_r10.adult / residentStats_r10.total * 100).toFixed(1), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 14, residentStats_r10.senior));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (residentStats_r10.senior / residentStats_r10.total * 100).toFixed(1), "%");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 16, residentStats_r10.male));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (residentStats_r10.male / residentStats_r10.total * 100).toFixed(1), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 18, residentStats_r10.female));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (residentStats_r10.female / residentStats_r10.total * 100).toFixed(1), "%");
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.getDemographicPuroks());
  }
}
var ReportsComponent = class _ReportsComponent {
  constructor(data) {
    this.data = data;
    this.activeTab = "residents";
    this.subscriptions = new Subscription();
    this.residentPurokBarData = {
      labels: [],
      datasets: []
    };
    this.ageGroupLineData = {
      labels: [],
      datasets: []
    };
    this.householdPurokBarData = {
      labels: [],
      datasets: []
    };
    this.requestTypeBarData = {
      labels: [],
      datasets: []
    };
    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            boxWidth: 12
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: "#4b5563",
            maxRotation: 45,
            minRotation: 0
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(148, 163, 184, 0.25)"
          },
          ticks: {
            precision: 0
          }
        }
      }
    };
    this.lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            boxWidth: 12
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: "#4b5563"
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(148, 163, 184, 0.25)"
          },
          ticks: {
            precision: 0
          }
        }
      }
    };
  }
  ngOnInit() {
    this.updateResidentCharts();
    this.updateHouseholdCharts();
    this.updateRequestCharts();
    this.subscriptions.add(this.data.residentsObservable.subscribe(() => {
      this.updateResidentCharts();
    }));
    this.subscriptions.add(this.data.householdsObservable.subscribe(() => {
      this.updateHouseholdCharts();
    }));
    this.subscriptions.add(this.data.requestsObservable.subscribe(() => {
      this.updateRequestCharts();
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  // Resident Statistics
  getResidentStats() {
    const residents = this.data.getActiveResidents();
    const total = residents.length;
    const male = residents.filter((r) => r.gender === "Male").length;
    const female = residents.filter((r) => r.gender === "Female").length;
    const senior = residents.filter((r) => r.age >= 60).length;
    const adult = residents.filter((r) => r.age >= 18 && r.age < 60).length;
    const minor = residents.filter((r) => r.age < 18).length;
    const purokCounts = {};
    residents.forEach((r) => {
      purokCounts[r.purok] = (purokCounts[r.purok] || 0) + 1;
    });
    return {
      total,
      male,
      female,
      senior,
      adult,
      minor,
      purokCounts
    };
  }
  getResidentPuroks() {
    const stats = this.getResidentStats();
    return Object.keys(stats.purokCounts).map((purok) => ({
      name: purok,
      count: stats.purokCounts[purok],
      percentage: (stats.purokCounts[purok] / stats.total * 100).toFixed(1)
    }));
  }
  // Household Statistics
  getHouseholdStats() {
    const households = this.data.getActiveHouseholds();
    const total = households.length;
    const totalMembers = households.reduce((sum, h) => sum + h.members.length, 0);
    const avgMembers = total > 0 ? (totalMembers / total).toFixed(1) : 0;
    const purokCounts = {};
    households.forEach((h) => {
      purokCounts[h.purok] = (purokCounts[h.purok] || 0) + 1;
    });
    return {
      total,
      totalMembers,
      avgMembers,
      purokCounts
    };
  }
  getHouseholdPuroks() {
    const stats = this.getHouseholdStats();
    return Object.keys(stats.purokCounts).map((purok) => ({
      name: purok,
      count: stats.purokCounts[purok],
      percentage: (stats.purokCounts[purok] / stats.total * 100).toFixed(1)
    }));
  }
  // Certificate Request Statistics
  getRequestStats() {
    const requests = this.data.getActiveRequests();
    const total = requests.length;
    const approved = requests.filter((r) => r.status === "Approved").length;
    const pending = requests.filter((r) => r.status === "Pending").length;
    const forReview = requests.filter((r) => r.status === "For Review").length;
    const typeCounts = {};
    requests.forEach((r) => {
      typeCounts[r.type] = (typeCounts[r.type] || 0) + 1;
    });
    return {
      total,
      approved,
      pending,
      forReview,
      typeCounts
    };
  }
  getRequestTypes() {
    const stats = this.getRequestStats();
    return Object.keys(stats.typeCounts).map((type) => ({
      name: type,
      count: stats.typeCounts[type],
      percentage: (stats.typeCounts[type] / stats.total * 100).toFixed(1)
    }));
  }
  // Build / refresh chart data for residents tab
  updateResidentCharts() {
    const puroks = this.getResidentPuroks();
    this.residentPurokBarData = {
      labels: puroks.map((p) => p.name),
      datasets: [
        {
          data: puroks.map((p) => p.count),
          label: "Residents",
          backgroundColor: "#3b82f6",
          borderRadius: 6
        }
      ]
    };
    const stats = this.getResidentStats();
    const labels = ["Minors (<18)", "Adults (18-59)", "Senior Citizens (60+)"];
    const values = [stats.minor, stats.adult, stats.senior];
    this.ageGroupLineData = {
      labels,
      datasets: [
        {
          data: values,
          label: "Age Groups",
          fill: false,
          tension: 0.3,
          borderColor: "#6366f1",
          backgroundColor: "#6366f1",
          pointBackgroundColor: "#ffffff",
          pointBorderColor: "#6366f1",
          pointRadius: 4
        }
      ]
    };
  }
  // Build / refresh chart data for households tab
  updateHouseholdCharts() {
    const puroks = this.getHouseholdPuroks();
    this.householdPurokBarData = {
      labels: puroks.map((p) => p.name),
      datasets: [
        {
          data: puroks.map((p) => p.count),
          label: "Households",
          backgroundColor: "#22c55e",
          borderRadius: 6
        }
      ]
    };
  }
  // Build / refresh chart data for requests tab
  updateRequestCharts() {
    const types = this.getRequestTypes();
    this.requestTypeBarData = {
      labels: types.map((t) => t.name),
      datasets: [
        {
          data: types.map((t) => t.count),
          label: "Requests",
          backgroundColor: "#f97316",
          borderRadius: 6
        }
      ]
    };
  }
  getDemographicPuroks() {
    const residentStats = this.getResidentStats();
    const householdStats = this.getHouseholdStats();
    const puroks = /* @__PURE__ */ new Set([...Object.keys(residentStats.purokCounts), ...Object.keys(householdStats.purokCounts)]);
    return Array.from(puroks).map((purok) => ({
      name: purok,
      residents: residentStats.purokCounts[purok] || 0,
      households: householdStats.purokCounts[purok] || 0,
      avgMembers: householdStats.purokCounts[purok] ? ((residentStats.purokCounts[purok] || 0) / householdStats.purokCounts[purok]).toFixed(1) : "-"
    }));
  }
  static {
    this.\u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportsComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], decls: 18, vars: 16, consts: [[1, "reports-page"], [1, "page-title"], [1, "tabs-wrapper"], ["role", "tablist", 1, "tabs"], ["type", "button", "role", "tab", 1, "tab-button", 3, "click"], [1, "tab-content"], [1, "card"], [1, "stats-grid"], [1, "stat-card", "stat-card--blue"], [1, "stat-label"], [1, "stat-value"], [1, "stat-card", "stat-card--primary"], [1, "stat-card", "stat-card--success"], [1, "stat-card", "stat-card--warning"], [1, "stat-card", "stat-card--info"], [1, "charts-grid"], [1, "chart-card"], [1, "chart-title"], [1, "chart-container"], ["baseChart", "", 3, "type", "data", "options"], [1, "section"], [1, "table"], [1, "badge", 3, "ngClass"], [1, "stat-percentage"]], template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Reports & Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "nav", 3)(5, "button", 4);
        \u0275\u0275listener("click", function ReportsComponent_Template_button_click_5_listener() {
          return ctx.setActiveTab("residents");
        });
        \u0275\u0275text(6, " Resident Statistics ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function ReportsComponent_Template_button_click_7_listener() {
          return ctx.setActiveTab("households");
        });
        \u0275\u0275text(8, " Household Statistics ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 4);
        \u0275\u0275listener("click", function ReportsComponent_Template_button_click_9_listener() {
          return ctx.setActiveTab("requests");
        });
        \u0275\u0275text(10, " Certificate Requests ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 4);
        \u0275\u0275listener("click", function ReportsComponent_Template_button_click_11_listener() {
          return ctx.setActiveTab("demographics");
        });
        \u0275\u0275text(12, " Demographics ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 5);
        \u0275\u0275conditionalCreate(14, ReportsComponent_Conditional_14_Template, 66, 24, "div", 6);
        \u0275\u0275conditionalCreate(15, ReportsComponent_Conditional_15_Template, 42, 10, "div", 6);
        \u0275\u0275conditionalCreate(16, ReportsComponent_Conditional_16_Template, 66, 15, "div", 6);
        \u0275\u0275conditionalCreate(17, ReportsComponent_Conditional_17_Template, 68, 20, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "residents");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "residents");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "households");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "households");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "requests");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "requests");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "demographics");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "demographics");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.activeTab === "residents" ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "households" ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "requests" ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "demographics" ? 17 : -1);
      }
    }, dependencies: [CommonModule, NgClass, BaseChartDirective, DecimalPipe], styles: ["\n\n.reports-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.tabs-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  flex-wrap: wrap;\n}\n.tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.tabs[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 4px;\n}\n.tab-button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  color: var(--color-text-muted);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tab-button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n@media (max-width: 768px) {\n  .tabs[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    overflow-x: visible;\n  }\n  .tab-button[_ngcontent-%COMP%] {\n    flex: 1 1 50%;\n    min-width: 50%;\n    padding: 10px 8px;\n    font-size: 0.85rem;\n    white-space: normal;\n    text-align: center;\n  }\n}\n.tab-content[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow);\n  padding: 1.5rem;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 1rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1.25rem;\n  margin-top: 1.5rem;\n}\n.chart-card[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.chart-card[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.chart-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 260px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  display: block;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-percentage[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin-top: 4px;\n}\n.stat-card--blue[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: white;\n}\n.stat-card--blue[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], \n.stat-card--blue[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], \n.stat-card--blue[_ngcontent-%COMP%]   .stat-percentage[_ngcontent-%COMP%] {\n  color: white;\n}\n.stat-card--primary[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  border-color: var(--color-primary);\n}\n.stat-card--primary[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.stat-card--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  border-color: var(--color-success);\n}\n.stat-card--success[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.stat-card--warning[_ngcontent-%COMP%] {\n  background: var(--color-warning-bg);\n  border-color: var(--color-warning);\n}\n.stat-card--warning[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.stat-card--info[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  border-color: var(--color-primary-light);\n}\n.stat-card--info[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 1rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  background: var(--color-bg);\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, imports: [CommonModule, BaseChartDirective], template: `<div class="reports-page">\r
  <h1 class="page-title">Reports & Analytics</h1>\r
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
        Resident Statistics\r
      </button>\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'households'"\r
        (click)="setActiveTab('households')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'households'"\r
      >\r
        Household Statistics\r
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
        [class.active]="activeTab === 'demographics'"\r
        (click)="setActiveTab('demographics')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'demographics'"\r
      >\r
        Demographics\r
      </button>\r
    </nav>\r
  </div>\r
\r
  <div class="tab-content">\r
    @if (activeTab === 'residents') {\r
      <div class="card">\r
        <h2>Resident Statistics</h2>\r
        @let stats = getResidentStats();\r
        \r
        <div class="stats-grid">\r
          <div class="stat-card stat-card--blue">\r
            <span class="stat-label">Total Residents</span>\r
            <span class="stat-value">{{ stats.total | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--primary">\r
            <span class="stat-label">Male</span>\r
            <span class="stat-value">{{ stats.male | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--success">\r
            <span class="stat-label">Female</span>\r
            <span class="stat-value">{{ stats.female | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--warning">\r
            <span class="stat-label">Senior Citizens (60+)</span>\r
            <span class="stat-value">{{ stats.senior | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--info">\r
            <span class="stat-label">Adults (18-59)</span>\r
            <span class="stat-value">{{ stats.adult | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--info">\r
            <span class="stat-label">Minors (<18)</span>\r
            <span class="stat-value">{{ stats.minor | number }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="charts-grid">\r
          <div class="chart-card">\r
            <h3 class="chart-title">Residents by Purok (Bar)</h3>\r
            <div class="chart-container">\r
              <canvas\r
                baseChart\r
                [type]="'bar'"\r
                [data]="residentPurokBarData"\r
                [options]="barChartOptions">\r
              </canvas>\r
            </div>\r
          </div>\r
\r
          <div class="chart-card">\r
            <h3 class="chart-title">Age Group Distribution (Line)</h3>\r
            <div class="chart-container">\r
              <canvas\r
                baseChart\r
                [type]="'line'"\r
                [data]="ageGroupLineData"\r
                [options]="lineChartOptions">\r
              </canvas>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="section">\r
          <h3>Distribution by Purok</h3>\r
          <table class="table">\r
            <thead>\r
              <tr>\r
                <th>Purok</th>\r
                <th>Residents</th>\r
                <th>Percentage</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (purok of getResidentPuroks(); track purok.name) {\r
                <tr>\r
                  <td>{{ purok.name }}</td>\r
                  <td>{{ purok.count }}</td>\r
                  <td>{{ purok.percentage }}%</td>\r
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
        <h2>Household Statistics</h2>\r
        @let stats = getHouseholdStats();\r
        \r
        <div class="stats-grid">\r
          <div class="stat-card stat-card--blue">\r
            <span class="stat-label">Total Households</span>\r
            <span class="stat-value">{{ stats.total | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--primary">\r
            <span class="stat-label">Total Members</span>\r
            <span class="stat-value">{{ stats.totalMembers | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--success">\r
            <span class="stat-label">Average Members</span>\r
            <span class="stat-value">{{ stats.avgMembers }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="charts-grid">\r
          <div class="chart-card">\r
            <h3 class="chart-title">Households by Purok (Bar)</h3>\r
            <div class="chart-container">\r
              <canvas\r
                baseChart\r
                [type]="'bar'"\r
                [data]="householdPurokBarData"\r
                [options]="barChartOptions">\r
              </canvas>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="section">\r
          <h3>Distribution by Purok</h3>\r
          <table class="table">\r
            <thead>\r
              <tr>\r
                <th>Purok</th>\r
                <th>Households</th>\r
                <th>Percentage</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (purok of getHouseholdPuroks(); track purok.name) {\r
                <tr>\r
                  <td>{{ purok.name }}</td>\r
                  <td>{{ purok.count }}</td>\r
                  <td>{{ purok.percentage }}%</td>\r
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
        <h2>Certificate Request Statistics</h2>\r
        @let stats = getRequestStats();\r
        \r
        <div class="stats-grid">\r
          <div class="stat-card stat-card--blue">\r
            <span class="stat-label">Total Requests</span>\r
            <span class="stat-value">{{ stats.total | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--success">\r
            <span class="stat-label">Approved</span>\r
            <span class="stat-value">{{ stats.approved | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--warning">\r
            <span class="stat-label">Pending</span>\r
            <span class="stat-value">{{ stats.pending | number }}</span>\r
          </div>\r
          <div class="stat-card stat-card--info">\r
            <span class="stat-label">For Review</span>\r
            <span class="stat-value">{{ stats.forReview | number }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="charts-grid">\r
          <div class="chart-card">\r
            <h3 class="chart-title">Requests by Certificate Type (Bar)</h3>\r
            <div class="chart-container">\r
              <canvas\r
                baseChart\r
                [type]="'bar'"\r
                [data]="requestTypeBarData"\r
                [options]="barChartOptions">\r
              </canvas>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="section">\r
          <h3>Requests by Type</h3>\r
          <table class="table">\r
            <thead>\r
              <tr>\r
                <th>Certificate Type</th>\r
                <th>Count</th>\r
                <th>Percentage</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (type of getRequestTypes(); track type.name) {\r
                <tr>\r
                  <td>{{ type.name }}</td>\r
                  <td>{{ type.count }}</td>\r
                  <td>{{ type.percentage }}%</td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <div class="section">\r
          <h3>Recent Requests</h3>\r
          <table class="table">\r
            <thead>\r
              <tr>\r
                <th>Type</th>\r
                <th>Purpose</th>\r
                <th>Status</th>\r
                <th>Date</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (req of data.requests; track req.id) {\r
                <tr>\r
                  <td>{{ req.type }}</td>\r
                  <td>{{ req.purpose }}</td>\r
                  <td>\r
                    <span class="badge" [ngClass]="{\r
                      'badge--success': req.status === 'Approved',\r
                      'badge--warning': req.status === 'Pending' || req.status === 'For Review'\r
                    }">\r
                      {{ req.status }}\r
                    </span>\r
                  </td>\r
                  <td>{{ req.date }}</td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    }\r
\r
    @if (activeTab === 'demographics') {\r
      <div class="card">\r
        <h2>Demographics Overview</h2>\r
        @let residentStats = getResidentStats();\r
\r
        <div class="section">\r
          <h3>Age Group Distribution</h3>\r
          <div class="stats-grid">\r
            <div class="stat-card stat-card--info">\r
              <span class="stat-label">Minors (<18)</span>\r
              <span class="stat-value">{{ residentStats.minor | number }}</span>\r
              <span class="stat-percentage">{{ (residentStats.minor / residentStats.total * 100).toFixed(1) }}%</span>\r
            </div>\r
            <div class="stat-card stat-card--primary">\r
              <span class="stat-label">Adults (18-59)</span>\r
              <span class="stat-value">{{ residentStats.adult | number }}</span>\r
              <span class="stat-percentage">{{ (residentStats.adult / residentStats.total * 100).toFixed(1) }}%</span>\r
            </div>\r
            <div class="stat-card stat-card--warning">\r
              <span class="stat-label">Senior Citizens (60+)</span>\r
              <span class="stat-value">{{ residentStats.senior | number }}</span>\r
              <span class="stat-percentage">{{ (residentStats.senior / residentStats.total * 100).toFixed(1) }}%</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="section">\r
          <h3>Gender Distribution</h3>\r
          <div class="stats-grid">\r
            <div class="stat-card stat-card--primary">\r
              <span class="stat-label">Male</span>\r
              <span class="stat-value">{{ residentStats.male | number }}</span>\r
              <span class="stat-percentage">{{ (residentStats.male / residentStats.total * 100).toFixed(1) }}%</span>\r
            </div>\r
            <div class="stat-card stat-card--success">\r
              <span class="stat-label">Female</span>\r
              <span class="stat-value">{{ residentStats.female | number }}</span>\r
              <span class="stat-percentage">{{ (residentStats.female / residentStats.total * 100).toFixed(1) }}%</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="section">\r
          <h3>Geographic Distribution</h3>\r
          <table class="table">\r
            <thead>\r
              <tr>\r
                <th>Purok</th>\r
                <th>Residents</th>\r
                <th>Households</th>\r
                <th>Avg Members/Household</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (purok of getDemographicPuroks(); track purok.name) {\r
                <tr>\r
                  <td>{{ purok.name }}</td>\r
                  <td>{{ purok.residents }}</td>\r
                  <td>{{ purok.households }}</td>\r
                  <td>{{ purok.avgMembers }}</td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/reports/reports.component.scss */\n.reports-page {\n  width: 100%;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.tabs-wrapper {\n  margin-bottom: 1.75rem;\n}\n.tabs {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  flex-wrap: wrap;\n}\n.tabs::-webkit-scrollbar {\n  height: 4px;\n}\n.tabs::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 4px;\n}\n.tab-button {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  color: var(--color-text-muted);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tab-button:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tab-button.active {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n@media (max-width: 768px) {\n  .tabs {\n    display: flex;\n    flex-wrap: wrap;\n    overflow-x: visible;\n  }\n  .tab-button {\n    flex: 1 1 50%;\n    min-width: 50%;\n    padding: 10px 8px;\n    font-size: 0.85rem;\n    white-space: normal;\n    text-align: center;\n  }\n}\n.tab-content {\n  min-height: 400px;\n}\n.card {\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow);\n  padding: 1.5rem;\n}\n.card h2 {\n  margin: 0 0 1.5rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.card h3 {\n  margin: 1.5rem 0 1rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.charts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1.25rem;\n  margin-top: 1.5rem;\n}\n.chart-card {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.chart-card .chart-title {\n  margin: 0 0 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.chart-container {\n  position: relative;\n  width: 100%;\n  height: 260px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.stat-card {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-card .stat-label {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  display: block;\n}\n.stat-card .stat-value {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.stat-card .stat-percentage {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin-top: 4px;\n}\n.stat-card--blue {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: white;\n}\n.stat-card--blue .stat-label,\n.stat-card--blue .stat-value,\n.stat-card--blue .stat-percentage {\n  color: white;\n}\n.stat-card--primary {\n  background: var(--color-primary-bg);\n  border-color: var(--color-primary);\n}\n.stat-card--primary .stat-value {\n  color: var(--color-primary);\n}\n.stat-card--success {\n  background: var(--color-success-bg);\n  border-color: var(--color-success);\n}\n.stat-card--success .stat-value {\n  color: var(--color-success);\n}\n.stat-card--warning {\n  background: var(--color-warning-bg);\n  border-color: var(--color-warning);\n}\n.stat-card--warning .stat-value {\n  color: var(--color-warning);\n}\n.stat-card--info {\n  background: var(--color-primary-bg);\n  border-color: var(--color-primary-light);\n}\n.stat-card--info .stat-value {\n  color: var(--color-primary);\n}\n.section {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 1rem;\n}\n.table th,\n.table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n}\n.table th {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  background: var(--color-bg);\n}\n.table tr:hover td {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=reports.component.css.map */\n"] }]
  }], () => [{ type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/pages/reports/reports.component.ts", lineNumber: 15 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-ZXQYTICA.js.map
