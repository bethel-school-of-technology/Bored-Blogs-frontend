import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Comment } from "../models/comment";
import { Config } from "../config/config";

var comments: Comment[] = [new Comment(1, "some user", "i like turtles")];

@Injectable({
  providedIn: "root",
})
export class PostCommentService {
  url: string = Config.apiUrl;

  getComments(): Observable<Comment[]> {
    if (Config.weAreUsingCloud) {
      return this.http.get<Comment[]>(this.url + "fixme"); //TODO:FIXME  the url needs to be updated and we need to add token to headers
    } else {
      return new Observable((observer) => {
        var copy = [...comments];
        observer.next(copy);
      });
    }
  }

  addComment(comment: Comment): Observable<Comment[]> {
    if (Config.weAreUsingCloud) {
      return this.http.post<Comment[]>(this.url + "post-detail", comment);
    } else {
      return new Observable((observer) => {
        comments.push(comment);
        var copy = [...comments];
        observer.next(copy);
      });
    }
  }

  updateComment(comment: Comment): Observable<Comment[]> {
    if (Config.weAreUsingCloud) {
        //TODO: needs the http thingy
    } else {
      return new Observable((observer) => {
        for (var i = 0; i < comments.length; i++) {
          //      look through the array and replace the item
          if (comment.id == i) {
            comments[i] = comment;
            i = comments.length; //we found what we wanted we can stop
          }
        }
        var copy = [...comments];
        observer.next(copy);
      });
    }
    
  }

  deleteComment(id: number): Observable<Comment[]> {
    if (Config.weAreUsingCloud) {
      return this.http.delete<Comment[]>(this.url + 'post-detail' + id);
    } else {
      return new Observable((observer) => {
        comments = comments.filter((p) => p.id != id);
        var copy = [...comments];
        observer.next(copy);
      });
    }
  }

  constructor(private http: HttpClient) {}
}
