import { LOCALSTORAGE_TOKEN_KEY } from "../app.module";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs';
import constants from '../constants';
import { JwtHelperService } from '@auth0/angular-jwt';
import {LoginRequest, LoginResponse, UserInfos} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: UserInfos | undefined;
  token: string | null;

  constructor(private http: HttpClient, private jwtService: JwtHelperService) {
    this.token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    this.decodeToken();
  }


  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(constants.urlPrefix + '/login', loginRequest).pipe(
      tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.token)),
      tap(() => {
        console.log('[Auth] - Login Successful');
        this.decodeToken();
      })
    );
  }

  decodeToken() {
    if(this.token) {
      const decoded = this.jwtService.decodeToken(this.token);
      this.userLoggedIn = {
        username: decoded.sub,
        tokenExpiresDate: decoded.exp
      };
    }
  }

  logout() {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    this.userLoggedIn = undefined;
  }
}

// from : https://github.com/ThomasOliver545/angular-material-login-and-register-example/blob/main/src/app/public/services/auth-service/auth.service.ts
// see for refreshToken logic, how it's done (eventually)
