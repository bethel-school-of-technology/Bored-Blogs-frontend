import { Component, Input, OnInit } from '@angular/core';
import { PostDataService } from 'src/app/services/post-data.service';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(private postDataService: PostDataService, private router: Router) { }

  @Input() post: Post[];


  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }

  ngOnInit() {
    this.getPost();
  }

  //?Kamyla's code - trying to figure out how to only pull one blog post by id instead of all of them
/*  ngOnInit() {
    this.route.params.subscribe(param => {
      this.postDataService.getPost(+param['id'])
        .subscribe(p => {this.post = p;
          console.log(p)
        });
    });
  }
*/
  getPost(): void {
    this.postDataService.getPosts().subscribe((p) => {
      console.log(p);
      this.post = p;
    });
  }

}
