import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAddress } from 'src/app/models/UserAddress';
import { UpdateAddressService } from '../update-address/update-address.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-all-address',
  templateUrl: './view-all-address.component.html',
  styleUrls: ['./view-all-address.component.css']
})
export class ViewAllAddressComponent implements OnInit {

  userAddressList!: UserAddress[];
  userName!: String;

  error!: String;
  flag!: Boolean;
  addressDelete!: String;
  mdelMsg: string="Deleted successfully";
  constructor() { }

  ngOnInit(): void {

    // Your code goes here
  }

  populateAddress(){
    
    // Your code goes here
  }

  deleteAddress(addressId: number){

   // Your code goes here
  }

  updateAddress(userAddress: UserAddress) {

   // Your code goes here
  }

  addAddress(){
    
   // Your code goes here
  }

}
