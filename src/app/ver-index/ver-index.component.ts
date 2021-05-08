import { Component, OnInit } from '@angular/core';
import { PetServiceService } from '../services/pet-service.service';
import {UserServiceService} from '../services/user-service.service';
import { NbDialogService } from '@nebular/theme';
import { PetDialogComponent } from '../pet-dialog/pet-dialog.component';

@Component({
  selector: 'app-ver-index',
  templateUrl: './ver-index.component.html',
  styleUrls: ['./ver-index.component.scss']
})
export class VerIndexComponent implements OnInit {

  pets: any[];
  filterData: any[];

  constructor(
    private firestoreService: PetServiceService,
    private dialog: NbDialogService
  ) { }

  ngOnInit(): void {

  	this.firestoreService.gets().subscribe((Snapshot) => {
      this.pets = [];
      Snapshot.forEach((Data: any) => {
        this.pets.push({
          id: Data.payload.doc.id,
          data: Data.payload.doc.data()
        });
      })
      this.filterData = this.pets;
     });
  }

  getDetails(id,petData,user){
    this.dialog.open(PetDialogComponent, {
      context: {
        id,petData,user
      },
    });
  }

  filtroTipo($event){
    if($event == 'Gato'){
      this.filterData.sort((a,b) => {
        if(a.data.tipo < b.data.tipo) { return -1; }
        if(a.data.tipo > b.data.tipo) { return 1; }
        return 0;
      });
    }else if($event == 'Perro'){
      this.filterData.sort((a,b) => {
        if(a.data.tipo > b.data.tipo) { return -1; }
        if(a.data.tipo < b.data.tipo) { return 1; }
        return 0;
      });
    }else{
      this.filterData = this.pets;
    }  
  }

  filtroSexo($event){
    if($event == 'Hembra'){
      this.filterData.sort((a,b) => {
        if(a.data.genero < b.data.genero) { return -1; }
        if(a.data.genero > b.data.genero) { return 1; }
        return 0;
      });
    }else if($event == 'Macho'){
      this.filterData.sort((a,b) => {
        if(a.data.genero > b.data.genero) { return -1; }
        if(a.data.genero < b.data.genero) { return 1; }
        return 0;
      });
    }else{
      this.filterData = this.pets;
    }
  }


}
