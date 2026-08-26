import { CanActivateFn, Router } from '@angular/router';
import { AuthStateService } from '../services/auth-state.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authState = inject(AuthStateService);
  const router = inject(Router);

  return authState.isAuthenticated() ? true : router.createUrlTree(['/auth/login']);
};
