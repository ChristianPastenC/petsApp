import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dar-adopcion',
  templateUrl: './dar-adopcion.component.html',
  styleUrls: ['./dar-adopcion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    this.arrayAfectuoso = [false, false, false, false, false];
    this.arrayAgresivo = [false, false, false, false, false];
    this.arrayAmigable = [false, false, false, false, false];
    this.arrayEnergetico = [false, false, false, false, false];
    this.arrayJugueton = [false, false, false, false, false];
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
