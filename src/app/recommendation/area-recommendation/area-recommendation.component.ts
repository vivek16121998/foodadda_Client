import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';
import { AreaRecommendationService } from './area-recommendation.service';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { UserAddress } from 'src/app/models/UserAddress';
import { UpdateAddressService } from 'src/app/user-address/update-address/update-address.service';

@Component({
  selector: 'app-area-recommendation',
  templateUrl: './area-recommendation.component.html',
  styleUrls: ['./area-recommendation.component.css']
})
export class AreaRecommendationComponent implements OnInit {

  restaurantList!: Restaurant[];
  restListLength!: number;
  userAddressList!: UserAddress[];
  userAddress!: UserAddress[];
  userName!: String;
  selectedArea!: String;
  errorMessage!: String;
  area!: String;

  constructor() { }

  ngOnInit(): void {
    
     //your code goes here
    
  }

  populateAddress(){

     //your code goes here
 }

  getRestaurants() {

     //your code goes here
  }

  checkMenu(restaurantId: number) {

    //your code goes here
  }

}
