import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor() { }

  Comments = [
    {
    firstOne: "This is my favorite post so far!",
    secondOne: "Interesting opinion. Thanks for sharing."
  },
  {
    firstOne: "Very well written. Really enjoyed reading this.",
    secondOne: "Can't wait to give this a game a try!"
  }
  ];


  ngOnInit() {
  }

  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }

}
