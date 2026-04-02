import { Directive, ElementRef, HostListener, NgZone, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import * as THREE from 'three';

@Directive({
  selector: '[appLogoTilt]',
  standalone: true,
})
export class LogoTiltDirective implements OnInit, OnDestroy {
  private readonly maxTilt = 9;
  private readonly hoverScale = 1.03;
  private isHovering = false;
  private shineTween?: gsap.core.Tween;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    const el = this.elementRef.nativeElement;
    gsap.set(el, {
      transformPerspective: 900,
      transformStyle: 'preserve-3d',
      transformOrigin: 'center center',
      rotateX: 0,
      rotateY: 0,
      z: 0,
    });
  }

  ngOnDestroy(): void {
    this.shineTween?.kill();
    gsap.killTweensOf(this.elementRef.nativeElement);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.isHovering = true;
    const el = this.elementRef.nativeElement;

    this.ngZone.runOutsideAngular(() => {
      gsap.to(el, {
        duration: 0.28,
        scale: this.hoverScale,
        z: 18,
        ease: 'power3.out',
        overwrite: true,
      });
      this.playShine();
    });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isHovering) return;

    const el = this.elementRef.nativeElement;
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normalized = new THREE.Vector2(
      (event.clientX - centerX) / (rect.width / 2),
      (event.clientY - centerY) / (rect.height / 2),
    );

    const rotateY = THREE.MathUtils.clamp(normalized.x * this.maxTilt, -this.maxTilt, this.maxTilt);
    const rotateX = THREE.MathUtils.clamp(-normalized.y * this.maxTilt, -this.maxTilt, this.maxTilt);

    this.ngZone.runOutsideAngular(() => {
      gsap.to(el, {
        duration: 0.2,
        rotateX,
        rotateY,
        ease: 'power2.out',
        overwrite: true,
      });
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isHovering = false;
    const el = this.elementRef.nativeElement;
    const shine = el.querySelector<HTMLElement>('.logo-shine');

    this.ngZone.runOutsideAngular(() => {
      gsap.to(el, {
        duration: 0.45,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        z: 0,
        ease: 'power3.out',
        clearProps: 'willChange',
      });

      if (shine) {
        gsap.to(shine, {
          duration: 0.2,
          opacity: 0,
          xPercent: 180,
          ease: 'power1.out',
          overwrite: true,
        });
      }
    });
  }

  private playShine(): void {
    const shine = this.elementRef.nativeElement.querySelector<HTMLElement>('.logo-shine');
    if (!shine) return;

    this.shineTween?.kill();
    this.shineTween = gsap.fromTo(
      shine,
      { xPercent: -180, opacity: 0 },
      {
        xPercent: 180,
        opacity: 0.82,
        duration: 0.85,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(shine, { opacity: 0, duration: 0.32, ease: 'power1.out' });
        },
      },
    );
  }
}
