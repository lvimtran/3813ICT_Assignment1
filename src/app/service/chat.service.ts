import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = "yourServerApiUrl"
  constructor(private http: HttpClient) { }

  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/groups`)
  }

  getMessages(channelId: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/channels/${channelId}/messages`)
  }

  sendMessage(message: any, channelId: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/channels/${channelId}/messages`,message)
  }
}
