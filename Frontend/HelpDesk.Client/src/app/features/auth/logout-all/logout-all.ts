import { AuthStateService } from '@/core/auth/services/auth-state.service';
import { AuthService } from '@/core/auth/services/auth.service';
import { RedirectService } from '@/core/auth/services/redirect.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-logout-all',
  imports: [],
  templateUrl: './logout-all.html',
  styleUrl: './logout-all.css',
})
export class LogoutAllComponent {
  private readonly authService = inject(AuthService);
  private readonly authState = inject(AuthStateService);
  private readonly redirectService = inject(RedirectService);

  onSubmit(): void {
    this.authService
      .logoutAll()
      .subscribe({
        next: (response) => {
          console.log(response.message);
          console.log(response.time);
          console.log(response.data);

          this.authState.clearSession();
          this.redirectService.redirect();
        },

        error: (error: unknown) => this.handleLogoutAllError(error),
      });
  }

  logoutError = signal<string | null>(null);

  private handleLogoutAllError(error: unknown): void {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      this.logoutError.set('LogoutAll failed.');
      return;
    }

    this.logoutError.set('An unexpected error occurred.');
  }
}