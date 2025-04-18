import { Component, OnInit } from '@angular/core';
import { TransferdataService } from 'src/service/transferdata.service';
import { Restaurant } from '../models/Restaurant';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { Users } from '../models/Users';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.css']
})
export class AllRestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];
  user!: Users;
  cust: boolean = false;


  constructor(private auth: AuthService, private shared: TransferdataService, private router: Router) {
    this.shared.getAllRestaurants().subscribe(
      (response) => {
        console.log(response);
        this.restaurants = response;
      },
      err => {
        console.log(err);
      });
      this.auth.sessionUser.subscribe(data=> this.user = data);
      console.log(this.user);
  }

  ngOnInit(): void {
  }

  checkMenu(restaurantId: number) {
    this.router.navigate(['checkMenu/' + restaurantId])
  }

  bookTable(restaurantId: number) {
    console.log(this.user.userId);
        if (this.user == null || this.user.userId==undefined || this.user.roles.length==0) {
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
}
