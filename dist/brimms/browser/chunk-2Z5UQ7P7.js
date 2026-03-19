import {
  EmailService
} from "./chunk-2MMF7BH2.js";
import {
  ApiConfigService
} from "./chunk-3GLB2YWW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-YX676IPB.js";
import {
  HttpClient
} from "./chunk-ZNESRAKE.js";
import {
  DataService
} from "./chunk-F47T3EGJ.js";
import {
  NotificationService
} from "./chunk-EXP2T67A.js";
import {
  CommonModule,
  Component,
  Injectable,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MXCAMUXG.js";
import "./chunk-TWWAJFRB.js";

// src/app/services/sms.service.ts
var SmsService = class _SmsService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiConfig = inject(ApiConfigService);
  }
  get apiBaseUrl() {
    return this.apiConfig.apiBaseUrl;
  }
  sendSms(payload) {
    return this.http.post(`${this.apiBaseUrl}/api/notifications/sms`, payload);
  }
  sendBulkSms(payload) {
    return this.http.post(`${this.apiBaseUrl}/api/notifications/sms/bulk`, payload);
  }
  static {
    this.\u0275fac = function SmsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmsService, factory: _SmsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/admin-sms-broadcast/admin-sms-broadcast.component.ts
function AdminSmsBroadcastComponent_section_11_div_11_div_7_ul_1_li_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("ID: ", r_r5.residentId);
  }
}
function AdminSmsBroadcastComponent_section_11_div_11_div_7_ul_1_li_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", r_r5.purok);
  }
}
function AdminSmsBroadcastComponent_section_11_div_11_div_7_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 33);
    \u0275\u0275listener("mousedown", function AdminSmsBroadcastComponent_section_11_div_11_div_7_ul_1_li_1_Template_li_mousedown_0_listener($event) {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.selectPhoneSuggestion(r_r5));
    });
    \u0275\u0275elementStart(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275template(4, AdminSmsBroadcastComponent_section_11_div_11_div_7_ul_1_li_1_span_4_Template, 2, 1, "span", 36)(5, AdminSmsBroadcastComponent_section_11_div_11_div_7_ul_1_li_1_span_5_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r5.residentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r5.purok);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.contact);
  }
}
function AdminSmsBroadcastComponent_section_11_div_11_div_7_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 31);
    \u0275\u0275template(1, AdminSmsBroadcastComponent_section_11_div_11_div_7_ul_1_li_1_Template, 8, 4, "li", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.phoneSuggestions);
  }
}
function AdminSmsBroadcastComponent_section_11_div_11_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " No residents found. Try a different name, ID, purok, or number. ");
    \u0275\u0275elementEnd();
  }
}
function AdminSmsBroadcastComponent_section_11_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AdminSmsBroadcastComponent_section_11_div_11_div_7_ul_1_Template, 2, 1, "ul", 29)(2, AdminSmsBroadcastComponent_section_11_div_11_div_7_div_2_Template, 2, 0, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.phoneSuggestions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.phoneSuggestions.length === 0);
  }
}
function AdminSmsBroadcastComponent_section_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "label", 23);
    \u0275\u0275text(2, "Recipient phone number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4, "Search by name, resident ID, purok, or phone number.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25)(6, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSmsBroadcastComponent_section_11_div_11_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.phone, $event) || (ctx_r1.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function AdminSmsBroadcastComponent_section_11_div_11_Template_input_focus_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPhoneSuggestions = true);
    })("blur", function AdminSmsBroadcastComponent_section_11_div_11_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPhoneSuggestions = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminSmsBroadcastComponent_section_11_div_11_div_7_Template, 3, 2, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.phone);
    \u0275\u0275property("disabled", ctx_r1.isSending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPhoneSuggestions);
  }
}
function AdminSmsBroadcastComponent_section_11_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1, " SMS messages longer than 160 characters may be split into multiple parts depending on your provider. ");
    \u0275\u0275elementEnd();
  }
}
function AdminSmsBroadcastComponent_section_11_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" This will send the message to all residents with a contact number (", ctx_r1.smsBroadcastCount, "). ");
  }
}
function AdminSmsBroadcastComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 10)(1, "h1", 11);
    \u0275\u0275text(2, "SMS Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 12);
    \u0275\u0275text(4, " Send an SMS notification to a single resident or broadcast to all residents with a contact number. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "button", 14);
    \u0275\u0275listener("click", function AdminSmsBroadcastComponent_section_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.broadcastSmsToAllResidents = false);
    });
    \u0275\u0275text(7, " Single recipient ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function AdminSmsBroadcastComponent_section_11_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.broadcastSmsToAllResidents = true);
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 15);
    \u0275\u0275listener("ngSubmit", function AdminSmsBroadcastComponent_section_11_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendSms());
    });
    \u0275\u0275template(11, AdminSmsBroadcastComponent_section_11_div_11_Template, 8, 3, "div", 16);
    \u0275\u0275elementStart(12, "div", 17)(13, "label", 18);
    \u0275\u0275text(14, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSmsBroadcastComponent_section_11_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.message, $event) || (ctx_r1.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, AdminSmsBroadcastComponent_section_11_div_16_Template, 2, 0, "div", 20)(17, AdminSmsBroadcastComponent_section_11_div_17_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 21);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", !ctx_r1.broadcastSmsToAllResidents);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.broadcastSmsToAllResidents);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" All residents (", ctx_r1.smsBroadcastCount, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.broadcastSmsToAllResidents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.message);
    \u0275\u0275property("disabled", ctx_r1.isSending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.broadcastSmsToAllResidents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.broadcastSmsToAllResidents);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSending);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSending ? "Sending\u2026" : "Send SMS", " ");
  }
}
function AdminSmsBroadcastComponent_section_12_div_11_div_7_ul_1_li_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("ID: ", r_r9.residentId);
  }
}
function AdminSmsBroadcastComponent_section_12_div_11_div_7_ul_1_li_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", r_r9.purok);
  }
}
function AdminSmsBroadcastComponent_section_12_div_11_div_7_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 33);
    \u0275\u0275listener("mousedown", function AdminSmsBroadcastComponent_section_12_div_11_div_7_ul_1_li_1_Template_li_mousedown_0_listener($event) {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.selectEmailSuggestion(r_r9));
    });
    \u0275\u0275elementStart(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275template(4, AdminSmsBroadcastComponent_section_12_div_11_div_7_ul_1_li_1_span_4_Template, 2, 1, "span", 36)(5, AdminSmsBroadcastComponent_section_12_div_11_div_7_ul_1_li_1_span_5_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r9.residentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r9.purok);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.email);
  }
}
function AdminSmsBroadcastComponent_section_12_div_11_div_7_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 31);
    \u0275\u0275template(1, AdminSmsBroadcastComponent_section_12_div_11_div_7_ul_1_li_1_Template, 8, 4, "li", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.emailSuggestions);
  }
}
function AdminSmsBroadcastComponent_section_12_div_11_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " No residents found. Try a different name, ID, purok, or email. ");
    \u0275\u0275elementEnd();
  }
}
function AdminSmsBroadcastComponent_section_12_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AdminSmsBroadcastComponent_section_12_div_11_div_7_ul_1_Template, 2, 1, "ul", 29)(2, AdminSmsBroadcastComponent_section_12_div_11_div_7_div_2_Template, 2, 0, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.emailSuggestions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.emailSuggestions.length === 0);
  }
}
function AdminSmsBroadcastComponent_section_12_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "label", 51);
    \u0275\u0275text(2, "Recipient email address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4, "Search by name, resident ID, purok, or email.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25)(6, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSmsBroadcastComponent_section_12_div_11_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function AdminSmsBroadcastComponent_section_12_div_11_Template_input_focus_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showEmailSuggestions = true);
    })("blur", function AdminSmsBroadcastComponent_section_12_div_11_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showEmailSuggestions = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminSmsBroadcastComponent_section_12_div_11_div_7_Template, 3, 2, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275property("disabled", ctx_r1.isSendingEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showEmailSuggestions);
  }
}
function AdminSmsBroadcastComponent_section_12_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 53);
    \u0275\u0275listener("click", function AdminSmsBroadcastComponent_section_12_div_25_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearEmailAttachment());
    });
    \u0275\u0275text(3, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Attached: ", ctx_r1.emailAttachmentName, " ");
  }
}
function AdminSmsBroadcastComponent_section_12_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" This will send the email to all residents with an email address (", ctx_r1.emailBroadcastCount, "). ");
  }
}
function AdminSmsBroadcastComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 40)(1, "h2", 41);
    \u0275\u0275text(2, "Email Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 42);
    \u0275\u0275text(4, " Send an email notification to a single resident or broadcast to all residents with an email address. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "button", 14);
    \u0275\u0275listener("click", function AdminSmsBroadcastComponent_section_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.broadcastEmailToAllResidents = false);
    });
    \u0275\u0275text(7, " Single recipient ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function AdminSmsBroadcastComponent_section_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.broadcastEmailToAllResidents = true);
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 43);
    \u0275\u0275listener("ngSubmit", function AdminSmsBroadcastComponent_section_12_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendEmail());
    });
    \u0275\u0275template(11, AdminSmsBroadcastComponent_section_12_div_11_Template, 8, 3, "div", 16);
    \u0275\u0275elementStart(12, "div", 17)(13, "label", 44);
    \u0275\u0275text(14, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSmsBroadcastComponent_section_12_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.subject, $event) || (ctx_r1.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 17)(17, "label", 46);
    \u0275\u0275text(18, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 47)(20, "textarea", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSmsBroadcastComponent_section_12_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.emailMessage, $event) || (ctx_r1.emailMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 49, 0);
    \u0275\u0275listener("change", function AdminSmsBroadcastComponent_section_12_Template_input_change_21_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEmailFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 50);
    \u0275\u0275listener("click", function AdminSmsBroadcastComponent_section_12_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const emailAttachmentInput_r10 = \u0275\u0275reference(22);
      return \u0275\u0275resetView(emailAttachmentInput_r10.click());
    });
    \u0275\u0275text(24, " \u{1F4CE} ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, AdminSmsBroadcastComponent_section_12_div_25_Template, 4, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, AdminSmsBroadcastComponent_section_12_div_26_Template, 2, 1, "div", 20);
    \u0275\u0275elementStart(27, "button", 21);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", !ctx_r1.broadcastEmailToAllResidents);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.broadcastEmailToAllResidents);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" All residents (", ctx_r1.emailBroadcastCount, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.broadcastEmailToAllResidents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.subject);
    \u0275\u0275property("disabled", ctx_r1.isSendingEmail);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailMessage);
    \u0275\u0275property("disabled", ctx_r1.isSendingEmail);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSendingEmail);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSendingEmail);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.emailAttachmentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.broadcastEmailToAllResidents);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSendingEmail);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSendingEmail ? "Sending\u2026" : "Send Email", " ");
  }
}
var AdminSmsBroadcastComponent = class _AdminSmsBroadcastComponent {
  constructor(sms, emailService, notifications, data) {
    this.sms = sms;
    this.emailService = emailService;
    this.notifications = notifications;
    this.data = data;
    this.activeTab = "sms";
    this.phone = "";
    this.message = "";
    this.isSending = false;
    this.email = "";
    this.subject = "";
    this.emailMessage = "";
    this.isSendingEmail = false;
    this.emailAttachmentBase64 = null;
    this.emailAttachmentName = null;
    this.emailAttachmentMimeType = null;
    this.emailAttachmentFile = null;
    this.broadcastSmsToAllResidents = false;
    this.broadcastEmailToAllResidents = false;
    this.showPhoneSuggestions = false;
    this.showEmailSuggestions = false;
  }
  get phoneSuggestions() {
    const residentsWithContact = this.data.residents.filter((r) => r.contact != null && r.contact.trim() !== "");
    const q = this.phone.trim().toLowerCase();
    if (!q)
      return residentsWithContact;
    return residentsWithContact.filter((r) => this.matchesPhoneSearch(r, q));
  }
  matchesPhoneSearch(r, q) {
    return r.contact != null && r.contact.toLowerCase().includes(q) || r.name != null && r.name.toLowerCase().includes(q) || r.residentId != null && r.residentId.toLowerCase().includes(q) || r.purok != null && r.purok.toLowerCase().includes(q);
  }
  get emailSuggestions() {
    const residentsWithEmail = this.data.residents.filter((r) => r.email != null && r.email.trim() !== "");
    const q = this.email.trim().toLowerCase();
    if (!q)
      return residentsWithEmail;
    return residentsWithEmail.filter((r) => this.matchesEmailSearch(r, q));
  }
  matchesEmailSearch(r, q) {
    return r.email != null && r.email.toLowerCase().includes(q) || r.name != null && r.name.toLowerCase().includes(q) || r.residentId != null && r.residentId.toLowerCase().includes(q) || r.purok != null && r.purok.toLowerCase().includes(q);
  }
  selectPhoneSuggestion(resident) {
    if (resident.contact) {
      this.phone = resident.contact.trim();
    }
    this.showPhoneSuggestions = false;
  }
  selectEmailSuggestion(resident) {
    if (resident.email) {
      this.email = resident.email.trim();
    }
    this.showEmailSuggestions = false;
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  get smsBroadcastCount() {
    return this.data.residents.filter((r) => !!r.contact?.trim()).length;
  }
  get emailBroadcastCount() {
    return this.data.residents.filter((r) => !!r.email?.trim()).length;
  }
  onEmailFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file) {
      this.emailAttachmentBase64 = null;
      this.emailAttachmentName = null;
      this.emailAttachmentMimeType = null;
      this.emailAttachmentFile = null;
      return;
    }
    this.emailAttachmentFile = file;
    this.emailAttachmentName = file.name;
    this.emailAttachmentMimeType = file.type || null;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      const base64 = result.split(",")[1] || result;
      this.emailAttachmentBase64 = base64;
    };
    reader.readAsDataURL(file);
  }
  clearEmailAttachment() {
    this.emailAttachmentBase64 = null;
    this.emailAttachmentName = null;
    this.emailAttachmentMimeType = null;
    this.emailAttachmentFile = null;
  }
  sendSms() {
    const trimmedMessage = this.message.trim();
    this.isSending = true;
    if (this.broadcastSmsToAllResidents) {
      if (!trimmedMessage) {
        this.notifications.warning("Please enter a message to broadcast.", "Missing information");
        this.isSending = false;
        return;
      }
      const recipients = this.data.residents.map((r) => r.contact?.trim()).filter((c) => !!c);
      if (!recipients.length) {
        this.notifications.warning("No residents with contact numbers found.", "No recipients");
        this.isSending = false;
        return;
      }
      this.sms.sendBulkSms({ recipients, message: trimmedMessage }).subscribe({
        next: (res) => {
          if (res.success) {
            const successCount = res.results.filter((r) => r.success).length;
            const failCount = res.results.length - successCount;
            const summary = failCount > 0 ? `SMS sent to ${successCount} resident(s). ${failCount} failed.` : `SMS sent to ${successCount} resident(s).`;
            this.notifications.success(summary, "SMS Broadcast");
            this.message = "";
          } else {
            this.notifications.error(res.results?.length ? "Some SMS messages failed." : "Failed to send SMS broadcast.", "SMS Error");
          }
        },
        error: (err) => {
        },
        complete: () => {
          this.isSending = false;
        }
      });
    } else {
      const trimmedPhone = this.phone.trim();
      if (!trimmedPhone || !trimmedMessage) {
        this.notifications.warning("Please enter both phone number and message.", "Missing information");
        this.isSending = false;
        return;
      }
      this.sms.sendSms({ to: trimmedPhone, message: trimmedMessage }).subscribe({
        next: (res) => {
          if (res.success) {
            this.notifications.success("SMS sent successfully.", "SMS Notification");
            this.phone = "";
            this.message = "";
          } else {
            this.notifications.error(res.error || "Failed to send SMS.", "SMS Error");
          }
        },
        error: (err) => {
        },
        complete: () => {
          this.isSending = false;
        }
      });
    }
  }
  sendEmail() {
    const trimmedEmail = this.email.trim();
    const trimmedSubject = this.subject.trim();
    const trimmedMessage = this.emailMessage.trim();
    this.isSendingEmail = true;
    if (this.broadcastEmailToAllResidents) {
      if (!trimmedSubject || !trimmedMessage) {
        this.notifications.warning("Please enter subject and message to broadcast.", "Missing information");
        this.isSendingEmail = false;
        return;
      }
      const recipients = this.data.residents.map((r) => r.email?.trim()).filter((e) => !!e);
      if (!recipients.length) {
        this.notifications.warning("No residents with email addresses found.", "No recipients");
        this.isSendingEmail = false;
        return;
      }
      const bulkPayload = {
        recipients,
        subject: trimmedSubject,
        message: trimmedMessage,
        attachmentName: this.emailAttachmentName || void 0,
        attachmentContent: this.emailAttachmentBase64 || void 0,
        attachmentMimeType: this.emailAttachmentMimeType || void 0
      };
      const obs = this.emailAttachmentFile != null ? this.emailService.sendBulkEmailWithAttachment(recipients, trimmedSubject, trimmedMessage, this.emailAttachmentFile) : this.emailService.sendBulkEmail(bulkPayload);
      obs.subscribe({
        next: (res) => {
          if (res.success) {
            const successCount = res.results.filter((r) => r.success).length;
            const failCount = res.results.length - successCount;
            const summary = failCount > 0 ? `Email sent to ${successCount} resident(s). ${failCount} failed.` : `Email sent to ${successCount} resident(s).`;
            this.notifications.success(summary, "Email Broadcast");
            this.subject = "";
            this.emailMessage = "";
          } else {
            this.notifications.error(res.results?.length ? "Some emails failed." : "Failed to send email broadcast.", "Email Error");
          }
        },
        error: (err) => {
        },
        complete: () => {
          this.isSendingEmail = false;
        }
      });
    } else {
      if (!trimmedEmail || !trimmedSubject || !trimmedMessage) {
        this.notifications.warning("Please enter email, subject, and message.", "Missing information");
        this.isSendingEmail = false;
        return;
      }
      this.emailService.sendEmail({
        to: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
        attachmentName: this.emailAttachmentName || void 0,
        attachmentContent: this.emailAttachmentBase64 || void 0,
        attachmentMimeType: this.emailAttachmentMimeType || void 0
      }).subscribe({
        next: (res) => {
          if (res.success) {
            this.notifications.success("Email sent successfully.", "Email Notification");
            this.email = "";
            this.subject = "";
            this.emailMessage = "";
          } else {
            this.notifications.error(res.error || "Failed to send email.", "Email Error");
          }
        },
        error: (err) => {
        },
        complete: () => {
          this.isSendingEmail = false;
        }
      });
    }
  }
  static {
    this.\u0275fac = function AdminSmsBroadcastComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminSmsBroadcastComponent)(\u0275\u0275directiveInject(SmsService), \u0275\u0275directiveInject(EmailService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSmsBroadcastComponent, selectors: [["app-admin-sms-broadcast"]], decls: 13, vars: 8, consts: [["emailAttachmentInput", ""], [1, "notifications-page"], [1, "page-header"], [1, "page-title"], [1, "tabs-wrapper"], ["role", "tablist", 1, "tabs"], ["type", "button", "role", "tab", 1, "tab-button", 3, "click"], [1, "notifications-broadcast"], ["class", "sms-broadcast", 4, "ngIf"], ["class", "email-broadcast", 4, "ngIf"], [1, "sms-broadcast"], [1, "sms-broadcast__title"], [1, "sms-broadcast__subtitle"], [1, "recipient-toggle"], ["type", "button", 1, "recipient-toggle__button", 3, "click"], [1, "sms-broadcast__form", 3, "ngSubmit"], ["class", "form-field form-field--suggest form-field--centered", 4, "ngIf"], [1, "form-field"], ["for", "message", 1, "form-label"], ["id", "message", "name", "message", "rows", "4", "placeholder", "Type your SMS notification here...", 1, "form-textarea", 3, "ngModelChange", "ngModel", "disabled"], ["class", "form-help", 4, "ngIf"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], [1, "form-field", "form-field--suggest", "form-field--centered"], ["for", "phone", 1, "form-label"], [1, "form-hint"], [1, "suggest-wrapper"], ["id", "phone", "name", "phone", "type", "tel", "placeholder", "+63 9XXXXXXXXX", 1, "form-input", 3, "ngModelChange", "focus", "blur", "ngModel", "disabled"], ["class", "suggest-dropdown", 4, "ngIf"], [1, "suggest-dropdown"], ["class", "suggest-list", "role", "listbox", 4, "ngIf"], ["class", "suggest-empty", 4, "ngIf"], ["role", "listbox", 1, "suggest-list"], ["class", "suggest-item", "role", "option", 3, "mousedown", 4, "ngFor", "ngForOf"], ["role", "option", 1, "suggest-item", 3, "mousedown"], [1, "suggest-item__name"], [1, "suggest-item__meta"], [4, "ngIf"], [1, "suggest-item__value"], [1, "suggest-empty"], [1, "form-help"], [1, "email-broadcast"], [1, "email-broadcast__title"], [1, "email-broadcast__subtitle"], [1, "email-broadcast__form", 3, "ngSubmit"], ["for", "subject", 1, "form-label"], ["id", "subject", "name", "subject", "type", "text", "placeholder", "Subject line", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["for", "emailMessage", 1, "form-label"], [1, "textarea-with-attachment"], ["id", "emailMessage", "name", "emailMessage", "rows", "5", "placeholder", "Type your email message here...", 1, "form-textarea", 3, "ngModelChange", "ngModel", "disabled"], ["id", "emailAttachment", "name", "emailAttachment", "type", "file", 2, "display", "none", 3, "change", "disabled"], ["type", "button", "aria-label", "Attach file", 1, "attachment-button", 3, "click", "disabled"], ["for", "email", 1, "form-label"], ["id", "email", "name", "email", "type", "email", "placeholder", "resident@example.com", 1, "form-input", 3, "ngModelChange", "focus", "blur", "ngModel", "disabled"], ["type", "button", 1, "link-button", 3, "click"]], template: function AdminSmsBroadcastComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
        \u0275\u0275text(3, "Resident Notifications");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4)(5, "nav", 5)(6, "button", 6);
        \u0275\u0275listener("click", function AdminSmsBroadcastComponent_Template_button_click_6_listener() {
          return ctx.setActiveTab("sms");
        });
        \u0275\u0275text(7, " SMS ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 6);
        \u0275\u0275listener("click", function AdminSmsBroadcastComponent_Template_button_click_8_listener() {
          return ctx.setActiveTab("email");
        });
        \u0275\u0275text(9, " Email ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275template(11, AdminSmsBroadcastComponent_section_11_Template, 20, 12, "section", 8)(12, AdminSmsBroadcastComponent_section_12_Template, 29, 16, "section", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.activeTab === "sms");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "sms");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "email");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "email");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeTab === "sms");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "email");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.notifications-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.tabs-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n}\n.tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 24px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.notifications-broadcast[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 0 1.25rem 1.5rem;\n}\n.recipient-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto 1rem;\n  max-width: 320px;\n  width: 100%;\n  padding: 2px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.recipient-toggle__button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 8px 16px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 2px);\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.recipient-toggle__button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.recipient-toggle__button.active[_ngcontent-%COMP%] {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.sms-broadcast[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1.25rem;\n}\n.sms-broadcast__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.sms-broadcast__subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.email-broadcast__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.email-broadcast__subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.email-broadcast__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.sms-broadcast__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.form-field--centered[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n.form-field--centered[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], \n.form-field--centered[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-field--centered[_ngcontent-%COMP%]   .suggest-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 320px;\n}\n.form-hint[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.form-field--suggest[_ngcontent-%COMP%]   .suggest-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.suggest-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  margin-top: 2px;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n  max-height: 280px;\n  overflow: hidden;\n  z-index: 10;\n}\n.suggest-list[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  padding: 0;\n  list-style: none;\n  max-height: 260px;\n  overflow-y: auto;\n}\n.suggest-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0.6rem 0.75rem;\n  cursor: pointer;\n  transition: background 0.15s ease;\n  gap: 0.2rem;\n}\n.suggest-item[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-soft, rgba(37, 99, 235, 0.1));\n}\n.suggest-item__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n  font-size: 0.95rem;\n}\n.suggest-item__meta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.suggest-item__value[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-primary);\n  font-weight: 500;\n}\n.suggest-empty[_ngcontent-%COMP%] {\n  padding: 1rem 0.75rem;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--color-text);\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n  padding: 0.5rem 0.75rem;\n  font-size: 0.95rem;\n  background-color: var(--color-bg);\n  color: var(--color-text);\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 1px var(--color-primary-soft);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-help[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.textarea-with-attachment[_ngcontent-%COMP%] {\n  position: relative;\n}\n.textarea-with-attachment[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  padding-right: 2.5rem;\n}\n.attachment-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.5rem;\n  bottom: 0.5rem;\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  border: none;\n  background: transparent;\n  color: var(--color-text);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.attachment-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-text);\n  color: var(--color-bg);\n}\n.link-button[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: var(--color-primary);\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.6rem 1.25rem;\n  border-radius: 999px;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: white;\n}\n.btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n/*# sourceMappingURL=admin-sms-broadcast.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSmsBroadcastComponent, [{
    type: Component,
    args: [{ selector: "app-admin-sms-broadcast", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="notifications-page">\r
  <div class="page-header">\r
    <h1 class="page-title">Resident Notifications</h1>\r
  </div>\r
\r
  <div class="tabs-wrapper">\r
    <nav class="tabs" role="tablist">\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'sms'"\r
        (click)="setActiveTab('sms')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'sms'"\r
      >\r
        SMS\r
      </button>\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'email'"\r
        (click)="setActiveTab('email')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'email'"\r
      >\r
        Email\r
      </button>\r
    </nav>\r
  </div>\r
\r
  <div class="notifications-broadcast">\r
    <section class="sms-broadcast" *ngIf="activeTab === 'sms'">\r
    <h1 class="sms-broadcast__title">SMS Notifications</h1>\r
    <p class="sms-broadcast__subtitle">\r
      Send an SMS notification to a single resident or broadcast to all residents with a contact number.\r
    </p>\r
\r
    <div class="recipient-toggle">\r
      <button\r
        type="button"\r
        class="recipient-toggle__button"\r
        [class.active]="!broadcastSmsToAllResidents"\r
        (click)="broadcastSmsToAllResidents = false"\r
      >\r
        Single recipient\r
      </button>\r
      <button\r
        type="button"\r
        class="recipient-toggle__button"\r
        [class.active]="broadcastSmsToAllResidents"\r
        (click)="broadcastSmsToAllResidents = true"\r
      >\r
        All residents ({{ smsBroadcastCount }})\r
      </button>\r
    </div>\r
\r
    <form class="sms-broadcast__form" (ngSubmit)="sendSms()">\r
      <div class="form-field form-field--suggest form-field--centered" *ngIf="!broadcastSmsToAllResidents">\r
        <label class="form-label" for="phone">Recipient phone number</label>\r
        <p class="form-hint">Search by name, resident ID, purok, or phone number.</p>\r
        <div class="suggest-wrapper">\r
          <input\r
            id="phone"\r
            name="phone"\r
            class="form-input"\r
            type="tel"\r
            [(ngModel)]="phone"\r
            placeholder="+63 9XXXXXXXXX"\r
            [disabled]="isSending"\r
            (focus)="showPhoneSuggestions = true"\r
            (blur)="showPhoneSuggestions = false"\r
          />\r
          <div class="suggest-dropdown" *ngIf="showPhoneSuggestions">\r
            <ul\r
              class="suggest-list"\r
              *ngIf="phoneSuggestions.length > 0"\r
              role="listbox"\r
            >\r
              <li\r
                *ngFor="let r of phoneSuggestions"\r
                class="suggest-item"\r
                role="option"\r
                (mousedown)="$event.preventDefault(); selectPhoneSuggestion(r)"\r
              >\r
                <span class="suggest-item__name">{{ r.name }}</span>\r
                <span class="suggest-item__meta">\r
                  <span *ngIf="r.residentId">ID: {{ r.residentId }}</span>\r
                  <span *ngIf="r.purok"> \xB7 {{ r.purok }}</span>\r
                </span>\r
                <span class="suggest-item__value">{{ r.contact }}</span>\r
              </li>\r
            </ul>\r
            <div class="suggest-empty" *ngIf="phoneSuggestions.length === 0">\r
              No residents found. Try a different name, ID, purok, or number.\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-field">\r
        <label class="form-label" for="message">Message</label>\r
        <textarea\r
          id="message"\r
          name="message"\r
          class="form-textarea"\r
          rows="4"\r
          [(ngModel)]="message"\r
          placeholder="Type your SMS notification here..."\r
          [disabled]="isSending"\r
        ></textarea>\r
        <div class="form-help" *ngIf="!broadcastSmsToAllResidents">\r
          SMS messages longer than 160 characters may be split into multiple parts depending on your provider.\r
        </div>\r
        <div class="form-help" *ngIf="broadcastSmsToAllResidents">\r
          This will send the message to all residents with a contact number ({{ smsBroadcastCount }}).\r
        </div>\r
      </div>\r
\r
      <button class="btn btn--primary" type="submit" [disabled]="isSending">\r
        {{ isSending ? 'Sending\u2026' : 'Send SMS' }}\r
      </button>\r
    </form>\r
    </section>\r
\r
    <section class="email-broadcast" *ngIf="activeTab === 'email'">\r
    <h2 class="email-broadcast__title">Email Notifications</h2>\r
    <p class="email-broadcast__subtitle">\r
      Send an email notification to a single resident or broadcast to all residents with an email address.\r
    </p>\r
\r
    <div class="recipient-toggle">\r
      <button\r
        type="button"\r
        class="recipient-toggle__button"\r
        [class.active]="!broadcastEmailToAllResidents"\r
        (click)="broadcastEmailToAllResidents = false"\r
      >\r
        Single recipient\r
      </button>\r
      <button\r
        type="button"\r
        class="recipient-toggle__button"\r
        [class.active]="broadcastEmailToAllResidents"\r
        (click)="broadcastEmailToAllResidents = true"\r
      >\r
        All residents ({{ emailBroadcastCount }})\r
      </button>\r
    </div>\r
\r
    <form class="email-broadcast__form" (ngSubmit)="sendEmail()">\r
      <div class="form-field form-field--suggest form-field--centered" *ngIf="!broadcastEmailToAllResidents">\r
        <label class="form-label" for="email">Recipient email address</label>\r
        <p class="form-hint">Search by name, resident ID, purok, or email.</p>\r
        <div class="suggest-wrapper">\r
          <input\r
            id="email"\r
            name="email"\r
            class="form-input"\r
            type="email"\r
            [(ngModel)]="email"\r
            placeholder="resident@example.com"\r
            [disabled]="isSendingEmail"\r
            (focus)="showEmailSuggestions = true"\r
            (blur)="showEmailSuggestions = false"\r
          />\r
          <div class="suggest-dropdown" *ngIf="showEmailSuggestions">\r
            <ul\r
              class="suggest-list"\r
              *ngIf="emailSuggestions.length > 0"\r
              role="listbox"\r
            >\r
              <li\r
                *ngFor="let r of emailSuggestions"\r
                class="suggest-item"\r
                role="option"\r
                (mousedown)="$event.preventDefault(); selectEmailSuggestion(r)"\r
              >\r
                <span class="suggest-item__name">{{ r.name }}</span>\r
                <span class="suggest-item__meta">\r
                  <span *ngIf="r.residentId">ID: {{ r.residentId }}</span>\r
                  <span *ngIf="r.purok"> \xB7 {{ r.purok }}</span>\r
                </span>\r
                <span class="suggest-item__value">{{ r.email }}</span>\r
              </li>\r
            </ul>\r
            <div class="suggest-empty" *ngIf="emailSuggestions.length === 0">\r
              No residents found. Try a different name, ID, purok, or email.\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-field">\r
        <label class="form-label" for="subject">Subject</label>\r
        <input\r
          id="subject"\r
          name="subject"\r
          class="form-input"\r
          type="text"\r
          [(ngModel)]="subject"\r
          placeholder="Subject line"\r
          [disabled]="isSendingEmail"\r
        />\r
      </div>\r
\r
      <div class="form-field">\r
        <label class="form-label" for="emailMessage">Message</label>\r
        <div class="textarea-with-attachment">\r
          <textarea\r
            id="emailMessage"\r
            name="emailMessage"\r
            class="form-textarea"\r
            rows="5"\r
            [(ngModel)]="emailMessage"\r
            placeholder="Type your email message here..."\r
            [disabled]="isSendingEmail"\r
          ></textarea>\r
\r
          <input\r
            #emailAttachmentInput\r
            id="emailAttachment"\r
            name="emailAttachment"\r
            type="file"\r
            (change)="onEmailFileSelected($event)"\r
            [disabled]="isSendingEmail"\r
            style="display: none;"\r
          />\r
\r
          <button\r
            type="button"\r
            class="attachment-button"\r
            (click)="emailAttachmentInput.click()"\r
            [disabled]="isSendingEmail"\r
            aria-label="Attach file"\r
          >\r
            \u{1F4CE}\r
          </button>\r
        </div>\r
        <div class="form-help" *ngIf="emailAttachmentName">\r
          Attached: {{ emailAttachmentName }}\r
          <button type="button" class="link-button" (click)="clearEmailAttachment()">Remove</button>\r
        </div>\r
      </div>\r
\r
      <div class="form-help" *ngIf="broadcastEmailToAllResidents">\r
        This will send the email to all residents with an email address ({{ emailBroadcastCount }}).\r
      </div>\r
\r
      <button class="btn btn--primary" type="submit" [disabled]="isSendingEmail">\r
        {{ isSendingEmail ? 'Sending\u2026' : 'Send Email' }}\r
      </button>\r
    </form>\r
    </section>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/pages/admin-sms-broadcast/admin-sms-broadcast.component.scss */\n.notifications-page {\n  width: 100%;\n}\n.page-header {\n  margin-bottom: 1rem;\n}\n.page-header .page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.tabs-wrapper {\n  margin-bottom: 1.5rem;\n}\n.tabs {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n}\n.tabs .tab-button {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 24px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tabs .tab-button:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tabs .tab-button.active {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.notifications-broadcast {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 0 1.25rem 1.5rem;\n}\n.recipient-toggle {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto 1rem;\n  max-width: 320px;\n  width: 100%;\n  padding: 2px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.recipient-toggle__button {\n  flex: 1;\n  min-width: 0;\n  padding: 8px 16px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 2px);\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.recipient-toggle__button:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.recipient-toggle__button.active {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.sms-broadcast {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1.25rem;\n}\n.sms-broadcast__title {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.sms-broadcast__subtitle {\n  margin: 0 0 1.5rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.email-broadcast__title {\n  margin: 0 0 0.5rem;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.email-broadcast__subtitle {\n  margin: 0 0 1.5rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.email-broadcast__form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.sms-broadcast__form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.form-field--centered {\n  align-items: center;\n  text-align: center;\n}\n.form-field--centered .form-label,\n.form-field--centered .form-hint {\n  width: 100%;\n}\n.form-field--centered .suggest-wrapper {\n  width: 100%;\n  max-width: 320px;\n}\n.form-hint {\n  margin: 0 0 0.35rem;\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.form-field--suggest .suggest-wrapper {\n  position: relative;\n}\n.suggest-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  margin-top: 2px;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n  max-height: 280px;\n  overflow: hidden;\n  z-index: 10;\n}\n.suggest-list {\n  margin: 0.25rem 0;\n  padding: 0;\n  list-style: none;\n  max-height: 260px;\n  overflow-y: auto;\n}\n.suggest-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0.6rem 0.75rem;\n  cursor: pointer;\n  transition: background 0.15s ease;\n  gap: 0.2rem;\n}\n.suggest-item:hover {\n  background: var(--color-primary-soft, rgba(37, 99, 235, 0.1));\n}\n.suggest-item__name {\n  font-weight: 600;\n  color: var(--color-text);\n  font-size: 0.95rem;\n}\n.suggest-item__meta {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.suggest-item__value {\n  font-size: 0.85rem;\n  color: var(--color-primary);\n  font-weight: 500;\n}\n.suggest-empty {\n  padding: 1rem 0.75rem;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n.form-label {\n  font-weight: 500;\n  color: var(--color-text);\n}\n.form-input,\n.form-textarea {\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n  padding: 0.5rem 0.75rem;\n  font-size: 0.95rem;\n  background-color: var(--color-bg);\n  color: var(--color-text);\n}\n.form-input:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 1px var(--color-primary-soft);\n}\n.form-textarea {\n  resize: vertical;\n}\n.form-help {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.textarea-with-attachment {\n  position: relative;\n}\n.textarea-with-attachment .form-textarea {\n  width: 100%;\n  display: block;\n  padding-right: 2.5rem;\n}\n.attachment-button {\n  position: absolute;\n  right: 0.5rem;\n  bottom: 0.5rem;\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  border: none;\n  background: transparent;\n  color: var(--color-text);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.attachment-button:hover:not(:disabled) {\n  background: var(--color-text);\n  color: var(--color-bg);\n}\n.link-button {\n  margin-left: 0.5rem;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: var(--color-primary);\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.6rem 1.25rem;\n  border-radius: 999px;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n.btn--primary {\n  background-color: var(--color-primary);\n  color: white;\n}\n.btn--primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n/*# sourceMappingURL=admin-sms-broadcast.component.css.map */\n"] }]
  }], () => [{ type: SmsService }, { type: EmailService }, { type: NotificationService }, { type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSmsBroadcastComponent, { className: "AdminSmsBroadcastComponent", filePath: "src/app/pages/admin-sms-broadcast/admin-sms-broadcast.component.ts", lineNumber: 18 });
})();
export {
  AdminSmsBroadcastComponent
};
//# sourceMappingURL=chunk-2Z5UQ7P7.js.map
