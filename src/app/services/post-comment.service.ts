import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Comment } from "../models/comment";
import { Config } from "../config/config";
import { MyHeaders } from "./headers";

const weAreUsingCloud = Config.weAreUsingCloud;

@Injectable({
  providedIn: "root",
})
export class PostCommentService {
  url: string = Config.apiUrl;

  getComments(parentPostId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      this.url + "/comments/read/" + parentPostId
    ); //TODO:FIXME  the url needs to be updated and we need to add token to headers
  }

  // Get comment by id to display on the associated post-detail page
  getComment(id: number): Observable<Comment> {
    return this.http.get<Comment>(this.url + "/comments/read/" + id);
  }

  // Add a comment to a post (User or Admin only) on post-detail page (by id)
  addComment(
    postId: number,
    comment: any,
    token: string
  ): Observable<Comment[]> {
    return this.http.post<Comment[]>(
      this.url + "/comments/create/" + postId,
      comment,
      {
        headers: MyHeaders.createHeaders(token),
      }
    );
  }

  updateComment(comment: Comment): Observable<Comment[]> {
    return this.http.put<Comment[]>(
      this.url + "/comments/update/" + comment.id,
      comment
    );
  }

  deleteComment(id: number): Observable<Comment[]> {
    return this.http.delete<Comment[]>(this.url + "/comments/delete/" + id);
  }

  constructor(private http: HttpClient) {}
}
