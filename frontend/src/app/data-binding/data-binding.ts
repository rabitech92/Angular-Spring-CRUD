import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  @Input() property !: string;

  hello = 'Data pass to templete stning interpolation';
  public myId : string = ' This is my id';
  buttonTextSize : number = 20;
  applyBold : string = 'bold';

  count : number = 0;
  name = '';

mltipleCss():any{
  var style = {
    'font-size-.px' : this.buttonTextSize,
    'font-weight' : this.applyBold,
    
  };
  return this.mltipleCss;

}

countChange(){
  this.count++;
}

}
