import { input, Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {
  
  // transform(value: string): string {
 
  //   return value.replace(' ','-',);
  // }
  transform(Toman: number, Dolor: number): string {
    let USD = Toman / Dolor;
    return `${USD} USD`
    // return `${USD.toFixed(3)} USD`
}}
