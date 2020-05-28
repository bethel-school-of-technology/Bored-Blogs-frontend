import { Component, OnInit } from "@angular/core";
// Jackie imported Contributor & ContributorService
import { ContributorService } from "src/app/services/contributor.service";
// Jackie imported Post & PostDataService
import { PostDataService } from "src/app/services/post-data.service";
import { Post } from "src/app/models/post";
import { User } from 'src/app/models/user';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  //JACKIE:
  // Connect to backend to get the contributors & all-posts
  contributors: User[];
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
    this.postDataService.getPosts().subscribe((p) => (this.posts = p));
  }
}
