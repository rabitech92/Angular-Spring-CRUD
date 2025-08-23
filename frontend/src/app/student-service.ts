import { Injectable } from '@angular/core';
import { IStudent } from './parent/IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   getStudent(): IStudent[] {
    return [
      { id: 'stu01', name: 'Rabiul', email: 'rabiuljnu92@gmail.com', gender: 'male' },
      { id: 'stu02', name: 'Sinha', email: 'sinha@gmail.com', gender: 'male' },
      { id: 'stu03', name: 'Uzayer', email: 'rabiuljnu92@gmail.com', gender: 'male' },
      { id: 'stu04', name: 'Ifti', email: 'rabiuljnu92@gmail.com', gender: 'male' }
    ];
  }
  constructor(){}

  
}
