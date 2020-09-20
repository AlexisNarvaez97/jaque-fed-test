import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.base;

  constructor(public http: HttpClient) { }

  readLocalStorage(): string {
    return localStorage.getItem('users');
  }

  getUsers() {
    return this.http.get(`${this.baseUrl}users.json`);
  }

  getRoles() {
    return this.http.get(`${this.baseUrl}roles.json`);
  }


}
