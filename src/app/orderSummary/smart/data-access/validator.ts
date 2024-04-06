import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class RegexConstants {
  public static Name =/^[a-zA-Z0-9_.-]{2,15}$/;
  public static phoneNumber = /^(\d{10})$/;
}

export function RegexValidator(reg: RegexConstants): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && !control.value.toString().match(reg)) {
        return { error: true };
      }
      return null;
    };
  }