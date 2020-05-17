import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "../models/message";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AlertsComponent } from "../misc/alerts/alerts.component";
function makeMessage(input: String): Message {
  return { body: input };
}
var messages: Message[] = [
  makeMessage("hello user"),
  makeMessage("hello user2"),
];

/**
 * this service allows differenet components to
 * talk to the user regardless where the user is
 */
@Injectable({
  providedIn: "root",
})
export class MessageService {
  //calls back to the component to let it know the things have updated
  myOneAlert: AlertsComponent;
  setAlert(pointer: AlertsComponent) {
    this.myOneAlert = pointer;
  }

  getMessages(): Message[] {
    return messages;
  }

  addMessage(incomingMessage: Message): Message[] {
    console.log("messages is being added");
    messages.push(incomingMessage);
    this.myOneAlert.updateMySelf(messages);
    return messages;
  }

  deleteMessage(id: number): Message[] {
    var temp = [];
    for (var i = 0; i < messages.length; i++)
      if (i != id) temp.push(messages[i]);
    messages = temp;
    this.myOneAlert.updateMySelf(messages);
    return messages;
  }
}
