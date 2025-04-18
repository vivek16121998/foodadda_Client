import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { Orders } from 'src/app/models/Orders';
import { AuthService } from 'src/app/core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ViewOrderService {
  user:number=0;
  temp:number[]=new Array<number>();

  constructor(private http: HttpClient,private auth:AuthService) { }

  getAllOrders():Observable<Orders[]>{

    console.log(this.auth.sessionUser.subscribe(data=>this.user = data.userId))
    console.log(this.user)
    return this.http.get<Orders[]>(environment.getOrders+this.user)
  }

  getRestaurantNames(dishId:number[]):Observable<string[]>{
      return this.http.get<string[]>(environment.getRestaurantName+dishId)
      }
}
