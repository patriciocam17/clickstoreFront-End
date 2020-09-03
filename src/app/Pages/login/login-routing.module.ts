import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {path:"registro", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
