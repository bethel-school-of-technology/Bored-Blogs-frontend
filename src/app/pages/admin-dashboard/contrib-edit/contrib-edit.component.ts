import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'contrib-edit',
  templateUrl: './contrib-edit.component.html',
  styleUrls: ['./contrib-edit.component.scss']
})
export class ContribEditComponent implements OnInit {



  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
