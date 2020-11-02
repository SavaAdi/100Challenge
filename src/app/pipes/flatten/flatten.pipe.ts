import { Pipe, PipeTransform } from '@angular/core';


//  The pure attribute allows for the value to be updated 'real-time' in the html. Has a small performance hit

@Pipe({
  name: 'appFlatten',
  pure: false
})
export class FlattenPipe implements PipeTransform {

  transform(values: any[]): any[] {

    return this.flattenArray(values);
  }

  private flattenArray(arr: any[]): any[] {
    const result = [];

    arr.forEach((value) => {
      if (Array.isArray(value)) {
        result.push(...this.flattenArray(value));
      } else {
        result.push(value);
      }
    });

    return result;
  }

}
