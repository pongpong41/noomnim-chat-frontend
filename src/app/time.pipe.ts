import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const date = new Date(value);
    const hour = date.getHours();
    const minute = date.getMinutes();
    return hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0');
  }

}
