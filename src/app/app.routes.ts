import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },{
  path: 'users/:id',
  component: UserDetailsComponent,
},
  {
    path:'',
    redirectTo: 'posts',
    pathMatch: 'full'
  }
];
