import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  @Input() test: string='';
//child to parent communication
// @Output() 
//   notify:EventEmitter<string>=new EventEmitter<string>(); 


  constructor() { }

//child to parent communication
  // passData(){
  //   this.notify.emit("this massage is coming from child component")
  
  // } 
  ngOnInit(): void {
  }

}
