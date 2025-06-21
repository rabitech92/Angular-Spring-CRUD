import { Component } from '@angular/core';
import { UserInfo } from '../../model/user/user-info.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})
export class UserComponent {

  userForm : FormGroup;
  constructor(
    private fb : FormBuilder,
    private userService : UserService,
    private router : Router

  ){
    this.userForm = this.fb.group({
      userName : ['',Validators.required],
      email : ['', [Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(8)]]

    });

  }

  onSubmit():void{
    if (this.userForm.valid) {
      const user : UserInfo = this.userForm.value;
      this.userService.createUser(user).subscribe({
        next: () => {
          this.router.navigate(['/success']);
        },
        error:(err) =>{
          console.error('Error creating user:',err)
        }
      })

    }
  }

}
