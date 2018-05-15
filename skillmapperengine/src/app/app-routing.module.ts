import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {UserhomeComponent} from './userhome/userhome.component';
import { AppComponent } from './app.component';
import {RegisterComponent} from './register/register.component';
import { ListuserComponent } from './listuser/listuser.component';
import {SearchComponent} from './search/search.component';
import { ApprovalComponent } from './approval/approval.component';
import {ResumebuilderComponent} from './resumebuilder/resumebuilder.component';
import {ResumeComponent} from './resume/resume.component';
import {LogoutComponent} from './logout/logout.component';
import {ProfileComponent} from './profile/profile.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { MentorsComponent } from './mentors/mentors.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import {ImageuploadComponent} from './imageupload/imageupload.component';
const routes: Routes = 
[
  { path: 'login', component: LoginComponent },
  { path: 'home', component: UserhomeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home/viewprofile/:emailID', component: ProfileComponent },
  { path: 'home/viewprofile/:emailID/profile', component: ProfileComponent },
  { path: 'viewprofile/:emailID', component: ProfileComponent },
  { path: 'viewprofile/:emailID/profile', component: ProfileComponent },
  { path: 'viewprofile', component: ProfileComponent },
  { path: 'home/createprofile/:emailID', component: CreateprofileComponent },
  { path: 'mentor', component: MentorsComponent },
  { path: 'updateprofile/:emailID', component: UpdateprofileComponent },
  { path: 'home/updateprofile/:emailID', component: UpdateprofileComponent },
  { path: 'home/createprofile/:emailID/updateprofile/:emailID', component: UpdateprofileComponent },

  { path: 'home/uploadImage', component: ImageuploadComponent },

  { path: 'register', component: RegisterComponent},
  { path: 'listuser', component: ListuserComponent},
  { path: 'search', component: SearchComponent},
  { path: 'home/approve', component: ApprovalComponent},
  { path: 'createresume', component: ResumebuilderComponent},
  { path: 'resume', component: ResumeComponent},
 // { path: '', component: AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {




  
 }
