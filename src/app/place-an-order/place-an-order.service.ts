import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../models/Orders';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceAnOrderService {

  constructor(private http: HttpClient) { }

  placeTheOrder(userID:String, order:Orders){
    
    console.log(userID)
    console.log(order.orderItemsList)
    return <Observable<Boolean>>this.http.put(environment.placeOrder+userID, order);
  }
}
