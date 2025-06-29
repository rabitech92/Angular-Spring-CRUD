import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Route } from '@angular/router';
import { log } from 'console';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-user-create',
  standalone: false,
  templateUrl: './user-create.html',
  styleUrl: './user-create.css'
})
export class UserCreate {
  userFrom: FormGroup | undefined;

  constructor(
    private fb : FormBuilder,
    private userService : UserService,
    private router : Route){}

    ngOnInit(){
    this.userFrom = this.fb.group({
      userName : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      password : ['',Validators.required]

    });
  }
  createUser(){
    console.log(this.userFrom.value);
    this.userService.createUser(this.userFrom.value).subscriber((res) =>{
      console.log(res);

    })

  }

}
