import { HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
export class Utilities {
  //the set doesnt seem to work as intended
  static headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    auth: "",
  });

  static mapManyDatesWithKey(key: string) {
    return map((foo: any) => {
      return foo.map((u) => Utilities.convertDateWithKey(u, key));
    });
  }

  static mapDateWithKey(key: string) {
    return map((foo: any) => {
      return Utilities.convertDateWithKey(foo, key);
    });
  }

  static convertDateWithKey(foo: any, key: string) {
    if (foo[key] == null) {//just check to see if it has the key 
      console.log(foo);
      console.log("that doesnt have this " + key);
      return foo;
    }
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
