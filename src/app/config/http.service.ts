import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post, PostComments, User} from './interfaces';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpService {
  public isVisibleSpinner = false;
  getSpinnerState() { return this.isVisibleSpinner; }
  setSpinnerState(state): void { this.isVisibleSpinner = state; }

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    this.setSpinnerState(true);
    return this.http.get(environment.url + 'posts')
      .pipe(map((data: Array<Post>) => {
        const posts = data;
        return posts.sort((a, b) => {
          return a.id - b.id;
        });
      }));
  }

  getOnePost(id): Observable<Post> {
    this.setSpinnerState(true);
    return this.http.get(environment.url + 'posts/' + id)
      .pipe(map((data: Post) => {
        return data;
      }));
  }

  getOnePostComments(id): Observable<PostComments[]> {
    this.setSpinnerState(true);
    return this.http.get(environment.url + 'posts/' + id + '/comments')
      .pipe(map((data: PostComments[]) => data));
  }

  getUsers(): Observable<User[]> {
    this.setSpinnerState(true);
    return this.http.get(environment.url + 'users')
      .pipe(map((data: User[]) => {
        const users = data;
        return users.sort((a, b) => {
          return a.id - b.id;
        });
      }));
  }

  getOneUser(id): Observable<User> {
    this.setSpinnerState(true);
    return this.http.get(environment.url + 'users/' + id)
      .pipe(
        map((data: User) => data)
      );
  }
}
