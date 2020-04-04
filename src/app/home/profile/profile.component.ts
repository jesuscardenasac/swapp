import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  auth: any;

  constructor(public router:Router) {
    this.auth = Auth;
   }

  signOut() {
    this.auth.signOut()
      .then(data => {
        console.log(data);
        this.router.navigate(['auth']);
      })
      .catch(err => console.log(err));
  }

  ngOnInit() {}

}
