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
                    petData: {nombre:string,edad:string,raza:string,color:string,
                              genero:string,f_registro:string,afectuoso:string,foto:string,
                              agresivo:string,amigable:string,energia:string,jugueton:string,
                              adoptador:string},img:File)
  {
    this.firestore.collection('usuario').add(userData).then(docRef => {
      let filepath = `imagenes/${img.name}_${new Date().getTime()}`; //Evitar Duplicados
      const ref = this.storage.ref(filepath);
      this.storage.upload(filepath, img).then(ref => {
        var date = new Date();
        petData.f_registro = date.toLocaleDateString();
        petData.foto = ref.toString();
        petData.adoptador = docRef.id;
        this.firestore.collection('mascota').add(petData);
      });
    });
  }
  public getRefID(){
    console.log('auxID' + this.auxID);
    return this.auxID;
  }
}
