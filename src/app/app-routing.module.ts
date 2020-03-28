import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard'
import {Auth1Guard} from './auth1.guard'
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' 
  },  
  { 
    path: 'home',
    component: HomePage,
    canActivate: [Auth1Guard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { 
    path: 'auth',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HomePageModule
  ],
  providers: [AuthGuard,Auth1Guard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
