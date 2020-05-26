import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { Config } from "../config/config";
import { linksIguess } from "../models/linksIguess";
import { Bio } from "../models/bio";
import { Game } from "../models/game";
import { map } from "rxjs/operators";
import { User } from "../models/user";

//this style formats the color into a object that ngStyle accepts
function styleFromColor(backGroundColor: String, textColor: String): any {
  return {
    "background-color": backGroundColor,
    color: textColor,
  };
}

@Injectable({
  providedIn: "root",
})
export class ContributorService {
  url: string = Config.apiUrl;

  getContributors(): Observable<User[]> {
    //console.log(contributors);
    console.log("contributor service is being called so yes im here");
    var request = this.http.get<User[]>(this.url + "/users/contributors").pipe(
      map((foo) => {
        foo = foo.map((f) => {
          f.name = f.firstName + " " + f.lastName;
          //console.log(foo);
          return f;
        });
        return foo;
      })
    );
    return request;
  }

  getContributor(id: number): Observable<User> {
    console.log("how ever is calling me stop");
    return this.http.get<User>(this.url + "/users/contributors/" + id);
  }    

  constructor(private http: HttpClient) {}
}
