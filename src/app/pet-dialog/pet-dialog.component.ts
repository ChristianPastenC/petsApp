import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrls: ['./pet-dialog.component.scss']
})
export class PetDialogComponent implements OnInit {
  id: string = "";
  petData: any = [];
  
  constructor(
    
  ) { }

  ngOnInit(): void {
    console.log('Llega este id ' + this.id);
    console.log('Con este name ' + this.petData.nombre);
  }

}
