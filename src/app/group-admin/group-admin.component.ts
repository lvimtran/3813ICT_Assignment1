import { Component } from '@angular/core';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-group-admin',
  templateUrl: './group-admin.component.html',
  styleUrls: ['./group-admin.component.css']
})
export class GroupAdminComponent {
  groupName: string = '';
  channelName: string = '';
  groupIdToRemove: string = '';
  channelIdToRemove: string = '';
  userIdToRemove: string = '';
  groupId: string = '';

  constructor(private groupService: GroupService) {}

  createGroup(): void {
    this.groupService.createGroup(this.groupName).subscribe(
      (response) => {
        console.log('Group created successfully');
      },
      (error) => {
        console.error('Failed to create group');
      }
    );
  }

  createChannel(groupId: string): void {
    this.groupService.createChannel(groupId, this.channelName).subscribe(
      (response) => {
        console.log('Channel created successfully');
      },
      (error) => {
        console.error('Failed to create channel');
      }
    );
  }

  removeGroup(groupId: string): void {
    this.groupService.removeGroup(groupId).subscribe(
      (response) => {
        console.log('Group removed successfully');
      },
      (error) => {
        console.error('Failed to remove group');
      }
    );
  }

  removeChannel(groupId: string, channelId: string): void {
    this.groupService.removeChannel(groupId, channelId).subscribe(
      (response) => {
        console.log('Channel removed successfully');
      },
      (error) => {
        console.error('Failed to remove channel');
      }
    );
  }

  removeUserFromGroup(userId: string, groupId: string): void {
    this.groupService.removeUserFromGroup(userId, groupId).subscribe(
      (response) => {
        console.log('User removed from group successfully');
      },
      (error) => {
        console.error('Failed to remove user from group');
      }
    );
  }

  deleteChatUser(userId: string): void {
    this.groupService.deleteChatUser(userId).subscribe(
      (response) => {
        console.log('Chat user deleted successfully');
      },
      (error) => {
        console.error('Failed to delete chat user');
      }
    );
  }

  banUserFromChannel(userId: string, channelId: string): void {
    this.groupService.banUserFromChannel(userId, channelId).subscribe(
      (response) => {
        console.log('User banned from channel successfully');
      },
      (error) => {
        console.error('Failed to ban user from channel');
      }
    );
  }
}
