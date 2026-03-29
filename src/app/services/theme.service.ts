import { Injectable, signal, computed } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'brims-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeSignal = signal<Theme>(this.getStoredOrSystemTheme());
  /** False after first microtask so initial paint / storage sync does not animate. */
  private isBootstrapping = true;

  readonly theme = this.themeSignal.asReadonly();
  readonly isDark = computed(() => this.themeSignal() === 'dark');

  constructor() {
    this.applyTheme(this.themeSignal());
    queueMicrotask(() => {
      this.isBootstrapping = false;
    });
  }

  getTheme(): Theme {
    return this.themeSignal();
  }

  setTheme(theme: Theme): void {
    this.themeSignal.set(theme);
    localStorage.setItem(STORAGE_KEY, theme);
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    this.setTheme(this.themeSignal() === 'dark' ? 'light' : 'dark');
  }

  private getStoredOrSystemTheme(): Theme {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return 'light';
  }

  private applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (root.getAttribute('data-theme') === theme) return;

    const commit = () => root.setAttribute('data-theme', theme);

    const prefersReduced =
      typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (this.isBootstrapping || prefersReduced) {
      commit();
      return;
    }

    const doc = document as Document & {
      startViewTransition?: (updateCallback?: () => void) => { finished: Promise<void> };
    };

    if (typeof doc.startViewTransition === 'function') {
      doc.startViewTransition(commit);
      return;
    }

    root.classList.add('theme-transition-active');
    commit();
    const raw = getComputedStyle(root).getPropertyValue('--theme-transition-duration').trim();
    const seconds = parseFloat(raw) || 0.32;
    const ms = Math.max(0, Math.round(seconds * 1000)) + 40;
    window.setTimeout(() => root.classList.remove('theme-transition-active'), ms);
  }
}
