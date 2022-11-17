import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  // emptyUser = new User('', '', '', '', '', '', '', '', '', '', '',);

  
  constructor( private formBuilder: FormBuilder) { }



  // toFormGroup(data: User) {
  //   console.log("user data :", data);
  //   const formGroup = this.formBuilder.group({
     
  //     userId: [data.userId, [Validators.required]],
  //     firstName: [data.firstName, [Validators.required]],
  //     lastName: [data.lastName, [Validators.required]],
  //     emailId: [data.emailId, [Validators.required, Validators.email]],
     
     
  //     phoneNumber: [data.phoneNumber, [Validators.required]],
      
  //     password: [data.password, [Validators.required]],
     
  //   })
  //   return formGroup;
  // }

}
