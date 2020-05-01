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
