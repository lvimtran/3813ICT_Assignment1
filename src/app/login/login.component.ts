import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  email: string = '';

  constructor(private authService: AuthService, private router: Router){}

  login(): void{
    this.authService.login(this.username, this.password).subscribe(
      (user) => {
        //Store user data
        localStorage.setItem("user", JSON.stringify(user));
        //Redirect the user to chat page
        this.router.navigate(['/chat']);
      }, (error) => {
        this.errorMessage = "Login failed"
        this.password = '';
      }
    )
  }
}
