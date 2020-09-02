import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistroService } from '../../../../clickstoreFront-End/src/app/services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

public registro: FormGroup

  constructor(private formBuilder: FormBuilder, private registroService: RegistroService) { 

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
