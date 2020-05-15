import { Component, OnInit } from '@angular/core';
import { Comment } from '../../../models/comment';
import { Router } from '@angular/router';
import { PostCommentService } from '../../../services/post-comment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss']
})

export class CommentEditComponent implements OnInit {

  isAdmin = false;

  newComment: Comment;

  saveComment(f: NgForm) {
    this.newComment = f.form.value;

    console.log(this.saveComment);

    this.commentDataService.updateComment(this.newComment).subscribe(
      p => this.router.navigate(['post-detail'])
    );
  }

  constructor(private commentDataService: PostCommentService, private router: Router) { }

  ngOnInit() {
  }

}
