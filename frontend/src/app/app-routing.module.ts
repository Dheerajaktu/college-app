import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/comp-layout/home/home.componenent';
import { Login } from './components/login/login.component';
import { Signup } from './components/register/signup.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: Login },
  { path: 'register', component: Signup },
  { path: 'home', component: Home }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
