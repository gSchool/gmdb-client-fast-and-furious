import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../review';


@Component({
  selector: 'app-single-review',
  templateUrl: './single-review.component.html',
  styleUrls: ['./single-review.component.scss']
})
export class SingleReviewComponent implements OnInit {
  @Input()
  review: Review;
  constructor() { }

  ngOnInit() {
  }

}
