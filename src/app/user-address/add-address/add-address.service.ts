import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAddress } from 'src/app/models/UserAddress';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/auth.service';

const url = "http://localhost:4000/cibo/UserAPI/addAddress/";
@Injectable({
  providedIn: 'root'
})
export class AddAddressService {
  i!: String;
  constructor(private http: HttpClient) { }

  addAddress(addressData: any, userId:number): Observable<string> {
    

    return this.http.post(environment.addAddress+userId,addressData,{responseType:"text"});
  }}
