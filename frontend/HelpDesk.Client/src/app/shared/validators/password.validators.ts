import { Validators } from '@angular/forms';

export const passwordValidators = [
  Validators.required,
  Validators.minLength(8),
  Validators.pattern(/[0-9]/),
  Validators.pattern(/[A-Z]/),
  Validators.pattern(/[a-z]/),
  Validators.pattern(/[^a-zA-Z0-9]/),
];
