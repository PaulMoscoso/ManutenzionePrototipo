import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './main-nav.component';

const routes: Routes = [
  {
    path: '', component: MainNavComponent,
    children: [
      {
        path: 'carico',
        loadChildren: () => import("../../pages/home-carico/home-carico-view/home-carico-view.module").then(module => module.HomeCaricoViewModule)
      },
      {
        path: 'ordini',
        loadChildren: () => import("../../pages/lista-ordini/lista-ordini.module").then(module => module.ListaOrdiniModule)
      },
      {
        path: 'home',
        loadChildren: () => import("../../pages/home/home.module").then(module => module.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNavRoutingModule { }
