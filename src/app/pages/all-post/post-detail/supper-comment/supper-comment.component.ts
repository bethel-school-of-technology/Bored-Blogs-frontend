import { Component, OnInit, Input } from "@angular/core";
import { Comment } from "../../../../models/comment";
@Component({
  selector: "supper-comment",
  templateUrl: "./supper-comment.component.html",
  styleUrls: ["./supper-comment.component.scss"],
})
export class SupperCommentComponent implements OnInit {
  @Input() comment: Comment;
  constructor() {}

  ngOnInit() {
    // console.log(this.comment);
  }
}
