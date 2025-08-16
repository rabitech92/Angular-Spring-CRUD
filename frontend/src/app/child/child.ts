import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {

  @Input() reciveData :string = '';
  @Output() sendData  = new EventEmitter<string>();

  changeChild(){
    this.sendData.emit('Hello Text from child to parent');
  }



}
