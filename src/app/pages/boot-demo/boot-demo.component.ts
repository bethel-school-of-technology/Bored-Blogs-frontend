import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { User } from "src/app/models/user";
import { MessageService } from "src/app/services/message.service";

@Component({
  selector: "app-boot-demo",
  templateUrl: "./boot-demo.component.html",
  styleUrls: ["./boot-demo.component.scss"],
})
export class BootDemoComponent implements OnInit {
  user: User;
  addMessage(input: string) {
    this.messageService.addMessage({ body: input });
  }
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}
  test() {
    this.userService
      .register(
        new User(1, "test3", "password", "jake", "stanton", "my bio goes here", "05/16/20", "05/20/20")
      )
      .subscribe((user: User) => {
        this.user = user;
        console.log(this.user);
      });
  }

  submitForm(f: NgForm) {
    const message = `My name is ${f.value.name}. My email is ${f.value.email}.
    .`;
    console.log(message);
  }
}
