import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent implements OnInit {
  createReviewForm: FormGroup;
  navigateBackUrl: string;

  constructor(private fb: FormBuilder,
    private reviewService : ReviewService,
    private routes: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.initNavigateUrl();
  }

  initForm(){
    this.createReviewForm = this.fb.group({
      // movieid: ['', [Validators.maxLength(100)]],
      email: ['', [Validators.maxLength(100)]],
      title: ['', [Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(100)]]
    });
  }

  initNavigateUrl(){
    if(this.routes && this.routes.paramMap){
      this.routes.paramMap.subscribe(map => {
        if(map['params'] && map['params'].navigateBack){
          this.navigateBackUrl = decodeURIComponent(map['params'].navigateBack);
        }
      })
    }
  }


  createReview(form: FormGroup){
    if(this.routes && this.routes.paramMap){
      this.routes.paramMap.subscribe(map => {
        if(map['params'] && map['params'].id){
          let review = new Review();
          review.movieId = map['params'].id;
          review.email = form.get('email').value;
          review.title = form.get('title').value;
          review.description = form.get('description').value;
          //send to service...
          this.reviewService.createReview(review).subscribe(data => {
            console.log("sent... yah");
            console.log(data);
            if(this.navigateBackUrl){
              this.router.navigate([this.navigateBackUrl]);
            }
          })
        }
      })
    }
  }

}
