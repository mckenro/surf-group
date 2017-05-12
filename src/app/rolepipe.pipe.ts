import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolepipe'
})
export class RolepipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
