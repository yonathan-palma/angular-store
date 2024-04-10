import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'tomeAgo',
  standalone: true
})
export class TomeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value)
    const today = new Date()
    return formatDistance(today, date)
  }

}
