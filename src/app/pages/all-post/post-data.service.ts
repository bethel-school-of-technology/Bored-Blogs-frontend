import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  url: string = "http://localhost:4200/posts"

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }

  constructor(private http: HttpClient) { }
}
