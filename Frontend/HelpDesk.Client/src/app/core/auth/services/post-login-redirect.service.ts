import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root',
})
export class PostLoginRedirectService {
  private readonly authState = inject(AuthStateService);
  private readonly router = inject(Router);

  redirect(): void {
    const session = this.authState.session();

    const user = session?.userAccountData;

    if (!user) {
      return;
    }

    if (user.mustResetPassword) {
      this.router.navigate(['/reset-password']);
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

    // Future roles...
  }
}
