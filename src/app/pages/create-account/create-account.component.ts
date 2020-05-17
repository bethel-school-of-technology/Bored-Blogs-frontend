import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { MessageService } from "src/app/services/message.service";

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
            this.router.navigateByUrl("/");
            console.log("you have created an account");
            this.messageService.addMessage({
              body: "You have successfully created an account",
            });
          },
          (error: HttpErrorResponse) => {
            console.log("an error has occured");
            console.log(error);
            this.messageService.addMessage({
              body: "There was a problem",
            });
          }
        );
      } else {
        console.log("form is invalid");
        this.messageService.addMessage({
          body: "Form is invalid",
        });
      }
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
  ) {}

  ngOnInit() {
  }
}
