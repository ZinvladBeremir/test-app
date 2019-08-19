import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../interfaces';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
