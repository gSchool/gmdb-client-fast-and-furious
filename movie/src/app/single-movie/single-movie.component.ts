import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  @Input()
  movie: Movie;

  constructor(private router:Router) { }

  ngOnInit() {

  }
  
//  getMovieDetails(title:string){
// // this.router.navigate(['movies/detail'], {queryParams:{"title":title}} );
//  }
}
