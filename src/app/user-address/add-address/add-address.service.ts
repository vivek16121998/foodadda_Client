import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAddress } from 'src/app/models/UserAddress';
import { Observable, of } from 'rxjs';

const url = "http://localhost:4000/cibo/UserAPI/addAddress/";
@Injectable({
  providedIn: 'root'
})
export class AddAddressService {
  i!: String;
  constructor() { }

  addAddress(addressData: UserAddress): Observable<number> {

    return of();
  }}
