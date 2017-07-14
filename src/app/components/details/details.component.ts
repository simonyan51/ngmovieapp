import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from "../../storages/Movie";
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {Constants} from "app/storages/Constants";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public loading;

  id: number;
  private sub: any;
  public videoSrc;
  public videoId;
  private currentMovie : any;

  constructor(private movieService : MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getMovieId();
    this.getMovieDetails(this.id);

  }

  private getMovieDetails(id: number) {


    this.movieService.getMovieById(id).subscribe((movie) => {
      this.currentMovie = new Movie(
        movie.id,
        movie.title,
        movie.genres,
        movie.overview,
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.backdrop_path,
        movie.vote_average,
        movie.vote_count,
        movie.release_date,
        movie.runtime,
        movie.production_countries,
        movie.original_language,
        movie.production_companies
      );
      this.loading = false;
    });

    this.movieService.getMovieVideo(id).subscribe((video) => {
      this.videoId = Constants.YOUTUBE_HOST + video.results[1].id;
      this.videoSrc = Constants.YOUTUBE_HOST + video.results[1].key;
      let iframe = document.createElement("iframe");

      iframe.setAttribute("src", this.videoSrc);
      iframe.setAttribute("width", "100%");
      iframe.setAttribute("height", "600px");
      document.getElementById("trailer").appendChild(iframe);
    });
  }

  private getMovieId() : void {
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
