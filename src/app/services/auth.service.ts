import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";


//const url = "http://sulu1.test.moplet.com:3000/form";
const url = "http://localhost:3000/form";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }
  
  create(data: { name: any; email: any; password: any; }): Observable<any> {
    return this.http.post(url, data, {responseType: 'text'});
    
  }
}
