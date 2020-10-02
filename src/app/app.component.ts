import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'angular-i18n';
  company: string = "MyCompany"
  created_by: string = $localize`Created by ${this.company}`
  localeList: object = [
    { code: 'en-US', label: 'English' },
    { code: 'si', label: 'සිංහල'}
  ]
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
