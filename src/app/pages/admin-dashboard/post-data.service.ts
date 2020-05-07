import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  url: string = 'http://localhost:4200/admin';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.url + '/' + id);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(this.url + '/' + id);
  }

  editPost(post: Post): Observable<Post> {
    return this.http.put<Post>(this.url + '/' + post.id, post);
  }

  constructor(private http: HttpClient) { }
}
