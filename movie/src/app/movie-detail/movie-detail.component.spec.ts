import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { Movie } from '../movie';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('text input should exist', ()=>{
  //   //setup
  //   //exercise
  //     //expect
  //     let expected = 1; //1 or more
  //     //actual
  //     let actual = fixture.elementRef.nativeElement.querySelectorAll('input[name=q]').length;
  //   //assert
  //   expect(actual).toBeGreaterThanOrEqual(expected);
  //   expect(fixture.elementRef.nativeElement.querySelector('input[name=q]')).toBeTruthy();
  //   //teardown
  // });

  it('should have an image', () => {
  //setup
  //exercise
  //expect
  let expected = 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg';
  //actual
  let actual = fixture.elementRef.nativeElement.querySelectorAll('.poster img')[0].src;
  expect(actual).toEqual(expected);
  //teardown
    });

  it('should have a title', () => {
    //setup
    //exercise
    //expect
    let expected = "Thor"; 
    //actual
    let actual = fixture.elementRef.nativeElement.querySelectorAll('.title')[0].innerText;
    //assert
    expect(actual).toEqual(expected);
 
  });

  it('should have a year', () => {
    
   //setup
    //exercise
    //expect
    let expected = "2011"; 
    //actual
    let actual = fixture.elementRef.nativeElement.querySelectorAll('.year')[0].innerText;
    //assert
    expect(actual).toEqual(expected);
  });

  it('should have a genre', () => {
    
    //setup
     //exercise
     //expect
     let expected = "Action, Adventure, Fantasy, Sci-Fi"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.genre')[0].innerText;
     //assert
     expect(actual).toEqual(expected);
   });
   it('should have a rated', () => {
    
    //setup
     //exercise
     //expect
     let expected = "PG-13"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.rated')[0].innerText;
     //assert
     expect(actual).toEqual(expected);
   });

   it('should have a imdbRating', () => {
    
    //setup
     //exercise
     //expect
     let expected = "7.0"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.imdbRating')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });

   it('should have a imdbvotes', () => {
    
    //setup
     //exercise
     //expect
     let expected = "668,173"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.imdbvotes')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });

   it('should have a imdbID', () => {
    
    //setup
     //exercise
     //expect
     let expected = "tt0800369"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.imdbID')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });

   it('should have a Rating', () => {
    
    //setup
     //exercise
     //expect
     let expected1 = "Internet Movie Database"; 
     let expected2 = "7.0/10"; 
     //actual
     let actual1 = fixture.elementRef.nativeElement.querySelectorAll('.ratings > .rating > .source')[0].innerHTML;
     let actual2 = fixture.elementRef.nativeElement.querySelectorAll('.ratings > .rating > .value')[0].innerHTML;
     //assert
     expect(actual1).toEqual(expected1);
     expect(actual2).toEqual(expected2);
   });

  xit('should have a plot', () => {
    const e1 = fixture.nativeElement;
    expect(e1.querySelector('div.textarea').innerText).toBeTruthy('');
  });



});
