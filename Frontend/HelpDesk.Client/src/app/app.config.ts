import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import AuraBase from '@primeuix/themes/aura/base';
import AuraButton from '@primeuix/themes/aura/button';
import AuraCard from '@primeuix/themes/aura/card';
import AuraInputText from '@primeuix/themes/aura/inputtext';
import AuraRipple from '@primeuix/themes/aura/ripple';
import AuraSelect from '@primeuix/themes/aura/select';
import { routes } from './app.routes';
import { authInterceptor } from './core/auth/interceptors/auth.interceptor';
import { AuthService } from './core/auth/services/auth.service';
import { AuthStateService } from './core/auth/services/auth-state.service';
import { catchError, EMPTY, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

const HelpDeskAura = definePreset(AuraBase, {
  components: {
    button: AuraButton,
    card: AuraCard,
    inputtext: AuraInputText,
    ripple: AuraRipple,
    select: AuraSelect,
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(routes),

    provideHttpClient(withInterceptors([authInterceptor])),

    provideAppInitializer(() => {
      const authService = inject(AuthService);
      const authState = inject(AuthStateService);

      return authService.getCurrentUser().pipe(
        tap((userAccountData) => {
          authState.setSession(userAccountData);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 0) {
            authState.setBackendUnavailable();
          } else {
            authState.clearSession();
          }
          return EMPTY;
        }),
        catchError(() => {
          authState.clearSession();
          return EMPTY;
        }),
      );
    }),

    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'en',
      lang: 'en',
    }),

    provideBrowserGlobalErrorListeners(),

    providePrimeNG({
      ripple: true,
      theme: {
        preset: HelpDeskAura,
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
