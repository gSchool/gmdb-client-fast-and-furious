import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movieInfo: Movie;
  public movieTitle:string;

  constructor(private movieService : MovieService, private route:ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(param => {
     this.movieTitle= param.get('title');
     if(this.movieTitle != null && this.movieTitle != undefined){
      this.movieService.getMovie(this.movieTitle).subscribe(
        data => {
          this.movieInfo = data
        }
      );
     }
    });

     
  }

  

}
