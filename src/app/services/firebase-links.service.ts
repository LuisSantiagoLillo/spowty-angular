import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLinksService {
  private itemsCollection: AngularFirestoreCollection<any>;
  public arrayLinks: any[] = [];


  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<any>('links');
}

loadLinks() {
      return this.itemsCollection.valueChanges().subscribe( (links: any[]) => {
        this.arrayLinks = links;
      });
    }

}
