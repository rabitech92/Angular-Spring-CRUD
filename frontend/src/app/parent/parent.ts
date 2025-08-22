import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {

  receiveFromChild = '';

  dataAccept(newData:string){
    this.receiveFromChild = newData;
  }

  header = 'Student Details'

  parentName = 'Parent data are show';



}
