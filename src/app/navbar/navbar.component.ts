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

  constructor(public location: Location) { }

  @Input()
  logout: any;

  @Input()
  username: string | undefined
}
