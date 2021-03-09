import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {

  pipe = new DatePipe('en-US'); 
  now = Date.now();
  myDate = this.pipe.transform(this.now, 'EEEE, MMMM d, y, h:mm a');

  constructor() { }

  ngOnInit(): void {
    console.log('Fecha' + this.myDate);
  }

}
