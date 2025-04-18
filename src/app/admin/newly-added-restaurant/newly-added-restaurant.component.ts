import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-newly-added-restaurant',
  templateUrl: './newly-added-restaurant.component.html',
  styleUrls: ['./newly-added-restaurant.component.css']
})
export class NewlyAddedRestaurantComponent implements OnInit {

  restaurantList!:Restaurant[];
  errorMessage!:String;
  successMessage!:String;
  message!:String;
  flag!:boolean;
  
  constructor(private router: Router, private adminService:AdminService) { }

  ngOnInit(): void {
    this.restaurantList = [];
    this.getNewlyAddedRestaurant();
  }

  getNewlyAddedRestaurant(){
    this.adminService.getNewlyAddedRestaurants().subscribe(

      (response)=>{
        // this.restaurantList.push(r)
        for(let restaurant of response){
          this.restaurantList.push(restaurant);
        }
        // console.log(this.restaurantList);
        this.errorMessage="";
        
      },
      error => {
        this.errorMessage = error.error.message;
        this.restaurantList = [];
      }
    )
  }

  acceptRestaurant(restaurant:Restaurant){
    this.adminService.approveRestaurant(restaurant, "Accepted").subscribe(
      response => {
        this.flag=true;
        console.log("before response")
        this.successMessage = response;
        console.log(this.successMessage)
        this.errorMessage="";
      },
      error =>{
        console.log("before error")
        this.errorMessage = error;
        console.log(this.errorMessage)
      }
    )
  }

  rejectRestaurant(restaurant:Restaurant){
    this.adminService.approveRestaurant(restaurant, "Rejected").subscribe(
      response => {
        this.successMessage = response;
        this.flag=true;
        this.errorMessage="";
      },
      error =>{
        this.errorMessage = error.error.message;
      }
    )
  }

  close(){
    this.flag=false;
    this.ngOnInit();

    // this.router.navigate(['newlyAddedRestaurant'])
  }

  adminHome(){
    this.router.navigate(['home'])
  }

}
