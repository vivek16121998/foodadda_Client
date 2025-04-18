import { Component, OnInit } from '@angular/core';
import { TransferdataService } from 'src/service/transferdata.service';
import { Router } from '@angular/router';
import { Restaurant } from '../models/Restaurant';
import { Dish } from '../models/Dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
clicked=false;
  showMenu = false;
  restauarntsPage=false;
  search=false;
  restaurantId!:number;
  successMessage:string = "";
  searchRestaurants:Restaurant[]=[];
  searchRestaurants1:Restaurant[]=[];
  restaurants:Restaurant[] = [];
  searchword!:string;
  regex!:string;
  selectedRestaurant: Restaurant = new Restaurant();
  dishes:Dish[]=[];
  
  constructor(private shared:TransferdataService,private router: Router) {
   }
  ngOnInit(): void {
    
    this.shared.getAllRestaurants().subscribe(
      (response)=>{
        // console.log(response);
        this.restaurants = response;
      },
      err=>{
        console.log(err);
      })
  }

getSearchResults(){
  this.clicked=true;
  this.search=false;
  this.shared.getAllRestaurants().subscribe(
    (response)=>{
      this.searchRestaurants = response.filter(restaurant => {
        var reg:string;
        reg=restaurant.restaurantName.toLowerCase();
        var regex1=".*"+this.searchword.toLowerCase()+".*";
        console.log(restaurant.dishes);
        var xyz: any[]=[];
        if(restaurant.dishes){
          xyz=restaurant.dishes.filter(d=> d.dishName.toLowerCase().match(regex1)  );
        }
       console.log(xyz);
        
        return reg.match(regex1) || xyz.length>0;
      });
    
    if(this.searchRestaurants.length>0){
      this.search=true;
    }
    console.log(this.searchRestaurants);
    })
}

checkMenu(restaurantId: number){
  this.router.navigate(['checkMenu/'+restaurantId])
}

bookTable(restaurantId: number){
  this.router.navigate(['book/'+restaurantId])
}

close(){
  this.router.navigate(['home/allRestaurants']);
}

}
