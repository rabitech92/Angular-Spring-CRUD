import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  standalone: false,
  templateUrl: './patient.html',
  styleUrl: './patient.css'
})
export class Patient {

  count = 0;
  increament(){
    this.count++;
  }

}
