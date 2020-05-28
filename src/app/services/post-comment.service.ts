import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Comment } from "../models/comment";
import { Config } from "../config/config";
import { Utilities } from "./Utilities";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PostCommentService {
  url: string = Config.apiUrl;

  getComments(parentPostId: number): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(this.url + "/comments/" + parentPostId)
      .pipe(Utilities.mapWithKey("createdAt"));
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
    return this.http.post<Comment[]>(
      this.url + "/comments/" + postId,
      comment,
      {
        headers: Utilities.createHeaders(token),
      }
    );
  }

  //commentId is more programmer friendly
  updateComment(
    commentId: number,
    comment: Comment,
    token
  ): Observable<Comment[]> {
    return this.http.put<Comment[]>(
      this.url + "/comments/" + commentId,
      comment,
      {
        headers: Utilities.createHeaders(token),
      }
    );
  }

  deleteComment(commentId: number, token): Observable<Comment[]> {
    return this.http.delete<Comment[]>(this.url + "/comments/" + commentId, {
      headers: Utilities.createHeaders(token),
    });
  }

  constructor(private http: HttpClient) {}
}
