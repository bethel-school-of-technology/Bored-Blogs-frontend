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
import { MyHeaders } from "./headers";

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
      headers: MyHeaders.createHeaders(token),
    });
  }
  // get a submissiom
  getAContactSubmission(id: number): Observable<ContactUs> {
    return this.http.get<ContactUs>(this.url + "/ContactSubmissions/" + id);
  }

  //submit a contactsubmission
  addContactSubmission(contactUs: any, token: string): Observable<ContactUs[]> {
    return this.http.post<ContactUs[]>(
      this.url + "/contactSubmissions",
      contactUs,
      {
        headers: MyHeaders.createHeaders(token),
      }
    );
  }

  //delete a contact submission
  deleteContactSubmission(id: number, token): Observable<ContactUs[]> {
    return this.http.delete<ContactUs[]>(this.url + "/ContactUs/delete/" + id, {
      headers: MyHeaders.createHeaders(token),
    });
  }

  constructor(private http: HttpClient) {}
}

// TODO pass parameters to the contributor service in the url
