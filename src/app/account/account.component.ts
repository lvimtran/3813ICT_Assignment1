import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  user: any = {};

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void{
    this.user = this.userService.getUsers();
  }

  logout(): void{
    this.authService.logout();
  }

  deleteAccount(): void{
    if(confirm("Are you sure to delete your account?")){
      const userId = this.user.id;
      this.userService.deleteAccount(userId).subscribe(
        () => {
          this.router.navigate(['/user-registration'])
        }, (error) => {
          alert("Delete account failed.")
        }
      );
    }
  }
}
