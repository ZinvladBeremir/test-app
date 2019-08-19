import { Component, OnInit } from '@angular/core';
import {Post} from '../config/interfaces';
import {HttpService} from '../config/http.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [HttpService]
})
export class PostsComponent implements OnInit {

  posts: Array<Post> = [];
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getPosts().subscribe(data => this.posts = data);
  }
}
