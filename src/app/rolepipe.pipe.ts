import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'rolepipe',
  pure: false
})
export class RolepipePipe implements PipeTransform {

  transform(input: Member[], desiredRole){
    var output: Member[] = [];
    if(desiredRole === "president") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role.toLowerCase() === "president") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRole === "vice-president") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role.toLowerCase() === "vice-president") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRole === "treasurer") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role.toLowerCase() === "treasurer") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRole === "admin") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role.toLowerCase() === "admin") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRole === "user") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role.toLowerCase() === "user") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
