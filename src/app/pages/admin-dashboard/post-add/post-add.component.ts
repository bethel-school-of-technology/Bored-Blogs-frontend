import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostDataService } from '../post-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {


  newPost: Post = new Post();

  addPost() {
    this.postDataService
    .addPost(this.newPost)
    .subscribe(p => this.router.navigate(["post-list"]));
  }

  constructor( private postDataService: PostDataService, private router : Router) { }

  ngOnInit() {
  }

}
