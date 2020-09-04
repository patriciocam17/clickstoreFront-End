import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';
import { promise } from 'protractor';
//import { Usuario } from '../Interfaces/interfaces';
import { Usuario } from '../../../../../CLICKSTORE_BACKEND_USER/models/usuario';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //URL = environment.url;
usuario: string;
token: string = null;

  constructor( private http: HttpClient, private storage: Storage, private navCtrl: NavController ) { 
      }

     login(usuario, constraseña){

      usuario = {'email': usuario, 'password': constraseña}; 

      return new Promise( resolve =>{
        this.http.post( 'http://localhost:3000/usuarios/login', usuario) 
        .subscribe( resp =>{
             console.log(resp);
   
             if(resp['ok']){
               this.guardarToken( resp['token'] );
              resolve(true);
             }else{
               this.token = null;
               this.storage.clear();
               resolve(false);
             }
   
        });


       });
    
     }    
    async guardarToken( token: string){

      this.token = token;
      await this.storage.set ('token', token);
     }

      async cargarToken(){
        this.token = await this.storage.get('token') || null;
      }

     async validToken(): Promise<boolean>{

        await this.cargarToken();

        if(!this.token){
          this.navCtrl.navigateRoot('/login');
          return Promise.resolve(false);
        }

        const headers = new HttpHeaders({
            'x-token': this.token

        });


      return new Promise<boolean>(resolve =>{

        this.http.get('http://localhost:3000/usuarios/login', {headers})
          .subscribe(resp =>{

            if(resp['ok']){
              this.usuario= resp['usuario'];
              resolve(true);
            }else{
              this.navCtrl.navigateRoot('/login');
              resolve(false);
            }
          });
      });
     }
}
 