import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { Message } from 'primeng/message';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '../../../core/auth/services/auth.service';
import { AuthStateService } from '../../../core/auth/services/auth-state.service';
import { RedirectService } from '../../../core/auth/services/redirect.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
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
  private readonly authService = inject(AuthService);
  private readonly authState = inject(AuthStateService);
  private readonly redirectService = inject(RedirectService);

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
          console.log(response.time);
          console.log(response.message);
          console.log(response.data);

          if (!response.data?.userAccountData) {
            throw new Error('Login response did not contain user account data.');
          }

          this.authState.setSession(response.data.userAccountData);
          this.redirectService.redirect();
        },

        error: (error: unknown) => this.handleLoginError(error)
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

  loginError = signal<string | null>(null);

  private handleLoginError(error: unknown): void {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      this.loginError.set('Invalid username or password.');
      return;
    }

    this.loginError.set('An unexpected error occurred.');
  }
}
