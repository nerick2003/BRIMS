import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-PCIERS7P.js";
import {
  AuthService
} from "./chunk-2RJNPIJT.js";
import {
  CommonModule,
  Component,
  NgIf,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TUEAJAVR.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/pages/settings/settings.component.ts
function SettingsComponent_div_14_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "\u2713 Settings saved successfully!");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "Barangay Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "Update your barangay's general information and contact details.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12)(8, "label");
    \u0275\u0275text(9, "Barangay Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.barangaySettings.name, $event) || (ctx_r1.barangaySettings.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 12)(12, "label");
    \u0275\u0275text(13, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.barangaySettings.province, $event) || (ctx_r1.barangaySettings.province = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14)(16, "label");
    \u0275\u0275text(17, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.barangaySettings.address, $event) || (ctx_r1.barangaySettings.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12)(20, "label");
    \u0275\u0275text(21, "Contact Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.barangaySettings.contact, $event) || (ctx_r1.barangaySettings.contact = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12)(24, "label");
    \u0275\u0275text(25, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.barangaySettings.email, $event) || (ctx_r1.barangaySettings.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 12)(28, "label");
    \u0275\u0275text(29, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_14_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.barangaySettings.website, $event) || (ctx_r1.barangaySettings.website = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 18);
    \u0275\u0275template(32, SettingsComponent_div_14_span_32_Template, 2, 0, "span", 19);
    \u0275\u0275element(33, "span", 20);
    \u0275\u0275elementStart(34, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_div_14_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveGeneralSettings());
    });
    \u0275\u0275text(35, " Save Changes ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.barangaySettings.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.barangaySettings.province);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.barangaySettings.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.barangaySettings.contact);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.barangaySettings.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.barangaySettings.website);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.saved);
  }
}
function SettingsComponent_div_15_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.displayPictureUrl, \u0275\u0275sanitizeUrl);
  }
}
function SettingsComponent_div_15_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function SettingsComponent_div_15_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeProfilePhoto());
    });
    \u0275\u0275text(1, "Remove");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_15_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function SettingsComponent_div_15_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveProfilePicture());
    });
    \u0275\u0275text(1, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 36);
    \u0275\u0275listener("click", function SettingsComponent_div_15_Conditional_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelPendingPhoto());
    });
    \u0275\u0275text(3, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_15_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function SettingsComponent_div_15_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "\u2713 Account updated successfully!");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "Account Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "Update your account details, profile picture, and change your password.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23)(7, "div", 24)(8, "div", 25);
    \u0275\u0275conditionalCreate(9, SettingsComponent_div_15_Conditional_9_Template, 1, 1, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 27)(11, "input", 28, 0);
    \u0275\u0275listener("change", function SettingsComponent_div_15_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onProfilePhotoSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 29);
    \u0275\u0275listener("click", function SettingsComponent_div_15_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const profilePhotoInput_r4 = \u0275\u0275reference(12);
      return \u0275\u0275resetView(profilePhotoInput_r4.click());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, SettingsComponent_div_15_Conditional_15_Template, 2, 0, "button", 30);
    \u0275\u0275conditionalCreate(16, SettingsComponent_div_15_Conditional_16_Template, 4, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "label");
    \u0275\u0275text(20, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_15_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountSettings.name, $event) || (ctx_r1.accountSettings.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12)(23, "label");
    \u0275\u0275text(24, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_15_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountSettings.email, $event) || (ctx_r1.accountSettings.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(26, "div", 31);
    \u0275\u0275elementStart(27, "h3");
    \u0275\u0275text(28, "Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 11)(30, "div", 12)(31, "label");
    \u0275\u0275text(32, "Current Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_15_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountSettings.currentPassword, $event) || (ctx_r1.accountSettings.currentPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 12)(35, "label");
    \u0275\u0275text(36, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_15_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountSettings.newPassword, $event) || (ctx_r1.accountSettings.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 12)(39, "label");
    \u0275\u0275text(40, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_15_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountSettings.confirmPassword, $event) || (ctx_r1.accountSettings.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 18);
    \u0275\u0275template(43, SettingsComponent_div_15_span_43_Template, 2, 1, "span", 35)(44, SettingsComponent_div_15_span_44_Template, 2, 0, "span", 19);
    \u0275\u0275element(45, "span", 20);
    \u0275\u0275elementStart(46, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_div_15_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveAccountSettings());
    });
    \u0275\u0275text(47, " Save Changes ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("avatar-lg--has-photo", ctx_r1.displayPictureUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.displayPictureUrl ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayPictureUrl ? "Change" : "Add", " photo ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.displayPictureUrl && !ctx_r1.hasPendingChanges ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasPendingChanges ? 16 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.accountSettings.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.accountSettings.email);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.accountSettings.currentPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.accountSettings.newPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.accountSettings.confirmPassword);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saved && !ctx_r1.error);
  }
}
function SettingsComponent_div_16_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "\u2713 Settings saved successfully!");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "System Preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "Configure system-wide settings and preferences.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 39)(7, "h3");
    \u0275\u0275text(8, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 40)(11, "label", 41)(12, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_16_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.systemSettings.enableNotifications, $event) || (ctx_r1.systemSettings.enableNotifications = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Enable Notifications");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 40)(16, "label", 41)(17, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_16_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.systemSettings.emailNotifications, $event) || (ctx_r1.systemSettings.emailNotifications = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Email Notifications");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 40)(21, "label", 41)(22, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_16_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.systemSettings.smsNotifications, $event) || (ctx_r1.systemSettings.smsNotifications = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "SMS Notifications");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(25, "div", 31);
    \u0275\u0275elementStart(26, "div", 39)(27, "h3");
    \u0275\u0275text(28, "Data Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 11)(30, "div", 40)(31, "label", 41)(32, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_16_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.systemSettings.autoBackup, $event) || (ctx_r1.systemSettings.autoBackup = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "Automatic Backup");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 12)(36, "label");
    \u0275\u0275text(37, "Backup Frequency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "select", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_16_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.systemSettings.backupFrequency, $event) || (ctx_r1.systemSettings.backupFrequency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(39, "option", 45);
    \u0275\u0275text(40, "Daily");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 46);
    \u0275\u0275text(42, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 47);
    \u0275\u0275text(44, "Monthly");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 12)(46, "label");
    \u0275\u0275text(47, "Data Retention (days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_16_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.systemSettings.dataRetention, $event) || (ctx_r1.systemSettings.dataRetention = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 12)(50, "label");
    \u0275\u0275text(51, "Session Timeout (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_16_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.systemSettings.sessionTimeout, $event) || (ctx_r1.systemSettings.sessionTimeout = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 18);
    \u0275\u0275template(54, SettingsComponent_div_16_span_54_Template, 2, 0, "span", 19);
    \u0275\u0275element(55, "span", 20);
    \u0275\u0275elementStart(56, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_div_16_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveSystemSettings());
    });
    \u0275\u0275text(57, " Save Changes ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.systemSettings.enableNotifications);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.systemSettings.emailNotifications);
    \u0275\u0275property("disabled", !ctx_r1.systemSettings.enableNotifications);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.systemSettings.smsNotifications);
    \u0275\u0275property("disabled", !ctx_r1.systemSettings.enableNotifications);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.systemSettings.autoBackup);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.systemSettings.backupFrequency);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.systemSettings.dataRetention);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.systemSettings.sessionTimeout);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.saved);
  }
}
function SettingsComponent_div_17_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "\u2713 Settings saved successfully!");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "Security Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "Manage security features and access controls.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 39)(7, "h3");
    \u0275\u0275text(8, "Authentication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 40)(11, "label", 41)(12, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_17_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.securitySettings.twoFactorAuth, $event) || (ctx_r1.securitySettings.twoFactorAuth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Enable Two-Factor Authentication");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 40)(16, "label", 41)(17, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_17_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.securitySettings.requireStrongPassword, $event) || (ctx_r1.securitySettings.requireStrongPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Require Strong Passwords");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(20, "div", 31);
    \u0275\u0275elementStart(21, "div", 39)(22, "h3");
    \u0275\u0275text(23, "Login Protection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11)(25, "div", 12)(26, "label");
    \u0275\u0275text(27, "Maximum Login Attempts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_17_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.securitySettings.loginAttempts, $event) || (ctx_r1.securitySettings.loginAttempts = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 12)(30, "label");
    \u0275\u0275text(31, "Account Lockout Duration (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_17_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.securitySettings.lockoutDuration, $event) || (ctx_r1.securitySettings.lockoutDuration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(33, "div", 31);
    \u0275\u0275elementStart(34, "div", 39)(35, "h3");
    \u0275\u0275text(36, "Audit & Logging");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 11)(38, "div", 40)(39, "label", 41)(40, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_17_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.securitySettings.auditLogging, $event) || (ctx_r1.securitySettings.auditLogging = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Enable Audit Logging");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "div", 18);
    \u0275\u0275template(44, SettingsComponent_div_17_span_44_Template, 2, 0, "span", 19);
    \u0275\u0275element(45, "span", 20);
    \u0275\u0275elementStart(46, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_div_17_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveSecuritySettings());
    });
    \u0275\u0275text(47, " Save Changes ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.securitySettings.twoFactorAuth);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.securitySettings.requireStrongPassword);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.securitySettings.loginAttempts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.securitySettings.lockoutDuration);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.securitySettings.auditLogging);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.saved);
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor(auth) {
    this.auth = auth;
    this.activeTab = "general";
    this.saved = false;
    this.error = "";
    this.pendingProfilePicture = null;
    this.barangaySettings = {
      name: "Municipality of Villanueva",
      province: "Province of Misamis Oriental",
      address: "Purok 2, Barangay Name, City Name",
      contact: "+63 917 123 4557",
      email: "barangay@villanueva.gov.ph",
      website: "www.villanueva.gov.ph"
    };
    this.accountSettings = {
      name: this.auth.currentUser?.name || "",
      email: this.auth.currentUser?.email || "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
    this.systemSettings = {
      enableNotifications: true,
      emailNotifications: true,
      smsNotifications: false,
      autoBackup: true,
      backupFrequency: "daily",
      sessionTimeout: 30,
      dataRetention: 365
    };
    this.securitySettings = {
      twoFactorAuth: false,
      requireStrongPassword: true,
      loginAttempts: 5,
      lockoutDuration: 15,
      auditLogging: true
    };
  }
  /** Current saved profile picture for the logged-in user. */
  get profilePictureUrl() {
    const u = this.auth.currentUser;
    return u ? this.auth.getProfilePicture(u.id) : null;
  }
  /** Preview to show in avatar: pending if set, otherwise saved. */
  get displayPictureUrl() {
    return this.pendingProfilePicture ?? this.profilePictureUrl;
  }
  get hasPendingChanges() {
    return this.pendingProfilePicture !== null;
  }
  setActiveTab(tab) {
    this.activeTab = tab;
    this.saved = false;
    this.error = "";
  }
  saveGeneralSettings() {
    this.saved = true;
    setTimeout(() => {
      this.saved = false;
    }, 3e3);
  }
  saveAccountSettings() {
    return __async(this, null, function* () {
      if (this.accountSettings.newPassword && this.accountSettings.newPassword !== this.accountSettings.confirmPassword) {
        this.error = "New passwords do not match.";
        return;
      }
      if (this.accountSettings.newPassword && this.accountSettings.newPassword.length < 8) {
        this.error = "Password must be at least 8 characters long.";
        return;
      }
      if (this.accountSettings.newPassword) {
        if (!this.accountSettings.currentPassword?.trim()) {
          this.error = "Enter your current password to set a new one.";
          return;
        }
        const result = yield this.auth.changePassword(this.accountSettings.currentPassword, this.accountSettings.newPassword);
        if (!result.success) {
          this.error = result.message || "Failed to update password.";
          return;
        }
      }
      this.error = "";
      this.saved = true;
      this.accountSettings.currentPassword = "";
      this.accountSettings.newPassword = "";
      this.accountSettings.confirmPassword = "";
      setTimeout(() => {
        this.saved = false;
      }, 3e3);
    });
  }
  saveSystemSettings() {
    this.saved = true;
    setTimeout(() => {
      this.saved = false;
    }, 3e3);
  }
  saveSecuritySettings() {
    this.saved = true;
    setTimeout(() => {
      this.saved = false;
    }, 3e3);
  }
  onProfilePhotoSelected(event) {
    const input = event.target;
    const file = input?.files?.[0];
    if (!file || !file.type.startsWith("image/"))
      return;
    const reader = new FileReader();
    reader.onload = () => __async(this, null, function* () {
      const dataUrl = reader.result;
      const resized = yield this.resizeImageDataUrl(dataUrl, 400);
      this.pendingProfilePicture = resized;
      input.value = "";
    });
    reader.readAsDataURL(file);
  }
  saveProfilePicture() {
    const userId = this.auth.currentUser?.id;
    if (!userId || this.pendingProfilePicture === null)
      return;
    this.auth.setProfilePicture(userId, this.pendingProfilePicture);
    this.pendingProfilePicture = null;
  }
  cancelPendingPhoto() {
    this.pendingProfilePicture = null;
  }
  removeProfilePhoto() {
    const userId = this.auth.currentUser?.id;
    if (userId)
      this.auth.clearProfilePicture(userId);
    this.pendingProfilePicture = null;
  }
  resizeImageDataUrl(dataUrl, maxSize) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        let w = img.width;
        let h = img.height;
        if (w <= maxSize && h <= maxSize) {
          resolve(dataUrl);
          return;
        }
        if (w > h) {
          h = Math.round(h * maxSize / w);
          w = maxSize;
        } else {
          w = Math.round(w * maxSize / h);
          h = maxSize;
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(dataUrl);
          return;
        }
        ctx.drawImage(img, 0, 0, w, h);
        try {
          resolve(canvas.toDataURL("image/jpeg", 0.85));
        } catch (e) {
          resolve(dataUrl);
        }
      };
      img.onerror = () => resolve(dataUrl);
      img.src = dataUrl;
    });
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 18, vars: 16, consts: [["profilePhotoInput", ""], [1, "settings-page"], [1, "page-title"], [1, "tabs-wrapper"], ["role", "tablist", 1, "tabs"], ["type", "button", "role", "tab", 1, "tab-button", 3, "click"], [1, "tab-content"], ["class", "settings-tab", 4, "ngIf"], [1, "settings-tab"], [1, "card"], [1, "section-description"], [1, "settings-grid"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "full-width"], ["type", "tel", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "url", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "settings-footer"], ["class", "success-message", 4, "ngIf"], [1, "spacer"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], [1, "success-message"], [1, "avatar-settings"], [1, "avatar-section"], [1, "avatar-lg"], ["alt", "Profile", 1, "avatar-lg__img", 3, "src"], [1, "avatar-actions"], ["type", "file", "accept", "image/*", 1, "avatar-input", 3, "change"], ["type", "button", 1, "btn", "btn--sm", "btn--outline", 3, "click"], ["type", "button", 1, "btn", "btn--sm", "btn--ghost"], [1, "divider"], ["type", "password", "placeholder", "Enter current password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Enter new password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Confirm new password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], ["type", "button", 1, "btn", "btn--sm", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--sm", "btn--primary", 3, "click"], [1, "error-message"], [1, "settings-section"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "daily"], ["value", "weekly"], ["value", "monthly"], ["type", "number", "min", "30", "max", "3650", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "5", "max", "120", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "3", "max", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "5", "max", "60", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
        \u0275\u0275text(2, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "nav", 4)(5, "button", 5);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_5_listener() {
          return ctx.setActiveTab("general");
        });
        \u0275\u0275text(6, " General ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_7_listener() {
          return ctx.setActiveTab("account");
        });
        \u0275\u0275text(8, " Account ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_9_listener() {
          return ctx.setActiveTab("system");
        });
        \u0275\u0275text(10, " System ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_11_listener() {
          return ctx.setActiveTab("security");
        });
        \u0275\u0275text(12, " Security ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 6);
        \u0275\u0275template(14, SettingsComponent_div_14_Template, 36, 7, "div", 7)(15, SettingsComponent_div_15_Template, 48, 13, "div", 7)(16, SettingsComponent_div_16_Template, 58, 10, "div", 7)(17, SettingsComponent_div_17_Template, 48, 6, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "general");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "general");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "account");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "account");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "system");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "system");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "security");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "security");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeTab === "general");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "account");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "system");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "security");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n.settings-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.tabs-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  flex-wrap: wrap;\n}\n.tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.tabs[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 4px;\n}\n.tab-button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  color: var(--color-text-muted);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tab-button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.tab-content[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.settings-tab[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.settings-tab[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.settings-tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.settings-tab[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.settings-tab[_ngcontent-%COMP%]   .settings-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.settings-tab[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--color-border);\n  margin: 1rem 0;\n}\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem 1.5rem;\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group.checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: var(--color-text);\n  font-size: 0.875rem;\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  margin-bottom: 0;\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--color-primary);\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.settings-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--color-border);\n}\n.settings-footer[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.settings-footer[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.settings-footer[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.avatar-settings[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 0.5rem;\n  display: flex;\n  justify-content: center;\n}\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.avatar-lg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: var(--color-border);\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-lg.avatar-lg--has-photo[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.avatar-lg__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 28%;\n  display: block;\n}\n.avatar-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.avatar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="settings-page">\r
  <h1 class="page-title">Settings</h1>\r
\r
  <div class="tabs-wrapper">\r
    <nav class="tabs" role="tablist">\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'general'"\r
        (click)="setActiveTab('general')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'general'"\r
      >\r
        General\r
      </button>\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'account'"\r
        (click)="setActiveTab('account')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'account'"\r
      >\r
        Account\r
      </button>\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'system'"\r
        (click)="setActiveTab('system')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'system'"\r
      >\r
        System\r
      </button>\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'security'"\r
        (click)="setActiveTab('security')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'security'"\r
      >\r
        Security\r
      </button>\r
    </nav>\r
  </div>\r
\r
  <div class="tab-content">\r
    <!-- General Settings Tab -->\r
    <div *ngIf="activeTab === 'general'" class="settings-tab">\r
      <div class="card">\r
        <h2>Barangay Information</h2>\r
        <p class="section-description">Update your barangay's general information and contact details.</p>\r
\r
        <div class="settings-grid">\r
          <div class="form-group">\r
            <label>Barangay Name</label>\r
            <input\r
              type="text"\r
              class="form-control"\r
              [(ngModel)]="barangaySettings.name"\r
            />\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Province</label>\r
            <input\r
              type="text"\r
              class="form-control"\r
              [(ngModel)]="barangaySettings.province"\r
            />\r
          </div>\r
\r
          <div class="form-group full-width">\r
            <label>Address</label>\r
            <input\r
              type="text"\r
              class="form-control"\r
              [(ngModel)]="barangaySettings.address"\r
            />\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Contact Number</label>\r
            <input\r
              type="tel"\r
              class="form-control"\r
              [(ngModel)]="barangaySettings.contact"\r
            />\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Email</label>\r
            <input\r
              type="email"\r
              class="form-control"\r
              [(ngModel)]="barangaySettings.email"\r
            />\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Website</label>\r
            <input\r
              type="url"\r
              class="form-control"\r
              [(ngModel)]="barangaySettings.website"\r
            />\r
          </div>\r
        </div>\r
\r
        <div class="settings-footer">\r
          <span class="success-message" *ngIf="saved">\u2713 Settings saved successfully!</span>\r
          <span class="spacer"></span>\r
          <button type="button" class="btn btn--primary" (click)="saveGeneralSettings()">\r
            Save Changes\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Account Settings Tab -->\r
    <div *ngIf="activeTab === 'account'" class="settings-tab">\r
      <div class="card">\r
        <h2>Account Information</h2>\r
        <p class="section-description">Update your account details, profile picture, and change your password.</p>\r
\r
        <div class="avatar-settings">\r
          <div class="avatar-section">\r
            <div class="avatar-lg" [class.avatar-lg--has-photo]="displayPictureUrl">\r
              @if (displayPictureUrl) {\r
                <img [src]="displayPictureUrl" alt="Profile" class="avatar-lg__img" />\r
              }\r
            </div>\r
            <div class="avatar-actions">\r
              <input\r
                type="file"\r
                #profilePhotoInput\r
                accept="image/*"\r
                class="avatar-input"\r
                (change)="onProfilePhotoSelected($event)"\r
              />\r
              <button type="button" class="btn btn--sm btn--outline" (click)="profilePhotoInput.click()">\r
                {{ displayPictureUrl ? 'Change' : 'Add' }} photo\r
              </button>\r
              @if (displayPictureUrl && !hasPendingChanges) {\r
                <button type="button" class="btn btn--sm btn--ghost" (click)="removeProfilePhoto()">Remove</button>\r
              }\r
              @if (hasPendingChanges) {\r
                <button type="button" class="btn btn--sm btn--primary" (click)="saveProfilePicture()">Save changes</button>\r
                <button type="button" class="btn btn--sm btn--ghost" (click)="cancelPendingPhoto()">Cancel</button>\r
              }\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="settings-grid">\r
          <div class="form-group">\r
            <label>Full Name</label>\r
            <input\r
              type="text"\r
              class="form-control"\r
              [(ngModel)]="accountSettings.name"\r
            />\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Email Address</label>\r
            <input\r
              type="email"\r
              class="form-control"\r
              [(ngModel)]="accountSettings.email"\r
            />\r
          </div>\r
        </div>\r
\r
        <div class="divider"></div>\r
\r
        <h3>Change Password</h3>\r
        <div class="settings-grid">\r
          <div class="form-group">\r
            <label>Current Password</label>\r
            <input\r
              type="password"\r
              class="form-control"\r
              [(ngModel)]="accountSettings.currentPassword"\r
              placeholder="Enter current password"\r
            />\r
          </div>\r
\r
          <div class="form-group">\r
            <label>New Password</label>\r
            <input\r
              type="password"\r
              class="form-control"\r
              [(ngModel)]="accountSettings.newPassword"\r
              placeholder="Enter new password"\r
            />\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Confirm New Password</label>\r
            <input\r
              type="password"\r
              class="form-control"\r
              [(ngModel)]="accountSettings.confirmPassword"\r
              placeholder="Confirm new password"\r
            />\r
          </div>\r
        </div>\r
\r
        <div class="settings-footer">\r
          <span class="error-message" *ngIf="error">{{ error }}</span>\r
          <span class="success-message" *ngIf="saved && !error">\u2713 Account updated successfully!</span>\r
          <span class="spacer"></span>\r
          <button type="button" class="btn btn--primary" (click)="saveAccountSettings()">\r
            Save Changes\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- System Settings Tab -->\r
    <div *ngIf="activeTab === 'system'" class="settings-tab">\r
      <div class="card">\r
        <h2>System Preferences</h2>\r
        <p class="section-description">Configure system-wide settings and preferences.</p>\r
\r
        <div class="settings-section">\r
          <h3>Notifications</h3>\r
          <div class="settings-grid">\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="systemSettings.enableNotifications"\r
                />\r
                <span>Enable Notifications</span>\r
              </label>\r
            </div>\r
\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="systemSettings.emailNotifications"\r
                  [disabled]="!systemSettings.enableNotifications"\r
                />\r
                <span>Email Notifications</span>\r
              </label>\r
            </div>\r
\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="systemSettings.smsNotifications"\r
                  [disabled]="!systemSettings.enableNotifications"\r
                />\r
                <span>SMS Notifications</span>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="divider"></div>\r
\r
        <div class="settings-section">\r
          <h3>Data Management</h3>\r
          <div class="settings-grid">\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="systemSettings.autoBackup"\r
                />\r
                <span>Automatic Backup</span>\r
              </label>\r
            </div>\r
\r
            <div class="form-group">\r
              <label>Backup Frequency</label>\r
              <select class="form-control" [(ngModel)]="systemSettings.backupFrequency">\r
                <option value="daily">Daily</option>\r
                <option value="weekly">Weekly</option>\r
                <option value="monthly">Monthly</option>\r
              </select>\r
            </div>\r
\r
            <div class="form-group">\r
              <label>Data Retention (days)</label>\r
              <input\r
                type="number"\r
                class="form-control"\r
                [(ngModel)]="systemSettings.dataRetention"\r
                min="30"\r
                max="3650"\r
              />\r
            </div>\r
\r
            <div class="form-group">\r
              <label>Session Timeout (minutes)</label>\r
              <input\r
                type="number"\r
                class="form-control"\r
                [(ngModel)]="systemSettings.sessionTimeout"\r
                min="5"\r
                max="120"\r
              />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="settings-footer">\r
          <span class="success-message" *ngIf="saved">\u2713 Settings saved successfully!</span>\r
          <span class="spacer"></span>\r
          <button type="button" class="btn btn--primary" (click)="saveSystemSettings()">\r
            Save Changes\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Security Settings Tab -->\r
    <div *ngIf="activeTab === 'security'" class="settings-tab">\r
      <div class="card">\r
        <h2>Security Settings</h2>\r
        <p class="section-description">Manage security features and access controls.</p>\r
\r
        <div class="settings-section">\r
          <h3>Authentication</h3>\r
          <div class="settings-grid">\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="securitySettings.twoFactorAuth"\r
                />\r
                <span>Enable Two-Factor Authentication</span>\r
              </label>\r
            </div>\r
\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="securitySettings.requireStrongPassword"\r
                />\r
                <span>Require Strong Passwords</span>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="divider"></div>\r
\r
        <div class="settings-section">\r
          <h3>Login Protection</h3>\r
          <div class="settings-grid">\r
            <div class="form-group">\r
              <label>Maximum Login Attempts</label>\r
              <input\r
                type="number"\r
                class="form-control"\r
                [(ngModel)]="securitySettings.loginAttempts"\r
                min="3"\r
                max="10"\r
              />\r
            </div>\r
\r
            <div class="form-group">\r
              <label>Account Lockout Duration (minutes)</label>\r
              <input\r
                type="number"\r
                class="form-control"\r
                [(ngModel)]="securitySettings.lockoutDuration"\r
                min="5"\r
                max="60"\r
              />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="divider"></div>\r
\r
        <div class="settings-section">\r
          <h3>Audit & Logging</h3>\r
          <div class="settings-grid">\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="securitySettings.auditLogging"\r
                />\r
                <span>Enable Audit Logging</span>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="settings-footer">\r
          <span class="success-message" *ngIf="saved">\u2713 Settings saved successfully!</span>\r
          <span class="spacer"></span>\r
          <button type="button" class="btn btn--primary" (click)="saveSecuritySettings()">\r
            Save Changes\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/settings/settings.component.scss */\n.settings-page {\n  width: 100%;\n}\n.page-title {\n  margin: 0 0 1.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.tabs-wrapper {\n  margin-bottom: 1.75rem;\n}\n.tabs {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n  flex-wrap: wrap;\n}\n.tabs::-webkit-scrollbar {\n  height: 4px;\n}\n.tabs::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 4px;\n}\n.tab-button {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  color: var(--color-text-muted);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tab-button:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tab-button.active {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.tab-content {\n  min-height: 400px;\n}\n.settings-tab .card {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.settings-tab h2 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.settings-tab h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.settings-tab .section-description {\n  margin: 0;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.settings-tab .settings-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.settings-tab .divider {\n  height: 1px;\n  background: var(--color-border);\n  margin: 1rem 0;\n}\n.settings-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem 1.5rem;\n}\n.settings-grid .form-group.full-width {\n  grid-column: 1/-1;\n}\n.settings-grid .form-group.checkbox-group {\n  display: flex;\n  align-items: center;\n}\n.settings-grid .form-group label {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: var(--color-text);\n  font-size: 0.875rem;\n}\n.settings-grid .form-group .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  margin-bottom: 0;\n}\n.settings-grid .form-group .checkbox-label input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--color-primary);\n}\n.settings-grid .form-group .checkbox-label span {\n  font-weight: 400;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.settings-footer {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--color-border);\n}\n.settings-footer .spacer {\n  flex: 1;\n}\n.settings-footer .success-message {\n  color: var(--color-success);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.settings-footer .error-message {\n  color: var(--color-warning);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.avatar-settings {\n  margin: 1.5rem 0 0.5rem;\n  display: flex;\n  justify-content: center;\n}\n.avatar-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.avatar-lg {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: var(--color-border);\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-lg.avatar-lg--has-photo {\n  background: transparent;\n}\n.avatar-lg__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 28%;\n  display: block;\n}\n.avatar-input {\n  position: absolute;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.avatar-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n/*# sourceMappingURL=settings.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/pages/settings/settings.component.ts", lineNumber: 13 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-7JUMG55O.js.map
