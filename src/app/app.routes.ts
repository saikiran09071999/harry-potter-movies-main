import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

export const routes: Routes = [
    { path: 'moviedashboard', component: MoviesListComponent },
    { path: 'details/:id', component: MovieDetailsComponent },
    { path: '', redirectTo: '/moviedashboard', pathMatch: 'full' }
  ];
