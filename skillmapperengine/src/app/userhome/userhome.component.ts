import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {ProfileComponent} from '../profile/profile.component';
import { Router, Routes } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
user:User;
image:any;
  constructor(private router:Router,private userService:UserService)
   {  
    this.user=JSON.parse(sessionStorage.getItem("user"))
    if(this.user)
    {
     if(this.user.imageName)
      this.getImageFromService(this.user.emailID);
      console.log(this.user.emailID);
    }
    var refresh = window.sessionStorage.getItem('refresh');
    console.log(refresh);
    if (refresh===null){
      console.log("in ");
       window.location.reload();
       window.sessionStorage.setItem('refresh', "1");
    }
    
  
    }

  ngOnInit() {
    this.user=JSON.parse(sessionStorage.getItem("user"))
    

  }
  



  isImageLoading:boolean;
  createImageFromBlob(image: Blob) {
     let reader = new FileReader();
     reader.addEventListener("load", () => {
        this.user.profilepic = reader.result;
     }, false);
  
     if (image) {
        reader.readAsDataURL(image);
     }
  }
  getImageFromService(emailID:string) {
        this.isImageLoading = true;
        this.userService.getImage(emailID).subscribe(data => {
          this.createImageFromBlob(data);
          this.isImageLoading = false;
        }, error => {
          this.isImageLoading = false;
          console.log(error);
        });
  }
  


}
