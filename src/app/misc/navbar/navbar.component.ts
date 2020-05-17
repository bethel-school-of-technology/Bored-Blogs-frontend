import { Component, OnInit } from "@angular/core";
import { R } from "src/app/app-routing.module";
import { ContributorService } from "src/app/services/contributor.service";
import { Contributor } from "src/app/models/contributor";
import { Router } from "@angular/router";
/**
 * Author: Jacob Stanton
 *
 * Takes paths from routes to create naviagation
 *
 * @export
 * @class NavbarComponent
 * @implements {OnInit}
 */
@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  nestedDrawer: boolean = false;
  //jacobs code to replace jquery
  //jquery is bad idea to use in angular
  main: boolean = false;

  dropDown1: boolean;
  dropDown2: boolean;
  dropDown3: boolean;

  links: any[] = R.getRoutesForNavigation();
  contribs: Contributor[];
  constructor(
    private contribService: ContributorService,
    private router: Router
  ) {}

  ngOnInit() {
    //console.log(this.links);
    this.contribService.getContributors().subscribe((contribs) => {
      this.contribs = contribs;
    });
  }

  //Jacob Stanton:
  //toggles the key like main to toggle the visiblity of another guy
  toggle(keyToToggle: string | number) {
    console.log(keyToToggle)
    try {
      this[keyToToggle] = !this[keyToToggle];
    } catch (e) {
      console.log(
        "this toggle was used improperly. the parameter must be a boolean variable"
      );
      console.log(e);
    }
  }
}
