import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCaricoHeadRoutingModule } from './home-carico-head-routing.module';
import { HomeCaricoHeadComponent } from './home-carico-head.component';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeCaricoHeadComponent
  ],
  imports: [
    CommonModule,
    HomeCaricoHeadRoutingModule,
    MatButtonModule
  ],
  exports: [
    HomeCaricoHeadComponent
  ]
})
export class HomeCaricoHeadModule { }
