import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  userName = '';
  email = '';
  password = '';
  user: User;

  //creates an account
  createAccount(signinForm: NgForm) {
    console.log(signinForm);
    console.log(signinForm.value);

    //takes data from form and submits it to the backend
    this.userService
      .register(signinForm.value)
      .subscribe((user: User) => {
        this.user = user;//does
        console.log("you have logged in");
      })
  }

  //uses the userService to connect to dabase
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
