import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  NgForm,
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { MessageService } from "src/app/services/message.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  email = "";
  password = "";
  user: User;

  signin(signinForm: NgForm) {
    console.log(signinForm);
    console.log(signinForm.value);
    //JackieRoberts:
    //Determine if sign in email & password = success       
    //TODO:JACOB THIS IS NOT CHECKING FOR VALID LOGIN :(
    if (signinForm.status == "VALID") {
      this.userService.login(signinForm.value).subscribe(
        (user: User) => {
          this.user = user;

          //if user is Admin, route to Admin page upon Login
          if (user.isAdmin) {
            this.router.navigateByUrl("/admin");
          } else {
            console.log("you have logged in");
            //JackieRoberts:
            //If successful, navigate to home page
            this.router.navigateByUrl("/");
            console.log("successfully logged in");

            //JackieRoberts:
            //If successful, create login message
            this.messageService.addMessage({
              body: "You have logged in",
            });
          }
        },
        //JackieRoberts:
        //If NOT successful, create error message
        (error: HttpErrorResponse) => {
          console.log("problem logging in");
          console.log(error);
          this.messageService.addMessage({
            body:
              "There was a problem logging in - check your email address & password",
          });
        }
      );
    }
  }
  //uses the userService to connect to database
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() { }
}
