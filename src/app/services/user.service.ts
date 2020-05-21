import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Config } from "../config/config";
import { CookieService } from "ngx-cookie-service";
import { share } from "rxjs/operators";
import { Observable } from "rxjs";

var users: User[] = [
  {
    id: 0,
    email: "penny@dollar.com",   
    password: "123456",
    firstName: "Penny",
    lastName: "Coin",
    bio: "I love games and learning new games online. There is such a fun online gaming community, even for board games", 
    lastLoggedIn: "05/12/20",
    createdAt: "02/02/19",
    token: "test",
    isAdmin: false,
  },
  {
    id: 1,
    email: "springer123@show.com",
    password: "123456",
    firstName: "Jerry",
    lastName: "Springer",
    bio: "I love to make game shows on TV out of peoples lives.",
    lastLoggedIn: "02/12/20",
    createdAt: "04/30/19",
    token: "test",
    isAdmin: false,
  },
  {
    id: 2,
    email: "kblack_67@email.com",
    password: "123456",
    firstName: "Karen",
    lastName: "Black",
    bio: "test test test bio for Karen Black",
    lastLoggedIn: "05/18/20",
    createdAt: "04/01/19",
    token: "test",
    isAdmin: false,
  },
];

const weAreUsingCloud = Config.weAreUsingCloud;

@Injectable({
  providedIn: "root",
})
export class UserService {
  url: string = Config.apiUrl;

  private currentUser: any;
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  //this registers an account
  createAccount(user: User) {
    return this.register(user);
  }

  //this creates an account
  register(user: User) {
    //we are using pip share so that we can subscribe twice
    const Observable = this.http
      .post(`${Config.apiUrl}/users/register`, user)
      .pipe(share());
    Observable.subscribe((user: User) => {
      this.currentUser = user;
      //? is it safe to store cookie here?
      //the only other place i can put it is on the root app instance
      this.cookieService.set("token", user.token);
    });
    return Observable;
  }

  // Login in user
  login(user: User) {
    const Observable = this.http
      .post(`${Config.apiUrl}/users/login`, user)
      .pipe(share());
    Observable.subscribe((user: User) => {
      this.currentUser = user;
      this.cookieService.set("token", user.token);
    });
    return Observable;
  }

  isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  isAdmin() {
    //TODO: run the is admin endpoint perhaps
  }
  // Log out user
  logout() {
    this.currentUser = null;
  }

  //TODO: fix spelling and make it work
  getContributors() {
    return;
  }

  getUserFromLoacl() {
    //TODO: eat the cookie
  }

  // Get user by id to display on User Profile page
  getUser(id: number): Observable<User> {
    if (Config.weAreUsingCloud) {
      return this.http.get<User>(Config.apiUrl + "/users/profile/" + id);
    } else {
      return new Observable((observer) => {
        observer.next({ ...users.find((u) => u.id == id) });
      });
    }
  }
  getCurrentUser() {
    //idk if this is secure or not
    return this.currentUser;
  }
}
