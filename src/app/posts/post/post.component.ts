import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../config/http.service';
import {Subscription} from 'rxjs';
import { Post, PostComments } from '../../config/interfaces';

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
    private httpService: HttpService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.httpService.getOnePost(this.id).subscribe(data => this.post = data);
    this.httpService.getOnePostComments(this.id).subscribe(data => {
      this.postComments = data;
      this.httpService.setSpinnerState(false);
    });
  }

}
