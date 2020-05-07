import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../post-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  editPost: Post = new Post();

  savePost() {
    this.postDataService.editPost(this.editPost).subscribe(
      p => this.router.navigate(['list']));
  }

  constructor(private postDataService: PostDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.postDataService.getPost(+param['id'])
      .subscribe(p => (this.editPost = p));
    });
  }

}
