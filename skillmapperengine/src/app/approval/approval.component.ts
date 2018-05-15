import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import { UserService } from '../user.service';
import { Router, Routes } from '@angular/router';
import {UserhomeComponent} from '../userhome/userhome.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

profiles:Profile[];
profile:Profile;
  constructor(
    private userService:UserService,
    private router:Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.approveUserProfile()
  }


 approveUserProfile():void
  {
   
  alert("List Profiles");
    console.log(this.profiles);
    
   this.userService.approveUserProfile()
   
   .subscribe(
   (data)=>
    {this.profiles=data;
    console.log(data),
     sessionStorage.setItem("profiles",JSON.stringify(this.profiles))
    this.router.navigate(['home/approve'])}, 
     (error)=>console.log(error.status)
 )


  }


approve(profile:Profile):void
{
  alert("approving");
    console.log(profile);
    
   this.userService.approve(profile)
   .subscribe(
     (data)=>
     {profile=data;
      console.log(data),
      sessionStorage.setItem("profile",JSON.stringify(profile))
      this.ngOnInit()}, 
      (error)=>console.log(error.status)
   )

  
}


}
