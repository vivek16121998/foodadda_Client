import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Restaurant } from 'src/app/models/Restaurant';
import { Dish } from 'src/app/models/Dish';

@Injectable({
  providedIn: 'root'
})
export class TransferdataService {

  sharedData:Restaurant[] = [];
  
  constructor(private http:HttpClient) { }

  getAllRestaurants():Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(environment.getRestaurants);
  }
  
}
