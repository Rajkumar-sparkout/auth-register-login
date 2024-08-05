import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Login } from '../interface/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/user` , user);
  }

  getUserByEmail(email: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/user?email=${email}`)
  }


  // logout(): void {
  //   localStorage.removeItem('currentUser');
  //   this.currentUserSubject.next(null);
  // }

  // createUser(user: User): Observable<any>{
  //   return this.http.post(this.apiUrl + '/createUser', user);
  // }

  // viewUser(userId: number): Observable<User>{
  //   const apiUrl = "http://localhost:3000/"+userId;
  //   return this.http.get<User>(apiUrl);
  // }

  // updateUser(userId: number, user: User): Observable<User>{
  //   const apiUrl = "http://localhost:3000/"+userId;
  //   return this.http.put<User>(apiUrl, user);
  // }

  // deleteUser(userId: number): Observable<User>{
  //   const apiUrl = "http://localhost:3000/"+userId;
  //   return this.http.get<User>(apiUrl);
  // }
}
