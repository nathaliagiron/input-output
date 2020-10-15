import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private REST_API_SERVER = "http://localhost:5000/api/";

  constructor(private httpClient: HttpClient) {

   }

   public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER + 'users/getUsers');
    console.log('Hello from function');
  }
}
