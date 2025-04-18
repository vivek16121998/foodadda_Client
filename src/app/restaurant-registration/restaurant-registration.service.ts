import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Restaurant } from '../models/Restaurant';




const  url = "http://localhost:4000/cibo/restaurantAPI/registerRestaurant/";

@Injectable()
export class RestaurantRegistrationService {
  i!:String;
  constructor() { }
  

  register(restaurantData:Restaurant) : Observable<number> {

    return of();
}}