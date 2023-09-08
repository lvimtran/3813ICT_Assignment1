import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private apiUrl = 'http://localhost:3000/api/groups';
  constructor(private http: HttpClient) { }

  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createGroup(group: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, group);
  }

  createChannel(groupId: string, channelName: string): Observable<any> {
    return this.http.post(`/api/group/${groupId}/create-channel`, { channelName });
  }

  removeGroup(groupId: string): Observable<any> {
    return this.http.delete(`/api/group/${groupId}/remove`);
  }

  removeChannel(groupId: string, channelId: string): Observable<any> {
    return this.http.delete(`/api/group/${groupId}/remove-channel/${channelId}`);
  }

  removeUserFromGroup(userId: string, groupId: string): Observable<any> {
    return this.http.post(`/api/user/${userId}/remove-from-group/${groupId}`, {});
  }

  // Delete a chat user (from a group they administer)
  deleteChatUser(userId: string): Observable<any> {
    return this.http.delete(`/api/user/${userId}/delete-profile`);
  }

  // Ban a user from a channel and report to super admins
  banUserFromChannel(userId: string, channelId: string): Observable<any> {
    return this.http.post(`/api/user/${userId}/ban-from-channel/${channelId}`, {});
  }
}
