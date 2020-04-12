import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NewTransPopOverComponent } from '../new-trans-pop-over/new-trans-pop-over.component';

@Component({
  selector: 'app-swapp',
  templateUrl: './swapp.component.html',
  styleUrls: ['./swapp.component.scss'],
})
export class SwappComponent implements OnInit {

  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: NewTransPopOverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {}

}
