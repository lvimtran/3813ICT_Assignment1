import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'assignment';
}

export class LocalStorageService {
  setItem(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any{
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) :null;
  }

  removeItem(key: string){
    localStorage.removeItem(key);
  }
}
