import { Injectable, OnInit } from '@angular/core';
import { Film } from './models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  private films: Film[] = [
    {
      id: 0, 
      title: 'Titanic', 
      describe: 'Rok 1912, brytyjski statek Titanic wyrusza w swój dziewiczy rejs do USA. Na pokładzie emigrant Jack przypadkowo spotyka arystokratkę Rose.', 
      year: 1997
    },
    {
      id: 1, 
      title: 'Terminator', 
      describe: 'Elektroniczny morderca zostaje wysłany z przyszłości do roku 1984, by zabić matkę przyszłego lidera rewolucji. W ślad za nim rusza Kyle Reese, który ma chronić kobietę.', 
      year: 1984
    },
    {
      id: 2, 
      title: 'Avatar', 
      describe: 'Jake, sparaliżowany były komandos, zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną społecznością i postanawia jej pomóc.', 
      year: 2009
    },
  ]

  constructor() { }

  getAll(): Film[] {
    return this.films;
  }

  getById(id: number): Film {
    return this.films.find(film => {
      return film.id == id;
    });
  }
}
