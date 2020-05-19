import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Post } from "../models/post";
import { Config } from "../config/config";

// POSTS SHOULD BE SORTED BY CREATED AT DATE -- NEWEST FIRST (Jackie)
var posts: Post[] = [
  {
    id: 0,
    authorId: 1,
    author: "Jacob Stanton",
    title: "Settlers of Catan",
    published: "04/01/2020",
    preview:
      "Test PREVIEW. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    body:
      "Test BODY. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    relatedGames: [],
    tags: [],
  },
  {
    id: 1,
    authorId: 2,
    author: "Jackie Roberts",
    title: "Ticket to Ride",
    published: "03/28/2020",
    preview:
      "PREVIEW. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    body:
      "BODY. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    relatedGames: [],
    tags: [],
  },
  {
    id: 2,
    authorId: 3,
    author: "Kayla Miller",
    title: "Dixit",
    published: "01/19/2020",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    relatedGames: [],
    tags: [],
  },
  {
    id: 3,
    authorId: 4,
    author: "Kamyla Andrlik",
    title: "Jungle Speed",
    published: "05/01/2020",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    relatedGames: [],
    tags: [],
  },
  {
    id: 4,
    authorId: 5,
    author: "Jacob Stanton",
    title: "Spot It",
    published: "94/01/2020",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    relatedGames: [],
    tags: [],
  },
  {
    id: 5,
    authorId: 6,
    author: "Jackie Roberts",
    title: "Werewolf",
    published: "02/11/2020",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    relatedGames: [],
    tags: [],
  },
];

const weAreUsingCloud = Config.weAreUsingCloud;

@Injectable({
  providedIn: "root",
})
export class PostDataService {
  url: string = Config.apiUrl;

  getPosts(): Observable<Post[]> {
    if (Config.weAreUsingCloud) {
      return this.http.get<Post[]>(this.url + "/posts");
    } else {
      return new Observable((observer) => {
        var copy = [...posts];
        observer.next(copy);
      });
    }
  }
  //todo make getPostByauthor :for jackie :)
  getPostby(authorId: number): Observable<Post> {
    if (Config.weAreUsingCloud) {
      return this.http.get<Post>(this.url + "/posts/read" + authorId);
    } else {
      return new Observable((observer) => {
        observer.next({ ...posts.find((p) => p.authorId == authorId) });
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
