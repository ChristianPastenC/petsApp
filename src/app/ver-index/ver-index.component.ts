import { Component, OnInit } from '@angular/core';
import { PetServiceService } from '../services/pet-service.service';
import { NbDialogService } from '@nebular/theme';
import { PetDialogComponent } from '../pet-dialog/pet-dialog.component';

@Component({
  selector: 'app-ver-index',
  templateUrl: './ver-index.component.html',
  styleUrls: ['./ver-index.component.scss']
})
export class VerIndexComponent implements OnInit {

  pets: any[];

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
     });
  }

  getDetails(id,petData){
    this.dialog.open(PetDialogComponent, {
      context: {
        id,petData
      },
    });
  }
}
