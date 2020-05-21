import { Component, OnInit } from "@angular/core";
// Jackie imported Contributor & ContributorService
import { ContributorService } from "src/app/services/contributor.service";
import { Contributor } from "src/app/models/contributor";
// Jackie imported Post & PostDataService
import { PostDataService } from "src/app/services/post-data.service";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  //JACKIE:
  // Connect to backend to ge the contributors & all-posts
  contributors: Contributor[];
  posts: Post[];

  constructor(
    private contributorService: ContributorService,
    private postDataService: PostDataService
  ) {}

  ngOnInit() {
    this.contributorService.getContributors().subscribe((c) => {
      //console.log(c);
      this.contributors = c;
    });

    //JACKIE:
    //Get the current blog post by ID or createdAt date --> FILTER TO JUST ONE POST!!!
    this.postDataService.getPosts().subscribe((p) => (this.posts = p));

    //   this.params.subscribe(param => {
    //     this.postDataService
    //     .getPost(+param["id"])
    //     .subscribe((p) => (this.Post = p));
    // });
  }
}
