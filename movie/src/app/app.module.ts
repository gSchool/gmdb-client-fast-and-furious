import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
    
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
