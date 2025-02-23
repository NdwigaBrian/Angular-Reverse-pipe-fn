import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
  standalone: true
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.split('').reverse().join('');
  }
}
 