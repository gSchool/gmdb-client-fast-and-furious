import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleMovieComponent } from '../single-movie/single-movie.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        MovieListComponent,
        SingleMovieComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
  
  it('text input should exist', ()=>{
    //setup
    //exercise
      //expect
      let expected = 1; //1 or more
      //actual
      let actual = fixture.elementRef.nativeElement.querySelectorAll('input[name=q]').length;
    //assert
    expect(actual).toBeGreaterThanOrEqual(expected);
    expect(fixture.elementRef.nativeElement.querySelector('input[name=q]')).toBeTruthy();
    //teardown
  });

  it('text input should take input', ()=>{
    //setup
    // set the value as "Fast and Furious"
    fixture.componentRef.instance.searchForm.setValue({ q: "Fast and Furious" });
    // set form as dirty
    fixture.componentRef.instance.searchForm.markAsDirty();
    //exercise
      //expect
      let expected = 'Fast and Furious';
      // "Fast and Furious"
      //actual
      let actual = fixture.componentInstance.searchForm.get('q').value;

      // get component keyword value (q)
    //assert
    expect(actual).toEqual(expected);
    // expect component keyword to be equal to "Fast and Furious"
    //teardown
  });

  it('search button should exist', ()=>{
    //setup
    //exercise
      //expect
      let expected = 1; //1 or more
      //actual
      let actual = fixture.elementRef.nativeElement.querySelectorAll('input[type=submit]').length;
    //assert
    expect(actual).toBeGreaterThanOrEqual(expected);
    expect(fixture.elementRef.nativeElement.querySelector('input[type=submit]')).toBeTruthy();
    //teardown
  });

  it('single movie should exist', ()=>{
    //setup
      // set the value as "Thor"
      fixture.componentRef.instance.searchForm.setValue({ q: "Thor" });
      // set form as dirty
      fixture.componentRef.instance.searchForm.markAsDirty();

      fixture.componentRef.instance.findMovie(fixture.componentRef.instance.searchForm);
      fixture.detectChanges();
    //exercise
      //expect
      let expected = 1; //1 or more
      //actual
      let actual = fixture.elementRef.nativeElement.querySelectorAll('.single-movie').length;
    //assert
    expect(actual).toBeGreaterThanOrEqual(expected);
    expect(fixture.elementRef.nativeElement.querySelector('.single-movie')).toBeTruthy();
    //teardown
  });

  describe('search button should get valid api data', ()=>{
    it('search title should return movie(s)', ()=>{
      //setup
      // set the value as "Fast and Furious"
      fixture.componentRef.instance.searchForm.setValue({ q: "Fast and Furious" });
      // set form as dirty
      fixture.componentRef.instance.searchForm.markAsDirty();
      //submit form
      fixture.componentRef.instance.findMovie(fixture.componentRef.instance.searchForm);
      fixture.detectChanges(); 
      //exercise
        //expect
        let expected = 1; 
        // { ... movie data ... }
        //actual
        let actual = fixture.componentInstance.movieResults.length;
        // submit the form and should get movie data from service (findMovie) // will need a mock service
      //assert
      // expect movie data from service to equal { ... movie data ... }
      expect(actual).toBeGreaterThanOrEqual(expected);
      //teardown
    });
    it('search actor should return movie(s)', ()=>{
      //setup
      // set the value as "Tom Cruise"
      fixture.componentRef.instance.searchForm.setValue({ q: "Tom Cruise" });
      // set form as dirty
      fixture.componentRef.instance.searchForm.markAsDirty();
      //submit form
      fixture.componentRef.instance.findMovie(fixture.componentRef.instance.searchForm);
      fixture.detectChanges(); 
      //exercise
        //expect
        let expected = 1; 
        // { ... movie data ... }
        //actual
        let actual = fixture.componentInstance.movieResults.length;
        // submit the form and should get movie data from service (findMovie) // will need a mock service
      //assert
      // expect movie data from service to equal { ... movie data ... }
      expect(actual).toBeGreaterThanOrEqual(expected);
      //teardown
    });
    it('search keyword should return movie(s)', ()=>{
      //setup
      fixture.componentRef.instance.searchForm.setValue({ q: "car" });
      // set the value as "car"
      // set form as dirty
      fixture.componentRef.instance.searchForm.markAsDirty();
     
      //submit form
      fixture.componentRef.instance.findMovie(fixture.componentRef.instance.searchForm);
      fixture.detectChanges(); 
       //exercise
        //expect
        let expected = 1;
        // { ... movie data ... }
        //actual
        let actual = fixture.componentInstance.movieResults.length;
        // submit the form and should get movie data from service (findMovie) // will need a mock service
      //assert  
      expect(actual).toBeGreaterThanOrEqual(expected);
      // expect movie data from service to equal { ... movie data ... }
      //teardown
    });
    it('should show 0 results if api response has 0 results', ()=>{
      //setup
      // set the value as "asdf"
      fixture.componentRef.instance.searchForm.setValue({ q: "asdf" });
      // set form as dirty
      fixture.componentRef.instance.searchForm.markAsDirty();
      //submit form
      fixture.componentRef.instance.findMovie(fixture.componentRef.instance.searchForm);
      fixture.detectChanges(); 
      //exercise
        //expect
        // [ ]
        let expected = 0; //no results or 0
        //actual
        // submit the form and should get no data from service (findMovie) // will need a mock service
        let actual = fixture.elementRef.nativeElement.querySelectorAll('.single-movie').length;
        
      //actual
      //assert  
      // expect movie data from service to equal []d\
      expect(actual).toEqual(expected);
      expect(fixture.elementRef.nativeElement.querySelector('.single-movie')).toBeFalsy();
      expect(fixture.elementRef.nativeElement.querySelector('.no-results')).toBeTruthy();
      //teardown
    });
    it('should show 1 result if api response has 1 result', ()=>{
      //setup
      // set the value as "titanic"
      fixture.componentRef.instance.searchForm.setValue({ q: "titanic" });
      // set form as dirty
      fixture.componentRef.instance.searchForm.markAsDirty();
      //submit form
      fixture.componentRef.instance.findMovie(fixture.componentRef.instance.searchForm);
      fixture.detectChanges();
      //exercise
        //expect
        let expected = 1; 
        // [{ ... movie data ... }]
        //actual
        
        // submit the form and should get no data from service (findMovie) // will need a mock service
        let actual = fixture.elementRef.nativeElement.querySelectorAll('.single-movie').length;
        
      //actual
      //assert  
      // expect movie data from service to equal []
      expect(actual).toEqual(expected);
      expect(fixture.elementRef.nativeElement.querySelector('.single-movie')).toBeTruthy();
      //teardown
    });
    it('if response from api has more than 10 results should show 10 results and show more button', ()=>{
      //setup
      // set the value as "titanic"
      fixture.componentRef.instance.searchForm.setValue({ q: "car" });
      // set form as dirty
      fixture.componentRef.instance.searchForm.markAsDirty();
      //submit form
      fixture.componentRef.instance.findMovie(fixture.componentRef.instance.searchForm);
      fixture.detectChanges();
      //exercise
        //expect
        // [{ ... movie data ... }]
        let expected = 10; //10 or more results
        //actual
        // submit the form and should get no data from service (findMovie) // will need a mock service
        let actual = fixture.elementRef.nativeElement.querySelectorAll('.single-movie').length;
        
      //actual
      //assert  
      // expect movie data from service to equal []
      expect(actual).toBeGreaterThanOrEqual(expected);
      expect(fixture.elementRef.nativeElement.querySelector('.single-movie')).toBeTruthy();
      //teardown
    });
    it('if show more is clicked then we show all of the results', ()=>{
      //setup
      // set the value as "car"
      fixture.componentRef.instance.searchForm.setValue({ q: "car" });
      // set form as dirty
      fixture.componentRef.instance.searchForm.markAsDirty();
      //submit form
      fixture.componentRef.instance.findMovie(fixture.componentRef.instance.searchForm);
      //hit show all
      fixture.componentInstance.showAll = true;
      fixture.detectChanges();

      //exercise
        //expect
        // [{ ... movie data ... }]
        let expected = 101; //15 results
        //actual
        // submit the form and should get no data from service (findMovie) // will need a mock service
        let actual = fixture.elementRef.nativeElement.querySelectorAll('.single-movie').length;
        
      //actual
      //assert  
      // expect movie data from service to equal []
      expect(actual).toEqual(expected);
      expect(fixture.elementRef.nativeElement.querySelector('.single-movie')).toBeTruthy();
      //teardown
    });
  });
});
