import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparated',
  standalone: true
})
export class CommaSeparatedPipe implements PipeTransform {

  transform(value: number, locale: string = 'en-US'): string {
    if (value == null || isNaN(value)) {
      return '';
    }
    // Sử dụng Intl.NumberFormat để thêm dấu phẩy cho ngàn
    return new Intl.NumberFormat(locale).format(value);
  }

}
