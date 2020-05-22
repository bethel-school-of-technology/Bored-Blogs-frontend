import { Component, OnInit } from "@angular/core";
import { Message } from "src/app/models/message";
import { AlertService } from "src/app/services/alert.service";
import { Observable } from "rxjs";

@Component({
  selector: "alerts",
  templateUrl: "./alerts.component.html",
  styleUrls: ["./alerts.component.scss"],
})
export class AlertsComponent implements OnInit {
  messages: Message[] = [];
  constructor(private messageService: AlertService) {}

  ngOnInit() {
    this.messageService.getMessages().subscribe((m) => (this.messages = m));
  }

  deleteAlert(index: number) {
    this.messageService.deleteMessage(index);
  }
}
