import {HomeComponent} from "../components/home/home.component";
import {DetailsComponent} from "../components/details/details.component";
import {CategoriesComponent} from "../components/categories/categories.component";
import {AboutComponent} from "../components/about/about.component";
import {LoginComponent} from "../components/login/login.component";
import {CategoryMoviesComponent} from "../components/category-movies/category-movies.component";


export class Constants {

  public static TMDB_API_KEY = "d50b7c0570a79b124dd3d61cd40637c7";

  public static TMDB_API_TOKEN : string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9." +
    "eyJhdWQiOiJkNTBiN2MwNTcwYTc5YjEyNGRkM" +
    "2Q2MWNkNDA2MzdjNyIsInN1YiI6IjU5NTBlOD" +
    "U5YzNhMzY4MGQ3MzAwNzMzMiIsInNjb3BlcyI" +
    "6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c" +
    "smv-GFaw0ng29XCBmBfBwvmvGiqnivcS_rdjFBcAlQ";

  public static TMDB_API_URL : string = "https://api.themoviedb.org/3";
  public static TMB_API_MOVIE : string = "/movie";
  public static TMB_API_MOVIES : string = "/movies";
  public static TMB_API_GENRE : string = "/genre";
  public static TMDB_API_LANG : string = "&language=en-US";

  public static YOUTUBE_HOST = "https://youtube.com/embed/";

  public static LINKEDIN_ACCOUNT = "https://www.linkedin.com/in/gnel-simonyan-326965144/";


  public static ROUTES = [
    {
      path: "",
      component: HomeComponent,
    },
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
      path: "categories/:id",
      component: CategoryMoviesComponent,
    },

    {
      path: "about",
      component: AboutComponent
    },
    {
      path: "login",
      component: LoginComponent
    },

  ];
}
