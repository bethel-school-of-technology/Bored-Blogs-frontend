import { Directive, Input } from "@angular/core";
import { ValidatorFn, AbstractControl, NG_VALIDATORS } from "@angular/forms";

export function SamePasswordValidator(pass1, pass2): ValidatorFn {
  //validator? e=>{f=>{control.value}}
  return (control: AbstractControl): { [key: string]: any } | null => {
    return pass1 == pass2 ? { changeTHisIthink: { value: control.value } } : null;
  };
}

@Directive({
  selector: "[samePasswordValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SamePasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class SamePasswordValidatorDirective {
  @Input("samePasswordValidator") pass1: string;
  @Input("samePasswordValidator") pass2: string;
  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.pass1 && this.pass2
      ? SamePasswordValidator(this.pass1, this.pass2)(control)
      : null;
  }
}
