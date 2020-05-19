import { Component, Input, OnInit } from '@angular/core';
import { PostDataService } from 'src/app/services/post-data.service';
import { Post } from 'src/app/models/post';
import { Router, ActivatedRoute } from '@angular/router';
import { PostCommentService } from 'src/app/services/post-comment.service';
import { UserService } from 'src/app/services/user.service';
import { Comment } from "../../../models/comment";

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(
    private postDataService: PostDataService,
    private postCommentService: PostCommentService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  // Jackie 
  // to get one post to show on /post-detail/:id
  post: Post;

  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }

  isAdmin = false;

  newComment: Comment;

  // Jackie 
  // to add a comment to a post in post-detail/:id
  comments: Comment[];

  addComment() {
    this.postCommentService
      .addComment(this.newComment)
      .subscribe(c => this.comments = c); // is this route correct to refresh pg + see comments
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log(param)
      this.postDataService
        .getPost(+param['id'])
        .subscribe(p => {
          console.log(p);
          this.post = p;
        });
    });
  }
}
