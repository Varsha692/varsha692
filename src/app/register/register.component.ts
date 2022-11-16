import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Data, Route, Router } from '@angular/router';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


   
  title = 'formarray';

  registerForm: FormGroup;
 
//  name:string="Name";
//  address:string="Address";
//  pincode:string="Pincode";
//  gender:string="Gender";


  // gender:FormControl = new FormControl

  currentItem='';
  // formParent='';
  // uname: string = 'angular';



  // childData: string | undefined;

selectedGender: string = '';
  gendersList : any = [
    {name: 'Male', value :'M'},
    {name: 'Female', value :'F'},
    {name: 'Others', value :'O'}
  ]

  radioChangeHandler(event: any){
    
    this.selectedGender = event.target.value;
  }

  constructor(public registerService: RegisterService, private formBuilder: FormBuilder, private route: Router) {


    this.registerForm = this.formBuilder.group({

      name: ['', Validators.required],
      address:['',Validators.required],
      pincode:['', Validators.required],
      birthdate: ['', Validators.required],

      // emailAddr1: ['',Validators.required, Validators.email],
      // emailAddr1: ['', [Validators.minLength(10), Validators.maxLength(15), Validators.required, Validators.email]],
      email: this.formBuilder.array([this.formBuilder.group({ emailAddr1: [''] })]),
      phoneNo: this.formBuilder.array([this.formBuilder.group({ phone: [''] })]),
      quantity1: ['',Validators.required],
      quantity2: ['', Validators.required],
      gender: ['', Validators.required],
      terms: ['', Validators.required]
    });



    // this.registerForm = this.formBuilder.group({

    //   name: ['',
    //     // Validators.minLength(5),
    //     // Validators.maxLength(15),
    //     Validators.required],

    //   birthdate: ['', Validators.required],

    //   //  phoneNo:[Validators.required],

    //   emailAddr1: ['',
    //     // Validators.minLength(5),
    //     // Validators.maxLength(15),
    //     Validators.required,
    //     // Validators.email
    //   ],

    //   // phoneNo : ['',Validators.required],

    //   phoneNo: this.formBuilder.array([

    //     this.formBuilder.group({

    //       phone : ['']


    //     })


    //   ]),

    //   quantity1: ['', Validators.required],

    //   quantity2: ['', Validators.required],
    //   male:[''],
    //   female:[''],
    //   other:[''],
    //   terms: ['', Validators.required]
    // });

  }

  // parentMethod(data: string){
  //  this.childData =data;
  // }
//  how to take value of fromarray reactive form.
  get frmarr() {
    return this.registerForm.get('phoneNo') as FormArray;
  }

   // how to take value of fromarray reactive form.
  get formarray() {
    return this.registerForm.get('email') as FormArray;
  }

  ngOnInit(): void {

  }

   // Add Email field logic of Form Array
  numm: number = 0;
  addEmail() {
    console.log("Button is working");

    const addEmail = this.formBuilder.group({
      emailAddr1: ['']
    });
    this.formarray.push(addEmail);
    this.numm = this.numm + 1;
  }

  removeEmail(id: any) {
    console.log("id" + id);
    this.formarray.removeAt(id);
  }

  // Add phone field logic of Form Array
  num: number = 0;
  addNumber() {
    console.log("Button is working");

    const addPhoneNum = this.formBuilder.group({
      phone: ['']
    });
    this.frmarr.push(addPhoneNum);
    this.num = this.num + 1;
  }

  removeNumber(id: any) {

    console.log("id" + id);
    this.frmarr.removeAt(id);
  }

  postData() {
    console.log("data is submit");

    console.log(this.registerForm);

    console.log('entired form value', this.registerForm.value);

    console.log('Email Address', this.registerForm.value.emailAddr);

  }

  cancel() {
    console.log("cancel is working");
    this.route.navigateByUrl('login');

  }
  //API for Submit Button
  submit() {
    console.log("submit is working");
    console.log('entired form value', this.registerForm.value);
    this.registerService.createContact(this.registerForm.value).subscribe(data => {
      console.log("data:--", data);
    })
  }

  // select(gender:string){
  //   // console.log(this.registerForm.value.gender);
  //   console.log(this.registerForm.value);
    
  //   console.log("select is working");
  //   console.log("gender :",gender);
    
  //   this.currentItem = gender;
  //   console.log(this.currentItem);
  // }

  selectGenderCategory(){

  }
 
 
}
