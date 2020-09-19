import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
})
export class TableUsersComponent implements OnInit {
  search: string;
  status: string;

  statusUser: boolean;

  constructor() {
    this.status = '';
  }

  ngOnInit(): void {}

  statusFilter() {
    console.log(this.status);

    if (this.status === '') {
      this.statusUser = null;
    } else if (this.status === 'activados') {
      this.statusUser = true;
    } else {
      this.statusUser = false;
    }
  }
}
