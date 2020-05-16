import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "../models/message";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

/**
 * this service allows differenet components to
 * talk to the user regardless where the user is
 */

@Injectable({
  providedIn: "root",
})
export class MessageService {
  eyeOfBeholder: Observable<Message[]>;

  getMessages(): Observable<Message[]> {
    return this.eyeOfBeholder;
  }

  addMessage(message: Message): void {
    console.log(message);
    this.eyeOfBeholder.pipe(map((messageList) => messageList.push(message)));
  }

  deleteMessage(id: number): void {
    this.eyeOfBeholder.pipe(
      map((messages) => (messages = messages.splice(id, 1)))
    );
  }
  
  constructor(private http: HttpClient) {
    this.eyeOfBeholder = new Observable((observer) => {
      observer.next([
        {
          body: "hello user ",
        },
      ]);
    });
  }
}
