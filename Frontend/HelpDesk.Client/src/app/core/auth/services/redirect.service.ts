import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  private readonly authState = inject(AuthStateService);
  private readonly router = inject(Router);

  redirect(): void {
    const session = this.authState.session();

    const user = session?.userAccountData;

    // check user availability
    // and authentication state
    if (!user) return;

    // Logout the user scenario
    if (user == null) {
      this.router.navigate(['/auth/login']);
      return;
    }

    // First login
    if (user.mustResetPassword) {
      this.router.navigate(['/auth/change-password']);
      return;
    }

    if (user.roles.includes('SuperAdmin')) {
      this.router.navigate(['/dashboard']);
      return;
    }

    if (user.roles.includes('Admin')) {
      this.router.navigate(['/dashboard']);
      return;
    }

    if (user.roles.includes('Agent')) {
      this.router.navigate(['/home']);
    }

    if (user.roles.includes('Support')) {
      this.router.navigate(['/home']);
    }
  }
}
