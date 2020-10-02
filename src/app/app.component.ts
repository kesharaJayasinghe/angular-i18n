import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'angular-i18n';
  tasksCount: number = 15;

  today: number = Date.now();

  genderCode: number = 0;

  male() {
    this.genderCode = 0;
  }
  female() {
    this.genderCode = 1;
  }
  other() {
    this.genderCode = 2;
  }
}
