import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllRestaurants(){
    return <Observable<Restaurant[]>>this.http.get<Restaurant[]>(environment.getOperatingRestaurants); 
  }

  deleteRestaurant(restaurant: Restaurant){
    return this.http.delete(environment.deleteRestaurant+restaurant.restaurantId,{responseType:"text"});
  }

  getRestaurantBasedOnRating(rating:Number){
    return <Observable<Restaurant[]>>this.http.get<Restaurant[]>(environment.getRatingsBasedRestaurant+rating); 
  }

  getNewlyAddedRestaurants(){
    return <Observable<Restaurant[]>>this.http.get<Restaurant[]>(environment.newRestaurants);
  }

  approveRestaurant(restaurant:Restaurant, status:String){

    return this.http.put(environment.approveRestaurant+status, restaurant,{responseType:"text"});
  }
}
