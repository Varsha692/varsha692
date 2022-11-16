import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-we-radio-button',
  templateUrl: './we-radio-button.component.html',
  styleUrls: ['./we-radio-button.component.css']
})
export class WeRadioButtonComponent implements OnInit {


  // @Input() label = "";

  @Input() parentForm: FormGroup;

  @Input() labelName:string = '';

  @Input() control: string = '' ;

  @Input() dataArray: any;
 
  
  
   constructor() { }

  ngOnInit(): void {

    console.log("We-radio control :", this.control);
  }

   
  selectRadio(event: { value: any; }) {
    console.log("event :", event.value);
    // this.selectRadioButton.emit(event.value);
  }

  
 

}
