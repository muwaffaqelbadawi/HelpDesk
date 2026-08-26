import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../core/localization/language.service';
import { AuthService } from '../../../core/auth/services/auth.service';
import { AuthStateService } from '../../../core/auth/services/auth-state.service';

@Component({
  selector: 'app-login',
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterLink,
    TranslatePipe,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  readonly languageService = inject(LanguageService);
  private readonly authService = inject(AuthService);
  private readonly authState = inject(AuthStateService);
  private readonly router = inject(Router);

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.getRawValue();

    this.authService
      .login({
        identity: email,
        password,
      })
      .subscribe({
        next: (response) => {
          this.authState.setSession(response.userAccountData);

          this.router.navigate(['/']);
        },
        error: (error) => this.handleLoginError(error),
      });
  }

  get email() {
    return this.loginForm.controls.email;
  }

  get showEmailError(): boolean {
    return this.email.invalid && (this.email.dirty || this.email.touched);
  }

  get requiredEmailError(): boolean {
    return this.email.hasError('required');
  }

  get emailError(): boolean {
    return this.email.hasError('email');
  }

  get password() {
    return this.loginForm.controls.password;
  }

  get showPasswordError(): boolean {
    return this.password.invalid && (this.password.dirty || this.password.touched);
  }

  get requiredPasswordError(): boolean {
    return this.password.hasError('required');
  }

  get passwordMinLengthError(): boolean {
    return this.password.hasError('minlength');
  }

  get currentLanguage(): string | null {
    return this.languageService.currentLanguage;
  }

  toggleLanguage(): void {
    this.languageService.setLanguage(this.currentLanguage === 'ar' ? 'en' : 'ar');
  }

  private handleLoginError(error: unknown): void {
    console.error('Login failed', error);
  }
}
