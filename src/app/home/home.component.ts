import { Component, OnInit } from '@angular/core';
import {Vocab} from "../vocab";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vocabs: Vocab[];

  constructor() {
    this.vocabs = [
      new Vocab("1", "yes", "oui", "numn"),
      new Vocab("2", "hello", "salut", "interjection")
    ]
  }

  ngOnInit(): void {}

}
