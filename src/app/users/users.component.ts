import { Component, OnInit } from '@angular/core';
import { User } from '../config/interfaces';
import { HttpService } from '../config/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [HttpService]
})
export class UsersComponent implements OnInit {

  users: Array<User> = [];
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getUsers().subscribe(data => this.users = data);
  }

}
