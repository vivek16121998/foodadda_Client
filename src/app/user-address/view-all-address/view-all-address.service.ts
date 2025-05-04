import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserAddress } from 'src/app/models/UserAddress';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewAllAddressService {

  constructor(private http: HttpClient) { }
  
    getAddressList(userId:number):Observable<UserAddress[]> {
  
      return this.http.get<UserAddress[]>(environment.getAddressList+userId)
    }
    deleteAddress( addressId:number,userID:number):Observable<string>{

      // return this.http.delete<String>(environment.deleteAddress+addressId+"/"+userID ,{responseType:"text"});
      return this.http.delete(environment.deleteAddress+addressId+"/"+userID ,{responseType:"text"});
    } 
}
