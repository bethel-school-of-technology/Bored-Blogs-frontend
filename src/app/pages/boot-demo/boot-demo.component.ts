import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-boot-demo',
  templateUrl: './boot-demo.component.html',
  styleUrls: ['./boot-demo.component.scss']
})
export class BootDemoComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  test() {
    this.userService
      .register(new User(1, 'test3', 'password', 'jake', 'stanton', 'snake_jazz'))
      .subscribe((user: User) => {
        this.user = user;
        console.log(this.user)
      })
  }

  submitForm(f: NgForm) {
    const message = `My name is ${f.value.name}. My email is ${f.value.email}.
    .`;
    console.log(message);
  }
}
