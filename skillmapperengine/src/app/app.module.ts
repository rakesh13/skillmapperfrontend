import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }         from './app.component';
import {LoginComponent} from './login/login.component';
import {User} from './user';
import {Profile} from './profile';
import {SearchComponent} from './search/search.component';
import {RegisterComponent} from './register/register.component';
import {LoginService} from "./login.service";
import {UserService} from "./user.service";
import { ListuserComponent } from './listuser/listuser.component';
import {UserhomeComponent} from './userhome/userhome.component';
import { ApprovalComponent } from './approval/approval.component';
import { LogoutComponent } from './logout/logout.component';
import { MentorsComponent } from './mentors/mentors.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { ResumebuilderComponent } from './resumebuilder/resumebuilder.component';
import { ResumeComponent } from './resume/resume.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule],
  declarations: [
    AppComponent,LoginComponent,RegisterComponent,SearchComponent,UserhomeComponent, ListuserComponent, ApprovalComponent, LogoutComponent, MentorsComponent, ProfileComponent, UpdateprofileComponent, CreateprofileComponent, ImageuploadComponent
    ,ResumebuilderComponent, ResumeComponent
  ],
  providers: [LoginService,UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }