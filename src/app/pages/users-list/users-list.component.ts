import { Component, OnInit } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {




  constructor(private adminUserService: AdminUserService) { }

    Users

  ngOnInit() {
    this.adminUserService.getUsers().subscribe(u=>this.Users=u)
  }


  deleteUser(id: number): void {
    // this.postDataService.deletePost(id).subscribe((p) => {(this.posts = p)});
       this.adminUserService.deleteUser(id).subscribe(u => this.Users = u);
  }

}
