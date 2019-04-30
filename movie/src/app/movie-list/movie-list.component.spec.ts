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
  
  xit('text input should exist and take input', ()=>{

  });
  xit('search button should exist', ()=>{

  });
  xit('search button should send valid api request', ()=>{

  });
  xit('search title should return movie(s)', ()=>{

  });
  xit('search actor should return movie(s)', ()=>{

  });
  xit('search keyword should return movie(s)', ()=>{

  });
  xit('should show 0 results if api response has 0 results', ()=>{

  });
  xit('should show 1 result if api response has 1 result', ()=>{

  });
  xit('if response from api has more than 10 results should show 10 results and show more button', ()=>{

  });
  xit('if show more is clicked then we show all of the results', ()=>{

  });
});
