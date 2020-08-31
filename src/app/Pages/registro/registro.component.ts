import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  registro: FormGroup;

  constructor( private formBuilder: FormBuilder, private registroservice: RegistroService ) {

    this.registro = new FormGroup({
               
      nombre: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
      

    })
   }

  ngOnInit() {

  }
  registrar (){

   console.log(this.registrar);

  }

}
