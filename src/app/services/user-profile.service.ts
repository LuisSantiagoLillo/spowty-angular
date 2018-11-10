import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { RouterModule, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  user: User = {
    nick: '',
    name: '',
    email: '',
    uid: ''
  };
  private itemsCollection: AngularFirestoreCollection<User>;

  userlogged: boolean = false;

  constructor(
    private afs: AngularFirestore, public afAuth: AngularFireAuth, private router: Router
  ) {
    this.loadStorageUser();
    this.afAuth.authState.subscribe(userAuth => {
      if (!userAuth) {
        this.userlogged = false;
        return;
      }
      this.userlogged = true;
      if (!localStorage.getItem('myUser')) {
        this.setUser(userAuth.displayName, userAuth.displayName, null, null, userAuth.email, userAuth.uid );
      }

    });
  }
  // GETTER and SETTER functions
  getUser(): User {
    return this.user;
  }
  setUser(nick: string, name: string, lastName: string, age: number, email: string, uid: string): User {
    this.user.nick = nick;
    this.user.name = name;
    this.user.lastName = lastName;
    this.user.age = age;
    this.user.email = email;
    this.user.uid = uid;
    this.saveStorageUser();
    return this.user;
  }

  // User Authentication with AUTH FIRE BASE
  googleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
    this.removeStorageUser();
    this.router.navigate(['/home']);
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
      this.user.nick = '';
      this.user.name = '';
      this.user.lastName = null;
      this.user.age = null,
      this.user.email = '';
      this.user.uid = '';
    }
  }
  removeStorageUser() {
    localStorage.removeItem('myUser');
  }
  // ************************************************************ //
}

export interface User {
  nick: string;
  name: string;
  lastName?: string;
  age?: number;
  email: string;
  uid: string;
}