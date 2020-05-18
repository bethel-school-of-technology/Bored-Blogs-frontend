import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../config/config";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdminUserService {
  Users = [
    {
      id: 0,
      firstName: "John",
      lastName: "Smith",
      email: "jsmith@example.com",
      lastActive: "2 Hours Ago"
    },
    {
      id: 1,
      firstName: "Jane",
      lastName: "Doe",
      email: "jdoe@example.com",
      lastActive: "1 Hour Ago"
    },
    {
      id: 2,
      firstName: "Luke3",
      lastName: "Skywalker",
      email: "thedarkside@example.com",
      lastActive: "10 Minutes Ago"
    }
  ];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    if (Config.weAreUsingCloud) {
      return this.http.get<any[]>(Config.apiUrl + "user-list");//go
    } else {
      return new Observable((observer) => {
        var copy = [...this.Users];
        observer.next(copy);
      });
    }
  }

  deleteUser(id: number): Observable<any[]> {
    if (Config.weAreUsingCloud) {
      return this.http.delete<any[]>(Config.apiUrl + "user/delete" + id);
    } else {
      return new Observable(observer => {
        this.Users = this.Users.filter(p => p.id != id);
        var copy = [...this.Users];
        observer.next(copy);
      });
    }
  }
}
