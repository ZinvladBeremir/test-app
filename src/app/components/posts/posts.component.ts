import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post-interface';
import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;
  constructor(private httpService: ApiService) {}

  ngOnInit() {
    this.posts$ = this.httpService.getPosts();
  }
}
