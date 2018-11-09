import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  user: User;

  constructor() {
    this.loadStorageUser();
  }
  // GETTER and SETTER functions
  getUser(): User {
    return this.user;
  }
  setUser(nick: string, name: string, lastName: string, age: number, email: string): User {
    this.user.nick = nick;
    this.user.name = name;
    this.user.lastName = lastName;
    this.user.age = age;
    this.user.email = email;
    this.saveStorageUser();
    return this.user;
  }


  // ************************************************************ //
  // MANAGE THE STORAGE
  saveStorageUser() {
    localStorage.setItem('myUser', JSON.stringify(this.user));
  }
  loadStorageUser() {
    if (localStorage.getItem('myUser')) {
      this.user = JSON.parse(localStorage.getItem('myUser'));
    } else {
      this.user = null;
    }
  }
  // ************************************************************ //
}

export interface User {
  nick: string;
  name: string;
  lastName: string;
  age: number;
  email: string;
}