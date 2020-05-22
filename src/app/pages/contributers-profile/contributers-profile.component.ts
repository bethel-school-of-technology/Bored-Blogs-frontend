import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { ContributorService } from "src/app/services/contributor.service";
import { PostDataService } from "src/app/services/post-data.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Game, Games } from "src/app/models/games";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-contributers-profile",
  templateUrl: "./contributers-profile.component.html",
  styleUrls: ["./contributers-profile.component.scss"],
})
export class ContributersProfileComponent implements OnInit {
  constructor(
    private contribtorService: ContributorService,
    private userService: UserService,
    private postService: PostDataService,
    private route: ActivatedRoute
  ) {}
  
  contributor: User;
  games: Game[] = [new Game("game1"), new Game("game2")];
  posts: Post[] = [];


  ngOnInit() {
    this.route.params.subscribe((params) => {
      var id = params["id"];
      console.log(id);
      this.getPostByAuthorID(id);
    });

    this.userService.getCurrentUser().subscribe((u) => (this.contributor = u));
    this.userService.refreshUser();
  }

  getPostByAuthorID(authorId: number) {
    this.postService.getPosts().subscribe((allPosts) => {
      this.posts = allPosts.filter((p) => p.authorId == authorId);
      console.log(this.posts);
    });
  }

  //the selector is a flag that htmls things can switch their visibilty
  selector = 1;
  setSelector(value: number) {
    this.selector = value;
  }
}
