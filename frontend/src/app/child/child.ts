import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {

  @Input() inputEvent: string = '';
  @Output() outpuEvent = new EventEmitter<string>();

  changeData(){
    this.outpuEvent.emit('Hello text form child to parent output data')
  }

}
