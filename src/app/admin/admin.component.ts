import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurant } from '../models/Restaurant';


import {AdminService} from '../admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  rating!:Number;//isko
  constructor(private router: Router, private adminService:AdminService, private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.ratingForm = this.fb.group({ratingSelected: 1});
    // this.showAcceptedRestaurants();
    // this.restaurantBasedOnRatings(this.ratingSelected);
  }

  showAcceptedRestaurants(){
        console.log("stsrtedfroms ssdmin");
        this.router.navigate(['/acceptedRestaurants']);
     
  }
  restaurantBasedOnRatings(){
    console.log("the value of rating is:"+this.rating);
    this.router.navigate(['/showRatingBasedRestaurant', this.rating]);
  }

  getNewRestaurants(){
    this.router.navigate(['/newlyAddedRestaurant']);
  }


}
