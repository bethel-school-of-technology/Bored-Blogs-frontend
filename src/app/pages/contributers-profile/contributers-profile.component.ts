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
      bio: {
        birthday: "June 10",
        favoriteGames:{
          game1: "Chess",
          game2: "Risk",
          game3: "Monopoly",
          game4: "The Game of Life"
        },
        other:"Hi! My name is Kayla and my favorite animal is a panda. I have a whole collection of stuffed pandas. I am also a full stack web developer. In my spare time, I like to help others at Bethel Tech with their schoolwork and work on various coding projects. I also provide tech support to my friends and family on a case by case basis.",
    }
  }

  Posts = [
    {
      postTitle: "Welcome to Bored Blogs",
      postTags: "How To, Introduction, moderator post",
      postGames: "chess, Checkers, The Game of Life",
      postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      postTitle: "Welcome to my second post on Bored Blogs",
      postTags: "How To, Introduction, moderator post",
      postGames: "chess, Checkers, The Game of Life",
      postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      postTitle: "Welcome to my 3rd Post on Bored Blogs",
      postTags: "How To, Introduction, moderator post",
      postGames: "chess, Checkers, The Game of Life",
      postBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
