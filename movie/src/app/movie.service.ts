import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { Rating } from './rating';
import { Search } from './cars.json';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieData : Movie[];
  movieList: Movie [];
  constructor() { }

  findMovie(keyword:string): Observable<Movie[]>{
    
    let data = Search[0];
    let resultMovie: Movie = new Movie();
    Object.keys(data).map( key => {
      if(key === "Ratings"){
        let ratings = data[key].map(obj => {
          let rating = new Rating();
          rating.Source = obj.Source;
          rating.Value = obj.Value;
          return rating;
        });
        resultMovie[key] = ratings;
      }
      else{
        resultMovie[key] = data[key];
      }
      return key;
    });
    let result: Movie[] = [];

    if(keyword === 'car'){
      Search.forEach(data => {
        let movie: Movie = new Movie();
        Object.keys(data).map( key => {
          if(key === "Ratings"){
            let ratings = data[key].map(obj => {
              let rating = new Rating();
              rating.Source = obj.Source;
              rating.Value = obj.Value;
              return rating;
            });
            movie[key] = ratings;
          }
          else{
            movie[key] = data[key];
          }
          return key;
        });
        result.push(movie)
      });
    }
    if(keyword === 'asdf'){
      return of(result);
    }

    

    result.push(resultMovie);
    return of(result);
  }


  
  getMovie(title:string): Observable<Movie>{
    let data = 
    {
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
      let movie = new Movie();
      Object.keys(data).map( d => movie[d] = data[d]);
      return of(movie);
    

  }



}
