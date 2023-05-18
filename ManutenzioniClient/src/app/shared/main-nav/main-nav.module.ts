import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavRoutingModule } from './main-nav-routing.module';
import { MainNavComponent } from './main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    MainNavRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule
  ]
})
export class MainNavModule { }
