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

  posts: Post[];

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postDataService.getPosts().subscribe((p) => {
      console.log(p);
      // to filter and sort the posts by published date we need to add code below && Jacob needs to convert something
      // this.posts = p.filter ....
      for(var i = 0; i < p.length; i++) {
        var tempDate = new Date(p[i].published)
        var day = '';
        var month = '';  
        p[i].published = `${tempDate.getMonth()+1}/${tempDate.getDate()}/${tempDate.getFullYear()} `;
      }
      this.posts = p;
    });
  }


  // TO JACOB: would this sample of code work to sort the Posts by published date? (most recent date to latest date)
  
  // function(){
  //   if (typeof Object.defineProperty === 'function'){
  //     try{Object.defineProperty(Array.prototype,'sortBy',{value:sb}); }catch(e){}
  //   }
  //   if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;
  
  //   function sb(f){
  //     for (var i=this.length;i;){
  //       var o = this[--i];
  //       this[i] = [].concat(f.call(o,o,i),o);
  //     }
  //     this.sort(function(a,b){
  //       for (var i=0,len=a.length;i<len;++i){
  //         if (a[i]!=b[i]) return a[i]<b[i]?-1:1;
  //       }
  //       return 0;
  //     });
  //     for (var i=this.length;i;){
  //       this[--i]=this[i][this[i].length-1];
  //     }
  //     return this;
  //   }
  // };

  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }
}
