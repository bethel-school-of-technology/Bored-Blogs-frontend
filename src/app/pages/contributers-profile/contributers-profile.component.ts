import { Component, OnInit } from '@angular/core';

function make(firstName, lastName, bio) {
  return {
    firstName: firstName,
    lastName: lastName,
    bio: bio
  }
}
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
      postTitle:"Welcome to Bored Blogs",
      postBody:"Please poke around and enjoy the *nonexistent* content"
    },
    {
      postTitle:"Welcome to my second post on Bored Blogs",
      postBody:"Enjoy the new content"
    },
    {
      postTitle:"Welcome to my 3rd Post on Bored Blogs",
      postBody:"Enjoy the new new content!"
    }
  ]
  ngOnInit() {
  }

}
