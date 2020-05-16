import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  

  
  constructor() { }

    Users = 
      [
        {
          firstName: "John",
          lastName: "Smith",
          email: "jsmith@example.com",
          lastActive: "2 Hours Ago"
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jdoe@example.com",
          lastActive: "1 Hour Ago"
        },
        {
          firstName: "Luke",
          lastName: "Skywalker",
          email: "thedarkside@example.com",
          lastActive: "10 Minutes Ago"
        }
      ];

  ngOnInit() {
  }

}
