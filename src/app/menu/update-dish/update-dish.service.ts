import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from 'src/app/models/Dish';
import { Observable, of } from 'rxjs';

const url= "http://localhost:4000/cibo/restaurantAPI/updateDish/";
@Injectable({
  providedIn: 'root'
})
export class UpdateDishService {
  
  constructor() { }


  update(dishData:Dish) : Observable<String> {

   return of();
}
}

