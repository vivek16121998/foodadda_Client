import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Restaurant } from 'src/app/models/Restaurant';
import { Users } from 'src/app/models/Users';
import { AuthService } from 'src/app/core/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-show-rating-based-restaurant',
  templateUrl: './show-rating-based-restaurant.component.html',
  styleUrls: ['./show-rating-based-restaurant.component.css']
})
export class ShowRatingBasedRestaurantComponent implements OnInit {

  user!:Users;
  rating!:Number;
  restaurantList!:Restaurant[];
  errorMessage!:String;
  successMessage!:String;
  sRating!:string;
  admin!:Boolean;
  flag!:boolean;
  constructor(private router: Router, private adminService:AdminService, private route: ActivatedRoute,private auth:AuthService) { }

  ngOnInit(): void {
    // this.sRating = this.route.snapshot.paramMap.get("rating");
    // this.rating = Number.parseInt(this.sRating);
    // console.log(this.rating);
    this.rating=2.5;
    this.restaurantList=[];
    this.errorMessage = "";
    
    this.auth.sessionUser.subscribe(data=> this.user = data);console.log(this.user);
    
    this.showRestaurants();
  }

  showRestaurants(){
    if(this.user==null){
      this.router.navigate(['login/'])
    }
    
    for(let r of this.user.roles){
      if(r.roleType=="ADMIN"){
          this.admin=true;
      }
    }
    if(this.admin==false){
      this.router.navigate(['login/']);
      //this.errorMessage="Sorry you can not avail this functionality. Please login as a CUSTOMER to do so.";

    }
    this.adminService.getRestaurantBasedOnRating(this.rating).subscribe(
      (response)=>{
        // console.log("yr list is:");
        for(let restaurant of response){
          this.restaurantList.push(restaurant);
        }
        // console.log("yr list is:")
        console.log(this.restaurantList);
        this.errorMessage="";
      },
      error => {
        this.errorMessage = error.error.message;
        this.restaurantList = [];
      }
    );
  }

  removeRestaurant(restaurant:Restaurant){
    this.adminService.deleteRestaurant(restaurant).subscribe(
      response=>{
        console.log("restaurantDEleted!")
        this.successMessage=response;
        this.flag=true;
        console.log(this.successMessage);
        this.errorMessage="";
      },
      error=>{
        this.errorMessage = error.error.message;
        
      }
    )
  }
  close(){
    this.flag=false;
    this.ngOnInit();
  }
  adminHome(){
    this.router.navigate(['/home'])
  }

}


