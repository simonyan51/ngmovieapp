import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdGridListModule, MdProgressSpinnerModule, MdProgressBarModule } from '@angular/material'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { OrderMovieComponent } from './components/order-movie/order-movie.component';
import { MoviesService } from "./services/movies.service";
import { DetailsComponent } from './components/details/details.component';
import {LoadingModule} from "ngx-loading";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CategoriesComponent,
    LoginComponent,
    OrderMovieComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoadingModule,

    RouterModule.forRoot([
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "home/:id",
        component: DetailsComponent
      },
      {
        path: "categories",
        component: CategoriesComponent
      },
      {
        path: "order_movie",
        component: OrderMovieComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "login",
        component: LoginComponent
      },

    ]),

    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdProgressSpinnerModule,
    MdProgressBarModule

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
