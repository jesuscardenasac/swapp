import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';
import { AuthPage } from './auth.page';
import { AmplifyAngularModule, AmplifyIonicModule } from 'aws-amplify-angular';
import { AuthGuard } from '../auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    AmplifyAngularModule,
    AmplifyIonicModule
  ],
  declarations: [AuthPage],
  providers:[AuthGuard]
})
export class AuthPageModule {}
