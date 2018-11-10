import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserProfileService } from './user-profile.service';


@Injectable({
  providedIn: 'root'
})
export class ReportIssuesService {
  private itemsCollection: AngularFirestoreCollection<Report>;

  constructor(
    private afs: AngularFirestore,
    public _userService: UserProfileService
  ) {
    this.itemsCollection = this.afs.collection<Report>('reports');
  }

  addReport(title: string, message: string) {
    let report: Report = {
      uid: this._userService.user.uid,
      title: title,
      message: message,
      fecha: new Date().getTime()
    };
    return this.itemsCollection.add( report );
  }

}


export interface Report {
  uid: string;
  title: string;
  message: string;
  fecha: number;
}
