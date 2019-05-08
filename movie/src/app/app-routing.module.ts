import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { WatchlistListComponent } from './watchlist-list/watchlist-list.component';
import { WatchlistDetailComponent } from './watchlist-detail/watchlist-detail.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReviewCreateComponent } from './review-create/review-create.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

const routes: Routes = [
  { path: '', redirectTo: "/movies/search", pathMatch:"full"},
  { path: 'movies/search', component: MovieListComponent },
  { path: 'movies/search/:q', component: MovieListComponent },
  { path: 'movies/detail/:name/:id', component: MovieDetailComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/password-reset', component: PasswordResetComponent },
  { path: 'watchlist', component: WatchlistListComponent },
  { path: 'watchlist/:id', component: WatchlistDetailComponent},
  { path: 'user/sign-up', component: SignUpComponent },
  { path: 'movies/review-create/:name', component: ReviewCreateComponent},
  { path: 'movies/create', component: CreateMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
