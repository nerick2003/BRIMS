import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RLCWMJN5.js";
import {
  AuthService
} from "./chunk-EMIWMFU5.js";
import "./chunk-BPYJUQPN.js";
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
} from "./chunk-ISBYAA2X.js";
import {
  __async
} from "./chunk-YP43Q66R.js";

// src/app/pages/resident-settings/resident-settings.component.ts
function ResidentSettingsComponent_div_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.displayPictureUrl, \u0275\u0275sanitizeUrl);
  }
}
function ResidentSettingsComponent_div_12_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ResidentSettingsComponent_div_12_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeProfilePhoto());
    });
    \u0275\u0275text(1, "Remove");
    \u0275\u0275elementEnd();
  }
}
function ResidentSettingsComponent_div_12_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function ResidentSettingsComponent_div_12_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveProfilePicture());
    });
    \u0275\u0275text(1, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 32);
    \u0275\u0275listener("click", function ResidentSettingsComponent_div_12_Conditional_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelPendingPhoto());
    });
    \u0275\u0275text(3, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function ResidentSettingsComponent_div_12_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ResidentSettingsComponent_div_12_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "\u2713 Account updated successfully!");
    \u0275\u0275elementEnd();
  }
}
function ResidentSettingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "Account Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "Update your account details, profile picture, and change your password.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12)(8, "div", 13);
    \u0275\u0275conditionalCreate(9, ResidentSettingsComponent_div_12_Conditional_9_Template, 1, 1, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15)(11, "input", 16, 0);
    \u0275\u0275listener("change", function ResidentSettingsComponent_div_12_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onProfilePhotoSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 17);
    \u0275\u0275listener("click", function ResidentSettingsComponent_div_12_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const profilePhotoInput_r3 = \u0275\u0275reference(12);
      return \u0275\u0275resetView(profilePhotoInput_r3.click());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ResidentSettingsComponent_div_12_Conditional_15_Template, 2, 0, "button", 18);
    \u0275\u0275conditionalCreate(16, ResidentSettingsComponent_div_12_Conditional_16_Template, 4, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 19)(18, "div", 20)(19, "label");
    \u0275\u0275text(20, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_12_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountSettings.name, $event) || (ctx_r1.accountSettings.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "label");
    \u0275\u0275text(24, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_12_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountSettings.email, $event) || (ctx_r1.accountSettings.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(26, "div", 23);
    \u0275\u0275elementStart(27, "h3");
    \u0275\u0275text(28, "Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 19)(30, "div", 20)(31, "label");
    \u0275\u0275text(32, "Current Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_12_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountSettings.currentPassword, $event) || (ctx_r1.accountSettings.currentPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 20)(35, "label");
    \u0275\u0275text(36, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_12_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountSettings.newPassword, $event) || (ctx_r1.accountSettings.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 20)(39, "label");
    \u0275\u0275text(40, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_12_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.accountSettings.confirmPassword, $event) || (ctx_r1.accountSettings.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 27);
    \u0275\u0275template(43, ResidentSettingsComponent_div_12_span_43_Template, 2, 1, "span", 28)(44, ResidentSettingsComponent_div_12_span_44_Template, 2, 0, "span", 29);
    \u0275\u0275element(45, "span", 30);
    \u0275\u0275elementStart(46, "button", 31);
    \u0275\u0275listener("click", function ResidentSettingsComponent_div_12_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
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
function ResidentSettingsComponent_div_13_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "\u2713 Preferences saved successfully!");
    \u0275\u0275elementEnd();
  }
}
function ResidentSettingsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "Notification Preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "Manage how you receive notifications about your requests and updates.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 36)(7, "div", 19)(8, "div", 37)(9, "label", 38)(10, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_13_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.preferences.enableNotifications, $event) || (ctx_r1.preferences.enableNotifications = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Enable Notifications");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 37)(14, "label", 38)(15, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_13_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.preferences.emailNotifications, $event) || (ctx_r1.preferences.emailNotifications = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Email Notifications");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 37)(19, "label", 38)(20, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_13_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.preferences.smsNotifications, $event) || (ctx_r1.preferences.smsNotifications = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "SMS Notifications");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(23, "div", 23);
    \u0275\u0275elementStart(24, "h3");
    \u0275\u0275text(25, "Request Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 36)(27, "div", 19)(28, "div", 37)(29, "label", 38)(30, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_13_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.preferences.notifyOnRequestStatus, $event) || (ctx_r1.preferences.notifyOnRequestStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Notify when request status changes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 37)(34, "label", 38)(35, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_13_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.preferences.notifyOnRequestApproval, $event) || (ctx_r1.preferences.notifyOnRequestApproval = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "Notify when request is approved");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 37)(39, "label", 38)(40, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_13_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.preferences.notifyOnRequestRejection, $event) || (ctx_r1.preferences.notifyOnRequestRejection = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Notify when request is rejected");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "div", 27);
    \u0275\u0275template(44, ResidentSettingsComponent_div_13_span_44_Template, 2, 0, "span", 29);
    \u0275\u0275element(45, "span", 30);
    \u0275\u0275elementStart(46, "button", 31);
    \u0275\u0275listener("click", function ResidentSettingsComponent_div_13_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePreferences());
    });
    \u0275\u0275text(47, " Save Changes ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.preferences.enableNotifications);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.preferences.emailNotifications);
    \u0275\u0275property("disabled", !ctx_r1.preferences.enableNotifications);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.preferences.smsNotifications);
    \u0275\u0275property("disabled", !ctx_r1.preferences.enableNotifications);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.preferences.notifyOnRequestStatus);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.preferences.notifyOnRequestApproval);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.preferences.notifyOnRequestRejection);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.saved);
  }
}
function ResidentSettingsComponent_div_14_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "\u2713 Privacy settings saved successfully!");
    \u0275\u0275elementEnd();
  }
}
function ResidentSettingsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "Privacy Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "Control your privacy and data sharing preferences.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 36)(7, "h3");
    \u0275\u0275text(8, "Profile Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 19)(10, "div", 20)(11, "label");
    \u0275\u0275text(12, "Who can view your profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_14_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.privacySettings.profileVisibility, $event) || (ctx_r1.privacySettings.profileVisibility = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 42);
    \u0275\u0275text(15, "Public (All residents)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 43);
    \u0275\u0275text(17, "Barangay Staff Only");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 44);
    \u0275\u0275text(19, "Private (Only Me)");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(20, "div", 23);
    \u0275\u0275elementStart(21, "div", 36)(22, "h3");
    \u0275\u0275text(23, "Data Sharing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "div", 37)(26, "label", 38)(27, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_14_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.privacySettings.allowDataSharing, $event) || (ctx_r1.privacySettings.allowDataSharing = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "Allow data sharing for barangay services");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 37)(31, "label", 38)(32, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_14_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.privacySettings.showContactInfo, $event) || (ctx_r1.privacySettings.showContactInfo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "Show contact information in profile");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(35, "div", 23);
    \u0275\u0275elementStart(36, "div", 36)(37, "h3");
    \u0275\u0275text(38, "Account Security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 19)(40, "div", 37)(41, "label", 38)(42, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_14_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.privacySettings.twoFactorAuth, $event) || (ctx_r1.privacySettings.twoFactorAuth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "Enable Two-Factor Authentication");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 37)(46, "label", 38)(47, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResidentSettingsComponent_div_14_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.privacySettings.loginAlerts, $event) || (ctx_r1.privacySettings.loginAlerts = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "Receive alerts for new login attempts");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(50, "div", 27);
    \u0275\u0275template(51, ResidentSettingsComponent_div_14_span_51_Template, 2, 0, "span", 29);
    \u0275\u0275element(52, "span", 30);
    \u0275\u0275elementStart(53, "button", 31);
    \u0275\u0275listener("click", function ResidentSettingsComponent_div_14_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePrivacySettings());
    });
    \u0275\u0275text(54, " Save Changes ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.privacySettings.profileVisibility);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.privacySettings.allowDataSharing);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.privacySettings.showContactInfo);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.privacySettings.twoFactorAuth);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.privacySettings.loginAlerts);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.saved);
  }
}
var ResidentSettingsComponent = class _ResidentSettingsComponent {
  constructor(auth) {
    this.auth = auth;
    this.activeTab = "account";
    this.saved = false;
    this.error = "";
    this.pendingProfilePicture = null;
    this.accountSettings = {
      name: this.auth.currentUser?.name || "",
      email: this.auth.currentUser?.email || "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
    this.preferences = {
      enableNotifications: true,
      emailNotifications: true,
      smsNotifications: false,
      notifyOnRequestStatus: true,
      notifyOnRequestApproval: true,
      notifyOnRequestRejection: true
    };
    this.privacySettings = {
      profileVisibility: "barangay",
      allowDataSharing: true,
      showContactInfo: true,
      twoFactorAuth: false,
      loginAlerts: true
    };
  }
  /** Current saved profile picture for the logged-in resident. */
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
  saveAccountSettings() {
    if (this.accountSettings.newPassword && this.accountSettings.newPassword !== this.accountSettings.confirmPassword) {
      this.error = "New passwords do not match.";
      return;
    }
    if (this.accountSettings.newPassword && this.accountSettings.newPassword.length < 8) {
      this.error = "Password must be at least 8 characters long.";
      return;
    }
    this.error = "";
    this.saved = true;
    this.accountSettings.currentPassword = "";
    this.accountSettings.newPassword = "";
    this.accountSettings.confirmPassword = "";
    setTimeout(() => {
      this.saved = false;
    }, 3e3);
  }
  savePreferences() {
    this.saved = true;
    setTimeout(() => {
      this.saved = false;
    }, 3e3);
  }
  savePrivacySettings() {
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
    this.\u0275fac = function ResidentSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResidentSettingsComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResidentSettingsComponent, selectors: [["app-resident-settings"]], decls: 15, vars: 12, consts: [["profilePhotoInput", ""], [1, "settings-page"], [1, "page-title"], [1, "tabs-wrapper"], ["role", "tablist", 1, "tabs"], ["type", "button", "role", "tab", 1, "tab-button", 3, "click"], [1, "tab-content"], ["class", "settings-tab", 4, "ngIf"], [1, "settings-tab"], [1, "card"], [1, "section-description"], [1, "avatar-settings"], [1, "avatar-section"], [1, "avatar-lg"], ["alt", "Profile", 1, "avatar-lg__img", 3, "src"], [1, "avatar-actions"], ["type", "file", "accept", "image/*", 1, "avatar-input", 3, "change"], ["type", "button", 1, "btn", "btn--sm", "btn--outline", 3, "click"], ["type", "button", 1, "btn", "btn--sm", "btn--ghost"], [1, "settings-grid"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "divider"], ["type", "password", "placeholder", "Enter current password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Enter new password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Confirm new password", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "settings-footer"], ["class", "error-message", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], [1, "spacer"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["type", "button", 1, "btn", "btn--sm", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--sm", "btn--primary", 3, "click"], [1, "error-message"], [1, "success-message"], [1, "settings-section"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "public"], ["value", "barangay"], ["value", "private"]], template: function ResidentSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
        \u0275\u0275text(2, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "nav", 4)(5, "button", 5);
        \u0275\u0275listener("click", function ResidentSettingsComponent_Template_button_click_5_listener() {
          return ctx.setActiveTab("account");
        });
        \u0275\u0275text(6, " Account ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function ResidentSettingsComponent_Template_button_click_7_listener() {
          return ctx.setActiveTab("preferences");
        });
        \u0275\u0275text(8, " Preferences ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function ResidentSettingsComponent_Template_button_click_9_listener() {
          return ctx.setActiveTab("privacy");
        });
        \u0275\u0275text(10, " Privacy ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275template(12, ResidentSettingsComponent_div_12_Template, 48, 13, "div", 7)(13, ResidentSettingsComponent_div_13_Template, 48, 9, "div", 7)(14, ResidentSettingsComponent_div_14_Template, 55, 6, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.activeTab === "account");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "account");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "preferences");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "preferences");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "privacy");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "privacy");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeTab === "account");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "preferences");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "privacy");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.settings-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.tabs-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n  max-width: 100%;\n}\n.tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 24px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.tab-content[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.settings-tab[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.settings-tab[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.settings-tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.settings-tab[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.settings-tab[_ngcontent-%COMP%]   .settings-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.settings-tab[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--color-border);\n  margin: 1rem 0;\n}\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem 1.5rem;\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group.checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: var(--color-text);\n  font-size: 0.875rem;\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  margin-bottom: 0;\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--color-primary);\n}\n.settings-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.settings-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--color-border);\n}\n.settings-footer[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.settings-footer[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.settings-footer[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.avatar-settings[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 0.5rem;\n  display: flex;\n  justify-content: center;\n}\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.avatar-lg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: var(--color-border);\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-lg.avatar-lg--has-photo[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.avatar-lg__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 28%;\n  display: block;\n}\n.avatar-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.avatar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n/*# sourceMappingURL=resident-settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResidentSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-resident-settings", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="settings-page">\r
  <h1 class="page-title">Settings</h1>\r
\r
  <div class="tabs-wrapper">\r
    <nav class="tabs" role="tablist">\r
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
        [class.active]="activeTab === 'preferences'"\r
        (click)="setActiveTab('preferences')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'preferences'"\r
      >\r
        Preferences\r
      </button>\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'privacy'"\r
        (click)="setActiveTab('privacy')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'privacy'"\r
      >\r
        Privacy\r
      </button>\r
    </nav>\r
  </div>\r
\r
  <div class="tab-content">\r
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
    <!-- Preferences Tab -->\r
    <div *ngIf="activeTab === 'preferences'" class="settings-tab">\r
      <div class="card">\r
        <h2>Notification Preferences</h2>\r
        <p class="section-description">Manage how you receive notifications about your requests and updates.</p>\r
\r
        <div class="settings-section">\r
          <div class="settings-grid">\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="preferences.enableNotifications"\r
                />\r
                <span>Enable Notifications</span>\r
              </label>\r
            </div>\r
\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="preferences.emailNotifications"\r
                  [disabled]="!preferences.enableNotifications"\r
                />\r
                <span>Email Notifications</span>\r
              </label>\r
            </div>\r
\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="preferences.smsNotifications"\r
                  [disabled]="!preferences.enableNotifications"\r
                />\r
                <span>SMS Notifications</span>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="divider"></div>\r
\r
        <h3>Request Updates</h3>\r
        <div class="settings-section">\r
          <div class="settings-grid">\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="preferences.notifyOnRequestStatus"\r
                />\r
                <span>Notify when request status changes</span>\r
              </label>\r
            </div>\r
\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="preferences.notifyOnRequestApproval"\r
                />\r
                <span>Notify when request is approved</span>\r
              </label>\r
            </div>\r
\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="preferences.notifyOnRequestRejection"\r
                />\r
                <span>Notify when request is rejected</span>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="settings-footer">\r
          <span class="success-message" *ngIf="saved">\u2713 Preferences saved successfully!</span>\r
          <span class="spacer"></span>\r
          <button type="button" class="btn btn--primary" (click)="savePreferences()">\r
            Save Changes\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Privacy Tab -->\r
    <div *ngIf="activeTab === 'privacy'" class="settings-tab">\r
      <div class="card">\r
        <h2>Privacy Settings</h2>\r
        <p class="section-description">Control your privacy and data sharing preferences.</p>\r
\r
        <div class="settings-section">\r
          <h3>Profile Visibility</h3>\r
          <div class="settings-grid">\r
            <div class="form-group">\r
              <label>Who can view your profile</label>\r
              <select class="form-control" [(ngModel)]="privacySettings.profileVisibility">\r
                <option value="public">Public (All residents)</option>\r
                <option value="barangay">Barangay Staff Only</option>\r
                <option value="private">Private (Only Me)</option>\r
              </select>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="divider"></div>\r
\r
        <div class="settings-section">\r
          <h3>Data Sharing</h3>\r
          <div class="settings-grid">\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="privacySettings.allowDataSharing"\r
                />\r
                <span>Allow data sharing for barangay services</span>\r
              </label>\r
            </div>\r
\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="privacySettings.showContactInfo"\r
                />\r
                <span>Show contact information in profile</span>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="divider"></div>\r
\r
        <div class="settings-section">\r
          <h3>Account Security</h3>\r
          <div class="settings-grid">\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="privacySettings.twoFactorAuth"\r
                />\r
                <span>Enable Two-Factor Authentication</span>\r
              </label>\r
            </div>\r
\r
            <div class="form-group checkbox-group">\r
              <label class="checkbox-label">\r
                <input\r
                  type="checkbox"\r
                  [(ngModel)]="privacySettings.loginAlerts"\r
                />\r
                <span>Receive alerts for new login attempts</span>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="settings-footer">\r
          <span class="success-message" *ngIf="saved">\u2713 Privacy settings saved successfully!</span>\r
          <span class="spacer"></span>\r
          <button type="button" class="btn btn--primary" (click)="savePrivacySettings()">\r
            Save Changes\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/resident-settings/resident-settings.component.scss */\n.settings-page {\n  width: 100%;\n}\n.page-title {\n  margin: 0 0 1.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.tabs-wrapper {\n  margin-bottom: 1.75rem;\n}\n.tabs {\n  display: inline-flex;\n  gap: 0;\n  padding: 6px;\n  background: var(--color-bg);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  width: 100%;\n  max-width: 100%;\n}\n.tabs .tab-button {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 24px;\n  background: transparent;\n  border: none;\n  border-radius: calc(var(--radius-lg) - 4px);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition:\n    color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n  white-space: nowrap;\n}\n.tabs .tab-button:hover:not(.active) {\n  color: var(--color-text);\n  background: rgba(0, 0, 0, 0.04);\n}\n.tabs .tab-button.active {\n  color: white;\n  background: var(--color-primary);\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);\n}\n.tab-content {\n  min-height: 400px;\n}\n.settings-tab .card {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.settings-tab h2 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.settings-tab h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.settings-tab .section-description {\n  margin: 0;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.settings-tab .settings-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.settings-tab .divider {\n  height: 1px;\n  background: var(--color-border);\n  margin: 1rem 0;\n}\n.settings-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem 1.5rem;\n}\n.settings-grid .form-group.full-width {\n  grid-column: 1/-1;\n}\n.settings-grid .form-group.checkbox-group {\n  display: flex;\n  align-items: center;\n}\n.settings-grid .form-group label {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: var(--color-text);\n  font-size: 0.875rem;\n}\n.settings-grid .form-group .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  margin-bottom: 0;\n}\n.settings-grid .form-group .checkbox-label input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--color-primary);\n}\n.settings-grid .form-group .checkbox-label span {\n  font-weight: 400;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.settings-footer {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--color-border);\n}\n.settings-footer .spacer {\n  flex: 1;\n}\n.settings-footer .success-message {\n  color: var(--color-success);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.settings-footer .error-message {\n  color: var(--color-warning);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.avatar-settings {\n  margin: 1.5rem 0 0.5rem;\n  display: flex;\n  justify-content: center;\n}\n.avatar-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.avatar-lg {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: var(--color-border);\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-lg.avatar-lg--has-photo {\n  background: transparent;\n}\n.avatar-lg__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 28%;\n  display: block;\n}\n.avatar-input {\n  position: absolute;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.avatar-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n/*# sourceMappingURL=resident-settings.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResidentSettingsComponent, { className: "ResidentSettingsComponent", filePath: "src/app/pages/resident-settings/resident-settings.component.ts", lineNumber: 13 });
})();
export {
  ResidentSettingsComponent
};
//# sourceMappingURL=chunk-MENVR3LX.js.map
