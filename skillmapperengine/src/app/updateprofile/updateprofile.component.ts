import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { Certifications } from '../certifications';
import { Placement } from '../placement';
import {UserhomeComponent} from '../userhome/userhome.component';
import {ActivatedRoute,Router} from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
skill:Skill=new Skill();
certifications:Certifications=new Certifications();
placement:Placement=new Placement();
emailID:string;


constructor(private route: ActivatedRoute,private userService:UserService,private router:Router) { 
  this.route.params.subscribe( params =>this.emailID=params['emailID'] );
}
  ngOnInit()
  {
  }


  addSkill():void
  {
    alert("creating");
    console.log("Hello");
   alert(this.skill);
    console.log(this.skill);
     this.userService.addSkill(this.skill,this.emailID)
     .subscribe(
    (data)=>
    {
      this.skill=data;
     console.log(data),
     sessionStorage.setItem("skill",JSON.stringify(this.skill))
     this.router.navigate(['home'])}, 
     (error)=>console.log(error.status)
  )
 }






 addPlacement():void
  {
    alert("creating");
    console.log(this.placement);
     this.userService.addPlacement(this.placement,this.emailID)
     .subscribe(
    (data)=>
    {
      this.placement=data;
     console.log(data),
     sessionStorage.setItem("placement",JSON.stringify(this.placement))
     this.router.navigate(['home'])}, 
     (error)=>console.log(error.status)
  )
 }




 addCertification():void
  {
    alert("creating");
    console.log(this.certifications);
     this.userService.addCertification(this.certifications,this.emailID)
     .subscribe(
    (data)=>
    {
      this.certifications=data;
     console.log(data),
     sessionStorage.setItem("certifications",JSON.stringify(this.skill))
     this.router.navigate(['home'])}, 
     (error)=>console.log(error.status)
  )
 }




}
