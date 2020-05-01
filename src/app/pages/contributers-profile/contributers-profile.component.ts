import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributers-profile',
  templateUrl: './contributers-profile.component.html',
  styleUrls: ['./contributers-profile.component.scss']
})
export class ContributersProfileComponent implements OnInit {

  constructor() { }

  contributor =
    {
      firstName: "Kayla",
      lastName: "Miller",
      bio: "Kayla likes pandas",
    }

  Posts = [
    {
      postTitle: "Welcome to Bored Blogs",
      postBody: "Please poke around and enjoy the *nonexistent* content"
    },
    {
      postTitle: "Welcome to my second post on Bored Blogs",
      postBody: "Enjoy the new content"
    },
    {
      postTitle: "Welcome to my 3rd Post on Bored Blogs",
      postBody: "Enjoy the new new content!"
    }
  ]
  ngOnInit() {
  }

  //the selector is a flag that htmls things can switch their visibilty
  selector = 1;
  setSelector(value: number) {
    this.selector = value;
  }
}
