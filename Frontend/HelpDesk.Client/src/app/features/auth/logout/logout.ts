import { AuthStateService } from '@/core/auth/services/auth-state.service';
import { AuthService } from '@/core/auth/services/auth.service';
import { RedirectService } from '@/core/auth/services/redirect.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class LogoutComponent {
  private readonly authService = inject(AuthService);
  private readonly authState = inject(AuthStateService);
  private readonly redirectService = inject(RedirectService);

  onSubmit(): void {
    this.authService
      .logout()
      .subscribe({
        next: (response) => {
          console.log(response.message);
          console.log(response.time);
          console.log(response.data);

          this.authState.clearSession();
          this.redirectService.redirect();
        },

        error: (error: unknown) => this.handleLogoutError(error),
      });
  }

  logoutError = signal<string | null>(null);

  private handleLogoutError(error: unknown): void {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      this.logoutError.set('Logout failed.');
      return;
    }

    this.logoutError.set('An unexpected error occurred.');
  }
}