import {
  MathUtils,
  Vector2,
  gsapWithCSS
} from "./chunk-FVRIIZHU.js";
import {
  Directive,
  ElementRef,
  HostListener,
  Injectable,
  NgZone,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-TUEAJAVR.js";

// src/app/shared/directives/logo-tilt.directive.ts
var LogoTiltDirective = class _LogoTiltDirective {
  constructor(elementRef, ngZone) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.maxTilt = 9;
    this.hoverScale = 1.03;
    this.isHovering = false;
  }
  ngOnInit() {
    const el = this.elementRef.nativeElement;
    gsapWithCSS.set(el, {
      transformPerspective: 900,
      transformStyle: "preserve-3d",
      transformOrigin: "center center",
      rotateX: 0,
      rotateY: 0,
      z: 0
    });
  }
  ngOnDestroy() {
    this.shineTween?.kill();
    gsapWithCSS.killTweensOf(this.elementRef.nativeElement);
  }
  onMouseEnter() {
    this.isHovering = true;
    const el = this.elementRef.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      gsapWithCSS.to(el, {
        duration: 0.28,
        scale: this.hoverScale,
        z: 18,
        ease: "power3.out",
        overwrite: true
      });
      this.playShine();
    });
  }
  onMouseMove(event) {
    if (!this.isHovering)
      return;
    const el = this.elementRef.nativeElement;
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height)
      return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normalized = new Vector2((event.clientX - centerX) / (rect.width / 2), (event.clientY - centerY) / (rect.height / 2));
    const rotateY = MathUtils.clamp(normalized.x * this.maxTilt, -this.maxTilt, this.maxTilt);
    const rotateX = MathUtils.clamp(-normalized.y * this.maxTilt, -this.maxTilt, this.maxTilt);
    this.ngZone.runOutsideAngular(() => {
      gsapWithCSS.to(el, {
        duration: 0.2,
        rotateX,
        rotateY,
        ease: "power2.out",
        overwrite: true
      });
    });
  }
  onMouseLeave() {
    this.isHovering = false;
    const el = this.elementRef.nativeElement;
    const shine = el.querySelector(".logo-shine");
    this.ngZone.runOutsideAngular(() => {
      gsapWithCSS.to(el, {
        duration: 0.45,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        z: 0,
        ease: "power3.out",
        clearProps: "willChange"
      });
      if (shine) {
        gsapWithCSS.to(shine, {
          duration: 0.2,
          opacity: 0,
          xPercent: 180,
          ease: "power1.out",
          overwrite: true
        });
      }
    });
  }
  playShine() {
    const shine = this.elementRef.nativeElement.querySelector(".logo-shine");
    if (!shine)
      return;
    this.shineTween?.kill();
    this.shineTween = gsapWithCSS.fromTo(shine, { xPercent: -180, opacity: 0 }, {
      xPercent: 180,
      opacity: 0.82,
      duration: 0.85,
      ease: "power2.out",
      onComplete: () => {
        gsapWithCSS.to(shine, { opacity: 0, duration: 0.32, ease: "power1.out" });
      }
    });
  }
  static {
    this.\u0275fac = function LogoTiltDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LogoTiltDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _LogoTiltDirective, selectors: [["", "appLogoTilt", ""]], hostBindings: function LogoTiltDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseenter", function LogoTiltDirective_mouseenter_HostBindingHandler() {
          return ctx.onMouseEnter();
        })("mousemove", function LogoTiltDirective_mousemove_HostBindingHandler($event) {
          return ctx.onMouseMove($event);
        })("mouseleave", function LogoTiltDirective_mouseleave_HostBindingHandler() {
          return ctx.onMouseLeave();
        });
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogoTiltDirective, [{
    type: Directive,
    args: [{
      selector: "[appLogoTilt]",
      standalone: true
    }]
  }], () => [{ type: ElementRef }, { type: NgZone }], { onMouseEnter: [{
    type: HostListener,
    args: ["mouseenter"]
  }], onMouseMove: [{
    type: HostListener,
    args: ["mousemove", ["$event"]]
  }], onMouseLeave: [{
    type: HostListener,
    args: ["mouseleave"]
  }] });
})();

// src/app/services/theme.service.ts
var STORAGE_KEY = "brims-theme";
var ThemeService = class _ThemeService {
  constructor() {
    this.themeSignal = signal(this.getStoredOrSystemTheme(), ...ngDevMode ? [{ debugName: "themeSignal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isBootstrapping = true;
    this.theme = this.themeSignal.asReadonly();
    this.isDark = computed(() => this.themeSignal() === "dark", ...ngDevMode ? [{ debugName: "isDark" }] : (
      /* istanbul ignore next */
      []
    ));
    this.applyTheme(this.themeSignal());
    queueMicrotask(() => {
      this.isBootstrapping = false;
    });
  }
  getTheme() {
    return this.themeSignal();
  }
  setTheme(theme) {
    this.themeSignal.set(theme);
    localStorage.setItem(STORAGE_KEY, theme);
    this.applyTheme(theme);
  }
  toggleTheme() {
    this.setTheme(this.themeSignal() === "dark" ? "light" : "dark");
  }
  getStoredOrSystemTheme() {
    if (typeof window === "undefined")
      return "light";
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light")
      return stored;
    return "light";
  }
  applyTheme(theme) {
    if (typeof document === "undefined")
      return;
    const root = document.documentElement;
    if (root.getAttribute("data-theme") === theme)
      return;
    const commit = () => root.setAttribute("data-theme", theme);
    const prefersReduced = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (this.isBootstrapping || prefersReduced) {
      commit();
      return;
    }
    const doc = document;
    if (typeof doc.startViewTransition === "function") {
      doc.startViewTransition(commit);
      return;
    }
    root.classList.add("theme-transition-active");
    commit();
    const raw = getComputedStyle(root).getPropertyValue("--theme-transition-duration").trim();
    const seconds = parseFloat(raw) || 0.32;
    const ms = Math.max(0, Math.round(seconds * 1e3)) + 40;
    window.setTimeout(() => root.classList.remove("theme-transition-active"), ms);
  }
  static {
    this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  LogoTiltDirective,
  ThemeService
};
//# sourceMappingURL=chunk-KXF3WXGS.js.map
