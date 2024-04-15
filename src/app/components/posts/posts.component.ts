import { Component } from '@angular/core';
import { Post } from '../../interfaces/Post';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: Array<Post> = [];

  constructor(httpClient: HttpClient) {
    httpClient.get<Array<Post>>("https://65e2fc4788c4088649f51fbf.mockapi.io/posts").subscribe((data)=>{
      this.posts = data
    })
  }
}

