import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import {Movie} from "../../storages/Movie";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public loading;

  private categoryId: number;

  public movies : any = [];

  private sub: any;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

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

  public getCategoryId() {
    this.loading = true;

    this.sub = this.route.params.subscribe(params => {

      this.categoryId = +params['id'];
      this.getMoviesByCategory(this.categoryId);

    });
  }

  public getMoviesByCategory(id: number) {

    if (id === undefined || id === null) {
      return false;
    }

    this.movies = [];
    this.moviesService.getMoviesByGenreId(id).subscribe((movies) => {
      movies.results.forEach(movie => {

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
