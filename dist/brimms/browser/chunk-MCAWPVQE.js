import {
  AlertService
} from "./chunk-HUUENN5H.js";
import {
  E
} from "./chunk-3BQBTUJM.js";
import "./chunk-7YWLATDR.js";
import {
  BaseChartDirective
} from "./chunk-XPBSPHVN.js";
import {
  require_sweetalert2_all
} from "./chunk-75B3RZGW.js";
import {
  FormsModule
} from "./chunk-PCIERS7P.js";
import {
  DataService
} from "./chunk-2RJNPIJT.js";
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
} from "./chunk-TUEAJAVR.js";
import {
  __async,
  __toESM
} from "./chunk-TWWAJFRB.js";

// src/app/pages/reports/reports.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = (a0, a1) => ({ "badge--success": a0, "badge--warning": a1 });
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.id;
function ReportsComponent_Conditional_18_For_65_Template(rf, ctx) {
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
function ReportsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Resident Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11)(5, "span", 12);
    \u0275\u0275text(6, "Total Residents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 14)(11, "span", 12);
    \u0275\u0275text(12, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 13);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "span", 12);
    \u0275\u0275text(18, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 13);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 16)(23, "span", 12);
    \u0275\u0275text(24, "Senior Citizens (60+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 13);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 17)(29, "span", 12);
    \u0275\u0275text(30, "Adults (18-59)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 13);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 17)(35, "span", 12);
    \u0275\u0275text(36, "Minors (<18)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 13);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 18)(41, "div", 19)(42, "h3", 20);
    \u0275\u0275text(43, "Residents by Purok (Bar)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 21);
    \u0275\u0275element(45, "canvas", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 19)(47, "h3", 20);
    \u0275\u0275text(48, "Age Group Distribution (Line)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 21);
    \u0275\u0275element(50, "canvas", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 23)(52, "h3");
    \u0275\u0275text(53, "Distribution by Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "table", 24)(55, "thead")(56, "tr")(57, "th");
    \u0275\u0275text(58, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "Residents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "Percentage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "tbody");
    \u0275\u0275repeaterCreate(64, ReportsComponent_Conditional_18_For_65_Template, 7, 3, "tr", null, _forTrack0);
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
function ReportsComponent_Conditional_19_For_41_Template(rf, ctx) {
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
function ReportsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Household Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11)(5, "span", 12);
    \u0275\u0275text(6, "Total Households");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 14)(11, "span", 12);
    \u0275\u0275text(12, "Total Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 13);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "span", 12);
    \u0275\u0275text(18, "Average Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 13);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 18)(22, "div", 19)(23, "h3", 20);
    \u0275\u0275text(24, "Households by Purok (Bar)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21);
    \u0275\u0275element(26, "canvas", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 23)(28, "h3");
    \u0275\u0275text(29, "Distribution by Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "table", 24)(31, "thead")(32, "tr")(33, "th");
    \u0275\u0275text(34, "Purok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Households");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Percentage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "tbody");
    \u0275\u0275repeaterCreate(40, ReportsComponent_Conditional_19_For_41_Template, 7, 3, "tr", null, _forTrack0);
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
function ReportsComponent_Conditional_20_For_48_Template(rf, ctx) {
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
function ReportsComponent_Conditional_20_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 25);
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
function ReportsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Certificate Request Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11)(5, "span", 12);
    \u0275\u0275text(6, "Total Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 15)(11, "span", 12);
    \u0275\u0275text(12, "Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 13);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "span", 12);
    \u0275\u0275text(18, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 13);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 17)(23, "span", 12);
    \u0275\u0275text(24, "For Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 13);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 18)(29, "div", 19)(30, "h3", 20);
    \u0275\u0275text(31, "Requests by Certificate Type (Bar)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 21);
    \u0275\u0275element(33, "canvas", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 23)(35, "h3");
    \u0275\u0275text(36, "Requests by Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "table", 24)(38, "thead")(39, "tr")(40, "th");
    \u0275\u0275text(41, "Certificate Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45, "Percentage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "tbody");
    \u0275\u0275repeaterCreate(47, ReportsComponent_Conditional_20_For_48_Template, 7, 3, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 23)(50, "h3");
    \u0275\u0275text(51, "Recent Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "table", 24)(53, "thead")(54, "tr")(55, "th");
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
    \u0275\u0275repeaterCreate(64, ReportsComponent_Conditional_20_For_65_Template, 10, 8, "tr", null, _forTrack1);
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
    \u0275\u0275repeater(ctx_r1.getRequestsForReports());
  }
}
function ReportsComponent_Conditional_21_For_67_Template(rf, ctx) {
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
function ReportsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Demographics Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "h3");
    \u0275\u0275text(5, "Age Group Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "div", 17)(8, "span", 12);
    \u0275\u0275text(9, "Minors (<18)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 13);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 26);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14)(16, "span", 12);
    \u0275\u0275text(17, "Adults (18-59)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 13);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 26);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 16)(24, "span", 12);
    \u0275\u0275text(25, "Senior Citizens (60+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 13);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 26);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 23)(32, "h3");
    \u0275\u0275text(33, "Gender Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 10)(35, "div", 14)(36, "span", 12);
    \u0275\u0275text(37, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 13);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 26);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 15)(44, "span", 12);
    \u0275\u0275text(45, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 13);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 26);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 23)(52, "h3");
    \u0275\u0275text(53, "Geographic Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "table", 24)(55, "thead")(56, "tr")(57, "th");
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
    \u0275\u0275repeaterCreate(66, ReportsComponent_Conditional_21_For_67_Template, 9, 4, "tr", null, _forTrack0);
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
  constructor(data, alerts) {
    this.data = data;
    this.alerts = alerts;
    this.activeTab = "residents";
    this.reportPeriod = "all";
    this.reportFormat = "pdf";
    this.subscriptions = new Subscription();
    this.pdfLayout = {
      marginX: 14,
      marginTop: 14,
      marginBottom: 18,
      pageFooterY: 285,
      contentBottom: 272
    };
    this.pdfColors = {
      primary: [37, 99, 235],
      primaryDark: [30, 64, 175],
      success: [22, 163, 74],
      warning: [217, 119, 6],
      info: [2, 132, 199],
      danger: [220, 38, 38],
      text: [15, 23, 42],
      muted: [100, 116, 139],
      border: [226, 232, 240],
      headerBg: [241, 245, 249],
      rowAlt: [248, 250, 252],
      white: [255, 255, 255]
    };
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
    const requests = this.getRequestsForReports();
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
  // Date + period helpers for request-based reports
  parseDate(value) {
    if (!value)
      return null;
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }
  /** Human-readable date for PDF and on-screen consistency. */
  formatDateForExport(value) {
    const d = value instanceof Date ? value : this.parseDate(typeof value === "string" ? value : void 0);
    if (!d) {
      return typeof value === "string" ? value : "";
    }
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
  /**
   * ISO date prefixed with tab so Excel treats the cell as text (avoids #####).
   */
  formatDateForCsv(value) {
    const d = value instanceof Date ? value : this.parseDate(typeof value === "string" ? value : void 0);
    if (!d) {
      const fallback = typeof value === "string" ? value : "";
      return fallback ? `	${fallback}` : "";
    }
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `	${y}-${m}-${day}`;
  }
  getRequestsForReports() {
    const all = this.data.getActiveRequests();
    if (this.reportPeriod === "all") {
      return all;
    }
    const today = /* @__PURE__ */ new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const todayMidnight = new Date(currentYear, currentMonth, today.getDate());
    const dayMs = 24 * 60 * 60 * 1e3;
    return all.filter((req) => {
      const parsed = this.parseDate(req.date);
      if (!parsed)
        return false;
      const d = new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
      switch (this.reportPeriod) {
        case "last_15_days": {
          const threshold = new Date(todayMidnight.getTime() - 14 * dayMs);
          return d >= threshold && d <= todayMidnight;
        }
        case "this_month":
          return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
        case "this_semester": {
          const semesterStartMonth = currentMonth < 6 ? 0 : 6;
          const semesterEndMonth = currentMonth < 6 ? 5 : 11;
          return d.getFullYear() === currentYear && d.getMonth() >= semesterStartMonth && d.getMonth() <= semesterEndMonth;
        }
        case "this_year":
          return d.getFullYear() === currentYear;
        default:
          return true;
      }
    });
  }
  onReportPeriodChange() {
    this.updateRequestCharts();
  }
  getPeriodLabel() {
    switch (this.reportPeriod) {
      case "last_15_days":
        return "last_15_days";
      case "this_month":
        return "this_month";
      case "this_semester":
        return "this_semester";
      case "this_year":
        return "this_year";
      default:
        return "all";
    }
  }
  getReadablePeriodLabel() {
    switch (this.reportPeriod) {
      case "last_15_days":
        return "Last 15 days";
      case "this_month":
        return "This month";
      case "this_semester":
        return "This semester";
      case "this_year":
        return "This year";
      default:
        return "All time";
    }
  }
  exportReports() {
    return __async(this, null, function* () {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        const result2 = yield import_sweetalert2.default.fire({
          title: "Export reports",
          html: `
          <div class="form-group" style="text-align:left;margin-top:8px;">
            <label for="swal-report-period">Report period</label>
            <select id="swal-report-period" class="form-control">
              <option value="all"${this.reportPeriod === "all" ? " selected" : ""}>All</option>
              <option value="last_15_days"${this.reportPeriod === "last_15_days" ? " selected" : ""}>Last 15 days</option>
              <option value="this_month"${this.reportPeriod === "this_month" ? " selected" : ""}>This month</option>
              <option value="this_semester"${this.reportPeriod === "this_semester" ? " selected" : ""}>This semester</option>
              <option value="this_year"${this.reportPeriod === "this_year" ? " selected" : ""}>This year</option>
            </select>
          </div>
          <div class="form-group" style="text-align:left;margin-top:10px;">
            <label>Format</label>
            <div style="display:flex;gap:0.75rem;margin-top:6px;">
              <label style="display:flex;align-items:center;gap:6px;font-size:0.9rem;">
                <input type="radio" name="swal-report-format" value="pdf" ${this.reportFormat === "pdf" ? "checked" : ""}/>
                <span>PDF</span>
              </label>
              <label style="display:flex;align-items:center;gap:6px;font-size:0.9rem;">
                <input type="radio" name="swal-report-format" value="excel" ${this.reportFormat === "excel" ? "checked" : ""}/>
                <span>Excel (CSV)</span>
              </label>
            </div>
          </div>
        `,
          focusConfirm: false,
          showCancelButton: true,
          confirmButtonText: "Export",
          cancelButtonText: "Cancel",
          icon: "question",
          preConfirm: () => {
            const periodSelect = document.getElementById("swal-report-period");
            const checkedFormat = document.querySelector('input[name="swal-report-format"]:checked');
            if (!periodSelect || !checkedFormat) {
              import_sweetalert2.default.showValidationMessage("Please choose period and format.");
              return;
            }
            return {
              period: periodSelect.value,
              format: checkedFormat.value
            };
          }
        });
        if (result2.isConfirmed && result2.value) {
          this.reportPeriod = result2.value.period;
          this.reportFormat = result2.value.format;
          this.updateRequestCharts();
          if (this.reportFormat === "pdf") {
            this.exportPdf();
          } else {
            this.exportCsv();
          }
        }
        return;
      }
      const result = yield import_sweetalert2.default.fire({
        title: "Export reports",
        html: `
        <div class="form-group" style="text-align:left;margin-top:8px;">
          <label for="swal-report-period">Report period</label>
          <select id="swal-report-period" class="form-control">
            <option value="all"${this.reportPeriod === "all" ? " selected" : ""}>All</option>
            <option value="last_15_days"${this.reportPeriod === "last_15_days" ? " selected" : ""}>Last 15 days</option>
            <option value="this_month"${this.reportPeriod === "this_month" ? " selected" : ""}>This month</option>
            <option value="this_semester"${this.reportPeriod === "this_semester" ? " selected" : ""}>This semester</option>
            <option value="this_year"${this.reportPeriod === "this_year" ? " selected" : ""}>This year</option>
          </select>
        </div>
        <div class="form-group" style="text-align:left;margin-top:10px;">
          <label>Format</label>
          <div style="display:flex;gap:0.75rem;margin-top:6px;">
            <label style="display:flex;align-items:center;gap:6px;font-size:0.9rem;">
              <input type="radio" name="swal-report-format" value="pdf" ${this.reportFormat === "pdf" ? "checked" : ""}/>
              <span>PDF</span>
            </label>
            <label style="display:flex;align-items:center;gap:6px;font-size:0.9rem;">
              <input type="radio" name="swal-report-format" value="excel" ${this.reportFormat === "excel" ? "checked" : ""}/>
              <span>Excel (CSV)</span>
            </label>
          </div>
        </div>
      `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Export",
        cancelButtonText: "Cancel",
        icon: "question",
        preConfirm: () => {
          const periodSelect = document.getElementById("swal-report-period");
          const checkedFormat = document.querySelector('input[name="swal-report-format"]:checked');
          if (!periodSelect || !checkedFormat) {
            import_sweetalert2.default.showValidationMessage("Please choose period and format.");
            return;
          }
          return {
            period: periodSelect.value,
            format: checkedFormat.value
          };
        }
      });
      if (result.isConfirmed && result.value) {
        this.reportPeriod = result.value.period;
        this.reportFormat = result.value.format;
        this.updateRequestCharts();
        if (this.reportFormat === "pdf") {
          this.exportPdf();
        } else {
          this.exportCsv();
        }
      }
    });
  }
  exportPdf() {
    const label = this.getPeriodLabel();
    const periodLabel = this.getReadablePeriodLabel();
    const generatedOn = this.formatDateForExport(/* @__PURE__ */ new Date());
    const residentStats = this.getResidentStats();
    const householdStats = this.getHouseholdStats();
    const demographicPuroks = this.getDemographicPuroks();
    const requestStats = this.getRequestStats();
    const requests = this.getRequestsForReports();
    const doc = new E("portrait", "mm", "a4");
    let y = this.pdfDrawCoverHeader(doc, periodLabel, generatedOn);
    y = this.pdfDrawSection(doc, y, "Resident Statistics", "Active residents registered in the barangay");
    y = this.pdfDrawStatCards(doc, y, [
      { label: "Total Residents", value: residentStats.total },
      { label: "Male", value: residentStats.male },
      { label: "Female", value: residentStats.female },
      { label: "Seniors (60+)", value: residentStats.senior }
    ]);
    y = this.pdfDrawStatCards(doc, y, [
      { label: "Minors (<18)", value: residentStats.minor },
      { label: "Adults (18-59)", value: residentStats.adult }
    ], 2);
    y = this.pdfDrawDataTable(doc, y, [
      { header: "Purok", width: 90 },
      { header: "Residents", width: 40, align: "right" },
      { header: "Share", width: 52, align: "right" }
    ], this.getResidentPuroks().map((p) => [p.name, String(p.count), `${p.percentage}%`]));
    y = this.pdfDrawSection(doc, y, "Household Statistics", "Active households and membership summary");
    y = this.pdfDrawStatCards(doc, y, [
      { label: "Total Households", value: householdStats.total },
      { label: "Total Members", value: householdStats.totalMembers },
      { label: "Avg Members / HH", value: householdStats.avgMembers }
    ], 3);
    y = this.pdfDrawDataTable(doc, y, [
      { header: "Purok", width: 90 },
      { header: "Households", width: 40, align: "right" },
      { header: "Share", width: 52, align: "right" }
    ], this.getHouseholdPuroks().map((p) => [p.name, String(p.count), `${p.percentage}%`]));
    y = this.pdfDrawSection(doc, y, "Demographics Overview", "Residents and households combined by purok");
    y = this.pdfDrawDataTable(doc, y, [
      { header: "Purok", width: 52 },
      { header: "Residents", width: 32, align: "right" },
      { header: "Households", width: 36, align: "right" },
      { header: "Avg / HH", width: 62, align: "right" }
    ], demographicPuroks.map((p) => [
      p.name,
      String(p.residents),
      String(p.households),
      String(p.avgMembers)
    ]));
    y = this.pdfDrawSection(doc, y, "Certificate Requests", "Requests included for the selected reporting period");
    y = this.pdfDrawStatCards(doc, y, [
      { label: "Total Requests", value: requestStats.total },
      { label: "Approved", value: requestStats.approved },
      { label: "Pending", value: requestStats.pending },
      { label: "For Review", value: requestStats.forReview }
    ]);
    this.pdfDrawRequestsTable(doc, y, requests);
    this.pdfAddFooters(doc, periodLabel);
    doc.save(`BRIMS_reports_${label}.pdf`);
  }
  pdfPageWidth(doc) {
    return doc.internal.pageSize.getWidth();
  }
  pdfPageHeight(doc) {
    return doc.internal.pageSize.getHeight();
  }
  pdfContentWidth(doc) {
    return this.pdfPageWidth(doc) - this.pdfLayout.marginX * 2;
  }
  pdfEnsureSpace(doc, y, needed) {
    if (y + needed <= this.pdfLayout.contentBottom) {
      return { y, newPage: false };
    }
    doc.addPage();
    return { y: this.pdfDrawPageBand(doc), newPage: true };
  }
  pdfDrawPageBand(doc) {
    const w = this.pdfPageWidth(doc);
    const [r, g, b] = this.pdfColors.primary;
    doc.setFillColor(r, g, b);
    doc.rect(0, 0, w, 10, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text("BRIMS Barangay Reports", this.pdfLayout.marginX, 6.5);
    doc.setTextColor(...this.pdfColors.text);
    return 16;
  }
  pdfDrawCoverHeader(doc, periodLabel, generatedOn) {
    const w = this.pdfPageWidth(doc);
    const [r, g, b] = this.pdfColors.primary;
    const [rd, gd, bd] = this.pdfColors.primaryDark;
    doc.setFillColor(rd, gd, bd);
    doc.rect(0, 0, w, 38, "F");
    doc.setFillColor(r, g, b);
    doc.rect(0, 32, w, 6, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("BRIMS", this.pdfLayout.marginX, 16);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Barangay Information Management System", this.pdfLayout.marginX, 22);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("Barangay Reports", this.pdfLayout.marginX, 29);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const metaX = w - this.pdfLayout.marginX;
    doc.text("Reporting period", metaX, 14, { align: "right" });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(periodLabel, metaX, 19, { align: "right" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("Generated on", metaX, 26, { align: "right" });
    doc.text(generatedOn, metaX, 31, { align: "right" });
    const boxY = 44;
    const boxH = 14;
    doc.setDrawColor(...this.pdfColors.border);
    doc.setFillColor(...this.pdfColors.headerBg);
    doc.roundedRect(this.pdfLayout.marginX, boxY, this.pdfContentWidth(doc), boxH, 2, 2, "FD");
    doc.setTextColor(...this.pdfColors.muted);
    doc.setFontSize(8);
    doc.text("CONFIDENTIAL \xB7 For official barangay use only", this.pdfLayout.marginX + 4, boxY + 5);
    doc.setTextColor(...this.pdfColors.text);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("This document summarizes resident, household, and certificate request data from BRIMS.", this.pdfLayout.marginX + 4, boxY + 10);
    return boxY + boxH + 8;
  }
  pdfDrawSection(doc, y, title, subtitle) {
    y = this.pdfEnsureSpace(doc, y, subtitle ? 22 : 16).y;
    y += 4;
    const [r, g, b] = this.pdfColors.primary;
    doc.setFillColor(r, g, b);
    doc.rect(this.pdfLayout.marginX, y - 2, 3, 8, "F");
    doc.setTextColor(...this.pdfColors.text);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(title, this.pdfLayout.marginX + 6, y + 4);
    if (subtitle) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...this.pdfColors.muted);
      doc.text(subtitle, this.pdfLayout.marginX + 6, y + 10);
      y += 14;
    } else {
      y += 10;
    }
    return y;
  }
  pdfDrawStatCards(doc, y, cards, columns = 4) {
    const gap = 3;
    const count = Math.min(columns, cards.length);
    const cardW = (this.pdfContentWidth(doc) - gap * (count - 1)) / count;
    const cardH = 16;
    const rows = Math.ceil(cards.length / count);
    const blockH = rows * cardH + (rows - 1) * gap + 4;
    y = this.pdfEnsureSpace(doc, y, blockH).y;
    cards.forEach((card, index) => {
      const col = index % count;
      const row = Math.floor(index / count);
      const x = this.pdfLayout.marginX + col * (cardW + gap);
      const cardY = y + row * (cardH + gap);
      doc.setDrawColor(...this.pdfColors.border);
      doc.setFillColor(...this.pdfColors.white);
      doc.roundedRect(x, cardY, cardW, cardH, 2, 2, "FD");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(...this.pdfColors.muted);
      doc.text(card.label, x + 4, cardY + 6);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(...this.pdfColors.primary);
      doc.text(String(card.value), x + 4, cardY + 13);
    });
    return y + blockH;
  }
  pdfDrawDataTable(doc, y, columns, rows) {
    const rowH = 7;
    const headerH = 8;
    const tableW = columns.reduce((sum, col) => sum + col.width, 0);
    const colXs = columns.reduce((acc, col, i) => {
      acc.push(i === 0 ? this.pdfLayout.marginX : acc[i - 1] + columns[i - 1].width);
      return acc;
    }, []);
    const drawHeader = (startY) => {
      const [r, g, b] = this.pdfColors.primary;
      doc.setFillColor(r, g, b);
      doc.rect(this.pdfLayout.marginX, startY, tableW, headerH, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(255, 255, 255);
      columns.forEach((col, i) => {
        const textX = col.align === "right" ? colXs[i] + col.width - 3 : col.align === "center" ? colXs[i] + col.width / 2 : colXs[i] + 3;
        doc.text(col.header, textX, startY + 5.5, {
          align: col.align === "right" ? "right" : col.align === "center" ? "center" : "left"
        });
      });
      return startY + headerH;
    };
    if (rows.length === 0) {
      y = this.pdfEnsureSpace(doc, y, headerH + rowH + 4).y;
      y = drawHeader(y);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(...this.pdfColors.muted);
      doc.text("No data available for this section.", this.pdfLayout.marginX + 3, y + 5);
      return y + rowH + 4;
    }
    y = this.pdfEnsureSpace(doc, y, headerH + rowH + 2).y;
    y = drawHeader(y);
    rows.forEach((row, rowIndex) => {
      const space = this.pdfEnsureSpace(doc, y, rowH + 2);
      y = space.y;
      if (space.newPage) {
        y = drawHeader(y);
      }
      if (rowIndex % 2 === 1) {
        doc.setFillColor(...this.pdfColors.rowAlt);
        doc.rect(this.pdfLayout.marginX, y, tableW, rowH, "F");
      }
      doc.setDrawColor(...this.pdfColors.border);
      doc.setLineWidth(0.1);
      doc.line(this.pdfLayout.marginX, y + rowH, this.pdfLayout.marginX + tableW, y + rowH);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...this.pdfColors.text);
      row.forEach((cell, i) => {
        const col = columns[i];
        const textX = col.align === "right" ? colXs[i] + col.width - 3 : col.align === "center" ? colXs[i] + col.width / 2 : colXs[i] + 3;
        const clipped = cell.length > 42 && col.align !== "right" ? `${cell.slice(0, 39)}\u2026` : cell;
        doc.text(clipped, textX, y + 5, {
          align: col.align === "right" ? "right" : col.align === "center" ? "center" : "left"
        });
      });
      y += rowH;
    });
    return y + 4;
  }
  pdfDrawStatusBadge(doc, x, y, status) {
    const colorMap = {
      Approved: this.pdfColors.success,
      Pending: this.pdfColors.warning,
      "For Review": this.pdfColors.info,
      Rejected: this.pdfColors.danger
    };
    const fill = colorMap[status] ?? this.pdfColors.muted;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    const padX = 2.5;
    const badgeW = doc.getTextWidth(status) + padX * 2;
    const badgeH = 4.5;
    doc.setFillColor(...fill);
    doc.roundedRect(x, y - 3.2, badgeW, badgeH, 1, 1, "F");
    doc.setTextColor(255, 255, 255);
    doc.text(status, x + padX, y);
    doc.setTextColor(...this.pdfColors.text);
  }
  pdfDrawRequestsTable(doc, y, requests) {
    const columns = [
      { header: "Date", width: 28 },
      { header: "Type", width: 44 },
      { header: "Purpose", width: 78 },
      { header: "Status", width: 32, align: "center" }
    ];
    const tableW = columns.reduce((sum, c) => sum + c.width, 0);
    const colXs = columns.reduce((acc, col, i) => {
      acc.push(i === 0 ? this.pdfLayout.marginX : acc[i - 1] + columns[i - 1].width);
      return acc;
    }, []);
    const headerH = 8;
    const baseRowH = 7;
    const drawHeader = (startY) => {
      doc.setFillColor(...this.pdfColors.primary);
      doc.rect(this.pdfLayout.marginX, startY, tableW, headerH, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(255, 255, 255);
      columns.forEach((col, i) => {
        const textX = colXs[i] + (col.align === "center" ? col.width / 2 : 3);
        doc.text(col.header, textX, startY + 5.5, {
          align: col.align === "center" ? "center" : "left"
        });
      });
      return startY + headerH;
    };
    if (requests.length === 0) {
      y = this.pdfEnsureSpace(doc, y, headerH + baseRowH + 4).y;
      drawHeader(y);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(...this.pdfColors.muted);
      doc.text("No certificate requests for this period.", this.pdfLayout.marginX + 3, y + headerH + 5);
      return;
    }
    y = this.pdfEnsureSpace(doc, y, headerH + baseRowH + 2).y;
    y = drawHeader(y);
    requests.forEach((req, rowIndex) => {
      const purpose = req.purpose || "\u2014";
      const purposeLines = doc.splitTextToSize(purpose, columns[2].width - 4);
      const rowH = Math.max(baseRowH, purposeLines.length * 4.2 + 2.5);
      const space = this.pdfEnsureSpace(doc, y, rowH + 2);
      y = space.y;
      if (space.newPage) {
        y = drawHeader(y);
      }
      if (rowIndex % 2 === 1) {
        doc.setFillColor(...this.pdfColors.rowAlt);
        doc.rect(this.pdfLayout.marginX, y, tableW, rowH, "F");
      }
      doc.setDrawColor(...this.pdfColors.border);
      doc.setLineWidth(0.1);
      doc.line(this.pdfLayout.marginX, y + rowH, this.pdfLayout.marginX + tableW, y + rowH);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...this.pdfColors.text);
      doc.text(this.formatDateForExport(req.date), colXs[0] + 3, y + 5);
      doc.text(req.type || "\u2014", colXs[1] + 3, y + 5);
      doc.text(purposeLines, colXs[2] + 3, y + 5);
      if (req.status) {
        this.pdfDrawStatusBadge(doc, colXs[3] + 4, y + 5.2, req.status);
      }
      y += rowH;
    });
  }
  pdfAddFooters(doc, periodLabel) {
    const total = doc.getNumberOfPages();
    const w = this.pdfPageWidth(doc);
    const h = this.pdfPageHeight(doc);
    for (let page = 1; page <= total; page++) {
      doc.setPage(page);
      doc.setDrawColor(...this.pdfColors.border);
      doc.setLineWidth(0.2);
      doc.line(this.pdfLayout.marginX, h - 14, w - this.pdfLayout.marginX, h - 14);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(...this.pdfColors.muted);
      doc.text(`BRIMS Barangay Reports \xB7 ${periodLabel}`, this.pdfLayout.marginX, h - 9);
      doc.text(`Page ${page} of ${total}`, w - this.pdfLayout.marginX, h - 9, { align: "right" });
    }
  }
  csvRow(...cols) {
    return cols.map((col) => {
      const value = String(col ?? "");
      if (/[",\n]/.test(value)) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    }).join(",");
  }
  exportCsv() {
    const label = this.getPeriodLabel();
    const residentStats = this.getResidentStats();
    const householdStats = this.getHouseholdStats();
    const demographicPuroks = this.getDemographicPuroks();
    const requestStats = this.getRequestStats();
    const requests = this.getRequestsForReports();
    const lines = [];
    lines.push(this.csvRow("BRIMS Barangay Reports"));
    lines.push(this.csvRow(`Reporting period: ${this.getReadablePeriodLabel()}`));
    lines.push(this.csvRow(`Generated on: ${this.formatDateForExport(/* @__PURE__ */ new Date())}`));
    lines.push("");
    lines.push(this.csvRow("Resident Statistics"));
    lines.push(this.csvRow("Total residents", residentStats.total));
    lines.push(this.csvRow("Male", residentStats.male));
    lines.push(this.csvRow("Female", residentStats.female));
    lines.push(this.csvRow("Minors (<18)", residentStats.minor));
    lines.push(this.csvRow("Adults (18-59)", residentStats.adult));
    lines.push(this.csvRow("Seniors (60+)", residentStats.senior));
    lines.push("");
    lines.push(this.csvRow("Purok", "Residents", "Percentage"));
    this.getResidentPuroks().forEach((p) => {
      lines.push(this.csvRow(p.name, p.count, `${p.percentage}%`));
    });
    lines.push("");
    lines.push(this.csvRow("Household Statistics"));
    lines.push(this.csvRow("Total households", householdStats.total));
    lines.push(this.csvRow("Total members", householdStats.totalMembers));
    lines.push(this.csvRow("Average members/household", householdStats.avgMembers));
    lines.push("");
    lines.push(this.csvRow("Purok", "Households", "Percentage"));
    this.getHouseholdPuroks().forEach((p) => {
      lines.push(this.csvRow(p.name, p.count, `${p.percentage}%`));
    });
    lines.push("");
    lines.push(this.csvRow("Demographics Overview"));
    lines.push(this.csvRow("Purok", "Residents", "Households", "Avg members/HH"));
    demographicPuroks.forEach((p) => {
      lines.push(this.csvRow(p.name, p.residents, p.households, p.avgMembers));
    });
    lines.push("");
    lines.push(this.csvRow("Certificate Requests"));
    lines.push(this.csvRow("Total", requestStats.total, "Approved", requestStats.approved, "Pending", requestStats.pending, "For Review", requestStats.forReview));
    lines.push("");
    lines.push(this.csvRow("Date", "Type", "Purpose", "Status"));
    requests.forEach((req) => {
      lines.push(this.csvRow(this.formatDateForCsv(req.date), req.type || "", req.purpose || "", req.status || ""));
    });
    const csvContent = `\uFEFF${lines.join("\r\n")}`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `BRIMS_reports_${label}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
      return new (__ngFactoryType__ || _ReportsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AlertService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], decls: 22, vars: 16, consts: [[1, "reports-page"], [1, "page-title"], [1, "reports-toolbar"], [1, "toolbar-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "tabs-wrapper"], ["role", "tablist", 1, "tabs"], ["type", "button", "role", "tab", 1, "tab-button", 3, "click"], [1, "tab-content"], [1, "card"], [1, "stats-grid"], [1, "stat-card", "stat-card--blue"], [1, "stat-label"], [1, "stat-value"], [1, "stat-card", "stat-card--primary"], [1, "stat-card", "stat-card--success"], [1, "stat-card", "stat-card--warning"], [1, "stat-card", "stat-card--info"], [1, "charts-grid"], [1, "chart-card"], [1, "chart-title"], [1, "chart-container"], ["baseChart", "", 3, "type", "data", "options"], [1, "section"], [1, "table"], [1, "badge", 3, "ngClass"], [1, "stat-percentage"]], template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Reports & Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "button", 4);
        \u0275\u0275listener("click", function ReportsComponent_Template_button_click_5_listener() {
          return ctx.exportReports();
        });
        \u0275\u0275text(6, " Export ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "nav", 6)(9, "button", 7);
        \u0275\u0275listener("click", function ReportsComponent_Template_button_click_9_listener() {
          return ctx.setActiveTab("residents");
        });
        \u0275\u0275text(10, " Resident Statistics ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 7);
        \u0275\u0275listener("click", function ReportsComponent_Template_button_click_11_listener() {
          return ctx.setActiveTab("households");
        });
        \u0275\u0275text(12, " Household Statistics ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function ReportsComponent_Template_button_click_13_listener() {
          return ctx.setActiveTab("requests");
        });
        \u0275\u0275text(14, " Certificate Requests ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 7);
        \u0275\u0275listener("click", function ReportsComponent_Template_button_click_15_listener() {
          return ctx.setActiveTab("demographics");
        });
        \u0275\u0275text(16, " Demographics ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 8);
        \u0275\u0275conditionalCreate(18, ReportsComponent_Conditional_18_Template, 66, 24, "div", 9);
        \u0275\u0275conditionalCreate(19, ReportsComponent_Conditional_19_Template, 42, 10, "div", 9);
        \u0275\u0275conditionalCreate(20, ReportsComponent_Conditional_20_Template, 66, 15, "div", 9);
        \u0275\u0275conditionalCreate(21, ReportsComponent_Conditional_21_Template, 68, 20, "div", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
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
        \u0275\u0275conditional(ctx.activeTab === "residents" ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "households" ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "requests" ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "demographics" ? 21 : -1);
      }
    }, dependencies: [CommonModule, NgClass, BaseChartDirective, FormsModule, DecimalPipe], styles: ["\n.reports-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.reports-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.toolbar-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.toolbar-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.toolbar-select[_ngcontent-%COMP%] {\n  min-width: 190px;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.9rem;\n  border-radius: 9999px;\n  border: 1px solid transparent;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n}\n.btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: #ffffff;\n  box-shadow: 0 1px 3px rgba(37, 99, 235, 0.35);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-dark, #1d4ed8);\n  border-color: var(--color-primary-dark, #1d4ed8);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-bg);\n}\n.tabs-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  flex-wrap: wrap;\n}\n.tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.tabs[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 4px;\n}\n.tab-button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  color: var(--color-text-muted);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tab-button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n@media (max-width: 768px) {\n  .reports-toolbar[_ngcontent-%COMP%] {\n    justify-content: center;\n    text-align: center;\n  }\n  .toolbar-label[_ngcontent-%COMP%], \n   .toolbar-select[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .tabs[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    overflow-x: visible;\n  }\n  .tab-button[_ngcontent-%COMP%] {\n    flex: 1 1 50%;\n    min-width: 50%;\n    padding: 10px 8px;\n    font-size: 0.85rem;\n    white-space: normal;\n    text-align: center;\n  }\n}\n.tab-content[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow);\n  padding: 1.5rem;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 1rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1.25rem;\n  margin-top: 1.5rem;\n}\n.chart-card[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.chart-card[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.chart-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 260px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  display: block;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-percentage[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin-top: 4px;\n}\n.stat-card--blue[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: white;\n}\n.stat-card--blue[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], \n.stat-card--blue[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], \n.stat-card--blue[_ngcontent-%COMP%]   .stat-percentage[_ngcontent-%COMP%] {\n  color: white;\n}\n.stat-card--primary[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  border-color: var(--color-primary);\n}\n.stat-card--primary[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.stat-card--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  border-color: var(--color-success);\n}\n.stat-card--success[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.stat-card--warning[_ngcontent-%COMP%] {\n  background: var(--color-warning-bg);\n  border-color: var(--color-warning);\n}\n.stat-card--warning[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.stat-card--info[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  border-color: var(--color-primary-light);\n}\n.stat-card--info[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 1rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  background: var(--color-bg);\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, imports: [CommonModule, BaseChartDirective, FormsModule], template: `<div class="reports-page">\r
  <h1 class="page-title">Reports & Analytics</h1>\r
\r
  <div class="reports-toolbar">\r
    <div class="toolbar-group">\r
      <button\r
        type="button"\r
        class="btn btn-primary"\r
        (click)="exportReports()"\r
      >\r
        Export\r
      </button>\r
    </div>\r
  </div>\r
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
              @for (req of getRequestsForReports(); track req.id) {\r
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
`, styles: ["/* src/app/pages/reports/reports.component.scss */\n.reports-page {\n  width: 100%;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 1.5rem;\n}\n.reports-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.toolbar-group {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.toolbar-label {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.toolbar-select {\n  min-width: 190px;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n}\n.btn {\n  padding: 0.5rem 0.9rem;\n  border-radius: 9999px;\n  border: 1px solid transparent;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n}\n.btn:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n}\n.btn-primary {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: #ffffff;\n  box-shadow: 0 1px 3px rgba(37, 99, 235, 0.35);\n}\n.btn-primary:hover {\n  background: var(--color-primary-dark, #1d4ed8);\n  border-color: var(--color-primary-dark, #1d4ed8);\n}\n.btn-outline {\n  background: transparent;\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.btn-outline:hover {\n  background: var(--color-primary-bg);\n}\n.tabs-wrapper {\n  margin-bottom: 1.75rem;\n}\n.tabs {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  flex-wrap: wrap;\n}\n.tabs::-webkit-scrollbar {\n  height: 4px;\n}\n.tabs::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 4px;\n}\n.tab-button {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  color: var(--color-text-muted);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tab-button:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tab-button.active {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n@media (max-width: 768px) {\n  .reports-toolbar {\n    justify-content: center;\n    text-align: center;\n  }\n  .toolbar-label,\n  .toolbar-select {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .tabs {\n    display: flex;\n    flex-wrap: wrap;\n    overflow-x: visible;\n  }\n  .tab-button {\n    flex: 1 1 50%;\n    min-width: 50%;\n    padding: 10px 8px;\n    font-size: 0.85rem;\n    white-space: normal;\n    text-align: center;\n  }\n}\n.tab-content {\n  min-height: 400px;\n}\n.card {\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow);\n  padding: 1.5rem;\n}\n.card h2 {\n  margin: 0 0 1.5rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.card h3 {\n  margin: 1.5rem 0 1rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.charts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1.25rem;\n  margin-top: 1.5rem;\n}\n.chart-card {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.chart-card .chart-title {\n  margin: 0 0 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.chart-container {\n  position: relative;\n  width: 100%;\n  height: 260px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.stat-card {\n  padding: 1.25rem 1.5rem;\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-card .stat-label {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  display: block;\n}\n.stat-card .stat-value {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.stat-card .stat-percentage {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin-top: 4px;\n}\n.stat-card--blue {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: white;\n}\n.stat-card--blue .stat-label,\n.stat-card--blue .stat-value,\n.stat-card--blue .stat-percentage {\n  color: white;\n}\n.stat-card--primary {\n  background: var(--color-primary-bg);\n  border-color: var(--color-primary);\n}\n.stat-card--primary .stat-value {\n  color: var(--color-primary);\n}\n.stat-card--success {\n  background: var(--color-success-bg);\n  border-color: var(--color-success);\n}\n.stat-card--success .stat-value {\n  color: var(--color-success);\n}\n.stat-card--warning {\n  background: var(--color-warning-bg);\n  border-color: var(--color-warning);\n}\n.stat-card--warning .stat-value {\n  color: var(--color-warning);\n}\n.stat-card--info {\n  background: var(--color-primary-bg);\n  border-color: var(--color-primary-light);\n}\n.stat-card--info .stat-value {\n  color: var(--color-primary);\n}\n.section {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 1rem;\n}\n.table th,\n.table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n}\n.table th {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  background: var(--color-bg);\n}\n.table tr:hover td {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=reports.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/pages/reports/reports.component.ts", lineNumber: 33 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-MCAWPVQE.js.map
