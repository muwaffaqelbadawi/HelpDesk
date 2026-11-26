import { Component } from '@angular/core';
import { GetAllUsersComponent } from '../get-all/get-all-users';
import { CreateUserAccountComponent } from '../create/create-user-account';
import { GetMyAccountComponent } from '../get-my/get-my-account';

@Component({
  selector: 'app-users',
  imports: [
    CreateUserAccountComponent,
    GetAllUsersComponent,
    GetMyAccountComponent,
    GetMyAccountComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent { }