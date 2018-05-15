import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { UserService } from '../user.service';
import { Router, Routes } from '@angular/router';
import {UserhomeComponent} from '../userhome/userhome.component';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users:User[];
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.listusers()
  }
  listusers():void
  {
   
  alert("List Users");
    console.log(this.users);
    
   this.userService.listUsers()
   .subscribe(
    (data)=>
    {this.users=data;
     console.log(data),
     sessionStorage.setItem("users",JSON.stringify(this.users))
   this.router.navigate(['listuser'])}, 
     (error)=>console.log(error.status)
  )
 }
}
