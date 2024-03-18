import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { MovieDetails } from '../movieModels/movie-details';
import { Movie } from '../movieModels/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  fetchMoviesList() {
    return this.http.get<Movie[]>('/movies');
  }

  fetchMovieDetails(selectedMovieId: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`/movies/${selectedMovieId}`);
  }

}
