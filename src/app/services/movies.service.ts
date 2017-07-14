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
                         "/movie/popular?api_key=" +
                         Constants.TMDB_API_KEY + "&language=en-US&page=" + page)

                         .map((res) => res.json());


  }

  public getMovieById(id: number) {
    return this.http.get(Constants.TMDB_API_URL +
      "/movie/"+ id +"?api_key=" +
      Constants.TMDB_API_KEY + "&language=en-US")

      .map((res) => res.json());
  }

  public getMoviesImages(id) {

    return this.http.get(Constants.TMDB_API_URL + "/movie/" + id + "/images?api_key=" + Constants.TMDB_API_TOKEN + "&language=en-US")

      .map((res) => res.json());

  }

  public getMovieVideo(id) {

    return this.http.get(Constants.TMDB_API_URL + "/movie/" + id + "/videos?api_key=" + Constants.TMDB_API_KEY + "&language=en-US")

      .map((res) => res.json());

  }


}
