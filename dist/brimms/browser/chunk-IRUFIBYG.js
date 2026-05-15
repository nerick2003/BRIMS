import {
  LogoTiltDirective,
  ThemeService
} from "./chunk-KXF3WXGS.js";
import "./chunk-FVRIIZHU.js";
import {
  AlertService
} from "./chunk-HUUENN5H.js";
import "./chunk-75B3RZGW.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-IPZDF3JU.js";
import "./chunk-E73EYYCC.js";
import {
  AuthService
} from "./chunk-2RJNPIJT.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  HostListener,
  ViewChild,
  filter,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-TUEAJAVR.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/layouts/resident-layout/resident-layout.component.ts
var _c0 = ["profileMenu"];
var _c1 = ["contentScroll"];
var _c2 = (a0) => ({ exact: a0 });
var _c3 = () => ["/resident/settings"];
var _forTrack0 = ($index, $item) => $item.path;
function ResidentLayoutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ResidentLayoutComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileMenu());
    });
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2, "\u2630");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", "Toggle menu")("aria-expanded", ctx_r1.isMobileMenuOpen);
  }
}
function ResidentLayoutComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function ResidentLayoutComponent_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function ResidentLayoutComponent_For_12_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 27);
    \u0275\u0275element(1, "rect", 30)(2, "rect", 31)(3, "rect", 32)(4, "rect", 33);
    \u0275\u0275elementEnd();
  }
}
function ResidentLayoutComponent_For_12_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 28);
    \u0275\u0275element(1, "circle", 34)(2, "path", 35);
    \u0275\u0275elementEnd();
  }
}
function ResidentLayoutComponent_For_12_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 28);
    \u0275\u0275element(1, "rect", 36)(2, "path", 37)(3, "path", 38);
    \u0275\u0275elementEnd();
  }
}
function ResidentLayoutComponent_For_12_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 28);
    \u0275\u0275element(1, "path", 39);
    \u0275\u0275elementEnd();
  }
}
function ResidentLayoutComponent_For_12_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 28);
    \u0275\u0275element(1, "rect", 36)(2, "path", 40);
    \u0275\u0275elementEnd();
  }
}
function ResidentLayoutComponent_For_12_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "\u2022");
    \u0275\u0275elementEnd();
  }
}
function ResidentLayoutComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275listener("click", function ResidentLayoutComponent_For_12_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275conditionalCreate(2, ResidentLayoutComponent_For_12_Case_2_Template, 5, 0, ":svg:svg", 27)(3, ResidentLayoutComponent_For_12_Case_3_Template, 3, 0, ":svg:svg", 28)(4, ResidentLayoutComponent_For_12_Case_4_Template, 4, 0, ":svg:svg", 28)(5, ResidentLayoutComponent_For_12_Case_5_Template, 2, 0, ":svg:svg", 28)(6, ResidentLayoutComponent_For_12_Case_6_Template, 3, 0, ":svg:svg", 28)(7, ResidentLayoutComponent_For_12_Case_7_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r5.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c2, item_r5.path === "/resident/dashboard"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_13_0 = item_r5.icon) === "dashboard" ? 2 : tmp_13_0 === "profile" ? 3 : tmp_13_0 === "certificate" ? 4 : tmp_13_0 === "reports" ? 5 : tmp_13_0 === "requests" ? 6 : 7);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r5.label);
  }
}
function ResidentLayoutComponent_Conditional_25_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 44);
    \u0275\u0275element(1, "circle", 51)(2, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function ResidentLayoutComponent_Conditional_25_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 44);
    \u0275\u0275element(1, "path", 53);
    \u0275\u0275elementEnd();
  }
}
function ResidentLayoutComponent_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 48);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function ResidentLayoutComponent_Conditional_25_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "\u{1F464}");
    \u0275\u0275elementEnd();
  }
}
function ResidentLayoutComponent_Conditional_25_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "a", 54);
    \u0275\u0275listener("click", function ResidentLayoutComponent_Conditional_25_Conditional_13_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeProfileMenu());
    });
    \u0275\u0275elementStart(2, "span", 55);
    \u0275\u0275text(3, "\u2699");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 56);
    \u0275\u0275listener("click", function ResidentLayoutComponent_Conditional_25_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.logout();
      return \u0275\u0275resetView(ctx_r1.closeProfileMenu());
    });
    \u0275\u0275elementStart(6, "span", 55);
    \u0275\u0275text(7, "\u238B");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Logout ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c3));
  }
}
function ResidentLayoutComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 41)(1, "h1", 42);
    \u0275\u0275text(2, "Barangay Resident Information System");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 43);
    \u0275\u0275listener("click", function ResidentLayoutComponent_Conditional_25_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.theme.toggleTheme());
    });
    \u0275\u0275conditionalCreate(4, ResidentLayoutComponent_Conditional_25_Conditional_4_Template, 3, 0, ":svg:svg", 44)(5, ResidentLayoutComponent_Conditional_25_Conditional_5_Template, 2, 0, ":svg:svg", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 45);
    \u0275\u0275elementStart(7, "div", 46, 1)(9, "button", 47);
    \u0275\u0275listener("click", function ResidentLayoutComponent_Conditional_25_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleProfileMenu());
    });
    \u0275\u0275conditionalCreate(10, ResidentLayoutComponent_Conditional_25_Conditional_10_Template, 1, 1, "img", 48);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275conditionalBranchCreate(12, ResidentLayoutComponent_Conditional_25_Conditional_12_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, ResidentLayoutComponent_Conditional_25_Conditional_13_Template, 9, 2, "div", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("top-bar--sidebar-open", ctx_r1.isMobileMenuOpen);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r1.theme.isDark() ? "Switch to light mode" : "Switch to dark mode");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.theme.isDark() ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", "Profile menu")("aria-expanded", ctx_r1.isProfileMenuOpen);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = \u0275\u0275pipeBind1(11, 8, ctx_r1.auth.profilePicture$)) ? 10 : 12, tmp_8_0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isProfileMenuOpen ? 13 : -1);
  }
}
function ResidentLayoutComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 57)(1, "span", 58);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fab_r8 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("fab--sidebar-open", ctx_r1.isMobileMenuOpen);
    \u0275\u0275property("routerLink", fab_r8.link);
    \u0275\u0275attribute("aria-label", fab_r8.label);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(fab_r8.label);
  }
}
function ResidentLayoutComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function ResidentLayoutComponent_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollToTop());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 61);
    \u0275\u0275element(2, "path", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("back-to-top--above-fab", !!ctx_r1.fabLink);
  }
}
var ResidentLayoutComponent = class _ResidentLayoutComponent {
  constructor(auth, theme, router, alert) {
    this.auth = auth;
    this.theme = theme;
    this.router = router;
    this.alert = alert;
    this.isMobileMenuOpen = false;
    this.isProfileMenuOpen = false;
    this.showBackToTop = false;
    this.currentTime = /* @__PURE__ */ new Date();
    this.navItems = [
      { path: "/resident/dashboard", label: "Dashboard", icon: "dashboard" },
      { path: "/resident/profile", label: "My Profile", icon: "profile" },
      { path: "/resident/request-certificate", label: "Request Certificates", icon: "certificate" },
      { path: "/resident/reports", label: "Reports", icon: "reports" },
      { path: "/resident/requests", label: "Requests", icon: "requests" }
    ];
  }
  /** FAB shown on requests list; link to new request */
  get fabLink() {
    const url = this.router.url;
    if (url === "/resident/requests" || url.startsWith("/resident/requests?"))
      return { link: "/resident/request-certificate", label: "New Request" };
    return null;
  }
  /** Always show profile + theme toggle (including on resident settings/accounts). */
  get showTopRightUi() {
    return true;
  }
  ngOnInit() {
    this.timeInterval = setInterval(() => {
      this.currentTime = /* @__PURE__ */ new Date();
    }, 1e3);
    this.routerSub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.showBackToTop = false;
      setTimeout(() => this.updateBackToTopVisibility(), 0);
    });
  }
  ngAfterViewInit() {
    setTimeout(() => this.updateBackToTopVisibility(), 0);
  }
  ngOnDestroy() {
    if (this.timeInterval)
      clearInterval(this.timeInterval);
    this.routerSub?.unsubscribe();
    if (typeof document !== "undefined") {
      document.body.classList.remove("sidebar-open");
    }
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen)
      this.isProfileMenuOpen = false;
    this.updateBodyClass();
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.updateBodyClass();
  }
  updateBodyClass() {
    if (typeof document !== "undefined") {
      if (this.isMobileMenuOpen) {
        document.body.classList.add("sidebar-open");
      } else {
        document.body.classList.remove("sidebar-open");
      }
    }
  }
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
  closeProfileMenu() {
    this.isProfileMenuOpen = false;
  }
  onDocumentClick(event) {
    if (this.profileMenuRef?.nativeElement && !this.profileMenuRef.nativeElement.contains(event.target)) {
      this.closeProfileMenu();
    }
  }
  logout() {
    return __async(this, null, function* () {
      const result = yield this.alert.confirm({
        title: "Logout",
        text: "Are you sure you want to logout?",
        confirmButtonText: "Yes, logout",
        cancelButtonText: "Cancel",
        icon: "warning"
      });
      if (result.isConfirmed) {
        this.auth.logout();
        this.router.navigate(["/login"]);
        this.alert.successToast("Logged out", "You have been logged out.", 1e3);
      }
    });
  }
  onContentScroll() {
    this.updateBackToTopVisibility();
  }
  onWindowScroll() {
    this.updateBackToTopVisibility();
  }
  updateBackToTopVisibility() {
    const el = this.contentScrollRef?.nativeElement;
    const contentScrolled = el ? el.scrollTop > 300 : false;
    const windowScrolled = typeof window !== "undefined" && window.scrollY > 300;
    this.showBackToTop = contentScrolled || windowScrolled;
  }
  scrollToTop() {
    const el = this.contentScrollRef?.nativeElement;
    if (el)
      el.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  static {
    this.\u0275fac = function ResidentLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResidentLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResidentLayoutComponent, selectors: [["app-resident-layout"]], viewQuery: function ResidentLayoutComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.profileMenuRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentScrollRef = _t.first);
      }
    }, hostBindings: function ResidentLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ResidentLayoutComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, \u0275\u0275resolveDocument)("scroll", function ResidentLayoutComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 28, vars: 16, consts: [["contentScroll", ""], ["profileMenu", ""], [1, "resident-layout"], ["type", "button", 1, "mobile-menu-toggle"], [1, "sidebar-backdrop"], [1, "sidebar"], [1, "sidebar-header"], ["appLogoTilt", "", 1, "logo-tilt"], ["src", "/assets/images/FOR-DASHBOARD.png", "alt", "Logo", "loading", "eager", "decoding", "async", 1, "logo"], ["aria-hidden", "true", 1, "logo-shine"], ["type", "button", 1, "sidebar-close", 3, "click"], [1, "sidebar-nav"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink", "routerLinkActiveOptions"], [1, "sidebar-footer"], [1, "time-display"], [1, "time-display__time"], [1, "time-display__date"], [1, "main"], [1, "content", 3, "scroll"], ["aria-label", "Top bar", 1, "top-bar", 3, "top-bar--sidebar-open"], [1, "fab", 3, "routerLink", "fab--sidebar-open"], ["type", "button", "aria-label", "Back to top", 1, "back-to-top", 3, "back-to-top--above-fab"], ["type", "button", 1, "mobile-menu-toggle", 3, "click"], [1, "mobile-menu-icon"], [1, "sidebar-backdrop", 3, "click"], ["routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "nav-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linejoin", "round", "aria-hidden", "true"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["aria-hidden", "true"], ["x", "4", "y", "4", "width", "7", "height", "7", "rx", "1"], ["x", "13", "y", "4", "width", "7", "height", "7", "rx", "1"], ["x", "4", "y", "13", "width", "7", "height", "7", "rx", "1"], ["x", "13", "y", "13", "width", "7", "height", "7", "rx", "1"], ["cx", "12", "cy", "8", "r", "3.5"], ["d", "M6 18c0-2.5 2.2-4.5 6-4.5s6 2 6 4.5"], ["x", "6", "y", "4", "width", "12", "height", "16", "rx", "1.5"], ["d", "M9 8h6M9 11h5"], ["d", "M11 15.5 12 17l1-1.5 1 1-1 2.5-1-1-1 1-1-2.5z"], ["d", "M6 18v-6M11 18V8M16 18v-9"], ["d", "M9 9h6M9 13h4"], ["aria-label", "Top bar", 1, "top-bar"], [1, "top-bar__title"], ["type", "button", 1, "theme-toggle", "top-bar__icon-button", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "theme-toggle__icon"], ["aria-hidden", "true", 1, "top-bar__bell-slot", "top-bar__icon-button"], [1, "profile-menu"], ["type", "button", 1, "profile-menu__trigger", "top-bar__icon-button", 3, "click"], ["alt", "", 1, "profile-menu__avatar", 3, "src"], ["aria-hidden", "true", 1, "profile-menu__avatar", "profile-menu__avatar-placeholder"], [1, "profile-menu__dropdown"], ["cx", "12", "cy", "12", "r", "5"], ["d", "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], [1, "profile-menu__item", 3, "click", "routerLink"], [1, "profile-menu__item-icon"], ["type", "button", 1, "profile-menu__item", "profile-menu__item--logout", 3, "click"], [1, "fab", 3, "routerLink"], [1, "fab__icon"], [1, "fab__label"], ["type", "button", "aria-label", "Back to top", 1, "back-to-top", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "back-to-top__icon"], ["d", "M18 15l-6-6-6 6"]], template: function ResidentLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275conditionalCreate(1, ResidentLayoutComponent_Conditional_1_Template, 3, 2, "button", 3);
        \u0275\u0275conditionalCreate(2, ResidentLayoutComponent_Conditional_2_Template, 1, 0, "div", 4);
        \u0275\u0275elementStart(3, "aside", 5)(4, "div", 6)(5, "div", 7);
        \u0275\u0275element(6, "img", 8)(7, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 10);
        \u0275\u0275listener("click", function ResidentLayoutComponent_Template_button_click_8_listener() {
          return ctx.closeMobileMenu();
        });
        \u0275\u0275text(9, " \u2715 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "nav", 11);
        \u0275\u0275repeaterCreate(11, ResidentLayoutComponent_For_12_Template, 10, 6, "a", 12, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 13)(14, "div", 14)(15, "div", 15);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 16);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "date");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 17)(22, "main", 18, 0);
        \u0275\u0275listener("scroll", function ResidentLayoutComponent_Template_main_scroll_22_listener() {
          return ctx.onContentScroll();
        });
        \u0275\u0275element(24, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(25, ResidentLayoutComponent_Conditional_25_Template, 14, 10, "header", 19);
        \u0275\u0275conditionalCreate(26, ResidentLayoutComponent_Conditional_26_Template, 5, 5, "a", 20);
        \u0275\u0275conditionalCreate(27, ResidentLayoutComponent_Conditional_27_Template, 3, 2, "button", 21);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_9_0;
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isMobileMenuOpen ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isMobileMenuOpen ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("sidebar--open", ctx.isMobileMenuOpen);
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-label", "Close menu");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 10, ctx.currentTime, "h:mm:ss a"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 13, ctx.currentTime, "EEEE, MMMM d, y"));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.showTopRightUi ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_9_0 = ctx.fabLink) ? 26 : -1, tmp_9_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showBackToTop && !ctx.isMobileMenuOpen ? 27 : -1);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, LogoTiltDirective, AsyncPipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n.resident-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  position: relative;\n}\n.mobile-menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 16px;\n  left: 16px;\n  z-index: 1000;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--sidebar-border);\n  border-radius: var(--radius);\n  background: var(--sidebar-bg);\n  color: var(--sidebar-text);\n  box-shadow: var(--shadow);\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n@media (max-width: 1439px) {\n  .mobile-menu-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.mobile-menu-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n}\n.mobile-menu-toggle[_ngcontent-%COMP%]   .mobile-menu-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1;\n}\n.sidebar-backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1439px) {\n  .sidebar-backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n    z-index: 998;\n    animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  min-width: 0;\n  background: var(--sidebar-bg);\n  color: var(--sidebar-text);\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  min-height: 0;\n  position: sticky;\n  top: 0;\n  transition: transform 0.3s ease-out;\n}\n@media (max-width: 1439px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 999;\n    transform: translateX(-100%);\n    box-shadow: var(--shadow-lg);\n  }\n  .sidebar.sidebar--open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    z-index: 1001;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: min(290px, 85vw);\n  }\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1rem;\n  display: flex;\n}\n@media (max-height: 800px) {\n  .sidebar-header[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem;\n  }\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.sidebar-header[_ngcontent-%COMP%]   .logo-tilt[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 18px;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  will-change: transform;\n  cursor: pointer;\n}\n.sidebar-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  object-fit: contain;\n  flex-shrink: 0;\n  display: block;\n  backface-visibility: hidden;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 1439px) {\n  .sidebar-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n}\n@media (max-height: 800px) {\n  .sidebar-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 130px;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 140px;\n    height: 140px;\n  }\n}\n@media (max-width: 640px) and (max-height: 800px) {\n  .sidebar-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 115px;\n    height: 115px;\n  }\n}\n.sidebar-header[_ngcontent-%COMP%]   .logo-shine[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -20% auto -20% -45%;\n  width: 40%;\n  transform: skewX(-20deg) translateX(-180%);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.42) 42%,\n      rgba(255, 255, 255, 0.95) 50%,\n      rgba(255, 255, 255, 0.42) 58%,\n      rgba(255, 255, 255, 0) 100%);\n  filter: blur(0.6px);\n}\n.sidebar-header[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1439px) {\n  .sidebar-header[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%] {\n    display: flex;\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    width: 32px;\n    height: 32px;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    background: var(--sidebar-close-bg);\n    color: var(--sidebar-text-active);\n    border-radius: var(--radius);\n    cursor: pointer;\n    font-size: 1.25rem;\n    line-height: 1;\n    transition: background 0.2s;\n  }\n  .sidebar-header[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%]:hover {\n    background: var(--sidebar-close-hover-bg);\n  }\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  flex: 1 1 0;\n}\n@media (max-height: 800px) {\n  .sidebar-nav[_ngcontent-%COMP%] {\n    padding: 0.25rem 0;\n  }\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 1rem;\n  margin: 2px 0;\n  color: var(--sidebar-text);\n  text-decoration: none;\n  font-size: 0.9375rem;\n  border-radius: var(--radius);\n  position: relative;\n  overflow: hidden;\n  border-left: 3px solid transparent;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    border-left-color 0.2s ease,\n    padding-left 0.2s ease;\n}\n@media (max-height: 800px) {\n  .sidebar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding: 8px 0.875rem;\n    font-size: 0.875rem;\n    margin: 1.5px 0;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding: 12px 1rem;\n    font-size: 0.9375rem;\n  }\n}\n@media (max-width: 640px) and (max-height: 800px) {\n  .sidebar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding: 10px 0.9375rem;\n    font-size: 0.875rem;\n  }\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sidebar-active);\n  color: var(--sidebar-text-active);\n  border-left-color: var(--sidebar-text-active);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--sidebar-nav-hover-bg);\n  color: var(--sidebar-nav-hover-color);\n  border-left-color: var(--sidebar-active, #2563eb);\n  padding-left: calc(1rem - 3px);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--color-primary, #2563eb);\n  outline-offset: 2px;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-item--logout[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.9;\n  flex-shrink: 0;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n@media (max-height: 800px) {\n  .sidebar-nav[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1rem;\n    height: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar-nav[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.1rem;\n    height: 1.1rem;\n  }\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid var(--sidebar-border);\n  flex-shrink: 0;\n}\n@media (max-height: 800px) {\n  .sidebar-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n}\n.sidebar-footer[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--sidebar-text);\n  padding: 0.75rem 1rem;\n}\n@media (max-height: 800px) {\n  .sidebar-footer[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.875rem;\n  }\n}\n.sidebar-footer[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n  background: var(--sidebar-footer-bg);\n  border-radius: var(--radius);\n  width: 100%;\n  box-sizing: border-box;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .time-display__time[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--sidebar-text-active);\n  margin-bottom: 0.25rem;\n  font-variant-numeric: tabular-nums;\n}\n@media (max-height: 800px) {\n  .sidebar-footer[_ngcontent-%COMP%]   .time-display__time[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    margin-bottom: 0.125rem;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar-footer[_ngcontent-%COMP%]   .time-display__time[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n}\n.sidebar-footer[_ngcontent-%COMP%]   .time-display__date[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--sidebar-text);\n  opacity: 0.9;\n}\n@media (max-height: 800px) {\n  .sidebar-footer[_ngcontent-%COMP%]   .time-display__date[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar-footer[_ngcontent-%COMP%]   .time-display__date[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n  width: 100%;\n}\n@media (max-width: 1439px) {\n  .main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  padding: 0 1.25rem 1.25rem;\n  padding-top: 80px;\n  overflow: auto;\n}\n@media (max-width: 640px) {\n  .content[_ngcontent-%COMP%] {\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n  }\n  .content[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n}\n.content[_ngcontent-%COMP%]     router-outlet + * {\n  animation: _ngcontent-%COMP%_contentFadeIn 0.3s ease-out;\n}\n@media (max-width: 1439px) {\n  .content[_ngcontent-%COMP%] {\n    padding-top: 80px;\n  }\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 0 1rem 1rem;\n    padding-top: 80px;\n  }\n}\n@media (max-width: 640px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 0 0.75rem 0.75rem;\n    padding-top: 76px;\n  }\n}\n@keyframes _ngcontent-%COMP%_contentFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.top-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 72px;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-bg-card);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  padding-left: 24px;\n  padding-right: 24px;\n  transition:\n    transform 0.3s ease-out,\n    filter 0.3s ease-out,\n    opacity 0.3s ease-out;\n}\n@media (min-width: 1440px) {\n  .top-bar[_ngcontent-%COMP%] {\n    left: 280px;\n  }\n}\n.top-bar[_ngcontent-%COMP%] {\n}\n@media (max-width: 1439px) {\n  .top-bar[_ngcontent-%COMP%] {\n    padding-left: 72px;\n  }\n  .top-bar.top-bar--sidebar-open[_ngcontent-%COMP%] {\n    transform: none;\n    opacity: 0.75;\n    filter: blur(2px);\n    -webkit-filter: blur(2px);\n    pointer-events: none;\n    z-index: 999;\n  }\n}\n@media (max-width: 640px) {\n  .top-bar[_ngcontent-%COMP%] {\n    height: 68px;\n    padding-left: 72px;\n    padding-right: 20px;\n  }\n  .top-bar.top-bar--sidebar-open[_ngcontent-%COMP%] {\n    transform: none;\n    opacity: 0.75;\n    filter: blur(2px);\n    -webkit-filter: blur(2px);\n    pointer-events: none;\n    z-index: 999;\n  }\n}\n.top-bar[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%], \n.top-bar__bell-slot[_ngcontent-%COMP%], \n.top-bar[_ngcontent-%COMP%]   .profile-menu[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.top-bar__title[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-right: auto;\n  font-family: var(--font-family-title);\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--color-text);\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n  min-width: 0;\n}\n@media (max-width: 768px) {\n  .top-bar__title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .top-bar__title[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    white-space: normal;\n    overflow: visible;\n    line-height: 1.25;\n    max-height: 2.5em;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n}\n.top-bar__bell-slot[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  flex-shrink: 0;\n  position: relative;\n  top: 1px;\n}\n@media (max-width: 640px) {\n  .top-bar__bell-slot[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n.top-bar[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%], \n.top-bar[_ngcontent-%COMP%]   .profile-menu[_ngcontent-%COMP%] {\n  position: relative;\n  top: auto;\n  right: auto;\n  left: auto;\n}\nbutton.theme-toggle[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.top-bar__icon-button[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  min-height: 44px;\n  border-radius: 50%;\n  border: 1px solid var(--color-border);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background 0.2s ease,\n    box-shadow 0.25s ease,\n    transform 0.2s ease,\n    border-color 0.2s ease;\n}\n.top-bar__icon-button[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  box-shadow: var(--shadow-lg), 0 0 0 2px var(--color-border);\n  transform: scale(1.06);\n  border-color: var(--color-text-muted, rgba(0, 0, 0, 0.2));\n}\n.top-bar__icon-button[_ngcontent-%COMP%]:hover   .theme-toggle__icon[_ngcontent-%COMP%] {\n  transform: rotate(12deg);\n}\n.top-bar__icon-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  box-shadow: var(--shadow);\n}\n@media (max-width: 640px) {\n  .top-bar__icon-button[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    min-width: 40px;\n    min-height: 40px;\n  }\n}\nbody.swal2-shown[_nghost-%COMP%]   .top-bar__icon-button[_ngcontent-%COMP%], body.swal2-shown   [_nghost-%COMP%]   .top-bar__icon-button[_ngcontent-%COMP%] {\n  color: var(--color-text-muted) !important;\n}\n.top-bar__bell-slot.top-bar__icon-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  cursor: default;\n}\n.top-bar__bell-slot.top-bar__icon-button[_ngcontent-%COMP%]:hover, \n.top-bar__bell-slot.top-bar__icon-button[_ngcontent-%COMP%]:active {\n  background: transparent;\n  box-shadow: none;\n  transform: none;\n  border-color: transparent;\n}\n.theme-toggle__icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  transition: transform 0.25s ease;\n}\n.profile-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.profile-menu__trigger[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.profile-menu__avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: contain;\n  object-position: center center;\n  display: block;\n}\n.profile-menu__avatar-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-border, #e5e7eb);\n  font-size: 1.1rem;\n}\n.profile-menu__icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .profile-menu__icon[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n}\n.profile-menu__dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow-lg);\n  padding: 0.5rem 0;\n  animation: _ngcontent-%COMP%_profileDropdownIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_profileDropdownIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.profile-menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 1rem;\n  border: none;\n  background: none;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  font-family: inherit;\n  text-decoration: none;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.3s ease, opacity 0.2s ease;\n}\n.profile-menu__item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      to right,\n      rgba(37, 99, 235, 0.14) 0%,\n      rgba(37, 99, 235, 0.05) 12px,\n      transparent 36px);\n}\n.profile-menu__item[_ngcontent-%COMP%]:active:hover {\n  background:\n    linear-gradient(\n      to right,\n      rgba(37, 99, 235, 0.2) 0%,\n      rgba(37, 99, 235, 0.07) 12px,\n      transparent 36px);\n}\n.profile-menu__item--logout[_ngcontent-%COMP%] {\n  color: var(--color-error, #dc2626);\n}\n.profile-menu__item--logout[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      to right,\n      rgba(220, 38, 38, 0.12) 0%,\n      rgba(220, 38, 38, 0.04) 12px,\n      transparent 36px);\n  color: var(--color-error, #dc2626);\n}\n.profile-menu__item--logout[_ngcontent-%COMP%]:active:hover {\n  background:\n    linear-gradient(\n      to right,\n      rgba(220, 38, 38, 0.18) 0%,\n      rgba(220, 38, 38, 0.06) 12px,\n      transparent 36px);\n}\n.profile-menu__item-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.9;\n  flex-shrink: 0;\n  transition: opacity 0.25s ease;\n}\n.profile-menu__item[_ngcontent-%COMP%]:hover   .profile-menu__item-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n  z-index: 999;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 1px solid var(--color-border);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, transform 0.05s;\n}\n.back-to-top[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n}\n.back-to-top[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.back-to-top.back-to-top--above-fab[_ngcontent-%COMP%] {\n  bottom: 88px;\n}\n@media (max-width: 640px) {\n  .back-to-top[_ngcontent-%COMP%] {\n    right: 16px;\n    bottom: 16px;\n    width: 40px;\n    height: 40px;\n  }\n  .back-to-top.back-to-top--above-fab[_ngcontent-%COMP%] {\n    bottom: 80px;\n  }\n}\n.back-to-top__icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n@media (max-width: 640px) {\n  .back-to-top__icon[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n}\n.fab[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n  z-index: 1000;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  border-radius: 999px;\n  border: none;\n  outline: none;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #3b82f6);\n  color: #fff;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  text-decoration: none;\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  transition:\n    transform 0.15s ease-out,\n    box-shadow 0.15s ease-out,\n    background 0.15s ease-out,\n    filter 0.15s ease-out;\n}\n.fab[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.03);\n  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.35);\n  filter: brightness(1.05);\n}\n.fab[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n  box-shadow: var(--shadow);\n  filter: brightness(0.98);\n}\n@media (max-width: 640px) {\n  .fab[_ngcontent-%COMP%] {\n    right: 16px;\n    bottom: 16px;\n    padding: 0.65rem 1rem;\n    font-size: 0.875rem;\n  }\n}\n.fab--sidebar-open[_ngcontent-%COMP%] {\n  z-index: 900;\n  pointer-events: none;\n  opacity: 0.35;\n  transform: translateY(6px) scale(0.96);\n  filter: blur(2px);\n}\n.fab__icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.12);\n  font-size: 1.2rem;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.fab__label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=resident-layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResidentLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-resident-layout", standalone: true, imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DatePipe, LogoTiltDirective], template: `<div class="resident-layout">\r
  @if (!isMobileMenuOpen) {\r
    <button \r
      class="mobile-menu-toggle" \r
      (click)="toggleMobileMenu()"\r
      [attr.aria-label]="'Toggle menu'"\r
      [attr.aria-expanded]="isMobileMenuOpen"\r
      type="button"\r
    >\r
      <span class="mobile-menu-icon">\u2630</span>\r
    </button>\r
  }\r
  \r
  @if (isMobileMenuOpen) {\r
    <div class="sidebar-backdrop" (click)="closeMobileMenu()"></div>\r
  }\r
  \r
  <aside class="sidebar" [class.sidebar--open]="isMobileMenuOpen">\r
    <div class="sidebar-header">\r
      <div class="logo-tilt" appLogoTilt>\r
        <img class="logo" src="/assets/images/FOR-DASHBOARD.png" alt="Logo" loading="eager" decoding="async" />\r
        <span class="logo-shine" aria-hidden="true"></span>\r
      </div>\r
      <button \r
        class="sidebar-close" \r
        (click)="closeMobileMenu()"\r
        [attr.aria-label]="'Close menu'"\r
        type="button"\r
      >\r
        \u2715\r
      </button>\r
    </div>\r
    <nav class="sidebar-nav">\r
      @for (item of navItems; track item.path) {\r
        <a\r
          [routerLink]="item.path"\r
          routerLinkActive="active"\r
          [routerLinkActiveOptions]="{ exact: item.path === '/resident/dashboard' }"\r
          class="nav-item"\r
          (click)="closeMobileMenu()"\r
        >\r
          <span class="nav-icon">\r
            @switch (item.icon) {\r
              @case ('dashboard') {\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true">\r
                  <rect x="4" y="4" width="7" height="7" rx="1" />\r
                  <rect x="13" y="4" width="7" height="7" rx="1" />\r
                  <rect x="4" y="13" width="7" height="7" rx="1" />\r
                  <rect x="13" y="13" width="7" height="7" rx="1" />\r
                </svg>\r
              }\r
              @case ('profile') {\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\r
                  <circle cx="12" cy="8" r="3.5" />\r
                  <path d="M6 18c0-2.5 2.2-4.5 6-4.5s6 2 6 4.5" />\r
                </svg>\r
              }\r
              @case ('certificate') {\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\r
                  <rect x="6" y="4" width="12" height="16" rx="1.5" />\r
                  <path d="M9 8h6M9 11h5" />\r
                  <path d="M11 15.5 12 17l1-1.5 1 1-1 2.5-1-1-1 1-1-2.5z" />\r
                </svg>\r
              }\r
              @case ('reports') {\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\r
                  <path d="M6 18v-6M11 18V8M16 18v-9" />\r
                </svg>\r
              }\r
              @case ('requests') {\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\r
                  <rect x="6" y="4" width="12" height="16" rx="1.5" />\r
                  <path d="M9 9h6M9 13h4" />\r
                </svg>\r
              }\r
              @default {\r
                <span aria-hidden="true">\u2022</span>\r
              }\r
            }\r
          </span>\r
          <span>{{ item.label }}</span>\r
        </a>\r
      }\r
    </nav>\r
    <div class="sidebar-footer">\r
      <div class="time-display">\r
        <div class="time-display__time">{{ currentTime | date:'h:mm:ss a' }}</div>\r
        <div class="time-display__date">{{ currentTime | date:'EEEE, MMMM d, y' }}</div>\r
      </div>\r
    </div>\r
  </aside>\r
  <div class="main">\r
    <main class="content" #contentScroll (scroll)="onContentScroll()">\r
      <router-outlet></router-outlet>\r
    </main>\r
  </div>\r
\r
  @if (showTopRightUi) {\r
    <header class="top-bar" [class.top-bar--sidebar-open]="isMobileMenuOpen" aria-label="Top bar">\r
      <h1 class="top-bar__title">Barangay Resident Information System</h1>\r
      <button\r
        type="button"\r
        class="theme-toggle top-bar__icon-button"\r
        [attr.aria-label]="theme.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"\r
        (click)="theme.toggleTheme()"\r
      >\r
        @if (theme.isDark()) {\r
          <svg class="theme-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
            <circle cx="12" cy="12" r="5"/>\r
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>\r
          </svg>\r
        } @else {\r
          <svg class="theme-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>\r
          </svg>\r
        }\r
      </button>\r
      <div class="top-bar__bell-slot top-bar__icon-button" aria-hidden="true"></div>\r
      <div class="profile-menu" #profileMenu>\r
        <button\r
          type="button"\r
          class="profile-menu__trigger top-bar__icon-button"\r
          [attr.aria-label]="'Profile menu'"\r
          [attr.aria-expanded]="isProfileMenuOpen"\r
          (click)="toggleProfileMenu()"\r
        >\r
          @if (auth.profilePicture$ | async; as profilePic) {\r
            <img [src]="profilePic" alt="" class="profile-menu__avatar" />\r
          } @else {\r
            <span class="profile-menu__avatar profile-menu__avatar-placeholder" aria-hidden="true">\u{1F464}</span>\r
          }\r
        </button>\r
        @if (isProfileMenuOpen) {\r
          <div class="profile-menu__dropdown">\r
            <a [routerLink]="['/resident/settings']" class="profile-menu__item" (click)="closeProfileMenu()">\r
              <span class="profile-menu__item-icon">\u2699</span>\r
              Settings\r
            </a>\r
            <button type="button" class="profile-menu__item profile-menu__item--logout" (click)="logout(); closeProfileMenu()">\r
              <span class="profile-menu__item-icon">\u238B</span>\r
              Logout\r
            </button>\r
          </div>\r
        }\r
      </div>\r
    </header>\r
  }\r
\r
  @if (fabLink; as fab) {\r
    <a\r
      [routerLink]="fab.link"\r
      class="fab"\r
      [class.fab--sidebar-open]="isMobileMenuOpen"\r
      [attr.aria-label]="fab.label"\r
    >\r
      <span class="fab__icon">+</span>\r
      <span class="fab__label">{{ fab.label }}</span>\r
    </a>\r
  }\r
\r
  @if (showBackToTop && !isMobileMenuOpen) {\r
    <button\r
      type="button"\r
      class="back-to-top"\r
      [class.back-to-top--above-fab]="!!fabLink"\r
      (click)="scrollToTop()"\r
      aria-label="Back to top"\r
    >\r
      <svg class="back-to-top__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
        <path d="M18 15l-6-6-6 6"/>\r
      </svg>\r
    </button>\r
  }\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/layouts/resident-layout/resident-layout.component.scss */\n.resident-layout {\n  display: flex;\n  min-height: 100vh;\n  position: relative;\n}\n.mobile-menu-toggle {\n  display: none;\n  position: fixed;\n  top: 16px;\n  left: 16px;\n  z-index: 1000;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--sidebar-border);\n  border-radius: var(--radius);\n  background: var(--sidebar-bg);\n  color: var(--sidebar-text);\n  box-shadow: var(--shadow);\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n@media (max-width: 1439px) {\n  .mobile-menu-toggle {\n    display: flex;\n  }\n}\n.mobile-menu-toggle:hover {\n  background: var(--color-bg);\n}\n.mobile-menu-toggle .mobile-menu-icon {\n  font-size: 1.25rem;\n  line-height: 1;\n}\n.sidebar-backdrop {\n  display: none;\n}\n@media (max-width: 1439px) {\n  .sidebar-backdrop {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n    z-index: 998;\n    animation: fadeIn 0.2s ease-out;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.sidebar {\n  width: 280px;\n  min-width: 0;\n  background: var(--sidebar-bg);\n  color: var(--sidebar-text);\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  min-height: 0;\n  position: sticky;\n  top: 0;\n  transition: transform 0.3s ease-out;\n}\n@media (max-width: 1439px) {\n  .sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 999;\n    transform: translateX(-100%);\n    box-shadow: var(--shadow-lg);\n  }\n  .sidebar.sidebar--open {\n    transform: translateX(0);\n    z-index: 1001;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar {\n    width: min(290px, 85vw);\n  }\n}\n.sidebar-header {\n  padding: 1.5rem 1rem;\n  display: flex;\n}\n@media (max-height: 800px) {\n  .sidebar-header {\n    padding: 1rem 0.75rem;\n  }\n}\n.sidebar-header {\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.sidebar-header .logo-tilt {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 18px;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  will-change: transform;\n  cursor: pointer;\n}\n.sidebar-header .logo {\n  width: 200px;\n  height: 200px;\n  object-fit: contain;\n  flex-shrink: 0;\n  display: block;\n  backface-visibility: hidden;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 1439px) {\n  .sidebar-header .logo {\n    width: 150px;\n    height: 150px;\n  }\n}\n@media (max-height: 800px) {\n  .sidebar-header .logo {\n    width: 130px;\n    height: 130px;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar-header .logo {\n    width: 140px;\n    height: 140px;\n  }\n}\n@media (max-width: 640px) and (max-height: 800px) {\n  .sidebar-header .logo {\n    width: 115px;\n    height: 115px;\n  }\n}\n.sidebar-header .logo-shine {\n  position: absolute;\n  inset: -20% auto -20% -45%;\n  width: 40%;\n  transform: skewX(-20deg) translateX(-180%);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.42) 42%,\n      rgba(255, 255, 255, 0.95) 50%,\n      rgba(255, 255, 255, 0.42) 58%,\n      rgba(255, 255, 255, 0) 100%);\n  filter: blur(0.6px);\n}\n.sidebar-header .sidebar-close {\n  display: none;\n}\n@media (max-width: 1439px) {\n  .sidebar-header .sidebar-close {\n    display: flex;\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    width: 32px;\n    height: 32px;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    background: var(--sidebar-close-bg);\n    color: var(--sidebar-text-active);\n    border-radius: var(--radius);\n    cursor: pointer;\n    font-size: 1.25rem;\n    line-height: 1;\n    transition: background 0.2s;\n  }\n  .sidebar-header .sidebar-close:hover {\n    background: var(--sidebar-close-hover-bg);\n  }\n}\n.sidebar-nav {\n  padding: 0.5rem 0;\n  flex: 1 1 0;\n}\n@media (max-height: 800px) {\n  .sidebar-nav {\n    padding: 0.25rem 0;\n  }\n}\n.sidebar-nav {\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.sidebar-nav::-webkit-scrollbar {\n  display: none;\n}\n.sidebar-nav .nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 1rem;\n  margin: 2px 0;\n  color: var(--sidebar-text);\n  text-decoration: none;\n  font-size: 0.9375rem;\n  border-radius: var(--radius);\n  position: relative;\n  overflow: hidden;\n  border-left: 3px solid transparent;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    border-left-color 0.2s ease,\n    padding-left 0.2s ease;\n}\n@media (max-height: 800px) {\n  .sidebar-nav .nav-item {\n    padding: 8px 0.875rem;\n    font-size: 0.875rem;\n    margin: 1.5px 0;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar-nav .nav-item {\n    padding: 12px 1rem;\n    font-size: 0.9375rem;\n  }\n}\n@media (max-width: 640px) and (max-height: 800px) {\n  .sidebar-nav .nav-item {\n    padding: 10px 0.9375rem;\n    font-size: 0.875rem;\n  }\n}\n.sidebar-nav .nav-item.active {\n  background: var(--sidebar-active);\n  color: var(--sidebar-text-active);\n  border-left-color: var(--sidebar-text-active);\n}\n.sidebar-nav .nav-item:hover:not(.active) {\n  background: var(--sidebar-nav-hover-bg);\n  color: var(--sidebar-nav-hover-color);\n  border-left-color: var(--sidebar-active, #2563eb);\n  padding-left: calc(1rem - 3px);\n}\n.sidebar-nav .nav-item:focus-visible {\n  outline: 2px solid var(--color-primary, #2563eb);\n  outline-offset: 2px;\n}\n.sidebar-nav .nav-item--logout {\n  cursor: pointer;\n}\n.sidebar-nav .nav-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.9;\n  flex-shrink: 0;\n}\n.sidebar-nav .nav-icon svg {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n@media (max-height: 800px) {\n  .sidebar-nav .nav-icon svg {\n    width: 1rem;\n    height: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar-nav .nav-icon svg {\n    width: 1.1rem;\n    height: 1.1rem;\n  }\n}\n.sidebar-footer {\n  padding: 1rem;\n  border-top: 1px solid var(--sidebar-border);\n  flex-shrink: 0;\n}\n@media (max-height: 800px) {\n  .sidebar-footer {\n    padding: 0.75rem;\n  }\n}\n.sidebar-footer .time-display {\n  text-align: center;\n  color: var(--sidebar-text);\n  padding: 0.75rem 1rem;\n}\n@media (max-height: 800px) {\n  .sidebar-footer .time-display {\n    padding: 0.5rem 0.875rem;\n  }\n}\n.sidebar-footer .time-display {\n  background: var(--sidebar-footer-bg);\n  border-radius: var(--radius);\n  width: 100%;\n  box-sizing: border-box;\n}\n.sidebar-footer .time-display__time {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--sidebar-text-active);\n  margin-bottom: 0.25rem;\n  font-variant-numeric: tabular-nums;\n}\n@media (max-height: 800px) {\n  .sidebar-footer .time-display__time {\n    font-size: 1.125rem;\n    margin-bottom: 0.125rem;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar-footer .time-display__time {\n    font-size: 1.35rem;\n  }\n}\n.sidebar-footer .time-display__date {\n  font-size: 0.875rem;\n  color: var(--sidebar-text);\n  opacity: 0.9;\n}\n@media (max-height: 800px) {\n  .sidebar-footer .time-display__date {\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 640px) {\n  .sidebar-footer .time-display__date {\n    font-size: 0.875rem;\n  }\n}\n.main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n  width: 100%;\n}\n@media (max-width: 1439px) {\n  .main {\n    width: 100%;\n  }\n}\n.content {\n  flex: 1;\n  position: relative;\n  padding: 0 1.25rem 1.25rem;\n  padding-top: 80px;\n  overflow: auto;\n}\n@media (max-width: 640px) {\n  .content {\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n  }\n  .content::-webkit-scrollbar {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n}\n.content ::ng-deep router-outlet + * {\n  animation: contentFadeIn 0.3s ease-out;\n}\n@media (max-width: 1439px) {\n  .content {\n    padding-top: 80px;\n  }\n}\n@media (max-width: 768px) {\n  .content {\n    padding: 0 1rem 1rem;\n    padding-top: 80px;\n  }\n}\n@media (max-width: 640px) {\n  .content {\n    padding: 0 0.75rem 0.75rem;\n    padding-top: 76px;\n  }\n}\n@keyframes contentFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.top-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 72px;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-bg-card);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  padding-left: 24px;\n  padding-right: 24px;\n  transition:\n    transform 0.3s ease-out,\n    filter 0.3s ease-out,\n    opacity 0.3s ease-out;\n}\n@media (min-width: 1440px) {\n  .top-bar {\n    left: 280px;\n  }\n}\n.top-bar {\n}\n@media (max-width: 1439px) {\n  .top-bar {\n    padding-left: 72px;\n  }\n  .top-bar.top-bar--sidebar-open {\n    transform: none;\n    opacity: 0.75;\n    filter: blur(2px);\n    -webkit-filter: blur(2px);\n    pointer-events: none;\n    z-index: 999;\n  }\n}\n@media (max-width: 640px) {\n  .top-bar {\n    height: 68px;\n    padding-left: 72px;\n    padding-right: 20px;\n  }\n  .top-bar.top-bar--sidebar-open {\n    transform: none;\n    opacity: 0.75;\n    filter: blur(2px);\n    -webkit-filter: blur(2px);\n    pointer-events: none;\n    z-index: 999;\n  }\n}\n.top-bar .theme-toggle,\n.top-bar__bell-slot,\n.top-bar .profile-menu {\n  flex: 0 0 auto;\n}\n.top-bar__title {\n  margin: 0;\n  margin-right: auto;\n  font-family: var(--font-family-title);\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--color-text);\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n  min-width: 0;\n}\n@media (max-width: 768px) {\n  .top-bar__title {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .top-bar__title {\n    font-size: 0.875rem;\n    white-space: normal;\n    overflow: visible;\n    line-height: 1.25;\n    max-height: 2.5em;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n}\n.top-bar__bell-slot {\n  width: 44px;\n  height: 44px;\n  flex-shrink: 0;\n  position: relative;\n  top: 1px;\n}\n@media (max-width: 640px) {\n  .top-bar__bell-slot {\n    width: 40px;\n    height: 40px;\n  }\n}\n.top-bar .theme-toggle,\n.top-bar .profile-menu {\n  position: relative;\n  top: auto;\n  right: auto;\n  left: auto;\n}\nbutton.theme-toggle {\n  padding: 0;\n  overflow: hidden;\n}\n.top-bar__icon-button {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  min-height: 44px;\n  border-radius: 50%;\n  border: 1px solid var(--color-border);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background 0.2s ease,\n    box-shadow 0.25s ease,\n    transform 0.2s ease,\n    border-color 0.2s ease;\n}\n.top-bar__icon-button:hover {\n  background: var(--color-bg);\n  box-shadow: var(--shadow-lg), 0 0 0 2px var(--color-border);\n  transform: scale(1.06);\n  border-color: var(--color-text-muted, rgba(0, 0, 0, 0.2));\n}\n.top-bar__icon-button:hover .theme-toggle__icon {\n  transform: rotate(12deg);\n}\n.top-bar__icon-button:active {\n  transform: scale(0.97);\n  box-shadow: var(--shadow);\n}\n@media (max-width: 640px) {\n  .top-bar__icon-button {\n    width: 40px;\n    height: 40px;\n    min-width: 40px;\n    min-height: 40px;\n  }\n}\n:host-context(body.swal2-shown) .top-bar__icon-button {\n  color: var(--color-text-muted) !important;\n}\n.top-bar__bell-slot.top-bar__icon-button {\n  background: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  cursor: default;\n}\n.top-bar__bell-slot.top-bar__icon-button:hover,\n.top-bar__bell-slot.top-bar__icon-button:active {\n  background: transparent;\n  box-shadow: none;\n  transform: none;\n  border-color: transparent;\n}\n.theme-toggle__icon {\n  width: 22px;\n  height: 22px;\n  transition: transform 0.25s ease;\n}\n.profile-menu {\n  position: relative;\n}\n.profile-menu__trigger {\n  position: relative;\n  overflow: hidden;\n}\n.profile-menu__avatar {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: contain;\n  object-position: center center;\n  display: block;\n}\n.profile-menu__avatar-placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-border, #e5e7eb);\n  font-size: 1.1rem;\n}\n.profile-menu__icon {\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .profile-menu__icon {\n    width: 20px;\n    height: 20px;\n  }\n}\n.profile-menu__dropdown {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow-lg);\n  padding: 0.5rem 0;\n  animation: profileDropdownIn 0.2s ease-out;\n}\n@keyframes profileDropdownIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.profile-menu__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 1rem;\n  border: none;\n  background: none;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  font-family: inherit;\n  text-decoration: none;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.3s ease, opacity 0.2s ease;\n}\n.profile-menu__item:hover {\n  background:\n    linear-gradient(\n      to right,\n      rgba(37, 99, 235, 0.14) 0%,\n      rgba(37, 99, 235, 0.05) 12px,\n      transparent 36px);\n}\n.profile-menu__item:active:hover {\n  background:\n    linear-gradient(\n      to right,\n      rgba(37, 99, 235, 0.2) 0%,\n      rgba(37, 99, 235, 0.07) 12px,\n      transparent 36px);\n}\n.profile-menu__item--logout {\n  color: var(--color-error, #dc2626);\n}\n.profile-menu__item--logout:hover {\n  background:\n    linear-gradient(\n      to right,\n      rgba(220, 38, 38, 0.12) 0%,\n      rgba(220, 38, 38, 0.04) 12px,\n      transparent 36px);\n  color: var(--color-error, #dc2626);\n}\n.profile-menu__item--logout:active:hover {\n  background:\n    linear-gradient(\n      to right,\n      rgba(220, 38, 38, 0.18) 0%,\n      rgba(220, 38, 38, 0.06) 12px,\n      transparent 36px);\n}\n.profile-menu__item-icon {\n  font-size: 1rem;\n  opacity: 0.9;\n  flex-shrink: 0;\n  transition: opacity 0.25s ease;\n}\n.profile-menu__item:hover .profile-menu__item-icon {\n  opacity: 1;\n}\n.back-to-top {\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n  z-index: 999;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 1px solid var(--color-border);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, transform 0.05s;\n}\n.back-to-top:hover {\n  background: var(--color-bg);\n}\n.back-to-top:active {\n  transform: translateY(1px);\n}\n.back-to-top.back-to-top--above-fab {\n  bottom: 88px;\n}\n@media (max-width: 640px) {\n  .back-to-top {\n    right: 16px;\n    bottom: 16px;\n    width: 40px;\n    height: 40px;\n  }\n  .back-to-top.back-to-top--above-fab {\n    bottom: 80px;\n  }\n}\n.back-to-top__icon {\n  width: 22px;\n  height: 22px;\n}\n@media (max-width: 640px) {\n  .back-to-top__icon {\n    width: 20px;\n    height: 20px;\n  }\n}\n.fab {\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n  z-index: 1000;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  border-radius: 999px;\n  border: none;\n  outline: none;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #3b82f6);\n  color: #fff;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  text-decoration: none;\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  transition:\n    transform 0.15s ease-out,\n    box-shadow 0.15s ease-out,\n    background 0.15s ease-out,\n    filter 0.15s ease-out;\n}\n.fab:hover {\n  transform: translateY(-2px) scale(1.03);\n  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.35);\n  filter: brightness(1.05);\n}\n.fab:active {\n  transform: translateY(0) scale(0.98);\n  box-shadow: var(--shadow);\n  filter: brightness(0.98);\n}\n@media (max-width: 640px) {\n  .fab {\n    right: 16px;\n    bottom: 16px;\n    padding: 0.65rem 1rem;\n    font-size: 0.875rem;\n  }\n}\n.fab--sidebar-open {\n  z-index: 900;\n  pointer-events: none;\n  opacity: 0.35;\n  transform: translateY(6px) scale(0.96);\n  filter: blur(2px);\n}\n.fab__icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.12);\n  font-size: 1.2rem;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.fab__label {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=resident-layout.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: ThemeService }, { type: Router }, { type: AlertService }], { profileMenuRef: [{
    type: ViewChild,
    args: ["profileMenu"]
  }], contentScrollRef: [{
    type: ViewChild,
    args: ["contentScroll"]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResidentLayoutComponent, { className: "ResidentLayoutComponent", filePath: "src/app/layouts/resident-layout/resident-layout.component.ts", lineNumber: 18 });
})();
export {
  ResidentLayoutComponent
};
//# sourceMappingURL=chunk-IRUFIBYG.js.map
