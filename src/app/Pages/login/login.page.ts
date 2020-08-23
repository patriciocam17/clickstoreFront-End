import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

avatarSlide = {
  slidesPerView: 3.5


}


  constructor( private us: UsuarioService ) { }

  ngOnInit() {  
  }
  ionViewDidEnter(){
    this.slides.lockSwipes( true );
  }

  login ( fLogin: NgForm ){

    console.log(fLogin.valid);
    this.us.login("hola", "123").subscribe(rest => { 
      console.log(rest);
     } )

  }

  registro ( fRegistro: NgForm ){

    console.log(fRegistro.valid);

  }
  seleccionarAvatar ( avatar ){

    this.avatars.forEach( av => av.seleccionado = false );
    avatar.seleccionado = true;

  }

  mostrarRegistro(){
this.slides.lockSwipes(false);
this.slides.slideTo(0);
this.slides.lockSwipes(true);    
  }

  mostrarLogin(){
this.slides.lockSwipes(false);
this.slides.slideTo(1);
this.slides.lockSwipes(true);
  }

}
