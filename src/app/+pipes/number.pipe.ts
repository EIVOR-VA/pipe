import { input, Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value: string): string {
 
    return value.replace('','',);
  }

}
