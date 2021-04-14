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
    
    
    
  }

  parsear(fecha){
    const date = fecha.toDate().toLocaleDateString('es-ES');
    return date;
  }

  getUser(us){
    return us;
  }

}
