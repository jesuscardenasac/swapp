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
    /*this.amplifyService.authStateChange$.subscribe(authState => {
      
      this.signedIn = authState.state === 'signedIn';
      console.log('changed ' + this.signedIn);
      
      if (!authState.user) {
          this.user = null;
      } else {
          this.user = authState.user;
      }
      
      if(this.signedIn){
        this.router.navigate(['home']);
      }

    });*/
  }

  ngOnInit() {
  }

}
