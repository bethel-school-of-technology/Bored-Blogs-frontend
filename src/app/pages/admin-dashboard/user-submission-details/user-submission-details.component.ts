import { Component, OnInit } from "@angular/core";
import { ContactUs } from "src/app/models/contact-us";
import { ContactUsService } from "src/app/services/contact-us.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";

@Component({
  selector: "user-submission-details",
  templateUrl: "./user-submission-details.component.html",
  styleUrls: ["./user-submission-details.component.scss"],
})
export class UserSubmissionDetailsComponent implements OnInit {
  user: User;
  ContactUs: ContactUs[];



  deleteMessage(id: number): void {
    this.contactUsService.deleteContactSubmission(id, this.user.token)
    .subscribe((m) => this.ContactUs = m);
  }

  constructor(
    private contactUsService: ContactUsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((u) => {
      this.user = u;
      this.contactUsService.getContactSubmissions(u.token).subscribe((e) => {
        console.log(e);
        this.ContactUs = e;
      });
    });
    this.userService.refreshUser();

  }
}
