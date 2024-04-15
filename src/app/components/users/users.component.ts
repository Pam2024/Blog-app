import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../interfaces/User';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: Array<User> = [];

  constructor(httpClient:HttpClient){
    httpClient.get<Array<User>>("https://65e2fc4788c4088649f51fbf.mockapi.io/users").subscribe((data)=>{
    this.users = data
    })
  }
}
