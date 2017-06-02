import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

@inject(EventAggregator)
export class App {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    console.log(this.eventAggregator);
    this.message = 'Hello World!';
  }
}
