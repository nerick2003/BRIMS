import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YX676IPB.js";
import {
  Router,
  RouterLink
} from "./chunk-HOXEAXWN.js";
import "./chunk-ZNESRAKE.js";
import {
  DataService
} from "./chunk-F47T3EGJ.js";
import "./chunk-EXP2T67A.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MXCAMUXG.js";
import "./chunk-TWWAJFRB.js";

// src/app/pages/add-resident/add-resident.component.ts
function AddResidentComponent_Conditional_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AddResidentComponent_Conditional_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275text(1, "Resident added successfully! Redirecting to residents list...");
    \u0275\u0275elementEnd();
  }
}
var AddResidentComponent = class _AddResidentComponent {
  constructor(data, router) {
    this.data = data;
    this.router = router;
    this.resident = {
      firstName: "",
      middleName: "",
      lastName: "",
      age: void 0,
      gender: "",
      purok: "",
      birthdate: "",
      placeOfBirth: "",
      birthCertificateNumber: "",
      bloodType: "",
      civilStatus: "",
      nationality: "",
      contact: "",
      email: "",
      password: "",
      address: ""
    };
    this.submitted = false;
    this.error = "";
  }
  /** Resolve residents list URL so "Back to Residents" works from both admin and staff. */
  get residentsListUrl() {
    const base = this.router.url.startsWith("/admin") ? "/admin" : "/staff";
    return `${base}/residents`;
  }
  submit() {
    if (!this.resident.firstName?.trim() || !this.resident.lastName?.trim() || !this.resident.age || !this.resident.gender || !this.resident.purok) {
      this.error = "Please fill in all required fields (First name, Last name, Age, Gender, Purok)";
      return;
    }
    if (!this.resident.email || !this.resident.password) {
      this.error = "Please fill in login credentials (Email and Password) for resident portal access.";
      return;
    }
    const existingIds = this.data.residents.map((r) => {
      const match = r.residentId.match(/BRGY-(\d+)/);
      return match ? parseInt(match[1]) : 0;
    });
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 1e3;
    const nextIdNum = maxId + 1;
    const residentId = `BRGY-${nextIdNum}`;
    const nextId = (this.data.residents.length + 1).toString();
    const fullName = [this.resident.firstName.trim(), this.resident.middleName?.trim(), this.resident.lastName.trim()].filter(Boolean).join(" ");
    const newResident = {
      id: nextId,
      residentId,
      name: fullName,
      age: this.resident.age,
      gender: this.resident.gender,
      purok: this.resident.purok,
      birthdate: this.resident.birthdate || void 0,
      placeOfBirth: this.resident.placeOfBirth || void 0,
      birthCertificateNumber: this.resident.birthCertificateNumber || void 0,
      bloodType: this.resident.bloodType || void 0,
      civilStatus: this.resident.civilStatus || void 0,
      nationality: this.resident.nationality || void 0,
      contact: this.resident.contact || void 0,
      email: this.resident.email || void 0,
      password: this.resident.password || void 0,
      address: this.resident.address || void 0
    };
    this.data.addResident(newResident);
    this.submitted = true;
    this.error = "";
    setTimeout(() => {
      const isAdminPath = this.router.url.startsWith("/admin");
      const base = isAdminPath ? "/admin" : "/staff";
      this.router.navigate([base, "residents"]);
    }, 1500);
  }
  reset() {
    this.resident = {
      firstName: "",
      middleName: "",
      lastName: "",
      age: void 0,
      gender: "",
      purok: "",
      birthdate: "",
      placeOfBirth: "",
      birthCertificateNumber: "",
      bloodType: "",
      civilStatus: "",
      nationality: "",
      contact: "",
      email: "",
      password: "",
      address: ""
    };
    this.submitted = false;
    this.error = "";
  }
  static {
    this.\u0275fac = function AddResidentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddResidentComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddResidentComponent, selectors: [["app-add-resident"]], decls: 160, vars: 20, consts: [[1, "add-resident"], [1, "page-header"], [1, "page-title"], [1, "btn", "btn--outline", "back-button", 3, "routerLink"], [1, "form-card", "card"], [3, "ngSubmit"], [1, "form-section"], [1, "section-title"], [1, "form-row"], [1, "form-group"], ["for", "firstName"], [1, "required"], ["type", "text", "id", "firstName", "name", "firstName", "placeholder", "Enter first name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "middleName"], [1, "optional"], ["type", "text", "id", "middleName", "name", "middleName", "placeholder", "Enter middle name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "lastName"], ["type", "text", "id", "lastName", "name", "lastName", "placeholder", "Enter last name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "age"], ["type", "number", "id", "age", "name", "age", "placeholder", "Enter age", "min", "0", "max", "120", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "gender"], ["id", "gender", "name", "gender", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Male"], ["value", "Female"], ["for", "birthdate"], ["type", "date", "id", "birthdate", "name", "birthdate", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "placeOfBirth"], ["type", "text", "id", "placeOfBirth", "name", "placeOfBirth", "placeholder", "e.g. Villanueva, Misamis Oriental", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "birthCertificateNumber"], ["type", "text", "id", "birthCertificateNumber", "name", "birthCertificateNumber", "placeholder", "e.g. BC-1980-001234", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bloodType"], ["id", "bloodType", "name", "bloodType", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], ["for", "civilStatus"], ["id", "civilStatus", "name", "civilStatus", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "Single"], ["value", "Married"], ["value", "Widowed"], ["value", "Divorced"], ["value", "Separated"], ["for", "nationality"], ["type", "text", "id", "nationality", "name", "nationality", "placeholder", "e.g. Filipino", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "section-description"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "placeholder", "e.g. resident@email.com", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "placeholder", "Set login password", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "contact"], ["type", "tel", "id", "contact", "name", "contact", "placeholder", "e.g. 0917 123 4567", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "address"], ["id", "address", "name", "address", "rows", "3", "placeholder", "Enter complete address", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "purok"], ["id", "purok", "name", "purok", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "Purok 1"], ["value", "Purok 2"], ["value", "Purok 3"], [1, "error-msg"], [1, "success-msg"], [1, "form-actions"], ["type", "button", 1, "btn", "btn--outline", 3, "click"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function AddResidentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Add New Resident");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 3);
        \u0275\u0275text(5, "\u2190 Back to Residents List");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "form", 5);
        \u0275\u0275listener("ngSubmit", function AddResidentComponent_Template_form_ngSubmit_7_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(8, "div", 6)(9, "h2", 7);
        \u0275\u0275text(10, "Personal Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "label", 10);
        \u0275\u0275text(14, "First Name ");
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.firstName, $event) || (ctx.resident.firstName = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 9)(19, "label", 13);
        \u0275\u0275text(20, "Middle Name ");
        \u0275\u0275elementStart(21, "span", 14);
        \u0275\u0275text(22, "(optional)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.middleName, $event) || (ctx.resident.middleName = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 9)(25, "label", 16);
        \u0275\u0275text(26, "Last Name ");
        \u0275\u0275elementStart(27, "span", 11);
        \u0275\u0275text(28, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.lastName, $event) || (ctx.resident.lastName = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 8)(31, "div", 9)(32, "label", 18);
        \u0275\u0275text(33, "Age ");
        \u0275\u0275elementStart(34, "span", 11);
        \u0275\u0275text(35, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_input_ngModelChange_36_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.age, $event) || (ctx.resident.age = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 8)(38, "div", 9)(39, "label", 20);
        \u0275\u0275text(40, "Gender ");
        \u0275\u0275elementStart(41, "span", 11);
        \u0275\u0275text(42, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "select", 21);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_select_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.gender, $event) || (ctx.resident.gender = $event);
          return $event;
        });
        \u0275\u0275elementStart(44, "option", 22);
        \u0275\u0275text(45, "Select gender");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "option", 23);
        \u0275\u0275text(47, "Male");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "option", 24);
        \u0275\u0275text(49, "Female");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 9)(51, "label", 25);
        \u0275\u0275text(52, "Birthdate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "input", 26);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_input_ngModelChange_53_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.birthdate, $event) || (ctx.resident.birthdate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 9)(55, "label", 27);
        \u0275\u0275text(56, "Place of Birth");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "input", 28);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_input_ngModelChange_57_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.placeOfBirth, $event) || (ctx.resident.placeOfBirth = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "div", 8)(59, "div", 9)(60, "label", 29);
        \u0275\u0275text(61, "Birth Certificate Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "input", 30);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_input_ngModelChange_62_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.birthCertificateNumber, $event) || (ctx.resident.birthCertificateNumber = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 9)(64, "label", 31);
        \u0275\u0275text(65, "Blood Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "select", 32);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_select_ngModelChange_66_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.bloodType, $event) || (ctx.resident.bloodType = $event);
          return $event;
        });
        \u0275\u0275elementStart(67, "option", 22);
        \u0275\u0275text(68, "Select blood type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "option", 33);
        \u0275\u0275text(70, "A+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "option", 34);
        \u0275\u0275text(72, "A-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "option", 35);
        \u0275\u0275text(74, "B+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "option", 36);
        \u0275\u0275text(76, "B-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "option", 37);
        \u0275\u0275text(78, "AB+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "option", 38);
        \u0275\u0275text(80, "AB-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "option", 39);
        \u0275\u0275text(82, "O+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "option", 40);
        \u0275\u0275text(84, "O-");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(85, "div", 8)(86, "div", 9)(87, "label", 41);
        \u0275\u0275text(88, "Civil Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "select", 42);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_select_ngModelChange_89_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.civilStatus, $event) || (ctx.resident.civilStatus = $event);
          return $event;
        });
        \u0275\u0275elementStart(90, "option", 22);
        \u0275\u0275text(91, "Select civil status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "option", 43);
        \u0275\u0275text(93, "Single");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "option", 44);
        \u0275\u0275text(95, "Married");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "option", 45);
        \u0275\u0275text(97, "Widowed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "option", 46);
        \u0275\u0275text(99, "Divorced");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "option", 47);
        \u0275\u0275text(101, "Separated");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(102, "div", 9)(103, "label", 48);
        \u0275\u0275text(104, "Nationality");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "input", 49);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_input_ngModelChange_105_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.nationality, $event) || (ctx.resident.nationality = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(106, "div", 6)(107, "h2", 7);
        \u0275\u0275text(108, "Login Credentials (Resident Portal)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "p", 50);
        \u0275\u0275text(110, "Email and password for residents to sign in to the resident portal.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 8)(112, "div", 9)(113, "label", 51);
        \u0275\u0275text(114, "Email ");
        \u0275\u0275elementStart(115, "span", 11);
        \u0275\u0275text(116, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "input", 52);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_input_ngModelChange_117_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.email, $event) || (ctx.resident.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "div", 9)(119, "label", 53);
        \u0275\u0275text(120, "Password ");
        \u0275\u0275elementStart(121, "span", 11);
        \u0275\u0275text(122, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "input", 54);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_input_ngModelChange_123_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.password, $event) || (ctx.resident.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(124, "div", 6)(125, "h2", 7);
        \u0275\u0275text(126, "Contact & Address Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 8)(128, "div", 9)(129, "label", 55);
        \u0275\u0275text(130, "Contact Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "input", 56);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_input_ngModelChange_131_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.contact, $event) || (ctx.resident.contact = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "div", 9)(133, "label", 57);
        \u0275\u0275text(134, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "textarea", 58);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_textarea_ngModelChange_135_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.address, $event) || (ctx.resident.address = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(136, "div", 6)(137, "h2", 7);
        \u0275\u0275text(138, "Barangay Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "div", 9)(140, "label", 59);
        \u0275\u0275text(141, "Purok ");
        \u0275\u0275elementStart(142, "span", 11);
        \u0275\u0275text(143, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "select", 60);
        \u0275\u0275twoWayListener("ngModelChange", function AddResidentComponent_Template_select_ngModelChange_144_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.resident.purok, $event) || (ctx.resident.purok = $event);
          return $event;
        });
        \u0275\u0275elementStart(145, "option", 22);
        \u0275\u0275text(146, "Select purok");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "option", 61);
        \u0275\u0275text(148, "Purok 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "option", 62);
        \u0275\u0275text(150, "Purok 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "option", 63);
        \u0275\u0275text(152, "Purok 3");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(153, AddResidentComponent_Conditional_153_Template, 2, 1, "div", 64);
        \u0275\u0275conditionalCreate(154, AddResidentComponent_Conditional_154_Template, 2, 0, "div", 65);
        \u0275\u0275elementStart(155, "div", 66)(156, "button", 67);
        \u0275\u0275listener("click", function AddResidentComponent_Template_button_click_156_listener() {
          return ctx.reset();
        });
        \u0275\u0275text(157, "Reset Form");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "button", 68);
        \u0275\u0275text(159, "Add Resident");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", ctx.residentsListUrl);
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.firstName);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.middleName);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.lastName);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.age);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.gender);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.birthdate);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.placeOfBirth);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.birthCertificateNumber);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.bloodType);
        \u0275\u0275advance(23);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.civilStatus);
        \u0275\u0275advance(16);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.nationality);
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.email);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.password);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.contact);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.address);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.resident.purok);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.error ? 153 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted ? 154 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.submitted);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.add-resident[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  position: relative;\n  padding-right: 180px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.page-header[_ngcontent-%COMP%] {\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 0.75rem;\n    padding-right: 0;\n    text-align: center;\n  }\n  .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .page-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n    width: auto;\n    text-align: center;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.form-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n  color: var(--color-text);\n}\n.form-section[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin: 0 0 1.25rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: var(--color-text);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-bg-card);\n  font-size: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: var(--radius);\n  color: #dc2626;\n  margin-bottom: 1rem;\n  font-size: 0.9375rem;\n}\n.success-msg[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: var(--color-success-bg);\n  border: 1px solid var(--color-success);\n  border-radius: var(--radius);\n  color: var(--color-success);\n  margin-bottom: 1rem;\n  font-weight: 500;\n  font-size: 0.9375rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=add-resident.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddResidentComponent, [{
    type: Component,
    args: [{ selector: "app-add-resident", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: '<div class="add-resident">\r\n  <div class="page-header">\r\n    <h1 class="page-title">Add New Resident</h1>\r\n    <a [routerLink]="residentsListUrl" class="btn btn--outline back-button">\u2190 Back to Residents List</a>\r\n  </div>\r\n\r\n  <div class="form-card card">\r\n    <form (ngSubmit)="submit()">\r\n      <div class="form-section">\r\n        <h2 class="section-title">Personal Information</h2>\r\n        \r\n        <div class="form-row">\r\n          <div class="form-group">\r\n            <label for="firstName">First Name <span class="required">*</span></label>\r\n            <input\r\n              type="text"\r\n              id="firstName"\r\n              class="form-control"\r\n              [(ngModel)]="resident.firstName"\r\n              name="firstName"\r\n              placeholder="Enter first name"\r\n              required\r\n            />\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="middleName">Middle Name <span class="optional">(optional)</span></label>\r\n            <input\r\n              type="text"\r\n              id="middleName"\r\n              class="form-control"\r\n              [(ngModel)]="resident.middleName"\r\n              name="middleName"\r\n              placeholder="Enter middle name"\r\n            />\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="lastName">Last Name <span class="required">*</span></label>\r\n            <input\r\n              type="text"\r\n              id="lastName"\r\n              class="form-control"\r\n              [(ngModel)]="resident.lastName"\r\n              name="lastName"\r\n              placeholder="Enter last name"\r\n              required\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-row">\r\n          <div class="form-group">\r\n            <label for="age">Age <span class="required">*</span></label>\r\n            <input\r\n              type="number"\r\n              id="age"\r\n              class="form-control"\r\n              [(ngModel)]="resident.age"\r\n              name="age"\r\n              placeholder="Enter age"\r\n              min="0"\r\n              max="120"\r\n              required\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-row">\r\n          <div class="form-group">\r\n            <label for="gender">Gender <span class="required">*</span></label>\r\n            <select id="gender" class="form-control" [(ngModel)]="resident.gender" name="gender" required>\r\n              <option value="">Select gender</option>\r\n              <option value="Male">Male</option>\r\n              <option value="Female">Female</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="birthdate">Birthdate</label>\r\n            <input\r\n              type="date"\r\n              id="birthdate"\r\n              class="form-control"\r\n              [(ngModel)]="resident.birthdate"\r\n              name="birthdate"\r\n            />\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="placeOfBirth">Place of Birth</label>\r\n            <input\r\n              type="text"\r\n              id="placeOfBirth"\r\n              class="form-control"\r\n              [(ngModel)]="resident.placeOfBirth"\r\n              name="placeOfBirth"\r\n              placeholder="e.g. Villanueva, Misamis Oriental"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-row">\r\n          <div class="form-group">\r\n            <label for="birthCertificateNumber">Birth Certificate Number</label>\r\n            <input\r\n              type="text"\r\n              id="birthCertificateNumber"\r\n              class="form-control"\r\n              [(ngModel)]="resident.birthCertificateNumber"\r\n              name="birthCertificateNumber"\r\n              placeholder="e.g. BC-1980-001234"\r\n            />\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="bloodType">Blood Type</label>\r\n            <select id="bloodType" class="form-control" [(ngModel)]="resident.bloodType" name="bloodType">\r\n              <option value="">Select blood type</option>\r\n              <option value="A+">A+</option>\r\n              <option value="A-">A-</option>\r\n              <option value="B+">B+</option>\r\n              <option value="B-">B-</option>\r\n              <option value="AB+">AB+</option>\r\n              <option value="AB-">AB-</option>\r\n              <option value="O+">O+</option>\r\n              <option value="O-">O-</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-row">\r\n          <div class="form-group">\r\n            <label for="civilStatus">Civil Status</label>\r\n            <select id="civilStatus" class="form-control" [(ngModel)]="resident.civilStatus" name="civilStatus">\r\n              <option value="">Select civil status</option>\r\n              <option value="Single">Single</option>\r\n              <option value="Married">Married</option>\r\n              <option value="Widowed">Widowed</option>\r\n              <option value="Divorced">Divorced</option>\r\n              <option value="Separated">Separated</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="nationality">Nationality</label>\r\n            <input\r\n              type="text"\r\n              id="nationality"\r\n              class="form-control"\r\n              [(ngModel)]="resident.nationality"\r\n              name="nationality"\r\n              placeholder="e.g. Filipino"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-section">\r\n        <h2 class="section-title">Login Credentials (Resident Portal)</h2>\r\n        <p class="section-description">Email and password for residents to sign in to the resident portal.</p>\r\n        <div class="form-row">\r\n          <div class="form-group">\r\n            <label for="email">Email <span class="required">*</span></label>\r\n            <input\r\n              type="email"\r\n              id="email"\r\n              class="form-control"\r\n              [(ngModel)]="resident.email"\r\n              name="email"\r\n              placeholder="e.g. resident@email.com"\r\n              required\r\n            />\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="password">Password <span class="required">*</span></label>\r\n            <input\r\n              type="password"\r\n              id="password"\r\n              class="form-control"\r\n              [(ngModel)]="resident.password"\r\n              name="password"\r\n              placeholder="Set login password"\r\n              required\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-section">\r\n        <h2 class="section-title">Contact & Address Information</h2>\r\n        \r\n        <div class="form-row">\r\n          <div class="form-group">\r\n            <label for="contact">Contact Number</label>\r\n            <input\r\n              type="tel"\r\n              id="contact"\r\n              class="form-control"\r\n              [(ngModel)]="resident.contact"\r\n              name="contact"\r\n              placeholder="e.g. 0917 123 4567"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label for="address">Address</label>\r\n          <textarea\r\n            id="address"\r\n            class="form-control"\r\n            [(ngModel)]="resident.address"\r\n            name="address"\r\n            rows="3"\r\n            placeholder="Enter complete address"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-section">\r\n        <h2 class="section-title">Barangay Information</h2>\r\n        \r\n        <div class="form-group">\r\n          <label for="purok">Purok <span class="required">*</span></label>\r\n          <select id="purok" class="form-control" [(ngModel)]="resident.purok" name="purok" required>\r\n            <option value="">Select purok</option>\r\n            <option value="Purok 1">Purok 1</option>\r\n            <option value="Purok 2">Purok 2</option>\r\n            <option value="Purok 3">Purok 3</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      @if (error) {\r\n        <div class="error-msg">{{ error }}</div>\r\n      }\r\n\r\n      @if (submitted) {\r\n        <div class="success-msg">Resident added successfully! Redirecting to residents list...</div>\r\n      }\r\n\r\n      <div class="form-actions">\r\n        <button type="button" class="btn btn--outline" (click)="reset()">Reset Form</button>\r\n        <button type="submit" class="btn btn--primary" [disabled]="submitted">Add Resident</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/pages/add-resident/add-resident.component.scss */\n.add-resident {\n  width: 100%;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  position: relative;\n  padding-right: 180px;\n}\n.page-header .page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-header .back-button {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.page-header {\n}\n@media (max-width: 640px) {\n  .page-header {\n    flex-direction: column;\n    align-items: center;\n    gap: 0.75rem;\n    padding-right: 0;\n    text-align: center;\n  }\n  .page-header .page-title {\n    font-size: 1.25rem;\n  }\n  .page-header .back-button {\n    position: static;\n    transform: none;\n    width: auto;\n    text-align: center;\n  }\n}\n.form-card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.form-section {\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.form-section:last-of-type {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.form-section .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n  color: var(--color-text);\n}\n.form-section .section-description {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin: 0 0 1.25rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 6px;\n  color: var(--color-text);\n}\n.form-group label .required {\n  color: #dc2626;\n}\n.form-group label .optional {\n  font-weight: 400;\n  color: var(--color-text-muted);\n}\n.form-group .form-control {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-bg-card);\n  font-size: 1rem;\n}\n.form-group .form-control:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\n.form-group .form-control::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group textarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-msg {\n  padding: 12px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: var(--radius);\n  color: #dc2626;\n  margin-bottom: 1rem;\n  font-size: 0.9375rem;\n}\n.success-msg {\n  padding: 12px 16px;\n  background: var(--color-success-bg);\n  border: 1px solid var(--color-success);\n  border-radius: var(--radius);\n  color: var(--color-success);\n  margin-bottom: 1rem;\n  font-weight: 500;\n  font-size: 0.9375rem;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.form-actions .btn {\n  min-width: 120px;\n}\n.form-actions .btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=add-resident.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddResidentComponent, { className: "AddResidentComponent", filePath: "src/app/pages/add-resident/add-resident.component.ts", lineNumber: 14 });
})();
export {
  AddResidentComponent
};
//# sourceMappingURL=chunk-VY2JH3R6.js.map
