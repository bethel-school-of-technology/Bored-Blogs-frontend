import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  Username = '';
  Email = '';
  Password = '';

  signin() {
    
  }
  

  constructor() { }

  ngOnInit() {
  }

}
