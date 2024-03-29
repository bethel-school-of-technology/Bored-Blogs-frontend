import { ContactUsComponent } from "./../pages/contact-us/contact-us.component";
import { ContactUs } from "../models/contact-us";
import { Injectable } from "@angular/core";
import { Config } from "../config/config";
import { Observable, of } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from "@angular/common/http";
import { Utilities } from "./Utilities";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ContactUsService {
  url: string = Config.apiUrl;

  // get all submissions
  getContactSubmissions(token: string): Observable<ContactUs[]> {
    // send header(s) to the back end (gets stuck on the request)
    return this.http
      .get<ContactUs[]>(this.url + "/ContactSubmissions/", {
        headers: Utilities.createHeaders(token),
      })
      // using the utilities file to convert the createdAt date to readable format
      .pipe(Utilities.mapManyDatesWithKey("createdAt"))
      .pipe(
        // sorting the date
        map((ContactUs) => {
          return ContactUs.sort((m1, m2) => {
            //pipe the convertManycreatedAtDates before doing this otherwise bad time are ahead
            //this is a date comparator
            if (m1.createdAtDate < m2.createdAtDate) return 1;
            if (m1.createdAtDate > m2.createdAtDate) return -1;
            return 0;
          });
        })
      );
  }

  // get a submissiom
  getAContactSubmission(id: number): Observable<ContactUs[]> {
    return this.http
      .get<ContactUs[]>(this.url + "/ContactSubmissions/" + id)
      .pipe(Utilities.mapDateWithKey("createdAt"));
  }

  //submit a contactsubmission
  addMessage(contactUs: any, token: string): Observable<ContactUs> {
    return this.http.post<ContactUs>(
      this.url + "/contactSubmissions",
      contactUs,
      {
        headers: Utilities.createHeaders(token),
      }
    );
  }

  //delete a contact submission
  deleteContactSubmission(id: number, token): Observable<any> {
    return this.http.delete<any>(
      this.url + "/contactSubmissions/" + id,
      {
        headers: Utilities.createHeaders(token),
      }
    );
  }

  constructor(private http: HttpClient) {}
}