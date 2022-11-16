import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-we-date',
  templateUrl: './we-date.component.html',
  styleUrls: ['./we-date.component.css']
})
export class WeDateComponent implements OnInit {

  @Input() placeholder = "";
  @Input() parentForm: FormGroup;
  @Input() control: string;
  @Input() minDate: any;
  @Input() bsValue: any;
  @Input() maxDate: any;
  @Input() inputRequired: boolean;
  @Input() isDisabled: boolean;
  @Output() onValueChange: EventEmitter<any>;






  // bsInlineValue = new Date();
  // bsInlineRangeValue: Date[];
  // maxDate = new Date();
 
  constructor() {
    // this.maxDate.setDate(this.maxDate.getDate() + 7);
    // this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    this.onValueChange = new EventEmitter();
  }

  ngOnInit(): void {
  }


  valueChange(event: any) {
    this.onValueChange.emit(event);
  }

}

