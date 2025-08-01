import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { __read } from 'tslib';
import { Patient } from './patient/patient';
import { Doctor } from './doctor/doctor';
import { Mysoft } from './mysoft/mysoft';
import { Test } from './test/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('frontend');
  // classname =['six','seven','eight','nine']

  // name = "Rabiul Islam"


  //  getName() {
  //  return this.name ;
    
  // }
  // nature_image = 'https://cdn.pixabay.com/photo/2025/06/09/16/27/animal-9650392_1280.jpg'


  // emp_info={
  //   name : "Rabiul islam",
  //   address : "Dhaka",
  //   mobile : "01734467273",
  //   age : "33",
  //   nid : "123456789"

  // }

  // emp_salary = {
  //   name :"Rabiul islam",
  //   id :"E00312",
  //   salary :30000,
  //   bonus :15000,
  // }

  @ViewChild('clander',{read:ElementRef,static:true}) clander! : ElementRef;
  @ViewChild('input',{read:ElementRef,static:true}) input! : ElementRef;
  @ViewChild(Patient) patient !: Patient;
  @ViewChild(Doctor) doctor! : Doctor;
  @ViewChild(Mysoft) mysoft! : Mysoft;
  @ViewChild(Test) test! : Test;

  ngOnInit():void{
    console.log(this.clander);
    
  }

  ngAfterViewInit():void{

console.log(this.patient);
console.log(this.doctor);
console.log(this.doctor);
console.log(this.mysoft);

    
  }

  loadlender(){
    console.log(this.clander.nativeElement.value);
    this.input.nativeElement.value = this.clander.nativeElement.value;
    
  }

  add(){
    this.patient.increament();
  }

  msg(){
    this.doctor.increase();
  }
  boom(){
    this.mysoft.tic();
  }
  molom(){
    this.test.add();
  }
}
