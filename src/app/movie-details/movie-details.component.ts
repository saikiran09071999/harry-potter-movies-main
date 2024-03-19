import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../movieModels/movie-details';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie: MovieDetails | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];
    this.getMovieDetails(movieId);
  }

  getMovieDetails(movieId: string) {
    this.movieService.fetchMovieDetails(movieId).subscribe(movie => {
      this.movie = movie;
    });
  }

  convertTimeDuration(duration: string): string {
    const durationInMinutes = parseInt(duration);
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}h ${minutes}min`;
  }
  
  goToMovieList() {
    this.router.navigate(['/moviedashboard']);
  }
}
