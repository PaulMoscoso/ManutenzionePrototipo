import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaOrdiniRoutingModule } from './lista-ordini-routing.module';
import { ListaOrdiniComponent } from './lista-ordini.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaOrdiniComponent
  ],
  imports: [
    CommonModule,
    ListaOrdiniRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class ListaOrdiniModule { }
