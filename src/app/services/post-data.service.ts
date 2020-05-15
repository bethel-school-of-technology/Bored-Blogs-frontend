import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Post } from "../models/post";
import { Config } from "../config/config";

var posts: Post[] = [
  {
    id: 0,
    Author: "Jacob Stanton",
    Title: "Settlers of Catan",
    Preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    Body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 1,
    Author: "Jackie Roberts",
    Title: "Ticket to Ride",
    Preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    Body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    Author: "Kayla Miller",
    Title: "Dixit",
    Preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    Body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    Author: "Kamyla Andrlik",
    Title: "Jungle Speed",
    Preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    Body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    Author: "Jacob Stanton",
    Title: "Spot It",
    Preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    Body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    Author: "Jackie Roberts",
    Title: "Werewolf",
    Preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    Body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const weAreUsingCloud = Config.weAreUsingCloud;
@Injectable({
  providedIn: "root",
})
export class PostDataService {
  url: string = "http://localhost:3001";

  getPosts(): Observable<Post[]> {
    if (Config.weAreUsingCloud) {
      return this.http.get<Post[]>(this.url + "posts");
    } else {
      return new Observable((observer) => {
        var copy = [...posts];
        observer.next(copy);
      });
    }
  }

  getPost(id: number): Observable<Post> {
    if (Config.weAreUsingCloud) {
      return this.http.get<Post>(this.url + "/posts/read" + id);
    } else {
      return new Observable((observer) => {
        observer.next({ ...posts.find((p) => p.id == id) });
      });
    }
  }

  addPost(post: Post): Observable<Post[]> {
    if (Config.weAreUsingCloud) {
      return this.http.post<Post[]>(this.url + "posts", post);
    } else {
      return new Observable((observer) => {
        posts.push(post);
        var copy = [...posts];
        observer.next(copy);
      });
    }
  }

  deletePost(id: number): Observable<Post[]> {
    if (Config.weAreUsingCloud) {
      return this.http.delete<Post[]>(this.url + "posts/delete" + id);
    } else {
      return new Observable((observer) => {
        posts = posts.filter((p) => p.id != id);
        var copy = [...posts];
        observer.next(copy);
      });
    }
  }

  editPost(post: Post): Observable<Post[]> {
    if (Config.weAreUsingCloud) {
      return this.http.put<null>(this.url + "/posts/update" + post.id, post);
    } else {
      return new Observable((observer) => {
        for (var i = 0; i < posts.length; i++) {
          //look through the array and replace the item
          if (post.id == i) {
            posts[i] = post;
            i = posts.length; //we found what we wanted we can stop}
          }
        }
        var copy = [...posts];
        observer.next(copy);
      });
    }
  }

  constructor(private http: HttpClient) {}
}
