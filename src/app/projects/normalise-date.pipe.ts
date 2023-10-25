import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normaliseDate',
  standalone: true
})
export class NormaliseDatePipe implements PipeTransform {

  transform(date: string): string {
    let months:{[char: number]: string} = {
      1 : 'января', 
      2 : 'февраля', 
      3 : 'марта', 
      4 : 'апреля', 
      5 : 'мая', 
      6 : 'июня', 
      7 : 'июля', 
      8 : 'августа', 
      9 : 'сентября', 
      10 : 'октября', 
      11 : 'ноября', 
      12 : 'декабря'
  }
  let year:string = date.slice(0, 4)
  let month:number = Number(date.slice(5, 7))
  let monthString:string = months[month];
  let day = date.slice(8, 10)
  return (day +' '+ monthString +' '+ year);
  }

}
