import {Component, OnInit } from '@angular/core';
import { HttpService } from './config/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
  }

  toTop(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  }
}
