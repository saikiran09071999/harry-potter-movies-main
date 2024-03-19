import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Movie } from '../movieModels/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  movies: Movie[] = [];
  titleInputFilter: string = '';
  yearInputFilter: string = '';
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(
      this.fetchMoviesList.bind(this), 1000);
  }

  fetchMoviesList(): void {
    this.movieService.fetchMoviesList()
      .subscribe(movies => this.movies = movies);
  }

  get filteredMoviesList(): Movie[] {
    let filteredMoviesList = this.movies;

    if (this.titleInputFilter) {
      filteredMoviesList = filteredMoviesList.filter(movie =>
        movie.title.toLowerCase().includes(this.titleInputFilter.toLowerCase())
      );
    }

    if (this.yearInputFilter) {
      filteredMoviesList = filteredMoviesList.filter(movie =>
        movie.release_date.includes(this.yearInputFilter)
      );
    }

    return filteredMoviesList;
  }

  convertTimeDuration(duration: string): string {
    const durationInMinutes = parseInt(duration);
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}h ${minutes}min`;
  }

  goToMovieDetails(movieId: string) {
    this.router.navigate(['/details', movieId]);
  }
}
