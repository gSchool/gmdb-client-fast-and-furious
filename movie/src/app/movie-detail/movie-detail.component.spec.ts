import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { Movie } from '../movie';

function escapeHtml(unsafe) {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
};

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
     let expectedSources = 3;
     let expectedValues = 3;
     //actual
     let actual1 = fixture.elementRef.nativeElement.querySelectorAll('.ratings > .rating > .source')[0].innerHTML;
     let actual2 = fixture.elementRef.nativeElement.querySelectorAll('.ratings > .rating > .value')[0].innerHTML;
     let actualSources = fixture.elementRef.nativeElement.querySelectorAll('.ratings > .rating > .source').length;
     let actualValues = fixture.elementRef.nativeElement.querySelectorAll('.ratings > .rating > .value').length;
     //assert
     expect(actual1).toEqual(expected1);
     expect(actual2).toEqual(expected2);
     expect(actualSources).toEqual(expectedSources);
     expect(actualValues).toEqual(expectedValues)
   });

   it('should have a director', () => {
    
    //setup
     //exercise
     //expect
     let expected = "Kenneth Branagh"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.director')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });

   it('should have a writer', () => {
    
    //setup
     //exercise
     //expect
     let expected = "Ashley Miller (screenplay), Zack Stentz (screenplay), Don Payne (screenplay), J. Michael Straczynski (story), Mark Protosevich (story), Stan Lee (comic book), Larry Lieber (comic book), Jack Kirby (comic book)"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.writer')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });

   it('should have a actors', () => {
    
    //setup
     //exercise
     //expect
     let expected = "Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.actors')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });
   

   it('should have a released', () => {
    
    //setup
     //exercise
     //expect
     let expected = "06 May 2011"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.released')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });

   it('should have a runtime', () => {
    
    //setup
     //exercise
     //expect
     let expected = "115 min"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.runtime')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });

   it('should have a language', () => {
    
    //setup
     //exercise
     //expect
     let expected = "English"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.language')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });

   it('should have a country', () => {
    
    //setup
     //exercise
     //expect
     let expected = "USA"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.country')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });

   it('should have a awards', () => {
    
    //setup
     //exercise
     //expect
     let expected = escapeHtml("5 wins & 30 nominations."); 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.awards')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });

   it('should have a type', () => {
    
    //setup
     //exercise
     //expect
     let expected = "movie"; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.type')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
   });


  it('should have a plot', () => {
     //setup
     //exercise
     //expect
     let expected = "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."; 
     //actual
     let actual = fixture.elementRef.nativeElement.querySelectorAll('.plot')[0].innerHTML;
     //assert
     expect(actual).toEqual(expected);
  });



});
