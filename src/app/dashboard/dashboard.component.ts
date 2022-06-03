import { Component, OnInit } from '@angular/core';
import {Vocab} from "../models/vocab";
import {AuthService} from "../services/auth.service";
import {DecodedToken} from "../interfaces";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vocabs: Vocab[]
  decodedToken: DecodedToken;
  connectedUser: string | undefined;
  constructor(authService: AuthService) {
    this.vocabs = [
      new Vocab("1", "yes", "oui", "numn"),
      new Vocab("2", "hello", "salut", "interjection")
    ]
    this.decodedToken = authService.decodeToken();
  }

  ngOnInit(): void {
    this.connectedUser = this.decodedToken.username;
  }

}
