import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.scss"],
})
export class CreateAccountComponent implements OnInit {
  userName = "";
  email = "";
  password = "";
  user: User;

  //Jacob Stanton:
  //creates an account
  createAccount(createAccountForm: NgForm) {
    let blog = e=>console.log(e)
    console.log(createAccountForm);
    console.log(createAccountForm.value);
    let a = createAccountForm.value.password;
    let b = createAccountForm.value.confirmPassword
    let check =
      a ==
      b;
    console.log(check);
    //Jacob Stanton:
    //takes data from form and submits it to the backend
    if (check) {
      if (createAccountForm.status == "VALID") {
        this.userService
          .register(createAccountForm.value)
          .subscribe((user: User) => {
            this.user = user;
            //Jacob Stanton:
            //TODO: add route to constuctor and naviage and success
            this.router.navigateByUrl("/user");
            console.log("you have created an account");
          });
      } else {
        console.log("form is invalid");
      }
    } else {
      console.log("passwords dont match");
    }
  }

  //uses the userService to connect to dabase
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
}
