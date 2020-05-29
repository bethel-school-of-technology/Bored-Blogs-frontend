import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Config } from "../config/config";
import { CookieService } from "ngx-cookie-service";
import { map } from "rxjs/operators";
import { Observable, of, Subject } from "rxjs";
import { Utilities } from "./Utilities";

@Injectable({
  providedIn: "root",
})
export class UserService {
  url: string = Config.apiUrl;
  private currentUser: User;
  private currentUserSubject: Subject<User> = new Subject();

  constructor(private http: HttpClient, private cookieService: CookieService) { }

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
    return this.http
      .post(`${Config.apiUrl}/users/login`, user)
      .pipe(Utilities.mapDateWithKey("lastLoggedIn"))
      .pipe(Utilities.mapDateWithKey("createdAt"))
      .pipe(
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

  getUserFromLocal() {
    //TODO: eat the cookie
  }

  getCurrentUser(): Observable<User> {
    return this.currentUserSubject; //is of() is the same as new Observable()
  }

  //sometimes subscribe is being called after next so just refresh after looking at it
  refreshUser(): void {
    this.currentUserSubject.next(this.currentUser);
  }
}
