import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup; //step 3 give the same formgroup name as in the template 

  constructor(private formBuilder: FormBuilder,  private loginService :LoginService, private back: Router) {


    this.loginForm = this.formBuilder.group({

      emailAddr: ['', [Validators.minLength(10),
      Validators.maxLength(15),
      Validators.required, Validators.email]],
      quantity: ['', Validators.required]

    });
  }

  ngOnInit(): void {}
  submit() {
    console.log("submit is working");
    console.log('entired form value', this.loginForm.value);
    this.loginService.createContact(this.loginForm.value).subscribe(data=>{
      console.log("data:--" , data);
    })
  }


  data() {
    this.back.navigateByUrl('register');
  }

  postData() {

    console.log("data is submit");

    console.log(this.loginForm);

    console.log('entired form value' + this.loginForm.value);

    console.log('Email Address sent in screen : ' + this.loginForm.value.emailAddr);

  }

  


}
