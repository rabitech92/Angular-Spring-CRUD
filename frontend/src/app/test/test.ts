import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {


  @ViewChild('testTemplete',{read:ElementRef,static:true}) testTemplete! : ElementRef;
  @ViewChild('fetch',{read:ElementRef,static:true}) fetch! : ElementRef;


  today = 0;
  add(){
    this.today++
  }

  load(){
    console.log(this.testTemplete.nativeElement);
    this.fetch.nativeElement.value = this.testTemplete.nativeElement.value
    
  }
}
