import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReducer'
})
export class TextReducerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let newValue= value.split(" ")
    return "C " + newValue[1];
  }

}
