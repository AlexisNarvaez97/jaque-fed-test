import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { ModalComponent } from './modal/modal.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { ListUsersComponent } from './list-users/list-users.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    UserSectionComponent,
    ModalComponent,
    TableUsersComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    UserSectionComponent,
    ModalComponent,
    TableUsersComponent,
    ListUsersComponent
  ]
})
export class ComponentsModule { }
