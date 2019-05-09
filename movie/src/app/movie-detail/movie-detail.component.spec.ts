import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

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
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ MovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    component.movieInfo = new Movie();
    var data = {
      "Title": "Thor",
      "Year": "2011",
      "Rated": "PG-13",
      "Released": "06 May 2011",
      "Runtime": "115 min",
      "Genre": "Action, Adventure, Fantasy, Sci-Fi",
      "Director": "Kenneth Branagh",
      "Writer": "Ashley Miller (screenplay), Zack Stentz (screenplay), Don Payne (screenplay), J. Michael Straczynski (story), Mark Protosevich (story), Stan Lee (comic book), Larry Lieber (comic book), Jack Kirby (comic book)",
      "Actors": "Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins",
      "Plot": "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
      "Language": "English",
      "Country": "USA",
      "Awards": "5 wins & 30 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
      "Ratings": [{
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      }, {
        "Source": "Rotten Tomatoes",
        "Value": "77%"
      }, {
        "Source": "Metacritic",
        "Value": "57/100"
      }],
      "Metascore": "57",
      "imdbRating": "7.0",
      "imdbVotes": "668,173",
      "imdbID": "tt0800369",
      "Type": "movie",
      "DVD": "13 Sep 2011",
      "BoxOffice": "$181,015,141",
      "Production": "Paramount Pictures",
      "Website": "http://thor.marvel.com/",
      "Response": "True"
    };
    Object.keys(data).map( d => component.movieInfo[d] = data[d]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have an image', () => {
  //setup
  //exercise
  //expect
  let expected = 1;
  //actual
  let actual = fixture.elementRef.nativeElement.querySelectorAll('.poster img')[0].src.length;
  expect(actual).toBeGreaterThanOrEqual(expected);
  //teardown
    });

  it('should have a title', () => {
    //setup
    //exercise
    //expect
    let expected = 1; 
    //actual
    let actual = fixture.elementRef.nativeElement.querySelectorAll('.title')[0].innerText.length;
    //assert
    expect(actual).toBeGreaterThanOrEqual(expected);
 
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

  //  it('should have a Rating', () => {
    
  //   //setup
  //    //exercise
  //    //expect
  //    let expected1 = "Internet Movie Database"; 
  //    let expected2 = "7.0/10"; 
  //    let expectedSources = 3;
  //    let expectedValues = 3;
  //    //actual
  //    let actual1 = fixture.elementRef.nativeElement.querySelectorAll('.ratings > .rating > .source')[0].innerHTML;
  //    let actual2 = fixture.elementRef.nativeElement.querySelectorAll('.ratings > .rating > .value')[0].innerHTML;
  //    let actualSources = fixture.elementRef.nativeElement.querySelectorAll('.ratings > .rating > .source').length;
  //    let actualValues = fixture.elementRef.nativeElement.querySelectorAll('.ratings > .rating > .value').length;
  //    //assert
  //    expect(actual1).toEqual(expected1);
  //    expect(actual2).toEqual(expected2);
  //    expect(actualSources).toEqual(expectedSources);
  //    expect(actualValues).toEqual(expectedValues)
  //  });

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
