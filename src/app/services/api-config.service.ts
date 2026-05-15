import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { runtimeConfig } from '../config/runtime-config';

@Injectable({ providedIn: 'root' })
export class ApiConfigService {
  /** Backend base URL for notifications API (from config.json or environment fallback). */
  get apiBaseUrl(): string {
    return runtimeConfig.apiBaseUrl || environment.apiBaseUrl;
  }

  /** True if the backend URL is still the placeholder (not configured for production). */
  get isPlaceholderUrl(): boolean {
    const u = this.apiBaseUrl || '';
    return (
      u.includes('YOUR_BACKEND') ||
      u === 'https://YOUR_BACKEND_URL' ||
      u === ''
    );
  }
}
