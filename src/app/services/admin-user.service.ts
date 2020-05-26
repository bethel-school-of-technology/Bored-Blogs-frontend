import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../config/config";
import { Observable } from "rxjs";
import { MyHeaders } from './headers';

@Injectable({
  providedIn: "root"
})
export class AdminUserService {
  // Users = [
  //   {
  //     id: 0,
  //     firstName: "John",
  //     lastName: "Smith",
  //     email: "jsmith@example.com",
  //     lastLoggedIn: "03/20/20"
  //   },
  //   {
  //     id: 1,
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     email: "jdoe@example.com",
  //     lastLoggedIn: "04/22/20"
  //   },
  //   {
  //     id: 2,
  //     firstName: "Luke3",
  //     lastName: "Skywalker",
  //     email: "thedarkside@example.com",
  //     lastAlastLoggedIn: "05/19/20"
  //   }
  // ];

  constructor(private http: HttpClient) {}

  getUsers(token:string): Observable<any[]> {
    return this.http.get<any[]>(Config.apiUrl + "/users/list", {
      headers: MyHeaders.createHeaders(token),
    });//go
  }

  deleteUser(id: number,token:string): Observable<any[]> {
    return this.http.delete<any[]>(Config.apiUrl + "/users/delete/" + id, {
      headers: MyHeaders.createHeaders(token),
    });
  }
}
