import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from '../film.service';
import { Film } from '../models/film';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film: Film;

  constructor(private filmService: FilmService, private activateRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(param => {
      this.film = this.filmService.getById(param.id)
    });
  }

  back() {
    this.location.back();
  }
}
