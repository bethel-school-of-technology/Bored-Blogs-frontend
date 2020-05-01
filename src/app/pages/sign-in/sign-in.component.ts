import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  userName = '';
  // email = '';
  password = '';

  signin(signinForm:NgForm) {
    console.log(signinForm);
    console.log(signinForm.value);
  }
  
  constructor() {

  }

  ngOnInit() {
  }

}
