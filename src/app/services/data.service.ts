import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Vocab} from "../models/vocab";
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
    return this.http.post('/api/vocabs', vocab, {headers: this.headers});
  }

  getVocabs() {
    return this.http.get('/api/vocabs', {headers: this.headers});
  }
}
