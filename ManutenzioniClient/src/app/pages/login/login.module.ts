import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    LoginComponent
  ],
  // exports:[
  //   LoginComponent
  // ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
})
export class LoginModule { }
