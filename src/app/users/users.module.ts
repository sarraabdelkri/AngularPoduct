import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { FormUserComponent } from './form-user/form-user.component';

@NgModule({
  declarations: [
    UsersComponent,
    ListUserComponent,
    ProfilComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
