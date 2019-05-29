import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

const routes: Routes = [
  {path: '', component: FilmsListComponent},
  {path: 'film/:id', component: FilmDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
