import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
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
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideHttpClient(
      withInterceptors([httpErrorInterceptor])
    ),
    provideCharts(withDefaultRegisterables()),
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: DATABASE_SERVICE, useClass: FirebaseDatabaseService },
  ],
};