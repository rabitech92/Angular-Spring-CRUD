import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedirective',
  standalone: false,
  templateUrl: './pipedirective.html',
  styleUrl: './pipedirective.css'
})
export class Pipedirective {

  pipeClass = "Rabiul Islam is works with pipe";
  dob : string = "23/08/2025";

  amount = 10.60/100;

}
