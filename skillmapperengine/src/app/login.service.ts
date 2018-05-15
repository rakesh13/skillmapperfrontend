import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
 // private loginUrl = 'api/user'; 
  constructor(private http: HttpClient) { }
 
 
  authenticateUser(user: User): Observable<User> {

    console.log(user)
   // const url = `${this.loginUrl}/${user}`;
    return this.http.post<User>('http://localhost:8091/SkillMapEngineMiddleWare/api/user/login',user,httpOptions)
   
    // .pipe(
    //   tap(_ => this.log(`fetched user id=${user.emailID}`)),
    //   catchError(this.handleError<User>(`user id=${user.emailID}`))
    // );
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
}
