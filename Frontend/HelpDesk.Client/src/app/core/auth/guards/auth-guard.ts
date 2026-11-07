import { CanActivateFn, Router } from '@angular/router';
import { AuthStateService } from '../services/auth-state.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authState = inject(AuthStateService);
  const router = inject(Router);

  const checkAuthentication = () =>
    authState.isAuthenticated() ? true : router.createUrlTree(['/auth/login']);

  if (authState.isHydrated()) {
    return checkAuthentication();
  }

  return authState.initialize(inject(AuthService)).pipe(map(checkAuthentication));
};
