import { UserService } from './../../services/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(public userS: UserService) {}

  ngOnInit(): void {}

  modalClose() {
    this.closeModal.emit(true);
  }

  registerUser = new FormGroup({
    name: new FormControl('', Validators.required),
    lastnameP: new FormControl('', Validators.required),
    lastnameM: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    rol: new FormControl('', [Validators.required, Validators.email]),
    status: new FormControl('', [Validators.required, Validators.email]),
  });

  sendData({ value }) {
    this.closeModal.emit(true);

    const newUser = {
      name: value.name,
      fathersLastName: value.lastnameP,
      mothersLastName: value.lastnameM,
      email: value.email,
      active: false,
      roleId: Number(value.rol),
      picture: 'http://www.fillmurray.com/223/300',
    };

    this.userS.getUsers().subscribe((resp: any) => {
      const users = resp.users;
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
    });
  }
}
