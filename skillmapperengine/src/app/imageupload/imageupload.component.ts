import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, Routes } from '@angular/router';
import {UserhomeComponent} from '../userhome/userhome.component';
import {User} from '../user';
@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {
  selectedFile: File;
  user:User=JSON.parse(sessionStorage.getItem("user"));

  constructor(private userService:UserService,private router:Router) { }
  ngOnInit() {
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
   onUpload() {
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
  
        this.userService.uploadImage(uploadData,this.user.emailID)
        .subscribe(data => {
          this.user=data;
          console.log(data),
          alert("Successfully Uploaded");
          sessionStorage.setItem("user",JSON.stringify(this.user))
          window.location.reload();
          this.router.navigate(['home']), 
          (error)=>console.log(error.status)
        })


        

  }
  
  // getProfile()
  // {
  //   alert("getting profile ");
  //   this.userService.getProfileImage(this.emailID)
  //    .subscribe(
  //     (data)=>
  //     {this.profile=data;
  //      console.log(data),
  //      alert("In seach comp"),
  //      sessionStorage.setItem("profile",JSON.stringify(this.profile))
  //    }, 
  //      (error)=>console.log(error.status)
  //   )
}
