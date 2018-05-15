import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { UserService } from './user.service';
import { DomSanitizer } from '@angular/platform-browser';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Skill Mapper';
  image: any;
  user:User;
  constructor(private router: Router, private userService: UserService, private domSanitizer: DomSanitizer) 
  {
    this.user = JSON.parse(sessionStorage.getItem("user"));

    if (this.user) 
    {
      if (this.user.imageName) 
      {
        alert("Getting image");
        this.getImageFromService(this.user.emailID);
      }
    }
  }
  logout() {
    sessionStorage.clear();
    alert("logging out");
    window.location.reload();
    this.router.navigate(['home'])
  }


  //  getImage(emailID:string)
  //  {
  //    alert()
  //   this.userService.getImage(emailID)
  //   .subscribe(data=>
  //   this.image=data);
  //  }

  imageToShow: any;
  isImageLoading: boolean;
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.user.profilepic = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  getImageFromService(emailID: string) {
    alert("in the imageFunction");
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
