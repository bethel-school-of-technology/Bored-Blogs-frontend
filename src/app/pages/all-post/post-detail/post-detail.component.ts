import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../../services/post-data.service';
import {Post} from '../../../models/Post';//TODO: fix import

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: Post;

  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }


  constructor(postservice: PostDataService) { }



  ngOnInit() {
  }



}
