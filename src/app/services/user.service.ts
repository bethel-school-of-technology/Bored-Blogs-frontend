import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Config } from "../config/config";
import { CookieService } from "ngx-cookie-service";
import { share, multicast, map } from "rxjs/operators";
import { Observable, of, Subject, ReplaySubject } from "rxjs";
import { Router } from "@angular/router";

var user: User[] = [];

function convertManyCreatedAtDates(users: User[]) {
  return users.map((u) => convertCreatedAtDates(u));
}
function convertCreatedAtDates(user: User) {
  user.createdAtDate = new Date(user.createdAt);
  var tempDate = new Date(user.createdAtDate);
  user.createdAt = `${
    tempDate.getMonth() + 1
    }/${tempDate.getDate()}/${tempDate.getFullYear()} `;
  return user;
}

function convertManyLastLoggedInDates(users: User[]) {
  return users.map((u) => convertLastLoggedInDates(u));
}
function convertLastLoggedInDates(user: User) {
  user.lastLoggedInDate = new Date(user.lastLoggedIn);
  var tempDate = new Date(user.lastLoggedInDate);
  user.lastLoggedIn = `${
    tempDate.getMonth() + 1
    }/${tempDate.getDate()}/${tempDate.getFullYear()} `;
  return user;
}

@Injectable({
  providedIn: "root",
})

export class UserService {
  url: string = Config.apiUrl;
  private currentUser: User;
  private currentUserSubject: Subject<User> = new Subject();

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  //this registers an account
  createAccount(user: User) {
    return this.register(user);
  }

  //this creates an account
  register(user: User) {
    //we are using pip share so that we can subscribe twice
    return this.http.post(`${Config.apiUrl}/users/register`, user).pipe(
      map((user: User) => {
        console.log(user);
        this.currentUser = user;
        this.currentUserSubject.next(user);
        //? is it safe to store cookie here?
        //the only other place i can put it is on the root app instance
        this.cookieService.set("token", user.token);
        return user;
      })
    );
  }

  // Login in user
  login(user: User) {
    return this.http.post(`${Config.apiUrl}/users/login`, user).pipe(
      map((user: User) => {
        console.log(user);
        this.currentUser = user;
        this.currentUserSubject.next(user);
        this.cookieService.set("token", user.token);
        return user;
      })
    );
  }

  isLoggedIn(): boolean {
    return this.currentUserSubject != null;
  }
 
  // Log out user
  logout() {
    this.currentUserSubject.next(null);
  }


  getUserFromLoacl() {
    //is this a mispelling? "local"?
    //TODO: eat the cookie
  }

  getCurrentUser(): Observable<User> {
    return this.currentUserSubject; //is of() is the same as new Observable()
    // .pipe(map(convertManyCreatedAtDates, convertManyLastLoggedInDates));
  }

  //sometimes subscribe is being called after next so just refresh after looking at it
  refreshUser(): void {
    this.currentUserSubject.next(this.currentUser)
    // .pipe(map(convertManyCreatedAtDates, convertManyLastLoggedInDates));
    }
}
