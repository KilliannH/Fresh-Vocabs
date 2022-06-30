import { Component, OnInit } from '@angular/core';
import {Vocab} from "../models/vocab";
import {AuthService} from "../services/auth.service";
import {UserInfos} from "../interfaces";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vocabs: Vocab[]
  constructor(public authService: AuthService) {
    this.vocabs = [
      new Vocab("1", "yes", "oui", "numn"),
      new Vocab("2", "hello", "salut", "interjection")
    ]
    // we do have a connected user at this point
  }

  ngOnInit(): void { }

}
