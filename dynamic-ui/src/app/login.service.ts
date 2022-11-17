import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL: any;

  constructor(private httpClient:HttpClient) { }

//  

createContact(Resource:any){
  console.log("Service is working");
  return this.httpClient.post<any>("http://localhost:3000/posts" ,Resource);
  
}


}




