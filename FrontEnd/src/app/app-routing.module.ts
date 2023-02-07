import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './posts/login/login.component';
import { PostComponent } from './posts/post/post.component';
import { MainComponent } from './state-management/main/main.component';

const routes: Routes = [
  {
    path: 'counter',
    component: MainComponent,
  },
  {
    path:'post',
    component:PostComponent,
    children:[
      {
        path:':id',
        component:PostComponent
      }
    ]
  },
  {
    path:'addUser',
    component:PostComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
