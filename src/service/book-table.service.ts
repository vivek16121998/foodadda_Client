import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup } from '@angular/forms';
import { TableBooking } from 'src/app/models/TableBooking';
import { Restaurant } from 'src/app/models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class BookTableService {

  restName!:string;
  constructor(private http:HttpClient,private auth:AuthService) { }
  bookTable(data:FormGroup,restId:number):Observable<string>{
    var table:TableBooking=new TableBooking();
    table.bookingDate=data.value.bookingDate;
    table.noOfPeople=data.value.noOfPeople;
    table.timeOfBooking=data.value.timeOfBooking;
    this.auth.sessionUser.subscribe(data=> table.user = data)
    var rest:Restaurant=new Restaurant();
    rest.restaurantId=restId;
    table.restaurant=rest;
    console.log(table);
    return <Observable<string>> this.http.post(environment.bookTable,table);
  }

  
}
