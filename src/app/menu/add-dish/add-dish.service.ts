import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Dish } from 'src/app/models/Dish';


const url= "http://localhost:4000/cibo/restaurantAPI/addDish/";

@Injectable({
  providedIn: 'root'
})
export class AddDishService {

  constructor() { }


  add(dishData:Dish) : Observable<String> {
   return of();
}
}
