import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparated',
  standalone: true
})
export class CommaSeparatedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
