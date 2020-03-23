import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'auth', /*canActivate: [AuthGuard],*/ loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
