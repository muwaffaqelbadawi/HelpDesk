import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { Location } from '@angular/common';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import { routes } from './app.routes';
import { authInterceptor } from './core/auth/interceptors/auth.interceptor';
import { AuthStateService } from './core/auth/services/auth-state.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserService } from './core/business/services/user.service';
import AuraBase from '@primeuix/themes/aura/base';
import AuraButton from '@primeuix/themes/aura/button';
import AuraCard from '@primeuix/themes/aura/card';
import AuraInputText from '@primeuix/themes/aura/inputtext';
import AuraMessage from '@primeuix/themes/aura/message';
import AuraRipple from '@primeuix/themes/aura/ripple';
import AuraSelect from '@primeuix/themes/aura/select';

const HelpDeskAura = definePreset(AuraBase, {
  components: {
    button: AuraButton,
    card: AuraCard,
    inputtext: AuraInputText,
    message: AuraMessage,
    ripple: AuraRipple,
    select: AuraSelect,
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideBrowserGlobalErrorListeners(),

    provideAppInitializer(() => {
      const initialPath = inject(Location)
        .path()
        .split(/[?#]/, 1)[0].replace(/\/+$/, '') || '/';
      const authState = inject(AuthStateService);

      if (initialPath === '/auth/login') {
        return;
      }

      return authState.initialize(inject(UserService));
    }),

    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'en',
      lang: 'en',
    }),

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
