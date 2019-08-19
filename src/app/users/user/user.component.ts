import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../config/http.service';
import {Subscription} from 'rxjs';
import {User} from '../../config/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [HttpService]
})
export class UserComponent implements OnInit {
  user: User;
  private id: number;
  private subscription: Subscription;

  constructor(
    private httpService: HttpService,
    private activateRoute: ActivatedRoute
  ) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.httpService.getOneUser(this.id).subscribe((data: User) => this.user =  data);
  }

}
