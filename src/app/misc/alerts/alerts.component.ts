import { Component, OnInit } from "@angular/core";
import { Message } from "src/app/models/message";
import { MessageService } from "src/app/services/message.service";
import { Observable } from "rxjs";

@Component({
  selector: "alerts",
  templateUrl: "./alerts.component.html",
  styleUrls: ["./alerts.component.scss"],
})
export class AlertsComponent implements OnInit {
  messages: Message[];
  constructor(private messageService: MessageService) {}
  updateMySelf(messages: Message[]) {
    this.messages = messages;
  }
  
  ngOnInit() {
    this.messageService.setAlert(this);
    this.messages = this.messageService.getMessages();
  }

  deleteMe(index: number) {
    this.messageService.deleteMessage(index);
  }
}