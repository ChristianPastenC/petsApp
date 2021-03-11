import { Component, OnInit } from '@angular/core';
import { PetServiceService } from '../services/pet-service.service';

@Component({
  selector: 'app-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrls: ['./pet-dialog.component.scss']
})
export class PetDialogComponent implements OnInit {
  id: string = "";
  petData: any = [];
  
  constructor(
    private petService: PetServiceService
  ) { }

  ngOnInit(): void {
    console.log('Llega este id ' + this.id);
    console.log('Con este name ' + this.petData.nombre);
  }

}
