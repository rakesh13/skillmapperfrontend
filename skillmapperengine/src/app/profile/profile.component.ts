import { Component, OnInit, Input } from '@angular/core';
import {User} from '../user';
import {ActivatedRoute,Router} from "@angular/router";
import { Profile } from '../profile';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input()
   user: User=new User();
   profile:Profile;
   emailID:string;
  constructor(private route: ActivatedRoute,private userService:UserService,private router:Router) { 
    this.route.params.subscribe( params =>this.emailID=params['emailID'] );
this.getProfile();
    console.log(this.user.emailID);

  }

  ngOnInit(){
    console.log(this.user.emailID);
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

}



