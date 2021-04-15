import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dar-adopcion',
  templateUrl: './dar-adopcion.component.html',
  styleUrls: ['./dar-adopcion.component.scss']
})
export class DarAdopcionComponent implements OnInit {

  arrayAfectuoso: boolean[];
  arrayAgresivo: boolean[];
  arrayAmigable: boolean[];
  arrayEnergetico: boolean[];
  arrayJugueton: boolean[];
  
  constructor(
    
  ) { }
  
  ngOnInit(): void {
    this.arrayAfectuoso = [true, true, true, false, false];
    this.arrayAgresivo = [true, true, true, false, false];
    this.arrayAmigable = [true, true, true, false, false];
    this.arrayEnergetico = [true, true, true, false, false];
    this.arrayJugueton = [true, true, true, false, false];
  }

}
