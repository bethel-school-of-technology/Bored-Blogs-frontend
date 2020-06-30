import { FormControl, NgForm } from "@angular/forms";
import { Observable } from 'rxjs';
import { SearchBarService } from './../../services/search-bar.service';
import { Post } from 'src/app/models/post';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";
import { R } from "src/app/app-routing.module";
import { ContributorService } from "src/app/services/contributor.service";
import { Router, NavigationEnd } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";



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

   //jacobs code to replace jquery
  //jquery is bad idea to use in angular
  main: boolean = false;

  dropDown1: boolean;
  dropDown2: boolean;
  dropDown3: boolean;
  //end of jacobs code

  links: any[] = R.getRoutesForNavigation();
  

  contribs: User[];
  user: User;

  // SEARCH BAR THINGS BY KAYLA


  allPosts: Post[];

  @ViewChild('autocompleteInput', {static: false}) autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();
 

  constructor(
    private contribService: ContributorService,
    private router: Router,
    private userService: UserService,
    // include searchBarService in the constructor
    private searchBarService: SearchBarService
  ) {}  

  ngOnInit() {
     //jacobs code to handle dropdowns
     this.contribService.getContributors().subscribe((contribs) => {
      this.contribs = contribs;
    });
    this.router.events.subscribe((event) => {
      //checks to see if this the correct event
      if (event instanceof NavigationEnd) {
        //close all open drawers and dropdowns
        this.main = false;
        this.dropDown1 = false;
        this.dropDown2 = false;
        this.dropDown3 = false;
      }
    });
    this.userService.getCurrentUser().subscribe((u) => (this.user = u));
    this.userService.refreshUser();
    //end of jacobs code to handle dropdowns 


  }

   
  

  //Jacob Stanton:
  //toggles the key like main to toggle the visiblity of another guy
  toggle(keyToToggle: string | number) {
    //console.log(keyToToggle);
    try {
      this[keyToToggle] = !this[keyToToggle];
    } catch (e) {
      console.log(
        "this toggle was used improperly. the parameter must be a boolean variable"
      );
      console.log(e);
    }
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/home']);
  }

}
