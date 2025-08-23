import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: false,
  templateUrl: './life-cycle-hooks.html',
  styleUrl: './life-cycle-hooks.css'
})
export class LifeCycleHooks implements OnChanges {

  @Input('simpleName') simpleInput  = '';

  ngOnChanges(change : SimpleChanges ): void{
    for(let propertyName in change){
      let changeItem = change[propertyName];
      let current = JSON.stringify(changeItem.currentValue);
      let previous = JSON.stringify(changeItem.previousValue);
      console.log(propertyName+"current Value : "+ current+" previous : "+ previous);
      
    }


  }

}
