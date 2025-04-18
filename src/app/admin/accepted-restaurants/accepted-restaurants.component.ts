import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-accepted-restaurants',
  templateUrl: './accepted-restaurants.component.html',
  styleUrls: ['./accepted-restaurants.component.css']
})
export class AcceptedRestaurantsComponent implements OnInit {

  errorMessage! : string;
  successMessage:String="";
  acceptedRestaruantsList!:Restaurant[];
  constructor(private router: Router, private adminService:AdminService) { }

  ngOnInit(): void {
    this.errorMessage = "";
    this.acceptedRestaruantsList=[];
    this.acceptedRestaurants();
  }

  acceptedRestaurants(){
    console.log("stsrted*")
    this.adminService.getAllRestaurants().subscribe(
      
      (response)=>{
        // console.log("yr list is:"+response);
        for(let restaurant of response){
          this.acceptedRestaruantsList.push(restaurant);
          
        }
        // console.log("yr list is:")
        // console.log(this.acceptedRestaruantsList);
        this.errorMessage="";
      },
      error => {
        this.errorMessage = error.error.message;
        this.acceptedRestaruantsList = [];
      }
    );

  }

  removeRestaurant(restaurant:Restaurant){
    this.adminService.deleteRestaurant(restaurant).subscribe(
      response=>{
        this.successMessage=response;
        this.errorMessage="";
        this.ngOnInit();
      },
      error=>{
        this.errorMessage = error.error.message;
        
      }
    )
  }

}
