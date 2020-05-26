import { Component, OnInit } from '@angular/core';
import { ContributorService } from 'src/app/services/contributor.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  contributor: User = new User();

  constructor(private userService: UserService, private contributorService: ContributorService) { }

  ngOnInit() {
    this.getContributor()//todo update with admin id
  }

  getContributor(){
    this.userService
      .getCurrentUser()
      .subscribe((c) => (this.contributor = c));
    this.userService.refreshUser();

  }
}
