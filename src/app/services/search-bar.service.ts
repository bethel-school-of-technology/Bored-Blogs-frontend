import { Post } from 'src/app/models/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Config } from "../config/config";
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  searchOption=[]
  public postsData: Post[];
  url: string = Config.apiUrl;

  constructor(private http: HttpClient) { }

 

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.url + "/posts")
      /* .pipe(map(convertManyPublishedDates))
      .pipe(
        map((foo) => {
          foo = foo.map((f) => {
            f.preview = f.body.substr(0, 150) + "..."; //creates a preview of 150 characters
            //console.log(foo);
            return f;
          });
          return foo;
        })
      )
      .pipe(
        map((posts) => {
          return posts.sort((p1, p2) => {//pipe the convertManyPublishedDates before doing this otherwise bad time are ahead
            //this is a date comparator
            if (p1.publishedDate < p2.publishedDate) return 1;
            if (p1.publishedDate > p2.publishedDate) return -1;
            return 0;
          });
        })
      ); */
  }

  filteredListOptions() {
    let posts = this.postsData;
    let filteredPostsList = [];
    for (let post of posts) {
      for (let options of this.searchOption){
        if(options.title === post.title){
        filteredPostsList.push(post);
      }
    }
  }
  console.log(filteredPostsList);
  return filteredPostsList;
}
}
