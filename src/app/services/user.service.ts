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
  public jsonUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/user` , user);
  }

  getUserByEmail(email: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/user?email=${email}`)
  }

  getAllUser(): Observable<any>{
    return this.http.get<any>(`${this.jsonUrl}/users`);
  }

  getPostByUserId(userId: number): Observable<number>{
    return this.http.get<number>(`${this.jsonUrl}/posts?userId=${userId}`);
  }

  getCommentsPostById(postId: number): Observable<number>{
    return this.http.get<number>(`${this.jsonUrl}/comments?postId=${postId}`);
  }

  public postItemList: any = [];
  public postList = new BehaviorSubject<any>([]);

  getPosts() {
    return this.postList.asObservable();
  }

  setPost(post: any) {
    this.postItemList.push(...post);
    this.postList.next(post)
  }

  addPost(post: any) {
    this.postItemList.push(post);
    this.postList.next(this.postItemList);
  }





  /**
  getAllUsers(): Observable<User[]>{
    let headers = new HttpHeaders();
    //set method returns new instance after modifying the header
    //this instance is immutable so, we cannot change anything and it returns new instance
    headers = headers.set("content-type", 'application/json');
    headers = headers.set("Access-Control-Allow-Origin", '*');
    return this.http.get<User[]>(`${this.apiUrl}/user?email=${email}`, {headers: headers})
  }
   */


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
