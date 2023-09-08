import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { GroupComponent } from './group/group.component';
import { ChatComponent } from './chat/chat.component';
import { AccountComponent } from './account/account.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { GroupAdminComponent } from './group-admin/group-admin.component';
import { ChatUserComponent } from './chat-user/chat-user.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'group/:groupId', component: GroupComponent},
  {path: 'account', component: AccountComponent},
  {path: 'user-registration', component: UserRegistrationComponent},
  {path: 'chat', component: ChatComponent},
  {path: '', redirectTo: '/chat', pathMatch: "full"},
  {path: 'superAdmin', component: SuperAdminComponent},
  {path: 'groupAdmin', component: GroupAdminComponent},
  {path: 'chatUser', component: ChatUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
