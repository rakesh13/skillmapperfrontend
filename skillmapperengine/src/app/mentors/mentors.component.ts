import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { UserService } from '../user.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  profile: Profile;
  profiles: Profile[];
profiles1:Profile[];
  keyword: string;
  isImageLoading: boolean;
  imageToShow: any;
  image:Blob;

  constructor(private userService: UserService, private router: Router) {
    this.getAllProfiles(); 
  
    alert(this.profiles);

  }

  ngOnInit() {
    alert(this.profiles);


  }

  regionSelected: boolean = false;
  select(searchBy) {
    this.regionSelected = false;
    if (searchBy == 'Region') {
      this.regionSelected = true;
    }
  }
  region: string;
  setKeyword(region: string) {
    this.keyword = region;
  }



getAllProfiles()
{
  this.userService.searchAllProfile()
      .subscribe(
        (data) => {
          this.profiles = data;
          console.log(data),
            alert("In seach comp"),
            sessionStorage.setItem("profiles", JSON.stringify(this.profiles))
          this.router.navigate(['mentor'])
        },
        (error) => console.log(error.status)
      )
      for (var profile in this.profiles) {
        alert(this.profiles[profile].profileID);
        if (this.profiles[profile].user.imageName) {
          this.profiles[profile].user.profilepic = this.getImageFromService(this.profiles[profile].user.emailID);
          alert(this.profiles[profile].user.imageName);
        }
      }

    }





createImageFromBlob(image: Blob) {

  let reader = new FileReader();
  reader.addEventListener("load", () => {
    this.imageToShow = reader.result;
  }, false);

  if (image) {
    reader.readAsDataURL(image);
  }
}
getImageFromService(emailID: string): any {
  this.image;
  this.isImageLoading = true;
  this.userService.getImage(emailID).subscribe(data => {this.image=data;
    console.log(data)
    this.createImageFromBlob(this.image);
    this.isImageLoading = false;
  }, error => {
    this.isImageLoading = false;
    console.log(error);
  });
  return this.imageToShow;
}

getProfileByID(profileID: number) {
  alert("getting profile ");
  console.log(profileID);
  this.userService.getProfileByID(profileID)
    .subscribe(
      (data) => {
        this.profile = data;
        console.log(data),
          alert("In seach comp"),
          sessionStorage.setItem("profile", JSON.stringify(this.profile))
        this.router.navigate(['viewprofile', this.profile.user.emailID])
      },

      (error) => console.log(error.status)
    )
}







search(keyword: string, searchBy: string) 
{
  alert("Searching ");
  console.log(keyword);
  console.log(searchBy);
  if (searchBy === 'Region')
{
  
  this.profiles1 = this.profiles.filter(p => p.user.regionCode ===keyword);
  console.log(p => p.user.regionCode ==keyword)
          this.router.navigate(['mentor'])
      
}


  else if (searchBy === 'All')
    this.userService.searchAllProfile()
      .subscribe(
        (data) => {
          this.profiles = data;
          console.log(data),
            alert("In seach comp"),
            sessionStorage.setItem("profiles", JSON.stringify(this.profiles))
          this.router.navigate(['mentor'])
        },
        (error) => console.log(error.status)
      )


  else if (searchBy === 'Name')
  {
    this.userService.searchByName(keyword)
      .subscribe(
        (data) => {
          this.profiles = data;
          
          console.log(data),
            alert("In seach comp"),

           
            sessionStorage.setItem("profiles", JSON.stringify(this.profiles)),

            this.router.navigate(['mentor'])
        },
        (error) => console.log(error.status)
      )

    }
  else if (searchBy === 'Skill')
    this.userService.searchBySkill(keyword)
      .subscribe(
        (data) => {
          this.profiles = data;
          console.log(data),
            alert("In seach comp"),
            sessionStorage.setItem("profiles", JSON.stringify(this.profiles))
            
          this.router.navigate(['mentor'])
          
        },
        (error) => console.log(error.status)
      );
 


}






}







