import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { AuthComponent } from './auth/auth.component';
import { GroupComponent } from './group/group.component';
import { ChatComponent } from './chat/chat.component';
import { SocketService } from './service/socket.service';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import { GroupListComponent } from './group-list/group-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { GroupAdminComponent } from './group-admin/group-admin.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
const socketIoConfig: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    AuthComponent,
    GroupComponent,
    ChatComponent,
    UserRegistrationComponent,
    GroupListComponent,
    UserListComponent,
    DashboardComponent,
    SuperAdminComponent,
    GroupAdminComponent,
    ChatUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(socketIoConfig),
  ],
  providers: [SocketService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
