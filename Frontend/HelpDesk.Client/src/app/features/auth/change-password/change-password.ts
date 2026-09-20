import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../core/localization/language.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../core/auth/services/auth.service';
import { AuthStateService } from '../../../core/auth/services/auth-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  imports: [CardModule, InputTextModule, ReactiveFormsModule, ButtonModule, TranslatePipe],

  templateUrl: './change-password.html',
  styleUrl: './change-password.scss',
})
export class ChangePasswordComponent {
  private fb = inject(FormBuilder);
  languageService = inject(LanguageService);
  private readonly authService = inject(AuthService);
  private readonly authState = inject(AuthStateService);
  private readonly router = inject(Router);

  changePasswordForm = this.fb.nonNullable.group({
    currentPassword: ['', [Validators.required, Validators.minLength(8)]],
    newPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit(): void {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    const { currentPassword, newPassword } = this.changePasswordForm.getRawValue();

    this.authService
      .changePassword({
        currentPassword,
        newPassword,
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

  private handleChangePasswordError(error: unknown): void {
    console.error('Change password failed', error);
  }
}
