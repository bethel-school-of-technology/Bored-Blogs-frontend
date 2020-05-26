import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Comment } from "../models/comment";
import { Config } from "../config/config";
import { MyHeaders } from "./headers";
import { map } from 'rxjs/operators';

const weAreUsingCloud = Config.weAreUsingCloud;
function convertManyCreatedAtDates(comments: Comment[]) {
  //console.log(posts);
  return comments.map((p) => convertCreatedAtDates(p));
}

//it was hard to write it should be hard to read -Jacob
function convertCreatedAtDates(comment: Comment) {
  //console.log(post);
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
    return this.http.get<Comment[]>(
      this.url + "/comments/read/" + parentPostId
    ).pipe(map(convertManyCreatedAtDates)); 
  }

  // Get comment by id to display on the associated post-detail page
  getComment(id: number): Observable<Comment> {
    return this.http.get<Comment>(this.url + "/comments/read/" + id).pipe(map(convertCreatedAtDates));
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
    ).pipe(map(convertManyCreatedAtDates));
  }

  updateComment(comment: Comment): Observable<Comment[]> {
    return this.http.put<Comment[]>(
      this.url + "/comments/update/" + comment.id,
      comment
    ).pipe(map(convertManyCreatedAtDates));
  }

  deleteComment(id: number): Observable<Comment[]> {
    return this.http.delete<Comment[]>(this.url + "/comments/delete/" + id).pipe(map(convertManyCreatedAtDates));
  }

  constructor(private http: HttpClient) {}
}
