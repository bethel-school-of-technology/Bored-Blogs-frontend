
import { Injectable } from '@angular/core';
import { ContactUsComponent} from "../models/"

var contactUs: ContactUs[] = [new Comment(1, "Kayla", "Miller", "kmiller69322@gmail.com", "Blog about risk board game", "message body blah blah")];
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor() { }
}
