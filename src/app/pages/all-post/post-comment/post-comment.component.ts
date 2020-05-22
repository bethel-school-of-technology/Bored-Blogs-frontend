import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Comment } from "../../../models/comment";
import { PostCommentService } from "../../../services/post-comment.service";
import { UserService } from 'src/app/services/user.service';
import { PostDataService } from 'src/app/services/post-data.service';

@Component({
  selector: "post-comment",
  templateUrl: "./post-comment.component.html",
  styleUrls: ["./post-comment.component.scss"],
})
export class PostCommentComponent implements OnInit {
  // @Input() newComment: Comment;


  constructor( 
    private postDataService: PostDataService,
    private postCommentService: PostCommentService, 
    private userService: UserService, 
    private router: Router,
    private route: ActivatedRoute) { }

    

  ngOnInit() {
    
  }

}
