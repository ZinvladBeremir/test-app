import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Subscription} from 'rxjs';
import {PostComments} from '../../models/post-comments.interface';
import {Post} from '../../models/post-interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;
  postComments: Array<PostComments>;
  private id: number;
  private subscription: Subscription;

  constructor(
    private httpService: ApiService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.httpService.getOnePost(this.id).subscribe(data => this.post = data);
    this.httpService.getOnePostComments(this.id).subscribe(data => {
      this.postComments = data;
    });
  }

}
