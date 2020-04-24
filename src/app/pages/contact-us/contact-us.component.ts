import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }
  submitForm(){
    const message = `My name is ${this.name}. My email is ${this.email}.
    My message is ${this.message}.`;
    alert(message);
  }

}
