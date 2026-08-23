import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    // 1. Change Detection with event coalescing
    provideZoneChangeDetection({ eventCoalescing: true }),

    // 2. Router (only once!)
    provideRouter(routes),

    // 3. HTTP Client with DI interceptors
    provideHttpClient(withInterceptorsFromDi()),

    // 4. Global error handling
    provideBrowserGlobalErrorListeners(),

    // 5. PrimeNG Configuration
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark-mode',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
    }),
  ],
};
