import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  standalone: false,
  templateUrl: './parent-to-child.html',
  styleUrl: './parent-to-child.css'
})
export class ParentToChild implements OnInit {

  @Input("childData") name = '';

  ngOnInit(): void{
    
  }

}
