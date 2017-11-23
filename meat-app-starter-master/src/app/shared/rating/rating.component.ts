import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  rates: number [] = [1, 2, 3, 4, 5];
  rate = 0;
  previousRate: number;


  constructor() {
  }

  ngOnInit() {
  }

  setRate(rate: number) {
    this.rate = rate;
    this.previousRate = undefined;
  }

  setTemporaryRate(rate: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = rate;
  }

  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }

}
