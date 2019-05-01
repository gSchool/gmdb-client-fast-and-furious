import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent ]
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

  it('single movie should exist', ()=>{
    //setup
      // set the value as "asdf"
      // set form as dirty
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
  
  xit('text input should exist', ()=>{
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

  xit('text input should take input', ()=>{
    //setup
    // set the value as "Fast and Furious"
    // set form as dirty
    //exercise
      //expect
      // "Fast and Furious"
      //actual
      // get component keyword value (q)
    //assert
    // expect component keyword to be equal to "Fast and Furious"
    //teardown
  });

  xit('search button should exist', ()=>{
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
  xdescribe('search button should get valid api data', ()=>{
    xit('search title should return movie(s)', ()=>{
      //setup
      // set the value as "Fast and Furious"
      // set form as dirty
      //exercise
        //expect
        // { ... movie data ... }
        //actual
        // submit the form and should get movie data from service (findMovie) // will need a mock service
      //assert
      // expect movie data from service to equal { ... movie data ... }
      //teardown
    });
    xit('search actor should return movie(s)', ()=>{
      //setup
      // set the value as "Tom Cruise"
      // set form as dirty
      //exercise
        //expect
        // { ... movie data ... }
        //actual
        // submit the form and should get movie data from service (findMovie) // will need a mock service
      //assert
      // expect movie data from service to equal { ... movie data ... }
      //teardown
    });
    xit('search keyword should return movie(s)', ()=>{
      //setup
      // set the value as "car"
      // set form as dirty
      //exercise
        //expect
        // { ... movie data ... }
        //actual
        // submit the form and should get movie data from service (findMovie) // will need a mock service
      //assert  
      // expect movie data from service to equal { ... movie data ... }
      //teardown
    });
    xit('should show 0 results if api response has 0 results', ()=>{
      //setup
      // set the value as "asdf"
      // set form as dirty
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
      expect(fixture.elementRef.nativeElement.querySelector('.single-movie')).toBeTruthy();
      //teardown
    });
    xit('should show 1 result if api response has 1 result', ()=>{
      //setup
      // set the value as "asdf"
      // set form as dirty
      //exercise
        //expect
        // [{ ... movie data ... }]
        let expected = 1; //1 result
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
    xit('if response from api has more than 10 results should show 10 results and show more button', ()=>{
      //setup
      // set the value as "asdf"
      // set form as dirty
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
      expect(actual).toBeGreaterThan(expected);
      expect(fixture.elementRef.nativeElement.querySelector('.single-movie')).toBeTruthy();
      //teardown
    });
    xit('if show more is clicked then we show all of the results', ()=>{
      //setup
      // set the value as "Tom Cruise"
      // set form as dirty
      //exercise
        //expect
        // [{ ... movie data ... }]
        let expected = 15; //15 results
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
