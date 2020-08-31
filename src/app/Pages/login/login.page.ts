import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiserviceService } from '../../services/uiservice.service';
import { Usuario } from '../../Interfaces/interfaces';


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

loginUsuario = {

  email: 'Pato@email.cl',
  password: 'asdf1234'
}

  registroUsuario: FormGroup

constructor( private us: UsuarioService, private navCtrl: NavController, 
            private UiserviceService: UiserviceService) {            
                        }

  ngOnInit() {  
  }
  ionViewDidEnter(){
    this.slides.lockSwipes( true );
  }

  async login ( fLogin: NgForm ){

    if(fLogin.invalid){ return; }

   const exist = await this.us.login( this.loginUsuario.email, this.loginUsuario.password);

   if(exist){
     //navergar al tab

     this.navCtrl.navigateRoot('/main/tabs/tab1', {animated : true});


   }else{
     //mostrar alerta
        this.UiserviceService.alerta('Usuario o contraseña no es correcto');
   }

    console.log(fLogin.valid);
    console.log (this.loginUsuario);

    
    

    
    //this.us.login("hola", "123").subscribe(rest => { 
     //console.log(rest);
     //   } );

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
