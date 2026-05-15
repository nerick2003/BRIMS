import {
  CertificateGeneratorService
} from "./chunk-A5BCMD2O.js";
import "./chunk-DBGBYJNX.js";
import "./chunk-3BQBTUJM.js";
import "./chunk-7YWLATDR.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-IPZDF3JU.js";
import "./chunk-E73EYYCC.js";
import {
  AuthService,
  DataService
} from "./chunk-2RJNPIJT.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-TUEAJAVR.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/pages/resident-request-detail/resident-request-detail.component.ts
var _c0 = ["certificateRef"];
function ResidentRequestDetailComponent_Conditional_1_Conditional_46_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("on ", \u0275\u0275pipeBind2(2, 1, ctx_r0.request.approvedAt, "medium"));
  }
}
function ResidentRequestDetailComponent_Conditional_1_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Approved By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, ResidentRequestDetailComponent_Conditional_1_Conditional_46_Conditional_5_Template, 3, 4, "span", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.request.approvedByName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.request.approvedAt ? 5 : -1);
  }
}
function ResidentRequestDetailComponent_Conditional_1_Conditional_47_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("on ", \u0275\u0275pipeBind2(2, 1, ctx_r0.request.rejectedAt, "medium"));
  }
}
function ResidentRequestDetailComponent_Conditional_1_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Rejected By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, ResidentRequestDetailComponent_Conditional_1_Conditional_47_Conditional_5_Template, 3, 4, "span", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.request.rejectedByName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.request.rejectedAt ? 5 : -1);
  }
}
function ResidentRequestDetailComponent_Conditional_1_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Rejection Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.request.rejectedReason);
  }
}
function ResidentRequestDetailComponent_Conditional_1_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 29);
    \u0275\u0275text(2, "\u2139\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "h3");
    \u0275\u0275text(5, "Your request is pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Your request has been submitted and is waiting to be reviewed by barangay staff. You will be notified once it's been processed.");
    \u0275\u0275elementEnd()()();
  }
}
function ResidentRequestDetailComponent_Conditional_1_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 29);
    \u0275\u0275text(2, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "h3");
    \u0275\u0275text(5, "Under review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Your request is currently being reviewed by barangay staff. This process may take a few days. Please check back later for updates.");
    \u0275\u0275elementEnd()()();
  }
}
function ResidentRequestDetailComponent_Conditional_1_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 29);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "h3");
    \u0275\u0275text(5, "Request approved!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Your request has been approved. You can now download your certificate or visit the barangay office to claim it.");
    \u0275\u0275elementEnd()()();
  }
}
function ResidentRequestDetailComponent_Conditional_1_Conditional_52_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" Reason: ", ctx_r0.request.rejectedReason, " ");
  }
}
function ResidentRequestDetailComponent_Conditional_1_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 29);
    \u0275\u0275text(2, "\u2717");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "h3");
    \u0275\u0275text(5, "Request rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, " Your request was rejected by barangay staff. ");
    \u0275\u0275conditionalCreate(8, ResidentRequestDetailComponent_Conditional_1_Conditional_52_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.request.rejectedReason ? 8 : -1);
  }
}
function ResidentRequestDetailComponent_Conditional_1_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 26)(1, "h2", 31);
    \u0275\u0275text(2, "Printable Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 32);
    \u0275\u0275text(4, "Review the certificate below, then download it as PDF or PNG for printing.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33, 0)(7, "header", 34)(8, "div", 35);
    \u0275\u0275text(9, "Republic of the Philippines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 36);
    \u0275\u0275text(11, "Province of Misamis Oriental");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 37);
    \u0275\u0275text(13, "Municipality of Villanueva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 38);
    \u0275\u0275text(15, "Barangay Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "div", 39);
    \u0275\u0275elementStart(17, "div", 40);
    \u0275\u0275text(18, "OFFICE OF THE PUNONG BARANGAY");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "main", 41)(20, "h1", 42);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 43);
    \u0275\u0275text(23, " TO WHOM IT MAY CONCERN: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 44);
    \u0275\u0275text(25, " This is to certify that ");
    \u0275\u0275elementStart(26, "span", 45);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementStart(29, "span", 45);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, ", is a bona fide resident of this barangay. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 44);
    \u0275\u0275text(33, " This certification is being issued upon the request of the above-named person for the purpose of ");
    \u0275\u0275elementStart(34, "span", 45);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 44);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 46)(40, "div", 47)(41, "span", 48);
    \u0275\u0275text(42, "Control No.:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 49);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 50);
    \u0275\u0275element(46, "div", 51);
    \u0275\u0275elementStart(47, "div", 52);
    \u0275\u0275text(48, "Punong Barangay");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(49, "div", 27)(50, "button", 53);
    \u0275\u0275listener("click", function ResidentRequestDetailComponent_Conditional_1_Conditional_53_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadCertificate("pdf"));
    });
    \u0275\u0275elementStart(51, "span", 54);
    \u0275\u0275text(52, "\u2B07");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Download as PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "button", 55);
    \u0275\u0275listener("click", function ResidentRequestDetailComponent_Conditional_1_Conditional_53_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadCertificate("png"));
    });
    \u0275\u0275elementStart(56, "span", 54);
    \u0275\u0275text(57, "\u{1F5BC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59, "Download as PNG");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "a", 56)(61, "span", 54);
    \u0275\u0275text(62, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64, "Submit New Request");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r0.request.type);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r0.resident == null ? null : ctx_r0.resident.name) || "____________________");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", of legal age, ", (ctx_r0.resident == null ? null : ctx_r0.resident.civilStatus) || "single/married", ", and a resident of ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.resident == null ? null : ctx_r0.resident.address) || "Purok " + ((ctx_r0.resident == null ? null : ctx_r0.resident.purok) || "___") + ", Barangay Name, Municipality of Villanueva, Province of Misamis Oriental");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.request.purpose || "____________________");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Issued this ", ctx_r0.request.date, " at Barangay Name, Municipality of Villanueva, Province of Misamis Oriental, Philippines. ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.request.id);
  }
}
function ResidentRequestDetailComponent_Conditional_1_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "a", 56)(2, "span", 54);
    \u0275\u0275text(3, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Submit New Request");
    \u0275\u0275elementEnd()()();
  }
}
function ResidentRequestDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h1", 5);
    \u0275\u0275text(4, "Request Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 7)(8, "span", 8);
    \u0275\u0275text(9, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11, "Back to Requests");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "div", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14);
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 15)(20, "span", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 17)(23, "h2");
    \u0275\u0275text(24, "Request Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18)(26, "div", 19)(27, "span", 20);
    \u0275\u0275text(28, "Request Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 21);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 19)(32, "span", 20);
    \u0275\u0275text(33, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 21);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 19)(37, "span", 20);
    \u0275\u0275text(38, "Date Submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 21);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 19)(42, "span", 20);
    \u0275\u0275text(43, "Request ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 22);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(46, ResidentRequestDetailComponent_Conditional_1_Conditional_46_Template, 6, 2, "div", 19);
    \u0275\u0275conditionalCreate(47, ResidentRequestDetailComponent_Conditional_1_Conditional_47_Template, 6, 2, "div", 19);
    \u0275\u0275conditionalCreate(48, ResidentRequestDetailComponent_Conditional_1_Conditional_48_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(49, ResidentRequestDetailComponent_Conditional_1_Conditional_49_Template, 8, 0, "div", 23);
    \u0275\u0275conditionalCreate(50, ResidentRequestDetailComponent_Conditional_1_Conditional_50_Template, 8, 0, "div", 24);
    \u0275\u0275conditionalCreate(51, ResidentRequestDetailComponent_Conditional_1_Conditional_51_Template, 8, 0, "div", 25);
    \u0275\u0275conditionalCreate(52, ResidentRequestDetailComponent_Conditional_1_Conditional_52_Template, 9, 1, "div", 24);
    \u0275\u0275conditionalCreate(53, ResidentRequestDetailComponent_Conditional_1_Conditional_53_Template, 65, 7, "section", 26)(54, ResidentRequestDetailComponent_Conditional_1_Conditional_54_Template, 6, 0, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("ID: ", ctx_r0.request.id);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", "status-card--" + ctx_r0.request.status.toLowerCase().replace(" ", "-"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getStatusIcon(ctx_r0.request.status));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r0.getStatusBadgeClass(ctx_r0.request.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.request.status, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.request.type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.request.purpose);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.request.date);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.request.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.request.status === "Approved" && ctx_r0.request.approvedByName ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.request.status === "Rejected" && ctx_r0.request.rejectedByName ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.request.status === "Rejected" && ctx_r0.request.rejectedReason ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.request.status === "Pending" ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.request.status === "For Review" ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.request.status === "Approved" ? 51 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.request.status === "Rejected" ? 52 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canDownload() ? 53 : 54);
  }
}
function ResidentRequestDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 57)(2, "div", 58);
    \u0275\u0275text(3, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 5);
    \u0275\u0275text(5, "Request Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 28);
    \u0275\u0275text(7, "The request you're looking for doesn't exist or you don't have permission to view it.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 7)(9, "span", 8);
    \u0275\u0275text(10, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 9);
    \u0275\u0275text(12, "Back to My Requests");
    \u0275\u0275elementEnd()()()();
  }
}
var ResidentRequestDetailComponent = class _ResidentRequestDetailComponent {
  constructor(route, data, auth, certificateGenerator) {
    this.route = route;
    this.data = data;
    this.auth = auth;
    this.certificateGenerator = certificateGenerator;
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.request = this.getRequestIfOwned(id);
    }
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.request = this.getRequestIfOwned(id);
      } else {
        this.request = void 0;
        this.resident = void 0;
      }
    });
  }
  /** Only return the request if it belongs to the current resident. */
  getRequestIfOwned(id) {
    const req = this.data.getRequestById(id);
    if (!req)
      return void 0;
    const user = this.auth.currentUser;
    if (!user || user.role !== "resident")
      return void 0;
    const resident = this.data.getResidentById(user.id);
    if (req.residentId !== resident?.residentId)
      return void 0;
    this.resident = resident;
    return req;
  }
  getStatusBadgeClass(status) {
    if (status === "Approved")
      return "badge--success";
    if (status === "Pending" || status === "For Review" || status === "Rejected")
      return "badge--warning";
    return "";
  }
  getStatusIcon(status) {
    if (status === "Approved")
      return "\u2713";
    if (status === "Pending")
      return "\u23F3";
    if (status === "For Review")
      return "\u{1F441}";
    if (status === "Rejected")
      return "\u2717";
    return "\u{1F4C4}";
  }
  canDownload() {
    return this.request?.status === "Approved";
  }
  downloadCertificate(format) {
    return __async(this, null, function* () {
      if (!this.canDownload())
        return;
      const ref = this.certificateRef?.nativeElement;
      if (!ref)
        return;
      const fileName = `certificate-${this.request?.id || "barangay"}`;
      if (format === "pdf") {
        this.certificateGenerator.exportPdfText({
          requestType: this.request?.type,
          purpose: this.request?.purpose,
          dateIssued: this.request?.date,
          controlNo: this.request?.id,
          person: {
            name: this.resident?.name,
            civilStatus: this.resident?.civilStatus,
            purok: this.resident?.purok,
            address: this.resident?.address
          }
        }, fileName);
        return;
      }
      yield this.certificateGenerator.export(ref, fileName, format);
    });
  }
  static {
    this.\u0275fac = function ResidentRequestDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResidentRequestDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CertificateGeneratorService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResidentRequestDetailComponent, selectors: [["app-resident-request-detail"]], viewQuery: function ResidentRequestDetailComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.certificateRef = _t.first);
      }
    }, decls: 3, vars: 1, consts: [["certificateRef", ""], [1, "resident-request-detail"], [1, "card"], [1, "request-header"], [1, "request-header__title"], [1, "page-title"], [1, "request-id"], ["routerLink", "/resident/requests", 1, "back-button"], [1, "back-button__icon"], [1, "back-button__text"], [1, "request-info"], [1, "status-card", 3, "ngClass"], [1, "status-card__icon"], [1, "status-card__content"], [1, "status-card__label"], [1, "status-card__value"], [1, "badge", 3, "ngClass"], [1, "info-section"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "info-value", "info-value--mono"], [1, "status-message", "status-message--info"], [1, "status-message", "status-message--warning"], [1, "status-message", "status-message--success"], ["aria-label", "Certificate preview", 1, "certificate-section"], [1, "action-section"], [1, "muted"], [1, "status-message__icon"], [1, "status-message__content"], [1, "certificate-section__title"], [1, "certificate-section__hint"], [1, "certificate", "certificate--barangay"], [1, "certificate__header"], [1, "certificate__republic"], [1, "certificate__province"], [1, "certificate__municipality"], [1, "certificate__barangay"], [1, "certificate__line"], [1, "certificate__office"], [1, "certificate__body"], [1, "certificate__title"], [1, "certificate__intro"], [1, "certificate__paragraph"], [1, "certificate__highlight"], [1, "certificate__footer"], [1, "certificate__control"], [1, "certificate__control-label"], [1, "certificate__control-value"], [1, "certificate__signature-block"], [1, "certificate__signature-line"], [1, "certificate__signature-name"], ["type", "button", 1, "btn", "btn--success", "btn--lg", 3, "click"], [1, "btn-icon"], ["type", "button", 1, "btn", "btn--outline", "btn--lg", 3, "click"], ["routerLink", "/resident/request-certificate", 1, "btn", "btn--primary", "btn--lg"], [1, "error-state"], [1, "error-state__icon"]], template: function ResidentRequestDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275conditionalCreate(1, ResidentRequestDetailComponent_Conditional_1_Template, 55, 17, "div", 2)(2, ResidentRequestDetailComponent_Conditional_2_Template, 13, 0, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.request ? 1 : 2);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink, DatePipe], styles: ['\n.resident-request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  gap: 1rem;\n  position: relative;\n  padding-right: 160px;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-header__title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%]   .request-id[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  font-family: "Courier New", monospace;\n  background: var(--color-bg);\n  padding: 0.25rem 0.75rem;\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .resident-request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding-right: 0;\n  }\n  .resident-request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n    width: 100%;\n    justify-content: center;\n  }\n}\n.resident-request-detail[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  color: var(--color-text);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 0.9375rem;\n  border-radius: var(--radius);\n  transition: all 0.2s ease;\n  width: fit-content;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-card);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(-2px);\n  box-shadow: var(--shadow);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:active {\n  transform: translateX(-1px);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .back-button__icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1;\n  transition: transform 0.2s ease;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover   .resident-request-detail[_ngcontent-%COMP%]   .back-button__icon[_ngcontent-%COMP%] {\n  transform: translateX(-2px);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .back-button__text[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 1.5rem;\n  border-radius: var(--radius-lg);\n  margin-bottom: 2rem;\n  border: 2px solid;\n  background: var(--color-bg-card);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-card__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-card__content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-card__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  margin-bottom: 0.5rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-card__value[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-card--pending[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.1) 0%,\n      rgba(245, 158, 11, 0.05) 100%);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-card--for-review[_ngcontent-%COMP%] {\n  border-color: #8b5cf6;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 92, 246, 0.1) 0%,\n      rgba(139, 92, 246, 0.05) 100%);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-card--approved[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.1) 0%,\n      rgba(16, 185, 129, 0.05) 100%);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n  color: var(--color-text);\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n@media (max-width: 640px) {\n  .resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  transition: all 0.2s ease;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary);\n  box-shadow: var(--shadow-sm);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-size: 1rem;\n  font-weight: 500;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value--mono[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 0.9375rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-message[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1.25rem;\n  border-radius: var(--radius-lg);\n  margin-bottom: 2rem;\n  border: 1px solid;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-message__icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-message__content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-message__content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-message__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  line-height: 1.6;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-message--info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  border-color: #3b82f6;\n  color: #3b82f6;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-message--warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  border-color: #f59e0b;\n  color: #f59e0b;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .status-message--success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  border-color: #10b981;\n  color: #10b981;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .action-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding-top: 2rem;\n  border-top: 1px solid var(--color-border);\n  flex-wrap: wrap;\n}\n@media (max-width: 640px) {\n  .resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .action-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .action-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .action-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .action-section[_ngcontent-%COMP%]   .btn--lg[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.5rem;\n  font-size: 1rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .action-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate-section__title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem;\n  color: var(--color-text);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate-section__hint[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate[_ngcontent-%COMP%] {\n  margin: 0 auto 2rem;\n  max-width: 720px;\n  aspect-ratio: 210/297;\n  padding: 2.5rem 2.75rem;\n  border: none;\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);\n  box-sizing: border-box;\n  color: #111827;\n  font-family:\n    "Times New Roman",\n    Georgia,\n    "Noto Serif",\n    serif;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__republic[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__province[_ngcontent-%COMP%], \n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__municipality[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__barangay[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  font-size: 1.3rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__line[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 1px;\n  margin: 0.6rem auto 0.4rem;\n  background: #111827;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__office[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.14em;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__body[_ngcontent-%COMP%] {\n  margin-top: 2.25rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.9rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  margin: 0 0 2.25rem;\n  font-weight: 700;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__intro[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: left;\n  margin-bottom: 1.5rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__paragraph[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  line-height: 1.9;\n  text-align: justify;\n  margin-bottom: 1.4rem;\n  text-indent: 2.25rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__highlight[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: 4rem;\n  gap: 2rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__control[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__control-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__control-value[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  margin-left: 0.25rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__signature-block[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 200px;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__signature-line[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #111827;\n  margin-bottom: 0.35rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__signature-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1.5rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .error-state__icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.resident-request-detail[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=resident-request-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResidentRequestDetailComponent, [{
    type: Component,
    args: [{ selector: "app-resident-request-detail", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="resident-request-detail">\r
  @if (request) {\r
    <div class="card">\r
      <div class="request-header">\r
        <div class="request-header__title">\r
          <h1 class="page-title">Request Details</h1>\r
          <span class="request-id">ID: {{ request.id }}</span>\r
        </div>\r
        <a routerLink="/resident/requests" class="back-button">\r
          <span class="back-button__icon">\u2190</span>\r
          <span class="back-button__text">Back to Requests</span>\r
        </a>\r
      </div>\r
\r
      <div class="request-info">\r
        <!-- Status Card -->\r
        <div class="status-card" [ngClass]="'status-card--' + request.status.toLowerCase().replace(' ', '-')">\r
          <div class="status-card__icon">{{ getStatusIcon(request.status) }}</div>\r
          <div class="status-card__content">\r
            <div class="status-card__label">Status</div>\r
            <div class="status-card__value">\r
              <span class="badge" [ngClass]="getStatusBadgeClass(request.status)">\r
                {{ request.status }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Request Information -->\r
        <div class="info-section">\r
          <h2>Request Information</h2>\r
          <div class="info-grid">\r
            <div class="info-item">\r
              <span class="info-label">Request Type</span>\r
              <span class="info-value">{{ request.type }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">Purpose</span>\r
              <span class="info-value">{{ request.purpose }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">Date Submitted</span>\r
              <span class="info-value">{{ request.date }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">Request ID</span>\r
              <span class="info-value info-value--mono">{{ request.id }}</span>\r
            </div>\r
            @if (request.status === 'Approved' && request.approvedByName) {\r
              <div class="info-item">\r
                <span class="info-label">Approved By</span>\r
                <span class="info-value">\r
                  {{ request.approvedByName }}\r
                  @if (request.approvedAt) {\r
                    <span class="muted">on {{ request.approvedAt | date:'medium' }}</span>\r
                  }\r
                </span>\r
              </div>\r
            }\r
            @if (request.status === 'Rejected' && request.rejectedByName) {\r
              <div class="info-item">\r
                <span class="info-label">Rejected By</span>\r
                <span class="info-value">\r
                  {{ request.rejectedByName }}\r
                  @if (request.rejectedAt) {\r
                    <span class="muted">on {{ request.rejectedAt | date:'medium' }}</span>\r
                  }\r
                </span>\r
              </div>\r
            }\r
            @if (request.status === 'Rejected' && request.rejectedReason) {\r
              <div class="info-item">\r
                <span class="info-label">Rejection Reason</span>\r
                <span class="info-value">{{ request.rejectedReason }}</span>\r
              </div>\r
            }\r
          </div>\r
        </div>\r
\r
        <!-- Status Messages -->\r
        @if (request.status === 'Pending') {\r
          <div class="status-message status-message--info">\r
            <div class="status-message__icon">\u2139\uFE0F</div>\r
            <div class="status-message__content">\r
              <h3>Your request is pending</h3>\r
              <p>Your request has been submitted and is waiting to be reviewed by barangay staff. You will be notified once it's been processed.</p>\r
            </div>\r
          </div>\r
        }\r
\r
        @if (request.status === 'For Review') {\r
          <div class="status-message status-message--warning">\r
            <div class="status-message__icon">\u{1F441}</div>\r
            <div class="status-message__content">\r
              <h3>Under review</h3>\r
              <p>Your request is currently being reviewed by barangay staff. This process may take a few days. Please check back later for updates.</p>\r
            </div>\r
          </div>\r
        }\r
\r
        @if (request.status === 'Approved') {\r
          <div class="status-message status-message--success">\r
            <div class="status-message__icon">\u2713</div>\r
            <div class="status-message__content">\r
              <h3>Request approved!</h3>\r
              <p>Your request has been approved. You can now download your certificate or visit the barangay office to claim it.</p>\r
            </div>\r
          </div>\r
        }\r
\r
        @if (request.status === 'Rejected') {\r
          <div class="status-message status-message--warning">\r
            <div class="status-message__icon">\u2717</div>\r
            <div class="status-message__content">\r
              <h3>Request rejected</h3>\r
              <p>\r
                Your request was rejected by barangay staff.\r
                @if (request.rejectedReason) {\r
                  Reason: {{ request.rejectedReason }}\r
                }\r
              </p>\r
            </div>\r
          </div>\r
        }\r
\r
        @if (canDownload()) {\r
          <!-- Printable Philippine-style certificate preview -->\r
          <section class="certificate-section" aria-label="Certificate preview">\r
            <h2 class="certificate-section__title">Printable Certificate</h2>\r
            <p class="certificate-section__hint">Review the certificate below, then download it as PDF or PNG for printing.</p>\r
\r
            <div #certificateRef class="certificate certificate--barangay">\r
              <header class="certificate__header">\r
                <div class="certificate__republic">Republic of the Philippines</div>\r
                <div class="certificate__province">Province of Misamis Oriental</div>\r
                <div class="certificate__municipality">Municipality of Villanueva</div>\r
                <div class="certificate__barangay">Barangay Name</div>\r
                <div class="certificate__line"></div>\r
                <div class="certificate__office">OFFICE OF THE PUNONG BARANGAY</div>\r
              </header>\r
\r
              <main class="certificate__body">\r
                <h1 class="certificate__title">{{ request.type }}</h1>\r
                <p class="certificate__intro">\r
                  TO WHOM IT MAY CONCERN:\r
                </p>\r
\r
                <p class="certificate__paragraph">\r
                  This is to certify that <span class="certificate__highlight">{{ resident?.name || '____________________' }}</span>,\r
                  of legal age, {{ resident?.civilStatus || 'single/married' }}, and a resident of\r
                  <span class="certificate__highlight">{{ resident?.address || ('Purok ' + (resident?.purok || '___') + ', Barangay Name, Municipality of Villanueva, Province of Misamis Oriental') }}</span>,\r
                  is a bona fide resident of this barangay.\r
                </p>\r
\r
                <p class="certificate__paragraph">\r
                  This certification is being issued upon the request of the above-named person\r
                  for the purpose of <span class="certificate__highlight">{{ request.purpose || '____________________' }}</span>.\r
                </p>\r
\r
                <p class="certificate__paragraph">\r
                  Issued this {{ request.date }} at Barangay Name, Municipality of Villanueva,\r
                  Province of Misamis Oriental, Philippines.\r
                </p>\r
\r
                <div class="certificate__footer">\r
                  <div class="certificate__control">\r
                    <span class="certificate__control-label">Control No.:</span>\r
                    <span class="certificate__control-value">{{ request.id }}</span>\r
                  </div>\r
                  <div class="certificate__signature-block">\r
                    <div class="certificate__signature-line"></div>\r
                    <div class="certificate__signature-name">Punong Barangay</div>\r
                  </div>\r
                </div>\r
              </main>\r
            </div>\r
\r
            <!-- Action Buttons -->\r
            <div class="action-section">\r
              <button class="btn btn--success btn--lg" type="button" (click)="downloadCertificate('pdf')">\r
                <span class="btn-icon">\u2B07</span>\r
                <span>Download as PDF</span>\r
              </button>\r
              <button class="btn btn--outline btn--lg" type="button" (click)="downloadCertificate('png')">\r
                <span class="btn-icon">\u{1F5BC}</span>\r
                <span>Download as PNG</span>\r
              </button>\r
              <a routerLink="/resident/request-certificate" class="btn btn--primary btn--lg">\r
                <span class="btn-icon">+</span>\r
                <span>Submit New Request</span>\r
              </a>\r
            </div>\r
          </section>\r
        } @else {\r
          <!-- Action Buttons -->\r
          <div class="action-section">\r
            <a routerLink="/resident/request-certificate" class="btn btn--primary btn--lg">\r
              <span class="btn-icon">+</span>\r
              <span>Submit New Request</span>\r
            </a>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  } @else {\r
    <div class="card">\r
      <div class="error-state">\r
        <div class="error-state__icon">\u274C</div>\r
        <h1 class="page-title">Request Not Found</h1>\r
        <p class="muted">The request you're looking for doesn't exist or you don't have permission to view it.</p>\r
        <a routerLink="/resident/requests" class="back-button">\r
          <span class="back-button__icon">\u2190</span>\r
          <span class="back-button__text">Back to My Requests</span>\r
        </a>\r
      </div>\r
    </div>\r
  }\r
</div>\r
`, styles: ['/* src/app/pages/resident-request-detail/resident-request-detail.component.scss */\n.resident-request-detail .request-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  gap: 1rem;\n  position: relative;\n  padding-right: 160px;\n}\n.resident-request-detail .request-header__title {\n  flex: 1;\n}\n.resident-request-detail .request-header .page-title {\n  margin-bottom: 0.5rem;\n}\n.resident-request-detail .request-header .request-id {\n  display: inline-block;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  font-family: "Courier New", monospace;\n  background: var(--color-bg);\n  padding: 0.25rem 0.75rem;\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n}\n.resident-request-detail .request-header .back-button {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .resident-request-detail .request-header {\n    flex-direction: column;\n    padding-right: 0;\n  }\n  .resident-request-detail .request-header .back-button {\n    position: static;\n    transform: none;\n    width: 100%;\n    justify-content: center;\n  }\n}\n.resident-request-detail .back-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  color: var(--color-text);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 0.9375rem;\n  border-radius: var(--radius);\n  transition: all 0.2s ease;\n  width: fit-content;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.resident-request-detail .back-button:hover {\n  background: var(--color-bg-card);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(-2px);\n  box-shadow: var(--shadow);\n}\n.resident-request-detail .back-button:active {\n  transform: translateX(-1px);\n}\n.resident-request-detail .back-button__icon {\n  font-size: 1.125rem;\n  line-height: 1;\n  transition: transform 0.2s ease;\n}\n.resident-request-detail .back-button:hover .resident-request-detail .back-button__icon {\n  transform: translateX(-2px);\n}\n.resident-request-detail .back-button__text {\n  line-height: 1.5;\n}\n.resident-request-detail .request-info .status-card {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 1.5rem;\n  border-radius: var(--radius-lg);\n  margin-bottom: 2rem;\n  border: 2px solid;\n  background: var(--color-bg-card);\n}\n.resident-request-detail .request-info .status-card__icon {\n  font-size: 3rem;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.resident-request-detail .request-info .status-card__content {\n  flex: 1;\n}\n.resident-request-detail .request-info .status-card__label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  margin-bottom: 0.5rem;\n}\n.resident-request-detail .request-info .status-card__value .badge {\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n}\n.resident-request-detail .request-info .status-card--pending {\n  border-color: #f59e0b;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.1) 0%,\n      rgba(245, 158, 11, 0.05) 100%);\n}\n.resident-request-detail .request-info .status-card--for-review {\n  border-color: #8b5cf6;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 92, 246, 0.1) 0%,\n      rgba(139, 92, 246, 0.05) 100%);\n}\n.resident-request-detail .request-info .status-card--approved {\n  border-color: #10b981;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.1) 0%,\n      rgba(16, 185, 129, 0.05) 100%);\n}\n.resident-request-detail .request-info .info-section {\n  margin-bottom: 2rem;\n}\n.resident-request-detail .request-info .info-section h2 {\n  margin-bottom: 1.25rem;\n  color: var(--color-text);\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.resident-request-detail .request-info .info-section .info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n@media (max-width: 640px) {\n  .resident-request-detail .request-info .info-section .info-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n.resident-request-detail .request-info .info-section .info-grid .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  transition: all 0.2s ease;\n}\n.resident-request-detail .request-info .info-section .info-grid .info-item:hover {\n  border-color: var(--color-primary);\n  box-shadow: var(--shadow-sm);\n}\n.resident-request-detail .request-info .info-section .info-grid .info-item .info-label {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.resident-request-detail .request-info .info-section .info-grid .info-item .info-value {\n  color: var(--color-text);\n  font-size: 1rem;\n  font-weight: 500;\n}\n.resident-request-detail .request-info .info-section .info-grid .info-item .info-value--mono {\n  font-family: "Courier New", monospace;\n  font-size: 0.9375rem;\n}\n.resident-request-detail .request-info .status-message {\n  display: flex;\n  gap: 1rem;\n  padding: 1.25rem;\n  border-radius: var(--radius-lg);\n  margin-bottom: 2rem;\n  border: 1px solid;\n}\n.resident-request-detail .request-info .status-message__icon {\n  font-size: 1.5rem;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.resident-request-detail .request-info .status-message__content {\n  flex: 1;\n}\n.resident-request-detail .request-info .status-message__content h3 {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.resident-request-detail .request-info .status-message__content p {\n  margin: 0;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  line-height: 1.6;\n}\n.resident-request-detail .request-info .status-message--info {\n  background: rgba(59, 130, 246, 0.1);\n  border-color: #3b82f6;\n  color: #3b82f6;\n}\n.resident-request-detail .request-info .status-message--warning {\n  background: rgba(245, 158, 11, 0.1);\n  border-color: #f59e0b;\n  color: #f59e0b;\n}\n.resident-request-detail .request-info .status-message--success {\n  background: rgba(16, 185, 129, 0.1);\n  border-color: #10b981;\n  color: #10b981;\n}\n.resident-request-detail .request-info .action-section {\n  display: flex;\n  gap: 1rem;\n  padding-top: 2rem;\n  border-top: 1px solid var(--color-border);\n  flex-wrap: wrap;\n}\n@media (max-width: 640px) {\n  .resident-request-detail .request-info .action-section {\n    flex-direction: column;\n  }\n  .resident-request-detail .request-info .action-section .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.resident-request-detail .request-info .action-section .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.resident-request-detail .request-info .action-section .btn--lg {\n  padding: 0.875rem 1.5rem;\n  font-size: 1rem;\n}\n.resident-request-detail .request-info .action-section .btn .btn-icon {\n  font-size: 1.125rem;\n  line-height: 1;\n}\n.resident-request-detail .request-info .certificate-section {\n  margin-top: 2rem;\n}\n.resident-request-detail .request-info .certificate-section__title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem;\n  color: var(--color-text);\n}\n.resident-request-detail .request-info .certificate-section__hint {\n  margin: 0 0 1.5rem;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.resident-request-detail .request-info .certificate {\n  margin: 0 auto 2rem;\n  max-width: 720px;\n  aspect-ratio: 210/297;\n  padding: 2.5rem 2.75rem;\n  border: none;\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);\n  box-sizing: border-box;\n  color: #111827;\n  font-family:\n    "Times New Roman",\n    Georgia,\n    "Noto Serif",\n    serif;\n}\n.resident-request-detail .request-info .certificate__header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.resident-request-detail .request-info .certificate__republic {\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.resident-request-detail .request-info .certificate__province,\n.resident-request-detail .request-info .certificate__municipality {\n  font-size: 0.95rem;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n}\n.resident-request-detail .request-info .certificate__barangay {\n  margin-top: 0.35rem;\n  font-size: 1.3rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n}\n.resident-request-detail .request-info .certificate__line {\n  width: 70%;\n  height: 1px;\n  margin: 0.6rem auto 0.4rem;\n  background: #111827;\n}\n.resident-request-detail .request-info .certificate__office {\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.14em;\n}\n.resident-request-detail .request-info .certificate__body {\n  margin-top: 2.25rem;\n}\n.resident-request-detail .request-info .certificate__title {\n  text-align: center;\n  font-size: 1.9rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  margin: 0 0 2.25rem;\n  font-weight: 700;\n}\n.resident-request-detail .request-info .certificate__intro {\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: left;\n  margin-bottom: 1.5rem;\n}\n.resident-request-detail .request-info .certificate__paragraph {\n  font-size: 0.98rem;\n  line-height: 1.9;\n  text-align: justify;\n  margin-bottom: 1.4rem;\n  text-indent: 2.25rem;\n}\n.resident-request-detail .request-info .certificate__highlight {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.resident-request-detail .request-info .certificate__footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: 4rem;\n  gap: 2rem;\n}\n.resident-request-detail .request-info .certificate__control {\n  font-size: 0.9rem;\n}\n.resident-request-detail .request-info .certificate__control-label {\n  font-weight: 600;\n}\n.resident-request-detail .request-info .certificate__control-value {\n  font-family: "Courier New", monospace;\n  margin-left: 0.25rem;\n}\n.resident-request-detail .request-info .certificate__signature-block {\n  text-align: center;\n  min-width: 200px;\n}\n.resident-request-detail .request-info .certificate__signature-line {\n  width: 100%;\n  border-bottom: 1px solid #111827;\n  margin-bottom: 0.35rem;\n}\n.resident-request-detail .request-info .certificate__signature-name {\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.resident-request-detail .error-state {\n  text-align: center;\n  padding: 3rem 1.5rem;\n}\n.resident-request-detail .error-state__icon {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.resident-request-detail .error-state .page-title {\n  margin-bottom: 0.5rem;\n}\n.resident-request-detail .error-state .muted {\n  margin-bottom: 2rem;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.resident-request-detail .error-state .back-button {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=resident-request-detail.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: DataService }, { type: AuthService }, { type: CertificateGeneratorService }], { certificateRef: [{
    type: ViewChild,
    args: ["certificateRef"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResidentRequestDetailComponent, { className: "ResidentRequestDetailComponent", filePath: "src/app/pages/resident-request-detail/resident-request-detail.component.ts", lineNumber: 15 });
})();
export {
  ResidentRequestDetailComponent
};
//# sourceMappingURL=chunk-PAVU3KTE.js.map
