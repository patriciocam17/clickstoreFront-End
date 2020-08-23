import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  paginaLogin = 0;

  constructor( private http: HttpClient ) { }
 
  getLogin(){

    this.paginaLogin ++;

    return this.http.get('${ URL } /usuarios/login=${ this.paginaLogin } ');
  }
}
