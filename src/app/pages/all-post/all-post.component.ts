import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PostDataService } from "src/app/services/post-data.service";
import { Post } from "src/app/models/post";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-all-post",
  templateUrl: "./all-post.component.html",
  styleUrls: ["./all-post.component.scss"],
})
export class AllPostComponent implements OnInit {

  constructor(private postDataService: PostDataService) {}

  posts: Post[];
  unfilteredPosts: Post[];

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postDataService.getPosts()
    .subscribe((p) => {
      console.log(p);
        if (false)
        for (var i = 0; i < p.length; i++) {
        }
      this.posts = p;
      this.unfilteredPosts = p;
    });
  }

  search(f: NgForm) {
    let formValues = f.form.value;
    console.log(f);
    this.posts =this.unfilteredPosts;
    this.posts = this.posts.filter((p) => {
      var regex = new RegExp(`.*${formValues.title}.*`,'i');
      return regex.test(p.title);
    });
  }

  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }
}
