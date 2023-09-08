import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit{
  userIdToPromote: string = '';
  userIdToRemove: string = '';
  userIdToUpgrade: string = '';
  users: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  promoteUser(userId: string): void {
    this.userService.promoteToGroupAdmin(userId).subscribe(
      (response) => {
        if (response && response.success) {
          const updateUser = this.users.find((user: { id: string; }) => user.id === userId)
          if (updateUser){
            updateUser.role = "Group Admin";
          }
        } else {
          alert("Promote user to group admin failed.")
        }
      }, (error) => {
        alert("Promote user to group admin failed.")
      }
    )
  }

  removeUser(userId: string): void{
    this.userService.removeUser(userId).subscribe(
      (response) => {
        if (response && response.success){
          this.users = this.users.filter((user: { id: string; })=> user.id !== userId);
          console.log("User removed successfully")
        } else {
          alert("Failed to remove user")
        }
      }, (error) => {
        alert("Failed to remove user")
      }
    )
  }

  upgradeToSuperAdmin(userId: string): void{
    this.userService.upgradeToSuperAdmin(userId).subscribe(
      (response) => {
        if(response && response.success) {
          const updateUser = this.users.find((user: { id: string; }) => user.id === userId);
          if (updateUser) {
            updateUser.role = "Super Admin";
          }
          console.log("Upgrade to Super Admin successfully")
        } else {
          alert("Upgrade to Super Admin failed")
        }
      }, (error) => {
        alert("Upgrade to Super Admin failed")
      }
    )
  }
}
