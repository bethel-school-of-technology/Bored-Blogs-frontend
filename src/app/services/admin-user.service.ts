import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../config/config";
import { Observable } from "rxjs";
import { MyHeaders } from './headers';
import { UserService } from './user.service';
import { User } from '../models/user';
//idk 
@Injectable({
  providedIn: "root"
})
export class AdminUserService {//this class is to manage other users
  url: string = Config.apiUrl;

  constructor(private http: HttpClient, private user: UserService) {}

  getUsers(token:string): Observable<any[]> {
    return this.http.get<any[]>(Config.apiUrl + "/users/list", {
      headers: MyHeaders.createHeaders(token),
    });//go
  }

  deleteUser(id: number,token:string): Observable<User[]> {
    return this.http.delete<User[]>(Config.apiUrl + "/users/delete/" + id, {
      headers: MyHeaders.createHeaders(token),
    });
  }
}
