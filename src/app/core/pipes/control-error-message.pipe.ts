import { Pipe, type PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'nameErrorMessage',
  standalone: true,
  pure: false
})
export class ControlErrorMessagePipe implements PipeTransform {

  transform(control: AbstractControl | null): string | null {
    if (!control || !control.errors) {
      return null;
    }

    if (control.errors['required']) { // 'required' özelliğine [] kullanarak erişim
      return 'Bu alan zorunludur.';
    }

    if (control.errors['minlength']) { // 'required' özelliğine [] kullanarak erişim
      return 'Bu alan minimum 3 haneden oluşmalıdır.';
    }

    return "Girdi geçersiz";
  }

}
