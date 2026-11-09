import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthStateService } from '../services/auth-state.service';
import { RedirectService } from '../services/redirect.service';

export const guestGuard: CanActivateFn = () => {
  const authState = inject(AuthStateService);
  const postLoginRedirect = inject(RedirectService);

  const allowGuest = () => {
    if (!authState.isAuthenticated()) {
      return true;
    }

    postLoginRedirect.redirect();
    return false;
  };

  if (authState.isHydrated()) {
    return allowGuest();
  }

  return authState.initialize(inject(AuthService)).pipe(map(allowGuest));
};