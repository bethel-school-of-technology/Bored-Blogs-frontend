import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Config } from '../config/config';

const comments: Comment[] = [
  new Comment(1, 'some user', 'i like turtles')
];

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  url: string = Config.apiUrl;

  getComments(): Observable<Comment[]> {
   // return this.http.get<Post[]>(this.url + 'posts');
    return new Observable((observer => { var copy = [...comments]; observer.next(copy); }));
  }

  addComment(comment: Comment): Observable<Comment[]> {
 //   return this.http.post<Comment[]>(this.url + 'post-detail', comment);
 return new Observable((observer => { comments.push(comment); var copy = [...comments]; observer.next(copy); }));
  }

  updateComment(comment:Comment):Observable<Comment[]>{
    return new Observable((observer => {
        for (var i = 0; i < comments.length; i++) {
      //      look through the array and replace the item
            if (comment.id == i) {
              comments[i] = comment;
              i = comments.length;//we found what we wanted we can stop
            }
          }
          var copy = [...comments];
          observer.next(copy);
        }));
  }

  deleteComment(id: number): Observable<Comment[]> {
    return this.http.delete<Comment[]>(this.url + 'post-detail' + id);
  }

  constructor(private http: HttpClient) { }
}
