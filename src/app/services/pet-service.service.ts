import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  constructor(private firestore: AngularFirestore) {}

  public get(documentId: string) {
    return this.firestore.collection('mascota').doc(documentId).snapshotChanges();
  }
  public gets() {
    return this.firestore.collection('mascota').snapshotChanges();
  }
}