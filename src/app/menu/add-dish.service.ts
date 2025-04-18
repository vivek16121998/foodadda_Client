import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../models/Dish';
import { Observable } from 'rxjs';


const url= "http://localhost:4000/cibo/restaurantAPI/addDish/2";

@Injectable({
  providedIn: 'root'
})
export class AddDishService {

  constructor() { }


  add(dishData:Dish) : Observable<String> {
    
    return null;
}
}
