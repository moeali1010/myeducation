import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  topics: any = [];
  // date
  currentYear: number = new Date().getFullYear();
  pastYears: number[] = [];
  months: string[] = [];
  days: number[] = [];

  constructor() {}

  ngOnInit() {
    this.displayLast20years();
    this.displayMonths();
    this.displayDays();
  }

  // topics
  addToTopics(topic: string) {
    // if exist in array remove it
    if (this.topics.includes(topic)) {
      this.topics.splice(this.topics.indexOf(topic), 1);
      return;
    }
    // if length of array less than 3 items
    this.topics.length < 3 ? this.topics.push(topic) : '';
  }

  displayLast20years() {
    for (let index = 0; index < 20; index++) {
      this.pastYears.push(this.currentYear - index);
    }
  }

  displayMonths() {
    this.months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  displayDays() {
    for (let index = 1; index < 32; index++) {
      this.days.push(index);
    }
  }
}
