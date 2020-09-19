import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.scss']
})
export class UserSectionComponent implements OnInit {

  @Output() modalOpen = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.modalOpen.emit(true);
  }

}
