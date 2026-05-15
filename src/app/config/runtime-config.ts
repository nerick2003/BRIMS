import type { FirebaseOptions } from 'firebase/app';
import { environment } from '../../environments/environment';

/** Loaded at startup from assets/config.json (not committed with real values). */
export interface AppRuntimeConfigFile {
  apiBaseUrl?: string;
  firebase?: FirebaseOptions;
}

export const runtimeConfig = {
  apiBaseUrl: environment.apiBaseUrl,
  firebase: null as FirebaseOptions | null,
};
