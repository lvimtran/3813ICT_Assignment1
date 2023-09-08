import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  user: User = new User();
  constructor(private userService: UserService, private router: Router){}
  
  registerUser(): void{
    this.userService.addUser(this.user).subscribe(
      (response) => {
        console.log("User registered successfully", response);
        alert("User registered successfully")
        this.router.navigate(['/account'])
      }, (error) => {
        console.error('Registration failed', error);
        alert("Registration failed.")
      }
    )
  }
}
