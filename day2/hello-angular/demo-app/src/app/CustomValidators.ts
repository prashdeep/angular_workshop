import {  ValidationErrors, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {

   static coursenamevalidator(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf('') > 0){
            return {invalidcoursename: "Invalid course name"}
        }

        return null;
    }
   
}