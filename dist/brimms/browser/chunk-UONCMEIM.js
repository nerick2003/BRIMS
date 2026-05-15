import {
  require_sweetalert2_all
} from "./chunk-75B3RZGW.js";
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
} from "./chunk-PCIERS7P.js";
import {
  DataService
} from "./chunk-2RJNPIJT.js";
import {
  CommonModule,
  Component,
  NgClass,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TUEAJAVR.js";
import {
  __async,
  __toESM
} from "./chunk-TWWAJFRB.js";

// src/app/pages/users-roles/users-roles.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _forTrack0 = ($index, $item) => $item.id;
function UsersRolesComponent_div_11_div_21_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    \u0275\u0275property("value", role_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r4.name);
  }
}
function UsersRolesComponent_div_11_div_21_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "label");
    \u0275\u0275text(2, "Password ");
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_div_21_div_36_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newUser.password, $event) || (ctx_r1.newUser.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 32);
    \u0275\u0275text(7, "Required so this user can log in to the staff portal.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newUser.password);
  }
}
function UsersRolesComponent_div_11_div_21_p_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.addUserError, " ");
  }
}
function UsersRolesComponent_div_11_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Add New User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6, "Create a new account for staff or residents.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 33)(8, "div", 34)(9, "label");
    \u0275\u0275text(10, "First Name ");
    \u0275\u0275elementStart(11, "span", 35);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_div_21_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newUser.firstName, $event) || (ctx_r1.newUser.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 34)(15, "label");
    \u0275\u0275text(16, "Middle Name ");
    \u0275\u0275elementStart(17, "span", 37);
    \u0275\u0275text(18, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_div_21_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newUser.middleName, $event) || (ctx_r1.newUser.middleName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 34)(21, "label");
    \u0275\u0275text(22, "Last Name ");
    \u0275\u0275elementStart(23, "span", 35);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_div_21_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newUser.lastName, $event) || (ctx_r1.newUser.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 34)(27, "label");
    \u0275\u0275text(28, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_div_21_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newUser.email, $event) || (ctx_r1.newUser.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 34)(31, "label");
    \u0275\u0275text(32, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_div_21_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newUser.role, $event) || (ctx_r1.newUser.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(34, UsersRolesComponent_div_11_div_21_For_35_Template, 2, 2, "option", 41, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, UsersRolesComponent_div_11_div_21_div_36_Template, 8, 1, "div", 42);
    \u0275\u0275elementStart(37, "div", 34)(38, "label");
    \u0275\u0275text(39, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_div_21_Template_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newUser.status, $event) || (ctx_r1.newUser.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(41, "option", 18);
    \u0275\u0275text(42, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 19);
    \u0275\u0275text(44, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 43);
    \u0275\u0275template(46, UsersRolesComponent_div_11_div_21_p_46_Template, 2, 1, "p", 44);
    \u0275\u0275element(47, "span", 45);
    \u0275\u0275elementStart(48, "button", 46);
    \u0275\u0275listener("click", function UsersRolesComponent_div_11_div_21_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeAddUserForm());
    });
    \u0275\u0275text(49, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 47);
    \u0275\u0275listener("click", function UsersRolesComponent_div_11_div_21_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitNewUser());
    });
    \u0275\u0275text(51, " Save User ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newUser.firstName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newUser.middleName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newUser.lastName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newUser.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newUser.role);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.roles);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.newUser.role === "Staff" || ctx_r1.newUser.role === "Admin");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newUser.status);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.addUserError);
  }
}
function UsersRolesComponent_div_11_For_44_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r8 = ctx.$implicit;
    \u0275\u0275property("value", role_r8.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r8.name);
  }
}
function UsersRolesComponent_div_11_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 50);
    \u0275\u0275listener("change", function UsersRolesComponent_div_11_For_44_Template_input_change_2_listener($event) {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onUserSelectionChange(user_r7, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_For_44_Template_select_ngModelChange_9_listener($event) {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(user_r7.role, $event) || (user_r7.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UsersRolesComponent_div_11_For_44_Template_select_ngModelChange_9_listener($event) {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateUserRole(user_r7.id, $event));
    });
    \u0275\u0275repeaterCreate(10, UsersRolesComponent_div_11_For_44_For_11_Template, 2, 2, "option", 41, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span", 52);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "div", 53)(21, "button", 54);
    \u0275\u0275listener("click", function UsersRolesComponent_div_11_For_44_Template_button_click_21_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleUserStatus(user_r7.id));
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(user_r7));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", user_r7.role);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.roles);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getStatusBadgeClass(user_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r7.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.lastLogin || "Never");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.createdAt);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", user_r7.status === "Active" ? "btn--outline" : "btn--success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r7.status === "Active" ? "Deactivate" : "Activate", " ");
  }
}
function UsersRolesComponent_div_11_ForEmpty_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275text(2, " No users found ");
    \u0275\u0275elementEnd()();
  }
}
function UsersRolesComponent_div_11_For_50_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r11 = ctx.$implicit;
    \u0275\u0275property("value", role_r11.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r11.name);
  }
}
function UsersRolesComponent_div_11_For_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 56)(2, "input", 57);
    \u0275\u0275listener("change", function UsersRolesComponent_div_11_For_50_Template_input_change_2_listener($event) {
      const user_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onUserSelectionChange(user_r10, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "div", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 61)(9, "div", 62)(10, "span", 63);
    \u0275\u0275text(11, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 64)(13, "select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_For_50_Template_select_ngModelChange_13_listener($event) {
      const user_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(user_r10.role, $event) || (user_r10.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UsersRolesComponent_div_11_For_50_Template_select_ngModelChange_13_listener($event) {
      const user_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateUserRole(user_r10.id, $event));
    });
    \u0275\u0275repeaterCreate(14, UsersRolesComponent_div_11_For_50_For_15_Template, 2, 2, "option", 41, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 62)(17, "span", 63);
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 64)(20, "span", 52);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 62)(23, "span", 63);
    \u0275\u0275text(24, "Last Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 64);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 62)(28, "span", 63);
    \u0275\u0275text(29, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 64);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 65)(33, "button", 54);
    \u0275\u0275listener("click", function UsersRolesComponent_div_11_For_50_Template_button_click_33_listener() {
      const user_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleUserStatus(user_r10.id));
    });
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(user_r10));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r10.email);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", user_r10.role);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.roles);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.getStatusBadgeClass(user_r10.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r10.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(user_r10.lastLogin || "Never");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(user_r10.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r10.status === "Active" ? "btn--outline" : "btn--success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r10.status === "Active" ? "Deactivate" : "Activate", " ");
  }
}
function UsersRolesComponent_div_11_ForEmpty_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, "No users found");
    \u0275\u0275elementEnd();
  }
}
function UsersRolesComponent_div_11_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "button", 67);
    \u0275\u0275listener("click", function UsersRolesComponent_div_11_Conditional_52_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archiveSelectedUsers());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bulk-actions-bar--closing", ctx_r1.isBulkActionsBarClosing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Archive Selected Users (", ctx_r1.selectedCount, ") ");
  }
}
function UsersRolesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.roleFilter, $event) || (ctx_r1.roleFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 14);
    \u0275\u0275text(5, "All Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 15);
    \u0275\u0275text(7, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 16);
    \u0275\u0275text(9, "Staff");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 17);
    \u0275\u0275text(11, "Resident");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_div_11_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 14);
    \u0275\u0275text(14, "All Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 18);
    \u0275\u0275text(16, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 19);
    \u0275\u0275text(18, "Inactive");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 20);
    \u0275\u0275listener("click", function UsersRolesComponent_div_11_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddUserForm());
    });
    \u0275\u0275text(20, "+ Add User");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, UsersRolesComponent_div_11_div_21_Template, 52, 8, "div", 21);
    \u0275\u0275elementStart(22, "div", 22)(23, "table", 23)(24, "thead")(25, "tr")(26, "th")(27, "input", 24);
    \u0275\u0275listener("change", function UsersRolesComponent_div_11_Template_input_change_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggleSelectAll($event.target.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Last Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "tbody");
    \u0275\u0275repeaterCreate(43, UsersRolesComponent_div_11_For_44_Template, 23, 10, "tr", null, _forTrack0, false, UsersRolesComponent_div_11_ForEmpty_45_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 25)(47, "div", 26)(48, "input", 24);
    \u0275\u0275listener("change", function UsersRolesComponent_div_11_Template_input_change_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggleSelectAll($event.target.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(49, UsersRolesComponent_div_11_For_50_Template, 35, 10, "div", 27, _forTrack0, false, UsersRolesComponent_div_11_ForEmpty_51_Template, 2, 0, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(52, UsersRolesComponent_div_11_Conditional_52_Template, 3, 3, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.search);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.roleFilter);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.showAddUserForm);
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r1.allSelected)("indeterminate", ctx_r1.someSelected);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.filteredUsers);
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r1.allSelected)("indeterminate", ctx_r1.someSelected);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredUsers);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showBulkActionsBar ? 52 : -1);
  }
}
function UsersRolesComponent_div_12_For_3_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const permission_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(permission_r14);
  }
}
function UsersRolesComponent_div_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 72);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 74)(10, "h4");
    \u0275\u0275text(11, "Permissions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 75);
    \u0275\u0275repeaterCreate(13, UsersRolesComponent_div_12_For_3_For_14_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 76)(16, "button", 77);
    \u0275\u0275listener("click", function UsersRolesComponent_div_12_For_3_Template_button_click_16_listener() {
      const role_r15 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRoleModal(role_r15, "role"));
    });
    \u0275\u0275text(17, " Edit Role & Permissions ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const role_r15 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(role_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r15.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", role_r15.userCount, " user", role_r15.userCount !== 1 ? "s" : "");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(role_r15.permissions);
  }
}
function UsersRolesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275repeaterCreate(2, UsersRolesComponent_div_12_For_3_Template, 18, 4, "div", 70, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.roles);
  }
}
function UsersRolesComponent_Conditional_13_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.modalPermissions.length, " permission", ctx_r1.modalPermissions.length !== 1 ? "s" : "", " ");
  }
}
function UsersRolesComponent_Conditional_13_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 103);
    \u0275\u0275listener("click", function UsersRolesComponent_Conditional_13_For_33_Template_button_click_2_listener() {
      const $index_r18 = \u0275\u0275restoreView(_r17).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removePermission($index_r18));
    });
    \u0275\u0275text(3, " \xD7 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perm_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", perm_r19, " ");
  }
}
function UsersRolesComponent_Conditional_13_ForEmpty_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "No permissions configured yet.");
    \u0275\u0275elementEnd();
  }
}
function UsersRolesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function UsersRolesComponent_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRoleModal());
    });
    \u0275\u0275elementStart(1, "div", 79);
    \u0275\u0275listener("click", function UsersRolesComponent_Conditional_13_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 80)(3, "h2", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 82);
    \u0275\u0275listener("click", function UsersRolesComponent_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRoleModal());
    });
    \u0275\u0275text(6, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 83);
    \u0275\u0275listener("ngSubmit", function UsersRolesComponent_Conditional_13_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRoleModal());
    });
    \u0275\u0275elementStart(8, "p", 84);
    \u0275\u0275text(9, " Update the description and permissions for this role. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 85)(11, "div", 86)(12, "h3", 87);
    \u0275\u0275text(13, "Role details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 34)(15, "label");
    \u0275\u0275text(16, "Role name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 89)(19, "label");
    \u0275\u0275text(20, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 90);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_Conditional_13_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalDescription, $event) || (ctx_r1.modalDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 91)(23, "div", 92)(24, "div")(25, "h3", 87);
    \u0275\u0275text(26, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 93);
    \u0275\u0275text(28, " Define what this role is allowed to do in the system. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, UsersRolesComponent_Conditional_13_span_29_Template, 2, 2, "span", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 34)(31, "div", 95);
    \u0275\u0275repeaterCreate(32, UsersRolesComponent_Conditional_13_For_33_Template, 4, 1, "span", 96, \u0275\u0275repeaterTrackByIdentity, false, UsersRolesComponent_Conditional_13_ForEmpty_34_Template, 2, 0, "p", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 97)(36, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function UsersRolesComponent_Conditional_13_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPermission, $event) || (ctx_r1.newPermission = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function UsersRolesComponent_Conditional_13_Template_input_keyup_enter_36_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPermission());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 99);
    \u0275\u0275listener("click", function UsersRolesComponent_Conditional_13_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPermission());
    });
    \u0275\u0275text(38, " Add ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 100)(40, "button", 101);
    \u0275\u0275listener("click", function UsersRolesComponent_Conditional_13_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRoleModal());
    });
    \u0275\u0275text(41, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 102);
    \u0275\u0275text(43, " Save Changes ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("modal-overlay--closing", ctx_r1.isRoleModalClosing);
    \u0275\u0275advance();
    \u0275\u0275classProp("modal--closing", ctx_r1.isRoleModalClosing);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Edit Role \u2013 ", ctx_r1.activeRole.name, " ");
    \u0275\u0275advance(13);
    \u0275\u0275property("value", ctx_r1.activeRole.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalDescription);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.modalPermissions.length);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.modalPermissions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPermission);
  }
}
var UsersRolesComponent = class _UsersRolesComponent {
  constructor(data) {
    this.data = data;
    this.activeTab = "users";
    this.search = "";
    this.roleFilter = "";
    this.statusFilter = "";
    this.selectedUserIds = /* @__PURE__ */ new Set();
    this.showAddUserForm = false;
    this.addUserError = "";
    this.showRoleModal = false;
    this.modalMode = "role";
    this.activeRole = null;
    this.modalDescription = "";
    this.modalPermissions = [];
    this.newPermission = "";
    this.isRoleModalClosing = false;
    this.roleModalCloseTimeout = null;
    this.newUser = {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      role: "Resident",
      status: "Active",
      password: ""
    };
    this.isBulkActionsBarClosing = false;
    this.bulkBarCloseTimeout = null;
  }
  get users() {
    return this.data.getActiveUsers();
  }
  get roles() {
    return this.data.roles;
  }
  get filteredUsers() {
    let result = this.users.filter((u) => !u.archived);
    if (this.search) {
      const searchLower = this.search.toLowerCase();
      result = result.filter((u) => u.name.toLowerCase().includes(searchLower) || u.email.toLowerCase().includes(searchLower));
    }
    if (this.roleFilter) {
      result = result.filter((u) => u.role === this.roleFilter);
    }
    if (this.statusFilter) {
      result = result.filter((u) => u.status === this.statusFilter);
    }
    return result;
  }
  get selectedCount() {
    return this.selectedUserIds.size;
  }
  get showBulkActionsBar() {
    return this.selectedCount > 0 || this.isBulkActionsBarClosing;
  }
  get allSelected() {
    const current = this.filteredUsers;
    return current.length > 0 && current.every((u) => this.selectedUserIds.has(u.id));
  }
  get someSelected() {
    const current = this.filteredUsers;
    const selectedOnPage = current.filter((u) => this.selectedUserIds.has(u.id)).length;
    return selectedOnPage > 0 && !this.allSelected;
  }
  isSelected(user) {
    return this.selectedUserIds.has(user.id);
  }
  onToggleSelectAll(checked) {
    if (checked) {
      this.filteredUsers.forEach((u) => this.selectedUserIds.add(u.id));
    } else {
      this.filteredUsers.forEach((u) => this.selectedUserIds.delete(u.id));
    }
    this.handleBulkBarSelectionChanged();
  }
  onUserSelectionChange(user, checked) {
    if (checked) {
      this.selectedUserIds.add(user.id);
    } else {
      this.selectedUserIds.delete(user.id);
    }
    this.handleBulkBarSelectionChanged();
  }
  clearSelection() {
    this.selectedUserIds.clear();
    this.handleBulkBarSelectionChanged();
  }
  handleBulkBarSelectionChanged() {
    if (this.selectedCount > 0) {
      if (this.bulkBarCloseTimeout) {
        clearTimeout(this.bulkBarCloseTimeout);
        this.bulkBarCloseTimeout = null;
      }
      this.isBulkActionsBarClosing = false;
      return;
    }
    if (this.isBulkActionsBarClosing || this.bulkBarCloseTimeout) {
      return;
    }
    this.isBulkActionsBarClosing = true;
    this.bulkBarCloseTimeout = setTimeout(() => {
      this.isBulkActionsBarClosing = false;
      this.bulkBarCloseTimeout = null;
    }, 180);
  }
  openAddUserForm() {
    this.resetNewUser();
    this.addUserError = "";
    this.showAddUserForm = true;
  }
  closeAddUserForm() {
    this.showAddUserForm = false;
    this.addUserError = "";
  }
  resetNewUser() {
    this.newUser = {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      role: "Resident",
      status: "Active",
      password: ""
    };
  }
  submitNewUser() {
    if (!this.newUser.firstName?.trim() || !this.newUser.lastName?.trim() || !this.newUser.email?.trim() || !this.newUser.role) {
      this.addUserError = "Please enter first name, last name, email, and role.";
      return;
    }
    const email = this.newUser.email.trim();
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      this.addUserError = "Please enter a valid email address.";
      return;
    }
    const role = this.newUser.role;
    const needsPassword = role === "Staff" || role === "Admin";
    if (needsPassword && !this.newUser.password?.trim()) {
      this.addUserError = "Please set a password so this user can log in.";
      return;
    }
    const nextId = (this.data.users.length + 1).toString();
    const now = /* @__PURE__ */ new Date();
    const createdAt = now.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });
    const fullName = [this.newUser.firstName.trim(), this.newUser.middleName?.trim(), this.newUser.lastName.trim()].filter(Boolean).join(" ");
    const user = {
      id: nextId,
      name: fullName,
      email,
      role,
      status: this.newUser.status || "Active",
      lastLogin: "Never",
      createdAt,
      password: needsPassword ? this.newUser.password?.trim() : void 0
    };
    this.data.addUser(user);
    this.closeAddUserForm();
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  getRoleBadgeClass(role) {
    const roleLower = role.toLowerCase();
    if (roleLower === "admin")
      return "badge--warning";
    if (roleLower === "staff")
      return "badge--info";
    return "badge--success";
  }
  getStatusBadgeClass(status) {
    return status === "Active" ? "badge--success" : "badge--warning";
  }
  updateUserRole(userId, newRole) {
    this.data.updateUserRole(userId, newRole);
  }
  toggleUserStatus(userId) {
    const user = this.users.find((u) => u.id === userId);
    if (user) {
      user.status = user.status === "Active" ? "Inactive" : "Active";
    }
  }
  removeUser(user) {
    return __async(this, null, function* () {
      const result = yield import_sweetalert2.default.fire({
        title: "Remove user?",
        text: `Remove user "${user.name}" (${user.email})? This cannot be undone.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, remove",
        cancelButtonText: "Cancel",
        reverseButtons: true,
        focusCancel: true
      });
      if (!result.isConfirmed) {
        return;
      }
      this.data.removeUser(user.id);
      yield import_sweetalert2.default.fire({
        title: "Removed",
        text: "The user account has been deleted.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    });
  }
  archiveUser(user) {
    return __async(this, null, function* () {
      if (user.role !== "Admin" && user.role !== "Staff") {
        yield import_sweetalert2.default.fire({
          icon: "warning",
          title: "Cannot archive user",
          text: "Only Admin and Staff accounts can be archived.",
          confirmButtonText: "OK"
        });
        return;
      }
      const result = yield import_sweetalert2.default.fire({
        title: "Archive user?",
        text: `Archive user "${user.name}" (${user.email})? They will move to Archives and be hidden from this list.`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, archive",
        cancelButtonText: "Cancel",
        reverseButtons: true,
        focusCancel: true
      });
      if (!result.isConfirmed) {
        return;
      }
      this.data.archiveUser(user.id);
      yield import_sweetalert2.default.fire({
        title: "Archived",
        text: "The user has been moved to Archives.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    });
  }
  archiveSelectedUsers() {
    return __async(this, null, function* () {
      if (this.selectedUserIds.size === 0)
        return;
      const selectedUsers = this.filteredUsers.filter((u) => this.selectedUserIds.has(u.id));
      const eligible = selectedUsers.filter((u) => (u.role === "Admin" || u.role === "Staff") && !u.archived);
      if (eligible.length === 0) {
        yield import_sweetalert2.default.fire({
          icon: "info",
          title: "No eligible users",
          text: "Only Admin and Staff accounts can be archived in bulk.",
          confirmButtonText: "OK"
        });
        return;
      }
      const count = eligible.length;
      const result = yield import_sweetalert2.default.fire({
        title: "Archive selected users?",
        text: `Archive ${count} selected Admin/Staff account(s)? They will move to Archives and be hidden from this list.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, archive",
        cancelButtonText: "Cancel",
        reverseButtons: true,
        focusCancel: true
      });
      if (!result.isConfirmed)
        return;
      eligible.forEach((u) => this.data.archiveUser(u.id));
      this.clearSelection();
      yield import_sweetalert2.default.fire({
        title: "Archived",
        text: `${count} user account(s) have been moved to Archives.`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    });
  }
  // Role modal
  openRoleModal(role, mode = "role") {
    if (this.roleModalCloseTimeout) {
      clearTimeout(this.roleModalCloseTimeout);
      this.roleModalCloseTimeout = null;
    }
    this.activeRole = role;
    this.modalMode = mode;
    this.modalDescription = role.description;
    this.modalPermissions = [...role.permissions];
    this.newPermission = "";
    this.isRoleModalClosing = false;
    this.showRoleModal = true;
  }
  closeRoleModal() {
    if (!this.showRoleModal || this.isRoleModalClosing) {
      return;
    }
    this.isRoleModalClosing = true;
    this.roleModalCloseTimeout = setTimeout(() => {
      this.showRoleModal = false;
      this.isRoleModalClosing = false;
      this.activeRole = null;
      this.modalDescription = "";
      this.modalPermissions = [];
      this.newPermission = "";
      this.roleModalCloseTimeout = null;
    }, 200);
  }
  saveRoleModal() {
    if (!this.activeRole)
      return;
    const description = this.modalDescription.trim();
    const cleanedPermissions = this.modalPermissions.map((p) => p.trim()).filter((p) => !!p);
    this.data.updateRole(this.activeRole.id, {
      description,
      permissions: cleanedPermissions
    });
    this.closeRoleModal();
  }
  addPermission() {
    const value = this.newPermission.trim();
    if (!value)
      return;
    if (!this.modalPermissions.includes(value)) {
      this.modalPermissions.push(value);
    }
    this.newPermission = "";
  }
  removePermission(index) {
    if (index < 0 || index >= this.modalPermissions.length)
      return;
    this.modalPermissions.splice(index, 1);
  }
  static {
    this.\u0275fac = function UsersRolesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersRolesComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersRolesComponent, selectors: [["app-users-roles"]], decls: 14, vars: 11, consts: [[1, "users-roles-page"], [1, "page-header"], [1, "page-title"], [1, "tabs-wrapper"], ["role", "tablist", 1, "tabs"], ["type", "button", "role", "tab", 1, "tab-button", 3, "click"], [1, "tab-content"], ["class", "users-tab", 4, "ngIf"], ["class", "roles-tab", 4, "ngIf"], [1, "modal-overlay", 3, "modal-overlay--closing"], [1, "users-tab"], [1, "filters", "filters--with-action"], ["type", "text", "placeholder", "Search by Name or Email", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Admin"], ["value", "Staff"], ["value", "Resident"], ["value", "Active"], ["value", "Inactive"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["class", "card add-user-card", 4, "ngIf"], [1, "table-wrap", "card", "users-table-wrap"], [1, "table"], ["type", "checkbox", 3, "change", "checked", "indeterminate"], [1, "users-mobile-list"], [1, "mobile-select-all"], [1, "users-mobile-card"], [1, "mobile-empty"], [1, "bulk-actions-bar", 3, "bulk-actions-bar--closing"], [1, "card", "add-user-card"], [1, "add-user-header"], [1, "muted"], [1, "add-user-grid"], [1, "form-group"], [1, "required"], ["type", "text", "placeholder", "Enter first name", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "optional"], ["type", "text", "placeholder", "Enter middle name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter last name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "name@example.com", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["class", "form-group", 4, "ngIf"], [1, "add-user-footer"], ["class", "error-text", 4, "ngIf"], [1, "spacer"], ["type", "button", 1, "btn", "btn--outline", "btn--sm", 3, "click"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", 3, "click"], ["type", "password", "placeholder", "Login password for this user", "autocomplete", "new-password", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "error-text"], ["type", "checkbox", 3, "change", "checked"], [1, "role-select", 3, "ngModelChange", "ngModel"], [1, "badge", 3, "ngClass"], [1, "user-actions"], ["type", "button", 1, "btn", "btn--sm", 3, "click", "ngClass"], ["colspan", "8", 1, "empty-cell"], [1, "users-mobile-card__top"], ["type", "checkbox", 1, "users-mobile-card__checkbox", 3, "change", "checked"], [1, "users-mobile-card__titles"], [1, "users-mobile-card__primary"], [1, "users-mobile-card__secondary"], [1, "users-mobile-card__fields"], [1, "mobile-kv"], [1, "mobile-kv__k"], [1, "mobile-kv__v"], [1, "users-mobile-card__actions"], [1, "bulk-actions-bar"], ["type", "button", 1, "btn", "bulk-actions-btn", 3, "click"], [1, "roles-tab"], [1, "roles-grid"], [1, "role-card", "card"], [1, "role-header"], [1, "role-description"], [1, "badge", "badge--info"], [1, "permissions"], [1, "permissions-list"], [1, "role-actions"], ["type", "button", 1, "btn", "btn--outline", "role-edit-btn", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", "card", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "modal-close", 3, "click"], [1, "modal-body", 3, "ngSubmit"], [1, "muted", "modal-desc"], [1, "modal-layout"], [1, "modal-section"], [1, "modal-section-title"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], [1, "form-group", "form-group--description"], ["rows", "4", "name", "roleDescription", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-section", "modal-section--permissions"], [1, "modal-section-header"], [1, "modal-section-subtitle", "muted"], ["class", "badge badge--info", 4, "ngIf"], [1, "permissions-tags", "permissions-tags--boxed"], [1, "permission-tag"], [1, "form-group", "permissions-add"], ["type", "text", "placeholder", "Enter permission then press Add", "name", "newPermission", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "btn", "btn--sm", "btn--outline", 3, "click"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn--outline", 3, "click"], ["type", "submit", 1, "btn", "btn--primary"], ["type", "button", 1, "permission-remove", 3, "click"]], template: function UsersRolesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Users & Roles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "nav", 4)(6, "button", 5);
        \u0275\u0275listener("click", function UsersRolesComponent_Template_button_click_6_listener() {
          return ctx.setActiveTab("users");
        });
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 5);
        \u0275\u0275listener("click", function UsersRolesComponent_Template_button_click_8_listener() {
          return ctx.setActiveTab("roles");
        });
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275template(11, UsersRolesComponent_div_11_Template, 53, 11, "div", 7)(12, UsersRolesComponent_div_12_Template, 4, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, UsersRolesComponent_Conditional_13_Template, 44, 10, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.activeTab === "users");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "users");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Users (", ctx.users.length, ") ");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "roles");
        \u0275\u0275attribute("aria-selected", ctx.activeTab === "roles");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Roles (", ctx.roles.length, ") ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTab === "users");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "roles");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRoleModal && ctx.activeRole ? 13 : -1);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: [`@charset "UTF-8";


.users-roles-page[_ngcontent-%COMP%] {
  width: 100%;
}
@media (min-width: 641px) {
  .users-roles-page[_ngcontent-%COMP%] {
    padding-top: 0.5rem;
  }
}
.page-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}
.page-header[_ngcontent-%COMP%]:has(.btn--primary) {
  padding-right: 176px;
}
@media (max-width: 640px) {
  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {
    padding-right: 164px;
  }
}
@media (max-width: 640px) {
  .page-header[_ngcontent-%COMP%]:has(.btn--primary) {
    padding-right: 0;
  }
}
.tabs-wrapper[_ngcontent-%COMP%] {
  margin-bottom: 1.75rem;
}
.tabs[_ngcontent-%COMP%] {
  display: inline-flex;
  gap: 0;
  padding: 6px;
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  width: 100%;
  max-width: 100%;
}
.tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  padding: 12px 24px;
  background: transparent;
  border: none;
  border-radius: calc(var(--radius-lg) - 4px);
  font-weight: 500;
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
  white-space: nowrap;
}
.tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover:not(.active) {
  color: var(--color-text);
  background: rgba(0, 0, 0, 0.04);
}
.tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {
  color: white;
  background: var(--color-primary);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);
}
.tab-content[_ngcontent-%COMP%] {
  min-height: 400px;
}
.filters[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(320px, 1fr) 130px 130px;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
}
.filters.filters--with-action[_ngcontent-%COMP%] {
  grid-template-columns: minmax(260px, 1fr) 130px 130px auto;
}
.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  width: 100%;
  height: 44px;
  padding: 0 14px;
  min-width: 0;
  border: 1px solid color-mix(in srgb, var(--color-border), #000 10%);
  border-radius: 8px;
  background: var(--color-bg-card);
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 500;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}
.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {
  color: var(--color-text-muted);
  font-weight: 400;
}
.filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--color-primary), #000 15%);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary), transparent 78%);
}
.filters[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 36px;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%236B7280' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 11px center;
  background-size: 14px;
}
@media (max-width: 640px) {
  .filters[_ngcontent-%COMP%] {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
    width: 100%;
    height: 42px;
    font-size: 0.92rem;
  }
  .filters[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    width: 100%;
  }
}
.table-wrap[_ngcontent-%COMP%] {
  overflow-x: auto;
  padding: 0 !important;
}
.empty-cell[_ngcontent-%COMP%] {
  text-align: center;
  padding: 2rem;
  color: var(--color-text-muted);
}
.bulk-actions-bar[_ngcontent-%COMP%] {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1.5rem;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 1000;
  animation: _ngcontent-%COMP%_bulkBarPopIn 180ms cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: both;
}
.bulk-actions-bar.bulk-actions-bar--closing[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_bulkBarPopOut 160ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%] {
  pointer-events: auto;
  min-width: 260px;
  padding: 0.85rem 1.75rem;
  font-weight: 600;
  border-radius: 999px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);
  border: none !important;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #1d4ed8) !important;
  color: #fff !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.18s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.2s ease;
}
.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: -120%;
  left: -35%;
  width: 40%;
  height: 320%;
  background:
    linear-gradient(
      115deg,
      transparent 0%,
      rgba(255, 255, 255, 0.06) 35%,
      rgba(255, 255, 255, 0.42) 50%,
      rgba(255, 255, 255, 0.06) 65%,
      transparent 100%);
  transform: translateX(-220%) rotate(18deg);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  z-index: 0;
}
.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      135deg,
      #1d4ed8,
      #1e40af) !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.3);
  filter: saturate(1.06);
}
.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]:hover::after {
  transform: translateX(360%) rotate(18deg);
}
.bulk-actions-bar[_ngcontent-%COMP%]   .btn.bulk-actions-btn[_ngcontent-%COMP%]:active {
  transform: translateY(0);
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.25);
}
@keyframes _ngcontent-%COMP%_bulkBarPopIn {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes _ngcontent-%COMP%_bulkBarPopOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(16px) scale(0.9);
  }
}
.user-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.role-select[_ngcontent-%COMP%] {
  padding: 4px 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 0.875rem;
  background: var(--color-bg-card);
  cursor: pointer;
}
.role-select[_ngcontent-%COMP%]:hover {
  border-color: var(--color-primary);
}
.role-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}
.roles-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}
.users-mobile-list[_ngcontent-%COMP%] {
  display: none;
}
@media (max-width: 640px) {
  .roles-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .users-table-wrap[_ngcontent-%COMP%] {
    display: none;
  }
  .users-mobile-list[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 1rem;
    padding-bottom: 110px;
  }
  .mobile-select-all[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 6px;
  }
  .users-mobile-card[_ngcontent-%COMP%] {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 14px;
  }
  .users-mobile-card__top[_ngcontent-%COMP%] {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .users-mobile-card__checkbox[_ngcontent-%COMP%] {
    margin-top: 3px;
    flex-shrink: 0;
  }
  .users-mobile-card__titles[_ngcontent-%COMP%] {
    min-width: 0;
    flex: 1;
  }
  .users-mobile-card__primary[_ngcontent-%COMP%] {
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .users-mobile-card__secondary[_ngcontent-%COMP%] {
    margin-top: 3px;
    color: var(--color-text-muted);
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .users-mobile-card__fields[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 12px;
    margin-top: 12px;
  }
  .users-mobile-list[_ngcontent-%COMP%]   .mobile-kv[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    min-width: 0;
  }
  .users-mobile-list[_ngcontent-%COMP%]   .mobile-kv__k[_ngcontent-%COMP%] {
    color: var(--color-text-muted);
    font-size: 0.8125rem;
    flex-shrink: 0;
  }
  .users-mobile-list[_ngcontent-%COMP%]   .mobile-kv__v[_ngcontent-%COMP%] {
    color: var(--color-text);
    font-weight: 600;
    text-align: left;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .users-mobile-list[_ngcontent-%COMP%]   .mobile-kv[_ngcontent-%COMP%]:first-child {
    grid-column: 1/-1;
  }
  .users-mobile-card__actions[_ngcontent-%COMP%] {
    margin-top: 14px;
    display: flex;
    justify-content: stretch;
  }
  .users-mobile-card__fields[_ngcontent-%COMP%]   .role-select[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 38px;
    max-width: none;
    font-size: 0.95rem;
  }
  .users-mobile-card__fields[_ngcontent-%COMP%]   .mobile-kv__v[_ngcontent-%COMP%] {
    white-space: normal;
    text-overflow: clip;
    overflow: visible;
  }
  .users-mobile-card__actions[_ngcontent-%COMP%]   .btn.btn--sm[_ngcontent-%COMP%] {
    width: 100%;
    min-width: 0;
    justify-content: center;
    padding: 11px 16px;
    font-size: 0.95rem;
  }
  .role-card[_ngcontent-%COMP%] {
    gap: 0.85rem;
    padding: 14px;
  }
  .role-card[_ngcontent-%COMP%]   .role-header[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }
  .role-card[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
    line-height: 1.4;
  }
  .role-card[_ngcontent-%COMP%]   .role-actions[_ngcontent-%COMP%] {
    padding-top: 0.85rem;
  }
  .users-mobile-list[_ngcontent-%COMP%]   .mobile-empty[_ngcontent-%COMP%] {
    text-align: center;
    padding: 1.5rem 1rem;
    color: var(--color-text-muted);
  }
}
@media (min-width: 1200px) {
  .roles-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.role-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.role-card[_ngcontent-%COMP%]   .role-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.role-card[_ngcontent-%COMP%]   .role-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
}
.role-card[_ngcontent-%COMP%]   .role-header[_ngcontent-%COMP%]   .role-description[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.875rem;
}
.role-card[_ngcontent-%COMP%]   .permissions[_ngcontent-%COMP%] {
  flex: 1;
}
.role-card[_ngcontent-%COMP%]   .permissions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  margin: 0 0 0.75rem 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.role-card[_ngcontent-%COMP%]   .permissions[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%] {
  margin: 0;
  padding-left: 1.25rem;
  list-style: none;
}
.role-card[_ngcontent-%COMP%]   .permissions[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding: 0.375rem 0;
  color: var(--color-text);
  font-size: 0.875rem;
  position: relative;
}
.role-card[_ngcontent-%COMP%]   .permissions[_ngcontent-%COMP%]   .permissions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {
  content: "\\2713";
  position: absolute;
  left: -1.25rem;
  color: var(--color-success);
  font-weight: 600;
}
.role-card[_ngcontent-%COMP%]   .role-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  flex-wrap: wrap;
}
.role-edit-btn[_ngcontent-%COMP%] {
  width: 100%;
  justify-content: center;
  padding: 0.7rem 1.75rem;
  font-size: 0.95rem;
  border-radius: 999px;
  border-width: 2px;
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.35);
  background:
    radial-gradient(
      circle at top left,
      var(--color-primary-light),
      var(--color-primary));
  color: #fff;
  border-color: transparent;
}
.role-edit-btn[_ngcontent-%COMP%]:hover {
  background:
    radial-gradient(
      circle at top left,
      var(--color-primary),
      var(--color-primary-dark));
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.45);
}
.role-edit-btn[_ngcontent-%COMP%]::after {
  content: "\\2197";
  font-size: 0.95rem;
}
.permissions-tags[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}
.permissions-tags--boxed[_ngcontent-%COMP%] {
  padding: 0.75rem;
  border-radius: var(--radius);
  background: rgba(15, 23, 42, 0.015);
  border: 1px dashed rgba(148, 163, 184, 0.6);
  min-height: 40px;
}
.permission-tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.07);
  border: 1px solid rgba(37, 99, 235, 0.3);
  font-size: 0.75rem;
  color: var(--color-text);
}
.permission-tag[_ngcontent-%COMP%]   .permission-remove[_ngcontent-%COMP%] {
  border: none;
  background: transparent;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 0;
  line-height: 1;
  font-size: 0.8rem;
}
.permission-tag[_ngcontent-%COMP%]   .permission-remove[_ngcontent-%COMP%]:hover {
  color: var(--color-danger);
}
.permissions-add[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
}
.permissions-add[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  flex: 1;
}
.add-user-card[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.add-user-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.add-user-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0 0 0.25rem 0;
  font-size: 1.25rem;
  font-weight: 600;
}
.add-user-header[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.875rem;
}
.add-user-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem 1.25rem;
}
.add-user-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {
  color: #dc2626;
}
.add-user-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%] {
  font-weight: 400;
  color: var(--color-text-muted);
}
.add-user-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
}
.add-user-footer[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {
  flex: 1;
}
.error-text[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--color-warning);
  font-size: 0.875rem;
}
.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  padding: 1rem;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  animation: _ngcontent-%COMP%_modalOverlayFadeIn 180ms ease-out;
}
.modal-overlay--closing[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_modalOverlayFadeOut 160ms ease-in forwards;
}
.modal[_ngcontent-%COMP%] {
  position: relative;
  z-index: 3001;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  transform-origin: center;
  animation: _ngcontent-%COMP%_modalScaleIn 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.modal--closing[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_modalScaleOut 150ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
@keyframes _ngcontent-%COMP%_modalOverlayFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes _ngcontent-%COMP%_modalOverlayFadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes _ngcontent-%COMP%_modalScaleIn {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes _ngcontent-%COMP%_modalScaleOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
}
.modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
}
.modal-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
}
.modal-close[_ngcontent-%COMP%] {
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: var(--radius);
}
.modal-close[_ngcontent-%COMP%]:hover {
  color: var(--color-text);
  background: var(--color-bg);
}
.modal-body[_ngcontent-%COMP%] {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.modal-desc[_ngcontent-%COMP%] {
  margin: 0 0 1rem;
  font-size: 0.9rem;
}
.modal-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.5fr);
  gap: 1.25rem;
  align-items: stretch;
}
@media (max-width: 768px) {
  .modal-layout[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
}
.modal-section[_ngcontent-%COMP%] {
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: 1rem 1.1rem;
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.12);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.modal-section-title[_ngcontent-%COMP%] {
  margin: 0 0 0.75rem;
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}
.modal-section-subtitle[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 0.82rem;
}
.form-group--description[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.form-group--description[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  flex: 1;
  min-height: auto;
  resize: none;
  line-height: 1.5;
}
.modal-section--permissions[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.08),
      var(--color-bg-card));
}
.modal-section-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.modal-section-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {
  align-self: flex-start;
}
.modal-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
  justify-content: flex-end;
  flex-wrap: wrap;
}
/*# sourceMappingURL=users-roles.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersRolesComponent, [{
    type: Component,
    args: [{ selector: "app-users-roles", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="users-roles-page">\r
  <div class="page-header">\r
    <h1 class="page-title">Users & Roles</h1>\r
  </div>\r
\r
  <div class="tabs-wrapper">\r
    <nav class="tabs" role="tablist">\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'users'"\r
        (click)="setActiveTab('users')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'users'"\r
      >\r
        Users ({{ users.length }})\r
      </button>\r
      <button\r
        type="button"\r
        class="tab-button"\r
        [class.active]="activeTab === 'roles'"\r
        (click)="setActiveTab('roles')"\r
        role="tab"\r
        [attr.aria-selected]="activeTab === 'roles'"\r
      >\r
        Roles ({{ roles.length }})\r
      </button>\r
    </nav>\r
  </div>\r
\r
  <div class="tab-content">\r
    <!-- Users Tab -->\r
    <div *ngIf="activeTab === 'users'" class="users-tab">\r
      <div class="filters filters--with-action">\r
        <input \r
          type="text" \r
          class="form-control" \r
          placeholder="Search by Name or Email" \r
          [(ngModel)]="search" \r
        />\r
        <select class="form-control" [(ngModel)]="roleFilter">\r
          <option value="">All Roles</option>\r
          <option value="Admin">Admin</option>\r
          <option value="Staff">Staff</option>\r
          <option value="Resident">Resident</option>\r
        </select>\r
        <select class="form-control" [(ngModel)]="statusFilter">\r
          <option value="">All Status</option>\r
          <option value="Active">Active</option>\r
          <option value="Inactive">Inactive</option>\r
        </select>\r
        <button type="button" class="btn btn--primary" (click)="openAddUserForm()">+ Add User</button>\r
      </div>\r
\r
      <div class="card add-user-card" *ngIf="showAddUserForm">\r
        <div class="add-user-header">\r
          <div>\r
            <h2>Add New User</h2>\r
            <p class="muted">Create a new account for staff or residents.</p>\r
          </div>\r
        </div>\r
\r
        <div class="add-user-grid">\r
          <div class="form-group">\r
            <label>First Name <span class="required">*</span></label>\r
            <input\r
              type="text"\r
              class="form-control"\r
              placeholder="Enter first name"\r
              [(ngModel)]="newUser.firstName"\r
            />\r
          </div>\r
          <div class="form-group">\r
            <label>Middle Name <span class="optional">(optional)</span></label>\r
            <input\r
              type="text"\r
              class="form-control"\r
              placeholder="Enter middle name"\r
              [(ngModel)]="newUser.middleName"\r
            />\r
          </div>\r
          <div class="form-group">\r
            <label>Last Name <span class="required">*</span></label>\r
            <input\r
              type="text"\r
              class="form-control"\r
              placeholder="Enter last name"\r
              [(ngModel)]="newUser.lastName"\r
            />\r
          </div>\r
          <div class="form-group">\r
            <label>Email</label>\r
            <input\r
              type="email"\r
              class="form-control"\r
              placeholder="name@example.com"\r
              [(ngModel)]="newUser.email"\r
            />\r
          </div>\r
          <div class="form-group">\r
            <label>Role</label>\r
            <select\r
              class="form-control"\r
              [(ngModel)]="newUser.role"\r
            >\r
              @for (role of roles; track role.id) {\r
                <option [value]="role.name">{{ role.name }}</option>\r
              }\r
            </select>\r
          </div>\r
          <div class="form-group" *ngIf="newUser.role === 'Staff' || newUser.role === 'Admin'">\r
            <label>Password <span class="required">*</span></label>\r
            <input\r
              type="password"\r
              class="form-control"\r
              placeholder="Login password for this user"\r
              [(ngModel)]="newUser.password"\r
              autocomplete="new-password"\r
            />\r
            <small class="muted">Required so this user can log in to the staff portal.</small>\r
          </div>\r
          <div class="form-group">\r
            <label>Status</label>\r
            <select\r
              class="form-control"\r
              [(ngModel)]="newUser.status"\r
            >\r
              <option value="Active">Active</option>\r
              <option value="Inactive">Inactive</option>\r
            </select>\r
          </div>\r
        </div>\r
\r
        <div class="add-user-footer">\r
          <p class="error-text" *ngIf="addUserError">\r
            {{ addUserError }}\r
          </p>\r
          <span class="spacer"></span>\r
          <button\r
            type="button"\r
            class="btn btn--outline btn--sm"\r
            (click)="closeAddUserForm()"\r
          >\r
            Cancel\r
          </button>\r
          <button\r
            type="button"\r
            class="btn btn--primary btn--sm"\r
            (click)="submitNewUser()"\r
          >\r
            Save User\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div class="table-wrap card users-table-wrap">\r
        <table class="table">\r
          <thead>\r
            <tr>\r
              <th>\r
                <input\r
                  type="checkbox"\r
                  [checked]="allSelected"\r
                  [indeterminate]="someSelected"\r
                  (change)="onToggleSelectAll($any($event.target).checked)"\r
                />\r
              </th>\r
              <th>Name</th>\r
              <th>Email</th>\r
              <th>Role</th>\r
              <th>Status</th>\r
              <th>Last Login</th>\r
              <th>Created</th>\r
              <th>Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (user of filteredUsers; track user.id) {\r
              <tr>\r
                <td>\r
                  <input\r
                    type="checkbox"\r
                    [checked]="isSelected(user)"\r
                    (change)="onUserSelectionChange(user, $any($event.target).checked)"\r
                  />\r
                </td>\r
                <td><strong>{{ user.name }}</strong></td>\r
                <td>{{ user.email }}</td>\r
                <td>\r
                  <select \r
                    class="role-select"\r
                    [(ngModel)]="user.role"\r
                    (ngModelChange)="updateUserRole(user.id, $event)"\r
                  >\r
                    @for (role of roles; track role.id) {\r
                      <option [value]="role.name">{{ role.name }}</option>\r
                    }\r
                  </select>\r
                </td>\r
                <td>\r
                  <span class="badge" [ngClass]="getStatusBadgeClass(user.status)">\r
                    {{ user.status }}\r
                  </span>\r
                </td>\r
                <td>{{ user.lastLogin || 'Never' }}</td>\r
                <td>{{ user.createdAt }}</td>\r
                <td>\r
                  <div class="user-actions">\r
                    <button \r
                      type="button" \r
                      class="btn btn--sm"\r
                      [ngClass]="user.status === 'Active' ? 'btn--outline' : 'btn--success'"\r
                      (click)="toggleUserStatus(user.id)"\r
                    >\r
                      {{ user.status === 'Active' ? 'Deactivate' : 'Activate' }}\r
                    </button>\r
                  </div>\r
                </td>\r
              </tr>\r
            } @empty {\r
              <tr>\r
                <td colspan="8" class="empty-cell">\r
                  No users found\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <div class="users-mobile-list">\r
        <div class="mobile-select-all">\r
          <input\r
            type="checkbox"\r
            [checked]="allSelected"\r
            [indeterminate]="someSelected"\r
            (change)="onToggleSelectAll($any($event.target).checked)"\r
          />\r
        </div>\r
\r
        @for (user of filteredUsers; track user.id) {\r
          <div class="users-mobile-card">\r
            <div class="users-mobile-card__top">\r
              <input\r
                class="users-mobile-card__checkbox"\r
                type="checkbox"\r
                [checked]="isSelected(user)"\r
                (change)="onUserSelectionChange(user, $any($event.target).checked)"\r
              />\r
\r
              <div class="users-mobile-card__titles">\r
                <div class="users-mobile-card__primary">{{ user.name }}</div>\r
                <div class="users-mobile-card__secondary">{{ user.email }}</div>\r
              </div>\r
            </div>\r
\r
            <div class="users-mobile-card__fields">\r
              <div class="mobile-kv">\r
                <span class="mobile-kv__k">Role</span>\r
                <span class="mobile-kv__v">\r
                  <select\r
                    class="role-select"\r
                    [(ngModel)]="user.role"\r
                    (ngModelChange)="updateUserRole(user.id, $event)"\r
                  >\r
                    @for (role of roles; track role.id) {\r
                      <option [value]="role.name">{{ role.name }}</option>\r
                    }\r
                  </select>\r
                </span>\r
              </div>\r
\r
              <div class="mobile-kv">\r
                <span class="mobile-kv__k">Status</span>\r
                <span class="mobile-kv__v">\r
                  <span class="badge" [ngClass]="getStatusBadgeClass(user.status)">\r
                    {{ user.status }}\r
                  </span>\r
                </span>\r
              </div>\r
\r
              <div class="mobile-kv">\r
                <span class="mobile-kv__k">Last Login</span>\r
                <span class="mobile-kv__v">{{ user.lastLogin || 'Never' }}</span>\r
              </div>\r
\r
              <div class="mobile-kv">\r
                <span class="mobile-kv__k">Created</span>\r
                <span class="mobile-kv__v">{{ user.createdAt }}</span>\r
              </div>\r
            </div>\r
\r
            <div class="users-mobile-card__actions">\r
              <button\r
                type="button"\r
                class="btn btn--sm"\r
                [ngClass]="user.status === 'Active' ? 'btn--outline' : 'btn--success'"\r
                (click)="toggleUserStatus(user.id)"\r
              >\r
                {{ user.status === 'Active' ? 'Deactivate' : 'Activate' }}\r
              </button>\r
            </div>\r
          </div>\r
        } @empty {\r
          <div class="mobile-empty">No users found</div>\r
        }\r
      </div>\r
      @if (showBulkActionsBar) {\r
        <div\r
          class="bulk-actions-bar"\r
          [class.bulk-actions-bar--closing]="isBulkActionsBarClosing"\r
        >\r
          <button\r
            type="button"\r
            class="btn bulk-actions-btn"\r
            (click)="archiveSelectedUsers()"\r
          >\r
            Archive Selected Users ({{ selectedCount }})\r
          </button>\r
        </div>\r
      }\r
    </div>\r
\r
    <!-- Roles Tab -->\r
    <div *ngIf="activeTab === 'roles'" class="roles-tab">\r
      <div class="roles-grid">\r
        @for (role of roles; track role.id) {\r
          <div class="role-card card">\r
            <div class="role-header">\r
              <div>\r
                <h3>{{ role.name }}</h3>\r
                <p class="role-description">{{ role.description }}</p>\r
              </div>\r
              <span class="badge badge--info">{{ role.userCount }} user{{ role.userCount !== 1 ? 's' : '' }}</span>\r
            </div>\r
            <div class="permissions">\r
              <h4>Permissions:</h4>\r
              <ul class="permissions-list">\r
                @for (permission of role.permissions; track permission) {\r
                  <li>{{ permission }}</li>\r
                }\r
              </ul>\r
            </div>\r
            <div class="role-actions">\r
              <button\r
                type="button"\r
                class="btn btn--outline role-edit-btn"\r
                (click)="openRoleModal(role, 'role')"\r
              >\r
                Edit Role & Permissions\r
              </button>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
  \r
  @if (showRoleModal && activeRole) {\r
    <div\r
      class="modal-overlay"\r
      [class.modal-overlay--closing]="isRoleModalClosing"\r
      (click)="closeRoleModal()"\r
    >\r
      <div\r
        class="modal card"\r
        [class.modal--closing]="isRoleModalClosing"\r
        (click)="$event.stopPropagation()"\r
      >\r
        <div class="modal-header">\r
          <h2 class="modal-title">\r
            Edit Role \u2013 {{ activeRole.name }}\r
          </h2>\r
          <button\r
            type="button"\r
            class="modal-close"\r
            (click)="closeRoleModal()"\r
            aria-label="Close"\r
          >\r
            &times;\r
          </button>\r
        </div>\r
\r
        <form class="modal-body" (ngSubmit)="saveRoleModal()">\r
          <p class="muted modal-desc">\r
            Update the description and permissions for this role.\r
          </p>\r
\r
          <div class="modal-layout">\r
            <div class="modal-section">\r
              <h3 class="modal-section-title">Role details</h3>\r
\r
              <div class="form-group">\r
                <label>Role name</label>\r
                <input\r
                  type="text"\r
                  class="form-control"\r
                  [value]="activeRole.name"\r
                  disabled\r
                />\r
              </div>\r
\r
              <div class="form-group form-group--description">\r
                <label>Description</label>\r
                <textarea\r
                  class="form-control"\r
                  rows="4"\r
                  [(ngModel)]="modalDescription"\r
                  name="roleDescription"\r
                ></textarea>\r
              </div>\r
            </div>\r
\r
            <div class="modal-section modal-section--permissions">\r
              <div class="modal-section-header">\r
                <div>\r
                  <h3 class="modal-section-title">Permissions</h3>\r
                  <p class="modal-section-subtitle muted">\r
                    Define what this role is allowed to do in the system.\r
                  </p>\r
                </div>\r
\r
                <span\r
                  class="badge badge--info"\r
                  *ngIf="modalPermissions.length"\r
                >\r
                  {{ modalPermissions.length }} permission{{\r
                    modalPermissions.length !== 1 ? 's' : ''\r
                  }}\r
                </span>\r
              </div>\r
\r
              <div class="form-group">\r
                <div class="permissions-tags permissions-tags--boxed">\r
                  @for (perm of modalPermissions; track perm) {\r
                    <span class="permission-tag">\r
                      {{ perm }}\r
                      <button\r
                        type="button"\r
                        class="permission-remove"\r
                        (click)="removePermission($index)"\r
                      >\r
                        \xD7\r
                      </button>\r
                    </span>\r
                  } @empty {\r
                    <p class="muted">No permissions configured yet.</p>\r
                  }\r
                </div>\r
              </div>\r
\r
              <div class="form-group permissions-add">\r
                <input\r
                  type="text"\r
                  class="form-control"\r
                  placeholder="Enter permission then press Add"\r
                  [(ngModel)]="newPermission"\r
                  (keyup.enter)="addPermission()"\r
                  name="newPermission"\r
                />\r
                <button\r
                  type="button"\r
                  class="btn btn--sm btn--outline"\r
                  (click)="addPermission()"\r
                >\r
                  Add\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="modal-actions">\r
            <button\r
              type="button"\r
              class="btn btn--outline"\r
              (click)="closeRoleModal()"\r
            >\r
              Cancel\r
            </button>\r
            <button type="submit" class="btn btn--primary">\r
              Save Changes\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
</div>\r
`, styles: [`@charset "UTF-8";

/* src/app/pages/users-roles/users-roles.component.scss */
.users-roles-page {
  width: 100%;
}
@media (min-width: 641px) {
  .users-roles-page {
    padding-top: 0.5rem;
  }
}
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.page-header .page-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}
.page-header:has(.btn--primary) {
  padding-right: 176px;
}
@media (max-width: 640px) {
  .page-header:has(.btn--primary) {
    padding-right: 164px;
  }
}
@media (max-width: 640px) {
  .page-header:has(.btn--primary) {
    padding-right: 0;
  }
}
.tabs-wrapper {
  margin-bottom: 1.75rem;
}
.tabs {
  display: inline-flex;
  gap: 0;
  padding: 6px;
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  width: 100%;
  max-width: 100%;
}
.tabs .tab-button {
  flex: 1;
  min-width: 0;
  padding: 12px 24px;
  background: transparent;
  border: none;
  border-radius: calc(var(--radius-lg) - 4px);
  font-weight: 500;
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
  white-space: nowrap;
}
.tabs .tab-button:hover:not(.active) {
  color: var(--color-text);
  background: rgba(0, 0, 0, 0.04);
}
.tabs .tab-button.active {
  color: white;
  background: var(--color-primary);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);
}
.tab-content {
  min-height: 400px;
}
.filters {
  display: grid;
  grid-template-columns: minmax(320px, 1fr) 130px 130px;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
}
.filters.filters--with-action {
  grid-template-columns: minmax(260px, 1fr) 130px 130px auto;
}
.filters .form-control {
  width: 100%;
  height: 44px;
  padding: 0 14px;
  min-width: 0;
  border: 1px solid color-mix(in srgb, var(--color-border), #000 10%);
  border-radius: 8px;
  background: var(--color-bg-card);
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 500;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}
.filters .form-control::placeholder {
  color: var(--color-text-muted);
  font-weight: 400;
}
.filters .form-control:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--color-primary), #000 15%);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary), transparent 78%);
}
.filters select.form-control {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 36px;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%236B7280' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 11px center;
  background-size: 14px;
}
@media (max-width: 640px) {
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .filters .form-control {
    width: 100%;
    height: 42px;
    font-size: 0.92rem;
  }
  .filters .btn {
    width: 100%;
  }
}
.table-wrap {
  overflow-x: auto;
  padding: 0 !important;
}
.empty-cell {
  text-align: center;
  padding: 2rem;
  color: var(--color-text-muted);
}
.bulk-actions-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1.5rem;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 1000;
  animation: bulkBarPopIn 180ms cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: both;
}
.bulk-actions-bar.bulk-actions-bar--closing {
  animation: bulkBarPopOut 160ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
.bulk-actions-bar .btn.bulk-actions-btn {
  pointer-events: auto;
  min-width: 260px;
  padding: 0.85rem 1.75rem;
  font-weight: 600;
  border-radius: 999px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);
  border: none !important;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #1d4ed8) !important;
  color: #fff !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.18s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.2s ease;
}
.bulk-actions-bar .btn.bulk-actions-btn::after {
  content: "";
  position: absolute;
  top: -120%;
  left: -35%;
  width: 40%;
  height: 320%;
  background:
    linear-gradient(
      115deg,
      transparent 0%,
      rgba(255, 255, 255, 0.06) 35%,
      rgba(255, 255, 255, 0.42) 50%,
      rgba(255, 255, 255, 0.06) 65%,
      transparent 100%);
  transform: translateX(-220%) rotate(18deg);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  z-index: 0;
}
.bulk-actions-bar .btn.bulk-actions-btn:hover {
  background:
    linear-gradient(
      135deg,
      #1d4ed8,
      #1e40af) !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.3);
  filter: saturate(1.06);
}
.bulk-actions-bar .btn.bulk-actions-btn:hover::after {
  transform: translateX(360%) rotate(18deg);
}
.bulk-actions-bar .btn.bulk-actions-btn:active {
  transform: translateY(0);
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.25);
}
@keyframes bulkBarPopIn {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes bulkBarPopOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(16px) scale(0.9);
  }
}
.user-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.role-select {
  padding: 4px 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 0.875rem;
  background: var(--color-bg-card);
  cursor: pointer;
}
.role-select:hover {
  border-color: var(--color-primary);
}
.role-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}
.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}
.users-mobile-list {
  display: none;
}
@media (max-width: 640px) {
  .roles-grid {
    grid-template-columns: 1fr;
  }
  .users-table-wrap {
    display: none;
  }
  .users-mobile-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 1rem;
    padding-bottom: 110px;
  }
  .mobile-select-all {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 6px;
  }
  .users-mobile-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 14px;
  }
  .users-mobile-card__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .users-mobile-card__checkbox {
    margin-top: 3px;
    flex-shrink: 0;
  }
  .users-mobile-card__titles {
    min-width: 0;
    flex: 1;
  }
  .users-mobile-card__primary {
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .users-mobile-card__secondary {
    margin-top: 3px;
    color: var(--color-text-muted);
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .users-mobile-card__fields {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 12px;
    margin-top: 12px;
  }
  .users-mobile-list .mobile-kv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    min-width: 0;
  }
  .users-mobile-list .mobile-kv__k {
    color: var(--color-text-muted);
    font-size: 0.8125rem;
    flex-shrink: 0;
  }
  .users-mobile-list .mobile-kv__v {
    color: var(--color-text);
    font-weight: 600;
    text-align: left;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .users-mobile-list .mobile-kv:first-child {
    grid-column: 1/-1;
  }
  .users-mobile-card__actions {
    margin-top: 14px;
    display: flex;
    justify-content: stretch;
  }
  .users-mobile-card__fields .role-select {
    width: 100%;
    min-height: 38px;
    max-width: none;
    font-size: 0.95rem;
  }
  .users-mobile-card__fields .mobile-kv__v {
    white-space: normal;
    text-overflow: clip;
    overflow: visible;
  }
  .users-mobile-card__actions .btn.btn--sm {
    width: 100%;
    min-width: 0;
    justify-content: center;
    padding: 11px 16px;
    font-size: 0.95rem;
  }
  .role-card {
    gap: 0.85rem;
    padding: 14px;
  }
  .role-card .role-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }
  .role-card .permissions-list li {
    line-height: 1.4;
  }
  .role-card .role-actions {
    padding-top: 0.85rem;
  }
  .users-mobile-list .mobile-empty {
    text-align: center;
    padding: 1.5rem 1rem;
    color: var(--color-text-muted);
  }
}
@media (min-width: 1200px) {
  .roles-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.role-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.role-card .role-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.role-card .role-header h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
}
.role-card .role-header .role-description {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.875rem;
}
.role-card .permissions {
  flex: 1;
}
.role-card .permissions h4 {
  margin: 0 0 0.75rem 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.role-card .permissions .permissions-list {
  margin: 0;
  padding-left: 1.25rem;
  list-style: none;
}
.role-card .permissions .permissions-list li {
  padding: 0.375rem 0;
  color: var(--color-text);
  font-size: 0.875rem;
  position: relative;
}
.role-card .permissions .permissions-list li::before {
  content: "\\2713";
  position: absolute;
  left: -1.25rem;
  color: var(--color-success);
  font-weight: 600;
}
.role-card .role-actions {
  display: flex;
  gap: 8px;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  flex-wrap: wrap;
}
.role-edit-btn {
  width: 100%;
  justify-content: center;
  padding: 0.7rem 1.75rem;
  font-size: 0.95rem;
  border-radius: 999px;
  border-width: 2px;
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.35);
  background:
    radial-gradient(
      circle at top left,
      var(--color-primary-light),
      var(--color-primary));
  color: #fff;
  border-color: transparent;
}
.role-edit-btn:hover {
  background:
    radial-gradient(
      circle at top left,
      var(--color-primary),
      var(--color-primary-dark));
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.45);
}
.role-edit-btn::after {
  content: "\\2197";
  font-size: 0.95rem;
}
.permissions-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}
.permissions-tags--boxed {
  padding: 0.75rem;
  border-radius: var(--radius);
  background: rgba(15, 23, 42, 0.015);
  border: 1px dashed rgba(148, 163, 184, 0.6);
  min-height: 40px;
}
.permission-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.07);
  border: 1px solid rgba(37, 99, 235, 0.3);
  font-size: 0.75rem;
  color: var(--color-text);
}
.permission-tag .permission-remove {
  border: none;
  background: transparent;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 0;
  line-height: 1;
  font-size: 0.8rem;
}
.permission-tag .permission-remove:hover {
  color: var(--color-danger);
}
.permissions-add {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
}
.permissions-add .form-control {
  flex: 1;
}
.add-user-card {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.add-user-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.add-user-header h2 {
  margin: 0 0 0.25rem 0;
  font-size: 1.25rem;
  font-weight: 600;
}
.add-user-header .muted {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.875rem;
}
.add-user-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem 1.25rem;
}
.add-user-grid .form-group label .required {
  color: #dc2626;
}
.add-user-grid .form-group label .optional {
  font-weight: 400;
  color: var(--color-text-muted);
}
.add-user-footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
}
.add-user-footer .spacer {
  flex: 1;
}
.error-text {
  margin: 0;
  color: var(--color-warning);
  font-size: 0.875rem;
}
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  padding: 1rem;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  animation: modalOverlayFadeIn 180ms ease-out;
}
.modal-overlay--closing {
  animation: modalOverlayFadeOut 160ms ease-in forwards;
}
.modal {
  position: relative;
  z-index: 3001;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  transform-origin: center;
  animation: modalScaleIn 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.modal--closing {
  animation: modalScaleOut 150ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
@keyframes modalOverlayFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes modalOverlayFadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes modalScaleIn {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes modalScaleOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
}
.modal-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
}
.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: var(--radius);
}
.modal-close:hover {
  color: var(--color-text);
  background: var(--color-bg);
}
.modal-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.modal-desc {
  margin: 0 0 1rem;
  font-size: 0.9rem;
}
.modal-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.5fr);
  gap: 1.25rem;
  align-items: stretch;
}
@media (max-width: 768px) {
  .modal-layout {
    grid-template-columns: minmax(0, 1fr);
  }
}
.modal-section {
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: 1rem 1.1rem;
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.12);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.modal-section-title {
  margin: 0 0 0.75rem;
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}
.modal-section-subtitle {
  margin: 0;
  font-size: 0.82rem;
}
.form-group--description {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.form-group--description .form-control {
  flex: 1;
  min-height: auto;
  resize: none;
  line-height: 1.5;
}
.modal-section--permissions {
  background:
    linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.08),
      var(--color-bg-card));
}
.modal-section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.modal-section-header .badge {
  align-self: flex-start;
}
.modal-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
  justify-content: flex-end;
  flex-wrap: wrap;
}
/*# sourceMappingURL=users-roles.component.css.map */
`] }]
  }], () => [{ type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersRolesComponent, { className: "UsersRolesComponent", filePath: "src/app/pages/users-roles/users-roles.component.ts", lineNumber: 14 });
})();
export {
  UsersRolesComponent
};
//# sourceMappingURL=chunk-UONCMEIM.js.map
