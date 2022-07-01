import { Component, OnInit } from '@angular/core';
import {Vocab} from "../models/vocab";
import {AuthService} from "../services/auth.service";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vocabs: Vocab[]
  constructor(public authService: AuthService, private dataService: DataService) {
    this.vocabs = [];
    // we do have a connected user at this point
  }

  ngOnInit(): void {
    this.dataService.getVocabs()
  }

}
