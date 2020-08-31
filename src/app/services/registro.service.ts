import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Interfaces/interfaces';
import { UsuarioService  } from './usuario.service';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  token: string = null;

  constructor(private http: HttpClient, private storage: Storage) { }

  
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
