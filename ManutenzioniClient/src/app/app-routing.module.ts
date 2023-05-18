import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  //{path:'', component: LoginComponent},
  {
    path: '',
    loadChildren: () => import("./pages/login/login.module").then(module => module.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import("./shared/main-nav/main-nav.module").then(module => module.MainNavModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
