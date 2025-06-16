import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user/user-service';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  registrationForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


onSubmit(): void {
  if (this.registrationForm.valid) {
    const user: User = this.registrationForm.value as User; // Type assertion
    this.userService.save(user).subscribe({
      next: (response) => {
        this.successMessage = 'Registration successful!';
        this.errorMessage = null;
        this.registrationForm.reset();
      },
      error: (error) => {
        this.errorMessage = 'Registration failed. Please try again.'; // Fixed message
        this.successMessage = null;
        console.error('Registration error:', error);
      }
    }); // Added missing parenthesis
  }
}
  }

