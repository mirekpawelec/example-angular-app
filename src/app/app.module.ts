import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmService } from './film.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmDetailsComponent,
    FilmsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
