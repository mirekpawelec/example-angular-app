import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from '../film.service';
import { Film } from '../models/film';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film: Film;
  domain: String = environment.apiUrl;

  constructor(
    private filmService: FilmService, 
    private activateRoute: ActivatedRoute, private location: Location
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(param => {
      this.filmService.getById(param.id).subscribe(
        response => this.film = response,
        error => console.log(error) 
      )
    });
  }

  back() {
    this.location.back();
  }
}
