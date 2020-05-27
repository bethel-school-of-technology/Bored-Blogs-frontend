import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Post } from "../models/post";
import { Config } from "../config/config";
import { UserService } from "./user.service";
import { map } from "rxjs/operators";
import { MyHeaders } from "./headers";

//it was hard to write it should be hard to read -Jacob
function convertManyPublishedDates(posts: Post[]) {
  //console.log(posts);
  return posts.map((p) => convertPublishedDates(p));
}

//it was hard to write it should be hard to read -Jacob
function convertPublishedDates(post: Post) {
  //console.log(post);
  post.publishedDate = new Date(post.published);
  var tempDate = new Date(post.published);
  post.published = `${
    tempDate.getMonth() + 1
  }/${tempDate.getDate()}/${tempDate.getFullYear()} `;
  //console.log(post);
  return post;
}
@Injectable({
  providedIn: "root",
})
export class PostDataService {
  url: string = Config.apiUrl;

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.url + "/posts")
      .pipe(map(convertManyPublishedDates))
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
      );
  }
  //getPostByauthor :Jackie
  getPostby(authorId: number): Observable<Post> {
    return this.http
      .get<Post>(this.url + "/posts/read/" + authorId)
      .pipe(map(convertPublishedDates));
  }

  getPost(id: number): Observable<Post> {
    var earl = this.url + "/posts/read/" + id;
    console.log(earl);
    return this.http.get<Post>(earl).pipe(map(convertPublishedDates));
  }

  addPost(post: Post, token: string): Observable<Post[]> {
    return this.http
      .post<Post[]>(this.url + "/posts", post, {
        headers: MyHeaders.createHeaders(token),
      })
      .pipe(map(convertManyPublishedDates));
  }

  deletePost(id: number, token): Observable<Post[]> {
    return this.http
      .delete<Post[]>(this.url + "/posts/delete/" + id, {
        headers: MyHeaders.createHeaders(token),
      })
      .pipe(map(convertManyPublishedDates));
  }

  editPost(post: Post, token): Observable<Post[]> {
    return this.http
      .put<Post[]>(this.url + "/posts/update/" + post.id, post, {
        headers: MyHeaders.createHeaders(token),
      })
      .pipe(map(convertManyPublishedDates));
  }

  constructor(private http: HttpClient, private user: UserService) {}
}
