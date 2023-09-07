import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){}
  
  userList = [
    {username: 'lvimtran', email: 'lvmytran@gmail.com', password: '123456'},
    {username: 'abcde', email: 'abcd@gmail.com', password: '654321'},
    {username: 'vydang', email: 'vydang@gmail.com', password: '231122'}
  ]
  
  username = '';
  email = '';
  password = '';

  submit() {
    if (this.userList.some((e)=> e.password === this.password && e.email === this.email)){
      alert("Success!")
      this.router.navigateByUrl("/account");
    } else {
      alert("Fail.")
    }
  }
}
