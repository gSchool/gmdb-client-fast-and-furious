import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  @Input()
  movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
