import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-void-button',
  standalone: false,
  templateUrl: './void-button.html',
  styleUrl: './void-button.css'
})
export class VoidButton implements OnInit {

  @Input() text! : string;
  @Input() btnClass! : string;
  @Output() OnClick = new EventEmitter<string>();

  button ="Hello";

  constructor(){

  }

  ngOnInit(): void {
      
  }

  emitEvent(){
    this.OnClick.emit('Test Void Emit')
  }

}
