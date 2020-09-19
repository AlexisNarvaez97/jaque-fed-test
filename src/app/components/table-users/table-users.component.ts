import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
})
export class TableUsersComponent implements OnInit {
  search: string;
  status: string;
  order: string;
  orderAsc: boolean;

  statusUser: boolean;

  constructor() {
    this.status = '';
    this.order = 'az';
    this.orderAsc = true;
  }

  ngOnInit(): void {}

  statusFilter() {
    if (this.status === '') {
      this.statusUser = null;
    } else if (this.status === 'activados') {
      this.statusUser = true;
    } else {
      this.statusUser = false;
    }
  }

  orderUsers() {
    switch (this.order) {
      case 'az':
        this.orderAsc = true;
        break;
      case 'za':
        this.orderAsc = false;
      default:
        break;
    }
  }
}
