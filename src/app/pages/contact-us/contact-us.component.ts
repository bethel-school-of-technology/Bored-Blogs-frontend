import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
 
  constructor() { }

  ngOnInit() {
  }
  submitForm(f: NgForm) {
    const message = `My name is ${f.value.first}. My email is ${f.value.email}.
    My message is ${f.value.message}.`;
    console.log(message);
  }

  log(x) { console.log(x); }
}
