import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Comment } from "../../../models/comment";
import { PostCommentService } from "../../../services/post-comment.service";

@Component({
  selector: "post-comment",
  templateUrl: "./post-comment.component.html",
  styleUrls: ["./post-comment.component.scss"],
})
export class PostCommentComponent implements OnInit {
  @Input() newComment: Comment;
  isAdmin = false;

  addComment():void {
    this.commentDataService
      .addComment(this.newComment)
      .subscribe((p) => this.router.navigate(["/post-detail"]));
  }

  constructor(
    private commentDataService: PostCommentService,
    private router: Router
  ) {}

  ngOnInit() {}
}
