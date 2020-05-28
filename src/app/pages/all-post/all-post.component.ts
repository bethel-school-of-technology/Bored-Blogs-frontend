import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PostDataService } from "src/app/services/post-data.service";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-all-post",
  templateUrl: "./all-post.component.html",
  styleUrls: ["./all-post.component.scss"],
})
export class AllPostComponent implements OnInit {

  constructor(private postDataService: PostDataService) {}

  posts: Post[];

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postDataService.getPosts().subscribe((p) => {
      console.log(p);
        if (false)
        for (var i = 0; i < p.length; i++) {
          // var tempDate = new Date(p[i].published);
          // var day = "";
          // var month = "";
          // p[i].published = `${
          //   tempDate.getMonth() + 1
          // }/${tempDate.getDate()}/${tempDate.getFullYear()} `;
        }
      this.posts = p;
    });
  }

  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }
}
