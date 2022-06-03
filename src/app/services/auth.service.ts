import { LOCALSTORAGE_TOKEN_KEY } from "../app.module";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {DecodedToken, LoginRequest, LoginResponse} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private jwtService: JwtHelperService) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/login', loginRequest).pipe(
      tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.token)),
      tap(() => console.log('[Auth] Login Successful'))
    );
  }

  decodeToken() {
    return this.jwtService.decodeToken();
  }
}
