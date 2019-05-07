import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieResults: Movie[];
  firstTenResults: Movie[];
  searchForm: FormGroup;
  showAll : boolean = false;
  constructor(
    private fb: FormBuilder,
    private movieService : MovieService,
    private routes: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.initForm();
    this.initKeyword();
  }

  initForm(){
    this.searchForm = this.fb.group({
      q: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]]
    });
  }
  initKeyword(){
    this.routes.paramMap.subscribe( map => {
      console.log(map['params'].q);
      if(map['params'].q){
        this.searchForm.setValue( { q: map['params'].q } );
        this.searchForm.markAsDirty();
        this.findMovie(this.searchForm);
      }
      

    });

  }

  findMovie(form:FormGroup){
    if(form.valid){
      let keyword: string = form.get('q').value;
      this.movieService.findMovie(keyword).subscribe(data => {
        console.log(data);
        this.movieResults = data;
        this.firstTenResults = data.slice(0, 10);
        this.showAll = false;
        this.router.navigate(['/movies/search', keyword]);
      });
      console.log(keyword);
    }
    
  }

  showMore(){
    this.showAll = !this.showAll;
  }

  additionalSearchRowStyle(){
    let out: string = " ";
    out += (this.movieResults && this.movieResults.length > 0) ? "" : "no-results";
    return out;
  }

}
