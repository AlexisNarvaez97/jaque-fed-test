import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  @Output() closeModal = new EventEmitter<boolean>();

  constructor() {
   }

  ngOnInit(): void {
  }

  modalClose() {
    this.closeModal.emit(true);
  }

  gerUser(e) {
    console.log(e)
  }

}
