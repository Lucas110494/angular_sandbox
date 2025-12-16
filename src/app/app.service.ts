import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _http = inject(HttpClient);

  retrieveUsers() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  retrieveUserById(id: number) {
    return this._http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  retrievePosts() {
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }

  retrievePostById(id: number) {
    return this._http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
