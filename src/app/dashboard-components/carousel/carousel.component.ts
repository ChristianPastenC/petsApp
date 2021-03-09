import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  public slides = [
    {src: "assets/img1.jpg"},
    {src: "assets/img2.jpg"},
    {src: "assets/img3.jpg"},
    {src: "assets/img4.jpg"},
    {src: "assets/img5.jpg"},
  ];

  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  function(){
    setInterval(this.onNextClick,1000);
  }
  
  
}
