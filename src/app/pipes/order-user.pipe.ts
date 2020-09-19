import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderUser'
})
export class OrderUserPipe implements PipeTransform {

  transform(users: any, orderAsc: boolean) {

    if (orderAsc) {
      return users.sort( (a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      return users.sort( (a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
  }

}
