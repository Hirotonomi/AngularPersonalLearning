import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emote',
  standalone: true
})
export class EmotePipe implements PipeTransform {

  transform(value: string): string {
    return value+" &#128540";
  }

}
