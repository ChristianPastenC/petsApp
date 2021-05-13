import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import Swal from 'sweetalert2';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-editardialog',
  templateUrl: './editardialog.component.html',
  styleUrls: ['./editardialog.component.scss']
})
export class EditardialogComponent implements OnInit {

  id: string = "";
  petData: any = [];
  user: string = "";
  users: any[];
  userData: any = [];
  nIcons = [];
  auxFeature: any = ['afecto','agresivo','amigable','energia','jugueton'];
  arrayAfectuoso: boolean[];
  arrayAgresivo: boolean[];
  arrayAmigable: boolean[];
  arrayEnergetico: boolean[];
  arrayJugueton: boolean[];
  infoForm: FormGroup;
  contacto: FormGroup;

  constructor(
    private firestoreService: UserServiceService,
    private fb: FormBuilder,
    private dialogRef: NbDialogRef<EditardialogComponent>
  ) { }

  ngOnInit(): void {
   
    this.arrayAfectuoso = [false, false, false, false, false];
    this.arrayAgresivo = [false, false, false, false, false];
    this.arrayAmigable = [false, false, false, false, false];
    this.arrayEnergetico = [false, false, false, false, false];
    this.arrayJugueton = [false, false, false, false, false];

    this.fillStars();

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
    });

    this.contacto = this.fb.group({
      telefono: ['', Validators.compose([Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.required])]
    });

    this.infoForm = this.fb.group({
      edad: [this.petData.edad, Validators.required],
      raza: [this.petData.raza, Validators.required]
    });
  }

  jsonConcat(j1, j2) {
    for (var key in j2) {
     j1[key] = j2[key];
    }
    return j1;
   }

  getScore(){
    let gralData = [];
    var afecto = 0, agresivo = 0, amigable = 0, energetico = 0, jugueton = 0;
    for(var i=0;i<this.arrayAfectuoso.length;i++){
      if(this.arrayAfectuoso[i] == true){
        afecto += 1;
      }else{
        break;
      }
    }
    
    for(var i= 0;i<this.arrayAgresivo.length;i++){
      if(this.arrayAgresivo[i] == true){
        agresivo += 1;
      }else{
        break;
      }
    }
    for(var i=0;i<this.arrayAmigable.length;i++){
      if(this.arrayAmigable[i] == true){
        amigable += 1;
      }else{
        break;
      }
    }
    for(var i=0;i<this.arrayEnergetico.length;i++){
      if(this.arrayEnergetico[i] == true){
        energetico += 1;
      }else{
        break;
      }
    }
    for(var i=0;i<this.arrayJugueton.length;i++){
      if(this.arrayJugueton[i] == true){
        jugueton += 1;
      }else{
        break;
      }
    }
    
    switch(afecto){
      case 0:
        gralData['afectuoso'] = 'Nulo';
        break;
      case 1:
        gralData['afectuoso'] = 'Muy poco';
        break;
      case 2:
        gralData['afectuoso'] = 'Poco';
        break;
      case 3:
        gralData['afectuoso'] = 'Medio';
        break;
      case 4:
        gralData['afectuoso'] = 'Suficiente';
        break;
      case 5:
        gralData['afectuoso'] = 'Mucho';
        break;
    }
    switch(agresivo){
      case 0:
        gralData['agresivo'] = 'Nulo';
        break;
      case 1:
        gralData['agresivo'] = 'Muy poco';
        break;
      case 2:
        gralData['agresivo'] = 'Poco';
        break;
      case 3:
        gralData['agresivo'] = 'Medio';
        break;
      case 4:
        gralData['agresivo'] = 'Suficiente';
        break;
      case 5:
        gralData['agresivo'] = 'Mucho';
        break;
    }
    switch(amigable){
      case 0:
        gralData['amigable'] = 'Nulo';
        break;
      case 1:
        gralData['amigable'] = 'Muy poco';
        break;
      case 2:
        gralData['amigable'] = 'Poco';
        break;
      case 3:
        gralData['amigable'] = 'Medio';
        break;
      case 4:
        gralData['amigable'] = 'Suficiente';
        break;
      case 5:
        gralData['amigable'] = 'Mucho';
        break;
    }
    switch(energetico){
      case 0:
        gralData['energia'] = 'Nulo';
        break;
      case 1:
        gralData['energia'] = 'Muy poco';
        break;
      case 2:
        gralData['energia'] = 'Poco';
        break;
      case 3:
        gralData['energia'] = 'Medio';
        break;
      case 4:
        gralData['energia'] = 'Suficiente';
        break;
      case 5:
        gralData['energia'] = 'Mucho';
        break;
    }
    switch(jugueton){
      case 0:
        gralData['jugueton'] = 'Nulo';
        break;
      case 1:
        gralData['jugueton'] = 'Muy poco';
        break;
      case 2:
        gralData['jugueton'] = 'Poco';
        break;
      case 3:
        gralData['jugueton'] = 'Medio';
        break;
      case 4:
        gralData['jugueton'] = 'Suficiente';
        break;
      case 5:
        gralData['jugueton'] = 'Mucho';
        break;
    }
  return gralData;
  }

  fillStars(){
    for(var i=0;i<this.getNStars(this.petData.afectuoso);i++){
      this.arrayAfectuoso[i]=true;
    }
    for(var i=0;i<this.getNStars(this.petData.agresivo);i++){
      this.arrayAgresivo[i]=true;
    }
    for(var i=0;i<this.getNStars(this.petData.amigable);i++){
      this.arrayAmigable[i]=true;
    }
    for(var i=0;i<this.getNStars(this.petData.energia);i++){
      this.arrayEnergetico[i]=true;
    }
    for(var i=0;i<this.getNStars(this.petData.jugueton);i++){
      this.arrayJugueton[i]=true;
    }
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

  actualizar(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    swalWithBootstrapButtons.fire({
      title: 'Confirmación',
      text: "¿Está seguro de guardar los datos?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        var tel = this.contacto.get('telefono').value;
        var info = this.infoForm.value;
        var gral = this.getScore();
        var petData = this.jsonConcat(info,gral);
        this.firestoreService.updateData(this.user,tel,this.id,petData);
        Swal.fire({
          title:"¡Exito!",
          text: "Los datos han sido actualizados",
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed){
            this.dialogRef.close();
          }
          
        })
      }
      else{
        return;
      }
    })
    
  }

  /*
    ----------------------------------------------------------------------
    ----------------------------------------------------------------------

    ----------------------------------------------------------------------
    ----------------------------------------------------------------------
  */
    afectoA(){
      if(this.arrayAfectuoso[1] == true){
        this.arrayAfectuoso[0] = true;
        this.arrayAfectuoso[1] = false;
        this.arrayAfectuoso[2] = false;
        this.arrayAfectuoso[3] = false;
        this.arrayAfectuoso[4] = false;
      }
    }
    
    afectoB(){
      if(this.arrayAfectuoso[1] == true){
        this.arrayAfectuoso[0] = true;
      }else{
        this.arrayAfectuoso[0] = false;
      }
      if(this.arrayAfectuoso[2] == true){
        this.arrayAfectuoso[0] = true;
        this.arrayAfectuoso[1] = true;
        this.arrayAfectuoso[2] = false;
        this.arrayAfectuoso[3] = false;
        this.arrayAfectuoso[4] = false;
      }
    }
  
    afectoC(){
      if(this.arrayAfectuoso[2] == true){
        this.arrayAfectuoso[0] = true;
        this.arrayAfectuoso[1] = true;
      }else{
        this.arrayAfectuoso[0] = false;
        this.arrayAfectuoso[1] = false;
      }
      if(this.arrayAfectuoso[3] == true){
        this.arrayAfectuoso[0] = true;
        this.arrayAfectuoso[1] = true;
        this.arrayAfectuoso[2] = true;
        this.arrayAfectuoso[3] = false;
        this.arrayAfectuoso[4] = false;
      }
    }
  
    afectoD(){
      if(this.arrayAfectuoso[3] == true){
        this.arrayAfectuoso[0] = true;
        this.arrayAfectuoso[1] = true;
        this.arrayAfectuoso[2] = true;
      }else{
        this.arrayAfectuoso[0] = false;
        this.arrayAfectuoso[1] = false;
        this.arrayAfectuoso[2] = false;
      }
      if(this.arrayAfectuoso[4] == true){
        this.arrayAfectuoso[0] = true;
        this.arrayAfectuoso[1] = true;
        this.arrayAfectuoso[2] = true;
        this.arrayAfectuoso[3] = true;
        this.arrayAfectuoso[4] = false;
      }
    }
  
    afectoE(){
      if(this.arrayAfectuoso[4] == true){
        this.arrayAfectuoso[0] = true;
        this.arrayAfectuoso[1] = true;
        this.arrayAfectuoso[2] = true;
        this.arrayAfectuoso[3] = true;
      }else{
        this.arrayAfectuoso[0] = false;
        this.arrayAfectuoso[1] = false;
        this.arrayAfectuoso[2] = false;
        this.arrayAfectuoso[3] = false;
      }
    }
  
    /*
      ----------------------------------------------------------------------
      ----------------------------------------------------------------------
  
      ----------------------------------------------------------------------
      ----------------------------------------------------------------------
    */
    agresivoA(){
      if(this.arrayAgresivo[1] == true){
        this.arrayAgresivo[0] = true;
        this.arrayAgresivo[1] = false;
        this.arrayAgresivo[2] = false;
        this.arrayAgresivo[3] = false;
        this.arrayAgresivo[4] = false;
      }
    }
  
    agresivoB(){
      if(this.arrayAgresivo[1] == true){
        this.arrayAgresivo[0] = true;
      }else{
        this.arrayAgresivo[0] = false;
      }
      if(this.arrayAgresivo[2] == true){
        this.arrayAgresivo[0] = true;
        this.arrayAgresivo[1] = true;
        this.arrayAgresivo[2] = false;
        this.arrayAgresivo[3] = false;
        this.arrayAgresivo[4] = false;
      }
    }
  
    agresivoC(){
     if(this.arrayAgresivo[2] == true){
       this.arrayAgresivo[0] = true;
        this.arrayAgresivo[1] = true;
      }else{
        this.arrayAgresivo[0] = false;
        this.arrayAgresivo[1] = false;
      }
      if(this.arrayAgresivo[3] == true){
        this.arrayAgresivo[0] = true;
        this.arrayAgresivo[1] = true;
        this.arrayAgresivo[2] = true;
        this.arrayAgresivo[3] = false;
        this.arrayAgresivo[4] = false;
      }
    }
  
    agresivoD(){
      if(this.arrayAgresivo[3] == true){
        this.arrayAgresivo[0] = true;
        this.arrayAgresivo[1] = true;
        this.arrayAgresivo[2] = true;
      }else{
        this.arrayAgresivo[0] = false;
        this.arrayAgresivo[1] = false;
        this.arrayAgresivo[2] = false;
      }
      if(this.arrayAgresivo[4] == true){
        this.arrayAgresivo[0] = true;
        this.arrayAgresivo[1] = true;
        this.arrayAgresivo[2] = true;
        this.arrayAgresivo[3] = true;
        this.arrayAgresivo[4] = false;
      }
    }
  
    agresivoE(){
      if(this.arrayAgresivo[4] == true){
        this.arrayAgresivo[0] = true;
        this.arrayAgresivo[1] = true;
        this.arrayAgresivo[2] = true;
        this.arrayAgresivo[3] = true;
      }else{
        this.arrayAgresivo[0] = false;
        this.arrayAgresivo[1] = false;
        this.arrayAgresivo[2] = false;
        this.arrayAgresivo[3] = false;
      }
    }
    /*
      ----------------------------------------------------------------------
      ----------------------------------------------------------------------
  
      ----------------------------------------------------------------------
      ----------------------------------------------------------------------
    */
    amigableA(){
      if(this.arrayAmigable[1] == true){
        this.arrayAmigable[0] = true;
        this.arrayAmigable[1] = false;
        this.arrayAmigable[2] = false;
        this.arrayAmigable[3] = false;
        this.arrayAmigable[4] = false;
      }
    }
  
    amigableB(){
      if(this.arrayAmigable[1] == true){
        this.arrayAmigable[0] = true;
      }else{
        this.arrayAmigable[0] = false;
      }
      if(this.arrayAmigable[2] == true){
        this.arrayAmigable[0] = true;
        this.arrayAmigable[1] = true;
        this.arrayAmigable[2] = false;
        this.arrayAmigable[3] = false;
        this.arrayAmigable[4] = false;
      }
    }
  
    amigableC(){
    if(this.arrayAmigable[2] == true){
       this.arrayAmigable[0] = true;
        this.arrayAmigable[1] = true;
      }else{
        this.arrayAmigable[0] = false;
        this.arrayAmigable[1] = false;
      }
      if(this.arrayAmigable[3] == true){
        this.arrayAmigable[0] = true;
        this.arrayAmigable[1] = true;
        this.arrayAmigable[2] = true;
        this.arrayAmigable[3] = false;
        this.arrayAmigable[4] = false;
      }
    }
  
    amigableD(){
      if(this.arrayAmigable[3] == true){
        this.arrayAmigable[0] = true;
        this.arrayAmigable[1] = true;
        this.arrayAmigable[2] = true;
      }else{
        this.arrayAmigable[0] = false;
        this.arrayAmigable[1] = false;
        this.arrayAmigable[2] = false;
      }
      if(this.arrayAmigable[4] == true){
        this.arrayAmigable[0] = true;
        this.arrayAmigable[1] = true;
        this.arrayAmigable[2] = true;
        this.arrayAmigable[3] = true;
        this.arrayAmigable[4] = false;
      }
    }
  
    amigableE(){
      if(this.arrayAmigable[4] == true){
        this.arrayAmigable[0] = true;
        this.arrayAmigable[1] = true;
        this.arrayAmigable[2] = true;
        this.arrayAmigable[3] = true;
      }else{
        this.arrayAmigable[0] = false;
        this.arrayAmigable[1] = false;
        this.arrayAmigable[2] = false;
        this.arrayAmigable[3] = false;
      }
    }
  
    /*
      ----------------------------------------------------------------------
      ----------------------------------------------------------------------
  
      ----------------------------------------------------------------------
      ----------------------------------------------------------------------
    */
    energA(){
      if(this.arrayEnergetico[1] == true){
        this.arrayEnergetico[0] = true;
        this.arrayEnergetico[1] = false;
        this.arrayEnergetico[2] = false;
        this.arrayEnergetico[3] = false;
        this.arrayEnergetico[4] = false;
      }
    }
  
    energB(){
      if(this.arrayEnergetico[1] == true){
        this.arrayEnergetico[0] = true;
      }else{
        this.arrayEnergetico[0] = false;
      }
      if(this.arrayEnergetico[2] == true){
        this.arrayEnergetico[0] = true;
        this.arrayEnergetico[1] = true;
        this.arrayEnergetico[2] = false;
        this.arrayEnergetico[3] = false;
        this.arrayEnergetico[4] = false;
      }
    }
  
    energC(){
      if(this.arrayEnergetico[2] == true){
        this.arrayEnergetico[0] = true;
        this.arrayEnergetico[1] = true;
      }else{
        this.arrayEnergetico[0] = false;
        this.arrayEnergetico[1] = false;
      }
      if(this.arrayEnergetico[3] == true){
        this.arrayEnergetico[0] = true;
        this.arrayEnergetico[1] = true;
        this.arrayEnergetico[2] = true;
        this.arrayEnergetico[3] = false;
        this.arrayEnergetico[4] = false;
      }
    }
  
    energD(){
      if(this.arrayEnergetico[3] == true){
        this.arrayEnergetico[0] = true;
        this.arrayEnergetico[1] = true;
        this.arrayEnergetico[2] = true;
      }else{
        this.arrayEnergetico[0] = false;
        this.arrayEnergetico[1] = false;
        this.arrayEnergetico[2] = false;
      }
      if(this.arrayEnergetico[4] == true){
        this.arrayEnergetico[0] = true;
        this.arrayEnergetico[1] = true;
        this.arrayEnergetico[2] = true;
        this.arrayEnergetico[3] = true;
        this.arrayEnergetico[4] = false;
      }
    }
  
    energE(){
      if(this.arrayEnergetico[4] == true){
        this.arrayEnergetico[0] = true;
        this.arrayEnergetico[1] = true;
        this.arrayEnergetico[2] = true;
        this.arrayEnergetico[3] = true;
      }else{
        this.arrayEnergetico[0] = false;
        this.arrayEnergetico[1] = false;
        this.arrayEnergetico[2] = false;
        this.arrayEnergetico[3] = false;
      }
    }
  
    /*
      ----------------------------------------------------------------------
      ----------------------------------------------------------------------
  
      ----------------------------------------------------------------------
      ----------------------------------------------------------------------
    */
    jugueA(){
      if(this.arrayJugueton[1] == true){
        this.arrayJugueton[0] = true;
        this.arrayJugueton[1] = false;
        this.arrayJugueton[2] = false;
        this.arrayJugueton[3] = false;
        this.arrayJugueton[4] = false;
      }
    }
  
    jugueB(){
      if(this.arrayJugueton[1] == true){
        this.arrayJugueton[0] = true;
      }else{
        this.arrayJugueton[0] = false;
      }
      if(this.arrayJugueton[2] == true){
        this.arrayJugueton[0] = true;
        this.arrayJugueton[1] = true;
        this.arrayJugueton[2] = false;
        this.arrayJugueton[3] = false;
        this.arrayJugueton[4] = false;
      }
    }
  
    jugueC(){
      if(this.arrayJugueton[2] == true){
        this.arrayJugueton[0] = true;
        this.arrayJugueton[1] = true;
      }else{
        this.arrayJugueton[0] = false;
        this.arrayJugueton[1] = false;
      }
      if(this.arrayJugueton[3] == true){
        this.arrayJugueton[0] = true;
        this.arrayJugueton[1] = true;
        this.arrayJugueton[2] = true;
        this.arrayJugueton[3] = false;
        this.arrayJugueton[4] = false;
      }
    }
  
    jugueD(){
      if(this.arrayJugueton[3] == true){
        this.arrayJugueton[0] = true;
        this.arrayJugueton[1] = true;
        this.arrayJugueton[2] = true;
      }else{
        this.arrayJugueton[0] = false;
        this.arrayJugueton[1] = false;
        this.arrayJugueton[2] = false;
      }
      if(this.arrayJugueton[4] == true){
        this.arrayJugueton[0] = true;
        this.arrayJugueton[1] = true;
        this.arrayJugueton[2] = true;
        this.arrayJugueton[3] = true;
        this.arrayJugueton[4] = false;
      }
    }
  
    jugueE(){
      if(this.arrayJugueton[4] == true){
        this.arrayJugueton[0] = true;
        this.arrayJugueton[1] = true;
        this.arrayJugueton[2] = true;
        this.arrayJugueton[3] = true;
      }else{
        this.arrayJugueton[0] = false;
        this.arrayJugueton[1] = false;
        this.arrayJugueton[2] = false;
        this.arrayJugueton[3] = false;
      }
    }
  
}
