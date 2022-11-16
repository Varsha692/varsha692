import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { ParentService } from './service/parent.service';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {
  detailForm:FormGroup
  bsValue = new Date();
  todayDate = new Date();
  
  maxDate = new Date();
  // roleTypeList: LookupDetails[];

  constructor( public parentService: ParentService, private formbuilder:FormBuilder) {
   
    
    this.detailForm =this.formbuilder.group({
      name:['',[Validators.required]],
      lastName:['', [Validators.required]],
      email:['',[Validators.required]],
      phoneNumber:['',[Validators.required]],
      password:['',[Validators.required]],
      birth:['',[Validators.required]],
       fileNames:['', ],
     
      
    })
   }
  

  ngOnInit(): void {
  }

  submit(){
console.log("submit is working");
console.log('entired form value', this.detailForm.value);

this.parentService.createContact(this.detailForm.value).subscribe(data => {
  console.log("data:--", data);
})
  }

  cancel(){
    console.log("cancel is working");
  }

  selectRoleType(event: any) {
    console.log("event :", event);
  }


  onFileChange(event:any) {
    
    if(event.target.files.length > 0) 
    {
      console.log(event.target.files[0].name);
    }
  }
}
