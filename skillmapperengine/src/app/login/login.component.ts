import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { LoginService } from '../login.service';
import { Router, Routes } from '@angular/router';
import {UserhomeComponent} from '../userhome/userhome.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user:any={};
  constructor(private loginService:LoginService,private router:Router) { }
  ngOnInit() {
  }

login():void
{
  alert("hello");
    console.log(this.user);
    
   this.loginService.authenticateUser(this.user)
   .subscribe(
     (data)=>
     {this.user=data;
      console.log(data),
      sessionStorage.setItem("user",JSON.stringify(this.user));
      window.location.reload();
       this.router.navigate(['home'])}, 
      (error)=>console.log(error.status)
   )

  
}

}
