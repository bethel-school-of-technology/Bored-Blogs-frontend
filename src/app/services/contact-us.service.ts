import { ContactUsComponent } from './../pages/contact-us/contact-us.component';
import { ContactUs } from '../models/contact-us';
import { Injectable } from '@angular/core';
import { Config } from "../config/config";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { MyHeaders } from './headers';

var contactUs: ContactUs[] = [];
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  addMessage(id: any, value: any, token: any) {
    throw new Error("Method not implemented.");
  }

  url: string = Config.apiUrl;
  contactUs: ContactUs[];
  
// get all submissions
  getContactSubmissions(token:string): Observable<ContactUs[]> {
  //console.log(contributors);
    if (Config.weAreUsingCloud) {
      return this.http.get<ContactUs[]>(this.url + "/ContactSubmissions/", {
        headers: MyHeaders.createHeaders(token),
      });
    } else {
      return new Observable((observer) => {
        var copy = [...contactUs];
        observer.next(copy);
      });
    }
}
  // get a submissiom
  getAContactSubmission(id: number): Observable<ContactUs[]> {
    if (Config.weAreUsingCloud) {
      return this.http.get<ContactUs[]>(this.url + "/ContactSubmissions/"+id);
    } else {
      return new Observable((observer) => {
        var copy = [...contactUs];
        observer.next(copy);
      })};
  }
  //submit a contactsubmission
  submitContactForm(ContactUs: ContactUs): Observable<ContactUs[]> {
    if (Config.weAreUsingCloud) {
      return this.http.post<ContactUs[]>(
        this.url + "/contactSubmissions/",
        contactUs
      );
    } else {
      return new Observable((observer) => {
        contactUs.push(ContactUs);
        var copy = [...contactUs];
        observer.next(copy);
      });
    }
  }

  //delete a contact submission
  deleteContactSubmission(id: number): Observable<ContactUs[]> {
    if (Config.weAreUsingCloud) {
      return this.http.delete<ContactUs[]>(
        this.url + "/ContactUs/delete/" + id
      );
    } else {
      return new Observable((observer) => {
        contactUs = contactUs.filter((p) => p.id != id);
        var copy = [...contactUs];
        observer.next(copy);
      });
    }
  }

  constructor(private http: HttpClient) { }
}


// TODO pass parameters to the contributor service in the url