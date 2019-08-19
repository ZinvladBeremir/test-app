import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  toTop(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  }
}
