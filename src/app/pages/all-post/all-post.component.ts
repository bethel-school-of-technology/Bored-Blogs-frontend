import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PostDataService } from "src/app/services/post-data.service";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-all-post",
  templateUrl: "./all-post.component.html",
  styleUrls: ["./all-post.component.scss"],
})
export class AllPostComponent implements OnInit {
  //  @Output() postDeleted: EventEmitter<number> = new EventEmitter();

  constructor(private postDataService: PostDataService) {}

  //  onClickDelete() {
  //   this.postDeleted.emit(this.Posts.id);}
  //TODO: connect this to the contributor service which at this time does not exist
  Contributor = [
    {
      firstName: "Jacob",
      lastName: "Stanton",
    },
    {
      firstName: "Jackie",
      lastName: "Roberts",
    },
    {
      firstName: "Kayla",
      lastName: "Miller",
    },
    {
      firstName: "Kamyla",
      lastName: "Andrlik",
    },
  ];

  posts: Post[];

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postDataService.getPosts().subscribe((p) => {
      console.log(p);
      // to filter and sort the posts by published date we need to add code below && Jacob needs to convert something
      // this.posts = p.filter ....
      this.posts = p;
    });
  }

  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }
}
