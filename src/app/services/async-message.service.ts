import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

/**
 * 
 * this doesnt work nor is it neccessary
 */

@Injectable({
  providedIn: 'root'
})
export class AsyncMessageService {
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
      ]);
    });
  }
}
