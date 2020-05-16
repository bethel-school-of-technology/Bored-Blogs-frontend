import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../../services/post-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../../models/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  editPost: Post;

  savePost(f: NgForm) {
    var values = f.form.value;
    console.log(values);
    console.log(this.editPost);

    this.postDataService.editPost(this.editPost).subscribe(
      p => this.router.navigate(['post-list'])
    );
  }

  constructor(private postDataService: PostDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.postDataService.getPost(+param['id'])
        .subscribe(p => {this.editPost = p;
          console.log(p)
        });
    });
  }

}
