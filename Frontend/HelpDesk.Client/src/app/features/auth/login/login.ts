import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { Message } from 'primeng/message';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../core/localization/language.service';
import { AuthService } from '../../../core/auth/services/auth.service';
import { AuthStateService } from '../../../core/auth/services/auth-state.service';
import { PostLoginRedirectService } from '../../../core/auth/services/post-login-redirect.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    Card,
    InputText,
    ReactiveFormsModule,
    Button,
    Message,
    TranslatePipe,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  readonly languageService = inject(LanguageService);
  private readonly authService = inject(AuthService);
  private readonly authState = inject(AuthStateService);
  private readonly redirectService = inject(PostLoginRedirectService);

  loginForm = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
    staySignedIn: [false]
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { username, password, staySignedIn } = this.loginForm.getRawValue();

    this.authService
      .login({
        username,
        password,
        staySignedIn
      })
      .subscribe({
        next: (response) => {
          this.authState.setSession(response.userAccountData);
          this.redirectService.redirect();
        },
        error: (error) => this.handleLoginError(error),
      });
  }

  get username() {
    return this.loginForm.controls.username;
  }

  get showUsernameError(): boolean {
    return this.username.invalid && (this.username.dirty || this.username.touched);
  }

  get requiredUsernameError(): boolean {
    return this.username.hasError('required');
  }

  get usernameError(): boolean {
    return this.username.hasError('username');
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

  loginError = signal<string | null>(null);

  private handleLoginError(error: unknown): void {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      this.loginError.set('Invalid username or password.');
      return;
    }

    this.loginError.set('An unexpected error occurred.');
  }
}
