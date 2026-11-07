import { Component, inject, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Message } from 'primeng/message';
import { InputText } from 'primeng/inputtext';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../core/localization/language.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/services/auth.service';
import { AuthStateService } from '../../../core/auth/services/auth-state.service';
import { Router } from '@angular/router';
import { passwordValidators } from '../../../shared/validators/password.validators';
import { passwordMatchValidator } from '@/shared/validators/password-match.validator';
import { HttpErrorResponse } from '@angular/common/http';
import { differentPasswordValidator } from '@/shared/validators/different-password.validator';


@Component({
  imports: [Card, InputText, ReactiveFormsModule, Button, TranslatePipe, Message],

  templateUrl: './change-password.html',
  styleUrl: './change-password.css',
})
export class ChangePasswordComponent {
  private fb = inject(FormBuilder);
  languageService = inject(LanguageService);
  private readonly authService = inject(AuthService);
  private readonly authState = inject(AuthStateService);
  private readonly router = inject(Router);

  changePasswordForm = this.fb.nonNullable.group(
    {
      currentPassword: ['', Validators.required],
      newPassword: ['', passwordValidators],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: [
        passwordMatchValidator,
        differentPasswordValidator,
      ],
    });

  onSubmit(): void {
    this.changePasswordError.set(null);

    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    const { currentPassword, newPassword, confirmPassword } = this.changePasswordForm.getRawValue();

    this.authService
      .changePassword({
        currentPassword,
        newPassword,
        confirmPassword
      })
      .subscribe({
        next: (response) => {
          this.authState.setSession(response.userAccountData);
          this.router.navigate(['/']);
        },
        error: (error) => this.handleChangePasswordError(error),
      });
  }

  get currentLanguage(): string | null {
    return this.languageService.currentLanguage;
  }

  changePasswordError = signal<string | null>(null);

  private handleChangePasswordError(error: unknown): void {
    if (error instanceof HttpErrorResponse) {
      this.changePasswordError.set(
        error.error?.detail ??
        'Password change failed. Please try again.',
      );
      return;
    }

    this.changePasswordError.set('An unknown error occurred.');
  }
}
