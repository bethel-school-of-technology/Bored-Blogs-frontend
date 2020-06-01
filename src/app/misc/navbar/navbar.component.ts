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

  links: any[] = R.getRoutesForNavigation();
  contribs: User[];
  user: User;

  // SEARCH BAR THINGS BY KAYLA
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  allPosts: Post[];
  autoCompleteList: any[];

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
    //end of jacobs code to handle dropdowns
    //Get all the posts 
    this.searchBarService.getPosts().subscribe(posts => {
      this.allPosts = posts;
    });

    // when user types in something in input, the value changes will come through this
    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    });
  }
    private autoCompleteExpenseList(input) {
      let categoryList = this.filterCategoryList(input)
      this.autoCompleteList = categoryList;
    }

    filterCategoryList(val) {
      var categoryList = []
      if( typeof val != "string"){
        return [];
      }
      if( val === '' || val === null){
        return [];
      }
      return val ? this.allPosts.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allPosts;
    }
    // after you clicked an autosuggest option, this function will show the field you want to show in input
    displayFn(post: Post) {
      let k = post ? post.title : post;
      return k;
  }

filterPostList(event) {
    var posts = event.source.value;
    if (!posts) {
        this.searchBarService.searchOption = []
    }
    else {
        console.log("not");

        this.searchBarService.searchOption.push(posts);
        this.onSelectedOption.emit(this.searchBarService.searchOption)
    }
    this.focusOnPlaceInput();
}

removeOption(option) {

    let index = this.searchBarService.searchOption.indexOf(option);
    if (index >= 0)
        this.searchBarService.searchOption.splice(index, 1);
    this.focusOnPlaceInput();

    this.onSelectedOption.emit(this.searchBarService.searchOption)
}

// focus the input field and remove any unwanted text.
focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
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

  search(f:NgForm){
    
  }
}
