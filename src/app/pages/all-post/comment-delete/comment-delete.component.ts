import { Component, OnInit, Input } from '@angular/core';
import { PostCommentService } from '../../../services/post-comment.service';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'comment-delete',
  templateUrl: './comment-delete.component.html',
  styleUrls: ['./comment-delete.component.scss']
})
export class CommentDeleteComponent implements OnInit {

  isAdmin = false;

  @Input() comment: Comment;

  deleteComment(id: number): void {
    var me = this;
    this.commentDataService.deleteComment(id).subscribe((p) => {
      (me.comment = p[id]);
    });
  }

  constructor(private commentDataService: PostCommentService) { }

  ngOnInit() {
  }

}
