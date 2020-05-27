import { ContactUs } from "../../models/contact-us";
import { ContactUsService } from "./../../services/contact-us.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { Router } from '@angular/router';

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  contactUs: ContactUs[];
  message: any;
  user: User;
  comments: any;

  constructor(
    private ContactUsService: ContactUsService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((u) => (this.user = u));
    this.userService.refreshUser();
  }

  addMessage(f: NgForm) {
    const message = `
    Name: ${f.value.firstName} / 
    Email: ${f.value.email} /
    Subject: ${f.value.subject} /
    Message: ${f.value.body}`;
    console.log(message);

    this.ContactUsService.addContactSubmission(f.form.value, this.user.token).subscribe(
      (m) => {
        this.message = m;
        var tempDate = new Date(this.message.createdAt);
        var day = "";
        var month = "";
        this.message.createdAt = `${tempDate.getMonth() + 1}/${tempDate.getDate()}/${tempDate.getFullYear()}`;

        this.router.navigateByUrl("/");
      },

      (err) => {
        console.log(err);
      }
    )
  }

  log(x) {
    console.log(x);
  }
}
