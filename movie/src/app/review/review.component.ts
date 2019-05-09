import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  reviews: Review[];
  movieId: string;

  constructor(private reviewService: ReviewService, private routes: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if(this.routes && this.routes.paramMap){
      this.routes.paramMap.subscribe(map => {
        if(map['params'] && map['params'].id){
          // let movieTitle: string = map['params'].name;
          let movieId: string = map['params'].id;
          this.movieId = movieId;
          if(movieId){
            this.reviewService.getMovieReviews(movieId).subscribe(data => {
              this.reviews = data.map(r => {
                let review: Review = new Review();
                review.id = r.id;
                review.email = r.email;
                review.title = r.title;
                review.movieId = r.movieId;
                review.description = r.description;
                return review;
              });
              console.log(this.reviews);
              
            })
          }
        }
      })
    }
  }

  createReviewButton(){
    let navigateBack = encodeURIComponent(this.router.url);
    this.router.navigate([`/movies/review-create/${this.movieId}/${navigateBack}`]);
  }
}
