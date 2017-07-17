import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public loading;

  public categories: any = [];

  constructor(private moviesService : MoviesService, private router : Router) {}

  ngOnInit() {

    this.getGenres();

  }

  private getGenres() {
    this.loading = true;
    this.moviesService.getGenres().subscribe((genres) => {
      this.categories = genres;
      this.loading = false;
    });
  }

}
