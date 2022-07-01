import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { Location } from '@angular/common';
import {UserInfos} from "../interfaces";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input()
  userLoggedIn: UserInfos | undefined;

  constructor(public authService: AuthService, private router: Router, public location: Location) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
