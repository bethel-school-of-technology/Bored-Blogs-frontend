import { Component, OnInit } from "@angular/core";
import { Post } from "../../../models/post";
import { PostDataService } from "../../../services/post-data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { NgForm } from "@angular/forms";
import { ContributorService } from "src/app/services/contributor.service";

@Component({
  selector: "app-post-add",
  templateUrl: "./post-add.component.html",
  styleUrls: ["./post-add.component.scss"],
})
export class PostAddComponent implements OnInit {
  newPost: Post = new Post();
  contributors: User[] = [];
  user: User;

  addPost() {
    this.postDataService
      .addPost(this.newPost, this.user.token)
      .subscribe((p) => this.router.navigate(["/post-list"]));
  }

  constructor(
    private userService: UserService,
    private contribService: ContributorService,
    private postDataService: PostDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((user) => (this.user = user));
    this.userService.refreshUser();

    this.contribService
      .getContributors()
      .subscribe((cs) => (this.contributors = cs));

    this.userService.getCurrentUser().subscribe((user) => (this.user = user));
    this.userService.refreshUser();
  }
}
