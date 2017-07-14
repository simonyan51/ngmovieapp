import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import {Movie} from "../../storages/Movie";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public loading;

  public movies : any = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {

    this.getMovies(1);

  }



  private getMovies(page: number) : void {
    this.loading = true;
    this.moviesService.getMoviesByPage(page)
      .subscribe(data => {
        data.results.forEach(movie => {

          let newMovie = new Movie(
            movie.id,
            movie.title,
            movie.genres,
            movie.overview,
            "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.backdrop_path,
            movie.vote_average,
            movie.vote_count,
            movie.release_date,
            movie.runtime,
            movie.production_countries,
            movie.original_language,
            movie.production_companies
          );

          this.movies.push(newMovie);

        });
        this.loading = false;
      });
  }

}
