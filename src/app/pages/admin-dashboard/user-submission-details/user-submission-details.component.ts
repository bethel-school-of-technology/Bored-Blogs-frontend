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

  constructor(
    private contactUsService: ContactUsService,
    private userService: UserService
  ) { }

  user: User;
  ContactUs: ContactUs[];
  message: any;
  comments: any;
  // messagesList: Message[];

  deleteMessage(id: number): void {
    this.contactUsService.deleteContactSubmission(id, this.user.token)
    // .subscribe(() => this.ContactUs());  
      .subscribe(m => this.getMessages());
  }

  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((u) => {
      this.user = u;
      // Get list of messages (Admin dashboard)
      this.getMessages();
    });
    this.userService.refreshUser();
  }
  getMessages(){
    this.contactUsService.getContactSubmissions(this.user.token).subscribe(
      (m) => {   
        this.ContactUs = m;
      });
  }
}
