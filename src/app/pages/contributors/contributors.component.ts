import { Component, OnInit } from '@angular/core';
/*
*
*/

function make(mName,mBio,mColor) {
  return {
    name:mName,
    bio:mBio,
    color:mColor
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
      color:{"border":"4px solid blue"}
    },
    make("jackie","jackie likes sushi",{"border":"4px solid red "}),
  ];
  constructor() { }

  ngOnInit() {
  }


}
