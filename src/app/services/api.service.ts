import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post-interface';
import {PostComments} from '../models/post-comments.interface';
import {User} from '../models/user-interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(environment.url + 'posts');
  }

  getOnePost(id): Observable<Post> {
    return this.http.get(environment.url + 'posts/' + id)
      .pipe(map((data: Post) => {
        return data;
      }));
  }

  getOnePostComments(id): Observable<PostComments[]> {
    return this.http.get(environment.url + 'posts/' + id + '/comments')
      .pipe(map((data: PostComments[]) => data));
  }

  getUsers() {
    return this.http.get<User[]>(environment.url + 'users');
  }

  getOneUser(id) {
    return this.http.get<User>(environment.url + 'users/' + id);
  }
}
