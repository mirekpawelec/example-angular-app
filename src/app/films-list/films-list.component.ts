import { Component, OnInit } from '@angular/core';
import { Film, LightFilm } from '../models/film';
import { FilmService } from '../film.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  lightFilmList: LightFilm;
  errorMessage: String = '';
  
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getAll().subscribe(
      response => this.lightFilmList = response,
      error => {
        this.errorMessage = "It's occurred an error while getting of data. Try again later."
        console.log(error)
      }
    );
  }

}
