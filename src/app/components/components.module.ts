import { OrderUserPipe } from './../pipes/order-user.pipe';

import { StatusFilterPipe } from './../pipes/status-filter.pipe';
import { SearchPipe } from './../pipes/search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { ModalComponent } from './modal/modal.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEditComponent } from './modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    UserSectionComponent,
    ModalComponent,
    TableUsersComponent,
    ListUsersComponent,
    SearchPipe,
    StatusFilterPipe,
    ModalEditComponent,
    OrderUserPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    UserSectionComponent,
    ModalComponent,
    TableUsersComponent,
    ListUsersComponent,
    ModalEditComponent,
    OrderUserPipe
  ]
})
export class ComponentsModule { }
