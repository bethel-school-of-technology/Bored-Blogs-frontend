import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  counter = false;
  classes = "text-danger";
  toggle() {
    this.counter = !this.counter;
    this.classes = this.counter ? "text-black" : "text-danger";
    console.log(this.counter);
  }
}
