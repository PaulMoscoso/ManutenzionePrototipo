import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCaricoViewComponent } from './home-carico-view.component';

const routes: Routes = [
  {
    path: '', component: HomeCaricoViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCaricoViewRoutingModule { }
