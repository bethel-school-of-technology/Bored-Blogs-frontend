import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { MessageService } from "src/app/services/message.service";

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  email = '';
  newPassword = '';
  user: User;
  passwordsMatch: boolean = true;
  //Jackie Roberts:
  //creates an account
  userProfile(changePasswordForm: NgForm) {
    console.log(changePasswordForm);
    console.log(changePasswordForm.value);

    //Jackie Roberts:
    //takes data from form and submits it to the backend
    this.passwordsMatch =
      changePasswordForm.value.newPasswordConfirm ==
      changePasswordForm.value.newPassword;
    if (this.passwordsMatch) {
      if (changePasswordForm.status == "VALID") {
        this.userService.register(changePasswordForm.value).subscribe(
          (user: User) => {
            this.user = user;
            //Jackie Roberts:
            //TODO: add route to constuctor and naviage and success
            this.router.navigateByUrl("/sign-in");
            console.log("successfully changed password");
            this.messageService.addMessage({
              body: "You have successfully changed your password",
            });
          },
          (error: HttpErrorResponse) => {
            console.log("problem changing password");
            console.log(error);
            this.messageService.addMessage({
              body: "There was a problem changing your password",
            });
          }
        );
      }
      // else {
      //   console.log("form is invalid");
      //   this.messageService.addMessage({
      //     body: "Form is invalid",
      //   });
      // }
    } else {
      console.log("passwords dont match");
      this.messageService.addMessage({
        body: "Passwords do not match",
      });
    }
  }

  //uses the userService to connect to dabase
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }
}

