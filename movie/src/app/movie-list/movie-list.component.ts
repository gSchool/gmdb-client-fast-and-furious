import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieResults: Movie[];
  searchForm: FormGroup;
  constructor(private fb: FormBuilder,private movieService : MovieService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.searchForm = this.fb.group({
      q: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]]
    });
  }

  findMovie(form:FormGroup){
    if(form.valid){
      let keyword: string = form.get('q').value;
      this.movieService.findMovie(keyword).subscribe(data => {
        console.log(data);
        this.movieResults = data;
      });
      console.log(keyword);
    }
    
  }

}
