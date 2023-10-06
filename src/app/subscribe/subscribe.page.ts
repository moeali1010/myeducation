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
  constructor() {}

  ngOnInit() {
    this.displayLast30years();
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

  displayLast30years() {
    for (let index = 0; index < 30; index++) {
      this.pastYears.push(this.currentYear - index);
    }
  }

  // date

  // const pastYears: number[] = [];

  // for (let i:number = 0; i <= 30; i++) {
  //   this.pastYears.push(currentYear - i);
  // }

  // check if year is leab
  // isLeapYear = (year: number): boolean => {
  //   return new Date(year, 1, 29).getDate() === 29;
  // };
}
