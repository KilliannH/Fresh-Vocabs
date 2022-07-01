import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import {LOCALSTORAGE_TOKEN_KEY} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private jwtService: JwtHelperService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) || undefined;
    if (this.jwtService.isTokenExpired(token)) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }

}
