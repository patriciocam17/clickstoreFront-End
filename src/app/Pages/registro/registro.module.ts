import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegistroComponent } from '../registro/registro.component';


@NgModule({
  declarations: [ RegistroComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class RegistroModule { }
