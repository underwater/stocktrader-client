import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
    name: 'formControlStatus'
})
export class FormControlStatusPipe implements PipeTransform {
    transform(value: FormControl): string {
        if (value.touched) {
            if (value.valid) {
                return 'success';
            }
            else {
                return 'danger';
            }
        }
        else {
            return '';
        }
    }
}
