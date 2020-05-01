import { Component, OnInit } from '@angular/core';
import { R } from 'src/app/app-routing.module';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  nestedDrawer: boolean = false;
  main: boolean = false;
  links: any[] = R.getRoutes();

  constructor() { }

  ngOnInit() {
    console.log(this.links);
  }

  toggle(keyToToggle) {
    try {
      this[keyToToggle] = !this[keyToToggle];
    } catch (e) {
      console.log("this toggle was used improperly. the parameter must be a boolean variable");
      console.log(e);
    }
  }
}
