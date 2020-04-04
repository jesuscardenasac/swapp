import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SwappComponent } from './swapp/swapp.component';
import { ProfileComponent } from './profile/profile.component';
import { HomePage } from './home.page';
import { AuthGuard } from '../auth.guard';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        canActivate:[AuthGuard],
        children: [
          {
            path:'',
            redirectTo:'swapp',
            pathMatch: 'full'

          },
          {
            path: 'swapp',
            component: SwappComponent
          },
          {
            path: 'profile',
            component: ProfileComponent
          }
        ]
      }
    ])
  ],
  declarations: [SwappComponent,ProfileComponent,HomePage],
  providers:[AuthGuard]
})
export class HomePageModule {}
