import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserAddress } from 'src/app/models/UserAddress';
import { Users } from 'src/app/models/Users';
import { environment } from 'src/environments/environment';


const url= "http://localhost:4000/cibo/UserAPI/updateAddress/";

@Injectable({
  providedIn: 'root'
})
export class UpdateAddressService {

  constructor(private http: HttpClient) { }

  delete(addressId: String, userId: String): Observable<String> {

    return of();
  }

  getUserList(): Observable<Users>{

    return of();
  }
  update(addressData:UserAddress,userID:number) : Observable<string> {

     return this.http.put(environment.updateAddress+userID, addressData,{responseType:"text"});
}
}
