import { HttpHeaders } from "@angular/common/http";
export class MyHeaders {
  static headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    auth: "",
  });
}
