import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
import * as THREE from 'three';
import { gsap } from 'gsap';

const REMEMBER_EMAIL_KEY = 'brims_login_remember_email';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('logo3dHost') logo3dHost?: ElementRef<HTMLDivElement>;

  email = '';
  password = '';
  error = '';
  showPassword = false;
  loading = false;
  rememberMe = false;
  threeReady = false;

  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private renderer?: THREE.WebGLRenderer;
  private coin?: THREE.Mesh<THREE.CylinderGeometry, THREE.Material[]>;
  private coinFaceMaterial?: THREE.MeshStandardMaterial;
  private ambientLight?: THREE.AmbientLight;
  private directionalLight?: THREE.DirectionalLight;
  private logoTexture?: THREE.Texture;
  private readonly onResizeBound = () => this.handleResize();

  constructor(
    private auth: AuthService,
    private router: Router,
    private alert: AlertService,
    private ngZone: NgZone,
  ) {}

  ngOnInit() {
    try {
      const saved = localStorage.getItem(REMEMBER_EMAIL_KEY);
      if (saved) {
        this.email = saved;
        this.rememberMe = true;
      }
    } catch {
      // ignore
    }
  }

  private validate(): string | null {
    const e = (this.email || '').trim();
    const p = this.password;
    if (!e) return 'Please enter your email or username.';
    if (e.includes('@')) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(e)) return 'Please enter a valid email address.';
    }
    if (!p) return 'Please enter your password.';
    return null;
  }

  onSubmit() {
    this.error = '';
    const validationError = this.validate();
    if (validationError) {
      this.error = validationError;
      this.alert.error('Invalid input', validationError);
      return;
    }
    this.loading = true;
    const r = this.auth.login(this.email.trim(), this.password);
    if (r.success) {
      try {
        if (this.rememberMe) {
          localStorage.setItem(REMEMBER_EMAIL_KEY, this.email.trim());
        } else {
          localStorage.removeItem(REMEMBER_EMAIL_KEY);
        }
      } catch {
        // ignore
      }
      // Navigate directly to the dashboard for the logged-in role
      const base =
        r.role === 'admin'
          ? '/admin/dashboard'
          : r.role === 'staff'
          ? '/staff/dashboard'
          : '/resident/dashboard';
      this.alert
        .successToast('Login successful', 'Welcome to BRIMS.', 1000)
        .then(() => {
          this.loading = false;
          this.router.navigate([base]);
        })
        .catch(() => {
          this.loading = false;
        });
    } else {
      this.loading = false;
      this.error = 'Invalid email or password. Use the email and password set by the barangay.';
      this.alert.error('Login failed', this.error);
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  ngAfterViewInit(): void {
    this.setupThreeLogo();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResizeBound);
    this.disposeThreeLogo();
  }

  private setupThreeLogo(): void {
    const host = this.logo3dHost?.nativeElement;
    if (!host) return;
    const isMobile = window.innerWidth <= 640;

    // Keep static logo fallback on mobile and unsupported WebGL environments.
    if (isMobile || typeof window === 'undefined' || !window.WebGLRenderingContext) {
      this.threeReady = false;
      return;
    }

    const width = host.clientWidth || 280;
    const height = host.clientHeight || 280;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
    this.camera.position.set(0, 0, isMobile ? 5.8 : 4.8);
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(width, height);
    host.appendChild(this.renderer.domElement);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.1);
    this.directionalLight.position.set(0, 0, 4.2);
    this.scene.add(this.ambientLight, this.directionalLight);

    const textureLoader = new THREE.TextureLoader();
    this.logoTexture = textureLoader.load('/assets/images/FOR-DASHBOARD.png', () => {
      if (!this.scene) return;
      this.logoTexture!.colorSpace = THREE.SRGBColorSpace;
      this.logoTexture!.anisotropy = 4;
      this.buildCoinMesh();
      this.threeReady = true;
      this.playCoinTossAnimation();
      window.addEventListener('resize', this.onResizeBound);
      this.renderScene();
    });
  }

  private buildCoinMesh(): void {
    if (!this.scene || !this.logoTexture) return;
    const isMobile = window.innerWidth <= 640;

    const geometry = new THREE.CylinderGeometry(1.28, 1.28, 0.09, 96, 1);
    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0xd9e1ea,
      metalness: 0.25,
      roughness: 0.5,
    });
    const faceMaterial = new THREE.MeshStandardMaterial({
      map: this.logoTexture,
      transparent: true,
      metalness: 0.05,
      roughness: 0.75,
    });
    faceMaterial.color.setRGB(0.2, 0.2, 0.2);
    faceMaterial.emissive.setRGB(0.03, 0.05, 0.08);
    faceMaterial.emissiveIntensity = 0.05;
    if (faceMaterial.map) {
      faceMaterial.map.rotation = Math.PI / 2;
      faceMaterial.map.center.set(0.5, 0.5);
      faceMaterial.map.needsUpdate = true;
    }
    this.coinFaceMaterial = faceMaterial;

    this.coin = new THREE.Mesh(geometry, [edgeMaterial, faceMaterial, faceMaterial]);
    // Cylinder faces are along the Y axis by default; rotate so logo faces camera (Z axis).
    this.coin.rotation.x = Math.PI / 2;
    this.coin.rotation.z = 0;
    if (isMobile) {
      this.coin.scale.setScalar(0.8);
    }
    this.scene.add(this.coin);
  }

  private playCoinTossAnimation(): void {
    if (!this.coin || !this.renderer) return;
    const coin = this.coin;
    const hostEl = this.logo3dHost?.nativeElement;
    const isMobile = window.innerWidth <= 640;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isMobile) {
      coin.position.set(0, 0, 0);
      coin.rotation.set(Math.PI / 2, 0, 0);
      if (hostEl) {
        gsap.set(hostEl, { x: 0, y: 0, scale: 1, opacity: 1 });
      }
      this.renderScene();
      return;
    }

    const faceMaterial = this.coinFaceMaterial;
    const light = this.directionalLight;
    const revealColor = { r: 0.2, g: 0.2, b: 0.2 };
    const finalColor = { r: 1, g: 1, b: 1 };
    this.ngZone.runOutsideAngular(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onUpdate: () => this.renderScene(),
        onComplete: () => {
          if (hostEl) {
            gsap.set(hostEl, { x: 0, y: 0, scale: 1, opacity: 1, filter: 'none', clearProps: 'transform,filter' });
          }
          if (faceMaterial) {
            faceMaterial.color.setRGB(1, 1, 1);
            faceMaterial.emissive.setRGB(0, 0, 0);
            faceMaterial.emissiveIntensity = 0;
          }
          if (light) {
            light.position.set(0, 0, 4.2);
            light.intensity = 1.35;
          }
          this.renderScene();
        },
      });

      if (hostEl) {
        tl.fromTo(
          hostEl,
          { opacity: 0.82, scale: 0.985, filter: 'brightness(0.62) saturate(0.5)' },
          { opacity: 1, scale: 1, filter: 'brightness(1.2) saturate(1.15)', duration: 0.7, ease: 'power2.out' },
          0,
        );
        tl.to(hostEl, { filter: 'brightness(1) saturate(1)', duration: 0.72, ease: 'sine.inOut' }, 0.72);
      }

      if (faceMaterial) {
        tl.to(revealColor, {
          ...finalColor,
          duration: 1.05,
          ease: 'power2.out',
          onUpdate: () => {
            faceMaterial.color.setRGB(revealColor.r, revealColor.g, revealColor.b);
          },
        }, 0.06)
          .to(faceMaterial, { emissiveIntensity: 0.95, duration: 0.46, ease: 'power3.out' }, 0.2)
          .to(faceMaterial, { emissiveIntensity: 0.28, duration: 0.95, ease: 'sine.inOut' }, 0.82);
      }

      if (light) {
        tl.fromTo(
          light.position,
          { x: -4.8, y: 0.9, z: 2.8 },
          { x: 4.6, y: 3.1, z: 4.4, duration: 1.22, ease: 'power2.inOut' },
          0.08,
        )
          .fromTo(light, { intensity: 0.38 }, { intensity: 2.6, duration: 0.55, ease: 'sine.out' }, 0.08)
          .to(light, { intensity: 1.24, duration: 0.95, ease: 'sine.inOut' }, 0.95);
      }

      tl.to(
        coin.scale,
        { x: coin.scale.x * 1.04, y: coin.scale.y * 1.04, z: coin.scale.z * 1.04, duration: 0.35, yoyo: true, repeat: 1, ease: 'sine.inOut' },
        0.95,
      );
    });
  }

  private handleResize(): void {
    if (!this.logo3dHost?.nativeElement || !this.renderer || !this.camera) return;
    const host = this.logo3dHost.nativeElement;
    const width = host.clientWidth || 280;
    const height = host.clientHeight || 280;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.renderScene();
  }

  private renderScene(): void {
    if (!this.scene || !this.camera || !this.renderer) return;
    this.renderer.render(this.scene, this.camera);
  }

  private disposeThreeLogo(): void {
    this.coin?.geometry.dispose();
    this.coin?.material.forEach((material: THREE.Material) => material.dispose());
    this.logoTexture?.dispose();
    this.renderer?.dispose();

    const canvas = this.renderer?.domElement;
    if (canvas && canvas.parentElement) {
      canvas.parentElement.removeChild(canvas);
    }

    this.coin = undefined;
    this.coinFaceMaterial = undefined;
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.logoTexture = undefined;
  }
}
