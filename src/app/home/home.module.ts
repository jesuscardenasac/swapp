import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SwappComponent } from './swapp/swapp.component';
import { ProfileComponent } from './profile/profile.component';
import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'swapp',
        component: SwappComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '',
        redirectTo: '/home/swapp',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [SwappComponent,ProfileComponent,HomePage]
})
export class HomePageModule {}
