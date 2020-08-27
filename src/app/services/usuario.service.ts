import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';
import { promise } from 'protractor';
import { Usuario } from '../Interfaces/interfaces';





@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //URL = environment.url;

token: string = null;

  constructor( private http: HttpClient, private storage: Storage ) { 
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

     registro (usuario: Usuario){

      return new Promise(resolve=>{
        this.http.post('http://localhost:3000/usuarios/create', usuario)
        .subscribe(resp => {
          console.log(resp);

          if(resp['ok']){
            this.guardarToken( resp['token'] );
            resolve(true);
          }else{
            this.token = null;
            this.storage.clear();
            resolve(false);
          }

        })

      });

     }
     
    async guardarToken( token: string){

      this.token = token;

      await this.storage.set ('token', token);
     }
}
 