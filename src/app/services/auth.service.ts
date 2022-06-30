import { LOCALSTORAGE_TOKEN_KEY } from "../app.module";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs';
// @ts-ignore
const config = require("config");
import { JwtHelperService } from '@auth0/angular-jwt';
import {LoginRequest, LoginResponse} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean = false
  token: string | null;
  urlPrefix: string;

  constructor(private http: HttpClient, private jwtService: JwtHelperService) {
    this.token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    this.userLoggedIn = this.token ? jwtService.decodeToken(this.token) : false;
    this.urlPrefix = `${config.backendProtocol}://${config.backendHost}:${config.backendPort}`;
  }


  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.urlPrefix + '/login', loginRequest).pipe(
      tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.token)),
      tap(() => {
        console.log('[Auth] - Login Successful');
        this.userLoggedIn = true;
      })
    );
  }

  decodeToken() {
    return this.jwtService.decodeToken();
  }

  logout() {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    this.userLoggedIn = false;
  }
}

// from : https://github.com/ThomasOliver545/angular-material-login-and-register-example/blob/main/src/app/public/services/auth-service/auth.service.ts
// see for refreshToken logic, how it's done (eventually)
