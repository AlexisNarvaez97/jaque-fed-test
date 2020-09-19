import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { UserSectionComponent } from './user-section/user-section.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    UserSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    UserSectionComponent
  ]
})
export class ComponentsModule { }
