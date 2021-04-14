import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrls: ['./pet-dialog.component.scss']
})
export class PetDialogComponent implements OnInit {
  id: string = "";
  petData: any = [];
  userData: any = [];
  user: string = "";
  
  constructor(
    private firestoreService: UserServiceService,
  ) { }

  ngOnInit(): void {
    console.log('Llega este id ' + this.id);
    console.log('Con este name ' + this.petData.nombre);
    console.log('Usuario: '+ this.petData.adoptador)

    this.user = this.petData.adoptador;
    console.log('Confirmo usuario: '+ this.user);

    this.firestoreService.get(this.user).subscribe(res =>{
      this.userData = res;
    });
  }

  parsear(fecha){
    const date = fecha.toDate().toLocaleDateString('es-ES');
    return date;
  }

  getUser(us){
    return us;
  }

}
