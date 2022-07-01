import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Vocab} from "../models/vocab";
import constants from "../constants";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers: HttpHeaders;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.token ?
    this.headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Bearer ' + this.authService.token}) :
    this.headers = new HttpHeaders({'Content-Type':'application/json'});
  }

  newVocab(vocab:Vocab) {
    return this.http.post(constants.urlPrefix + '/api/vocabs', vocab, {headers: this.headers}).subscribe((res: any) => {
      console.log(res);
      return res;
    });
  }

  getVocabs() {
    return this.http.get(constants.urlPrefix + '/api/vocabs', {headers: this.headers}).subscribe((res: any) => {
      return res;
    });
  }
}
