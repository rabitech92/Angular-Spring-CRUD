import { Component, OnInit } from '@angular/core';
import { IStudent } from '../parent/IStudent';
import { StudentService } from '../student-service';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {
  students: IStudent[];


  constructor(private studentService: StudentService) {
    this.students = studentService.getStudent();
  }


  ngOnInit(): void {

  }


}
