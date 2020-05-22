import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Config } from "../config/config";
import { CookieService } from "ngx-cookie-service";
import { share, multicast } from "rxjs/operators";
import { Observable, of, Subject, ReplaySubject } from "rxjs";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root",
})
export class UserService {
  url: string = Config.apiUrl;
  private currentUser: User;
  private currentUserSubject: Subject<User> = new Subject();
  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.currentUserSubject.pipe(share());
  }

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
      console.log(user);
      this.currentUser = user;
      this.currentUserSubject.next(user);
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
      console.log(user);
      this.currentUser = user;
      this.currentUserSubject.next(user);
      this.cookieService.set("token", user.token);
    });
    return Observable;
  }

  isLoggedIn(): boolean {
    return this.currentUserSubject != null;
  }

  isAdmin() {
    //TODO: run the is admin endpoint perhaps
  }
  // Log out user
  logout() {
    this.currentUserSubject.next(null);
  }

  //TODO: fix spelling and make it work
  getContributors() {
    return;
  }

  getUserFromLoacl() {
    //TODO: eat the cookie
  }

  getCurrentUser(): Observable<User> {
    return this.currentUserSubject; //is of() is the same as new Observable()
  }

  //sleeping always help fix every problem
  //sometimes subscribe is being called after next so just refrehs after looking at it
  refreshUser(): void {
    this.currentUserSubject.next(this.currentUser);
  }
}
