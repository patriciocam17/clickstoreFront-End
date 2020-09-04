import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {RegisterComponent} from './register/register/register.component'
import { ReactiveFormsModule } from '@angular/forms';
import { SelectorAvatComponent } from './register/register/selector-avat/selector-avat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage,RegisterComponent,SelectorAvatComponent]
})
export class LoginPageModule {}
