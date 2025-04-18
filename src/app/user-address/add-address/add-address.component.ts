import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddAddressService } from './add-address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  errorMessage!: String;
  successMsg!: String;
  addAddressForm!: FormGroup;
  userAddressId!: number;
  flag:boolean=false;

  stateList: string[] = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh","Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"];
  constructor() { }

  ngOnInit(): void {

    // Your code goes here
  }
  add() {
    
   // Your code goes here
  }

  cancel(){

    // Your code goes here
  }

  close(){

  // Your code goes here
  }

  reload(){

   // Your code goes here
  }

}