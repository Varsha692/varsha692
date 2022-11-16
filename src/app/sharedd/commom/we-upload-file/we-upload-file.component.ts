import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-we-upload-file',
  templateUrl: './we-upload-file.component.html',
  styleUrls: ['./we-upload-file.component.css']
})
export class WeUploadFileComponent implements OnInit {
  @Input() type: string = "";
  @Input() accept: string = "";
  @Input() label = "";
  @Input() inputDisabled: boolean = false;
  @Input() inputRequired = false;
  @Output() onInput: EventEmitter<any>;
  @Output() onChange: EventEmitter<any>;
  hide = false;
  constructor() {
    this.onInput = new EventEmitter();
    this.onChange = new EventEmitter();
   }

  ngOnInit(): void {
  }


  input(event: any) {
    this.onInput.emit(event);
  }

  change(event: any) {
    this.onChange.emit(event);
  }
}
