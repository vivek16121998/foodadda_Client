import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferdataService } from 'src/service/transferdata.service';
import { Restaurant } from '../models/Restaurant';
import { AuthService } from '../core/auth.service';
import { Users } from '../models/Users';


@Component({
  selector: 'app-trending-restaurants',
  templateUrl: './trending-restaurants.component.html',
  styleUrls: ['./trending-restaurants.component.css']
})
export class TrendingRestaurantsComponent implements OnInit {

  trendsPresent: boolean = false;
  trendingRestaurants: Restaurant[] = [];
  user!: Users;
  cust: boolean = false;
  
  constructor(private auth: AuthService,private shared:TransferdataService, private router: Router) {
    this.auth.sessionUser.subscribe(data=> this.user = data);
    console.log(this.user); }

  ngOnInit() {
    this.getTrendingRestaurants();
    
  }
  getTrendingRestaurants() {
    this.shared.getAllRestaurants().subscribe(data => {
      // console.log(data.filter(restaurant => restaurant.avgRating > 4))
      this.trendingRestaurants = data.filter(restaurant => restaurant.avgRating > 4 && restaurant.transaction.restaurantOrderCounter>1);
      if(this.trendingRestaurants.length != 0 ){
        this.trendsPresent = true;
      }
    })   
  }

  
  checkMenu(restaurantId: number){
    this.router.navigate(['checkMenu/'+restaurantId])
  }
  
  bookTable(restaurantId: number){
    if (this.user == null || this.user.roles.length==0) {
      this.router.navigate(['login/']);
    }
    console.log("inside bookTable"+this.user);
    for (let r of this.user.roles) {
      if (r.roleType == "CUSTOMER") {
        this.cust = true;
      }
    }
    if (this.cust == false) {
      this.router.navigate(['login/']);
      //this.errorMessage="Sorry you can not avail this functionality. Please login as a CUSTOMER to do so.";
    }
    this.router.navigate(['book/' + restaurantId]);
  }

  close(){
    this.router.navigate(['home/']);
  }
}
