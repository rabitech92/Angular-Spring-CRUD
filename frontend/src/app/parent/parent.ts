import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
childData = '';

textChange(msg:string):void{
  // console.log('Hello Text child to parent data from child output ');
  this.childData = msg;
  
}


}
