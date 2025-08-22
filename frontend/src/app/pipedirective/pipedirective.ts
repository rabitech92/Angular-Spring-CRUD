import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedirective',
  standalone: false,
  templateUrl: './pipedirective.html',
  styleUrl: './pipedirective.css'
})
export class Pipedirective {

  pipeClass = "Rabiul Islam is a softwere Engenier";
  dob : string = "23/08/2025";

}
