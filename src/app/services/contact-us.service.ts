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
import { map } from 'rxjs/operators';



// function convertManyCreatedAtDates(contactUs: ContactUs[]) {
//   return contactUs.map((p) => convertCreatedAtDates(p));
// }
// function convertCreatedAtDates(contactUs: ContactUs) {
//   contactUs.createdAtDate = new Date(contactUs.createdAt);
//   var tempDate = new Date(contactUs.createdAtDate);
//   contactUs.createdAt = `${
//     tempDate.getMonth() + 1
//     }/${tempDate.getDate()}/${tempDate.getFullYear()} `;
//   return contactUs;
// }

var contactUs: ContactUs[] = [];

@Injectable({
  providedIn: "root",
})
export class ContactUsService {
  url: string = Config.apiUrl;
  contactUs: ContactUs[];

  // get all submissions
  getContactSubmissions(token: string): Observable<ContactUs[]> {
    //console.log(contributors);
    return this.http.get<ContactUs[]>(this.url + "/ContactSubmissions/", {
      headers: Utilities.createHeaders(token),
    })
    // .pipe(map(convertManyCreatedAtDates));
  }
  // get a submissiom
  getAContactSubmission(id: number): Observable<ContactUs[]> {
    return this.http.get<ContactUs[]>(this.url + "/ContactSubmissions/" + id)
    // .pipe(map(convertManyCreatedAtDates)); 
  }

  //submit a contactsubmission
  addMessage(contactUs: any, token: string): Observable<ContactUs[]> {
    return this.http.post<ContactUs[]>(
      this.url + "/contactSubmissions",
      contactUs,
      {
        headers: Utilities.createHeaders(token),
      }
    )
    // .pipe(map(convertManyCreatedAtDates)); 
  }

  //delete a contact submission
  deleteContactSubmission(id: number, token): Observable<ContactUs[]> {
    return this.http.delete<ContactUs[]>(this.url + "/contactSubmissions/" + id, {
      headers: Utilities.createHeaders(token),
    })
    // .pipe(map(convertManyCreatedAtDates));
  }

  constructor(private http: HttpClient) {}
}

// TODO pass parameters to the contributor service in the url
