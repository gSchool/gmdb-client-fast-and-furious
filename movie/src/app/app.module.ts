import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReviewCreateComponent } from './review-create/review-create.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { WatchlistListComponent } from './watchlist-list/watchlist-list.component';
import { WatchlistDetailComponent } from './watchlist-detail/watchlist-detail.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewComponent } from './review/review.component';
import { SingleReviewComponent } from './single-review/single-review.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieListComponent,
    SingleMovieComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    ReviewCreateComponent,
    PasswordResetComponent,
    WatchlistListComponent,
    WatchlistDetailComponent,
    CreateMovieComponent,
    ReviewComponent,
    SingleReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
        ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
