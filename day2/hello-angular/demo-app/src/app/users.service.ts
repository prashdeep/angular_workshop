import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './Course';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }


  fetchAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  fetchUserById(id:number):Observable<User>{
    return this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users/'+id)
  }

  saveUser(user:User){
    console.log('The post data is ')
    console.log(JSON.stringify(user));
    return this.httpClient.
    post('https://jsonplaceholder.typicode.com/users',
    JSON.stringify(user));
  }
}
