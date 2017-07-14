import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/Rx';
import {Constants} from "../storages/Constants";
MoviesService;


@Injectable()
export class MoviesService {


  constructor(private http:Http) { }


  public getMoviesByPage(page: number):any {

    return this.http.get(Constants.TMDB_API_URL +
      Constants.TMB_API_MOVIE +
      "popular?api_key=" +
      Constants.TMDB_API_KEY + Constants.TMDB_API_LANG + page)
      .map((res) => res.json());


  }

  public getMovieById(id: number) {
    return this.http.get(
      Constants.TMDB_API_URL +
      Constants.TMB_API_MOVIE + id +"?api_key=" +
      Constants.TMDB_API_KEY + Constants.TMDB_API_LANG)
      .map((res) => res.json());
  }

  public getMoviesImages(id) {

    return this.http.get(Constants.TMDB_API_URL + Constants.TMB_API_MOVIE + id + "/images?api_key=" + Constants.TMDB_API_KEY + Constants.TMDB_API_LANG)

      .map((res) => res.json());

  }

  public getMovieVideo(id) {

    return this.http.get(Constants.TMDB_API_URL + Constants.TMB_API_MOVIE + id + "/videos?api_key=" + Constants.TMDB_API_KEY + Constants.TMDB_API_LANG)

      .map((res) => res.json());

  }

  public getGenres() {

    return this.http.get(Constants.TMDB_API_URL + Constants.TMB_API_GENRE + "list?api_key=" + Constants.TMDB_API_KEY + Constants.TMDB_API_LANG)

      .map((res) => res.json());

  }

  getMoviesByGenreId(id: number) {
    return this.http.get(Constants.TMDB_API_URL + Constants.TMB_API_GENRE + id + Constants.TMB_API_MOVIES + "?api_key=" + Constants.TMDB_API_KEY + Constants.TMDB_API_LANG)

      .map((res) => res.json());
  }


}
