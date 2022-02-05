import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar } from './components/comp-layout/navbar/navbar.componenent';
import { Login } from './components/login/login.component';
// import { Sidenav } from './components/comp-layout/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Login
    // Sidenav
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
