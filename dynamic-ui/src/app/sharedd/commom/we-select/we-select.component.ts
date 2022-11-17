import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-we-select',
  templateUrl: './we-select.component.html',
  styleUrls: ['./we-select.component.css']
})
export class WeSelectComponent implements OnInit {
  // selectedrecord: string = "";
  // clearable: boolean = false;

  // @Input() label = "";
  // @Input() parentForm: FormGroup;
  // @Input() control: string;
  // @Input() dataArray: any[];
  // @Input() isDisabled: boolean = false;
  // @Input() isOptionValue: boolean = false;
  // @Input() inputRequired: boolean = false;
  // @Input() selectedValue: string = "";
  // @Output() onSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() { }

  // selectDropDown() {
  //   console.log("event :", event);
  //   if (event == undefined) {
  //     this.clearable = false;
  //   }
  //   else {
  //     this.clearable = true;
  //   }
  //   this.onSelect.emit(event);
  // }

}
