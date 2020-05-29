import { HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
export class Utilities {
  //the set doesnt seem to work as intended
  static headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    auth: "",
  });  

  static mapManyWithKey(key: string) {
    return map((foo: any) => {
      return foo.map((u) => Utilities.convertKey(u, key));
    });    
  }

  static mapWithKey(key: string) {
    return map((foo: any) => {
      return Utilities.convertKey(foo, key);
    });
  }

  static convertKey(foo: any, key: string) {
    foo[key + "Date"] = new Date(foo[key]);
    var tempDate = new Date(foo[key + "Date"]);
    foo[key] = `${
      tempDate.getMonth() + 1
    }/${tempDate.getDate()}/${tempDate.getFullYear()} `;
    return foo;
  }

  static createHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json",
      auth: token,
    });
  }
}
