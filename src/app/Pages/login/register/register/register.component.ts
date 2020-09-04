import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistroService } from 'src/app/services/registro.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registro : FormGroup
  public universidades
  constructor(private _registroService : RegistroService) {

    this.registro = new FormGroup({
      nombre: new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
      universidad:new FormControl(),
    })
   }

  ngOnInit() {
    this.getUniversidad()
  }

   getUniversidad(){
     this._registroService.getUniversity().subscribe(data => {
       console.log(data)
       this.universidades = data['data']
     })
   }
   
  async registrar(){
   await this._registroService.registro(this.registro.value)
  }

}
