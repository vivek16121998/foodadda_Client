import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VendorHomeService {

  
url:String= 'http://localhost:4000/cibo/restaurantAPI';
  constructor() { }

  getRestaurantL(userId: String): Observable<any> {

    return of();
  }
}
