import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../user-http/user-service.service";
import { Repos } from "../repos";



@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repo! : Repos;
  constructor(public repoService : UserServiceService) { }

  repoSearch(searchName: string){
    this.repoService.getRepos(searchName).then(
      (results) =>{
        this.repo = this.repoService.allRepos
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch('estherndichu')
  }

}
