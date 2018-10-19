import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeTrack'
})
export class TimeTrackPipe implements PipeTransform {

  mlSeg: number;
timeFinal: string;
  transform(time: string): string {
    this.mlSeg = Number(time);
    this.timeFinal = this.secondsToTime(this.mlSeg);
    return this.timeFinal;
  }


  secondsToTime ( s ) {
    function addZ(n) {
      return (n < 10 ? '0' : '') + n;
    }
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;

    // const hrs = (s - mins) / 60;
    return addZ(mins) + ':' + addZ(secs);
  }


}
