import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  email = '';
  password = '';
  user: User;
  passwordsMatch: boolean = true;
  //Jacob Stanton:
  //creates an account
  createAccount(createAccountForm: NgForm) {
    console.log(createAccountForm);
    console.log(createAccountForm.value);

    //Jacob Stanton:
    //takes data from form and submits it to the backend
    this.passwordsMatch =
      createAccountForm.value.passwordConfirm ==
      createAccountForm.value.password;
    if (this.passwordsMatch) {
      if (createAccountForm.status == "VALID") {
        this.userService.register(createAccountForm.value).subscribe(
          (user: User) => {
            this.user = user;
            //Jacob Stanton:
            //TODO: add route to constuctor and naviage and success
            this.router.navigateByUrl("/home");
            console.log("successfully created an account");
            this.messageService.addMessage({
              body: "You have successfully created an account",
            });
          },
          (error: HttpErrorResponse) => {
            console.log("problem creating an account");
            console.log(error);
            this.messageService.addMessage({
              body: "An account with this email already exists",
            });
          }
        );
      } else {
        console.log("form is invalid");
        this.messageService.addMessage({
          body: "Form is invalid. Complete all fields as required.",
        });
      }
    } else {
      console.log("passwords dont match");
      this.messageService.addMessage({
        body: "Passwords do not match",
      });
    }
  }

  //uses the userService to connect to database
  constructor(
    private userService: UserService,
    private messageService: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
  }
}
