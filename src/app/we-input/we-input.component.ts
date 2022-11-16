import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-we-input',
  templateUrl: './we-input.component.html',
  styleUrls: ['./we-input.component.css']
})
export class WeInputComponent implements OnInit {

   @Input() parentForm:FormGroup


@Input() control:string;


// no need to write this code only one input is enough for all field i used it here to get value for individual

// @Input() controll:string;

// @Input() controlll:string;

//below  label and placeholder we are using to displayed the value 

@Input() labelName:string = '';
@Input() isNumber: boolean = false;
@Input() placeholder:string = '';
// @Input() gender:string ='';
// @Input() isNumber: boolean = false;
@Input() maximumLength: any;
@Input() minimumLength: any;

  // @Input() nam:string;
  constructor() { }

  ngOnInit(): void {

    console.log(" we input component ",this.parentForm.value);
    
  }

}
