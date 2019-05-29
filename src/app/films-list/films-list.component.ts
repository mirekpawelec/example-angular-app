import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  films: Film[];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.films = this.filmService.getAll();
  }

}
