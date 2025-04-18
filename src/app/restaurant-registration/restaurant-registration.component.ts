import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantRegistrationService } from './restaurant-registration.service';
import { Router, NavigationEnd } from '@angular/router';
import { VendorHomeComponent } from '../vendor-home/vendor-home.component';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData {
  message:string;
}
@Component({
  selector: 'app-restaurant-registration',
  templateUrl: './restaurant-registration.component.html',
  styleUrls: ['./restaurant-registration.component.css']
})
export class RestaurantRegistrationComponent implements OnInit {

  //Stores errorMessage, returned by webservice in case of unsuccessful response
  stateList: string[]=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal"];
  
  mySubscription: any;

  errorMessage!: String;
  //Stores registrationId, returned by webservice in case of successful response

  registrationId!: number;
  flag!:boolean;
  //Stores a formgroup object

  registrationForm!: FormGroup;
 
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = false;
  

  constructor() {
    
   }


  ngOnInit() {

        //your code goes here
    
  }
  
  register() {

      //your code goes here
  }

  close(){
    
 //your code goes here
  }
  reload(){

   //your code goes here
  }

}

