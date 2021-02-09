import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../user-http/user-service.service";
import { Users } from "../users";
import { Repos } from "../repos";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user : any = []
  repo : any = []
  


  constructor(public myService : UserServiceService, private repoService : UserServiceService) { }

  search(searchName: string){
    this.myService.searchUser(searchName).then(
      (success) => {
        this.user = this.myService.foundUser;
        console.log(success);
      },
      (error) => {
        console.log(error)
      }
    )
    this.repoService.getRepos(searchName).then(
      (results) => {
        this.repo =this.repoService.allRepos
        console.log(this.repo);
      },
      (error) => {
        console.log(error)
      }
    );
  }
  ngOnInit(): void {
    this.search('estherndichu')
  }

}
