import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Comment } from "../models/comment";
import { Config } from "../config/config";
import { UserService } from './user.service';


// var comments: Comment[] = [new Comment(1, "Billbob Jones", "i like turtles", "05/19/2020")];


// hardcode comment json data (until database running in cloud)
var comments: Comment[] = [
  {
    id: 0,
    user: "Peppy Longstocking",
    body: "test comment 123 hardcoded in post-comment service",
    createdAt: "05/19/2020"
  },
  {
    id: 1,
    user: "Bob Jones",
    body: "comment 2 hardcoded in post-comment service",
    createdAt: "03/02/2020"
    }
];

const weAreUsingCloud = Config.weAreUsingCloud;

@Injectable({
  providedIn: "root",
})
export class PostCommentService {
  url: string = Config.apiUrl;
  
    getComments(): Observable<Comment[]> {
    if (Config.weAreUsingCloud) {
      return this.http.get<Comment[]>(this.url + "comments"); //TODO:FIXME  the url needs to be updated and we need to add token to headers
         } else {
      return new Observable((observer) => {
        var copy = [...comments];
        observer.next(copy);
      });
    }
  }

  // Get comment by id to display on the associated post-detail page
  getComment(id: number): Observable<Comment> {
    if (Config.weAreUsingCloud) {
      return this.http.get<Comment>(this.url + "/comments/read/" + id); 
    } else {
      return new Observable((observer) => {
        observer.next({ ...comments.find((c) => c.id == id) });
      });
    }
  }

  // Add a comment to a post (User or Admin only) on post-detail page (by id)
  addComment(comment: Comment): Observable<Comment[]> {
    if (Config.weAreUsingCloud) {
      return this.http.post<Comment[]>(this.url + "comments/create/", comment);
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
      return this.http.put<null>(this.url + "/comments/update" + comment.id, comment);
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
      return this.http.delete<Comment[]>(this.url + 'comments/delete' + id);
    } else {
      return new Observable((observer) => {
        comments = comments.filter((c) => c.id != id);
        var copy = [...comments];
        observer.next(copy);
      });
    }
  }
  constructor(private http: HttpClient, userService: UserService) { }
}
