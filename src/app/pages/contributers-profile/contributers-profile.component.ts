import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { Contributor } from "src/app/models/contributor";
import { ContributorService } from "src/app/services/contributor.service";
import { PostDataService } from "src/app/services/post-data.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Game, Games } from 'src/app/models/games';

@Component({
  selector: "app-contributers-profile",
  templateUrl: "./contributers-profile.component.html",
  styleUrls: ["./contributers-profile.component.scss"],
})
export class ContributersProfileComponent implements OnInit {
  constructor(
    private contribtorService: ContributorService,
    private postService: PostDataService,
    private route: ActivatedRoute
  ) {}
  //TODO: create a contributor service and move this to there
  contributor: Contributor;
  games:Game[] = [
    new Game('game1'),
    new Game('game2'),
  ];
  posts: Post[] = [];
  ngOnInit() {
    this.route.params.subscribe((params) => {
      var id = params["id"];
      console.log(id)
      this.getContrib(id);
      this.getPostByAuthorID(id);
    });
  }

  getContrib(authorId: number) {
    this.contribtorService.getContributor(authorId).subscribe((contributor) => {
      this.contributor = contributor;
      //this.games = contributor.bio.favoriteGames
      console.log(this.contributor);
    });
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
