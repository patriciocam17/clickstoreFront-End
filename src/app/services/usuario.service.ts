import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';





@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL = environment.url;


  constructor( private http: HttpClient ) { 
      }

     login(usuario, constraseña){

     usuario = {'email': usuario, 'password': constraseña}  

     return this.http.post( 'http://localhost:3000/usuarios/login', usuario );    

     } 
}
 