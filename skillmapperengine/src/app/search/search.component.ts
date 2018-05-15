import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { UserService } from '../user.service';
import { Router, Routes } from '@angular/router';
import {UserhomeComponent} from '../userhome/userhome.component';
import {Profile}  from '../profile';
import {ProfileComponent} from '../profile/profile.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users:User[];
  profiles:Profile[];
  profile:Profile;
  skillValue:string;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.skillValue='';
  }
  onKey(skillValue: string) {
    this.skillValue=skillValue;
  }
 
  searchBySkill(skill:string):void
  {
   
  alert("Searching ");
    console.log(this.profiles);
    
   this.userService.searchBySkill(skill)
   .subscribe(
    (data)=>
    {this.profiles=data;
     console.log(data),
     alert("In seach comp"),
     sessionStorage.setItem("profiles",JSON.stringify(this.profiles))
   this.router.navigate(['search'])}, 
     (error)=>console.log(error.status)
  )


  }


  getProfileByID(profileID:number)
  {
    alert("getting profile ");
      console.log(profileID);
    this.userService.getProfileByID(profileID)
     .subscribe(
      (data)=>
      {this.profile=data;
       console.log(data),
       alert("In seach comp"),
       sessionStorage.setItem("profile",JSON.stringify(this.profile))
       this.router.navigate(['viewprofile',this.profile.user.emailID])}, 
     
       (error)=>console.log(error.status)
    )
  
  
    }




}
