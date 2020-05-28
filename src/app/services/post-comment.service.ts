import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Comment } from "../models/comment";
import { Config } from "../config/config";
import { Utilities } from "./Utilities";
import { map } from "rxjs/operators";


function convertManyCreatedAtDates(comments: Comment[]) {
  return comments.map((p) => convertCreatedAtDates(p));
}
function convertCreatedAtDates(comment: Comment) {
  comment.createdAtDate = new Date(comment.createdAt);
  var tempDate = new Date(comment.createdAtDate);
  comment.createdAt = `${
    tempDate.getMonth() + 1
  }/${tempDate.getDate()}/${tempDate.getFullYear()} `;
  //console.log(post);
  return comment;
}

@Injectable({
  providedIn: "root",
})
export class PostCommentService {
  url: string = Config.apiUrl;

  getComments(parentPostId: number): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(this.url + "/comments/" + parentPostId)
      .pipe(map(convertManyCreatedAtDates));
  }

  //not implemented in backend -jacob
  // // Get comment by id to display on the associated post-detail page
  // getComment(id: number): Observable<Comment> {
  //   return this.http.get<Comment>(this.url + "/comments/get" + id)
  //   .pipe(map(convertCreatedAtDates))
  // }

  // Add a comment to a post (User or Admin only) on post-detail page (by id)
  addComment(
    postId: number,
    comment: any,
    token: string
  ): Observable<Comment[]> {
    return this.http
      .post<Comment[]>(this.url + "/comments/create/" + postId, comment, {
        headers: Utilities.createHeaders(token),
      })
      .pipe(map(convertManyCreatedAtDates));
  }

  //commentId is more programmer friendly
  updateComment(commentId: number, comment: Comment, token): Observable<Comment[]> {
    return this.http
      .put<Comment[]>(this.url + "/comments/" + commentId, comment, {
        headers: Utilities.createHeaders(token),
      })
      .pipe(map(convertManyCreatedAtDates));
  }

  deleteComment(commentId: number, token): Observable<Comment[]> {
    return this.http
      .delete<Comment[]>(this.url + "/comments/" + commentId, {
        headers: Utilities.createHeaders(token),
      })
      .pipe(map(convertManyCreatedAtDates));
  }

  constructor(private http: HttpClient) {}
}
