import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor() { }

  signOut() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  ngOnInit() {}

}
