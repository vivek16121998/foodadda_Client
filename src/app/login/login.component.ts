import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Users} from '../models/Users';
import { AuthService } from '../core/auth.service'
import { LoginService } from '../login/login.service'
import { CustomValidators } from '../register/custom-validators';
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

  constructor(private form:FormBuilder,private service:LoginService,private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
   //  You code goes here
   this.loginForm=this.form.group({
       contactNumber:["",[Validators.required,Validators.pattern("[6-9][0-9]{9}$")]],
       // password:["",[Validators.required]]
       password: [
        "",
        Validators.compose([
         Validators.required,
         // check whether the entered password has a number
         CustomValidators.patternValidator(/\d/, {
          hasNumber: true
         }),
         // check whether the entered password has upper case letter
         CustomValidators.patternValidator(/[A-Z]/, {
          hasCapitalCase: true
         }),
         // check whether the entered password has a lower case letter
         CustomValidators.patternValidator(/[a-z]/, {
          hasSmallCase: true
         }),
         // check whether the entered password has a special character
         CustomValidators.patternValidator(
          /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          {
           hasSpecialCharacters: true
          }
         ),
         Validators.minLength(8)
        ])
       ]
      })

  }
  login() {
    //  You code goes here
    this.errorMessage=""
    this.successMessage=""
    console.log(this.loginForm.value)
     this.service.login(this.loginForm.value).subscribe(
    data=>{console.log(data)
    this.auth.nextUser(data)
    this.auth.setWallet(data.wallet)
    this.router.navigate(['home/'])
   },

   (error)=>{this.errorMessage=error.error.message}
  )
}

getRegisterPage(){

  //  You code goes here
  this.router.navigate(['register/'])
}




}
