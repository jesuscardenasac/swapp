import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { AmplifyAngularModule,AmplifyIonicModule,AmplifyService } from 'aws-amplify-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    AmplifyAngularModule,
    AmplifyIonicModule
  ],
  providers: [
    AmplifyService
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
