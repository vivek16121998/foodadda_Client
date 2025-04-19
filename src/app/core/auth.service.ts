import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users'
import { Orders } from '../models/Orders';
import { Wallet } from '../models/Wallet';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sessionUser: BehaviorSubject<Users> = new BehaviorSubject<Users>(new Users());
  allOrder:BehaviorSubject<Orders[]> =  new BehaviorSubject<Orders[]>([]);
  rName:BehaviorSubject<string[]> =  new BehaviorSubject<string[]>([]);
  sessionWallet: BehaviorSubject<Wallet> = new BehaviorSubject<Wallet>(new Wallet());
  user!: Users;
  wallet!:Wallet;

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
setavailableAmount(data:number){
  this.wallet.availableAmount=data
  this.sessionWallet.next(this.wallet)
}
setWallet(data:Wallet){
  this.wallet=data
  this.sessionWallet.next(this.wallet)
}
newOrder(data:Orders[]){
  this.allOrder.next(data);
  console.log(data)
}
restaurant(data:string[]){
  this.rName.next(data);
}

}
