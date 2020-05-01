import { Component, OnInit } from '@angular/core';
import { R } from 'src/app/app-routing.module';
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
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  nestedDrawer: boolean = false;
  main: boolean = false;
  links: any[] = R.getRoutesForNavigation();

  constructor() { }

  ngOnInit() {
    console.log(this.links);
  }

  //Jacob Stanton:
  //toggles the key like main to toggle the visiblity of another guy
  toggle(keyToToggle) {
    try {
      this[keyToToggle] = !this[keyToToggle];
    } catch (e) {
      console.log("this toggle was used improperly. the parameter must be a boolean variable");
      console.log(e);
    }
  }
}
