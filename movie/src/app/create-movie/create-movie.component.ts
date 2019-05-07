import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {


  createMovie: FormGroup;

  constructor(private fb: FormBuilder) { }

  
  ngOnInit() {       
    this.createMovie = this.fb.group({
      title:['' ,[Validators.required]],
      year:['' ,[Validators.required]],
      rated:['' ,[Validators.required]],
      released:['' ,[Validators.required]],
      runtime:['' ,[Validators.required]],
      genre:['' ,[Validators.required]],
      director:['' ,[Validators.required]],
      writer:['' ,[Validators.required]],
      actors:['' ,[Validators.required]],
      plot:['' ,[Validators.required]],
      language:['' ,[Validators.required]],
      country:['' ,[Validators.required]],
      awards:['' ,[Validators.required]],
      poster:['' ,[Validators.required]],
      metascore:['' ,[Validators.required]],
      imdbRating:['' ,[Validators.required]],
      imdbVotes:['' ,[Validators.required]],
      imdbid:['' ,[Validators.required]],
      type:['' ,[Validators.required]],
      dvd:['' ,[Validators.required]],
      boxOffice:['' ,[Validators.required]],
      production:['' ,[Validators.required]],
      website:['' ,[Validators.required]],
      response:['' ,[Validators.required]]
})
  }

}
