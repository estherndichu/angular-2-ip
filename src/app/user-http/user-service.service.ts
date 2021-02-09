import { Injectable } from '@angular/core';
import { Users } from "../users";
import { Repos } from "../repos";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  foundUser!: Users;
  allRepos!: Repos;

  constructor(private http:HttpClient) { 
    this.foundUser = new Users("","","","",0,0,0,"",new Date);
    this.allRepos = new Repos("","","",new Date,0,0,"");
  }

  searchUser(searchName: string){
    interface Response {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    return new Promise ((resolve, reject) =>{
      this.http.get<Response>('https://api.github.com/users/'+searchName+'?access_token='+environment.personalAccessToken).toPromise().then(
        (result) => {
          this.foundUser = result;
          console.log(result);
          resolve(result);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }
  getRepos(searchName: string){
    interface Repositor{
      name:string;
      html_url:string;
      forks:number;
      watchers_count:number;
      description:string;
      language:string;
      created_at:Date;
    }
    return new Promise((resolve,reject) => {
      this.http.get<Repositor>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment).toPromise().then(
        (results) => {
          this.allRepos = results;
          resolve(results);
        },
      );
    })
  }
}
