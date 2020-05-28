import { Component, OnInit } from '@angular/core';
import { Comment } from '../../../models/comment';
import { Router } from '@angular/router';
import { PostCommentService } from '../../../services/post-comment.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss']
})

export class CommentEditComponent implements OnInit {
  user:User;
  newComment: Comment;

  saveComment(f: NgForm) {
    this.newComment = f.form.value;

    // console.log(this.saveComment);

    //TODO: find and fix postid
    this.commentDataService.updateComment(1,this.newComment,this.user.token).subscribe(
      p => this.router.navigate(['post-detail'])
    );
  }

  constructor(private userService: UserService,private commentDataService: PostCommentService, private router: Router) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(u => this.user = u);
    this.userService.refreshUser();
  }

}
