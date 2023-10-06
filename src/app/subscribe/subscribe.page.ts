import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  topics: any = [];
  constructor() {}

  ngOnInit() {}

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
}
