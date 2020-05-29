import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(
    private adminUserService: AdminUserService,
    private userService: UserService
  ) { }

  user: User;
  usersList: User[];


  getUsers(): void {
    this.adminUserService.getUsers(this.user.token)
      .subscribe((u) => {
        console.log(u);
        for (var i = 0; i < u.length; i++) {//think about moving this to the service folder
          var tempDate = new Date(u[i].lastLoggedIn)
          var day = '';
          var month = '';
          u[i].lastLoggedIn = `${tempDate.getMonth() + 1}/${tempDate.getDate()}/${tempDate.getFullYear()} `;
          var tempDate = new Date(u[i].createdAt)
          var day = '';
          var month = '';
          u[i].createdAt = `${tempDate.getMonth() + 1}/${tempDate.getDate()}/${tempDate.getFullYear()} `;
        }
        this.usersList = u;
      });
  }


  deleteUser(id: number): void {
    this.adminUserService.deleteUser(id, this.user.token)
      .subscribe(() => this.getUsers());//i just called this again
  }

  selector = -1;
  setSelector(value: number) {
    this.selector = value;
  }

  //Jackie to get list of users (Admin only) 
  ngOnInit() {
    this.userService.getCurrentUser().subscribe(u =>
    this.user = u);
    this.userService.refreshUser();
    this.getUsers();
  }

}
