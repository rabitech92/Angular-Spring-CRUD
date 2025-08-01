import { Component } from '@angular/core';

@Component({
  selector: 'app-mysoft',
  standalone: false,
  templateUrl: './mysoft.html',
  styleUrl: './mysoft.css'
})
export class Mysoft {
good = 0;
tic(){
  this.good++;
}
}
