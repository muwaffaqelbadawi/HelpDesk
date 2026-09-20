import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../core/localization/language.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../core/auth/services/auth.service';
import { AuthStateService } from '../../../core/auth/services/auth-state.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [CardModule, InputTextModule, ReactiveFormsModule, ButtonModule, TranslatePipe],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPasswordComponent {
  private fb = inject(FormBuilder);
  languageService = inject(LanguageService);
  private readonly authService = inject(AuthService);
  private readonly authState = inject(AuthStateService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  resetPasswordForm = this.fb.nonNullable.group({
    newPassword: ['', [Validators.required, Validators.minLength(8)]],
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
      (error: unknown) => this.handleResetPasswordError(error);
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
          this.authState.setSession(response.userAccountData);
          this.router.navigate(['/']);
        },
        error: (error) => this.handleResetPasswordError(error),
      });
  }

  get currentLanguage(): string | null {
    return this.languageService.currentLanguage;
  }

  private handleResetPasswordError(error: unknown): void {
    console.error('Reset password failed', error);
  }
}
