import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatSupportService {

  constructor(private http: HttpClient) {}

  agentResponse(sessionId: any, message:any): Observable<any> {
      return this.http.get(environment.agentresponse+sessionId+"/"+message)
    }

}
