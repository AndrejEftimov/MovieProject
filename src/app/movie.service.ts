import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = "http://5e25d205ef37a3001450f321.mockapi.io/api/movies"; /* <-- enter url ! */

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url);
  }

  updateMovie(m: Movie): Observable<Movie[]>{
    return this.http.put<Movie[]>(`${this.url}/${m.id}`, m);
  }

}
