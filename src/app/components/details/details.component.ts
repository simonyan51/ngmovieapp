import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from "../../storages/Movie";
import {Constants} from "app/storages/Constants";
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute} from "@angular/router";

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
  public videoExists;
  private currentMovie : any;

  constructor(private moviesService : MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovieId();
    this.getMovieDetails(this.id);

  }

  private getMovieDetails(id: number) {


    this.moviesService.getMovieById(id).subscribe((movie) => {
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

      this.moviesService.getMovieVideo(id).subscribe((video) => {
        if (video.results[1] !== undefined) {
          this.videoId = Constants.YOUTUBE_HOST + video.results[1].id;
          this.videoSrc = Constants.YOUTUBE_HOST + video.results[1].key;
          this.videoExists = true;
        } else {
          this.videoExists = false;
        }
        this.loading = false;
      });
    });

  }

  private getMovieId() : void {
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  public setSrc() : string {
    this.loading = false;
    return this.videoSrc;
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
