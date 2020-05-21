import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  // Jackie 
  // to get one user to show on /user-detail/:id

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  user: User;

  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }

  //Jackie to get one user to show on /user-detail/:id
  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log(param)
      this.userService
        .getUser(+param['id'])
        .subscribe(u => {
          console.log(u);
          this.user = u;
        });
    });
  }
}
