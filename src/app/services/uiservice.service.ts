import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiserviceService {

  constructor( private alertControl: AlertController ) { }

  async alerta( message: string ) {
    const alert = await this.alertControl.create({  
      message,
      buttons: ['OK']
    });

    await alert.present();
  }


}
