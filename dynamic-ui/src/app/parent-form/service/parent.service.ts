import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }

  createContact(Resource:any){
    console.log("Service is working");
    return this.http.post<any>("http://localhost:8000/create",Resource);
    
  }




}
