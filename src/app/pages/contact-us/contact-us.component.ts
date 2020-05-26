import { ContactUs } from "../../models/contact-us";
import { ContactUsService } from "./../../services/contact-us.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  contactUs: ContactUs[];
  message: any;
  user: any;
  comments: any;

  constructor(
    private ContactUsService: ContactUsService,
    private userService: UserService
    ) {}

  ngOnInit(): void {
  }

  //TODO: connect this to a service --> JACKIE TRIED :) 
  // there is not a Name or Email in the contact us form --> need to bring in from the user service as currentUser info
  addMessage(f: NgForm) {
    const message = `
    Name: ${f.value.firstName} / 
    Email: ${f.value.email} /
    Subject: ${f.value.subject} /
    Message: ${f.value.message}`;
    console.log(message);

// Jacob please help fix the code below --> error says cannot subscribe on void

    // this.ContactUsService
    //   .addMessage(this.message.id, f.form.value, this.user.token)
    //   .subscribe((m) => {
    //       this.message = (m);
    //       var tempDate = new Date(this.message.createdAt)
    //       var day = '';
    //       var month = '';
    //       this.message.createdAt = `${tempDate.getMonth() + 1}/${tempDate.getDate()}/${tempDate.getFullYear()}`;
        
    //     return this.message = (m);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   ); 
    
    
  }

  log(x) {
    console.log(x);
  }
}
