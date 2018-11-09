import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  constructor(
    private afs: AngularFirestore
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
    // TODO falta el UID del usuario
    let mensaje: Mensaje = {
      nombre: 'luis', // this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: 'asdasd' // this.usuario.uid
    };
    return this.itemsCollection.add( mensaje );
  }

}


export interface Mensaje {
  nombre: string;
  mensaje: string;
  fecha?: number;
  uid?: string;
}
