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
    photo: '',
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
        this.setUser(userAuth.displayName, userAuth.displayName, null, null, userAuth.email, userAuth.uid, userAuth.photoURL );
      }

    });
  }
  // GETTER and SETTER functions
  getUser(): User {
    return this.user;
  }
  setUser(nick: string, name: string, lastName: string, age: number, email: string, uid: string, photo: string): User {
    this.user.nick = nick;
    this.user.name = name;
    this.user.lastName = lastName;
    this.user.age = age;
    this.user.email = email;
    this.user.photo = photo;
    this.user.uid = uid;
    this.saveStorageUser();
    return this.user;
  }

  // User Authentication with AUTH FIRE BASE
  googleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  facebookLogin() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  twitterLogin() {
    this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.removeStorageUser();
        this.router.navigate(['/home']);
      })
      .catch((err) => {
          console.log(err);
      });
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
    const req = indexedDB.open('firebaseLocalStorageDb', 1);
    req.onsuccess = function() {
      const db = this.result;
      console.log('onsuccess');
      // db.close();
      console.log(db, db.name, db.objectStoreNames[0]);
      // var transaction = db.transaction(["customers"], "readwrite");
      const transaction = db.transaction('firebaseLocalStorage', 'readwrite');
      console.log(transaction.objectStoreNames);
      console.log(transaction.mode);
      console.log(db.onversionchange);
      db.onversionchange = function() {
        db.deleteObjectStore(db.objectStoreNames[0]);
        const reqDelete = indexedDB.deleteDatabase(db.name);
        reqDelete.onsuccess = function () {
            console.log('we ok');
        };
        reqDelete.onblocked = function () {
            console.log('onsuccess blocked');
        };
      };
    };
    req.onblocked = function () {
        const db = this.result;
        console.log('onblocked');
        db.close();
        const reqDelete = indexedDB.deleteDatabase('firebaseLocalStorageDb');
        reqDelete.onsuccess = function () {
            console.log('we ok');
        };
        reqDelete.onblocked = function () {
            console.log('onblocked blocked');
        };
    };
    req.onerror = function() {
      console.log('onerror');
    }
    req.onupgradeneeded = function() {
      console.log('onupdateerror');
    };
  }
  // ************************************************************ //
}

export interface User {
  nick: string;
  name: string;
  lastName?: string;
  age?: number;
  email: string;
  photo: string;
  uid: string;
}