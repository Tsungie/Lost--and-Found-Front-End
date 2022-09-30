import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Authenticate } from '../models';
import { UserForm } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(authenticate: Authenticate) {
    return this.http.post(`http:\\localhost:3000\login`, authenticate).pipe(
      map((result: any) => {
        localStorage.setItem('token', result['token']);
        localStorage.setItem('profile', JSON.stringify(result['profile']));
        return result;
      })
    );
  }

  register(user: UserForm) {
    return this.http.post(`http:\\localhost:3000\register`, user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }
}
