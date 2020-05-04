import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  userName = '';
  // email = '';
  password = '';
  user: User;

  signin(signinForm: NgForm) {
    console.log(signinForm);
    console.log(signinForm.value);

    this.userService
      .register(signinForm.value)
      .subscribe((user: User) => {
        this.user = user;//does
        console.log("you have logged in");

      })
  }

  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }

}