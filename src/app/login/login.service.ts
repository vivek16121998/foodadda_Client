import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Users } from '../models/Users'
import { AuthService } from '../core/auth.service'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(data: any): Observable<Users> {
    return of();    
  }

}
