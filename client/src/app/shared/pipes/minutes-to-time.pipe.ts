import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToTime'
})
export class MinutesToTimePipe implements PipeTransform {

  public transform(totalDuration: number): string {
    let duration = '';
    const hours = Math.floor(totalDuration / 60);
    const minutes = totalDuration - hours * 60;

    if (hours > 0) {
      duration += `${hours}h `;
    }

    duration += `${minutes}min`;

    return duration;
  }
}
