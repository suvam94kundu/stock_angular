import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeModule} from './home/home.module'
import { UserComponent } from './login/user/user.component';

const routes: Routes = [
  // 
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'login', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
