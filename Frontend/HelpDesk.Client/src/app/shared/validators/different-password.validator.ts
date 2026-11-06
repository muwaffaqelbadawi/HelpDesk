import { ValidatorFn } from '@angular/forms';

export const differentPasswordValidator: ValidatorFn = (control) => {
  const currentPassword = control.get('currentPassword')?.value;
  const newPassword = control.get('newPassword')?.value;

  if (!currentPassword || !newPassword) {
    return null;
  }

  return currentPassword !== newPassword
    ? null
    : { samePassword: true };
};