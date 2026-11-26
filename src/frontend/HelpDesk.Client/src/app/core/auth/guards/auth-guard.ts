import { CanActivateFn, Router } from '@angular/router';
import { AuthStateService } from '../services/auth-state.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from '@/core/business/services/user.service';

export const authGuard: CanActivateFn = () => {
  const authState = inject(AuthStateService);
  const router = inject(Router);

  const checkAuthentication = () =>
    authState.isAuthenticated() ? true : router.createUrlTree(['/auth/login']);

  if (authState.isHydrated()) {
    return checkAuthentication();
  }

  return authState.initialize(inject(UserService)).pipe(map(checkAuthentication));
};
