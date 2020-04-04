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

  }

  ngOnInit() {

    this.amplifyService.authStateChange$.subscribe(authState => {
      
      this.signedIn = authState.state === 'signedIn';
      console.log('changed ' + this.signedIn);
      
      if(this.signedIn){
        this.user = authState.user;
        this.router.navigate(['home']);
      }

    });

  }

}
