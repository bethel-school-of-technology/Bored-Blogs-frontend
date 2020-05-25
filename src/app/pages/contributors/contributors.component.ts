import { AppRoutingModule } from "./../../app-routing.module";
import { Component, OnInit } from "@angular/core";
import { ContributorService } from "src/app/services/contributor.service";
import { User } from 'src/app/models/user';
/*

*/

@Component({
  selector: "app-contributors",
  templateUrl: "./contributors.component.html",
  styleUrls: ["./contributors.component.scss"],
})
export class ContributorsComponent implements OnInit {
  contributors: User[];

  constructor(private contributorService: ContributorService) {}

  ngOnInit() {
    this.contributorService
      .getContributors()
      .subscribe((c) => {
        console.log(c);
        this.contributors = c});
  }
}
