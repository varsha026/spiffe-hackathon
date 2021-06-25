import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BasicService {


  constructor(private httpClient: HttpClient) {
  }


  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),

  };

  updateServiceConfig(payload: any) {
    return this.httpClient
      .post('http://localhost:8080', payload, BasicService.httpOptions);
  }

}

