import { Component, OnInit } from '@angular/core';
import { Contributor } from 'src/app/models/contributor';
import { ContributorService } from 'src/app/services/contributor.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  contributors: Contributor[];
  contributor: Contributor;

  constructor(private contributorService: ContributorService) { }

  ngOnInit() {
    this.contributorService
      .getContributor(2)//todo update with admin id
      .subscribe((c) => (this.contributor = c));
  }

}
