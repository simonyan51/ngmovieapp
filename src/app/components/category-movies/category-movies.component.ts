import { Component, OnInit } from '@angular/core';
import {Movie} from "../../storages/Movie";
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-movies',
  templateUrl: './category-movies.component.html',
  styleUrls: ['./category-movies.component.css']
})
export class CategoryMoviesComponent implements OnInit {

  public loading;

  private categoryId: number;

  public movies : any = [];

  private sub: any;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getCategoryId();

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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
