import {
  QrCodeService
} from "./chunk-OCTFP5JT.js";
import "./chunk-R4NIWQA2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YX676IPB.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-HOXEAXWN.js";
import "./chunk-ZNESRAKE.js";
import {
  AuthService,
  DataService
} from "./chunk-F47T3EGJ.js";
import "./chunk-EXP2T67A.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MXCAMUXG.js";
import {
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/pages/resident-profile/resident-profile.component.ts
var _c0 = (a0, a1) => ({ "badge--success": a0, "badge--warning": a1 });
var _forTrack0 = ($index, $item) => $item.residentId;
var _forTrack1 = ($index, $item) => $item.id;
function ResidentProfileComponent_div_0_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.resident.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function ResidentProfileComponent_div_0_Conditional_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "p", 30);
    \u0275\u0275text(3, "Scan this QR code to quickly access this resident's profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadQRCode());
    });
    \u0275\u0275text(5, " Download QR Code ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.qrCodeDataUrl, \u0275\u0275sanitizeUrl);
  }
}
function ResidentProfileComponent_div_0_Conditional_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 25)(1, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentProfileComponent_div_0_Conditional_17_Conditional_12_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editValue, $event) || (ctx_r1.editValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ResidentProfileComponent_div_0_Conditional_17_Conditional_12_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    })("keydown.escape", function ResidentProfileComponent_div_0_Conditional_17_Conditional_12_Template_input_keydown_escape_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275text(3, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(5, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editValue);
  }
}
function ResidentProfileComponent_div_0_Conditional_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "a", 33);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_13_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.startEdit("name");
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(2, "Edit Name");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.name, " ");
  }
}
function ResidentProfileComponent_div_0_Conditional_17_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 25)(1, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentProfileComponent_div_0_Conditional_17_Conditional_50_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editValue, $event) || (ctx_r1.editValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ResidentProfileComponent_div_0_Conditional_17_Conditional_50_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    })("keydown.escape", function ResidentProfileComponent_div_0_Conditional_17_Conditional_50_Template_input_keydown_escape_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_50_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275text(3, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_50_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(5, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editValue);
  }
}
function ResidentProfileComponent_div_0_Conditional_17_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "a", 33);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_51_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.startEdit("contact");
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.contact || "N/A", " ");
  }
}
function ResidentProfileComponent_div_0_Conditional_17_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 25)(1, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentProfileComponent_div_0_Conditional_17_Conditional_55_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editValue, $event) || (ctx_r1.editValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ResidentProfileComponent_div_0_Conditional_17_Conditional_55_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    })("keydown.escape", function ResidentProfileComponent_div_0_Conditional_17_Conditional_55_Template_input_keydown_escape_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_55_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275text(3, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_55_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(5, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editValue);
  }
}
function ResidentProfileComponent_div_0_Conditional_17_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "a", 33);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_56_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.startEdit("email");
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.email || "N/A", " ");
  }
}
function ResidentProfileComponent_div_0_Conditional_17_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 25)(1, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentProfileComponent_div_0_Conditional_17_Conditional_60_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editValue, $event) || (ctx_r1.editValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ResidentProfileComponent_div_0_Conditional_17_Conditional_60_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    })("keydown.escape", function ResidentProfileComponent_div_0_Conditional_17_Conditional_60_Template_input_keydown_escape_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_60_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275text(3, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_60_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(5, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editValue);
  }
}
function ResidentProfileComponent_div_0_Conditional_17_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "a", 33);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Conditional_61_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.startEdit("address");
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(2, "Edit Address");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.address || "N/A", " ");
  }
}
function ResidentProfileComponent_div_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 16)(2, "div", 17);
    \u0275\u0275conditionalCreate(3, ResidentProfileComponent_div_0_Conditional_17_Conditional_3_Template, 1, 1, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21)(8, "button", 22);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Conditional_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleQRCode());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ResidentProfileComponent_div_0_Conditional_17_Conditional_10_Template, 6, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2", 24);
    \u0275\u0275conditionalCreate(12, ResidentProfileComponent_div_0_Conditional_17_Conditional_12_Template, 6, 1, "span", 25)(13, ResidentProfileComponent_div_0_Conditional_17_Conditional_13_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 26)(15, "strong");
    \u0275\u0275text(16, "Full Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 26)(19, "strong");
    \u0275\u0275text(20, "Birthday:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 26)(23, "strong");
    \u0275\u0275text(24, "Place of Birth:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 27)(27, "strong");
    \u0275\u0275text(28, "Birth Certificate Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 28);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "p", 26)(32, "strong");
    \u0275\u0275text(33, "Blood Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 26)(36, "strong");
    \u0275\u0275text(37, "Gender:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 26)(40, "strong");
    \u0275\u0275text(41, "Civil Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 26)(44, "strong");
    \u0275\u0275text(45, "Nationality:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 26)(48, "strong");
    \u0275\u0275text(49, "Contact Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(50, ResidentProfileComponent_div_0_Conditional_17_Conditional_50_Template, 6, 1, "span", 25)(51, ResidentProfileComponent_div_0_Conditional_17_Conditional_51_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 26)(53, "strong");
    \u0275\u0275text(54, "Email Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(55, ResidentProfileComponent_div_0_Conditional_17_Conditional_55_Template, 6, 1, "span", 25)(56, ResidentProfileComponent_div_0_Conditional_17_Conditional_56_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p", 26)(58, "strong");
    \u0275\u0275text(59, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(60, ResidentProfileComponent_div_0_Conditional_17_Conditional_60_Template, 6, 1, "span", 25)(61, ResidentProfileComponent_div_0_Conditional_17_Conditional_61_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "p", 26)(63, "strong");
    \u0275\u0275text(64, "Purok:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("avatar-lg--has-photo", ctx_r1.resident.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.resident.profilePicture ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Resident ID: ", ctx_r1.resident.residentId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showQRCode ? "Hide" : "Show", " QR Code ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showQRCode && ctx_r1.qrCodeDataUrl ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editingField === "name" ? 12 : 13);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.birthdate || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.placeOfBirth || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resident.birthCertificateNumber || "Not Available");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.bloodType || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.gender);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.civilStatus || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.nationality || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.editingField === "contact" ? 50 : 51);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.editingField === "email" ? 55 : 56);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.editingField === "address" ? 60 : 61);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resident.purok);
  }
}
function ResidentProfileComponent_div_0_Conditional_18_Conditional_0_For_49_Template(rf, ctx) {
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 49);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r13.residentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r13.age);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r13.gender);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r13.relationship);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r13.birthdate || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r13.civilStatus || "N/A");
  }
}
function ResidentProfileComponent_div_0_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "h2", 39);
    \u0275\u0275text(3, "Household Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 40)(5, "div", 41)(6, "span", 42);
    \u0275\u0275text(7, "Household ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 41)(11, "span", 42);
    \u0275\u0275text(12, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 43);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 41)(16, "span", 42);
    \u0275\u0275text(17, "Purok:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 43);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 41)(21, "span", 42);
    \u0275\u0275text(22, "Total Members:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 43);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 44)(26, "div", 45)(27, "h3", 46);
    \u0275\u0275text(28, "Household Members");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 47)(30, "table", 48)(31, "thead")(32, "tr")(33, "th");
    \u0275\u0275text(34, "Resident ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Birthdate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "Civil Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "tbody");
    \u0275\u0275repeaterCreate(48, ResidentProfileComponent_div_0_Conditional_18_Conditional_0_For_49_Template, 16, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.household.householdId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.household.address);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.household.purok);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.household.members.length);
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r1.household.members);
  }
}
function ResidentProfileComponent_div_0_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 50);
    \u0275\u0275text(2, "No household information available for this resident.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Resident ID: ", ctx_r1.resident.residentId || "N/A", " ");
  }
}
function ResidentProfileComponent_div_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ResidentProfileComponent_div_0_Conditional_18_Conditional_0_Template, 50, 4)(1, ResidentProfileComponent_div_0_Conditional_18_Conditional_1_Template, 5, 1, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.household ? 0 : 1);
  }
}
function ResidentProfileComponent_div_0_Conditional_19_Conditional_3_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "a", 53);
    \u0275\u0275text(12, "View Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r14.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r14.purpose);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c0, r_r14.status === "Approved", r_r14.status === "Pending" || r_r14.status === "For Review"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r14.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r14.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.getRequestDetailUrl(r_r14.id));
  }
}
function ResidentProfileComponent_div_0_Conditional_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 48)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, ResidentProfileComponent_div_0_Conditional_19_Conditional_3_For_15_Template, 13, 9, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.residentRequests);
  }
}
function ResidentProfileComponent_div_0_Conditional_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1, "No certificate requests for this resident yet.");
    \u0275\u0275elementEnd();
  }
}
function ResidentProfileComponent_div_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h3", 46);
    \u0275\u0275text(2, "Requests History");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ResidentProfileComponent_div_0_Conditional_19_Conditional_3_Template, 16, 0, "table", 48)(4, ResidentProfileComponent_div_0_Conditional_19_Conditional_4_Template, 2, 0, "p", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.residentRequests.length > 0 ? 3 : 4);
  }
}
function ResidentProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h1", 5);
    \u0275\u0275text(3, "Resident Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "a", 7)(6, "span", 8);
    \u0275\u0275text(7, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9, "Back to Residents");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 10)(11, "button", 11);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "personal");
    });
    \u0275\u0275text(12, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 11);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "household");
    });
    \u0275\u0275text(14, "Household Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 11);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "requests");
    });
    \u0275\u0275text(16, "Requests History");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, ResidentProfileComponent_div_0_Conditional_17_Template, 66, 19, "div", 12);
    \u0275\u0275conditionalCreate(18, ResidentProfileComponent_div_0_Conditional_18_Template, 2, 1);
    \u0275\u0275conditionalCreate(19, ResidentProfileComponent_div_0_Conditional_19_Template, 5, 1, "div", 13);
    \u0275\u0275elementStart(20, "div", 14)(21, "button", 15);
    \u0275\u0275listener("click", function ResidentProfileComponent_div_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openGenerateCertificate());
    });
    \u0275\u0275text(22, "Generate Certificate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r1.residentsListUrl);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "personal");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "household");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "requests");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activeTab === "personal" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab === "household" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab === "requests" ? 19 : -1);
  }
}
function ResidentProfileComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "p", 60);
    \u0275\u0275text(2, "Certificate request created successfully and marked as Approved.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "button", 62);
    \u0275\u0275listener("click", function ResidentProfileComponent_Conditional_1_Conditional_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToCreatedRequest());
    });
    \u0275\u0275text(5, "View Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function ResidentProfileComponent_Conditional_1_Conditional_7_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeGenerateCertificate());
    });
    \u0275\u0275text(7, "Close");
    \u0275\u0275elementEnd()()();
  }
}
function ResidentProfileComponent_Conditional_1_Conditional_8_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r18 = ctx.$implicit;
    \u0275\u0275property("value", t_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r18);
  }
}
function ResidentProfileComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 64);
    \u0275\u0275listener("ngSubmit", function ResidentProfileComponent_Conditional_1_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitGenerateCertificate());
    });
    \u0275\u0275elementStart(1, "p", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66)(4, "label", 67);
    \u0275\u0275text(5, "Certificate Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentProfileComponent_Conditional_1_Conditional_8_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.certificateType, $event) || (ctx_r1.certificateType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(7, ResidentProfileComponent_Conditional_1_Conditional_8_For_8_Template, 2, 2, "option", 69, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 66)(10, "label", 70);
    \u0275\u0275text(11, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentProfileComponent_Conditional_1_Conditional_8_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.certificatePurpose, $event) || (ctx_r1.certificatePurpose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 61)(14, "button", 72);
    \u0275\u0275text(15, "Generate & Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 63);
    \u0275\u0275listener("click", function ResidentProfileComponent_Conditional_1_Conditional_8_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeGenerateCertificate());
    });
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Create a certificate request for ", ctx_r1.resident == null ? null : ctx_r1.resident.name, " (", ctx_r1.resident == null ? null : ctx_r1.resident.residentId, ").");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.certificateType);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.certificateTypes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.certificatePurpose);
  }
}
function ResidentProfileComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function ResidentProfileComponent_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeGenerateCertificate());
    });
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275listener("click", function ResidentProfileComponent_Conditional_1_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 56)(3, "h2", 57);
    \u0275\u0275text(4, "Generate Certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 58);
    \u0275\u0275listener("click", function ResidentProfileComponent_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeGenerateCertificate());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, ResidentProfileComponent_Conditional_1_Conditional_7_Template, 8, 0, "div", 59)(8, ResidentProfileComponent_Conditional_1_Conditional_8_Template, 18, 4, "form", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.generateSuccess ? 7 : 8);
  }
}
function ResidentProfileComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p");
    \u0275\u0275text(2, "Resident not found. ");
    \u0275\u0275elementStart(3, "a", 73);
    \u0275\u0275text(4, "Back to Residents");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.residentsListUrl);
  }
}
var CERTIFICATE_TYPES = ["Barangay Clearance", "Certificate of Residency", "Request Clearance"];
var ResidentProfileComponent = class _ResidentProfileComponent {
  constructor(route, router, data, qrCodeService, auth) {
    this.route = route;
    this.router = router;
    this.data = data;
    this.qrCodeService = qrCodeService;
    this.auth = auth;
    this.activeTab = "personal";
    this.qrCodeDataUrl = null;
    this.showQRCode = false;
    this.showGenerateCertificate = false;
    this.certificateType = "Barangay Clearance";
    this.certificatePurpose = "";
    this.generateSuccess = false;
    this.createdRequestId = null;
    this.certificateTypes = CERTIFICATE_TYPES;
    this.editingField = null;
    this.editValue = "";
    this.routeResidentId = null;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.routeResidentId = params.get("id");
      this.loadResidentFromData();
      this.cancelEdit();
    });
    this.residentsSub = this.data.residentsObservable.subscribe(() => {
      this.loadResidentFromData();
    });
  }
  ngOnDestroy() {
    this.residentsSub?.unsubscribe();
  }
  generateQRCode() {
    if (this.resident?.residentId) {
      try {
        this.qrCodeDataUrl = this.qrCodeService.generateResidentQRCode(this.resident.residentId);
      } catch (error) {
        this.qrCodeDataUrl = null;
      }
    }
  }
  toggleQRCode() {
    this.showQRCode = !this.showQRCode;
    if (this.showQRCode && !this.qrCodeDataUrl && this.resident?.residentId) {
      this.generateQRCode();
    }
  }
  downloadQRCode() {
    if (!this.qrCodeDataUrl)
      return;
    const link = document.createElement("a");
    link.href = this.qrCodeDataUrl;
    link.download = `resident-${this.resident?.residentId || "qr"}-code.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  loadResidentFromData() {
    const id = this.routeResidentId;
    if (id) {
      this.resident = this.data.getResidentById(id) || this.data.getResidentByResidentId(id);
      if (this.resident) {
        this.household = this.data.getHouseholdByResidentId(this.resident.residentId);
        this.generateQRCode();
      } else {
        this.household = void 0;
        this.qrCodeDataUrl = null;
      }
    } else {
      this.resident = void 0;
      this.household = void 0;
      this.qrCodeDataUrl = null;
    }
  }
  startEdit(field) {
    if (!this.resident)
      return;
    this.editingField = field;
    if (field === "name")
      this.editValue = this.resident.name;
    else if (field === "contact")
      this.editValue = this.resident.contact ?? "";
    else if (field === "email")
      this.editValue = this.resident.email ?? "";
    else
      this.editValue = this.resident.address ?? "";
  }
  saveEdit() {
    if (!this.resident || !this.editingField)
      return;
    const trimmed = this.editValue.trim();
    if (this.editingField === "name" && !trimmed)
      return;
    this.data.updateResident(this.resident.id, __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.editingField === "name" && { name: trimmed }), this.editingField === "contact" && { contact: trimmed || void 0 }), this.editingField === "email" && { email: trimmed || void 0 }), this.editingField === "address" && { address: trimmed || void 0 }));
    this.cancelEdit();
  }
  cancelEdit() {
    this.editingField = null;
    this.editValue = "";
  }
  openGenerateCertificate() {
    this.showGenerateCertificate = true;
    this.generateSuccess = false;
    this.createdRequestId = null;
    this.certificateType = "Barangay Clearance";
    this.certificatePurpose = "";
  }
  closeGenerateCertificate() {
    this.showGenerateCertificate = false;
    this.generateSuccess = false;
    this.createdRequestId = null;
  }
  submitGenerateCertificate() {
    if (!this.resident)
      return;
    const purpose = this.certificatePurpose.trim() || "Issued from resident profile";
    const id = this.nextRequestId();
    const date = this.formatDate(/* @__PURE__ */ new Date());
    const nowIso = (/* @__PURE__ */ new Date()).toISOString();
    const user = this.auth.currentUser;
    const request = {
      id,
      type: this.certificateType,
      purpose,
      status: "Approved",
      date,
      residentId: this.resident.residentId,
      approvedById: user?.id ?? null,
      approvedByName: user?.name ?? null,
      approvedAt: nowIso,
      rejectedById: null,
      rejectedByName: null,
      rejectedAt: null
    };
    this.data.addRequest(request);
    this.createdRequestId = id;
    this.generateSuccess = true;
  }
  /** Resolve residents list URL so "Back to Residents" works from both admin and staff. */
  get residentsListUrl() {
    const base = this.getBaseRoute();
    return `${base}/residents`;
  }
  /** Get the request detail URL for a given request ID, works from both admin and staff. */
  getRequestDetailUrl(requestId) {
    const base = this.getBaseRoute();
    return `${base}/requests/${requestId}`;
  }
  goToCreatedRequest() {
    let targetId = this.createdRequestId ?? void 0;
    if (!targetId && this.resident?.residentId) {
      const requestsForResident = this.data.getRequestsByResidentId(this.resident.residentId);
      if (requestsForResident.length > 0) {
        const sorted = [...requestsForResident].sort((a, b) => {
          const aNum = parseInt(a.id, 10);
          const bNum = parseInt(b.id, 10);
          if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
            return a.id.localeCompare(b.id);
          }
          return aNum - bNum;
        });
        targetId = sorted[sorted.length - 1].id;
      }
    }
    if (!targetId)
      return;
    this.closeGenerateCertificate();
    const base = this.getBaseRoute();
    const targetUrl = `${base}/requests/${targetId}`;
    this.router.navigateByUrl(targetUrl);
  }
  /**
   * Detect the correct base route segment based on the current URL.
   * Supports admin, staff, and resident layouts.
   */
  getBaseRoute() {
    if (this.router.url.startsWith("/admin"))
      return "/admin";
    if (this.router.url.startsWith("/resident"))
      return "/resident";
    return "/staff";
  }
  get residentRequests() {
    return this.resident?.residentId ? this.data.getRequestsByResidentId(this.resident.residentId) : [];
  }
  nextRequestId() {
    const ids = this.data.requests.map((r) => parseInt(r.id, 10)).filter((n) => !Number.isNaN(n));
    const max = ids.length ? Math.max(...ids) : 0;
    return String(max + 1);
  }
  formatDate(d) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
  static {
    this.\u0275fac = function ResidentProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResidentProfileComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(QrCodeService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResidentProfileComponent, selectors: [["app-resident-profile"]], decls: 3, vars: 3, consts: [["class", "resident-profile", 4, "ngIf"], [1, "modal-overlay", "generate-cert-overlay"], ["class", "card", 4, "ngIf"], [1, "resident-profile"], [1, "page-header"], [1, "page-title"], [1, "page-header__right"], [1, "back-button", 3, "routerLink"], [1, "back-button__icon"], [1, "back-button__text"], [1, "tabs"], ["type", "button", 3, "click"], [1, "profile-card", "card"], [1, "card"], [1, "generate-certificate-footer"], ["type", "button", 1, "btn", "btn--success", 3, "click"], [1, "profile-top"], [1, "avatar-lg"], ["alt", "", 1, "avatar-lg__img", 3, "src"], [1, "profile-info"], [1, "resident-id"], [1, "qr-code-section"], ["type", "button", 1, "btn", "btn--sm", "btn--outline", 3, "click"], [1, "qr-code-display"], [1, "resident-name"], [1, "edit-inline"], [1, "detail"], [1, "detail", "highlight"], [1, "certificate-ref"], ["alt", "Resident QR Code", 1, "qr-code-image", 3, "src"], [1, "qr-code-label"], ["type", "button", 1, "btn", "btn--sm", "btn--primary", 3, "click"], ["type", "text", 1, "form-control", "edit-inline__input", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], ["href", "#", 1, "edit-link", 3, "click"], ["type", "text", "placeholder", "Contact number", 1, "form-control", "edit-inline__input", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], ["type", "email", "placeholder", "Email address", 1, "form-control", "edit-inline__input", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], ["type", "text", "placeholder", "Address", 1, "form-control", "edit-inline__input", 3, "ngModelChange", "keydown.enter", "keydown.escape", "ngModel"], [1, "household-info", "card"], [1, "household-header"], [1, "household-title"], [1, "household-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "household-members", "card"], [1, "section-header"], [1, "section-title"], [1, "table-wrap"], [1, "table"], [1, "badge", "badge--info"], [1, "muted"], [1, "muted", 2, "font-size", "0.875rem", "margin-top", "0.5rem"], [1, "badge", 3, "ngClass"], [1, "btn", "btn--sm", "btn--primary", 3, "routerLink"], [1, "modal-overlay", "generate-cert-overlay", 3, "click"], [1, "modal", "card", "generate-cert-modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "modal-close", 3, "click"], [1, "modal-body"], [1, "success-msg"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["type", "button", 1, "btn", "btn--outline", 3, "click"], [1, "modal-body", 3, "ngSubmit"], [1, "muted", "modal-desc"], [1, "form-group"], ["for", "cert-type"], ["id", "cert-type", "name", "certificateType", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["for", "cert-purpose"], ["id", "cert-purpose", "name", "certificatePurpose", "rows", "3", "placeholder", "e.g. For employment purposes", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn--success"], [3, "routerLink"]], template: function ResidentProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ResidentProfileComponent_div_0_Template, 23, 10, "div", 0);
        \u0275\u0275conditionalCreate(1, ResidentProfileComponent_Conditional_1_Template, 9, 1, "div", 1);
        \u0275\u0275template(2, ResidentProfileComponent_div_2_Template, 5, 1, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.resident);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showGenerateCertificate ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.resident);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ['\n\n.resident-profile[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 1rem;\n}\n.page-header__right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding-right: 200px;\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    position: static;\n  }\n  .page-header__right[_ngcontent-%COMP%] {\n    width: 100%;\n    position: static;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n    padding-right: 0;\n  }\n}\n.back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  color: var(--color-text);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 0.9375rem;\n  border-radius: var(--radius);\n  transition: all 0.2s ease;\n  width: fit-content;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-card);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(-2px);\n  box-shadow: var(--shadow);\n}\n.back-button[_ngcontent-%COMP%]:active {\n  transform: translateX(-1px);\n}\n.back-button__icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1;\n  transition: transform 0.2s ease;\n}\n.back-button[_ngcontent-%COMP%]:hover   .back-button__icon[_ngcontent-%COMP%] {\n  transform: translateX(-2px);\n}\n.back-button__text[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n@media (max-width: 640px) {\n  .back-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  margin-bottom: 1rem;\n  padding: 8px;\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 24px;\n  border: none;\n  background: transparent;\n  border-radius: var(--radius);\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--color-text);\n}\n.tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px color-mix(in srgb, var(--color-primary) 40%, transparent);\n}\n@media (max-width: 640px) {\n  .tabs[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 6px;\n    gap: 0.5rem;\n  }\n  .tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 16px;\n    font-size: 0.875rem;\n    white-space: normal;\n    text-align: center;\n  }\n}\n.profile-top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.avatar-lg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: var(--color-border);\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-lg.avatar-lg--has-photo[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.avatar-lg__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 28%;\n  display: block;\n}\n.profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.profile-info[_ngcontent-%COMP%]   .resident-id[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  margin: 0 0 4px;\n}\n.profile-info[_ngcontent-%COMP%]   .resident-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin: 0 0 0.75rem;\n}\n.profile-info[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 0.9375rem;\n}\n.profile-info[_ngcontent-%COMP%]   .detail.highlight[_ngcontent-%COMP%] {\n  background: var(--color-bg-secondary);\n  color: var(--color-text);\n  padding: 0.75rem 1rem;\n  border-radius: 6px;\n  border-left: 3px solid var(--color-primary);\n  margin: 1rem 0;\n}\n.profile-info[_ngcontent-%COMP%]   .detail.highlight[_ngcontent-%COMP%]   .certificate-ref[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-weight: 600;\n  color: var(--color-primary);\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n}\n.profile-info[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  padding: 1rem 0;\n  border-top: 1px solid var(--color-border);\n}\n.profile-info[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%]   .qr-code-display[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n.profile-info[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%]   .qr-code-display[_ngcontent-%COMP%]   .qr-code-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: 4px solid var(--color-bg-card);\n  border-radius: var(--radius);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  background: var(--color-bg-card);\n  padding: 8px;\n}\n.profile-info[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%]   .qr-code-display[_ngcontent-%COMP%]   .qr-code-label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n  max-width: 300px;\n}\n.edit-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin-left: 8px;\n}\n.edit-inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-left: 4px;\n}\n.edit-inline[_ngcontent-%COMP%]   .edit-inline__input[_ngcontent-%COMP%] {\n  min-width: 180px;\n  padding: 6px 10px;\n  font-size: 0.9375rem;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  margin: 0;\n}\n.household-info[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.household-info[_ngcontent-%COMP%]   .household-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.household-info[_ngcontent-%COMP%]   .household-header[_ngcontent-%COMP%]   .household-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n.household-info[_ngcontent-%COMP%]   .household-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.household-members[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.household-members[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-members[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.generate-cert-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top,\n      rgba(15, 23, 42, 0.55),\n      rgba(15, 23, 42, 0.9));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 1rem;\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n.generate-cert-modal[_ngcontent-%COMP%] {\n  max-width: 460px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: auto;\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.35);\n  border: 1px solid color-mix(in srgb, var(--color-border) 70%, transparent);\n  transform-origin: center;\n  animation: _ngcontent-%COMP%_modal-scale-in 0.16s ease-out;\n}\n.generate-cert-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.18);\n  background: var(--color-primary);\n}\n.generate-cert-modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #f9fafb;\n}\n.generate-cert-modal[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  line-height: 1;\n  color: #e5e7eb;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: var(--radius);\n}\n.generate-cert-modal[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background: rgba(15, 23, 42, 0.22);\n}\n.generate-cert-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem 1.5rem;\n}\n.generate-cert-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.generate-cert-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: var(--color-text);\n  margin-bottom: 0.4rem;\n}\n.generate-cert-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.6rem;\n  border-color: color-mix(in srgb, var(--color-border) 80%, transparent);\n  transition:\n    box-shadow 0.15s ease,\n    border-color 0.15s ease,\n    background-color 0.15s ease;\n}\n.generate-cert-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: color-mix(in srgb, var(--color-primary) 75%, var(--color-border));\n  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-primary) 55%, transparent);\n  background-color: color-mix(in srgb, var(--color-bg) 90%, var(--color-primary) 4%);\n}\n.generate-cert-modal[_ngcontent-%COMP%]   .modal-desc[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.success-msg[_ngcontent-%COMP%] {\n  color: var(--color-success, #22c55e);\n  font-weight: 500;\n  margin: 0 0 1rem;\n}\n.generate-certificate-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 1rem;\n  margin-top: 2rem;\n  border-top: 1px solid var(--color-border);\n}\n@keyframes _ngcontent-%COMP%_modal-scale-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 480px) {\n  .modal[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column-reverse;\n  }\n  .modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=resident-profile.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResidentProfileComponent, [{
    type: Component,
    args: [{ selector: "app-resident-profile", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="resident-profile" *ngIf="resident">\r
  <div class="page-header">\r
    <h1 class="page-title">Resident Profile</h1>\r
    <div class="page-header__right">\r
      <a [routerLink]="residentsListUrl" class="back-button">\r
        <span class="back-button__icon">\u2190</span>\r
        <span class="back-button__text">Back to Residents</span>\r
      </a>\r
    </div>\r
  </div>\r
\r
  <div class="tabs">\r
    <button type="button" [class.active]="activeTab === 'personal'" (click)="activeTab = 'personal'">Personal Information</button>\r
    <button type="button" [class.active]="activeTab === 'household'" (click)="activeTab = 'household'">Household Information</button>\r
    <button type="button" [class.active]="activeTab === 'requests'" (click)="activeTab = 'requests'">Requests History</button>\r
  </div>\r
\r
  @if (activeTab === 'personal') {\r
    <div class="profile-card card">\r
      <div class="profile-top">\r
        <div class="avatar-lg" [class.avatar-lg--has-photo]="resident.profilePicture">\r
          @if (resident.profilePicture) {\r
            <img [src]="resident.profilePicture" alt="" class="avatar-lg__img" />\r
          }\r
        </div>\r
        <div class="profile-info">\r
          <p class="resident-id">Resident ID: {{ resident.residentId }}</p>\r
          <div class="qr-code-section">\r
            <button type="button" class="btn btn--sm btn--outline" (click)="toggleQRCode()">\r
              {{ showQRCode ? 'Hide' : 'Show' }} QR Code\r
            </button>\r
            @if (showQRCode && qrCodeDataUrl) {\r
              <div class="qr-code-display">\r
                <img [src]="qrCodeDataUrl" alt="Resident QR Code" class="qr-code-image" />\r
                <p class="qr-code-label">Scan this QR code to quickly access this resident's profile</p>\r
                <button type="button" class="btn btn--sm btn--primary" (click)="downloadQRCode()">\r
                  Download QR Code\r
                </button>\r
              </div>\r
            }\r
          </div>\r
          <h2 class="resident-name">\r
            @if (editingField === 'name') {\r
              <span class="edit-inline">\r
                <input type="text" class="form-control edit-inline__input" [(ngModel)]="editValue" (keydown.enter)="saveEdit()" (keydown.escape)="cancelEdit()" />\r
                <button type="button" class="btn btn--sm btn--primary" (click)="saveEdit()">Save</button>\r
                <button type="button" class="btn btn--sm btn--outline" (click)="cancelEdit()">Cancel</button>\r
              </span>\r
            } @else {\r
              {{ resident.name }}\r
              <a href="#" class="edit-link" (click)="startEdit('name'); $event.preventDefault()">Edit Name</a>\r
            }\r
          </h2>\r
          <p class="detail"><strong>Full Name:</strong> {{ resident.name }}</p>\r
          <p class="detail"><strong>Birthday:</strong> {{ resident.birthdate || 'N/A' }}</p>\r
          <p class="detail"><strong>Place of Birth:</strong> {{ resident.placeOfBirth || 'N/A' }}</p>\r
          <p class="detail highlight">\r
            <strong>Birth Certificate Number:</strong> \r
            <span class="certificate-ref">{{ resident.birthCertificateNumber || 'Not Available' }}</span>\r
          </p>\r
          <p class="detail"><strong>Blood Type:</strong> {{ resident.bloodType || 'N/A' }}</p>\r
          <p class="detail"><strong>Gender:</strong> {{ resident.gender }}</p>\r
          <p class="detail"><strong>Civil Status:</strong> {{ resident.civilStatus || 'N/A' }}</p>\r
          <p class="detail"><strong>Nationality:</strong> {{ resident.nationality || 'N/A' }}</p>\r
          <p class="detail">\r
            <strong>Contact Number:</strong>\r
            @if (editingField === 'contact') {\r
              <span class="edit-inline">\r
                <input type="text" class="form-control edit-inline__input" [(ngModel)]="editValue" (keydown.enter)="saveEdit()" (keydown.escape)="cancelEdit()" placeholder="Contact number" />\r
                <button type="button" class="btn btn--sm btn--primary" (click)="saveEdit()">Save</button>\r
                <button type="button" class="btn btn--sm btn--outline" (click)="cancelEdit()">Cancel</button>\r
              </span>\r
            } @else {\r
              {{ resident.contact || 'N/A' }}\r
              <a href="#" class="edit-link" (click)="startEdit('contact'); $event.preventDefault()">Edit</a>\r
            }\r
          </p>\r
          <p class="detail">\r
            <strong>Email Address:</strong>\r
            @if (editingField === 'email') {\r
              <span class="edit-inline">\r
                <input type="email" class="form-control edit-inline__input" [(ngModel)]="editValue" (keydown.enter)="saveEdit()" (keydown.escape)="cancelEdit()" placeholder="Email address" />\r
                <button type="button" class="btn btn--sm btn--primary" (click)="saveEdit()">Save</button>\r
                <button type="button" class="btn btn--sm btn--outline" (click)="cancelEdit()">Cancel</button>\r
              </span>\r
            } @else {\r
              {{ resident.email || 'N/A' }}\r
              <a href="#" class="edit-link" (click)="startEdit('email'); $event.preventDefault()">Edit</a>\r
            }\r
          </p>\r
          <p class="detail">\r
            <strong>Address:</strong>\r
            @if (editingField === 'address') {\r
              <span class="edit-inline">\r
                <input type="text" class="form-control edit-inline__input" [(ngModel)]="editValue" (keydown.enter)="saveEdit()" (keydown.escape)="cancelEdit()" placeholder="Address" />\r
                <button type="button" class="btn btn--sm btn--primary" (click)="saveEdit()">Save</button>\r
                <button type="button" class="btn btn--sm btn--outline" (click)="cancelEdit()">Cancel</button>\r
              </span>\r
            } @else {\r
              {{ resident.address || 'N/A' }}\r
              <a href="#" class="edit-link" (click)="startEdit('address'); $event.preventDefault()">Edit Address</a>\r
            }\r
          </p>\r
          <p class="detail"><strong>Purok:</strong> {{ resident.purok }}</p>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
  @if (activeTab === 'household') {\r
    @if (household) {\r
      <div class="household-info card">\r
        <div class="household-header">\r
          <h2 class="household-title">Household Information</h2>\r
        </div>\r
        <div class="household-details">\r
          <div class="detail-row">\r
            <span class="detail-label">Household ID:</span>\r
            <span class="detail-value">{{ household.householdId }}</span>\r
          </div>\r
          <div class="detail-row">\r
            <span class="detail-label">Address:</span>\r
            <span class="detail-value">{{ household.address }}</span>\r
          </div>\r
          <div class="detail-row">\r
            <span class="detail-label">Purok:</span>\r
            <span class="detail-value">{{ household.purok }}</span>\r
          </div>\r
          <div class="detail-row">\r
            <span class="detail-label">Total Members:</span>\r
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
          <table class="table">\r
            <thead>\r
              <tr>\r
                <th>Resident ID</th>\r
                <th>Name</th>\r
                <th>Age</th>\r
                <th>Gender</th>\r
                <th>Relationship</th>\r
                <th>Birthdate</th>\r
                <th>Civil Status</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (member of household.members; track member.residentId) {\r
                <tr>\r
                  <td>{{ member.residentId }}</td>\r
                  <td>{{ member.name }}</td>\r
                  <td>{{ member.age }}</td>\r
                  <td>{{ member.gender }}</td>\r
                  <td>\r
                    <span class="badge badge--info">{{ member.relationship }}</span>\r
                  </td>\r
                  <td>{{ member.birthdate || 'N/A' }}</td>\r
                  <td>{{ member.civilStatus || 'N/A' }}</td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    } @else {\r
      <div class="card">\r
        <p class="muted">No household information available for this resident.</p>\r
        <p class="muted" style="font-size: 0.875rem; margin-top: 0.5rem;">\r
          Resident ID: {{ resident.residentId || 'N/A' }}\r
        </p>\r
      </div>\r
    }\r
  }\r
  @if (activeTab === 'requests') {\r
    <div class="card">\r
      <h3 class="section-title">Requests History</h3>\r
      @if (residentRequests.length > 0) {\r
        <table class="table">\r
          <thead>\r
            <tr>\r
              <th>Type</th>\r
              <th>Purpose</th>\r
              <th>Status</th>\r
              <th>Date</th>\r
              <th>Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (r of residentRequests; track r.id) {\r
              <tr>\r
                <td>{{ r.type }}</td>\r
                <td>{{ r.purpose }}</td>\r
                <td>\r
                  <span class="badge" [ngClass]="{\r
                    'badge--success': r.status === 'Approved',\r
                    'badge--warning': r.status === 'Pending' || r.status === 'For Review'\r
                  }">{{ r.status }}</span>\r
                </td>\r
                <td>{{ r.date }}</td>\r
                <td>\r
                  <a [routerLink]="getRequestDetailUrl(r.id)" class="btn btn--sm btn--primary">View Details</a>\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      } @else {\r
        <p class="muted">No certificate requests for this resident yet.</p>\r
      }\r
    </div>\r
  }\r
\r
  <div class="generate-certificate-footer">\r
    <button type="button" class="btn btn--success" (click)="openGenerateCertificate()">Generate Certificate</button>\r
  </div>\r
</div>\r
\r
@if (showGenerateCertificate) {\r
  <div class="modal-overlay generate-cert-overlay" (click)="closeGenerateCertificate()">\r
    <div class="modal card generate-cert-modal" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h2 class="modal-title">Generate Certificate</h2>\r
        <button type="button" class="modal-close" (click)="closeGenerateCertificate()" aria-label="Close">&times;</button>\r
      </div>\r
      @if (generateSuccess) {\r
        <div class="modal-body">\r
          <p class="success-msg">Certificate request created successfully and marked as Approved.</p>\r
          <div class="modal-actions">\r
            <button type="button" class="btn btn--primary" (click)="goToCreatedRequest()">View Request</button>\r
            <button type="button" class="btn btn--outline" (click)="closeGenerateCertificate()">Close</button>\r
          </div>\r
        </div>\r
      } @else {\r
        <form class="modal-body" (ngSubmit)="submitGenerateCertificate()">\r
          <p class="muted modal-desc">Create a certificate request for {{ resident?.name }} ({{ resident?.residentId }}).</p>\r
          <div class="form-group">\r
            <label for="cert-type">Certificate Type</label>\r
            <select id="cert-type" class="form-control" [(ngModel)]="certificateType" name="certificateType">\r
              @for (t of certificateTypes; track t) {\r
                <option [value]="t">{{ t }}</option>\r
              }\r
            </select>\r
          </div>\r
          <div class="form-group">\r
            <label for="cert-purpose">Purpose</label>\r
            <textarea\r
              id="cert-purpose"\r
              class="form-control"\r
              [(ngModel)]="certificatePurpose"\r
              name="certificatePurpose"\r
              rows="3"\r
              placeholder="e.g. For employment purposes"\r
            ></textarea>\r
          </div>\r
          <div class="modal-actions">\r
            <button type="submit" class="btn btn--success">Generate & Approve</button>\r
            <button type="button" class="btn btn--outline" (click)="closeGenerateCertificate()">Cancel</button>\r
          </div>\r
        </form>\r
      }\r
    </div>\r
  </div>\r
}\r
\r
<div *ngIf="!resident" class="card">\r
  <p>Resident not found. <a [routerLink]="residentsListUrl">Back to Residents</a></p>\r
</div>\r
`, styles: ['/* src/app/pages/resident-profile/resident-profile.component.scss */\n.resident-profile {\n  width: 100%;\n  position: relative;\n}\n.page-header {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 1rem;\n}\n.page-header__right {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.page-header .page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding-right: 200px;\n}\n@media (max-width: 640px) {\n  .page-header {\n    flex-direction: column;\n    align-items: stretch;\n    position: static;\n  }\n  .page-header__right {\n    width: 100%;\n    position: static;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .page-header .page-title {\n    margin-bottom: 0.75rem;\n    padding-right: 0;\n  }\n}\n.back-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  color: var(--color-text);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 0.9375rem;\n  border-radius: var(--radius);\n  transition: all 0.2s ease;\n  width: fit-content;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.back-button:hover {\n  background: var(--color-bg-card);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(-2px);\n  box-shadow: var(--shadow);\n}\n.back-button:active {\n  transform: translateX(-1px);\n}\n.back-button__icon {\n  font-size: 1.125rem;\n  line-height: 1;\n  transition: transform 0.2s ease;\n}\n.back-button:hover .back-button__icon {\n  transform: translateX(-2px);\n}\n.back-button__text {\n  line-height: 1.5;\n}\n@media (max-width: 640px) {\n  .back-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  margin-bottom: 1rem;\n  padding: 8px;\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n.tabs button {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 24px;\n  border: none;\n  background: transparent;\n  border-radius: var(--radius);\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tabs button:hover:not(.active) {\n  color: var(--color-text);\n}\n.tabs button.active {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px color-mix(in srgb, var(--color-primary) 40%, transparent);\n}\n@media (max-width: 640px) {\n  .tabs {\n    flex-direction: column;\n    padding: 6px;\n    gap: 0.5rem;\n  }\n  .tabs button {\n    width: 100%;\n    padding: 10px 16px;\n    font-size: 0.875rem;\n    white-space: normal;\n    text-align: center;\n  }\n}\n.profile-top {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.avatar-lg {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: var(--color-border);\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-lg.avatar-lg--has-photo {\n  background: transparent;\n}\n.avatar-lg__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 28%;\n  display: block;\n}\n.profile-info {\n  flex: 1;\n  min-width: 200px;\n}\n.profile-info .resident-id {\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n  margin: 0 0 4px;\n}\n.profile-info .resident-name {\n  font-size: 1.25rem;\n  margin: 0 0 0.75rem;\n}\n.profile-info .detail {\n  margin: 0.5rem 0;\n  font-size: 0.9375rem;\n}\n.profile-info .detail.highlight {\n  background: var(--color-bg-secondary);\n  color: var(--color-text);\n  padding: 0.75rem 1rem;\n  border-radius: 6px;\n  border-left: 3px solid var(--color-primary);\n  margin: 1rem 0;\n}\n.profile-info .detail.highlight .certificate-ref {\n  font-family: "Courier New", monospace;\n  font-weight: 600;\n  color: var(--color-primary);\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n}\n.profile-info .qr-code-section {\n  margin: 1rem 0;\n  padding: 1rem 0;\n  border-top: 1px solid var(--color-border);\n}\n.profile-info .qr-code-section .qr-code-display {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n}\n.profile-info .qr-code-section .qr-code-display .qr-code-image {\n  width: 200px;\n  height: 200px;\n  border: 4px solid var(--color-bg-card);\n  border-radius: var(--radius);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  background: var(--color-bg-card);\n  padding: 8px;\n}\n.profile-info .qr-code-section .qr-code-display .qr-code-label {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n  max-width: 300px;\n}\n.edit-link {\n  font-size: 0.875rem;\n  margin-left: 8px;\n}\n.edit-inline {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-left: 4px;\n}\n.edit-inline .edit-inline__input {\n  min-width: 180px;\n  padding: 6px 10px;\n  font-size: 0.9375rem;\n}\n.muted {\n  color: var(--color-text-muted);\n  margin: 0;\n}\n.household-info {\n  margin-bottom: 1rem;\n}\n.household-info .household-header {\n  margin-bottom: 1rem;\n}\n.household-info .household-header .household-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-info .household-details {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.household-info .household-details .detail-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.household-info .household-details .detail-row .detail-label {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n.household-info .household-details .detail-row .detail-value {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.household-members .section-header {\n  margin-bottom: 1rem;\n}\n.household-members .section-header .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n.household-members .table-wrap {\n  overflow-x: auto;\n}\n.generate-cert-overlay {\n  position: fixed;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top,\n      rgba(15, 23, 42, 0.55),\n      rgba(15, 23, 42, 0.9));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  padding: 1rem;\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n.generate-cert-modal {\n  max-width: 460px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: auto;\n  background: var(--color-bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.35);\n  border: 1px solid color-mix(in srgb, var(--color-border) 70%, transparent);\n  transform-origin: center;\n  animation: modal-scale-in 0.16s ease-out;\n}\n.generate-cert-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.18);\n  background: var(--color-primary);\n}\n.generate-cert-modal .modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #f9fafb;\n}\n.generate-cert-modal .modal-close {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  line-height: 1;\n  color: #e5e7eb;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: var(--radius);\n}\n.generate-cert-modal .modal-close:hover {\n  color: #ffffff;\n  background: rgba(15, 23, 42, 0.22);\n}\n.generate-cert-modal .modal-body {\n  padding: 1.25rem 1.5rem 1.5rem;\n}\n.generate-cert-modal .modal-body .form-group {\n  margin-bottom: 1rem;\n}\n.generate-cert-modal .modal-body .form-group label {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: var(--color-text);\n  margin-bottom: 0.4rem;\n}\n.generate-cert-modal .modal-body .form-group .form-control {\n  border-radius: 0.6rem;\n  border-color: color-mix(in srgb, var(--color-border) 80%, transparent);\n  transition:\n    box-shadow 0.15s ease,\n    border-color 0.15s ease,\n    background-color 0.15s ease;\n}\n.generate-cert-modal .modal-body .form-group .form-control:focus {\n  border-color: color-mix(in srgb, var(--color-primary) 75%, var(--color-border));\n  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-primary) 55%, transparent);\n  background-color: color-mix(in srgb, var(--color-bg) 90%, var(--color-primary) 4%);\n}\n.generate-cert-modal .modal-desc {\n  margin: 0 0 1rem;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n}\n.modal-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.success-msg {\n  color: var(--color-success, #22c55e);\n  font-weight: 500;\n  margin: 0 0 1rem;\n}\n.generate-certificate-footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 1rem;\n  margin-top: 2rem;\n  border-top: 1px solid var(--color-border);\n}\n@keyframes modal-scale-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 480px) {\n  .modal {\n    max-width: 100%;\n  }\n  .modal-actions {\n    width: 100%;\n    flex-direction: column-reverse;\n  }\n  .modal-actions .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=resident-profile.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DataService }, { type: QrCodeService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResidentProfileComponent, { className: "ResidentProfileComponent", filePath: "src/app/pages/resident-profile/resident-profile.component.ts", lineNumber: 19 });
})();
export {
  ResidentProfileComponent
};
//# sourceMappingURL=chunk-4AJLQNFL.js.map
