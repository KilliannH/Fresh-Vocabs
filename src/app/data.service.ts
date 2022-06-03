import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import config from "./config";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlPrefix: String
  constructor(private http: HttpClient) {
    this.urlPrefix = `${config.backendProtocol}://${config.backendHost}:${config.backendPort}`;
  }

  login(credentials: Object) {
    return this.http.post(this.urlPrefix + '/login', credentials).subscribe((res) => res);
  }

  getVocabs() {
    // return this.http.get()
  }
}
