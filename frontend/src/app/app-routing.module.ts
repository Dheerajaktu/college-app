import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar } from './components/comp-layout/navbar/navbar.componenent';
import { Login } from './components/login/login.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: Login },
  { path: 'home', component: Navbar }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
