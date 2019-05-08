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

  constructor(private movieService : MovieService, private route:ActivatedRoute) { 

  }

  ngOnInit() {
    

    if(this.route && this.route.paramMap){
      this.route.paramMap.subscribe(map => {
        if(map['params'] && map['params'].id){
          // let movieTitle: string = map['params'].name;
          let movieId: string = map['params'].id;
          if(movieId){
            this.movieService.getMovie(movieId).subscribe(
              data => {
                console.log(data);
                this.movieInfo = data
              }
            );
          }
        }
        
      });
    }
    

     
  }

  

}
