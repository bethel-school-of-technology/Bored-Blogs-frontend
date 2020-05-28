import { Component, OnInit } from "@angular/core";
import { PostDataService } from "../../../services/post-data.service";
import { Post } from "../../../models/post";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
})

export class PostListComponent implements OnInit {
  posts: Post[];
  user: User;

  getPosts(): void {
    this.postDataService.getPosts()
    .subscribe((p) => (this.posts = p));
  }

  deletePost(id: number): void {
    this.postDataService.deletePost(id, this.user.token)
    .subscribe((p) => this.getPosts());
  }

  constructor(
    private userService: UserService,
    private postDataService: PostDataService
  ) {}

  ngOnInit() {
    this.getPosts();
    this.userService.getCurrentUser().subscribe((user) => (this.user = user));
    this.userService.refreshUser();
  }
}
