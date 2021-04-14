import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private firestore: AngularFirestore) {}

  public get(documentId: string) {
    return this.firestore.collection('usuario').doc(documentId).snapshotChanges();
  }
  public gets() {
    return this.firestore.collection('usuario').snapshotChanges();
  }
}
