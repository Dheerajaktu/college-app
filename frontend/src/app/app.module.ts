import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home } from './components/comp-layout/home/home.componenent';
import { Login } from './components/login/login.component';
import { Signup } from './components/register/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    Home,
    Login,
    Signup

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
