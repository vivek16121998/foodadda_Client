import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/auth.service';
import { Observable, of } from 'rxjs';
import { Restaurant } from 'src/app/models/Restaurant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaRecommendationService {

  constructor() { }

  getRestaurants(selectedArea: String):Observable<any>{

    return of();
  }
}
