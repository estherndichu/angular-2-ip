import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../user-http/user-service.service";
import { Users } from "../users";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users! : Users[]
  constructor(userService:UserServiceService) { }

  ngOnInit(): void {
  }

}
