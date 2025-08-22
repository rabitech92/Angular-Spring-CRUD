import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  standalone: false,
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.css'
})
export class StructuralDirective {

  channel   = "Structure directives";
  names = ["Rabiul","Sinha","Uzayer","Ifti","Azmol"];

  fruts = "Banana"

}
