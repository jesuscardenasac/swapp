import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify'
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(public router:Router) {
  }

  signOut() {
    Auth.signOut()
      .then(data => {
        this.router.navigate(['/auth']);  
      })
      .catch(err => console.log(err));
  }

  ngOnInit() {

  }

}
