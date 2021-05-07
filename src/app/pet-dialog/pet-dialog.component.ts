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
  users: any[];
  user: string = "";
  userData: any = [];
  nIcons = [];
  auxFeature: any = ['afecto','agresivo','amigable','energia','jugueton'];

  constructor(
    private firestoreService: UserServiceService,
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
