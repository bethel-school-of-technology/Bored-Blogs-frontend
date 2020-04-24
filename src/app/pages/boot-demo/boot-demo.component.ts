import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-boot-demo',
  templateUrl: './boot-demo.component.html',
  styleUrls: ['./boot-demo.component.scss']
})
export class BootDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(f: NgForm) {
    const message = `My name is ${f.value.name}. My email is ${f.value.email}.
    .`;
    console.log(message);
  }
}
