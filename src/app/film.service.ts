import { Injectable, OnInit } from '@angular/core';
import { Film, LightFilm } from './models/film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
    
  // private films: Film[] = [
  //   {
  //     id: 0, 
  //     title: 'Titanic', 
  //     describe: 'Rok 1912, brytyjski statek Titanic wyrusza w swój dziewiczy rejs do USA. Na pokładzie emigrant Jack przypadkowo spotyka arystokratkę Rose.', 
  //     year: 1997
  //   },
  //   {
  //     id: 1, 
  //     title: 'Terminator', 
  //     describe: 'Elektroniczny morderca zostaje wysłany z przyszłości do roku 1984, by zabić matkę przyszłego lidera rewolucji. W ślad za nim rusza Kyle Reese, który ma chronić kobietę.', 
  //     year: 1984
  //   },
  //   {
  //     id: 2, 
  //     title: 'Avatar', 
  //     describe: 'Jake, sparaliżowany były komandos, zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną społecznością i postanawia jej pomóc.', 
  //     year: 2009
  //   },
  // ]
  private httpHeaders: HttpHeaders = new HttpHeaders(
    {'Authorization': 'Token 519c683a443a74de3418de6544297e69d8362e91'}
  );

  private basePath: String = '/api/films/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(
      `${environment.apiUrl}${this.basePath}`, 
      {headers: this.httpHeaders}
    );
  }

  getById(id: number): Observable<Film> {
    return this.httpClient.get<Film>(
      `${environment.apiUrl}${this.basePath}${id}/`, 
      {headers: this.httpHeaders}
    );
  }
}
