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
  monthLimit: number = 0;
  constructor() {}

  ngOnInit() {
    this.displayLast20years();
    this.displayMonths();
    this.displayDays(this.currentYear, 'January');
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

  // check if year is leab
  // isLeapYear = (year: number): boolean => {
  //   return new Date(year, 1, 29).getDate() === 29;
  // };
  leapYear(year: number) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  }

  displayDays(year: any, month: any) {
    if (this.leapYear(year) && month == 'February') {
      // leapYear
      this.monthLimit = 30;
    }
    if (!this.leapYear(year) && month == 'February') {
      // not leapYear
      this.monthLimit = 29;
    }

    // 31 days months
    if (
      month == 'January' ||
      month == 'March' ||
      month == 'May' ||
      month == 'July' ||
      month == 'August' ||
      month == 'October' ||
      month == 'December'
    ) {
      this.monthLimit = 32;
    }

    // 30 days months
    if (
      month == 'April' ||
      month == 'June' ||
      month == 'September' ||
      month == 'November'
    ) {
      this.monthLimit = 31;
    }

    this.days = [];
    for (let index = 1; index < this.monthLimit; index++) {
      this.days.push(index);
    }
  }
}
