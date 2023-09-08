import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  //Implement Login functionality
  //Send POST request to server for user authentication
  login(username: string, password: string): Observable<any>{
    const body = {username, password};
    return this.http.post("/api/login", body)
  }

  //Implement User registration
  //Send POST request to server to create a new user account
  register(username: string, password: string): Observable<any>{
    const body = {username, password}
    return this.http.post("/api/register", body)
  }

  logout(): void{
    localStorage.removeItem("user");
    this.router.navigate(['/login'])
  }
}
