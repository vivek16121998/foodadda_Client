import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Users} from '../models/Users';
import { AuthService } from '../core/auth.service'
import { LoginService } from '../login/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  errorMessage! : string;
  successMessage:string="";
  user:Users=new Users();
  show!:boolean;

  constructor() { }

  ngOnInit(): void {
   //  You code goes here
     

  }
  login() {
    //  You code goes here
}

getRegisterPage(){

  //  You code goes here
}




}
