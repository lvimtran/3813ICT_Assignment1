import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'yourServerApiUrl'
  private registerUrl = 'http://localhost:3000/api/auth/register';


  private readonly STORAGE_KEY = "chatUser";

  constructor(private http: HttpClient) {}

  // getUsers(): User[] {
  //   const storedUsers = localStorage.getItem(this.STORAGE_KEY);
  //   return storedUsers ? JSON.parse(storedUsers) : [];
  // }

  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/users`)
  }

  // addUser(user: User): void {
  //   const users = this.getUsers();
  //   users.push(user);
  //   localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users))
  // }

  addUser(user: User): Observable<any> {
    const url = 'http://localhost:3000/register'
    return this.http.post(url, user)
  }

  deleteAccount(userId: string): Observable<void> {
    const url = `${this.apiUrl}/users/${userId}`
    return this.http.delete<void>(url);
  }

  createUser(user: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, user);
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(this.registerUrl, user)
  }

  promoteToGroupAdmin(userId: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/promoteGroupAdmin/${userId}`, {});
  }

  removeUser(userId: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }

  upgradeToSuperAdmin(userId: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/upgradeSuperAdmin/${userId}`,{})
  }

  leaveGroup(groupId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/leaveGroup/${groupId}`, {});
  }

  joinChannel(userId: string, channelId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}/joinChannel/${channelId}`;
    return this.http.post(url, {});
  }

  registerInterest(userId: string, groupId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}/registerInterest/${groupId}`;
    return this.http.post(url, {});
  }
}
