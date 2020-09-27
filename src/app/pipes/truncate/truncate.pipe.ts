import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  // if you have many arguments for the pipe, it's better to try to aggregate them in an object
  transform(value: string = '', length: number = 100) {
    let availableCharacters = value.slice(0, length);

    if (value.length > length) {
      availableCharacters += '...';
    }

    return availableCharacters;
  }

}
