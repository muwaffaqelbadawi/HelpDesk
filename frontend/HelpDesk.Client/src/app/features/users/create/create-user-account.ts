import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { Select } from 'primeng/select';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthStateService } from '../../../core/auth/services/auth-state.service';
import { RedirectService } from '@/core/auth/services/redirect.service';
import { UserService } from '@/core/business/services/user.service';

@Component({
  selector: 'app-create-user-account',
  imports: [
    Card,
    InputText,
    Button,
    Select,
    ReactiveFormsModule,
    TranslatePipe,
  ],
  templateUrl: './create-user-account.html',
  styleUrl: './create-user-account.css',
})
export class CreateUserAccountComponent {
  private fb = inject(FormBuilder);
  private readonly userService = inject(UserService);
  private readonly authState = inject(AuthStateService);
  private readonly redirectService = inject(RedirectService);

  createUserAccountForm = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    fullEnName: ['', [Validators.required]],
    fullArName: ['', [Validators.required]],
    jobTitle: ['', [Validators.required]],
    departmentId: ['', [Validators.required]],
    sectorId: ['', [Validators.required]],
    countryId: ['', [Validators.required]],
  });

  departments = [];
  sectors = [];
  countries = [];

  onSubmit(): void {
    if (this.createUserAccountForm.invalid) {
      this.createUserAccountForm.markAllAsTouched();
      return;
    }

    this.userService
      .createUserAccount(
        this.createUserAccountForm
          .getRawValue())
      .subscribe({
        next: (response) => {
          console.log(response.time);
          console.log(response.message);
          console.log(response.data);

          if (!response.data?.userAccountData) {
            this.handleCreateUserAccountError(
              new Error('Create user account response did not contain user account data.')
            );
            return;
          }

          this.authState.setSession(response.data.userAccountData);
          this.redirectService.redirect();
        },

        error: (error) => this.handleCreateUserAccountError(error),
      });
  }

  get email() {
    return this.createUserAccountForm.controls.email;
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

  private handleCreateUserAccountError(error: unknown): void {
    console.error('create user account failed', error);
  }
}
