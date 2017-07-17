import { Component, OnInit } from '@angular/core';
import { Constants } from "../../storages/Constants";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public LINKEDIN_ACCOUNT;

  constructor() { }

  ngOnInit() {
    this.LINKEDIN_ACCOUNT = "https://www.linkedin.com/in/gnel-simonyan-326965144/"
  }

}
