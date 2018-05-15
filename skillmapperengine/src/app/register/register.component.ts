import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { UserService } from '../user.service';
import { Router, Routes } from '@angular/router';
import {UserhomeComponent} from '../userhome/userhome.component';
import {LoginComponent} from '../login/login.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any={};
  constructor(private userService:UserService,private router:Router) { }
  ngOnInit() {
  }
  register():void
  {
   
  alert("register");
    console.log(this.user);
    
   this.userService.register(this.user)
   .subscribe(
    (data)=>
    {this.user=data;
     console.log(data),
     sessionStorage.setItem("user",JSON.stringify(this.user))
   this.router.navigate(['login'])}, 
     (error)=>console.log(error.status)
  )


  
  }
  
  }