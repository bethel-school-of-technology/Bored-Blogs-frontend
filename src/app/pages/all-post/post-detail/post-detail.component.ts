import { Component, Input, OnInit } from '@angular/core';
import { PostDataService } from 'src/app/services/post-data.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(private postDataService: PostDataService) { }

  @Input() post: Post[];


  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    this.postDataService.getPosts().subscribe((p) => {
      console.log(p);
      this.post = p;
    });
  }

}
