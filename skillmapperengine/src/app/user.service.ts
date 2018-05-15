import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import {Profile}  from './profile';
import { Skill } from './skill';
import { Placement } from './placement';
import { Certifications } from './certifications';
import { DomSanitizer } from '@angular/platform-browser';
//import { Observable } from 'rxjs/Rx'; 
//import { Observable } from 'rxjs/add/operator/map'
let myHeaders = new HttpHeaders({
  'Content-Type': 'image/jpeg',
  'withCredentials': 'true',
  'Authorization': localStorage.getItem('token')
});
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  
  constructor(private http: HttpClient,private domSanitizer: DomSanitizer) { }
  register(user: User): Observable<User> {

    console.log(user)
    return this.http.post<User>('http://localhost:8091/SkillMapEngineMiddleWare/api/user/register',user,httpOptions)
   
  }


  getProfileImage(emailID: any): any {
    throw new Error("Method not implemented.");
  }

  listUsers(): Observable<User[]> {

    console.log()
    return (this.http.get<User[]>('http://localhost:8091/SkillMapEngineMiddleWare/api/user/'))
   
  }

  searchBySkill(skill:String): Observable<Profile[]> {

    console.log()
    return (this.http.get<Profile[]>('http://localhost:8091/SkillMapEngineMiddleWare/api/profile/searchBySkills/'+skill))
   
  }



  searchAllProfile(): Observable<Profile[]> {

    console.log()
    return (this.http.get<Profile[]>('http://localhost:8091/SkillMapEngineMiddleWare/api/profile'))
   
  }

  searchByName(name:string): Observable<Profile[]> {

    console.log()
    return (this.http.get<Profile[]>('http://localhost:8091/SkillMapEngineMiddleWare/api/profile/getProfileByName/'+name))
   
  }



  searchByRegion(region:String): Observable<Profile[]> {

    console.log(region)
    return (this.http.get<Profile[]>('http://localhost:8091/SkillMapEngineMiddleWare/api/profile/getProfileByRegion/'+region))
   
  }

addSkill(skill:Skill,emailID:string)
{
  console.log(skill)
  console.log(emailID)
    return this.http.post<Skill>('http://localhost:8091/SkillMapEngineMiddleWare/api/skill/addSkill/'+emailID+'/',skill,httpOptions)
   
}


addPlacement(placement:Placement,emailID:string)
{
  console.log(placement)
    return this.http.post<Placement>('http://localhost:8091/SkillMapEngineMiddleWare/api/placement/addPlacement/'+emailID+'/',placement,httpOptions)
   
}




addCertification(certification:Certifications,emailID:string)
{
  console.log(certification)
    return this.http.post<Certifications>('http://localhost:8091/SkillMapEngineMiddleWare/api/certificate/addCertificate/'+emailID+'/',certification,httpOptions)
   
}
// uploadImage(selectedFile:File,emailID:string)
// {
// return this.http.post('http://localhost:8091/SkillMapEngineMiddleWare/api/user/doUpload/'+emailID+'/',selectedFile,
//  {
//   reportProgress: true,
//   observe: 'events'
// })
// }


uploadImage(selectedFile:FormData,emailID:string)
{
return this.http.post<User>('http://localhost:8091/SkillMapEngineMiddleWare/api/user/doUpload/'+emailID+'/',selectedFile)
//  ,{
//   reportProgress: true,
//   observe: 'events'
// })
}
// getImage(emailID:string)
// {
//   return this.http.get('http://localhost:8091/SkillMapEngineMiddleWare/api/user/getImage/'+emailID+'/')
// //   ,{ headers: myHeaders, responseType: 'blob', })
// //   .map(blob => {
// //     let urlCreator = window.URL;
// //     return this.domSanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
// // });
// }
approveUserProfile(): Observable<Profile[]> {

    console.log()
    return (this.http.get<Profile[]>('http://localhost:8091/SkillMapEngineMiddleWare/api/profile/getApprovalList'))
   
  }



  approve(profile:Profile): Observable<Profile> {

    console.log(profile)
    return (this.http.put<Profile>('http://localhost:8091/SkillMapEngineMiddleWare/api/profile/approve',profile,httpOptions))
   
  }

  getProfile(emailID:String): Observable<Profile> {

    console.log(emailID)
    return (this.http.get<Profile>('http://localhost:8091/SkillMapEngineMiddleWare/api/profile/getProfile/'+emailID+'/'))
   
  }

getProfileByID(profileID:number): Observable<Profile> {

    console.log(profileID)
    return (this.http.get<Profile>('http://localhost:8091/SkillMapEngineMiddleWare/api/profile/getProfileByID/'+profileID))
   
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  private log(message: string) {
    console.log("user logged in ");
  }




  updateProfile(profile: Profile): Observable<Profile> {

    console.log(profile)
    return this.http.put<Profile>('http://localhost:8091/SkillMapEngineMiddleWare/api/profile',profile,httpOptions)
   
  }
  getImage(emailID: string): Observable<Blob> {
    alert(emailID);
    return this.http.get('http://localhost:8091/SkillMapEngineMiddleWare/api/user/getImage/'+emailID+'/', {responseType: 'blob' });
}
}
