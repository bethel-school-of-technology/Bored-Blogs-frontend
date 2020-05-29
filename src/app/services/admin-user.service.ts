import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../config/config";
import { Observable } from "rxjs";
import { Utilities } from './Utilities';
import { UserService } from './user.service';
import { User } from '../models/user';
import { ContactUs } from "src/app/models/contact-us";
import { ContactUsService } from "src/app/services/contact-us.service";
//idk 
@Injectable({
  providedIn: "root"
})
export class AdminUserService {//this class is to manage other users
  url: string = Config.apiUrl;

  constructor(private http: HttpClient, private user: UserService) { }

  getUsers(token: string): Observable<User[]> {
    return this.http.get<User[]>(Config.apiUrl + "/users/list", {
      headers: Utilities.createHeaders(token),
    }).pipe(Utilities.mapManyDatesWithKey('createdAt'));//go
  }

  deleteUser(id: number, token: string): Observable<User[]> {
    return this.http.delete<User[]>(Config.apiUrl + "/users/" + id, {
      headers: Utilities.createHeaders(token),
    });
  }

  deleteMessage(id: number, token: string): Observable<ContactUs[]> {
    return this.http.delete<ContactUs[]>(Config.apiUrl + "/contactSubmissions/" + id, {
      headers: Utilities.createHeaders(token),
    });
  }
}
