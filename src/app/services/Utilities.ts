import { HttpHeaders } from "@angular/common/http";
export class Utilities {
  //the set doesnt seem to work as intended
  static headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    auth: "",
  });

  static createHeaders(token:string):HttpHeaders{
    return new HttpHeaders({
      "Content-Type": "application/json",
      auth: token,
    })
  }
}
