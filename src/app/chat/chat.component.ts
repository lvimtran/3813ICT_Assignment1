import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';
import { UserService } from '../service/user.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  newMessage = '';
  groups: any[] = [];
  selectedChannel: any;
  channel: any[] = []

  constructor(
    private socket: Socket,
    private chatService: ChatService,
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.socket.on("Chat message", (message: any) => {
      this.messages.push(message);
    });

    this.chatService.getGroups().subscribe((groups) => {
      this.groups = groups
    });
    this.chatService.getMessages("yourChannelId").subscribe((messages) => {
      this.messages = messages;
    });
  }

  selectChannel(channel: any): void{
    this.selectedChannel = channel;
  }

  sendMessage(): void{
    const currentUser = this.userService.getUsers();
    const message = {
      user: currentUser,
      content: this.newMessage
    };

    this.socket.emit("Chat message", message.content);
    this.chatService.sendMessage(message, this.selectedChannel);
    this.newMessage = ''
  }
}
