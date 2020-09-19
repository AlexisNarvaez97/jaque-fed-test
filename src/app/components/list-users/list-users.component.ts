import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  @Input() search;

  userData = [];
  rolesData = [];
  users = [];

  constructor(private userS: UserService) {
    this.getAllUsers();
  }
  
  ngOnInit(): void {
  }

  getAllUsers() {
    this.userS.getUsers().subscribe( (resp: any) => {
      this.users = resp.users;
      console.log(resp)
    })
  }

  rolWork(roleId) {
    switch (roleId) {
      case 1:
        return 'Dueño';
      case 2:
        return 'Administrador';
      case 3:
        return 'Staff'
      default:
        return 'No rol'
    }
  }
}
