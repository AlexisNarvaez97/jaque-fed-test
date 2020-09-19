import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getUsers() {
    return this.http.get('assets/users.json');
  }

  getRoles() {
    return this.http.get('assets/roles.json');
  }


}
