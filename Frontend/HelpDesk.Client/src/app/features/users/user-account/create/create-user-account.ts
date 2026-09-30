import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthStateService } from '../../../../core/auth/services/auth-state.service';
import { AuthService } from '../../../../core/auth/services/auth.service';
import { LanguageService } from '../../../../core/localization/language.service';

@Component({
  selector: 'app-create-user-account',
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectModule,
    TranslatePipe,
  ],
  templateUrl: './create-user-account.html',
  styleUrl: './create-user-account.css',
})
export class CreateUserAccountComponent {
  private fb = inject(FormBuilder);
  readonly languageService = inject(LanguageService);
  private readonly authService = inject(AuthService);
  private readonly authState = inject(AuthStateService);
  private readonly router = inject(Router);

  createUserAccountForm = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    fullEnName: ['', [Validators.required]],
    fullArName: ['', [Validators.required]],
    jobTitle: ['', [Validators.required]],
    departmentId: ['', [Validators.required]],
    sectorId: ['', [Validators.required]],
    countryId: ['', Validators.required],
  });

  departments = ([] = []);
  sectors = ([] = []);
  countries = ([] = []);

  onSubmit(): void {
    if (this.createUserAccountForm.invalid) {
      this.createUserAccountForm.markAllAsTouched();
      return;
    }

    this.authService.createUserAccount(this.createUserAccountForm.getRawValue()).subscribe({
      next: (response) => {
        this.authState.setSession(response.userAccountData);
        this.router.navigate(['/']);
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
    console.error('createUserAccount failed', error);
  }
}
