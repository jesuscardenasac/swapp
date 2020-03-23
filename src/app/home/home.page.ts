import { Component } from '@angular/core';
import { Auth } from 'aws-amplify'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  signOut() {
    console.log('data');
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

}
