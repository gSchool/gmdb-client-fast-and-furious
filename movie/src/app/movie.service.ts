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
        "Title": "The Avengers",
		"Year": "2012",
		"Rated": "PG-13",
		"Released": "04 May 2012",
		"Runtime": "143 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Joss Whedon",
		"Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
		"Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
		"Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
		"Language": "English, Russian, Hindi",
		"Country": "USA",
		"Awards": "Nominated for 1 Oscar. Another 38 wins & 79 nominations.",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		"Ratings": [{
			"Source": "Internet Movie Database",
			"Value": "8.1/10"
		}, {
			"Source": "Rotten Tomatoes",
			"Value": "92%"
		}, {
			"Source": "Metacritic",
			"Value": "69/100"
		}],
		"Metascore": "69",
		"imdbRating": "8.1",
		"imdbVotes": "1,165,317",
		"imdbID": "tt0848228",
		"Type": "movie",
		"DVD": "25 Sep 2012",
		"BoxOffice": "$623,279,547",
		"Production": "Walt Disney Pictures",
		"Website": "http://marvel.com/avengers_movie",
		"Response": "True"
	};
      let movie = new Movie();
      Object.keys(data).map( d => movie[d] = data[d]);
      return of(movie);
    

  }



}
