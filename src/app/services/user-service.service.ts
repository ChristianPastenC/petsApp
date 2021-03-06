import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private auxID = '';

  constructor(private firestore: AngularFirestore,
              private storage: AngularFireStorage,
              private toastr: NbToastrService,) {}

  public get(documentId: string) {
    console.log('Entrando al get General');
    return this.firestore.collection('usuario').doc(documentId).snapshotChanges();
  }
  public gets() {
    return this.firestore.collection('usuario').snapshotChanges();
  }
  
  public sendEmail(id, mail, name, pet){
    emailjs.init('user_BcMToieYpL71lncIhDOBv');
    emailjs.send("service_2vb8gw4","buscandounhogar_3gi35f9",{
      to_name: name,
      pet_name: pet,
      id: id,
      to_email: mail,
    });
  }

  public showNotif(status,position,preventDuplicates,destroyByClick){
    this.toastr.show("Guardado", 'Sus datos fueron registrados correctamente', { status, position, preventDuplicates, destroyByClick });
  }

  public insertData(userData: {nombre: string, telefono: string, correo: string}, 
                    petData: {tipo:string,nombre:string,edad:string,raza:string,color:string,
                              genero:string,f_registro:string,afectuoso:string,foto:string,
                              agresivo:string,amigable:string,energia:string,jugueton:string,
                              adoptador:string},img:File)
  {
    this.firestore.collection('usuario').add(userData).then(docRef => {
      this.showNotif('success','top-left', true, true);
      let filepath = `imagenes/${img.name}_${new Date().getTime()}`; //Evitar Duplicados
      const ref = this.storage.ref(filepath);
      this.storage.upload(filepath, img).then(() => {
        ref.getDownloadURL().toPromise().then((res => {
          var date = new Date();
          petData.f_registro = date.toLocaleDateString();
          petData.foto = res;
          petData.adoptador = docRef.id;
          this.sendEmail(docRef.id,userData.correo,userData.nombre,petData.nombre);
          this.firestore.collection('mascota').add(petData);
        }));
      });
    });
  }
  public getRefID(){
    console.log('auxID' + this.auxID);
    return this.auxID;
  }

  public updateData(iduser, phone, idpet, oldImg, newImg:File, aux:boolean,
                    petData: {edad:string,raza:string,afectuoso:string,
                              agresivo:string,amigable:string,energia:string,jugueton:string, foto:string})
  {
    if(aux == true){
      this.storage.refFromURL(oldImg).delete();
      let filepath = `imagenes/${newImg.name}_${new Date().getTime()}`;
      const ref = this.storage.ref(filepath);
      this.storage.upload(filepath, newImg).then(() => {
        ref.getDownloadURL().toPromise().then((res => {
          petData.foto = res;
          this.firestore.collection('usuario').doc(iduser).update({telefono : phone});
          this.firestore.collection('mascota').doc(idpet).update(petData); 
        }));
      });
    }else{
      petData.foto = oldImg;
      this.firestore.collection('usuario').doc(iduser).update({telefono : phone});
      this.firestore.collection('mascota').doc(idpet).update(petData); 
    }
  }

  public deleteData(idpet,iduser,refFoto){
    this.storage.refFromURL(refFoto).delete();
    this.firestore.collection('mascota').doc(idpet).delete();
    this.firestore.collection('usuario').doc(iduser).delete();
  }
}
