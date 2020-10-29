import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild( IonSlides) slides: IonSlides;

  constructor() {}

  Slide = {
    slidesPerView: 6.5

  }

  slide =[

    {
      img: 'Completos.png',
      seleccionando: true
    },
    {
      img: 'pizza.png',
      seleccionado: true
    },
    {
      img: 'Rapida.png',
      seleccionado: true

    },
    {
      img: 'coffeeandtea.png',
      seleccionado: true


    }
      
    




  ];


  Slides(){
    this.slides.slideTo(2, 5);
  }

 
}






