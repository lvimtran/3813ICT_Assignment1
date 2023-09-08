import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent {
  username: string = '';
  selectedGroupId: string = '';
  selectedChannelId: string = '';
  groups: any[] = []; // An array to store user's groups
  channels: any[] = []; // An array to store channels in the selected group

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  createUser(): void {
    this.userService.createUser(this.username).subscribe(
      (response) => {
        if (response && response.success) {
          console.log('Chat user created successfully');
        } else {
          alert('Failed to create a chat user');
        }
      },
      (error) => {
        alert('Failed to create a chat user');
      }
    );
  }

  joinChannel(userId: string, channelId: string): void {
    this.userService.joinChannel(userId, channelId).subscribe(
      (response) => {
        if (response && response.message) {
          console.log(response.message);
          alert("Join channel successfully")
        } else {
          console.error('Failed to join the channel');
        }
      },
      (error) => {
        alert("Join channel failed")
      }
    );
  }

  registerInterest(userId: string, groupId: string): void {
    this.userService.registerInterest(userId, groupId).subscribe(
      (response) => {
        if (response && response.message) {
          alert("Register interest in the group successfully")
          console.log(response.message);
        } else {
          console.error('Failed to register interest in the group');
        }
      },
      (error) => {
        alert("Register interest in the group failed")
      }
    );
  }

  leaveGroup(groupId: string): void {
    this.userService.leaveGroup(groupId).subscribe(
      (response) => {
        if (response && response.success) {
          console.log('Left the group successfully');
          alert("Left the group successfully");
          this.router.navigate(['/login']);
        } else {
          alert('Failed to leave the group');
        }
      },
      (error) => {
        alert('Failed to leave the group');
      }
    );
  }
}
