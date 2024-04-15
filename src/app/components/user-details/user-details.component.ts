import { Component } from '@angular/core';
import { User } from '../../interfaces/User';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: User = {
    id: 0,
    name: '',
    lastname: '',
    email: ''
  }

  constructor(httpClient: HttpClient, activatedRoute: ActivatedRoute){

    const id = (activatedRoute.snapshot.params as any).id

    const url =`https://65e2fc4788c4088649f51fbf.mockapi.io/users/${id}`

    httpClient.get<User>(url).subscribe((data)=>{
      this.user = data;
    })

  }
}
