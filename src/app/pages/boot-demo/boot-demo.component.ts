import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { User } from "src/app/models/user";
import { AlertService } from "src/app/services/alert.service";

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
    private messageService: AlertService
  ) {}

  ngOnInit() {}
  test() {
  }

  submitForm(f: NgForm) {
    const message = `My name is ${f.value.name}. My email is ${f.value.email}.
    .`;
    console.log(message);
  }
}
