import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup,ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { RegisterService } from 'src/service/register.service';
import { Router } from '@angular/router';
import { CustomValidators } from './custom-validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  stateList: string[]=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal"];
  flag!:boolean;
  isEditable = false;
  errorMessage!: string;
  successMessage!: string;
  registerForm!: FormGroup;
  rolesTypes:string[]=["CUSTOMER","VENDOR"];
  userRole!:string;


  constructor() { }

  ngOnInit() {
   //your code goes here
   
  }
  
  register(){
 //your code goes here
   }

   close(){

   //your code goes here
  }
  
  reload(){

   //your code goes here
  }
}

