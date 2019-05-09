import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { Rating } from './rating';
import { Search } from './cars.json';
import { HttpClient } from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}) 
export class MovieService {
  movieData : Movie[];
  movieList: Movie [];
  constructor(private httpClient: HttpClient) { }

  findMovie(keyword:string): Observable<Movie[]>{
    if(keyword.length <= 0){
      return this.getAllMovies();
    }
    return this.httpClient.get<Movie[]>(`http://localhost:8083/api/movie/search?keyword=${keyword}`)
      .pipe(
        map( data => data['movies']),
      tap (data => {
        console.log('fetched movies');
        // return data['movies'];
      }),
      catchError(this.handleError('get Movies', []))
    );
  }
  getAllMovies(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>("http://localhost:8083/api/movie/search?keyword=%20")
      .pipe(
        map( data => data['movies']),
      tap (data => {
        console.log('fetched movies');
        // return data['movies'];
      }),
      catchError(this.handleError('get Movies', []))
    );
  }


  
  getMovie(title:string): Observable<Movie>{
    return this.httpClient
    .get<Movie>(`http://localhost:8083/api/movie/${title}`).pipe(
      map( data => data['movie']),
      tap(_ => {
        console.log('fetched Movie');
      }),
      catchError(this.handleError('get Movie', new Movie()))
      );
    } 
    
    // let data = 
    // {
    //   "Title": "Thor",
    //   "Year": "2011",
    //   "Rated": "PG-13",
    //   "Released": "06 May 2011",
    //   "Runtime": "115 min",
    //   "Genre": "Action, Adventure, Fantasy, Sci-Fi",
    //   "Director": "Kenneth Branagh",
    //   "Writer": "Ashley Miller (screenplay), Zack Stentz (screenplay), Don Payne (screenplay), J. Michael Straczynski (story), Mark Protosevich (story), Stan Lee (comic book), Larry Lieber (comic book), Jack Kirby (comic book)",
    //   "Actors": "Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins",
    //   "Plot": "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    //   "Language": "English",
    //   "Country": "USA",
    //   "Awards": "5 wins & 30 nominations.",
    //   "Poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    //   "Ratings": [{
    //     "Source": "Internet Movie Database",
    //     "Value": "7.0/10"
    //   }, {
    //     "Source": "Rotten Tomatoes",
    //     "Value": "77%"
    //   }, {
    //     "Source": "Metacritic",
    //     "Value": "57/100"
    //   }],
    //   "Metascore": "57",
    //   "imdbRating": "7.0",
    //   "imdbVotes": "668,173",
    //   "imdbID": "tt0800369",
    //   "Type": "movie",
    //   "DVD": "13 Sep 2011",
    //   "BoxOffice": "$181,015,141",
    //   "Production": "Paramount Pictures",
    //   "Website": "http://thor.marvel.com/",
    //   "Response": "True"
    // };
    //   let movie = new Movie();
    //   Object.keys(data).map( d => movie[d] = data[d]);
    //   return of(movie);
    

  


  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
