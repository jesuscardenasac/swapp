import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { Auth1Guard } from '../auth1.guard';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
