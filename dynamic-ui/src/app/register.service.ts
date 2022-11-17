import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { register } from './register';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 
  // postContact() {
  //   throw new Error('Method not implemented.');
  // }
  

  constructor(private http: HttpClient) { }

  createContact(Resource:any){
    console.log("Service is working");
    return this.http.post<any>("http://localhost:3000/posts" ,Resource);
    
  }

  // postData(data: any): Observable<any> {
  //   return this.httpClient.post(`${this.baseURL}/post`, data)
  // }

}
