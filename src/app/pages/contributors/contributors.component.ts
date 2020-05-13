import { AppRoutingModule } from './../../app-routing.module';
import { Component, OnInit } from '@angular/core';
/*

*/


//this style formats the color into a object that ngStyle accepts
function styleFromColor(color) {
  return { 'background-color': color };
}

//this helps make objects into the same interface and saves some typing and improves readability
function make(mName, mBio, mColor, mUrl) {
  return {
    name: mName,
    bio: mBio,
    color: mColor,
    url: mUrl
  }
};

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})


export class ContributorsComponent implements OnInit {

  //TODO: replace hard coded data with services
  contributors = [
    make(
      //name
      "Jacob",
      //bio
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      //color
      styleFromColor("#006eff"),
      //image to use
      "https://ca.slack-edge.com/T9P33872P-UMB26EV6E-f1b15a101868-512"
    ),
    make(
      "Jackie",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      styleFromColor("yellow"),
      "https://ca.slack-edge.com/T9P33872P-UMXPMHEAE-3b5c27f1c336-512"
    ),
    make(
      "Kayla",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      styleFromColor("red"),
      "https://ca.slack-edge.com/T9P33872P-UKW98R0NL-9b2d325d0d90-512"),
    make(
      "Kamyla",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      styleFromColor("#30c230"),
      "https://ca.slack-edge.com/T9P33872P-UNCD1UH6K-6e8e43a4b2fd-512"),
  ];
  constructor() { }

  ngOnInit() {
  }


}
