import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../models/comment';

const newComment:Comment[] = [
  new Comment(1,'some user','i like turtles')
];

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  url: string = 'http://localhost:4200/';

  getComments(): Observable<Comment[]> {
   // return this.http.get<Post[]>(this.url + 'posts');
    return new Observable((observer => { var copy = [...newComment]; observer.next(copy); }));
  }

  addComment(comment: Comment): Observable<Comment[]> {
 //   return this.http.post<Comment[]>(this.url + 'post-detail', comment);
 return new Observable((observer => { newComment.push(comment); var copy = [...newComment]; observer.next(copy); }));
  }

  constructor(private http: HttpClient) { }
}
