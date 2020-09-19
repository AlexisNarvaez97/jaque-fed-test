import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showModal = false;

  title = 'jaque-fed';


  sendModal(e: any) {
    console.log(e);
    this.showModal = e;
  }

  modalClosed(e) {
    this.showModal = !e;
  }

}
