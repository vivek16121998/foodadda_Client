import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {Users} from '../models/Users';
import { AuthService } from '../core/auth.service'

@Injectable()
export class LoginGuard implements CanActivate {
  user!:Users;
  constructor(private router: Router,private auth:AuthService ) {};
  canActivate():boolean {


      if(this.checkUser()) {
          return true;
      } 
      else {
          this.router.navigate(['/login']);
          return false;
      }
  }

  checkUser():boolean {
      this.auth.sessionUser.subscribe(user=>this.user = user)
      if(this.user.userId != null) {
          return true;
      }
      else{
        return false;
      } 
  }
}

