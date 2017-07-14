import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Router, RouterModule} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  public static currentPath : string = 'home';


  constructor(private router:Router) {}

  ngOnInit(): void {

  }
}
