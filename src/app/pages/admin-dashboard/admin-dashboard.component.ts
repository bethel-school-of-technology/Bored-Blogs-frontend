import { Component, OnInit } from '@angular/core';
import { Contributor } from 'src/app/models/contributor';
import { ContributorService } from 'src/app/services/contributor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  contributor: Contributor;

  constructor(private contributorService: ContributorService) { }

  ngOnInit() {
    this.getContributor(1)//todo update with admin id
  }

  getContributor(contributorId:number){
    this.contributorService
      .getContributor(contributorId)
      .subscribe((c) => (this.contributor = c));
  }
  cheatInAdminId(form:NgForm){
    this.getContributor(form.value.id)
  }
}
