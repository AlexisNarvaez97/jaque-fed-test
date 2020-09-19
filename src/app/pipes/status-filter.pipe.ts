import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform([...users]: any, active: boolean = null): unknown {
    return active === null
      ? users
      : users.filter((user) => user.active === active);
  }

}
