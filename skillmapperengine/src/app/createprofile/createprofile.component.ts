import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { UserService } from '../user.service';
import {User} from '../user';
import { Profile } from '../profile';
import { Skill } from '../skill';
import { Placement } from '../placement';
import { Certifications } from '../certifications';
import {UserhomeComponent} from '../userhome/userhome.component';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {
  @Input()
  user: User=new User();
  profile:Profile;
  skills:Skill;
  certifications:Certifications;
  placement:Placement;
  emailID:string;
  constructor(private route: ActivatedRoute,private userService:UserService,private router:Router) { 
  this.route.params.subscribe( params =>this.emailID=params['emailID'] );
  this.getProfile();
    console.log(this.user.emailID);

}
  ngOnInit() {
  }
  getProfile()
{
  alert("getting profile ");
    console.log(this.emailID);
  this.userService.getProfile(this.emailID)
   .subscribe(
    (data)=>
    {this.profile=data;
     console.log(data),
     alert("In seach comp"),
     sessionStorage.setItem("profile",JSON.stringify(this.profile))
   }, 
     (error)=>console.log(error.status)
  )


  }


  update():void
  {
    alert("creating");
    console.log(this.profile);
     this.userService.updateProfile(this.profile)
     .subscribe(
    (data)=>
    {this.profile=data;
     console.log(data),
     sessionStorage.setItem("profile",JSON.stringify(this.profile))
   this.router.navigate(['home'])}, 
     (error)=>console.log(error.status)
  )
 }
  

}
