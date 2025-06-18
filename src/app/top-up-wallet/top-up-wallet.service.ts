import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopUpWalletService {

  constructor(private http: HttpClient) { }

  topUpWallet(topUpAmount:number,userId:number):Observable<any>{
    
    return this.http.get(environment.topUpWallet+topUpAmount+"/"+userId);
  }

}
