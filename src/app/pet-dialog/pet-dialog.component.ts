import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {UserServiceService} from '../services/user-service.service';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import {EditardialogComponent} from '../editardialog/editardialog.component'

@Component({
  selector: 'app-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrls: ['./pet-dialog.component.scss']
})
export class PetDialogComponent implements OnInit {
  id: string = "";
  petData: any = [];
  users: any[];
  user: string = "";
  userData: any = [];
  nIcons = [];
  auxFeature: any = ['afecto','agresivo','amigable','energia','jugueton'];

  constructor(
    private firestoreService: UserServiceService,
    protected dialogRef: NbDialogRef<PetDialogComponent>,
    private dialog: NbDialogService
  ) { }

  ngOnInit(): void {
    console.log('Llega este id ' + this.id);
    console.log('Con este name ' + this.petData.nombre);
    console.log('Usuario: '+ this.user)
    
    this.firestoreService.gets().subscribe((Snapshot) => {
      this.users = [];
      Snapshot.forEach((Data: any) => {
        this.users.push({
          id: Data.payload.doc.id,
          data: Data.payload.doc.data()
        });
      })
      var index:number = this.users.indexOf(this.users.find(us => us.id == this.user));
      this.userData = this.users[index].data;
      console.log(this.userData.nombre);
    });

    this.auxFeature['afecto'] = this.arrayStars(this.getNStars(this.petData.afectuoso));
    this.auxFeature['agresivo'] = this.arrayStars(this.getNStars(this.petData.agresivo));
    this.auxFeature['amigable'] = this.arrayStars(this.getNStars(this.petData.amigable));
    this.auxFeature['energia'] = this.arrayStars(this.getNStars(this.petData.energia));
    this.auxFeature['jugueton'] = this.arrayStars(this.getNStars(this.petData.jugueton));
  }

  Modificar():void{
    Swal.fire({
      title:"Modificar datos",
      input: "text",
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      inputPlaceholder:"Ingresa tu código de verificación",
    }).then((result) => {
      if(result.isConfirmed){
        if(result.value === ""){
          Swal.fire({
            title:"Error",
            icon:"error",
            text:"Debes ingresar un código válido",
            confirmButtonText:"Aceptar"
          })
        }
        else{
          if(result.value === this.user){
            this.cerrar();
            this.editar(this.id,this.petData,this.user);
          }
          else{
            Swal.fire({
              title:"Error",
              icon:"error",
              text:"Debes ingresar el código que recibiste",
              confirmButtonText:"Aceptar"
            })
          }
        }
      }
      else{
        this.cerrar();
      }
    }) 
  }

  cerrar(){
    this.dialogRef.close();
  }

  editar(id,petData,user){
    this.dialog.open(EditardialogComponent,{
      context: {
        id,petData,user
      },
    });
  }

  parsear(fecha){
    const date = fecha.toDate().toLocaleDateString('es-ES');
    return date;
  }

  getUser(us){
    return us;
  }

  getNStars(feature){
    let nStars = 0;
    switch(feature){
      case 'Nulo':
        nStars = 0;
        break;
      case 'Muy Poco':
        nStars = 1;
        break;
      case 'Poco':
        nStars = 2;
        break;
      case 'Medio':
        nStars = 3;
        break;
      case 'Suficiente':
        nStars = 4;
        break;
      case 'Mucho':
        nStars = 5;
        break;
    }
  return nStars;
  }

  arrayStars(n){
    var array = new Array();
    for(var i = 0; i < n; i++){
      array.push('star');
    }
    return array;
  }

}
