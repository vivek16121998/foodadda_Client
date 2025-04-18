import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup,ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateAddressService } from './update-address.service';
import { UserAddress } from 'src/app/models/UserAddress';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  stateList: string[]=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal"];
  flag!:boolean;
  errorMessage!: string;
  successMessage!: string;
  updateForm!: FormGroup;
  successMsg!: String;
  address: any;
  constructor() { }

  ngOnInit() {

    // Your code goes here
    
  }

  update() {

   // Your code goes here
  }

     
  close(){

        // Your code goes here
  }
}
