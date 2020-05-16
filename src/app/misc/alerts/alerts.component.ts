import { Component, OnInit } from "@angular/core";
import { Message } from "src/app/models/message";
import { MessageService } from "src/app/services/message.service";
import { Observable } from 'rxjs';

@Component({
  selector: "alerts",
  templateUrl: "./alerts.component.html",
  styleUrls: ["./alerts.component.scss"],
})
export class AlertsComponent implements OnInit {
  messages: Observable<Message[]>;
  constructor(private messageService: MessageService) {}
  updateMySelf(messages) {
    this.messages = messages;
    console.log("ive update my soolf");
    console.log(this.messages);
  }
  ngOnInit() {
    this.messages = this.messageService.getMessages()
  }
  deleteMe(index: number) {
    this.messageService.deleteMessage(index);
  }
}
