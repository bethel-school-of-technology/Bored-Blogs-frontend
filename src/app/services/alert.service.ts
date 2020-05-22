import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "../models/message";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { AlertsComponent } from "../misc/alerts/alerts.component";

function makeMessage(input: String): Message {
  return { body: input };
}

/**
 * this service allows differenet components to
 * talk to the user regardless where the user is
 */
@Injectable({
  providedIn: "root",
})
export class AlertService {
  //calls back to the component to let it know the things have updated
  
  messages$: Message[] = [];
  messages: Subject<Message[]> = new Subject();

  getMessages(): Observable<Message[]> {
    return this.messages.asObservable();
  }

  addMessage(incomingMessage: Message) {
    console.log("messages is being added");
    this.messages$.push(incomingMessage);
    this.messages.next(this.messages$);
  }

  deleteMessage(id: number) {
    var temp = [];
    for (var i = 0; i < this.messages$.length; i++)
      if (i != id) temp.push(this.messages$[i]);
    this.messages$ = temp;
    this.messages.next(this.messages$);
  }
}
