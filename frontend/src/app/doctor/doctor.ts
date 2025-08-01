import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  standalone: false,
  templateUrl: './doctor.html',
  styleUrl: './doctor.css'
})
export class Doctor {

  hello = 0;
  increase(){
    this.hello++;
  }

}
