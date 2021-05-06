import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private auxID = '';

  constructor(private firestore: AngularFirestore,
              private storage: AngularFireStorage) {}

  public get(documentId: string) {
    console.log('Entrando al get General');
    return this.firestore.collection('usuario').doc(documentId).snapshotChanges();
  }
  public gets() {
    return this.firestore.collection('usuario').snapshotChanges();
  }
  public insertData(userData: {nombre: string, telefono: string, correo: string}, 
    petData: {nombre:string,edad:string,raza:string,color:string,genero:string,f_registro:string,
              afectuoso:string,agresivo:string,amigable:string,energia:string,jugueton:string, adoptador:string} )
  {
    this.firestore.collection('usuario').add(userData).then(docRef => {
      var date = new Date();
      petData.f_registro = date.toLocaleDateString();
      petData.adoptador = docRef.id;
      this.firestore.collection('mascota').add(petData);
    });
  }
  public getRefID(){
    console.log('auxID' + this.auxID);
    return this.auxID;
  }
}
