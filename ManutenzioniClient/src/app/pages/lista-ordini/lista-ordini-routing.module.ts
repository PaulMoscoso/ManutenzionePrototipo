import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaOrdiniComponent } from './lista-ordini.component';

const routes: Routes = [
  {path: '', component: ListaOrdiniComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaOrdiniRoutingModule { }
