import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fresh Vocabs';

  constructor(public authService: AuthService, public router: Router) {}
  // TODO - pass connectedUser to the nav here, like in react

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
