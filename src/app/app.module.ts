import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { JwtModule } from '@auth0/angular-jwt';

import { NavbarComponent } from './navbar/navbar.component';
import {HomeComponent} from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import config from "./config.example.";
import {AuthService} from "./services/auth.service";
import { NewVocabModalComponent } from './new-vocab-modal/new-vocab-modal.component';


// specify the key where the token is stored in the local storage
export const LOCALSTORAGE_TOKEN_KEY = 'fresh_vocab_login_and_register_example';

// specify tokenGetter for the angular jwt package
export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    NewVocabModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [`${config.backendHost}:${config.backendPort}`]
      }
    })
  ],

  // make it a singleton
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
