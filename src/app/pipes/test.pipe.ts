import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  @Input('hello') hello:String
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
