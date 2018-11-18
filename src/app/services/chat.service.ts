import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserProfileService } from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  constructor(
    private afs: AngularFirestore,
    public _userService: UserProfileService
    ) { }

  loadMessages() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(50));
    // Devuelvo un observable al que me puedo subscribir
    return this.itemsCollection.valueChanges().subscribe( (messages: Mensaje[]) => {
      this.chats = [];
      messages.forEach(element => {
        this.chats.unshift(element);
      });
  });
    /*
      .map( (mensajes: Mensaje[] ) => {
        console.log(mensajes);
      });
      */
  }

  addMessage( texto: string ){
    let mensaje: Mensaje = {
      nombre: this._userService.user.name,
      mensaje: texto,
      fecha: new Date().getTime(),
      photo: this._userService.user.photo,
      uid: this._userService.user.uid
    };
    return this.itemsCollection.add( mensaje );
  }

}


export interface Mensaje {
  nombre: string;
  mensaje: string;
  fecha: number;
  photo: string;
  uid: string;
}
