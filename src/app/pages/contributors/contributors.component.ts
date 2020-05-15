import { AppRoutingModule } from "./../../app-routing.module";
import { Component, OnInit } from "@angular/core";
import { ContributorService } from "src/app/services/contributor.service";
import { Contributor } from "src/app/models/contributor";
/*

*/

@Component({
  selector: "app-contributors",
  templateUrl: "./contributors.component.html",
  styleUrls: ["./contributors.component.scss"],
})
export class ContributorsComponent implements OnInit {
  contributors: Contributor[];

  constructor(private contributorService: ContributorService) {}

  ngOnInit() {
    this.contributorService
      .getContributors()
      .subscribe((c) => (this.contributors = c));
  }
}
