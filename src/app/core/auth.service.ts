import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users'
import { Orders } from '../models/Orders';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sessionUser: BehaviorSubject<Users> = new BehaviorSubject<Users>(new Users());
  allOrder:BehaviorSubject<Orders[]> =  new BehaviorSubject<Orders[]>([]);
  rName:BehaviorSubject<string[]> =  new BehaviorSubject<string[]>([]);
  user!: Users;

  constructor(private http: HttpClient) {
    this.loadSessionUser();
   }

   loadSessionUser() {
    this.user = new Users();
    this.user.userName = "";       
  }
nextUser(data:Users){
    this.user = data;
    this.sessionUser.next(this.user);
}
newOrder(data:Orders[]){
  this.allOrder.next(data);
  console.log(data)
}
restaurant(data:string[]){
  this.rName.next(data);
}

}
