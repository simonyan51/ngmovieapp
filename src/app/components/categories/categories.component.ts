import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from "../../storages/Movie";
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {Constants} from "app/storages/Constants";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public loading;

  public categories: any = [];

  constructor(private movieService : MoviesService) {}

  ngOnInit() {
  this.getGenres();

  }

  private getGenres() {
    this.loading = true;
    this.movieService.getGenres().subscribe((genres) => {
      console.log(genres);
      this.categories = genres;
      this.loading = false;
    });
  }
}
