import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user-interface';
import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private httpService: ApiService) {
  }

  ngOnInit() {
    this.users$ = this.httpService.getUsers();
    // this.httpService.getUsers().subscribe(data => {
    //   this.users = data;
    //   this.httpService.setSpinnerState(false);
    // });
  }

}
