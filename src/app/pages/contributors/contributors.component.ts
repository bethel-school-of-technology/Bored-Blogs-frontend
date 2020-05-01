import { AppRoutingModule } from './../../app-routing.module';
import { Component, OnInit } from '@angular/core';
/*
*
*/

function make(mName,mBio,mColor, mButton) {
  return {
    name:mName,
    bio:mBio,
    color:mColor,
    button:mButton
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
    {//hard coded data
      name:"Jacob",
      bio:"Hello my name is Jacob I like to program",
      //color gets used by the ngstyle directive
      //TODO: validate data so it that it dosen't kill angular
      color:{"border":"4px solid blue"},
      button:"See More"
    },
    make("jackie","jackie likes sushi",{"border":"4px solid red "}, "See More"),
    make("Kayla", "Kayla likes pandas",{"border":"4px solid purple"}, "See More"),
    make("Kamyla", "Kamyla likes food", {"border": "4px solid green"}, "See More")
  ];
  constructor() { }

  ngOnInit() {
  }


}
