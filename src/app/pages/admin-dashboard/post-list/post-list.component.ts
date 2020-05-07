import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../post-data.service';
import { Post } from '../post';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  getPosts(): void {
    this.postDataService.getPosts().subscribe(p => (this.posts = p));
  }

  deletePost(id: number): void {
    this.postDataService.deletePost(id).subscribe(p => this.getPosts());
  }

  constructor(private postDataService: PostDataService) {}



  ngOnInit() {
    this.getPosts();
  }

}
