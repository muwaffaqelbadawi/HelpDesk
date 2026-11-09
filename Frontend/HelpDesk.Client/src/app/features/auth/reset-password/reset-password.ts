import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TranslatePipe } from '@ngx-translate/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../core/auth/services/auth.service';
import { AuthStateService } from '../../../core/auth/services/auth-state.service';
import { ActivatedRoute } from '@angular/router';
import { passwordValidators } from '../../../shared/validators/password.validators';
import { RedirectService } from '@/core/auth/services/redirect.service';

@Component({
  imports: [CardModule, InputTextModule, ReactiveFormsModule, ButtonModule, TranslatePipe],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPasswordComponent {
  private fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly authState = inject(AuthStateService);
  private readonly route = inject(ActivatedRoute);
  private readonly redirectService = inject(RedirectService);

  resetPasswordForm = this.fb.nonNullable.group({
    newPassword: ['', passwordValidators],
  });

  onSubmit(): void {
    if (this.resetPasswordForm.invalid) {
      this.resetPasswordForm.markAllAsTouched();
      return;
    }

    const { newPassword } = this.resetPasswordForm.getRawValue();

    // Read from query parameter
    const userId = this.route.snapshot.queryParamMap.get('userId');
    const resetToken = this.route.snapshot.queryParamMap.get('token');

    if (!userId || !resetToken) {
      return;
    }

    this.authService
      .resetPassword({
        userId,
        resetToken,
        newPassword,
      })
      .subscribe({
        next: (response) => {
          console.log(response.time);
          console.log(response.message);
          console.log(response.data);

          if (!response.data?.userAccountData) {
            throw new Error('Reset password response did not contain user account data.');
          }

          this.authState.setSession(response.data.userAccountData);
          this.redirectService.redirect();
        },

        error: (error) => this.handleResetPasswordError(error),
      });
  }

  private handleResetPasswordError(error: unknown): void {
    console.error('Reset password failed', error);
  }
}
