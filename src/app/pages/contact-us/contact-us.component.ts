import { ContactUs } from './../../models/contact-us.model';
import { ContactUsService } from './../../services/contact-us.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactUs: ContactUs[];
  dataService: ContactUsService;
  ContactUsService: any;

  constructor(private ContactUs: ContactUs) { 
    this.dataService = this.ContactUsService;
  }

  ngOnInit(): void {
    this.dataService.getContactSubmissions().subscribe(contactUs => this.contactUs = contactUs);
  }
  //TODO: connect this to a service
  submitContactForm(f: NgForm) {
    const message = `My name is ${f.value.first}. My email is ${f.value.email}.
    My message is ${f.value.message}.`;
    console.log(message);
  }

  log(x) { console.log(x); }
}
