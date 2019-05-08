import { Injectable } from '@angular/core';
import { Review } from './review';
import { HttpClient } from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  constructor(private httpClient: HttpClient) { }

  createReview(r : Review): Observable<Review>{
    return this.httpClient.post<Review>("http://localhost:8084/api/v1/reviews", r).pipe(
      tap(data => {
        console.log('posted review');
        // return data['movies'];
      }),
      catchError(this.handleError('post Reviews', new Review()))
    );
  }

  getMovieReviews(imdbid: string): Observable<Review[]>{
    //http://localhost:8084/api/v1/reviews?movieId=id
    return this.httpClient.get<Review[]>(`http://localhost:8084/api/v1/reviews?movieId=${imdbid}`).pipe(
      tap(data => {
        console.log('received reviews');
        // return data['movies'];
      }),
      catchError(this.handleError('get Reviews', []))
    );
  }

  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
