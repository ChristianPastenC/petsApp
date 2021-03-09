import { Component, OnInit } from '@angular/core';
import { PetServiceService } from '../services/pet-service.service';

@Component({
  selector: 'app-ver-index',
  templateUrl: './ver-index.component.html',
  styleUrls: ['./ver-index.component.scss']
})
export class VerIndexComponent implements OnInit {

  pets: any[];

  constructor(private firestoreService: PetServiceService) { }

  ngOnInit(): void {
  	this.firestoreService.gets().subscribe((Snapshot) => {
       this.pets = [];
       Snapshot.forEach((Data: any) => {
         console.log('Agregando');
         this.pets.push({
           id: Data.payload.doc.id,
           data: Data.payload.doc.data()
         });
       })
     });
  }
}
