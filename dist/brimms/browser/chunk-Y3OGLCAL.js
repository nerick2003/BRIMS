import {
  CertificateGeneratorService
} from "./chunk-6Y7UUYMU.js";
import "./chunk-J7MNQZVK.js";
import "./chunk-7YWLATDR.js";
import {
  QrCodeService
} from "./chunk-RZIO2SEQ.js";
import "./chunk-R4NIWQA2.js";
import {
  ActivatedRoute,
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
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-ISBYAA2X.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YP43Q66R.js";

// src/app/pages/request-detail/request-detail.component.ts
var _c0 = ["certificateRef"];
var _c1 = (a0, a1) => ({ "badge--success": a0, "badge--warning": a1 });
function RequestDetailComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.requester.name, " (", ctx_r1.requester.residentId, ") ");
  }
}
function RequestDetailComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Not linked to a resident");
    \u0275\u0275elementEnd();
  }
}
function RequestDetailComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.requester.address || "Purok " + ctx_r1.requester.purok, " ");
  }
}
function RequestDetailComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function RequestDetailComponent_Conditional_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementStart(2, "p", 23);
    \u0275\u0275text(3, "Scan this QR code to quickly access this request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 24);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Conditional_37_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadQRCode());
    });
    \u0275\u0275text(5, " Download QR Code ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.qrCodeDataUrl, \u0275\u0275sanitizeUrl);
  }
}
function RequestDetailComponent_Conditional_1_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "h2");
    \u0275\u0275text(2, "Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25)(4, "button", 26);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Conditional_59_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveRequest());
    });
    \u0275\u0275text(5, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 27);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Conditional_59_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectRequest());
    });
    \u0275\u0275text(7, "Reject");
    \u0275\u0275elementEnd()()();
  }
}
function RequestDetailComponent_Conditional_1_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 21)(1, "h2", 28);
    \u0275\u0275text(2, "Printable Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4, " Review the certificate below, then download it as PDF or PNG for printing. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30, 0)(7, "header", 31)(8, "div", 32);
    \u0275\u0275text(9, "Republic of the Philippines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 33);
    \u0275\u0275text(11, "Province of Misamis Oriental");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 34);
    \u0275\u0275text(13, "Municipality of Villanueva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 35);
    \u0275\u0275text(15, "Barangay Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "div", 36);
    \u0275\u0275elementStart(17, "div", 37);
    \u0275\u0275text(18, "OFFICE OF THE PUNONG BARANGAY");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "main", 38)(20, "h1", 39);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 40);
    \u0275\u0275text(23, " TO WHOM IT MAY CONCERN: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 41);
    \u0275\u0275text(25, " This is to certify that ");
    \u0275\u0275elementStart(26, "span", 42);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementStart(29, "span", 42);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, ", is a bona fide resident of this barangay. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 41);
    \u0275\u0275text(33, " This certification is being issued upon the request of the above-named person for the purpose of ");
    \u0275\u0275elementStart(34, "span", 42);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 41);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 43)(40, "div", 44)(41, "span", 45);
    \u0275\u0275text(42, "Control No.:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 46);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 47);
    \u0275\u0275element(46, "div", 48);
    \u0275\u0275elementStart(47, "div", 49);
    \u0275\u0275text(48, "Punong Barangay");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(49, "div", 50)(50, "button", 51);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Conditional_60_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadCertificate("pdf"));
    });
    \u0275\u0275elementStart(51, "span", 52);
    \u0275\u0275text(52, "\u2B07");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Download as PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "button", 53);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Conditional_60_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadCertificate("png"));
    });
    \u0275\u0275elementStart(56, "span", 52);
    \u0275\u0275text(57, "\u{1F5BC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59, "Download as PNG");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r1.request.type);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r1.requester == null ? null : ctx_r1.requester.name) || "____________________");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", of legal age, ", (ctx_r1.requester == null ? null : ctx_r1.requester.civilStatus) || "single/married", ", and a resident of ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.requester == null ? null : ctx_r1.requester.address) || "Purok " + ((ctx_r1.requester == null ? null : ctx_r1.requester.purok) || "___") + ", Barangay Name, Municipality of Villanueva, Province of Misamis Oriental", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.request.purpose || "____________________");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Issued this ", ctx_r1.request.date, " at Barangay Name, Municipality of Villanueva, Province of Misamis Oriental, Philippines. ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.request.id);
  }
}
function RequestDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1", 4);
    \u0275\u0275text(3, "Request Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 5)(5, "span", 6);
    \u0275\u0275text(6, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8, "Back to Requests");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "h2");
    \u0275\u0275text(12, "Request Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "span", 12);
    \u0275\u0275text(16, "Request ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 11)(20, "span", 12);
    \u0275\u0275text(21, "Requested By:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 13);
    \u0275\u0275conditionalCreate(23, RequestDetailComponent_Conditional_1_Conditional_23_Template, 1, 2)(24, RequestDetailComponent_Conditional_1_Conditional_24_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 11)(26, "span", 12);
    \u0275\u0275text(27, "Address / Purok:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 13);
    \u0275\u0275conditionalCreate(29, RequestDetailComponent_Conditional_1_Conditional_29_Template, 1, 1)(30, RequestDetailComponent_Conditional_1_Conditional_30_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 15)(32, "span", 12);
    \u0275\u0275text(33, "QR Code:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 16)(35, "button", 17);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleQRCode());
    });
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(37, RequestDetailComponent_Conditional_1_Conditional_37_Template, 6, 1, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 11)(39, "span", 12);
    \u0275\u0275text(40, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 13);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 11)(44, "span", 12);
    \u0275\u0275text(45, "Purpose:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 13);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 11)(49, "span", 12);
    \u0275\u0275text(50, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 13)(52, "span", 19);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 11)(55, "span", 12);
    \u0275\u0275text(56, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 13);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(59, RequestDetailComponent_Conditional_1_Conditional_59_Template, 8, 0, "div", 20);
    \u0275\u0275conditionalCreate(60, RequestDetailComponent_Conditional_1_Conditional_60_Template, 60, 7, "section", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(ctx_r1.request.id);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.requester ? 23 : 24);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.requester ? 29 : 30);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showQRCode ? "Hide" : "Show", " QR Code ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showQRCode && ctx_r1.qrCodeDataUrl ? 37 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.request.type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.request.purpose);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c1, ctx_r1.request.status === "Approved", ctx_r1.request.status === "Pending" || ctx_r1.request.status === "For Review"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.request.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.request.date);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.request.status === "Pending" || ctx_r1.request.status === "For Review" ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canDownload() ? 60 : -1);
  }
}
function RequestDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h1", 4);
    \u0275\u0275text(2, "Request Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 14);
    \u0275\u0275text(4, "The request you're looking for doesn't exist.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 5)(6, "span", 6);
    \u0275\u0275text(7, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "Back to Requests");
    \u0275\u0275elementEnd()()();
  }
}
var RequestDetailComponent = class _RequestDetailComponent {
  constructor(route, data, qrCodeService, certificateGenerator) {
    this.route = route;
    this.data = data;
    this.qrCodeService = qrCodeService;
    this.certificateGenerator = certificateGenerator;
    this.qrCodeDataUrl = null;
    this.showQRCode = false;
    this.isUpdating = false;
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.request = this.data.getRequestById(id);
      if (this.request) {
        this.loadRequester();
      }
    }
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.request = this.data.getRequestById(id);
        if (this.request) {
          this.loadRequester();
          this.generateQRCode();
        } else {
          this.requester = void 0;
        }
      } else {
        this.request = void 0;
        this.requester = void 0;
        this.qrCodeDataUrl = null;
      }
    });
  }
  generateQRCode() {
    if (this.request?.id) {
      try {
        this.qrCodeDataUrl = this.qrCodeService.generateRequestQRCode(this.request.id);
      } catch (error) {
        this.qrCodeDataUrl = null;
      }
    }
  }
  toggleQRCode() {
    this.showQRCode = !this.showQRCode;
    if (this.showQRCode && !this.qrCodeDataUrl && this.request?.id) {
      this.generateQRCode();
    }
  }
  downloadQRCode() {
    if (!this.qrCodeDataUrl)
      return;
    const link = document.createElement("a");
    link.href = this.qrCodeDataUrl;
    link.download = `request-${this.request?.id || "qr"}-code.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  loadRequester() {
    if (this.request?.residentId) {
      this.requester = this.data.getResidentByResidentId(this.request.residentId);
    } else {
      this.requester = void 0;
    }
  }
  approveRequest() {
    if (!this.request || this.isUpdating)
      return;
    this.isUpdating = true;
    const id = this.request.id;
    this.data.updateRequest(id, { status: "Approved" });
    this.request = __spreadProps(__spreadValues({}, this.request), { status: "Approved" });
    this.isUpdating = false;
  }
  rejectRequest() {
    if (!this.request || this.isUpdating)
      return;
    this.isUpdating = true;
    const id = this.request.id;
    this.data.updateRequest(id, { status: "Rejected" });
    this.request = __spreadProps(__spreadValues({}, this.request), { status: "Rejected" });
    this.isUpdating = false;
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
      yield this.certificateGenerator.export(ref, fileName, format);
    });
  }
  static {
    this.\u0275fac = function RequestDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(QrCodeService), \u0275\u0275directiveInject(CertificateGeneratorService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestDetailComponent, selectors: [["app-request-detail"]], viewQuery: function RequestDetailComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.certificateRef = _t.first);
      }
    }, decls: 3, vars: 1, consts: [["certificateRef", ""], [1, "request-detail"], [1, "card"], [1, "request-header"], [1, "page-title"], ["routerLink", "..", 1, "back-button"], [1, "back-button__icon"], [1, "back-button__text"], [1, "request-info"], [1, "info-section"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "muted"], [1, "info-item", "qr-code-item"], [1, "qr-code-controls"], ["type", "button", 1, "btn", "btn--sm", "btn--outline", 3, "click"], [1, "qr-code-display"], [1, "badge", 3, "ngClass"], [1, "action-section"], ["aria-label", "Certificate preview", 1, "certificate-section"], ["alt", "Request QR Code", 1, "qr-code-image", 3, "src"], [1, "qr-code-label"], ["type", "button", 1, "btn", "btn--sm", "btn--primary", 3, "click"], [1, "action-buttons"], ["type", "button", 1, "btn", "btn--success", 3, "click"], ["type", "button", 1, "btn", "btn--danger", 3, "click"], [1, "certificate-section__title"], [1, "certificate-section__hint"], [1, "certificate", "certificate--barangay"], [1, "certificate__header"], [1, "certificate__republic"], [1, "certificate__province"], [1, "certificate__municipality"], [1, "certificate__barangay"], [1, "certificate__line"], [1, "certificate__office"], [1, "certificate__body"], [1, "certificate__title"], [1, "certificate__intro"], [1, "certificate__paragraph"], [1, "certificate__highlight"], [1, "certificate__footer"], [1, "certificate__control"], [1, "certificate__control-label"], [1, "certificate__control-value"], [1, "certificate__signature-block"], [1, "certificate__signature-line"], [1, "certificate__signature-name"], [1, "certificate-actions"], ["type", "button", 1, "btn", "btn--success", "btn--lg", 3, "click"], [1, "btn-icon"], ["type", "button", 1, "btn", "btn--outline", "btn--lg", 3, "click"]], template: function RequestDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275conditionalCreate(1, RequestDetailComponent_Conditional_1_Template, 61, 15, "div", 2)(2, RequestDetailComponent_Conditional_2_Template, 10, 0, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.request ? 1 : 2);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ['\n\n.request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  gap: 1rem;\n  position: relative;\n  padding-right: 140px;\n}\n.request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding-right: 0;\n  }\n  .request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .request-detail[_ngcontent-%COMP%]   .request-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n  }\n}\n.request-detail[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  color: var(--color-text);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 0.9375rem;\n  border-radius: var(--radius);\n  transition: all 0.2s ease;\n  width: fit-content;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.request-detail[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-card);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(-2px);\n  box-shadow: var(--shadow);\n}\n.request-detail[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:active {\n  transform: translateX(-1px);\n}\n.request-detail[_ngcontent-%COMP%]   .back-button__icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1;\n  transition: transform 0.2s ease;\n}\n.request-detail[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover   .request-detail[_ngcontent-%COMP%]   .back-button__icon[_ngcontent-%COMP%] {\n  transform: translateX(-2px);\n}\n.request-detail[_ngcontent-%COMP%]   .back-button__text[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n@media (max-width: 640px) {\n  .request-detail[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: var(--color-text);\n  font-size: 1.25rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-size: 1rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item.qr-code-item[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item.qr-code-item[_ngcontent-%COMP%]   .qr-code-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item.qr-code-item[_ngcontent-%COMP%]   .qr-code-controls[_ngcontent-%COMP%]   .qr-code-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item.qr-code-item[_ngcontent-%COMP%]   .qr-code-controls[_ngcontent-%COMP%]   .qr-code-display[_ngcontent-%COMP%]   .qr-code-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: 4px solid var(--color-bg-card);\n  border-radius: var(--radius);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  background: var(--color-bg-card);\n  padding: 8px;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item.qr-code-item[_ngcontent-%COMP%]   .qr-code-controls[_ngcontent-%COMP%]   .qr-code-display[_ngcontent-%COMP%]   .qr-code-label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n  max-width: 300px;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .action-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid var(--color-border);\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .action-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: var(--color-text);\n  font-size: 1.25rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .action-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate-section__title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem;\n  color: var(--color-text);\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate-section__hint[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate[_ngcontent-%COMP%] {\n  margin: 0 auto 2rem;\n  max-width: 720px;\n  aspect-ratio: 210/297;\n  padding: 2.5rem 2.75rem;\n  border: 8px double #1f2937;\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);\n  box-sizing: border-box;\n  color: #111827;\n  font-family:\n    "Times New Roman",\n    Georgia,\n    "Noto Serif",\n    serif;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__republic[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__province[_ngcontent-%COMP%], \n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__municipality[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__barangay[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  font-size: 1.3rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__line[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 1px;\n  margin: 0.6rem auto 0.4rem;\n  background: #111827;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__office[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.14em;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__body[_ngcontent-%COMP%] {\n  margin-top: 2.25rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.9rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  margin: 0 0 2.25rem;\n  font-weight: 700;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__intro[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: left;\n  margin-bottom: 1.5rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__paragraph[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  line-height: 1.9;\n  text-align: justify;\n  margin-bottom: 1.4rem;\n  text-indent: 2.25rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__highlight[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: 4rem;\n  gap: 2rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__control[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__control-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__control-value[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  margin-left: 0.25rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__signature-block[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 200px;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__signature-line[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #111827;\n  margin-bottom: 0.35rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate__signature-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate-actions[_ngcontent-%COMP%]   .btn--lg[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.5rem;\n  font-size: 1rem;\n}\n.request-detail[_ngcontent-%COMP%]   .request-info[_ngcontent-%COMP%]   .certificate-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1;\n}\n/*# sourceMappingURL=request-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestDetailComponent, [{
    type: Component,
    args: [{ selector: "app-request-detail", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="request-detail">\r
  @if (request) {\r
    <div class="card">\r
      <div class="request-header">\r
        <h1 class="page-title">Request Details</h1>\r
        <a routerLink=".." class="back-button">\r
          <span class="back-button__icon">\u2190</span>\r
          <span class="back-button__text">Back to Requests</span>\r
        </a>\r
      </div>\r
\r
      <div class="request-info">\r
        <div class="info-section">\r
          <h2>Request Information</h2>\r
          <div class="info-grid">\r
            <div class="info-item">\r
              <span class="info-label">Request ID:</span>\r
              <span class="info-value">{{ request.id }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">Requested By:</span>\r
              <span class="info-value">\r
                @if (requester) {\r
                  {{ requester.name }} ({{ requester.residentId }})\r
                } @else {\r
                  <span class="muted">Not linked to a resident</span>\r
                }\r
              </span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">Address / Purok:</span>\r
              <span class="info-value">\r
                @if (requester) {\r
                  {{ requester.address || ('Purok ' + requester.purok) }}\r
                } @else {\r
                  <span class="muted">N/A</span>\r
                }\r
              </span>\r
            </div>\r
            <div class="info-item qr-code-item">\r
              <span class="info-label">QR Code:</span>\r
              <div class="qr-code-controls">\r
                <button type="button" class="btn btn--sm btn--outline" (click)="toggleQRCode()">\r
                  {{ showQRCode ? 'Hide' : 'Show' }} QR Code\r
                </button>\r
                @if (showQRCode && qrCodeDataUrl) {\r
                  <div class="qr-code-display">\r
                    <img [src]="qrCodeDataUrl" alt="Request QR Code" class="qr-code-image" />\r
                    <p class="qr-code-label">Scan this QR code to quickly access this request</p>\r
                    <button type="button" class="btn btn--sm btn--primary" (click)="downloadQRCode()">\r
                      Download QR Code\r
                    </button>\r
                  </div>\r
                }\r
              </div>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">Type:</span>\r
              <span class="info-value">{{ request.type }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">Purpose:</span>\r
              <span class="info-value">{{ request.purpose }}</span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">Status:</span>\r
              <span class="info-value">\r
                <span class="badge" [ngClass]="{\r
                  'badge--success': request.status === 'Approved',\r
                  'badge--warning': request.status === 'Pending' || request.status === 'For Review'\r
                }">\r
                  {{ request.status }}\r
                </span>\r
              </span>\r
            </div>\r
            <div class="info-item">\r
              <span class="info-label">Date:</span>\r
              <span class="info-value">{{ request.date }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        @if (request.status === 'Pending' || request.status === 'For Review') {\r
          <div class="action-section">\r
            <h2>Actions</h2>\r
            <div class="action-buttons">\r
              <button class="btn btn--success" type="button" (click)="approveRequest()">Approve</button>\r
              <button class="btn btn--danger" type="button" (click)="rejectRequest()">Reject</button>\r
            </div>\r
          </div>\r
        }\r
\r
        @if (canDownload()) {\r
          <!-- Printable certificate preview for approved requests -->\r
          <section class="certificate-section" aria-label="Certificate preview">\r
            <h2 class="certificate-section__title">Printable Certificate</h2>\r
            <p class="certificate-section__hint">\r
              Review the certificate below, then download it as PDF or PNG for printing.\r
            </p>\r
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
                  This is to certify that\r
                  <span class="certificate__highlight">{{ requester?.name || '____________________' }}</span>,\r
                  of legal age, {{ requester?.civilStatus || 'single/married' }}, and a resident of\r
                  <span class="certificate__highlight">\r
                    {{\r
                      requester?.address\r
                        || ('Purok ' + (requester?.purok || '___') + ', Barangay Name, Municipality of Villanueva, Province of Misamis Oriental')\r
                    }}\r
                  </span>,\r
                  is a bona fide resident of this barangay.\r
                </p>\r
\r
                <p class="certificate__paragraph">\r
                  This certification is being issued upon the request of the above-named person\r
                  for the purpose of\r
                  <span class="certificate__highlight">{{ request.purpose || '____________________' }}</span>.\r
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
            <div class="certificate-actions">\r
              <button class="btn btn--success btn--lg" type="button" (click)="downloadCertificate('pdf')">\r
                <span class="btn-icon">\u2B07</span>\r
                <span>Download as PDF</span>\r
              </button>\r
              <button class="btn btn--outline btn--lg" type="button" (click)="downloadCertificate('png')">\r
                <span class="btn-icon">\u{1F5BC}</span>\r
                <span>Download as PNG</span>\r
              </button>\r
            </div>\r
          </section>\r
        }\r
      </div>\r
    </div>\r
  } @else {\r
    <div class="card">\r
      <h1 class="page-title">Request Not Found</h1>\r
      <p class="muted">The request you're looking for doesn't exist.</p>\r
      <a routerLink=".." class="back-button">\r
        <span class="back-button__icon">\u2190</span>\r
        <span class="back-button__text">Back to Requests</span>\r
      </a>\r
    </div>\r
  }\r
</div>\r
`, styles: ['/* src/app/pages/request-detail/request-detail.component.scss */\n.request-detail .request-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  gap: 1rem;\n  position: relative;\n  padding-right: 140px;\n}\n.request-detail .request-header .page-title {\n  margin-bottom: 0;\n}\n.request-detail .request-header .back-button {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n@media (max-width: 640px) {\n  .request-detail .request-header {\n    flex-direction: column;\n    align-items: stretch;\n    padding-right: 0;\n  }\n  .request-detail .request-header .page-title {\n    margin-bottom: 1rem;\n  }\n  .request-detail .request-header .back-button {\n    position: static;\n    transform: none;\n  }\n}\n.request-detail .back-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  color: var(--color-text);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 0.9375rem;\n  border-radius: var(--radius);\n  transition: all 0.2s ease;\n  width: fit-content;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.request-detail .back-button:hover {\n  background: var(--color-bg-card);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(-2px);\n  box-shadow: var(--shadow);\n}\n.request-detail .back-button:active {\n  transform: translateX(-1px);\n}\n.request-detail .back-button__icon {\n  font-size: 1.125rem;\n  line-height: 1;\n  transition: transform 0.2s ease;\n}\n.request-detail .back-button:hover .request-detail .back-button__icon {\n  transform: translateX(-2px);\n}\n.request-detail .back-button__text {\n  line-height: 1.5;\n}\n@media (max-width: 640px) {\n  .request-detail .back-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.request-detail .request-info .info-section {\n  margin-bottom: 2rem;\n}\n.request-detail .request-info .info-section h2 {\n  margin-bottom: 1rem;\n  color: var(--color-text);\n  font-size: 1.25rem;\n}\n.request-detail .request-info .info-section .info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.request-detail .request-info .info-section .info-grid .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.request-detail .request-info .info-section .info-grid .info-item .info-label {\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.request-detail .request-info .info-section .info-grid .info-item .info-value {\n  color: var(--color-text);\n  font-size: 1rem;\n}\n.request-detail .request-info .info-section .info-grid .info-item.qr-code-item {\n  grid-column: 1/-1;\n}\n.request-detail .request-info .info-section .info-grid .info-item.qr-code-item .qr-code-controls {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.request-detail .request-info .info-section .info-grid .info-item.qr-code-item .qr-code-controls .qr-code-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n.request-detail .request-info .info-section .info-grid .info-item.qr-code-item .qr-code-controls .qr-code-display .qr-code-image {\n  width: 200px;\n  height: 200px;\n  border: 4px solid var(--color-bg-card);\n  border-radius: var(--radius);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  background: var(--color-bg-card);\n  padding: 8px;\n}\n.request-detail .request-info .info-section .info-grid .info-item.qr-code-item .qr-code-controls .qr-code-display .qr-code-label {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n  max-width: 300px;\n}\n.request-detail .request-info .action-section {\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid var(--color-border);\n}\n.request-detail .request-info .action-section h2 {\n  margin-bottom: 1rem;\n  color: var(--color-text);\n  font-size: 1.25rem;\n}\n.request-detail .request-info .action-section .action-buttons {\n  display: flex;\n  gap: 1rem;\n}\n.request-detail .request-info .certificate-section {\n  margin-top: 2rem;\n}\n.request-detail .request-info .certificate-section__title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem;\n  color: var(--color-text);\n}\n.request-detail .request-info .certificate-section__hint {\n  margin: 0 0 1.5rem;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.request-detail .request-info .certificate {\n  margin: 0 auto 2rem;\n  max-width: 720px;\n  aspect-ratio: 210/297;\n  padding: 2.5rem 2.75rem;\n  border: 8px double #1f2937;\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);\n  box-sizing: border-box;\n  color: #111827;\n  font-family:\n    "Times New Roman",\n    Georgia,\n    "Noto Serif",\n    serif;\n}\n.request-detail .request-info .certificate__header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.request-detail .request-info .certificate__republic {\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.request-detail .request-info .certificate__province,\n.request-detail .request-info .certificate__municipality {\n  font-size: 0.95rem;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n}\n.request-detail .request-info .certificate__barangay {\n  margin-top: 0.35rem;\n  font-size: 1.3rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n}\n.request-detail .request-info .certificate__line {\n  width: 70%;\n  height: 1px;\n  margin: 0.6rem auto 0.4rem;\n  background: #111827;\n}\n.request-detail .request-info .certificate__office {\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.14em;\n}\n.request-detail .request-info .certificate__body {\n  margin-top: 2.25rem;\n}\n.request-detail .request-info .certificate__title {\n  text-align: center;\n  font-size: 1.9rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  margin: 0 0 2.25rem;\n  font-weight: 700;\n}\n.request-detail .request-info .certificate__intro {\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: left;\n  margin-bottom: 1.5rem;\n}\n.request-detail .request-info .certificate__paragraph {\n  font-size: 0.98rem;\n  line-height: 1.9;\n  text-align: justify;\n  margin-bottom: 1.4rem;\n  text-indent: 2.25rem;\n}\n.request-detail .request-info .certificate__highlight {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.request-detail .request-info .certificate__footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: 4rem;\n  gap: 2rem;\n}\n.request-detail .request-info .certificate__control {\n  font-size: 0.9rem;\n}\n.request-detail .request-info .certificate__control-label {\n  font-weight: 600;\n}\n.request-detail .request-info .certificate__control-value {\n  font-family: "Courier New", monospace;\n  margin-left: 0.25rem;\n}\n.request-detail .request-info .certificate__signature-block {\n  text-align: center;\n  min-width: 200px;\n}\n.request-detail .request-info .certificate__signature-line {\n  width: 100%;\n  border-bottom: 1px solid #111827;\n  margin-bottom: 0.35rem;\n}\n.request-detail .request-info .certificate__signature-name {\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.request-detail .request-info .certificate-actions {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.request-detail .request-info .certificate-actions .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.request-detail .request-info .certificate-actions .btn--lg {\n  padding: 0.875rem 1.5rem;\n  font-size: 1rem;\n}\n.request-detail .request-info .certificate-actions .btn .btn-icon {\n  font-size: 1.125rem;\n  line-height: 1;\n}\n/*# sourceMappingURL=request-detail.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: DataService }, { type: QrCodeService }, { type: CertificateGeneratorService }], { certificateRef: [{
    type: ViewChild,
    args: ["certificateRef"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestDetailComponent, { className: "RequestDetailComponent", filePath: "src/app/pages/request-detail/request-detail.component.ts", lineNumber: 15 });
})();
export {
  RequestDetailComponent
};
//# sourceMappingURL=chunk-Y3OGLCAL.js.map
