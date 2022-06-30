import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, public location: Location) { }

  ngOnInit(): void {
    console.log("[Auth] currentUser", this.authService.userLoggedIn);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
