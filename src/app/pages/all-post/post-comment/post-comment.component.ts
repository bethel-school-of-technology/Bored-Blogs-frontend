import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Comment } from "../../../models/comment";
import { PostCommentService } from "../../../services/post-comment.service";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "post-comment",
  templateUrl: "./post-comment.component.html",
  styleUrls: ["./post-comment.component.scss"],
})
export class PostCommentComponent implements OnInit {
  @Input() newComment: Comment;

  // isAdmin = false;

  // newComment: Comment = new Comment();

  // addComment():void {
  //   this.postCommentService
  //     .addComment(this.newComment)
  //     .subscribe((c) => this.router.navigate(["/post-detail/ + id"])); // is this route correct to refresh pg + see comments
  // }

  constructor( private postCommentService: PostCommentService, userService: UserService, private router: Router) { }

  ngOnInit() {
  }

}
