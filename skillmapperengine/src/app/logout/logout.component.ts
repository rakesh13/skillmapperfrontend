import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import {UserhomeComponent} from '../userhome/userhome.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { 
    sessionStorage.clear();
    alert("logging out");
   console.log( sessionStorage.getItem("refresh"));
    this.router.navigate(['home'])
  }

  ngOnInit() {
    sessionStorage.clear();
    alert("logging out");

    this.router.navigate(['home'])
  }

   
    
  }
  


