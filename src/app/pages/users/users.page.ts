import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';


@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss']
})
export class UsersPage implements OnInit {

  users:User[] = this.userSrv.getUsers()

  constructor(private userSrv: UserService) {}

  ngOnInit(): void {
  }

}
