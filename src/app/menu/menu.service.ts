import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

//const url : 'http://localhost:4000/cibo/restaurantAPI';

@Injectable({
  providedIn: 'root'
})


export class MenuService {

  constructor() { }



  getDList(restId: String): Observable<any> {

    return of();
  }
  delete( restaurantId: String, dishId:String): Observable<String> {

    return of();

  }
}
