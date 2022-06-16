import {AbstractControl, FormGroup, ValidatorFn} from '@angular/forms';

export class CustomValidators {

}

export function RequiredTrim(control: AbstractControl): { [key: string]: boolean } | null {
    if (!control.value || (typeof control.value === 'string' && !control.value.trim())) {
        return {requiredTrim: true};
    }
    return null;
}

// export function RequiredTrim(control: AbstractControl): { [key: string]: boolean } | null {
//   // if (control.value && typeof control.value === 'string' && control.value.trim().length === 0) {
//   //   return {requiredTrim: true};
//   // }
//   // if (control.value == null) {
//   //   return {requiredTrim: true};
//   // }
//   if (!control.value || (typeof control.value === 'string' && !control.value.trim())) {
//     return {requiredTrim: true};
//   }
//   return null;
// }

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function requireCheckboxesToBeCheckedValidator(minRequired = 1): ValidatorFn {
  return function validate(formGroup: FormGroup) {
    let checked = 0;

    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];

      if (control.value === true) {
        checked++;
      }
    });
    if (checked < minRequired) {
      return {
        requireCheckboxesToBeChecked: true,
      };
    }
    return null;
  };
}
