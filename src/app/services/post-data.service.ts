import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Post } from "../models/post";
import { Config } from "../config/config";
import { UserService } from "./user.service";
import { map } from "rxjs/operators";
import { MyHeaders } from './headers';


@Injectable({
  providedIn: "root",
})
export class PostDataService {
  url: string = Config.apiUrl;

  getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.url + "/posts").pipe(
        map((foo) => {
          foo = foo.map((f) => {
            f.preview = f.body.substr(0, 150) + "...";//creates a preview of 300 characters
            //console.log(foo);
            return f;
          });
          return foo;
        })
      );
  }
  //getPostByauthor :Jackie
  getPostby(authorId: number): Observable<Post> {
      return this.http.get<Post>(this.url + "/posts/read" + authorId);
  }

  getPost(id: number): Observable<Post> {
      var earl = this.url + "/posts/read" + id;
      console.log(earl);
      return this.http.get<Post>(earl);
  }

  addPost(post: Post,token:string): Observable<Post[]> {
      return this.http.post<Post[]>(this.url + "/posts", post,
        {
          headers: MyHeaders.createHeaders(token),
        });
  }

  deletePost(id: number,token): Observable<Post[]> {
      return this.http.delete<Post[]>(this.url + "posts/delete" + id,
        {
          headers: MyHeaders.createHeaders(token),
        });
  }

  editPost(post: Post,token): Observable<Post[]> {
      return this.http.put<null>(this.url + "/posts/update" + post.id, post,
        {
          headers: MyHeaders.createHeaders(token),
        });    
  }

  constructor(private http: HttpClient, private user: UserService) {}
}
