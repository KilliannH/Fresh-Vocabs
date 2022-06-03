import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  login(credentials: Object) {
    return this.http.post('/login', credentials).subscribe((res) => res);
  }

  getVocabs() {
    // return this.http.get()
  }
}
