import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rabiul',
  standalone: false,
  templateUrl: './rabiul.html',
  styleUrl: './rabiul.css'
})
export class Rabiul implements OnInit {

  @Input() rabiul! : string;
  @Input() uzayer! : string;
  @Output() parent = new EventEmitter<string>();



  constructor(){

  }
ngOnInit(){

}
rabiulEvent(){
  this.parent.emit('I am Rabiul Islam');
}
}
