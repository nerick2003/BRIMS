import { ApplicationConfig, ErrorHandler, APP_INITIALIZER, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { ErrorHandlerService } from './services/error-handler.service';
import { httpErrorInterceptor } from './interceptors/http-error.interceptor';
import { DATABASE_SERVICE } from './services/database.interface';
import { FirebaseDatabaseService } from './services/firebase-database.service';
import { runtimeConfig, type AppRuntimeConfigFile } from './config/runtime-config';

/** Load assets/config.json before Firebase and API clients initialize. */
function loadRuntimeConfig(): () => Promise<void> {
  return () =>
    fetch('assets/config.json')
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP ${r.status}`);
        }
        return r.json() as Promise<AppRuntimeConfigFile>;
      })
      .then((config) => {
        if (config?.apiBaseUrl?.trim()) {
          runtimeConfig.apiBaseUrl = config.apiBaseUrl.trim().replace(/\/+$/, '');
        }
        if (config?.firebase?.apiKey && config?.firebase?.projectId) {
          runtimeConfig.firebase = config.firebase;
        }
      })
      .catch(() => {
        console.error(
          'BRIMMS: Missing or invalid assets/config.json.\n' +
            '  Copy src/assets/config.example.json to src/assets/config.json and add your Firebase web app settings.',
        );
      });
}

function createFirebaseApp() {
  const firebase = runtimeConfig.firebase;
  if (!firebase?.apiKey || !firebase?.projectId) {
    throw new Error(
      'Firebase is not configured. Copy src/assets/config.example.json to src/assets/config.json and fill in your Firebase web app settings.',
    );
  }
  return initializeApp(firebase);
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_INITIALIZER, useFactory: loadRuntimeConfig, multi: true },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => createFirebaseApp()),
    provideFirestore(() => getFirestore()),
    provideHttpClient(withInterceptors([httpErrorInterceptor])),
    provideCharts(withDefaultRegisterables()),
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: DATABASE_SERVICE, useClass: FirebaseDatabaseService },
  ],
};
