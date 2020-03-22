import { Component, OnInit } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  signedIn: boolean;
  user: any;
  greeting: string;

  constructor(public amplifyService: AmplifyService, public router: Router) {
    this.amplifyService.authStateChange$.subscribe(authState => {
      this.signedIn = authState.state === 'signedIn';
      if (!authState.user) {
          this.user = null;
      } else {
          this.user = authState.user;
          this.greeting = "Helloooooooooo " + this.user.username;
          //this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {
  }

}
