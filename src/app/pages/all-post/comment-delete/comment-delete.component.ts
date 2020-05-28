import { Component, OnInit, Input } from '@angular/core';
import { PostCommentService } from '../../../services/post-comment.service';
import { Comment } from '../../../models/comment';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'comment-delete',
  templateUrl: './comment-delete.component.html',
  styleUrls: ['./comment-delete.component.scss']
})
export class CommentDeleteComponent implements OnInit {

  user:User;

  @Input() comment: Comment;

  deleteComment(id: number): void {
    var me = this;
    this.commentDataService.deleteComment(id,this.user.token).subscribe((p) => {
      (me.comment = p[id]);
    });
  }

  constructor(private userService:UserService,private commentDataService: PostCommentService) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(u => this.user = u);
    this.userService.refreshUser();
  }

}
