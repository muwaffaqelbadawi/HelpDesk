import { ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control) => {
  const newPassword = control.get('newPassword')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (!newPassword || !confirmPassword) {
    return null;
  }

  return newPassword === confirmPassword
    ? null
    : { passwordMismatch: true };
};