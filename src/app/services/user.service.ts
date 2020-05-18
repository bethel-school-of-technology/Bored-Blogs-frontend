import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Config } from "../config/config";
import { CookieService } from "ngx-cookie-service";
import { share } from "rxjs/operators";

/**
 * This will comunicate to the backend
 * signing component uses this to talk to backend
 */

@Injectable({
  providedIn: "root",
})
export class UserService {
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

  logout(){
    //the user is logged out
    this.currentUser = null;
  }

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

  //TODO: fix spelling and make it work
  getContributors() {
    return;
  }

  getUserFromLoacl() {
    //TODO: eat the cookie
  }

  isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  isAdmin() {
    //TODO: run the is admin endpoint perhaps
  }
}
