import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {DataService} from "../services/data.service";
import {convertVocab, partOfSpeechItems} from "../interfaces";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vocabs: any
  constructor(public authService: AuthService, private dataService: DataService) {
    this.vocabs = [];
  }

  ngOnInit(): void {
    this.dataService.getVocabs().subscribe((res: any) => {
      this.vocabs = convertVocab(res);
    });
  }

}
