import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';


@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movieInfo: Movie;
  constructor(private movieService : MovieService) { 

  }

  ngOnInit() {
    this.movieService.getMovie().subscribe(
      data => {
        this.movieInfo = data
      }
    )
  }

  

}
