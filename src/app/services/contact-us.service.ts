import { Injectable } from '@angular/core';
import { ContactUs } from '../models/contact-us.model';
import { Config } from "../config/config";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

var contactUs: ContactUs[] = [new ContactUs(1, "Kayla", "Miller", "kmiller69322@gmail.com", "Blog about Risk", "Risk is anawesome strategy game")];
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  url: string = Config.apiUrl;

  submitContactForm(){

  };

  getContactSubmissions(): Observable<ContactUs[]> {
    if (Config.weAreUsingCloud) {
      return this.http.get<ContactUs[]>(this.url + "fixme");
    } else {
      return new Observable((observer) => {
        var copy = [...contactUs];
        observer.next(copy);
      })};
  }

  
  constructor(private http: HttpClient) { }
}


// TODO pass parameters to the contributor service in the url