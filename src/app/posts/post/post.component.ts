import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../interfaces';
import {HttpService} from '../config/http.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [HttpService]
})
export class PostComponent implements OnInit {
  post = {};
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
    console.log('post =>', this.post);
  }

}
