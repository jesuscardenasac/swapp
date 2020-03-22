import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AmplifyService }  from 'aws-amplify-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  signedIn = false;

  constructor(public router: Router, public amplifyService: AmplifyService) {
  }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.amplifyService.authStateChange$.subscribe( authState  => {
        this.signedIn = authState.state === 'signedIn';
        if(this.signedIn)
          resolve(true);
        else{
          this.router.navigate(['/auth']);
          resolve(false);
        }
      });
    });
  }

}
